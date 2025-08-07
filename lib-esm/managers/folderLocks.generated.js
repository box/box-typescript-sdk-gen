import { deserializeFolderLocks } from '../schemas/folderLocks.generated.js';
import { deserializeFolderLock } from '../schemas/folderLock.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFolderLocksOptionals {
    constructor(fields) {
        this.headers = new GetFolderLocksHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateFolderLockOptionals {
    constructor(fields) {
        this.headers = new CreateFolderLockHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteFolderLockByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFolderLockByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFolderLocksHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateFolderLockHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteFolderLockByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FolderLocksManager {
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
     * Retrieves folder lock details for a given folder.
     *
     * You must be authenticated as the owner or co-owner of the folder to
     * use this endpoint.
     * @param {GetFolderLocksQueryParams} queryParams Query parameters of getFolderLocks method
     * @param {GetFolderLocksOptionalsInput} optionalsInput
     * @returns {Promise<FolderLocks>}
     */
    async getFolderLocks(queryParams, optionalsInput = {}) {
        const optionals = new GetFolderLocksOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['folder_id']: toString(queryParams.folderId),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folder_locks'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFolderLocks(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a folder lock on a folder, preventing it from being moved and/or
     * deleted.
     *
     * You must be authenticated as the owner or co-owner of the folder to
     * use this endpoint.
     * @param {CreateFolderLockRequestBody} requestBody Request body of createFolderLock method
     * @param {CreateFolderLockOptionalsInput} optionalsInput
     * @returns {Promise<FolderLock>}
     */
    async createFolderLock(requestBody, optionalsInput = {}) {
        const optionals = new CreateFolderLockOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folder_locks'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateFolderLockRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFolderLock(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes a folder lock on a given folder.
       *
       * You must be authenticated as the owner or co-owner of the folder to
       * use this endpoint.
       * @param {string} folderLockId The ID of the folder lock.
      Example: "12345"
       * @param {DeleteFolderLockByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteFolderLockById(folderLockId, optionalsInput = {}) {
        const optionals = new DeleteFolderLockByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folder_locks/', toString(folderLockId)),
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
export function serializeCreateFolderLockRequestBodyLockedOperationsField(val) {
    return { ['move']: val.move, ['delete']: val.delete };
}
export function deserializeCreateFolderLockRequestBodyLockedOperationsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFolderLockRequestBodyLockedOperationsField"',
        });
    }
    if (val.move == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "move" of type "CreateFolderLockRequestBodyLockedOperationsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.move)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "move" of type "CreateFolderLockRequestBodyLockedOperationsField"',
        });
    }
    const move = val.move;
    if (val.delete == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "delete" of type "CreateFolderLockRequestBodyLockedOperationsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.delete)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "delete" of type "CreateFolderLockRequestBodyLockedOperationsField"',
        });
    }
    const _delete = val.delete;
    return {
        move: move,
        delete: _delete,
    };
}
export function serializeCreateFolderLockRequestBodyFolderField(val) {
    return { ['type']: val.type, ['id']: val.id };
}
export function deserializeCreateFolderLockRequestBodyFolderField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFolderLockRequestBodyFolderField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateFolderLockRequestBodyFolderField" to be defined',
        });
    }
    if (!sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "CreateFolderLockRequestBodyFolderField"',
        });
    }
    const type = val.type;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateFolderLockRequestBodyFolderField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateFolderLockRequestBodyFolderField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateFolderLockRequestBody(val) {
    return {
        ['locked_operations']: val.lockedOperations == void 0
            ? val.lockedOperations
            : serializeCreateFolderLockRequestBodyLockedOperationsField(val.lockedOperations),
        ['folder']: serializeCreateFolderLockRequestBodyFolderField(val.folder),
    };
}
export function deserializeCreateFolderLockRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFolderLockRequestBody"',
        });
    }
    const lockedOperations = val.locked_operations == void 0
        ? void 0
        : deserializeCreateFolderLockRequestBodyLockedOperationsField(val.locked_operations);
    if (val.folder == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "folder" of type "CreateFolderLockRequestBody" to be defined',
        });
    }
    const folder = deserializeCreateFolderLockRequestBodyFolderField(val.folder);
    return {
        lockedOperations: lockedOperations,
        folder: folder,
    };
}
//# sourceMappingURL=folderLocks.generated.js.map