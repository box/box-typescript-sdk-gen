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
exports.FileVersionLegalHoldsManager = exports.GetFileVersionLegalHoldsHeaders = exports.GetFileVersionLegalHoldByIdHeaders = exports.GetFileVersionLegalHoldsOptionals = exports.GetFileVersionLegalHoldByIdOptionals = void 0;
const fileVersionLegalHold_generated_js_1 = require("../schemas/fileVersionLegalHold.generated.js");
const fileVersionLegalHolds_generated_js_1 = require("../schemas/fileVersionLegalHolds.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class GetFileVersionLegalHoldByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileVersionLegalHoldByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileVersionLegalHoldByIdOptionals = GetFileVersionLegalHoldByIdOptionals;
class GetFileVersionLegalHoldsOptionals {
    constructor(fields) {
        this.headers = new GetFileVersionLegalHoldsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileVersionLegalHoldsOptionals = GetFileVersionLegalHoldsOptionals;
class GetFileVersionLegalHoldByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionLegalHoldByIdHeaders = GetFileVersionLegalHoldByIdHeaders;
class GetFileVersionLegalHoldsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileVersionLegalHoldsHeaders = GetFileVersionLegalHoldsHeaders;
class FileVersionLegalHoldsManager {
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
       * Retrieves information about the legal hold policies
       * assigned to a file version.
       * @param {string} fileVersionLegalHoldId The ID of the file version legal hold.
      Example: "2348213"
       * @param {GetFileVersionLegalHoldByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionLegalHold>}
       */
    getFileVersionLegalHoldById(fileVersionLegalHoldId_1) {
        return __awaiter(this, arguments, void 0, function* (fileVersionLegalHoldId, optionalsInput = {}) {
            const optionals = new GetFileVersionLegalHoldByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_legal_holds/', (0, utils_js_2.toString)(fileVersionLegalHoldId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, fileVersionLegalHold_generated_js_1.deserializeFileVersionLegalHold)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Get a list of file versions on legal hold for a legal hold
     * assignment.
     *
     * Due to ongoing re-architecture efforts this API might not return all file
     * versions for this policy ID.
     *
     * Instead, this API will only return file versions held in the legacy
     * architecture. Two new endpoints will available to request any file versions
     * held in the new architecture.
     *
     * For file versions held in the new architecture, the `GET
     * /legal_hold_policy_assignments/:id/file_versions_on_hold` API can be used to
     * return all past file versions available for this policy assignment, and the
     * `GET /legal_hold_policy_assignments/:id/files_on_hold` API can be used to
     * return any current (latest) versions of a file under legal hold.
     *
     * The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
     * find a list of policy assignments for a given policy ID.
     *
     * Once the re-architecture is completed this API will be deprecated.
     * @param {GetFileVersionLegalHoldsQueryParams} queryParams Query parameters of getFileVersionLegalHolds method
     * @param {GetFileVersionLegalHoldsOptionalsInput} optionalsInput
     * @returns {Promise<FileVersionLegalHolds>}
     */
    getFileVersionLegalHolds(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetFileVersionLegalHoldsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['policy_id']: (0, utils_js_2.toString)(queryParams.policyId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_legal_holds'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, fileVersionLegalHolds_generated_js_1.deserializeFileVersionLegalHolds)(response.data)), { rawData: response.data });
        });
    }
}
exports.FileVersionLegalHoldsManager = FileVersionLegalHoldsManager;
//# sourceMappingURL=fileVersionLegalHolds.generated.js.map