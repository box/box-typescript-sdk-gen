import { deserializeCollaboration } from '../schemas/collaboration.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetCollaborationByIdOptionals {
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
export class UpdateCollaborationByIdOptionals {
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
export class DeleteCollaborationByIdOptionals {
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
export class CreateCollaborationOptionals {
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
export class GetCollaborationByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateCollaborationByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteCollaborationByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateCollaborationHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UserCollaborationsManager {
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
       * Retrieves a single collaboration.
       * @param {string} collaborationId The ID of the collaboration.
      Example: "1234"
       * @param {GetCollaborationByIdOptionalsInput} optionalsInput
       * @returns {Promise<Collaboration>}
       */
    async getCollaborationById(collaborationId, optionalsInput = {}) {
        const optionals = new GetCollaborationByIdOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaborations/', toString(collaborationId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaboration(response.data),
            rawData: response.data,
        };
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
    async updateCollaborationById(collaborationId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateCollaborationByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaborations/', toString(collaborationId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateCollaborationByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        if (toString(response.status) == '204') {
            return void 0;
        }
        return {
            ...deserializeCollaboration(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes a single collaboration.
       * @param {string} collaborationId The ID of the collaboration.
      Example: "1234"
       * @param {DeleteCollaborationByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteCollaborationById(collaborationId, optionalsInput = {}) {
        const optionals = new DeleteCollaborationByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaborations/', toString(collaborationId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
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
    async createCollaboration(requestBody, optionalsInput = {}) {
        const optionals = new CreateCollaborationOptionals({
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
            ['notify']: toString(queryParams.notify),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        return {
            ...deserializeCollaboration(response.data),
            rawData: response.data,
        };
    }
}
export function serializeUpdateCollaborationByIdRequestBodyRoleField(val) {
    return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyRoleField(val) {
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
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateCollaborationByIdRequestBodyRoleField",
    });
}
export function serializeUpdateCollaborationByIdRequestBodyStatusField(val) {
    return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyStatusField(val) {
    if (val == 'pending') {
        return val;
    }
    if (val == 'accepted') {
        return val;
    }
    if (val == 'rejected') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateCollaborationByIdRequestBodyStatusField",
    });
}
export function serializeUpdateCollaborationByIdRequestBody(val) {
    return {
        ['role']: serializeUpdateCollaborationByIdRequestBodyRoleField(val.role),
        ['status']: val.status == void 0
            ? val.status
            : serializeUpdateCollaborationByIdRequestBodyStatusField(val.status),
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : serializeDateTime(val.expiresAt),
        ['can_view_path']: val.canViewPath,
    };
}
export function deserializeUpdateCollaborationByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateCollaborationByIdRequestBody"',
        });
    }
    if (val.role == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "role" of type "UpdateCollaborationByIdRequestBody" to be defined',
        });
    }
    const role = deserializeUpdateCollaborationByIdRequestBodyRoleField(val.role);
    const status = val.status == void 0
        ? void 0
        : deserializeUpdateCollaborationByIdRequestBodyStatusField(val.status);
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "UpdateCollaborationByIdRequestBody"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
    if (!(val.can_view_path == void 0) && !sdIsBoolean(val.can_view_path)) {
        throw new BoxSdkError({
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
export function serializeCreateCollaborationRequestBodyItemTypeField(val) {
    return val;
}
export function deserializeCreateCollaborationRequestBodyItemTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateCollaborationRequestBodyItemTypeField",
    });
}
export function serializeCreateCollaborationRequestBodyItemField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateCollaborationRequestBodyItemTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateCollaborationRequestBodyItemField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationRequestBodyItemField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateCollaborationRequestBodyItemTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateCollaborationRequestBodyItemField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateCollaborationRequestBodyAccessibleByTypeField(val) {
    return val;
}
export function deserializeCreateCollaborationRequestBodyAccessibleByTypeField(val) {
    if (val == 'user') {
        return val;
    }
    if (val == 'group') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateCollaborationRequestBodyAccessibleByTypeField",
    });
}
export function serializeCreateCollaborationRequestBodyAccessibleByField(val) {
    return {
        ['type']: serializeCreateCollaborationRequestBodyAccessibleByTypeField(val.type),
        ['id']: val.id,
        ['login']: val.login,
    };
}
export function deserializeCreateCollaborationRequestBodyAccessibleByField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationRequestBodyAccessibleByField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateCollaborationRequestBodyAccessibleByField" to be defined',
        });
    }
    const type = deserializeCreateCollaborationRequestBodyAccessibleByTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateCollaborationRequestBodyAccessibleByField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
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
export function serializeCreateCollaborationRequestBodyRoleField(val) {
    return val;
}
export function deserializeCreateCollaborationRequestBodyRoleField(val) {
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
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateCollaborationRequestBodyRoleField",
    });
}
export function serializeCreateCollaborationRequestBody(val) {
    return {
        ['item']: serializeCreateCollaborationRequestBodyItemField(val.item),
        ['accessible_by']: serializeCreateCollaborationRequestBodyAccessibleByField(val.accessibleBy),
        ['role']: serializeCreateCollaborationRequestBodyRoleField(val.role),
        ['is_access_only']: val.isAccessOnly,
        ['can_view_path']: val.canViewPath,
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : serializeDateTime(val.expiresAt),
    };
}
export function deserializeCreateCollaborationRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationRequestBody"',
        });
    }
    if (val.item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item" of type "CreateCollaborationRequestBody" to be defined',
        });
    }
    const item = deserializeCreateCollaborationRequestBodyItemField(val.item);
    if (val.accessible_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "accessible_by" of type "CreateCollaborationRequestBody" to be defined',
        });
    }
    const accessibleBy = deserializeCreateCollaborationRequestBodyAccessibleByField(val.accessible_by);
    if (val.role == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "role" of type "CreateCollaborationRequestBody" to be defined',
        });
    }
    const role = deserializeCreateCollaborationRequestBodyRoleField(val.role);
    if (!(val.is_access_only == void 0) && !sdIsBoolean(val.is_access_only)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_access_only" of type "CreateCollaborationRequestBody"',
        });
    }
    const isAccessOnly = val.is_access_only == void 0 ? void 0 : val.is_access_only;
    if (!(val.can_view_path == void 0) && !sdIsBoolean(val.can_view_path)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_view_path" of type "CreateCollaborationRequestBody"',
        });
    }
    const canViewPath = val.can_view_path == void 0 ? void 0 : val.can_view_path;
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "CreateCollaborationRequestBody"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
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