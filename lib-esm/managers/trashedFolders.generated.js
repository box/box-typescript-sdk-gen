import { deserializeTrashFolderRestored } from '../schemas/trashFolderRestored.generated.js';
import { deserializeTrashFolder } from '../schemas/trashFolder.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class RestoreFolderFromTrashOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new RestoreFolderFromTrashHeaders({});
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
export class GetTrashedFolderByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetTrashedFolderByIdHeaders({});
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
export class DeleteTrashedFolderByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteTrashedFolderByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class RestoreFolderFromTrashHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetTrashedFolderByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteTrashedFolderByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class TrashedFoldersManager {
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
       * Restores a folder that has been moved to the trash.
       *
       * An optional new parent ID can be provided to restore the folder to in case the
       * original folder has been deleted.
       *
       * During this operation, part of the file tree will be locked, mainly
       * the source folder and all of its descendants, as well as the destination
       * folder.
       *
       * For the duration of the operation, no other move, copy, delete, or restore
       * operation can performed on any of the locked folders.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {RestoreFolderFromTrashOptionalsInput} optionalsInput
       * @returns {Promise<TrashFolderRestored>}
       */
    async restoreFolderFromTrash(folderId, optionalsInput = {}) {
        const optionals = new RestoreFolderFromTrashOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId)),
            method: 'POST',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeRestoreFolderFromTrashRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTrashFolderRestored(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves a folder that has been moved to the trash.
       *
       * Please note that only if the folder itself has been moved to the
       * trash can it be retrieved with this API call. If instead one of
       * its parent folders was moved to the trash, only that folder
       * can be inspected using the
       * [`GET /folders/:id/trash`](e://get_folders_id_trash) API.
       *
       * To list all items that have been moved to the trash, please
       * use the [`GET /folders/trash/items`](e://get-folders-trash-items/)
       * API.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetTrashedFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<TrashFolder>}
       */
    async getTrashedFolderById(folderId, optionalsInput = {}) {
        const optionals = new GetTrashedFolderByIdOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/trash'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTrashFolder(response.data),
            rawData: response.data,
        };
    }
    /**
       * Permanently deletes a folder that is in the trash.
       * This action cannot be undone.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteTrashedFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteTrashedFolderById(folderId, optionalsInput = {}) {
        const optionals = new DeleteTrashedFolderByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/trash'),
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
export function serializeRestoreFolderFromTrashRequestBodyParentField(val) {
    return { ['id']: val.id };
}
export function deserializeRestoreFolderFromTrashRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RestoreFolderFromTrashRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RestoreFolderFromTrashRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { id: id };
}
export function serializeRestoreFolderFromTrashRequestBody(val) {
    return {
        ['name']: val.name,
        ['parent']: val.parent == void 0
            ? val.parent
            : serializeRestoreFolderFromTrashRequestBodyParentField(val.parent),
    };
}
export function deserializeRestoreFolderFromTrashRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RestoreFolderFromTrashRequestBody"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "RestoreFolderFromTrashRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const parent = val.parent == void 0
        ? void 0
        : deserializeRestoreFolderFromTrashRequestBodyParentField(val.parent);
    return {
        name: name,
        parent: parent,
    };
}
//# sourceMappingURL=trashedFolders.generated.js.map