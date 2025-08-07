import { FileVersions } from '../schemas/fileVersions.generated.js';
import { FileVersionFull } from '../schemas/fileVersionFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileVersionsOptionals {
    readonly queryParams: GetFileVersionsQueryParams;
    readonly headers: GetFileVersionsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionsOptionalsInput {
    readonly queryParams?: GetFileVersionsQueryParams;
    readonly headers?: GetFileVersionsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileVersionByIdOptionals {
    readonly queryParams: GetFileVersionByIdQueryParams;
    readonly headers: GetFileVersionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionByIdOptionalsInput {
    readonly queryParams?: GetFileVersionByIdQueryParams;
    readonly headers?: GetFileVersionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileVersionByIdOptionals {
    readonly headers: DeleteFileVersionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileVersionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileVersionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileVersionByIdOptionalsInput {
    readonly headers?: DeleteFileVersionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileVersionByIdOptionals {
    readonly requestBody: UpdateFileVersionByIdRequestBody;
    readonly headers: UpdateFileVersionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileVersionByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileVersionByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileVersionByIdOptionalsInput {
    readonly requestBody?: UpdateFileVersionByIdRequestBody;
    readonly headers?: UpdateFileVersionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class PromoteFileVersionOptionals {
    readonly requestBody: PromoteFileVersionRequestBody;
    readonly queryParams: PromoteFileVersionQueryParams;
    readonly headers: PromoteFileVersionHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<PromoteFileVersionOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<PromoteFileVersionOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface PromoteFileVersionOptionalsInput {
    readonly requestBody?: PromoteFileVersionRequestBody;
    readonly queryParams?: PromoteFileVersionQueryParams;
    readonly headers?: PromoteFileVersionHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileVersionsQueryParams {
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
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * The offset of the item at which to begin the response.
     *
     * Queries with offset parameter value
     * exceeding 10000 will be rejected
     * with a 400 response. */
    readonly offset?: number;
}
export declare class GetFileVersionsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionsHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionsHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFileVersionByIdQueryParams {
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
}
export declare class GetFileVersionByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileVersionByIdHeaders {
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
    constructor(fields: Omit<DeleteFileVersionByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileVersionByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileVersionByIdHeadersInput {
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
export interface UpdateFileVersionByIdRequestBody {
    /**
     * Set this to `null` to clear
     * the date and restore the file. */
    readonly trashedAt?: string | null;
    readonly rawData?: SerializedData;
}
export declare class UpdateFileVersionByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFileVersionByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileVersionByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFileVersionByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type PromoteFileVersionRequestBodyTypeField = 'file_version';
export interface PromoteFileVersionRequestBody {
    /**
     * The file version ID. */
    readonly id?: string;
    /**
     * The type to promote. */
    readonly type?: PromoteFileVersionRequestBodyTypeField;
    readonly rawData?: SerializedData;
}
export interface PromoteFileVersionQueryParams {
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
}
export declare class PromoteFileVersionHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<PromoteFileVersionHeaders, 'extraHeaders'> & Partial<Pick<PromoteFileVersionHeaders, 'extraHeaders'>>);
}
export interface PromoteFileVersionHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileVersionsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileVersionsManager, 'networkSession' | 'getFileVersions' | 'getFileVersionById' | 'deleteFileVersionById' | 'updateFileVersionById' | 'promoteFileVersion'> & Partial<Pick<FileVersionsManager, 'networkSession'>>);
    /**
       * Retrieve a list of the past versions for a file.
       *
       * Versions are only tracked by Box users with premium accounts. To fetch the ID
       * of the current version of a file, use the `GET /file/:id` API.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileVersionsOptionalsInput} optionalsInput
       * @returns {Promise<FileVersions>}
       */
    getFileVersions(fileId: string, optionalsInput?: GetFileVersionsOptionalsInput): Promise<FileVersions>;
    /**
       * Retrieve a specific version of a file.
       *
       * Versions are only tracked for Box users with premium accounts.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {string} fileVersionId The ID of the file version.
      Example: "1234"
       * @param {GetFileVersionByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionFull>}
       */
    getFileVersionById(fileId: string, fileVersionId: string, optionalsInput?: GetFileVersionByIdOptionalsInput): Promise<FileVersionFull>;
    /**
       * Move a file version to the trash.
       *
       * Versions are only tracked for Box users with premium accounts.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {string} fileVersionId The ID of the file version.
      Example: "1234"
       * @param {DeleteFileVersionByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFileVersionById(fileId: string, fileVersionId: string, optionalsInput?: DeleteFileVersionByIdOptionalsInput): Promise<undefined>;
    /**
       * Restores a specific version of a file after it was deleted.
       * Don't use this endpoint to restore Box Notes,
       * as it works with file formats such as PDF, DOC,
       * PPTX or similar.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {string} fileVersionId The ID of the file version.
      Example: "1234"
       * @param {UpdateFileVersionByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionFull>}
       */
    updateFileVersionById(fileId: string, fileVersionId: string, optionalsInput?: UpdateFileVersionByIdOptionalsInput): Promise<FileVersionFull>;
    /**
       * Promote a specific version of a file.
       *
       * If previous versions exist, this method can be used to
       * promote one of the older versions to the top of the version history.
       *
       * This creates a new copy of the old version and puts it at the
       * top of the versions history. The file will have the exact same contents
       * as the older version, with the the same hash digest, `etag`, and
       * name as the original.
       *
       * Other properties such as comments do not get updated to their
       * former values.
       *
       * Don't use this endpoint to restore Box Notes,
       * as it works with file formats such as PDF, DOC,
       * PPTX or similar.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {PromoteFileVersionOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionFull>}
       */
    promoteFileVersion(fileId: string, optionalsInput?: PromoteFileVersionOptionalsInput): Promise<FileVersionFull>;
}
export interface FileVersionsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateFileVersionByIdRequestBody(val: UpdateFileVersionByIdRequestBody): SerializedData;
export declare function deserializeUpdateFileVersionByIdRequestBody(val: SerializedData): UpdateFileVersionByIdRequestBody;
export declare function serializePromoteFileVersionRequestBodyTypeField(val: PromoteFileVersionRequestBodyTypeField): SerializedData;
export declare function deserializePromoteFileVersionRequestBodyTypeField(val: SerializedData): PromoteFileVersionRequestBodyTypeField;
export declare function serializePromoteFileVersionRequestBody(val: PromoteFileVersionRequestBody): SerializedData;
export declare function deserializePromoteFileVersionRequestBody(val: SerializedData): PromoteFileVersionRequestBody;
//# sourceMappingURL=fileVersions.generated.d.ts.map