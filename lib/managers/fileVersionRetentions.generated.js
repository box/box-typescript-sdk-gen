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
exports.FileVersionRetentionsManager = exports.GetFileVersionRetentionByIdHeaders = exports.GetFileVersionRetentionsHeaders = exports.GetFileVersionRetentionByIdOptionals = void 0;
exports.serializeGetFileVersionRetentionsQueryParamsDispositionActionField = serializeGetFileVersionRetentionsQueryParamsDispositionActionField;
exports.deserializeGetFileVersionRetentionsQueryParamsDispositionActionField = deserializeGetFileVersionRetentionsQueryParamsDispositionActionField;
const fileVersionRetentions_generated_js_1 = require("../schemas/fileVersionRetentions.generated.js");
const fileVersionRetention_generated_js_1 = require("../schemas/fileVersionRetention.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
class GetFileVersionRetentionByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileVersionRetentionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileVersionRetentionByIdOptionals = GetFileVersionRetentionByIdOptionals;
class GetFileVersionRetentionsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionRetentionsHeaders = GetFileVersionRetentionsHeaders;
class GetFileVersionRetentionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionRetentionByIdHeaders = GetFileVersionRetentionByIdHeaders;
class FileVersionRetentionsManager {
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
     * Retrieves all file version retentions for the given enterprise.
     *
     * **Note**:
     * File retention API is now **deprecated**.
     * To get information about files and file versions under retention,
     * see [files under retention](e://get-retention-policy-assignments-id-files-under-retention) or [file versions under retention](e://get-retention-policy-assignments-id-file-versions-under-retention) endpoints.
     * @param {GetFileVersionRetentionsQueryParams} queryParams Query parameters of getFileVersionRetentions method
     * @param {GetFileVersionRetentionsHeadersInput} headersInput Headers of getFileVersionRetentions method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<FileVersionRetentions>}
     */
    getFileVersionRetentions() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetFileVersionRetentionsHeaders({}), cancellationToken) {
            const headers = new GetFileVersionRetentionsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['file_id']: (0, utils_js_2.toString)(queryParams.fileId),
                ['file_version_id']: (0, utils_js_2.toString)(queryParams.fileVersionId),
                ['policy_id']: (0, utils_js_2.toString)(queryParams.policyId),
                ['disposition_action']: (0, utils_js_2.toString)(queryParams.dispositionAction),
                ['disposition_before']: (0, utils_js_2.toString)(queryParams.dispositionBefore),
                ['disposition_after']: (0, utils_js_2.toString)(queryParams.dispositionAfter),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_retentions'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, fileVersionRetentions_generated_js_1.deserializeFileVersionRetentions)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Returns information about a file version retention.
       *
       * **Note**:
       * File retention API is now **deprecated**.
       * To get information about files and file versions under retention,
       * see [files under retention](e://get-retention-policy-assignments-id-files-under-retention) or [file versions under retention](e://get-retention-policy-assignments-id-file-versions-under-retention) endpoints.
       * @param {string} fileVersionRetentionId The ID of the file version retention.
      Example: "3424234"
       * @param {GetFileVersionRetentionByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionRetention>}
       */
    getFileVersionRetentionById(fileVersionRetentionId_1) {
        return __awaiter(this, arguments, void 0, function* (fileVersionRetentionId, optionalsInput = {}) {
            const optionals = new GetFileVersionRetentionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_retentions/', (0, utils_js_2.toString)(fileVersionRetentionId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, fileVersionRetention_generated_js_1.deserializeFileVersionRetention)(response.data)), { rawData: response.data });
        });
    }
}
exports.FileVersionRetentionsManager = FileVersionRetentionsManager;
function serializeGetFileVersionRetentionsQueryParamsDispositionActionField(val) {
    return val;
}
function deserializeGetFileVersionRetentionsQueryParamsDispositionActionField(val) {
    if (val == 'permanently_delete') {
        return val;
    }
    if (val == 'remove_retention') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetFileVersionRetentionsQueryParamsDispositionActionField",
    });
}
//# sourceMappingURL=fileVersionRetentions.generated.js.map