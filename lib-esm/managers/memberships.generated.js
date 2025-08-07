import { deserializeGroupMemberships } from '../schemas/groupMemberships.generated.js';
import { deserializeGroupMembership } from '../schemas/groupMembership.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetUserMembershipsOptionals {
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
export class GetGroupMembershipsOptionals {
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
export class CreateGroupMembershipOptionals {
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
export class GetGroupMembershipByIdOptionals {
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
export class UpdateGroupMembershipByIdOptionals {
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
export class DeleteGroupMembershipByIdOptionals {
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
export class GetUserMembershipsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetGroupMembershipsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateGroupMembershipHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetGroupMembershipByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateGroupMembershipByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteGroupMembershipByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class MembershipsManager {
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
       * Retrieves all the groups for a user. Only members of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {GetUserMembershipsOptionalsInput} optionalsInput
       * @returns {Promise<GroupMemberships>}
       */
    async getUserMemberships(userId, optionalsInput = {}) {
        const optionals = new GetUserMembershipsOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['limit']: toString(queryParams.limit),
            ['offset']: toString(queryParams.offset),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId), '/memberships'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeGroupMemberships(response.data),
            rawData: response.data,
        };
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
    async getGroupMemberships(groupId, optionalsInput = {}) {
        const optionals = new GetGroupMembershipsOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['limit']: toString(queryParams.limit),
            ['offset']: toString(queryParams.offset),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', toString(groupId), '/memberships'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeGroupMemberships(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a group membership. Only users with
     * admin-level permissions will be able to use this API.
     * @param {CreateGroupMembershipRequestBody} requestBody Request body of createGroupMembership method
     * @param {CreateGroupMembershipOptionalsInput} optionalsInput
     * @returns {Promise<GroupMembership>}
     */
    async createGroupMembership(requestBody, optionalsInput = {}) {
        const optionals = new CreateGroupMembershipOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        return {
            ...deserializeGroupMembership(response.data),
            rawData: response.data,
        };
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
    async getGroupMembershipById(groupMembershipId, optionalsInput = {}) {
        const optionals = new GetGroupMembershipByIdOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/group_memberships/', toString(groupMembershipId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeGroupMembership(response.data),
            rawData: response.data,
        };
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
    async updateGroupMembershipById(groupMembershipId, optionalsInput = {}) {
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
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/group_memberships/', toString(groupMembershipId)),
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
        return {
            ...deserializeGroupMembership(response.data),
            rawData: response.data,
        };
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
    async deleteGroupMembershipById(groupMembershipId, optionalsInput = {}) {
        const optionals = new DeleteGroupMembershipByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/group_memberships/', toString(groupMembershipId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
export function serializeCreateGroupMembershipRequestBodyUserField(val) {
    return { ['id']: val.id };
}
export function deserializeCreateGroupMembershipRequestBodyUserField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateGroupMembershipRequestBodyUserField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateGroupMembershipRequestBodyUserField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateGroupMembershipRequestBodyUserField"',
        });
    }
    const id = val.id;
    return { id: id };
}
export function serializeCreateGroupMembershipRequestBodyGroupField(val) {
    return { ['id']: val.id };
}
export function deserializeCreateGroupMembershipRequestBodyGroupField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateGroupMembershipRequestBodyGroupField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateGroupMembershipRequestBodyGroupField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateGroupMembershipRequestBodyGroupField"',
        });
    }
    const id = val.id;
    return { id: id };
}
export function serializeCreateGroupMembershipRequestBodyRoleField(val) {
    return val;
}
export function deserializeCreateGroupMembershipRequestBodyRoleField(val) {
    if (val == 'member') {
        return val;
    }
    if (val == 'admin') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateGroupMembershipRequestBodyRoleField",
    });
}
export function serializeCreateGroupMembershipRequestBody(val) {
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
export function deserializeCreateGroupMembershipRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateGroupMembershipRequestBody"',
        });
    }
    if (val.user == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "user" of type "CreateGroupMembershipRequestBody" to be defined',
        });
    }
    const user = deserializeCreateGroupMembershipRequestBodyUserField(val.user);
    if (val.group == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "group" of type "CreateGroupMembershipRequestBody" to be defined',
        });
    }
    const group = deserializeCreateGroupMembershipRequestBodyGroupField(val.group);
    const role = val.role == void 0
        ? void 0
        : deserializeCreateGroupMembershipRequestBodyRoleField(val.role);
    if (!(val.configurable_permissions == void 0) &&
        !sdIsMap(val.configurable_permissions)) {
        throw new BoxSdkError({
            message: 'Expecting object for "configurable_permissions" of type "CreateGroupMembershipRequestBody"',
        });
    }
    const configurablePermissions = val.configurable_permissions == void 0
        ? void 0
        : sdIsMap(val.configurable_permissions)
            ? Object.fromEntries(Object.entries(val.configurable_permissions).map(([k, v]) => [
                k,
                (function (v) {
                    if (!sdIsBoolean(v)) {
                        throw new BoxSdkError({
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
export function serializeUpdateGroupMembershipByIdRequestBodyRoleField(val) {
    return val;
}
export function deserializeUpdateGroupMembershipByIdRequestBodyRoleField(val) {
    if (val == 'member') {
        return val;
    }
    if (val == 'admin') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateGroupMembershipByIdRequestBodyRoleField",
    });
}
export function serializeUpdateGroupMembershipByIdRequestBody(val) {
    return {
        ['role']: val.role == void 0
            ? val.role
            : serializeUpdateGroupMembershipByIdRequestBodyRoleField(val.role),
        ['configurable_permissions']: val.configurablePermissions == void 0
            ? val.configurablePermissions
            : val.configurablePermissions,
    };
}
export function deserializeUpdateGroupMembershipByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateGroupMembershipByIdRequestBody"',
        });
    }
    const role = val.role == void 0
        ? void 0
        : deserializeUpdateGroupMembershipByIdRequestBodyRoleField(val.role);
    if (!(val.configurable_permissions == void 0) &&
        !sdIsMap(val.configurable_permissions)) {
        throw new BoxSdkError({
            message: 'Expecting object for "configurable_permissions" of type "UpdateGroupMembershipByIdRequestBody"',
        });
    }
    const configurablePermissions = val.configurable_permissions == void 0
        ? void 0
        : sdIsMap(val.configurable_permissions)
            ? Object.fromEntries(Object.entries(val.configurable_permissions).map(([k, v]) => [
                k,
                (function (v) {
                    if (!sdIsBoolean(v)) {
                        throw new BoxSdkError({
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