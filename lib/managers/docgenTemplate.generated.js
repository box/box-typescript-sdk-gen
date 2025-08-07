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
exports.DocgenTemplateManager = exports.GetDocgenTemplateJobByIdV2025R0Headers = exports.GetDocgenTemplateTagsV2025R0Headers = exports.GetDocgenTemplateByIdV2025R0Headers = exports.DeleteDocgenTemplateByIdV2025R0Headers = exports.GetDocgenTemplatesV2025R0Headers = exports.CreateDocgenTemplateV2025R0Headers = exports.GetDocgenTemplateJobByIdV2025R0Optionals = exports.GetDocgenTemplateTagsV2025R0Optionals = exports.GetDocgenTemplateByIdV2025R0Optionals = exports.DeleteDocgenTemplateByIdV2025R0Optionals = exports.CreateDocgenTemplateV2025R0Optionals = void 0;
const docGenTemplateBaseV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenTemplateBaseV2025R0.generated.js");
const docGenTemplateCreateRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenTemplateCreateRequestV2025R0.generated.js");
const docGenTemplatesV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenTemplatesV2025R0.generated.js");
const docGenTemplateV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenTemplateV2025R0.generated.js");
const docGenTagsV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenTagsV2025R0.generated.js");
const docGenJobsV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenJobsV2025R0.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class CreateDocgenTemplateV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateDocgenTemplateV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateDocgenTemplateV2025R0Optionals = CreateDocgenTemplateV2025R0Optionals;
class DeleteDocgenTemplateByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteDocgenTemplateByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteDocgenTemplateByIdV2025R0Optionals = DeleteDocgenTemplateByIdV2025R0Optionals;
class GetDocgenTemplateByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetDocgenTemplateByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetDocgenTemplateByIdV2025R0Optionals = GetDocgenTemplateByIdV2025R0Optionals;
class GetDocgenTemplateTagsV2025R0Optionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetDocgenTemplateTagsV2025R0Headers({});
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
exports.GetDocgenTemplateTagsV2025R0Optionals = GetDocgenTemplateTagsV2025R0Optionals;
class GetDocgenTemplateJobByIdV2025R0Optionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetDocgenTemplateJobByIdV2025R0Headers({});
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
exports.GetDocgenTemplateJobByIdV2025R0Optionals = GetDocgenTemplateJobByIdV2025R0Optionals;
class CreateDocgenTemplateV2025R0Headers {
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
exports.CreateDocgenTemplateV2025R0Headers = CreateDocgenTemplateV2025R0Headers;
class GetDocgenTemplatesV2025R0Headers {
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
exports.GetDocgenTemplatesV2025R0Headers = GetDocgenTemplatesV2025R0Headers;
class DeleteDocgenTemplateByIdV2025R0Headers {
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
exports.DeleteDocgenTemplateByIdV2025R0Headers = DeleteDocgenTemplateByIdV2025R0Headers;
class GetDocgenTemplateByIdV2025R0Headers {
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
exports.GetDocgenTemplateByIdV2025R0Headers = GetDocgenTemplateByIdV2025R0Headers;
class GetDocgenTemplateTagsV2025R0Headers {
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
exports.GetDocgenTemplateTagsV2025R0Headers = GetDocgenTemplateTagsV2025R0Headers;
class GetDocgenTemplateJobByIdV2025R0Headers {
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
exports.GetDocgenTemplateJobByIdV2025R0Headers = GetDocgenTemplateJobByIdV2025R0Headers;
class DocgenTemplateManager {
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
     * Marks a file as a Box Doc Gen template.
     * @param {DocGenTemplateCreateRequestV2025R0} requestBody Request body of createDocgenTemplateV2025R0 method
     * @param {CreateDocgenTemplateV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<DocGenTemplateBaseV2025R0>}
     */
    createDocgenTemplateV2025R0(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateDocgenTemplateV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates'),
                method: 'POST',
                headers: headersMap,
                data: (0, docGenTemplateCreateRequestV2025R0_generated_js_1.serializeDocGenTemplateCreateRequestV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, docGenTemplateBaseV2025R0_generated_js_1.deserializeDocGenTemplateBaseV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Lists Box Doc Gen templates on which the user is a collaborator.
     * @param {GetDocgenTemplatesV2025R0QueryParams} queryParams Query parameters of getDocgenTemplatesV2025R0 method
     * @param {GetDocgenTemplatesV2025R0HeadersInput} headersInput Headers of getDocgenTemplatesV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<DocGenTemplatesV2025R0>}
     */
    getDocgenTemplatesV2025R0() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetDocgenTemplatesV2025R0Headers({}), cancellationToken) {
            const headers = new GetDocgenTemplatesV2025R0Headers({
                boxVersion: headersInput.boxVersion,
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, docGenTemplatesV2025R0_generated_js_1.deserializeDocGenTemplatesV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Unmarks file as Box Doc Gen template.
       * @param {string} templateId ID of the file which will no longer be marked as a Box Doc Gen template.
      Example: "123"
       * @param {DeleteDocgenTemplateByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteDocgenTemplateByIdV2025R0(templateId_1) {
        return __awaiter(this, arguments, void 0, function* (templateId, optionalsInput = {}) {
            const optionals = new DeleteDocgenTemplateByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates/', (0, utils_js_2.toString)(templateId)),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
    /**
       * Lists details of a specific Box Doc Gen template.
       * @param {string} templateId The ID of a Box Doc Gen template.
      Example: 123
       * @param {GetDocgenTemplateByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenTemplateV2025R0>}
       */
    getDocgenTemplateByIdV2025R0(templateId_1) {
        return __awaiter(this, arguments, void 0, function* (templateId, optionalsInput = {}) {
            const optionals = new GetDocgenTemplateByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates/', (0, utils_js_2.toString)(templateId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, docGenTemplateV2025R0_generated_js_1.deserializeDocGenTemplateV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Lists all tags in a Box Doc Gen template.
       * @param {string} templateId ID of template.
      Example: 123
       * @param {GetDocgenTemplateTagsV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenTagsV2025R0>}
       */
    getDocgenTemplateTagsV2025R0(templateId_1) {
        return __awaiter(this, arguments, void 0, function* (templateId, optionalsInput = {}) {
            const optionals = new GetDocgenTemplateTagsV2025R0Optionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['template_version_id']: (0, utils_js_2.toString)(queryParams.templateVersionId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates/', (0, utils_js_2.toString)(templateId), '/tags'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, docGenTagsV2025R0_generated_js_1.deserializeDocGenTagsV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Lists the users jobs which use this template.
       * @param {string} templateId Id of template to fetch jobs for.
      Example: 123
       * @param {GetDocgenTemplateJobByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenJobsV2025R0>}
       */
    getDocgenTemplateJobByIdV2025R0(templateId_1) {
        return __awaiter(this, arguments, void 0, function* (templateId, optionalsInput = {}) {
            const optionals = new GetDocgenTemplateJobByIdV2025R0Optionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_template_jobs/', (0, utils_js_2.toString)(templateId)),
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
}
exports.DocgenTemplateManager = DocgenTemplateManager;
//# sourceMappingURL=docgenTemplate.generated.js.map