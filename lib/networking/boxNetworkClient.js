"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxNetworkClient = exports.shouldIncludeBoxUaHeader = exports.xBoxUaHeader = exports.userAgentHeader = void 0;
exports.getRetryTimeout = getRetryTimeout;
const node_fetch_1 = __importDefault(require("node-fetch"));
const errors_1 = require("../box/errors");
const utils_1 = require("../internal/utils");
const version_1 = require("./version");
const json_1 = require("../serialization/json");
const retries_generated_js_1 = require("./retries.generated.js");
const logging_generated_js_1 = require("../internal/logging.generated.js");
exports.userAgentHeader = `Box JavaScript generated SDK v${version_1.sdkVersion} (${(0, utils_1.isBrowser)() ? navigator.userAgent : `Node ${process.version}`})`;
exports.xBoxUaHeader = constructBoxUAHeader();
const shouldIncludeBoxUaHeader = (options) => {
    return !((0, utils_1.isBrowser)() &&
        (options.responseFormat === 'binary' ||
            options.responseFormat === 'no_content'));
};
exports.shouldIncludeBoxUaHeader = shouldIncludeBoxUaHeader;
function createRequestInit(options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const { method = 'GET', headers = {}, contentType: contentTypeInput = 'application/json', data, fileStream, } = options;
        const { contentHeaders = {}, body } = yield (() => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const contentHeaders = {};
            if (options.multipartData) {
                const FormDataClass = (0, utils_1.isBrowser)() ? window.FormData : utils_1.FormData;
                const formData = new FormDataClass();
                for (const item of options.multipartData) {
                    if (item.fileStream) {
                        const buffer = yield (0, utils_1.readByteStream)(item.fileStream);
                        const blob = (0, utils_1.isBrowser)()
                            ? new Blob([new Uint8Array(buffer)])
                            : buffer;
                        contentHeaders['content-md5'] = yield (0, utils_1.calculateMD5Hash)(buffer);
                        formData.append(item.partName, blob, {
                            filename: (_a = item.fileName) !== null && _a !== void 0 ? _a : 'file',
                            contentType: (_b = item.contentType) !== null && _b !== void 0 ? _b : 'application/octet-stream',
                        });
                    }
                    else if (item.data) {
                        formData.append(item.partName, (0, json_1.sdToJson)(item.data));
                    }
                    else {
                        throw new errors_1.BoxSdkError({
                            message: 'Multipart item must have either body or fileStream',
                        });
                    }
                }
                return {
                    contentHeaders: Object.assign(Object.assign({}, (!(0, utils_1.isBrowser)() && {
                        'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
                    })), contentHeaders),
                    body: formData,
                };
            }
            contentHeaders['Content-Type'] = contentTypeInput;
            switch (contentTypeInput) {
                case 'application/json':
                case 'application/json-patch+json':
                    return { contentHeaders, body: (0, json_1.sdToJson)(data) };
                case 'application/x-www-form-urlencoded':
                    return { contentHeaders, body: (0, json_1.sdToUrlParams)(data) };
                case 'application/octet-stream':
                    if (!fileStream) {
                        throw new errors_1.BoxSdkError({
                            message: 'fileStream required for application/octet-stream content type',
                        });
                    }
                    return {
                        contentHeaders,
                        body: (0, utils_1.isBrowser)()
                            ? yield (0, utils_1.readByteStream)(fileStream)
                            : fileStream,
                    };
                default:
                    throw new errors_1.BoxSdkError({
                        message: `Unsupported content type : ${contentTypeInput}`,
                    });
            }
        }))();
        return Object.assign({ method, headers: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (method != 'GET' && contentHeaders)), headers), (options.auth && {
                Authorization: yield options.auth.retrieveAuthorizationHeader(options.networkSession),
            })), ((0, exports.shouldIncludeBoxUaHeader)(options) && {
                'User-Agent': exports.userAgentHeader,
                'X-Box-UA': exports.xBoxUaHeader,
            })), (_a = options.networkSession) === null || _a === void 0 ? void 0 : _a.additionalHeaders), body: body, signal: options.cancellationToken, agent: (_b = options.networkSession) === null || _b === void 0 ? void 0 : _b.agent }, (fileStream && (0, utils_1.isBrowser)() && { duplex: 'half' }));
    });
}
class BoxNetworkClient {
    constructor(fields) {
        Object.assign(this, fields);
    }
    fetch(options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const attemptNumber = (_a = options.attemptNumber) !== null && _a !== void 0 ? _a : 1;
            let numberOfRetriesOnException = (_b = options.numberOfRetriesOnException) !== null && _b !== void 0 ? _b : 0;
            const interceptors = (_d = (_c = options.networkSession) === null || _c === void 0 ? void 0 : _c.interceptors) !== null && _d !== void 0 ? _d : [];
            const retryStrategy = (_f = (_e = options.networkSession) === null || _e === void 0 ? void 0 : _e.retryStrategy) !== null && _f !== void 0 ? _f : new retries_generated_js_1.BoxRetryStrategy({});
            const dataSanitizer = (_h = (_g = options.networkSession) === null || _g === void 0 ? void 0 : _g.dataSanitizer) !== null && _h !== void 0 ? _h : new logging_generated_js_1.DataSanitizer({});
            const fetchOptions = interceptors.length
                ? interceptors.reduce((modifiedOptions, interceptor) => interceptor.beforeRequest(modifiedOptions), options)
                : options;
            const fileStreamBuffer = fetchOptions.fileStream
                ? yield (0, utils_1.readByteStream)(fetchOptions.fileStream)
                : void 0;
            const multipartBuffer = fetchOptions.multipartData
                ? yield (0, utils_1.multipartStreamToBuffer)(fetchOptions.multipartData)
                : void 0;
            let isExceptionCase = false;
            let fetchResponse;
            let responseBytesBuffer;
            const { params = {} } = fetchOptions;
            const requestInit = yield createRequestInit(Object.assign(Object.assign({}, fetchOptions), { fileStream: fileStreamBuffer
                    ? (0, utils_1.generateByteStreamFromBuffer)(fileStreamBuffer)
                    : void 0, multipartData: multipartBuffer
                    ? (0, utils_1.multipartBufferToStream)(multipartBuffer)
                    : void 0 }));
            try {
                const response = yield (0, node_fetch_1.default)(''.concat(fetchOptions.url, Object.keys(params).length === 0 || fetchOptions.url.endsWith('?')
                    ? ''
                    : '?', new URLSearchParams(params).toString()), Object.assign(Object.assign({}, requestInit), { redirect: (0, utils_1.isBrowser)() ? 'follow' : 'manual' }));
                const contentType = (_j = response.headers.get('content-type')) !== null && _j !== void 0 ? _j : '';
                const ignoreResponseBody = fetchOptions.followRedirects === false;
                let data;
                let content = (0, utils_1.generateByteStreamFromBuffer)(new Uint8Array().buffer);
                if (!ignoreResponseBody) {
                    if (options.responseFormat === 'binary') {
                        content = response.body;
                        responseBytesBuffer = new Uint8Array();
                    }
                    else if (options.responseFormat === 'json') {
                        responseBytesBuffer = yield response.arrayBuffer();
                        const text = new TextDecoder().decode(responseBytesBuffer);
                        if (contentType.includes('application/json')) {
                            data = (0, json_1.jsonToSerializedData)(text);
                        }
                        content = (0, utils_1.generateByteStreamFromBuffer)(responseBytesBuffer);
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
            const shouldRetry = yield retryStrategy.shouldRetry(fetchOptions, fetchResponse, attemptForRetry);
            if (shouldRetry) {
                const retryTimeout = retryStrategy.retryAfter(fetchOptions, fetchResponse, attemptForRetry);
                yield new Promise((resolve) => setTimeout(resolve, retryTimeout));
                return this.fetch(Object.assign(Object.assign({}, options), { attemptNumber: attemptNumber + 1, numberOfRetriesOnException: numberOfRetriesOnException, fileStream: fileStreamBuffer
                        ? (0, utils_1.generateByteStreamFromBuffer)(fileStreamBuffer)
                        : void 0, multipartData: multipartBuffer
                        ? (0, utils_1.multipartBufferToStream)(multipartBuffer)
                        : void 0 }));
            }
            if (fetchResponse.status >= 300 &&
                fetchResponse.status < 400 &&
                fetchOptions.followRedirects !== false) {
                if (!fetchResponse.headers['location']) {
                    throw new errors_1.BoxSdkError({
                        message: `Unable to follow redirect for ${fetchOptions.url}`,
                    });
                }
                const sameOrigin = new URL(fetchResponse.headers['location']).origin ===
                    new URL(fetchOptions.url).origin;
                return this.fetch(Object.assign(Object.assign({}, options), { params: undefined, auth: sameOrigin ? fetchOptions.auth : undefined, url: fetchResponse.headers['location'] }));
            }
            if (fetchResponse.status >= 200 && fetchResponse.status < 400) {
                return fetchResponse;
            }
            const [code, contextInfo, requestId, helpUrl, message] = (0, json_1.sdIsMap)(fetchResponse.data)
                ? [
                    (0, json_1.sdToJson)(fetchResponse.data['code']),
                    (0, json_1.sdIsMap)(fetchResponse.data['context_info'])
                        ? fetchResponse.data['context_info']
                        : undefined,
                    (0, json_1.sdToJson)(fetchResponse.data['request_id']),
                    (0, json_1.sdToJson)(fetchResponse.data['help_url']),
                    (0, json_1.sdToJson)(fetchResponse.data['message']),
                ]
                : [];
            throw new errors_1.BoxApiError({
                message: `${fetchResponse.status} ${message}; Request ID: ${requestId}`,
                timestamp: `${Date.now()}`,
                requestInfo: {
                    method: requestInit.method,
                    url: fetchOptions.url,
                    queryParams: params,
                    headers: (_k = requestInit.headers) !== null && _k !== void 0 ? _k : {},
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
        });
    }
}
exports.BoxNetworkClient = BoxNetworkClient;
function constructBoxUAHeader() {
    const analyticsIdentifiers = {
        agent: `box-javascript-generated-sdk/${version_1.sdkVersion}`,
        env: (0, utils_1.isBrowser)()
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
function getRetryTimeout(numRetries, baseInterval) {
    var minRandomization = 1 - RETRY_RANDOMIZATION_FACTOR;
    var maxRandomization = 1 + RETRY_RANDOMIZATION_FACTOR;
    var randomization = Math.random() * (maxRandomization - minRandomization) + minRandomization;
    var exponential = Math.pow(2, numRetries - 1);
    return Math.ceil(exponential * baseInterval * randomization);
}
//# sourceMappingURL=boxNetworkClient.js.map