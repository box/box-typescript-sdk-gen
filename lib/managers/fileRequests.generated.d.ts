import { FileRequest } from '../schemas/fileRequest.generated.js';
import { FileRequestUpdateRequest } from '../schemas/fileRequestUpdateRequest.generated.js';
import { FileRequestCopyRequest } from '../schemas/fileRequestCopyRequest.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetFileRequestByIdOptionals {
    readonly headers: GetFileRequestByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileRequestByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileRequestByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileRequestByIdOptionalsInput {
    readonly headers?: GetFileRequestByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileRequestByIdOptionals {
    readonly headers: UpdateFileRequestByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileRequestByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileRequestByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileRequestByIdOptionalsInput {
    readonly headers?: UpdateFileRequestByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileRequestByIdOptionals {
    readonly headers: DeleteFileRequestByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileRequestByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileRequestByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileRequestByIdOptionalsInput {
    readonly headers?: DeleteFileRequestByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFileRequestCopyOptionals {
    readonly headers: CreateFileRequestCopyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileRequestCopyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFileRequestCopyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFileRequestCopyOptionalsInput {
    readonly headers?: CreateFileRequestCopyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileRequestByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileRequestByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileRequestByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileRequestByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UpdateFileRequestByIdHeaders {
    /**
     * Ensures this item hasn't recently changed before
     * making changes.
     *
     * Pass in the item's last observed `etag` value
     * into this header and the endpoint will fail
     * with a `412 Precondition Failed` if it
     * has changed since. */
    readonly ifMatch?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFileRequestByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileRequestByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFileRequestByIdHeadersInput {
    /**
     * Ensures this item hasn't recently changed before
     * making changes.
     *
     * Pass in the item's last observed `etag` value
     * into this header and the endpoint will fail
     * with a `412 Precondition Failed` if it
     * has changed since. */
    readonly ifMatch?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileRequestByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileRequestByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileRequestByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileRequestByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateFileRequestCopyHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileRequestCopyHeaders, 'extraHeaders'> & Partial<Pick<CreateFileRequestCopyHeaders, 'extraHeaders'>>);
}
export interface CreateFileRequestCopyHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileRequestsManager, 'networkSession' | 'getFileRequestById' | 'updateFileRequestById' | 'deleteFileRequestById' | 'createFileRequestCopy'> & Partial<Pick<FileRequestsManager, 'networkSession'>>);
    /**
       * Retrieves the information about a file request.
       * @param {string} fileRequestId The unique identifier that represent a file request.
      
      The ID for any file request can be determined
      by visiting a file request builder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/filerequest/123`
      the `file_request_id` is `123`.
      Example: "123"
       * @param {GetFileRequestByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileRequest>}
       */
    getFileRequestById(fileRequestId: string, optionalsInput?: GetFileRequestByIdOptionalsInput): Promise<FileRequest>;
    /**
       * Updates a file request. This can be used to activate or
       * deactivate a file request.
       * @param {string} fileRequestId The unique identifier that represent a file request.
      
      The ID for any file request can be determined
      by visiting a file request builder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/filerequest/123`
      the `file_request_id` is `123`.
      Example: "123"
       * @param {FileRequestUpdateRequest} requestBody Request body of updateFileRequestById method
       * @param {UpdateFileRequestByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileRequest>}
       */
    updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, optionalsInput?: UpdateFileRequestByIdOptionalsInput): Promise<FileRequest>;
    /**
       * Deletes a file request permanently.
       * @param {string} fileRequestId The unique identifier that represent a file request.
      
      The ID for any file request can be determined
      by visiting a file request builder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/filerequest/123`
      the `file_request_id` is `123`.
      Example: "123"
       * @param {DeleteFileRequestByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFileRequestById(fileRequestId: string, optionalsInput?: DeleteFileRequestByIdOptionalsInput): Promise<undefined>;
    /**
       * Copies an existing file request that is already present on one folder,
       * and applies it to another folder.
       * @param {string} fileRequestId The unique identifier that represent a file request.
      
      The ID for any file request can be determined
      by visiting a file request builder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/filerequest/123`
      the `file_request_id` is `123`.
      Example: "123"
       * @param {FileRequestCopyRequest} requestBody Request body of createFileRequestCopy method
       * @param {CreateFileRequestCopyOptionalsInput} optionalsInput
       * @returns {Promise<FileRequest>}
       */
    createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest, optionalsInput?: CreateFileRequestCopyOptionalsInput): Promise<FileRequest>;
}
export interface FileRequestsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=fileRequests.generated.d.ts.map