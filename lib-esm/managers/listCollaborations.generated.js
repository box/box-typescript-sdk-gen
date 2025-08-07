import { deserializeCollaborations } from '../schemas/collaborations.generated.js';
import { deserializeCollaborationsOffsetPaginated } from '../schemas/collaborationsOffsetPaginated.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
export class GetFileCollaborationsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileCollaborationsHeaders({});
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
export class GetFolderCollaborationsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFolderCollaborationsHeaders({});
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
export class GetCollaborationsOptionals {
    constructor(fields) {
        this.headers = new GetCollaborationsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetGroupCollaborationsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetGroupCollaborationsHeaders({});
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
export class GetFileCollaborationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFolderCollaborationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetCollaborationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetGroupCollaborationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ListCollaborationsManager {
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
       * Retrieves a list of pending and active collaborations for a
       * file. This returns all the users that have access to the file
       * or have been invited to the file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileCollaborationsOptionalsInput} optionalsInput
       * @returns {Promise<Collaborations>}
       */
    async getFileCollaborations(fileId, optionalsInput = {}) {
        const optionals = new GetFileCollaborationsOptionals({
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
            ['limit']: toString(queryParams.limit),
            ['marker']: toString(queryParams.marker),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/collaborations'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborations(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves a list of pending and active collaborations for a
       * folder. This returns all the users that have access to the folder
       * or have been invited to the folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      Example: "12345"
       * @param {GetFolderCollaborationsOptionalsInput} optionalsInput
       * @returns {Promise<Collaborations>}
       */
    async getFolderCollaborations(folderId, optionalsInput = {}) {
        const optionals = new GetFolderCollaborationsOptionals({
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
            ['limit']: toString(queryParams.limit),
            ['marker']: toString(queryParams.marker),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/collaborations'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborations(response.data),
            rawData: response.data,
        };
    }
    /**
     * Retrieves all pending collaboration invites for this user.
     * @param {GetCollaborationsQueryParams} queryParams Query parameters of getCollaborations method
     * @param {GetCollaborationsOptionalsInput} optionalsInput
     * @returns {Promise<CollaborationsOffsetPaginated>}
     */
    async getCollaborations(queryParams, optionalsInput = {}) {
        const optionals = new GetCollaborationsOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['status']: toString(queryParams.status),
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['offset']: toString(queryParams.offset),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaborations'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborationsOffsetPaginated(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves all the collaborations for a group. The user
       * must have admin permissions to inspect enterprise's groups.
       *
       * Each collaboration object has details on which files or
       * folders the group has access to and with what role.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {GetGroupCollaborationsOptionalsInput} optionalsInput
       * @returns {Promise<CollaborationsOffsetPaginated>}
       */
    async getGroupCollaborations(groupId, optionalsInput = {}) {
        const optionals = new GetGroupCollaborationsOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', toString(groupId), '/collaborations'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborationsOffsetPaginated(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetCollaborationsQueryParamsStatusField(val) {
    return val;
}
export function deserializeGetCollaborationsQueryParamsStatusField(val) {
    if (val == 'pending') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetCollaborationsQueryParamsStatusField",
    });
}
//# sourceMappingURL=listCollaborations.generated.js.map