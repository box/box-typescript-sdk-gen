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
exports.ArchivesManager = exports.DeleteArchiveByIdV2025R0Headers = exports.CreateArchiveV2025R0Headers = exports.GetArchivesV2025R0Headers = exports.DeleteArchiveByIdV2025R0Optionals = exports.CreateArchiveV2025R0Optionals = void 0;
exports.serializeCreateArchiveV2025R0RequestBody = serializeCreateArchiveV2025R0RequestBody;
exports.deserializeCreateArchiveV2025R0RequestBody = deserializeCreateArchiveV2025R0RequestBody;
const archivesV2025R0_generated_js_1 = require("../schemas/v2025R0/archivesV2025R0.generated.js");
const archiveV2025R0_generated_js_1 = require("../schemas/v2025R0/archiveV2025R0.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class CreateArchiveV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateArchiveV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateArchiveV2025R0Optionals = CreateArchiveV2025R0Optionals;
class DeleteArchiveByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteArchiveByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteArchiveByIdV2025R0Optionals = DeleteArchiveByIdV2025R0Optionals;
class GetArchivesV2025R0Headers {
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
exports.GetArchivesV2025R0Headers = GetArchivesV2025R0Headers;
class CreateArchiveV2025R0Headers {
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
exports.CreateArchiveV2025R0Headers = CreateArchiveV2025R0Headers;
class DeleteArchiveByIdV2025R0Headers {
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
exports.DeleteArchiveByIdV2025R0Headers = DeleteArchiveByIdV2025R0Headers;
class ArchivesManager {
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
     * Retrieves archives for an enterprise.
     * @param {GetArchivesV2025R0QueryParams} queryParams Query parameters of getArchivesV2025R0 method
     * @param {GetArchivesV2025R0HeadersInput} headersInput Headers of getArchivesV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ArchivesV2025R0>}
     */
    getArchivesV2025R0() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetArchivesV2025R0Headers({}), cancellationToken) {
            const headers = new GetArchivesV2025R0Headers({
                boxVersion: headersInput.boxVersion,
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/archives'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, archivesV2025R0_generated_js_1.deserializeArchivesV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates an archive.
     * @param {CreateArchiveV2025R0RequestBody} requestBody Request body of createArchiveV2025R0 method
     * @param {CreateArchiveV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<ArchiveV2025R0>}
     */
    createArchiveV2025R0(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateArchiveV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/archives'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateArchiveV2025R0RequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, archiveV2025R0_generated_js_1.deserializeArchiveV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Permanently deletes an archive.
       * @param {string} archiveId The ID of the archive.
      Example: "982312"
       * @param {DeleteArchiveByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteArchiveByIdV2025R0(archiveId_1) {
        return __awaiter(this, arguments, void 0, function* (archiveId, optionalsInput = {}) {
            const optionals = new DeleteArchiveByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/archives/', (0, utils_js_2.toString)(archiveId)),
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
}
exports.ArchivesManager = ArchivesManager;
function serializeCreateArchiveV2025R0RequestBody(val) {
    return { ['name']: val.name };
}
function deserializeCreateArchiveV2025R0RequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateArchiveV2025R0RequestBody"',
        });
    }
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "CreateArchiveV2025R0RequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "CreateArchiveV2025R0RequestBody"',
        });
    }
    const name = val.name;
    return { name: name };
}
//# sourceMappingURL=archives.generated.js.map