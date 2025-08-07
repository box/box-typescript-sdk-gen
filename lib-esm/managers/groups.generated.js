import { deserializeGroups } from '../schemas/groups.generated.js';
import { deserializeGroupFull } from '../schemas/groupFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateGroupOptionals {
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
export class GetGroupByIdOptionals {
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
export class UpdateGroupByIdOptionals {
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
export class DeleteGroupByIdOptionals {
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
export class GetGroupsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateGroupHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetGroupByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateGroupByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteGroupByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GroupsManager {
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
     * Retrieves all of the groups for a given enterprise. The user
     * must have admin permissions to inspect enterprise's groups.
     * @param {GetGroupsQueryParams} queryParams Query parameters of getGroups method
     * @param {GetGroupsHeadersInput} headersInput Headers of getGroups method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<Groups>}
     */
    async getGroups(queryParams = {}, headersInput = new GetGroupsHeaders({}), cancellationToken) {
        const headers = new GetGroupsHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['filter_term']: toString(queryParams.filterTerm),
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['limit']: toString(queryParams.limit),
            ['offset']: toString(queryParams.offset),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeGroups(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a new group of users in an enterprise. Only users with admin
     * permissions can create new groups.
     * @param {CreateGroupRequestBody} requestBody Request body of createGroup method
     * @param {CreateGroupOptionalsInput} optionalsInput
     * @returns {Promise<GroupFull>}
     */
    async createGroup(requestBody, optionalsInput = {}) {
        const optionals = new CreateGroupOptionals({
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
        return {
            ...deserializeGroupFull(response.data),
            rawData: response.data,
        };
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
    async getGroupById(groupId, optionalsInput = {}) {
        const optionals = new GetGroupByIdOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', toString(groupId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeGroupFull(response.data),
            rawData: response.data,
        };
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
    async updateGroupById(groupId, optionalsInput = {}) {
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
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', toString(groupId)),
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
        return {
            ...deserializeGroupFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Permanently deletes a group. Only users with
       * admin-level permissions will be able to use this API.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {DeleteGroupByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteGroupById(groupId, optionalsInput = {}) {
        const optionals = new DeleteGroupByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', toString(groupId)),
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
export function serializeCreateGroupRequestBodyInvitabilityLevelField(val) {
    return val;
}
export function deserializeCreateGroupRequestBodyInvitabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateGroupRequestBodyInvitabilityLevelField",
    });
}
export function serializeCreateGroupRequestBodyMemberViewabilityLevelField(val) {
    return val;
}
export function deserializeCreateGroupRequestBodyMemberViewabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateGroupRequestBodyMemberViewabilityLevelField",
    });
}
export function serializeCreateGroupRequestBody(val) {
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
export function deserializeCreateGroupRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateGroupRequestBody"',
        });
    }
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "CreateGroupRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CreateGroupRequestBody"',
        });
    }
    const name = val.name;
    if (!(val.provenance == void 0) && !sdIsString(val.provenance)) {
        throw new BoxSdkError({
            message: 'Expecting string for "provenance" of type "CreateGroupRequestBody"',
        });
    }
    const provenance = val.provenance == void 0 ? void 0 : val.provenance;
    if (!(val.external_sync_identifier == void 0) &&
        !sdIsString(val.external_sync_identifier)) {
        throw new BoxSdkError({
            message: 'Expecting string for "external_sync_identifier" of type "CreateGroupRequestBody"',
        });
    }
    const externalSyncIdentifier = val.external_sync_identifier == void 0
        ? void 0
        : val.external_sync_identifier;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
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
export function serializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val) {
    return val;
}
export function deserializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateGroupByIdRequestBodyInvitabilityLevelField",
    });
}
export function serializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val) {
    return val;
}
export function deserializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateGroupByIdRequestBodyMemberViewabilityLevelField",
    });
}
export function serializeUpdateGroupByIdRequestBody(val) {
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
export function deserializeUpdateGroupByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateGroupByIdRequestBody"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UpdateGroupByIdRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.provenance == void 0) && !sdIsString(val.provenance)) {
        throw new BoxSdkError({
            message: 'Expecting string for "provenance" of type "UpdateGroupByIdRequestBody"',
        });
    }
    const provenance = val.provenance == void 0 ? void 0 : val.provenance;
    if (!(val.external_sync_identifier == void 0) &&
        !sdIsString(val.external_sync_identifier)) {
        throw new BoxSdkError({
            message: 'Expecting string for "external_sync_identifier" of type "UpdateGroupByIdRequestBody"',
        });
    }
    const externalSyncIdentifier = val.external_sync_identifier == void 0
        ? void 0
        : val.external_sync_identifier;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
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