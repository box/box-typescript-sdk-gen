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
exports.UserCollaborationsManager = exports.CreateCollaborationHeaders = exports.DeleteCollaborationByIdHeaders = exports.UpdateCollaborationByIdHeaders = exports.GetCollaborationByIdHeaders = exports.CreateCollaborationOptionals = exports.DeleteCollaborationByIdOptionals = exports.UpdateCollaborationByIdOptionals = exports.GetCollaborationByIdOptionals = void 0;
exports.serializeUpdateCollaborationByIdRequestBodyRoleField = serializeUpdateCollaborationByIdRequestBodyRoleField;
exports.deserializeUpdateCollaborationByIdRequestBodyRoleField = deserializeUpdateCollaborationByIdRequestBodyRoleField;
exports.serializeUpdateCollaborationByIdRequestBodyStatusField = serializeUpdateCollaborationByIdRequestBodyStatusField;
exports.deserializeUpdateCollaborationByIdRequestBodyStatusField = deserializeUpdateCollaborationByIdRequestBodyStatusField;
exports.serializeUpdateCollaborationByIdRequestBody = serializeUpdateCollaborationByIdRequestBody;
exports.deserializeUpdateCollaborationByIdRequestBody = deserializeUpdateCollaborationByIdRequestBody;
exports.serializeCreateCollaborationRequestBodyItemTypeField = serializeCreateCollaborationRequestBodyItemTypeField;
exports.deserializeCreateCollaborationRequestBodyItemTypeField = deserializeCreateCollaborationRequestBodyItemTypeField;
exports.serializeCreateCollaborationRequestBodyItemField = serializeCreateCollaborationRequestBodyItemField;
exports.deserializeCreateCollaborationRequestBodyItemField = deserializeCreateCollaborationRequestBodyItemField;
exports.serializeCreateCollaborationRequestBodyAccessibleByTypeField = serializeCreateCollaborationRequestBodyAccessibleByTypeField;
exports.deserializeCreateCollaborationRequestBodyAccessibleByTypeField = deserializeCreateCollaborationRequestBodyAccessibleByTypeField;
exports.serializeCreateCollaborationRequestBodyAccessibleByField = serializeCreateCollaborationRequestBodyAccessibleByField;
exports.deserializeCreateCollaborationRequestBodyAccessibleByField = deserializeCreateCollaborationRequestBodyAccessibleByField;
exports.serializeCreateCollaborationRequestBodyRoleField = serializeCreateCollaborationRequestBodyRoleField;
exports.deserializeCreateCollaborationRequestBodyRoleField = deserializeCreateCollaborationRequestBodyRoleField;
exports.serializeCreateCollaborationRequestBody = serializeCreateCollaborationRequestBody;
exports.deserializeCreateCollaborationRequestBody = deserializeCreateCollaborationRequestBody;
const collaboration_generated_js_1 = require("../schemas/collaboration.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class GetCollaborationByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetCollaborationByIdHeaders({});
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
exports.GetCollaborationByIdOptionals = GetCollaborationByIdOptionals;
class UpdateCollaborationByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateCollaborationByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateCollaborationByIdOptionals = UpdateCollaborationByIdOptionals;
class DeleteCollaborationByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteCollaborationByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteCollaborationByIdOptionals = DeleteCollaborationByIdOptionals;
class CreateCollaborationOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new CreateCollaborationHeaders({});
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
exports.CreateCollaborationOptionals = CreateCollaborationOptionals;
class GetCollaborationByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCollaborationByIdHeaders = GetCollaborationByIdHeaders;
class UpdateCollaborationByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateCollaborationByIdHeaders = UpdateCollaborationByIdHeaders;
class DeleteCollaborationByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteCollaborationByIdHeaders = DeleteCollaborationByIdHeaders;
class CreateCollaborationHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateCollaborationHeaders = CreateCollaborationHeaders;
class UserCollaborationsManager {
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
       * Retrieves a single collaboration.
       * @param {string} collaborationId The ID of the collaboration.
      Example: "1234"
       * @param {GetCollaborationByIdOptionalsInput} optionalsInput
       * @returns {Promise<Collaboration>}
       */
    getCollaborationById(collaborationId_1) {
        return __awaiter(this, arguments, void 0, function* (collaborationId, optionalsInput = {}) {
            const optionals = new GetCollaborationByIdOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_4.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaborations/', (0, utils_js_4.toString)(collaborationId)),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaboration_generated_js_1.deserializeCollaboration)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a collaboration.
       * Can be used to change the owner of an item, or to
       * accept collaboration invites.
       * @param {string} collaborationId The ID of the collaboration.
      Example: "1234"
       * @param {UpdateCollaborationByIdRequestBody} requestBody Request body of updateCollaborationById method
       * @param {UpdateCollaborationByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined | Collaboration>}
       */
    updateCollaborationById(collaborationId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (collaborationId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateCollaborationByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaborations/', (0, utils_js_4.toString)(collaborationId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateCollaborationByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            if ((0, utils_js_4.toString)(response.status) == '204') {
                return void 0;
            }
            return Object.assign(Object.assign({}, (0, collaboration_generated_js_1.deserializeCollaboration)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a single collaboration.
       * @param {string} collaborationId The ID of the collaboration.
      Example: "1234"
       * @param {DeleteCollaborationByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteCollaborationById(collaborationId_1) {
        return __awaiter(this, arguments, void 0, function* (collaborationId, optionalsInput = {}) {
            const optionals = new DeleteCollaborationByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaborations/', (0, utils_js_4.toString)(collaborationId)),
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
     * Adds a collaboration for a single user or a single group to a file
     * or folder.
     *
     * Collaborations can be created using email address, user IDs, or a
     * group IDs.
     *
     * If a collaboration is being created with a group, access to
     * this endpoint is dependent on the group's ability to be invited.
     *
     * If collaboration is in `pending` status, the following fields
     * are redacted:
     * - `login` and `name` are hidden if a collaboration was created
     * using `user_id`,
     * -  `name` is hidden if a collaboration was created using `login`.
     * @param {CreateCollaborationRequestBody} requestBody Request body of createCollaboration method
     * @param {CreateCollaborationOptionalsInput} optionalsInput
     * @returns {Promise<Collaboration>}
     */
    createCollaboration(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateCollaborationOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_4.toString).join(',')
                    : undefined,
                ['notify']: (0, utils_js_4.toString)(queryParams.notify),
            });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaborations'),
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeCreateCollaborationRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaboration_generated_js_1.deserializeCollaboration)(response.data)), { rawData: response.data });
        });
    }
}
exports.UserCollaborationsManager = UserCollaborationsManager;
function serializeUpdateCollaborationByIdRequestBodyRoleField(val) {
    return val;
}
function deserializeUpdateCollaborationByIdRequestBodyRoleField(val) {
    if (val == 'editor') {
        return val;
    }
    if (val == 'viewer') {
        return val;
    }
    if (val == 'previewer') {
        return val;
    }
    if (val == 'uploader') {
        return val;
    }
    if (val == 'previewer uploader') {
        return val;
    }
    if (val == 'viewer uploader') {
        return val;
    }
    if (val == 'co-owner') {
        return val;
    }
    if (val == 'owner') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateCollaborationByIdRequestBodyRoleField",
    });
}
function serializeUpdateCollaborationByIdRequestBodyStatusField(val) {
    return val;
}
function deserializeUpdateCollaborationByIdRequestBodyStatusField(val) {
    if (val == 'pending') {
        return val;
    }
    if (val == 'accepted') {
        return val;
    }
    if (val == 'rejected') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateCollaborationByIdRequestBodyStatusField",
    });
}
function serializeUpdateCollaborationByIdRequestBody(val) {
    return {
        ['role']: serializeUpdateCollaborationByIdRequestBodyRoleField(val.role),
        ['status']: val.status == void 0
            ? val.status
            : serializeUpdateCollaborationByIdRequestBodyStatusField(val.status),
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : (0, utils_js_1.serializeDateTime)(val.expiresAt),
        ['can_view_path']: val.canViewPath,
    };
}
function deserializeUpdateCollaborationByIdRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateCollaborationByIdRequestBody"',
        });
    }
    if (val.role == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "role" of type "UpdateCollaborationByIdRequestBody" to be defined',
        });
    }
    const role = deserializeUpdateCollaborationByIdRequestBodyRoleField(val.role);
    const status = val.status == void 0
        ? void 0
        : deserializeUpdateCollaborationByIdRequestBodyStatusField(val.status);
    if (!(val.expires_at == void 0) && !(0, json_js_2.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "UpdateCollaborationByIdRequestBody"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expires_at);
    if (!(val.can_view_path == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_view_path)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_view_path" of type "UpdateCollaborationByIdRequestBody"',
        });
    }
    const canViewPath = val.can_view_path == void 0 ? void 0 : val.can_view_path;
    return {
        role: role,
        status: status,
        expiresAt: expiresAt,
        canViewPath: canViewPath,
    };
}
function serializeCreateCollaborationRequestBodyItemTypeField(val) {
    return val;
}
function deserializeCreateCollaborationRequestBodyItemTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateCollaborationRequestBodyItemTypeField",
    });
}
function serializeCreateCollaborationRequestBodyItemField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateCollaborationRequestBodyItemTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateCollaborationRequestBodyItemField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationRequestBodyItemField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateCollaborationRequestBodyItemTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateCollaborationRequestBodyItemField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateCollaborationRequestBodyAccessibleByTypeField(val) {
    return val;
}
function deserializeCreateCollaborationRequestBodyAccessibleByTypeField(val) {
    if (val == 'user') {
        return val;
    }
    if (val == 'group') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateCollaborationRequestBodyAccessibleByTypeField",
    });
}
function serializeCreateCollaborationRequestBodyAccessibleByField(val) {
    return {
        ['type']: serializeCreateCollaborationRequestBodyAccessibleByTypeField(val.type),
        ['id']: val.id,
        ['login']: val.login,
    };
}
function deserializeCreateCollaborationRequestBodyAccessibleByField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationRequestBodyAccessibleByField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateCollaborationRequestBodyAccessibleByField" to be defined',
        });
    }
    const type = deserializeCreateCollaborationRequestBodyAccessibleByTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateCollaborationRequestBodyAccessibleByField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.login == void 0) && !(0, json_js_2.sdIsString)(val.login)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "login" of type "CreateCollaborationRequestBodyAccessibleByField"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    return {
        type: type,
        id: id,
        login: login,
    };
}
function serializeCreateCollaborationRequestBodyRoleField(val) {
    return val;
}
function deserializeCreateCollaborationRequestBodyRoleField(val) {
    if (val == 'editor') {
        return val;
    }
    if (val == 'viewer') {
        return val;
    }
    if (val == 'previewer') {
        return val;
    }
    if (val == 'uploader') {
        return val;
    }
    if (val == 'previewer uploader') {
        return val;
    }
    if (val == 'viewer uploader') {
        return val;
    }
    if (val == 'co-owner') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateCollaborationRequestBodyRoleField",
    });
}
function serializeCreateCollaborationRequestBody(val) {
    return {
        ['item']: serializeCreateCollaborationRequestBodyItemField(val.item),
        ['accessible_by']: serializeCreateCollaborationRequestBodyAccessibleByField(val.accessibleBy),
        ['role']: serializeCreateCollaborationRequestBodyRoleField(val.role),
        ['is_access_only']: val.isAccessOnly,
        ['can_view_path']: val.canViewPath,
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : (0, utils_js_1.serializeDateTime)(val.expiresAt),
    };
}
function deserializeCreateCollaborationRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationRequestBody"',
        });
    }
    if (val.item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item" of type "CreateCollaborationRequestBody" to be defined',
        });
    }
    const item = deserializeCreateCollaborationRequestBodyItemField(val.item);
    if (val.accessible_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "accessible_by" of type "CreateCollaborationRequestBody" to be defined',
        });
    }
    const accessibleBy = deserializeCreateCollaborationRequestBodyAccessibleByField(val.accessible_by);
    if (val.role == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "role" of type "CreateCollaborationRequestBody" to be defined',
        });
    }
    const role = deserializeCreateCollaborationRequestBodyRoleField(val.role);
    if (!(val.is_access_only == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_access_only)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_access_only" of type "CreateCollaborationRequestBody"',
        });
    }
    const isAccessOnly = val.is_access_only == void 0 ? void 0 : val.is_access_only;
    if (!(val.can_view_path == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_view_path)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_view_path" of type "CreateCollaborationRequestBody"',
        });
    }
    const canViewPath = val.can_view_path == void 0 ? void 0 : val.can_view_path;
    if (!(val.expires_at == void 0) && !(0, json_js_2.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "CreateCollaborationRequestBody"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expires_at);
    return {
        item: item,
        accessibleBy: accessibleBy,
        role: role,
        isAccessOnly: isAccessOnly,
        canViewPath: canViewPath,
        expiresAt: expiresAt,
    };
}
//# sourceMappingURL=userCollaborations.generated.js.map