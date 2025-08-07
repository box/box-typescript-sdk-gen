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
exports.GroupsManager = exports.DeleteGroupByIdHeaders = exports.UpdateGroupByIdHeaders = exports.GetGroupByIdHeaders = exports.CreateGroupHeaders = exports.GetGroupsHeaders = exports.DeleteGroupByIdOptionals = exports.UpdateGroupByIdOptionals = exports.GetGroupByIdOptionals = exports.CreateGroupOptionals = void 0;
exports.serializeCreateGroupRequestBodyInvitabilityLevelField = serializeCreateGroupRequestBodyInvitabilityLevelField;
exports.deserializeCreateGroupRequestBodyInvitabilityLevelField = deserializeCreateGroupRequestBodyInvitabilityLevelField;
exports.serializeCreateGroupRequestBodyMemberViewabilityLevelField = serializeCreateGroupRequestBodyMemberViewabilityLevelField;
exports.deserializeCreateGroupRequestBodyMemberViewabilityLevelField = deserializeCreateGroupRequestBodyMemberViewabilityLevelField;
exports.serializeCreateGroupRequestBody = serializeCreateGroupRequestBody;
exports.deserializeCreateGroupRequestBody = deserializeCreateGroupRequestBody;
exports.serializeUpdateGroupByIdRequestBodyInvitabilityLevelField = serializeUpdateGroupByIdRequestBodyInvitabilityLevelField;
exports.deserializeUpdateGroupByIdRequestBodyInvitabilityLevelField = deserializeUpdateGroupByIdRequestBodyInvitabilityLevelField;
exports.serializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField = serializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField;
exports.deserializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField = deserializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField;
exports.serializeUpdateGroupByIdRequestBody = serializeUpdateGroupByIdRequestBody;
exports.deserializeUpdateGroupByIdRequestBody = deserializeUpdateGroupByIdRequestBody;
const groups_generated_js_1 = require("../schemas/groups.generated.js");
const groupFull_generated_js_1 = require("../schemas/groupFull.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class CreateGroupOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new CreateGroupHeaders({});
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
exports.CreateGroupOptionals = CreateGroupOptionals;
class GetGroupByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetGroupByIdHeaders({});
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
exports.GetGroupByIdOptionals = GetGroupByIdOptionals;
class UpdateGroupByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new UpdateGroupByIdHeaders({});
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
exports.UpdateGroupByIdOptionals = UpdateGroupByIdOptionals;
class DeleteGroupByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteGroupByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteGroupByIdOptionals = DeleteGroupByIdOptionals;
class GetGroupsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetGroupsHeaders = GetGroupsHeaders;
class CreateGroupHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateGroupHeaders = CreateGroupHeaders;
class GetGroupByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetGroupByIdHeaders = GetGroupByIdHeaders;
class UpdateGroupByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateGroupByIdHeaders = UpdateGroupByIdHeaders;
class DeleteGroupByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteGroupByIdHeaders = DeleteGroupByIdHeaders;
class GroupsManager {
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
     * Retrieves all of the groups for a given enterprise. The user
     * must have admin permissions to inspect enterprise's groups.
     * @param {GetGroupsQueryParams} queryParams Query parameters of getGroups method
     * @param {GetGroupsHeadersInput} headersInput Headers of getGroups method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<Groups>}
     */
    getGroups() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetGroupsHeaders({}), cancellationToken) {
            const headers = new GetGroupsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['filter_term']: (0, utils_js_2.toString)(queryParams.filterTerm),
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, groups_generated_js_1.deserializeGroups)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a new group of users in an enterprise. Only users with admin
     * permissions can create new groups.
     * @param {CreateGroupRequestBody} requestBody Request body of createGroup method
     * @param {CreateGroupOptionalsInput} optionalsInput
     * @returns {Promise<GroupFull>}
     */
    createGroup(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateGroupOptionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups'),
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeCreateGroupRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, groupFull_generated_js_1.deserializeGroupFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves information about a group. Only members of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {GetGroupByIdOptionalsInput} optionalsInput
       * @returns {Promise<GroupFull>}
       */
    getGroupById(groupId_1) {
        return __awaiter(this, arguments, void 0, function* (groupId, optionalsInput = {}) {
            const optionals = new GetGroupByIdOptionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', (0, utils_js_2.toString)(groupId)),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, groupFull_generated_js_1.deserializeGroupFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a specific group. Only admins of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {UpdateGroupByIdOptionalsInput} optionalsInput
       * @returns {Promise<GroupFull>}
       */
    updateGroupById(groupId_1) {
        return __awaiter(this, arguments, void 0, function* (groupId, optionalsInput = {}) {
            const optionals = new UpdateGroupByIdOptionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', (0, utils_js_2.toString)(groupId)),
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeUpdateGroupByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, groupFull_generated_js_1.deserializeGroupFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Permanently deletes a group. Only users with
       * admin-level permissions will be able to use this API.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {DeleteGroupByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteGroupById(groupId_1) {
        return __awaiter(this, arguments, void 0, function* (groupId, optionalsInput = {}) {
            const optionals = new DeleteGroupByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', (0, utils_js_2.toString)(groupId)),
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
exports.GroupsManager = GroupsManager;
function serializeCreateGroupRequestBodyInvitabilityLevelField(val) {
    return val;
}
function deserializeCreateGroupRequestBodyInvitabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateGroupRequestBodyInvitabilityLevelField",
    });
}
function serializeCreateGroupRequestBodyMemberViewabilityLevelField(val) {
    return val;
}
function deserializeCreateGroupRequestBodyMemberViewabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateGroupRequestBodyMemberViewabilityLevelField",
    });
}
function serializeCreateGroupRequestBody(val) {
    return {
        ['name']: val.name,
        ['provenance']: val.provenance,
        ['external_sync_identifier']: val.externalSyncIdentifier,
        ['description']: val.description,
        ['invitability_level']: val.invitabilityLevel == void 0
            ? val.invitabilityLevel
            : serializeCreateGroupRequestBodyInvitabilityLevelField(val.invitabilityLevel),
        ['member_viewability_level']: val.memberViewabilityLevel == void 0
            ? val.memberViewabilityLevel
            : serializeCreateGroupRequestBodyMemberViewabilityLevelField(val.memberViewabilityLevel),
    };
}
function deserializeCreateGroupRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateGroupRequestBody"',
        });
    }
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "CreateGroupRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "CreateGroupRequestBody"',
        });
    }
    const name = val.name;
    if (!(val.provenance == void 0) && !(0, json_js_1.sdIsString)(val.provenance)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "provenance" of type "CreateGroupRequestBody"',
        });
    }
    const provenance = val.provenance == void 0 ? void 0 : val.provenance;
    if (!(val.external_sync_identifier == void 0) &&
        !(0, json_js_1.sdIsString)(val.external_sync_identifier)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_sync_identifier" of type "CreateGroupRequestBody"',
        });
    }
    const externalSyncIdentifier = val.external_sync_identifier == void 0
        ? void 0
        : val.external_sync_identifier;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "CreateGroupRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const invitabilityLevel = val.invitability_level == void 0
        ? void 0
        : deserializeCreateGroupRequestBodyInvitabilityLevelField(val.invitability_level);
    const memberViewabilityLevel = val.member_viewability_level == void 0
        ? void 0
        : deserializeCreateGroupRequestBodyMemberViewabilityLevelField(val.member_viewability_level);
    return {
        name: name,
        provenance: provenance,
        externalSyncIdentifier: externalSyncIdentifier,
        description: description,
        invitabilityLevel: invitabilityLevel,
        memberViewabilityLevel: memberViewabilityLevel,
    };
}
function serializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val) {
    return val;
}
function deserializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateGroupByIdRequestBodyInvitabilityLevelField",
    });
}
function serializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val) {
    return val;
}
function deserializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateGroupByIdRequestBodyMemberViewabilityLevelField",
    });
}
function serializeUpdateGroupByIdRequestBody(val) {
    return {
        ['name']: val.name,
        ['provenance']: val.provenance,
        ['external_sync_identifier']: val.externalSyncIdentifier,
        ['description']: val.description,
        ['invitability_level']: val.invitabilityLevel == void 0
            ? val.invitabilityLevel
            : serializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val.invitabilityLevel),
        ['member_viewability_level']: val.memberViewabilityLevel == void 0
            ? val.memberViewabilityLevel
            : serializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val.memberViewabilityLevel),
    };
}
function deserializeUpdateGroupByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateGroupByIdRequestBody"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UpdateGroupByIdRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.provenance == void 0) && !(0, json_js_1.sdIsString)(val.provenance)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "provenance" of type "UpdateGroupByIdRequestBody"',
        });
    }
    const provenance = val.provenance == void 0 ? void 0 : val.provenance;
    if (!(val.external_sync_identifier == void 0) &&
        !(0, json_js_1.sdIsString)(val.external_sync_identifier)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_sync_identifier" of type "UpdateGroupByIdRequestBody"',
        });
    }
    const externalSyncIdentifier = val.external_sync_identifier == void 0
        ? void 0
        : val.external_sync_identifier;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateGroupByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const invitabilityLevel = val.invitability_level == void 0
        ? void 0
        : deserializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val.invitability_level);
    const memberViewabilityLevel = val.member_viewability_level == void 0
        ? void 0
        : deserializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val.member_viewability_level);
    return {
        name: name,
        provenance: provenance,
        externalSyncIdentifier: externalSyncIdentifier,
        description: description,
        invitabilityLevel: invitabilityLevel,
        memberViewabilityLevel: memberViewabilityLevel,
    };
}
//# sourceMappingURL=groups.generated.js.map