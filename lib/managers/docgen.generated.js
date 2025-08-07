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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocgenManager = exports.CreateDocgenBatchV2025R0Headers = exports.GetDocgenBatchJobByIdV2025R0Headers = exports.GetDocgenJobsV2025R0Headers = exports.GetDocgenJobByIdV2025R0Headers = exports.CreateDocgenBatchV2025R0Optionals = exports.GetDocgenBatchJobByIdV2025R0Optionals = exports.GetDocgenJobByIdV2025R0Optionals = void 0;
const docGenJobV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenJobV2025R0.generated.js");
const docGenJobsFullV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenJobsFullV2025R0.generated.js");
const docGenJobsV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenJobsV2025R0.generated.js");
const docGenBatchBaseV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenBatchBaseV2025R0.generated.js");
const docGenBatchCreateRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenBatchCreateRequestV2025R0.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class GetDocgenJobByIdV2025R0Optionals {
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
exports.GetDocgenJobByIdV2025R0Optionals = GetDocgenJobByIdV2025R0Optionals;
class GetDocgenBatchJobByIdV2025R0Optionals {
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
exports.GetDocgenBatchJobByIdV2025R0Optionals = GetDocgenBatchJobByIdV2025R0Optionals;
class CreateDocgenBatchV2025R0Optionals {
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
exports.CreateDocgenBatchV2025R0Optionals = CreateDocgenBatchV2025R0Optionals;
class GetDocgenJobByIdV2025R0Headers {
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
exports.GetDocgenJobByIdV2025R0Headers = GetDocgenJobByIdV2025R0Headers;
class GetDocgenJobsV2025R0Headers {
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
exports.GetDocgenJobsV2025R0Headers = GetDocgenJobsV2025R0Headers;
class GetDocgenBatchJobByIdV2025R0Headers {
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
exports.GetDocgenBatchJobByIdV2025R0Headers = GetDocgenBatchJobByIdV2025R0Headers;
class CreateDocgenBatchV2025R0Headers {
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
exports.CreateDocgenBatchV2025R0Headers = CreateDocgenBatchV2025R0Headers;
class DocgenManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    getDocgenJobByIdV2025R0(jobId_1) {
        return __awaiter(this, arguments, void 0, function* (jobId, optionalsInput = {}) {
            const optionals = new GetDocgenJobByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_jobs/', (0, utils_js_2.toString)(jobId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, docGenJobV2025R0_generated_js_1.deserializeDocGenJobV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Lists all Box Doc Gen jobs for a user.
     * @param {GetDocgenJobsV2025R0QueryParams} queryParams Query parameters of getDocgenJobsV2025R0 method
     * @param {GetDocgenJobsV2025R0HeadersInput} headersInput Headers of getDocgenJobsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<DocGenJobsFullV2025R0>}
     */
    getDocgenJobsV2025R0() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetDocgenJobsV2025R0Headers({}), cancellationToken) {
            const headers = new GetDocgenJobsV2025R0Headers({
                boxVersion: headersInput.boxVersion,
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_jobs'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, docGenJobsFullV2025R0_generated_js_1.deserializeDocGenJobsFullV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Lists Box Doc Gen jobs in a batch.
       * @param {string} batchId Box Doc Gen batch ID.
      Example: 123
       * @param {GetDocgenBatchJobByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenJobsV2025R0>}
       */
    getDocgenBatchJobByIdV2025R0(batchId_1) {
        return __awaiter(this, arguments, void 0, function* (batchId, optionalsInput = {}) {
            const optionals = new GetDocgenBatchJobByIdV2025R0Optionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_batch_jobs/', (0, utils_js_2.toString)(batchId)),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, docGenJobsV2025R0_generated_js_1.deserializeDocGenJobsV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Generates a document using a Box Doc Gen template.
     * @param {DocGenBatchCreateRequestV2025R0} requestBody Request body of createDocgenBatchV2025R0 method
     * @param {CreateDocgenBatchV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<DocGenBatchBaseV2025R0>}
     */
    createDocgenBatchV2025R0(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateDocgenBatchV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_batches'),
                method: 'POST',
                headers: headersMap,
                data: (0, docGenBatchCreateRequestV2025R0_generated_js_1.serializeDocGenBatchCreateRequestV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, docGenBatchBaseV2025R0_generated_js_1.deserializeDocGenBatchBaseV2025R0)(response.data)), { rawData: response.data });
        });
    }
}
exports.DocgenManager = DocgenManager;
//# sourceMappingURL=docgen.generated.js.map