import nodeFetch from 'node-fetch';
import { BoxApiError, BoxSdkError } from '../box/errors';
import { FormData, generateByteStreamFromBuffer, isBrowser, readByteStream, calculateMD5Hash, multipartStreamToBuffer, multipartBufferToStream, } from '../internal/utils';
import { sdkVersion } from './version';
import { jsonToSerializedData, sdIsMap, sdToJson, sdToUrlParams, } from '../serialization/json';
import { BoxRetryStrategy } from './retries.generated.js';
import { DataSanitizer } from '../internal/logging.generated.js';
export const userAgentHeader = `Box JavaScript generated SDK v${sdkVersion} (${isBrowser() ? navigator.userAgent : `Node ${process.version}`})`;
export const xBoxUaHeader = constructBoxUAHeader();
export const shouldIncludeBoxUaHeader = (options) => {
    return !(isBrowser() &&
        (options.responseFormat === 'binary' ||
            options.responseFormat === 'no_content'));
};
async function createRequestInit(options) {
    const { method = 'GET', headers = {}, contentType: contentTypeInput = 'application/json', data, fileStream, } = options;
    const { contentHeaders = {}, body } = await (async () => {
        const contentHeaders = {};
        if (options.multipartData) {
            const FormDataClass = isBrowser() ? window.FormData : FormData;
            const formData = new FormDataClass();
            for (const item of options.multipartData) {
                if (item.fileStream) {
                    const buffer = await readByteStream(item.fileStream);
                    const blob = isBrowser()
                        ? new Blob([new Uint8Array(buffer)])
                        : buffer;
                    contentHeaders['content-md5'] = await calculateMD5Hash(buffer);
                    formData.append(item.partName, blob, {
                        filename: item.fileName ?? 'file',
                        contentType: item.contentType ?? 'application/octet-stream',
                    });
                }
                else if (item.data) {
                    formData.append(item.partName, sdToJson(item.data));
                }
                else {
                    throw new BoxSdkError({
                        message: 'Multipart item must have either body or fileStream',
                    });
                }
            }
            return {
                contentHeaders: {
                    ...(!isBrowser() && {
                        'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
                    }),
                    ...contentHeaders,
                },
                body: formData,
            };
        }
        contentHeaders['Content-Type'] = contentTypeInput;
        switch (contentTypeInput) {
            case 'application/json':
            case 'application/json-patch+json':
                return { contentHeaders, body: sdToJson(data) };
            case 'application/x-www-form-urlencoded':
                return { contentHeaders, body: sdToUrlParams(data) };
            case 'application/octet-stream':
                if (!fileStream) {
                    throw new BoxSdkError({
                        message: 'fileStream required for application/octet-stream content type',
                    });
                }
                return {
                    contentHeaders,
                    body: isBrowser()
                        ? await readByteStream(fileStream)
                        : fileStream,
                };
            default:
                throw new BoxSdkError({
                    message: `Unsupported content type : ${contentTypeInput}`,
                });
        }
    })();
    return {
        method,
        headers: {
            // Only set content type if it is not a GET request
            ...(method != 'GET' && contentHeaders),
            ...headers,
            ...(options.auth && {
                Authorization: await options.auth.retrieveAuthorizationHeader(options.networkSession),
            }),
            ...(shouldIncludeBoxUaHeader(options) && {
                'User-Agent': userAgentHeader,
                'X-Box-UA': xBoxUaHeader,
            }),
            // Additional headers will override the default headers
            ...options.networkSession?.additionalHeaders,
        },
        body: body,
        signal: options.cancellationToken,
        agent: options.networkSession?.agent,
        ...(fileStream && isBrowser() && { duplex: 'half' }),
    };
}
export class BoxNetworkClient {
    constructor(fields) {
        Object.assign(this, fields);
    }
    async fetch(options) {
        const attemptNumber = options.attemptNumber ?? 1;
        let numberOfRetriesOnException = options.numberOfRetriesOnException ?? 0;
        const interceptors = options.networkSession?.interceptors ?? [];
        const retryStrategy = options.networkSession?.retryStrategy ?? new BoxRetryStrategy({});
        const dataSanitizer = options.networkSession?.dataSanitizer ?? new DataSanitizer({});
        const fetchOptions = interceptors.length
            ? interceptors.reduce((modifiedOptions, interceptor) => interceptor.beforeRequest(modifiedOptions), options)
            : options;
        const fileStreamBuffer = fetchOptions.fileStream
            ? await readByteStream(fetchOptions.fileStream)
            : void 0;
        const multipartBuffer = fetchOptions.multipartData
            ? await multipartStreamToBuffer(fetchOptions.multipartData)
            : void 0;
        let isExceptionCase = false;
        let fetchResponse;
        let responseBytesBuffer;
        const { params = {} } = fetchOptions;
        const requestInit = await createRequestInit({
            ...fetchOptions,
            fileStream: fileStreamBuffer
                ? generateByteStreamFromBuffer(fileStreamBuffer)
                : void 0,
            multipartData: multipartBuffer
                ? multipartBufferToStream(multipartBuffer)
                : void 0,
        });
        try {
            const response = await nodeFetch(''.concat(fetchOptions.url, Object.keys(params).length === 0 || fetchOptions.url.endsWith('?')
                ? ''
                : '?', new URLSearchParams(params).toString()), { ...requestInit, redirect: isBrowser() ? 'follow' : 'manual' });
            const contentType = response.headers.get('content-type') ?? '';
            const ignoreResponseBody = fetchOptions.followRedirects === false;
            let data;
            let content = generateByteStreamFromBuffer(new Uint8Array().buffer);
            if (!ignoreResponseBody) {
                if (options.responseFormat === 'binary') {
                    content = response.body;
                    responseBytesBuffer = new Uint8Array();
                }
                else if (options.responseFormat === 'json') {
                    responseBytesBuffer = await response.arrayBuffer();
                    const text = new TextDecoder().decode(responseBytesBuffer);
                    if (contentType.includes('application/json')) {
                        data = jsonToSerializedData(text);
                    }
                    content = generateByteStreamFromBuffer(responseBytesBuffer);
                }
            }
            fetchResponse = {
                url: response.url,
                status: response.status,
                data,
                content,
                headers: Object.fromEntries(Array.from(response.headers.entries())),
            };
            if (interceptors.length) {
                fetchResponse = interceptors.reduce((modifiedResponse, interceptor) => interceptor.afterRequest(modifiedResponse), fetchResponse);
            }
        }
        catch (error) {
            isExceptionCase = true;
            numberOfRetriesOnException++;
            fetchResponse = {
                status: 0,
                headers: {},
            };
        }
        const attemptForRetry = isExceptionCase
            ? numberOfRetriesOnException
            : attemptNumber;
        const shouldRetry = await retryStrategy.shouldRetry(fetchOptions, fetchResponse, attemptForRetry);
        if (shouldRetry) {
            const retryTimeout = retryStrategy.retryAfter(fetchOptions, fetchResponse, attemptForRetry);
            await new Promise((resolve) => setTimeout(resolve, retryTimeout));
            return this.fetch({
                ...options,
                attemptNumber: attemptNumber + 1,
                numberOfRetriesOnException: numberOfRetriesOnException,
                fileStream: fileStreamBuffer
                    ? generateByteStreamFromBuffer(fileStreamBuffer)
                    : void 0,
                multipartData: multipartBuffer
                    ? multipartBufferToStream(multipartBuffer)
                    : void 0,
            });
        }
        if (fetchResponse.status >= 300 &&
            fetchResponse.status < 400 &&
            fetchOptions.followRedirects !== false) {
            if (!fetchResponse.headers['location']) {
                throw new BoxSdkError({
                    message: `Unable to follow redirect for ${fetchOptions.url}`,
                });
            }
            const sameOrigin = new URL(fetchResponse.headers['location']).origin ===
                new URL(fetchOptions.url).origin;
            return this.fetch({
                ...options,
                params: undefined,
                auth: sameOrigin ? fetchOptions.auth : undefined,
                url: fetchResponse.headers['location'],
            });
        }
        if (fetchResponse.status >= 200 && fetchResponse.status < 400) {
            return fetchResponse;
        }
        const [code, contextInfo, requestId, helpUrl, message] = sdIsMap(fetchResponse.data)
            ? [
                sdToJson(fetchResponse.data['code']),
                sdIsMap(fetchResponse.data['context_info'])
                    ? fetchResponse.data['context_info']
                    : undefined,
                sdToJson(fetchResponse.data['request_id']),
                sdToJson(fetchResponse.data['help_url']),
                sdToJson(fetchResponse.data['message']),
            ]
            : [];
        throw new BoxApiError({
            message: `${fetchResponse.status} ${message}; Request ID: ${requestId}`,
            timestamp: `${Date.now()}`,
            requestInfo: {
                method: requestInit.method,
                url: fetchOptions.url,
                queryParams: params,
                headers: requestInit.headers ?? {},
                body: typeof requestInit.body === 'string' ? requestInit.body : undefined,
            },
            responseInfo: {
                statusCode: fetchResponse.status,
                headers: fetchResponse.headers,
                body: fetchResponse.data,
                rawBody: new TextDecoder().decode(responseBytesBuffer),
                code: code,
                contextInfo: contextInfo,
                requestId: requestId,
                helpUrl: helpUrl,
            },
            dataSanitizer: dataSanitizer,
        });
    }
}
function constructBoxUAHeader() {
    const analyticsIdentifiers = {
        agent: `box-javascript-generated-sdk/${sdkVersion}`,
        env: isBrowser()
            ? navigator.userAgent
            : `Node/${process.version.replace('v', '')}`,
    };
    return Object.keys(analyticsIdentifiers)
        .map((k) => `${k}=${analyticsIdentifiers[k]}`)
        .join('; ');
}
// Retry intervals are between 50% and 150% of the exponentially increasing base amount
const RETRY_RANDOMIZATION_FACTOR = 0.5;
/**
 * Calculate the exponential backoff time with randomized jitter
 * @param {int} numRetries Which retry number this one will be
 * @param {int} baseInterval The base retry interval set in config
 * @returns {int} The number of milliseconds after which to retry
 */
export function getRetryTimeout(numRetries, baseInterval) {
    var minRandomization = 1 - RETRY_RANDOMIZATION_FACTOR;
    var maxRandomization = 1 + RETRY_RANDOMIZATION_FACTOR;
    var randomization = Math.random() * (maxRandomization - minRandomization) + minRandomization;
    var exponential = Math.pow(2, numRetries - 1);
    return Math.ceil(exponential * baseInterval * randomization);
}
//# sourceMappingURL=boxNetworkClient.js.map