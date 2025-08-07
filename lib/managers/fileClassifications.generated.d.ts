import { Classification } from '../schemas/classification.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetClassificationOnFileOptionals {
    readonly headers: GetClassificationOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetClassificationOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetClassificationOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetClassificationOnFileOptionalsInput {
    readonly headers?: GetClassificationOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddClassificationToFileOptionals {
    readonly requestBody: AddClassificationToFileRequestBody;
    readonly headers: AddClassificationToFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddClassificationToFileOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<AddClassificationToFileOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface AddClassificationToFileOptionalsInput {
    readonly requestBody?: AddClassificationToFileRequestBody;
    readonly headers?: AddClassificationToFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateClassificationOnFileOptionals {
    readonly headers: UpdateClassificationOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateClassificationOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateClassificationOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateClassificationOnFileOptionalsInput {
    readonly headers?: UpdateClassificationOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteClassificationFromFileOptionals {
    readonly headers: DeleteClassificationFromFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteClassificationFromFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteClassificationFromFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteClassificationFromFileOptionalsInput {
    readonly headers?: DeleteClassificationFromFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetClassificationOnFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetClassificationOnFileHeaders, 'extraHeaders'> & Partial<Pick<GetClassificationOnFileHeaders, 'extraHeaders'>>);
}
export interface GetClassificationOnFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface AddClassificationToFileRequestBody {
    /**
     * The name of the classification to apply to this file.
     *
     * To list the available classifications in an enterprise,
     * use the classification API to retrieve the
     * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
     * which lists all available classification keys. */
    readonly boxSecurityClassificationKey?: string;
    readonly rawData?: SerializedData;
}
export declare class AddClassificationToFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddClassificationToFileHeaders, 'extraHeaders'> & Partial<Pick<AddClassificationToFileHeaders, 'extraHeaders'>>);
}
export interface AddClassificationToFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateClassificationOnFileRequestBodyOpField = 'replace' | string;
export type UpdateClassificationOnFileRequestBodyPathField = '/Box__Security__Classification__Key' | string;
export declare class UpdateClassificationOnFileRequestBody {
    /**
     * The value will always be `replace`. */
    readonly op: UpdateClassificationOnFileRequestBodyOpField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly path: UpdateClassificationOnFileRequestBodyPathField;
    /**
     * The name of the classification to apply to this file.
     *
     * To list the available classifications in an enterprise,
     * use the classification API to retrieve the
     * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
     * which lists all available classification keys. */
    readonly value: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<UpdateClassificationOnFileRequestBody, 'op' | 'path'> & Partial<Pick<UpdateClassificationOnFileRequestBody, 'op' | 'path'>>);
}
export interface UpdateClassificationOnFileRequestBodyInput {
    /**
     * The value will always be `replace`. */
    readonly op?: UpdateClassificationOnFileRequestBodyOpField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly path?: UpdateClassificationOnFileRequestBodyPathField;
    /**
     * The name of the classification to apply to this file.
     *
     * To list the available classifications in an enterprise,
     * use the classification API to retrieve the
     * [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema)
     * which lists all available classification keys. */
    readonly value: string;
    readonly rawData?: SerializedData;
}
export declare class UpdateClassificationOnFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateClassificationOnFileHeaders, 'extraHeaders'> & Partial<Pick<UpdateClassificationOnFileHeaders, 'extraHeaders'>>);
}
export interface UpdateClassificationOnFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteClassificationFromFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteClassificationFromFileHeaders, 'extraHeaders'> & Partial<Pick<DeleteClassificationFromFileHeaders, 'extraHeaders'>>);
}
export interface DeleteClassificationFromFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileClassificationsManager, 'networkSession' | 'getClassificationOnFile' | 'addClassificationToFile' | 'updateClassificationOnFile' | 'deleteClassificationFromFile'> & Partial<Pick<FileClassificationsManager, 'networkSession'>>);
    /**
       * Retrieves the classification metadata instance that
       * has been applied to a file.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetClassificationOnFileOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    getClassificationOnFile(fileId: string, optionalsInput?: GetClassificationOnFileOptionalsInput): Promise<Classification>;
    /**
       * Adds a classification to a file by specifying the label of the
       * classification to add.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {AddClassificationToFileOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    addClassificationToFile(fileId: string, optionalsInput?: AddClassificationToFileOptionalsInput): Promise<Classification>;
    /**
       * Updates a classification on a file.
       *
       * The classification can only be updated if a classification has already been
       * applied to the file before. When editing classifications, only values are
       * defined for the enterprise will be accepted.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {readonly UpdateClassificationOnFileRequestBody[]} requestBody Request body of updateClassificationOnFile method
       * @param {UpdateClassificationOnFileOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    updateClassificationOnFile(fileId: string, requestBody: readonly UpdateClassificationOnFileRequestBody[], optionalsInput?: UpdateClassificationOnFileOptionalsInput): Promise<Classification>;
    /**
       * Removes any classifications from a file.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteClassificationFromFileOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteClassificationFromFile(fileId: string, optionalsInput?: DeleteClassificationFromFileOptionalsInput): Promise<undefined>;
}
export interface FileClassificationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddClassificationToFileRequestBody(val: AddClassificationToFileRequestBody): SerializedData;
export declare function deserializeAddClassificationToFileRequestBody(val: SerializedData): AddClassificationToFileRequestBody;
export declare function serializeUpdateClassificationOnFileRequestBodyOpField(val: UpdateClassificationOnFileRequestBodyOpField): SerializedData;
export declare function deserializeUpdateClassificationOnFileRequestBodyOpField(val: SerializedData): UpdateClassificationOnFileRequestBodyOpField;
export declare function serializeUpdateClassificationOnFileRequestBodyPathField(val: UpdateClassificationOnFileRequestBodyPathField): SerializedData;
export declare function deserializeUpdateClassificationOnFileRequestBodyPathField(val: SerializedData): UpdateClassificationOnFileRequestBodyPathField;
export declare function serializeUpdateClassificationOnFileRequestBody(val: UpdateClassificationOnFileRequestBody): SerializedData;
export declare function deserializeUpdateClassificationOnFileRequestBody(val: SerializedData): UpdateClassificationOnFileRequestBody;
export declare function serializeUpdateClassificationOnFileRequestBodyInput(val: UpdateClassificationOnFileRequestBodyInput): SerializedData;
export declare function deserializeUpdateClassificationOnFileRequestBodyInput(val: SerializedData): UpdateClassificationOnFileRequestBodyInput;
//# sourceMappingURL=fileClassifications.generated.d.ts.map