import { Classification } from '../schemas/classification.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetClassificationOnFolderOptionals {
    readonly headers: GetClassificationOnFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetClassificationOnFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetClassificationOnFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetClassificationOnFolderOptionalsInput {
    readonly headers?: GetClassificationOnFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddClassificationToFolderOptionals {
    readonly requestBody: AddClassificationToFolderRequestBody;
    readonly headers: AddClassificationToFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddClassificationToFolderOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<AddClassificationToFolderOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface AddClassificationToFolderOptionalsInput {
    readonly requestBody?: AddClassificationToFolderRequestBody;
    readonly headers?: AddClassificationToFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateClassificationOnFolderOptionals {
    readonly headers: UpdateClassificationOnFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateClassificationOnFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateClassificationOnFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateClassificationOnFolderOptionalsInput {
    readonly headers?: UpdateClassificationOnFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteClassificationFromFolderOptionals {
    readonly headers: DeleteClassificationFromFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteClassificationFromFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteClassificationFromFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteClassificationFromFolderOptionalsInput {
    readonly headers?: DeleteClassificationFromFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetClassificationOnFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetClassificationOnFolderHeaders, 'extraHeaders'> & Partial<Pick<GetClassificationOnFolderHeaders, 'extraHeaders'>>);
}
export interface GetClassificationOnFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface AddClassificationToFolderRequestBody {
    /**
     * The name of the classification to apply to this folder.
     *
     * To list the available classifications in an enterprise,
     * use the classification API to retrieve the
     * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
     * which lists all available classification keys. */
    readonly boxSecurityClassificationKey?: string;
    readonly rawData?: SerializedData;
}
export declare class AddClassificationToFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddClassificationToFolderHeaders, 'extraHeaders'> & Partial<Pick<AddClassificationToFolderHeaders, 'extraHeaders'>>);
}
export interface AddClassificationToFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateClassificationOnFolderRequestBodyOpField = 'replace' | string;
export type UpdateClassificationOnFolderRequestBodyPathField = '/Box__Security__Classification__Key' | string;
export declare class UpdateClassificationOnFolderRequestBody {
    /**
     * The value will always be `replace`. */
    readonly op: UpdateClassificationOnFolderRequestBodyOpField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly path: UpdateClassificationOnFolderRequestBodyPathField;
    /**
     * The name of the classification to apply to this folder.
     *
     * To list the available classifications in an enterprise,
     * use the classification API to retrieve the
     * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
     * which lists all available classification keys. */
    readonly value: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<UpdateClassificationOnFolderRequestBody, 'op' | 'path'> & Partial<Pick<UpdateClassificationOnFolderRequestBody, 'op' | 'path'>>);
}
export interface UpdateClassificationOnFolderRequestBodyInput {
    /**
     * The value will always be `replace`. */
    readonly op?: UpdateClassificationOnFolderRequestBodyOpField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly path?: UpdateClassificationOnFolderRequestBodyPathField;
    /**
     * The name of the classification to apply to this folder.
     *
     * To list the available classifications in an enterprise,
     * use the classification API to retrieve the
     * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
     * which lists all available classification keys. */
    readonly value: string;
    readonly rawData?: SerializedData;
}
export declare class UpdateClassificationOnFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateClassificationOnFolderHeaders, 'extraHeaders'> & Partial<Pick<UpdateClassificationOnFolderHeaders, 'extraHeaders'>>);
}
export interface UpdateClassificationOnFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteClassificationFromFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteClassificationFromFolderHeaders, 'extraHeaders'> & Partial<Pick<DeleteClassificationFromFolderHeaders, 'extraHeaders'>>);
}
export interface DeleteClassificationFromFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FolderClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FolderClassificationsManager, 'networkSession' | 'getClassificationOnFolder' | 'addClassificationToFolder' | 'updateClassificationOnFolder' | 'deleteClassificationFromFolder'> & Partial<Pick<FolderClassificationsManager, 'networkSession'>>);
    /**
       * Retrieves the classification metadata instance that
       * has been applied to a folder.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/folders/:id/enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetClassificationOnFolderOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    getClassificationOnFolder(folderId: string, optionalsInput?: GetClassificationOnFolderOptionalsInput): Promise<Classification>;
    /**
       * Adds a classification to a folder by specifying the label of the
       * classification to add.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/folders/:id/enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {AddClassificationToFolderOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    addClassificationToFolder(folderId: string, optionalsInput?: AddClassificationToFolderOptionalsInput): Promise<Classification>;
    /**
       * Updates a classification on a folder.
       *
       * The classification can only be updated if a classification has already been
       * applied to the folder before. When editing classifications, only values are
       * defined for the enterprise will be accepted.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {readonly UpdateClassificationOnFolderRequestBody[]} requestBody Request body of updateClassificationOnFolder method
       * @param {UpdateClassificationOnFolderOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    updateClassificationOnFolder(folderId: string, requestBody: readonly UpdateClassificationOnFolderRequestBody[], optionalsInput?: UpdateClassificationOnFolderOptionalsInput): Promise<Classification>;
    /**
       * Removes any classifications from a folder.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/folders/:id/enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteClassificationFromFolderOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteClassificationFromFolder(folderId: string, optionalsInput?: DeleteClassificationFromFolderOptionalsInput): Promise<undefined>;
}
export interface FolderClassificationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddClassificationToFolderRequestBody(val: AddClassificationToFolderRequestBody): SerializedData;
export declare function deserializeAddClassificationToFolderRequestBody(val: SerializedData): AddClassificationToFolderRequestBody;
export declare function serializeUpdateClassificationOnFolderRequestBodyOpField(val: UpdateClassificationOnFolderRequestBodyOpField): SerializedData;
export declare function deserializeUpdateClassificationOnFolderRequestBodyOpField(val: SerializedData): UpdateClassificationOnFolderRequestBodyOpField;
export declare function serializeUpdateClassificationOnFolderRequestBodyPathField(val: UpdateClassificationOnFolderRequestBodyPathField): SerializedData;
export declare function deserializeUpdateClassificationOnFolderRequestBodyPathField(val: SerializedData): UpdateClassificationOnFolderRequestBodyPathField;
export declare function serializeUpdateClassificationOnFolderRequestBody(val: UpdateClassificationOnFolderRequestBody): SerializedData;
export declare function deserializeUpdateClassificationOnFolderRequestBody(val: SerializedData): UpdateClassificationOnFolderRequestBody;
export declare function serializeUpdateClassificationOnFolderRequestBodyInput(val: UpdateClassificationOnFolderRequestBodyInput): SerializedData;
export declare function deserializeUpdateClassificationOnFolderRequestBodyInput(val: SerializedData): UpdateClassificationOnFolderRequestBodyInput;
