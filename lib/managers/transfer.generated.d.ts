import { FolderFull } from '../schemas/folderFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class TransferOwnedFolderOptionals {
    readonly queryParams: TransferOwnedFolderQueryParams;
    readonly headers: TransferOwnedFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<TransferOwnedFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<TransferOwnedFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface TransferOwnedFolderOptionalsInput {
    readonly queryParams?: TransferOwnedFolderQueryParams;
    readonly headers?: TransferOwnedFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface TransferOwnedFolderRequestBodyOwnedByField {
    /**
     * The ID of the user who the folder will be
     * transferred to. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface TransferOwnedFolderRequestBody {
    /**
     * The user who the folder will be transferred to. */
    readonly ownedBy: TransferOwnedFolderRequestBodyOwnedByField;
    readonly rawData?: SerializedData;
}
export interface TransferOwnedFolderQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
    /**
     * Determines if users should receive email notification
     * for the action performed. */
    readonly notify?: boolean;
}
export declare class TransferOwnedFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<TransferOwnedFolderHeaders, 'extraHeaders'> & Partial<Pick<TransferOwnedFolderHeaders, 'extraHeaders'>>);
}
export interface TransferOwnedFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TransferManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TransferManager, 'networkSession' | 'transferOwnedFolder'> & Partial<Pick<TransferManager, 'networkSession'>>);
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
    transferOwnedFolder(userId: string, requestBody: TransferOwnedFolderRequestBody, optionalsInput?: TransferOwnedFolderOptionalsInput): Promise<FolderFull>;
}
export interface TransferManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeTransferOwnedFolderRequestBodyOwnedByField(val: TransferOwnedFolderRequestBodyOwnedByField): SerializedData;
export declare function deserializeTransferOwnedFolderRequestBodyOwnedByField(val: SerializedData): TransferOwnedFolderRequestBodyOwnedByField;
export declare function serializeTransferOwnedFolderRequestBody(val: TransferOwnedFolderRequestBody): SerializedData;
export declare function deserializeTransferOwnedFolderRequestBody(val: SerializedData): TransferOwnedFolderRequestBody;
//# sourceMappingURL=transfer.generated.d.ts.map