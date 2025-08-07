import { Watermark } from '../schemas/watermark.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFolderWatermarkOptionals {
    readonly headers: GetFolderWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFolderWatermarkOptionalsInput {
    readonly headers?: GetFolderWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFolderWatermarkOptionals {
    readonly headers: UpdateFolderWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFolderWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFolderWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFolderWatermarkOptionalsInput {
    readonly headers?: UpdateFolderWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFolderWatermarkOptionals {
    readonly headers: DeleteFolderWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFolderWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFolderWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFolderWatermarkOptionalsInput {
    readonly headers?: DeleteFolderWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderWatermarkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderWatermarkHeaders, 'extraHeaders'> & Partial<Pick<GetFolderWatermarkHeaders, 'extraHeaders'>>);
}
export interface GetFolderWatermarkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFolderWatermarkRequestBodyWatermarkImprintField = 'default' | string;
export declare class UpdateFolderWatermarkRequestBodyWatermarkField {
    /**
     * The type of watermark to apply.
     *
     * Currently only supports one option. */
    readonly imprint: UpdateFolderWatermarkRequestBodyWatermarkImprintField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<UpdateFolderWatermarkRequestBodyWatermarkField, 'imprint'> & Partial<Pick<UpdateFolderWatermarkRequestBodyWatermarkField, 'imprint'>>);
}
export interface UpdateFolderWatermarkRequestBodyWatermarkFieldInput {
    /**
     * The type of watermark to apply.
     *
     * Currently only supports one option. */
    readonly imprint?: UpdateFolderWatermarkRequestBodyWatermarkImprintField;
    readonly rawData?: SerializedData;
}
export interface UpdateFolderWatermarkRequestBody {
    /**
     * The watermark to imprint on the folder. */
    readonly watermark: UpdateFolderWatermarkRequestBodyWatermarkField;
    readonly rawData?: SerializedData;
}
export declare class UpdateFolderWatermarkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFolderWatermarkHeaders, 'extraHeaders'> & Partial<Pick<UpdateFolderWatermarkHeaders, 'extraHeaders'>>);
}
export interface UpdateFolderWatermarkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFolderWatermarkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFolderWatermarkHeaders, 'extraHeaders'> & Partial<Pick<DeleteFolderWatermarkHeaders, 'extraHeaders'>>);
}
export interface DeleteFolderWatermarkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FolderWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FolderWatermarksManager, 'networkSession' | 'getFolderWatermark' | 'updateFolderWatermark' | 'deleteFolderWatermark'> & Partial<Pick<FolderWatermarksManager, 'networkSession'>>);
    /**
       * Retrieve the watermark for a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    getFolderWatermark(folderId: string, optionalsInput?: GetFolderWatermarkOptionalsInput): Promise<Watermark>;
    /**
       * Applies or update a watermark on a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateFolderWatermarkRequestBody} requestBody Request body of updateFolderWatermark method
       * @param {UpdateFolderWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    updateFolderWatermark(folderId: string, requestBody: UpdateFolderWatermarkRequestBody, optionalsInput?: UpdateFolderWatermarkOptionalsInput): Promise<Watermark>;
    /**
       * Removes the watermark from a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteFolderWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFolderWatermark(folderId: string, optionalsInput?: DeleteFolderWatermarkOptionalsInput): Promise<undefined>;
}
export interface FolderWatermarksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val: UpdateFolderWatermarkRequestBodyWatermarkImprintField): SerializedData;
export declare function deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val: SerializedData): UpdateFolderWatermarkRequestBodyWatermarkImprintField;
export declare function serializeUpdateFolderWatermarkRequestBodyWatermarkField(val: UpdateFolderWatermarkRequestBodyWatermarkField): SerializedData;
export declare function deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val: SerializedData): UpdateFolderWatermarkRequestBodyWatermarkField;
export declare function serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val: UpdateFolderWatermarkRequestBodyWatermarkFieldInput): SerializedData;
export declare function deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val: SerializedData): UpdateFolderWatermarkRequestBodyWatermarkFieldInput;
export declare function serializeUpdateFolderWatermarkRequestBody(val: UpdateFolderWatermarkRequestBody): SerializedData;
export declare function deserializeUpdateFolderWatermarkRequestBody(val: SerializedData): UpdateFolderWatermarkRequestBody;
//# sourceMappingURL=folderWatermarks.generated.d.ts.map