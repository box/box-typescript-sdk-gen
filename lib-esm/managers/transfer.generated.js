import { deserializeFolderFull } from '../schemas/folderFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class TransferOwnedFolderOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new TransferOwnedFolderHeaders({});
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
export class TransferOwnedFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class TransferManager {
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
       * Move all of the items (files, folders and workflows) owned by a user into
       * another user's account
       *
       * Only the root folder (`0`) can be transferred.
       *
       * Folders can only be moved across users by users with administrative
       * permissions.
       *
       * All existing shared links and folder-level collaborations are transferred
       * during the operation. Please note that while collaborations at the individual
       * file-level are transferred during the operation, the collaborations are
       * deleted when the original user is deleted.
       *
       * If the user has a large number of items across all folders, the call will
       * be run asynchronously. If the operation is not completed within 10 minutes,
       * the user will receive a 200 OK response, and the operation will continue running.
       *
       * If the destination path has a metadata cascade policy attached to any of
       * the parent folders, a metadata cascade operation will be kicked off
       * asynchronously.
       *
       * There is currently no way to check for when this operation is finished.
       *
       * The destination folder's name will be in the format `{User}'s Files and
       * Folders`, where `{User}` is the display name of the user.
       *
       * To make this API call your application will need to have the "Read and write
       * all files and folders stored in Box" scope enabled.
       *
       * Please make sure the destination user has access to `Relay` or `Relay Lite`,
       * and has access to the files and folders involved in the workflows being
       * transferred.
       *
       * Admins will receive an email when the operation is completed.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {TransferOwnedFolderRequestBody} requestBody Request body of transferOwnedFolder method
       * @param {TransferOwnedFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    async transferOwnedFolder(userId, requestBody, optionalsInput = {}) {
        const optionals = new TransferOwnedFolderOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId), '/folders/0'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeTransferOwnedFolderRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFolderFull(response.data),
            rawData: response.data,
        };
    }
}
export function serializeTransferOwnedFolderRequestBodyOwnedByField(val) {
    return { ['id']: val.id };
}
export function deserializeTransferOwnedFolderRequestBodyOwnedByField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TransferOwnedFolderRequestBodyOwnedByField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TransferOwnedFolderRequestBodyOwnedByField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TransferOwnedFolderRequestBodyOwnedByField"',
        });
    }
    const id = val.id;
    return { id: id };
}
export function serializeTransferOwnedFolderRequestBody(val) {
    return {
        ['owned_by']: serializeTransferOwnedFolderRequestBodyOwnedByField(val.ownedBy),
    };
}
export function deserializeTransferOwnedFolderRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TransferOwnedFolderRequestBody"',
        });
    }
    if (val.owned_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "owned_by" of type "TransferOwnedFolderRequestBody" to be defined',
        });
    }
    const ownedBy = deserializeTransferOwnedFolderRequestBodyOwnedByField(val.owned_by);
    return { ownedBy: ownedBy };
}
//# sourceMappingURL=transfer.generated.js.map