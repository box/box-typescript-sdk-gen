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
exports.MembershipsManager = exports.DeleteGroupMembershipByIdHeaders = exports.UpdateGroupMembershipByIdHeaders = exports.GetGroupMembershipByIdHeaders = exports.CreateGroupMembershipHeaders = exports.GetGroupMembershipsHeaders = exports.GetUserMembershipsHeaders = exports.DeleteGroupMembershipByIdOptionals = exports.UpdateGroupMembershipByIdOptionals = exports.GetGroupMembershipByIdOptionals = exports.CreateGroupMembershipOptionals = exports.GetGroupMembershipsOptionals = exports.GetUserMembershipsOptionals = void 0;
exports.serializeCreateGroupMembershipRequestBodyUserField = serializeCreateGroupMembershipRequestBodyUserField;
exports.deserializeCreateGroupMembershipRequestBodyUserField = deserializeCreateGroupMembershipRequestBodyUserField;
exports.serializeCreateGroupMembershipRequestBodyGroupField = serializeCreateGroupMembershipRequestBodyGroupField;
exports.deserializeCreateGroupMembershipRequestBodyGroupField = deserializeCreateGroupMembershipRequestBodyGroupField;
exports.serializeCreateGroupMembershipRequestBodyRoleField = serializeCreateGroupMembershipRequestBodyRoleField;
exports.deserializeCreateGroupMembershipRequestBodyRoleField = deserializeCreateGroupMembershipRequestBodyRoleField;
exports.serializeCreateGroupMembershipRequestBody = serializeCreateGroupMembershipRequestBody;
exports.deserializeCreateGroupMembershipRequestBody = deserializeCreateGroupMembershipRequestBody;
exports.serializeUpdateGroupMembershipByIdRequestBodyRoleField = serializeUpdateGroupMembershipByIdRequestBodyRoleField;
exports.deserializeUpdateGroupMembershipByIdRequestBodyRoleField = deserializeUpdateGroupMembershipByIdRequestBodyRoleField;
exports.serializeUpdateGroupMembershipByIdRequestBody = serializeUpdateGroupMembershipByIdRequestBody;
exports.deserializeUpdateGroupMembershipByIdRequestBody = deserializeUpdateGroupMembershipByIdRequestBody;
const groupMemberships_generated_js_1 = require("../schemas/groupMemberships.generated.js");
const groupMembership_generated_js_1 = require("../schemas/groupMembership.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class GetUserMembershipsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetUserMembershipsHeaders({});
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
exports.GetUserMembershipsOptionals = GetUserMembershipsOptionals;
class GetGroupMembershipsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetGroupMembershipsHeaders({});
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
exports.GetGroupMembershipsOptionals = GetGroupMembershipsOptionals;
class CreateGroupMembershipOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new CreateGroupMembershipHeaders({});
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
exports.CreateGroupMembershipOptionals = CreateGroupMembershipOptionals;
class GetGroupMembershipByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetGroupMembershipByIdHeaders({});
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
exports.GetGroupMembershipByIdOptionals = GetGroupMembershipByIdOptionals;
class UpdateGroupMembershipByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new UpdateGroupMembershipByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
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
exports.UpdateGroupMembershipByIdOptionals = UpdateGroupMembershipByIdOptionals;
class DeleteGroupMembershipByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteGroupMembershipByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteGroupMembershipByIdOptionals = DeleteGroupMembershipByIdOptionals;
class GetUserMembershipsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetUserMembershipsHeaders = GetUserMembershipsHeaders;
class GetGroupMembershipsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetGroupMembershipsHeaders = GetGroupMembershipsHeaders;
class CreateGroupMembershipHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateGroupMembershipHeaders = CreateGroupMembershipHeaders;
class GetGroupMembershipByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetGroupMembershipByIdHeaders = GetGroupMembershipByIdHeaders;
class UpdateGroupMembershipByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateGroupMembershipByIdHeaders = UpdateGroupMembershipByIdHeaders;
class DeleteGroupMembershipByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteGroupMembershipByIdHeaders = DeleteGroupMembershipByIdHeaders;
class MembershipsManager {
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
       * Retrieves all the groups for a user. Only members of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {GetUserMembershipsOptionalsInput} optionalsInput
       * @returns {Promise<GroupMemberships>}
       */
    getUserMemberships(userId_1) {
        return __awaiter(this, arguments, void 0, function* (userId, optionalsInput = {}) {
            const optionals = new GetUserMembershipsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', (0, utils_js_2.toString)(userId), '/memberships'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, groupMemberships_generated_js_1.deserializeGroupMemberships)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves all the members for a group. Only members of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {GetGroupMembershipsOptionalsInput} optionalsInput
       * @returns {Promise<GroupMemberships>}
       */
    getGroupMemberships(groupId_1) {
        return __awaiter(this, arguments, void 0, function* (groupId, optionalsInput = {}) {
            const optionals = new GetGroupMembershipsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', (0, utils_js_2.toString)(groupId), '/memberships'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, groupMemberships_generated_js_1.deserializeGroupMemberships)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a group membership. Only users with
     * admin-level permissions will be able to use this API.
     * @param {CreateGroupMembershipRequestBody} requestBody Request body of createGroupMembership method
     * @param {CreateGroupMembershipOptionalsInput} optionalsInput
     * @returns {Promise<GroupMembership>}
     */
    createGroupMembership(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateGroupMembershipOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/group_memberships'),
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeCreateGroupMembershipRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, groupMembership_generated_js_1.deserializeGroupMembership)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a specific group membership. Only admins of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupMembershipId The ID of the group membership.
      Example: "434534"
       * @param {GetGroupMembershipByIdOptionalsInput} optionalsInput
       * @returns {Promise<GroupMembership>}
       */
    getGroupMembershipById(groupMembershipId_1) {
        return __awaiter(this, arguments, void 0, function* (groupMembershipId, optionalsInput = {}) {
            const optionals = new GetGroupMembershipByIdOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/group_memberships/', (0, utils_js_2.toString)(groupMembershipId)),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, groupMembership_generated_js_1.deserializeGroupMembership)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a user's group membership. Only admins of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupMembershipId The ID of the group membership.
      Example: "434534"
       * @param {UpdateGroupMembershipByIdOptionalsInput} optionalsInput
       * @returns {Promise<GroupMembership>}
       */
    updateGroupMembershipById(groupMembershipId_1) {
        return __awaiter(this, arguments, void 0, function* (groupMembershipId, optionalsInput = {}) {
            const optionals = new UpdateGroupMembershipByIdOptionals({
                requestBody: optionalsInput.requestBody,
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/group_memberships/', (0, utils_js_2.toString)(groupMembershipId)),
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeUpdateGroupMembershipByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, groupMembership_generated_js_1.deserializeGroupMembership)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a specific group membership. Only admins of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupMembershipId The ID of the group membership.
      Example: "434534"
       * @param {DeleteGroupMembershipByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteGroupMembershipById(groupMembershipId_1) {
        return __awaiter(this, arguments, void 0, function* (groupMembershipId, optionalsInput = {}) {
            const optionals = new DeleteGroupMembershipByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/group_memberships/', (0, utils_js_2.toString)(groupMembershipId)),
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
exports.MembershipsManager = MembershipsManager;
function serializeCreateGroupMembershipRequestBodyUserField(val) {
    return { ['id']: val.id };
}
function deserializeCreateGroupMembershipRequestBodyUserField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateGroupMembershipRequestBodyUserField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateGroupMembershipRequestBodyUserField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateGroupMembershipRequestBodyUserField"',
        });
    }
    const id = val.id;
    return { id: id };
}
function serializeCreateGroupMembershipRequestBodyGroupField(val) {
    return { ['id']: val.id };
}
function deserializeCreateGroupMembershipRequestBodyGroupField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateGroupMembershipRequestBodyGroupField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateGroupMembershipRequestBodyGroupField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateGroupMembershipRequestBodyGroupField"',
        });
    }
    const id = val.id;
    return { id: id };
}
function serializeCreateGroupMembershipRequestBodyRoleField(val) {
    return val;
}
function deserializeCreateGroupMembershipRequestBodyRoleField(val) {
    if (val == 'member') {
        return val;
    }
    if (val == 'admin') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateGroupMembershipRequestBodyRoleField",
    });
}
function serializeCreateGroupMembershipRequestBody(val) {
    return {
        ['user']: serializeCreateGroupMembershipRequestBodyUserField(val.user),
        ['group']: serializeCreateGroupMembershipRequestBodyGroupField(val.group),
        ['role']: val.role == void 0
            ? val.role
            : serializeCreateGroupMembershipRequestBodyRoleField(val.role),
        ['configurable_permissions']: val.configurablePermissions == void 0
            ? val.configurablePermissions
            : val.configurablePermissions,
    };
}
function deserializeCreateGroupMembershipRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateGroupMembershipRequestBody"',
        });
    }
    if (val.user == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "user" of type "CreateGroupMembershipRequestBody" to be defined',
        });
    }
    const user = deserializeCreateGroupMembershipRequestBodyUserField(val.user);
    if (val.group == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "group" of type "CreateGroupMembershipRequestBody" to be defined',
        });
    }
    const group = deserializeCreateGroupMembershipRequestBodyGroupField(val.group);
    const role = val.role == void 0
        ? void 0
        : deserializeCreateGroupMembershipRequestBodyRoleField(val.role);
    if (!(val.configurable_permissions == void 0) &&
        !(0, json_js_3.sdIsMap)(val.configurable_permissions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting object for "configurable_permissions" of type "CreateGroupMembershipRequestBody"',
        });
    }
    const configurablePermissions = val.configurable_permissions == void 0
        ? void 0
        : (0, json_js_3.sdIsMap)(val.configurable_permissions)
            ? Object.fromEntries(Object.entries(val.configurable_permissions).map(([k, v]) => [
                k,
                (function (v) {
                    if (!(0, json_js_1.sdIsBoolean)(v)) {
                        throw new errors_js_1.BoxSdkError({
                            message: 'Expecting boolean for "CreateGroupMembershipRequestBody"',
                        });
                    }
                    return v;
                })(v),
            ]))
            : {};
    return {
        user: user,
        group: group,
        role: role,
        configurablePermissions: configurablePermissions,
    };
}
function serializeUpdateGroupMembershipByIdRequestBodyRoleField(val) {
    return val;
}
function deserializeUpdateGroupMembershipByIdRequestBodyRoleField(val) {
    if (val == 'member') {
        return val;
    }
    if (val == 'admin') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateGroupMembershipByIdRequestBodyRoleField",
    });
}
function serializeUpdateGroupMembershipByIdRequestBody(val) {
    return {
        ['role']: val.role == void 0
            ? val.role
            : serializeUpdateGroupMembershipByIdRequestBodyRoleField(val.role),
        ['configurable_permissions']: val.configurablePermissions == void 0
            ? val.configurablePermissions
            : val.configurablePermissions,
    };
}
function deserializeUpdateGroupMembershipByIdRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateGroupMembershipByIdRequestBody"',
        });
    }
    const role = val.role == void 0
        ? void 0
        : deserializeUpdateGroupMembershipByIdRequestBodyRoleField(val.role);
    if (!(val.configurable_permissions == void 0) &&
        !(0, json_js_3.sdIsMap)(val.configurable_permissions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting object for "configurable_permissions" of type "UpdateGroupMembershipByIdRequestBody"',
        });
    }
    const configurablePermissions = val.configurable_permissions == void 0
        ? void 0
        : (0, json_js_3.sdIsMap)(val.configurable_permissions)
            ? Object.fromEntries(Object.entries(val.configurable_permissions).map(([k, v]) => [
                k,
                (function (v) {
                    if (!(0, json_js_1.sdIsBoolean)(v)) {
                        throw new errors_js_1.BoxSdkError({
                            message: 'Expecting boolean for "UpdateGroupMembershipByIdRequestBody"',
                        });
                    }
                    return v;
                })(v),
            ]))
            : {};
    return {
        role: role,
        configurablePermissions: configurablePermissions,
    };
}
//# sourceMappingURL=memberships.generated.js.map