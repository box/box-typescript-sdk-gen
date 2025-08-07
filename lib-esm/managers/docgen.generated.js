import { deserializeDocGenJobV2025R0 } from '../schemas/v2025R0/docGenJobV2025R0.generated.js';
import { deserializeDocGenJobsFullV2025R0 } from '../schemas/v2025R0/docGenJobsFullV2025R0.generated.js';
import { deserializeDocGenJobsV2025R0 } from '../schemas/v2025R0/docGenJobsV2025R0.generated.js';
import { deserializeDocGenBatchBaseV2025R0 } from '../schemas/v2025R0/docGenBatchBaseV2025R0.generated.js';
import { serializeDocGenBatchCreateRequestV2025R0 } from '../schemas/v2025R0/docGenBatchCreateRequestV2025R0.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetDocgenJobByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetDocgenJobByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetDocgenBatchJobByIdV2025R0Optionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetDocgenBatchJobByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateDocgenBatchV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateDocgenBatchV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetDocgenJobByIdV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetDocgenJobsV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetDocgenBatchJobByIdV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateDocgenBatchV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DocgenManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
       * Get details of the Box Doc Gen job.
       * @param {string} jobId Box Doc Gen job ID.
      Example: 123
       * @param {GetDocgenJobByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenJobV2025R0>}
       */
    async getDocgenJobByIdV2025R0(jobId, optionalsInput = {}) {
        const optionals = new GetDocgenJobByIdV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_jobs/', toString(jobId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDocGenJobV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
     * Lists all Box Doc Gen jobs for a user.
     * @param {GetDocgenJobsV2025R0QueryParams} queryParams Query parameters of getDocgenJobsV2025R0 method
     * @param {GetDocgenJobsV2025R0HeadersInput} headersInput Headers of getDocgenJobsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<DocGenJobsFullV2025R0>}
     */
    async getDocgenJobsV2025R0(queryParams = {}, headersInput = new GetDocgenJobsV2025R0Headers({}), cancellationToken) {
        const headers = new GetDocgenJobsV2025R0Headers({
            boxVersion: headersInput.boxVersion,
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_jobs'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDocGenJobsFullV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Lists Box Doc Gen jobs in a batch.
       * @param {string} batchId Box Doc Gen batch ID.
      Example: 123
       * @param {GetDocgenBatchJobByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenJobsV2025R0>}
       */
    async getDocgenBatchJobByIdV2025R0(batchId, optionalsInput = {}) {
        const optionals = new GetDocgenBatchJobByIdV2025R0Optionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_batch_jobs/', toString(batchId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDocGenJobsV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
     * Generates a document using a Box Doc Gen template.
     * @param {DocGenBatchCreateRequestV2025R0} requestBody Request body of createDocgenBatchV2025R0 method
     * @param {CreateDocgenBatchV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<DocGenBatchBaseV2025R0>}
     */
    async createDocgenBatchV2025R0(requestBody, optionalsInput = {}) {
        const optionals = new CreateDocgenBatchV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_batches'),
            method: 'POST',
            headers: headersMap,
            data: serializeDocGenBatchCreateRequestV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDocGenBatchBaseV2025R0(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=docgen.generated.js.map