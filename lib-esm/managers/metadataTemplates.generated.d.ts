import { MetadataTemplates } from '../schemas/metadataTemplates.generated.js';
import { MetadataTemplate } from '../schemas/metadataTemplate.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetMetadataTemplatesByInstanceIdOptionals {
    readonly headers: GetMetadataTemplatesByInstanceIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataTemplatesByInstanceIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataTemplatesByInstanceIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataTemplatesByInstanceIdOptionalsInput {
    readonly headers?: GetMetadataTemplatesByInstanceIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetMetadataTemplateOptionals {
    readonly headers: GetMetadataTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataTemplateOptionalsInput {
    readonly headers?: GetMetadataTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateMetadataTemplateOptionals {
    readonly headers: UpdateMetadataTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateMetadataTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateMetadataTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateMetadataTemplateOptionalsInput {
    readonly headers?: UpdateMetadataTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteMetadataTemplateOptionals {
    readonly headers: DeleteMetadataTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteMetadataTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteMetadataTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteMetadataTemplateOptionalsInput {
    readonly headers?: DeleteMetadataTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetMetadataTemplateByIdOptionals {
    readonly headers: GetMetadataTemplateByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataTemplateByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataTemplateByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataTemplateByIdOptionalsInput {
    readonly headers?: GetMetadataTemplateByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateMetadataTemplateOptionals {
    readonly headers: CreateMetadataTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateMetadataTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateMetadataTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateMetadataTemplateOptionalsInput {
    readonly headers?: CreateMetadataTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetMetadataTemplatesByInstanceIdQueryParams {
    /**
     * The ID of an instance of the metadata template to find. */
    readonly metadataInstanceId: string;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetMetadataTemplatesByInstanceIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataTemplatesByInstanceIdHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataTemplatesByInstanceIdHeaders, 'extraHeaders'>>);
}
export interface GetMetadataTemplatesByInstanceIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetMetadataTemplateScope = 'global' | 'enterprise' | string;
export declare class GetMetadataTemplateHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataTemplateHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataTemplateHeaders, 'extraHeaders'>>);
}
export interface GetMetadataTemplateHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateMetadataTemplateScope = 'global' | 'enterprise' | string;
export type UpdateMetadataTemplateRequestBodyOpField = 'editTemplate' | 'addField' | 'reorderFields' | 'addEnumOption' | 'reorderEnumOptions' | 'reorderMultiSelectOptions' | 'addMultiSelectOption' | 'editField' | 'removeField' | 'editEnumOption' | 'removeEnumOption' | 'editMultiSelectOption' | 'removeMultiSelectOption' | string;
export interface UpdateMetadataTemplateRequestBody {
    /**
     * The type of change to perform on the template. Some
     * of these are hazardous as they will change existing templates. */
    readonly op: UpdateMetadataTemplateRequestBodyOpField;
    /**
     * The data for the operation. This will vary depending on the
     * operation being performed. */
    readonly data?: {
        readonly [key: string]: any;
    };
    /**
     * For operations that affect a single field this defines the key of
     * the field that is affected. */
    readonly fieldKey?: string;
    /**
     * For operations that affect multiple fields this defines the keys
     * of the fields that are affected. */
    readonly fieldKeys?: readonly string[];
    /**
     * For operations that affect a single `enum` option this defines
     * the key of the option that is affected. */
    readonly enumOptionKey?: string;
    /**
     * For operations that affect multiple `enum` options this defines
     * the keys of the options that are affected. */
    readonly enumOptionKeys?: readonly string[];
    /**
     * For operations that affect a single multi select option this
     * defines the key of the option that is affected. */
    readonly multiSelectOptionKey?: string;
    /**
     * For operations that affect multiple multi select options this
     * defines the keys of the options that are affected. */
    readonly multiSelectOptionKeys?: readonly string[];
    readonly rawData?: SerializedData;
}
export declare class UpdateMetadataTemplateHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateMetadataTemplateHeaders, 'extraHeaders'> & Partial<Pick<UpdateMetadataTemplateHeaders, 'extraHeaders'>>);
}
export interface UpdateMetadataTemplateHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type DeleteMetadataTemplateScope = 'global' | 'enterprise' | string;
export declare class DeleteMetadataTemplateHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteMetadataTemplateHeaders, 'extraHeaders'> & Partial<Pick<DeleteMetadataTemplateHeaders, 'extraHeaders'>>);
}
export interface DeleteMetadataTemplateHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetMetadataTemplateByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataTemplateByIdHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataTemplateByIdHeaders, 'extraHeaders'>>);
}
export interface GetMetadataTemplateByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGlobalMetadataTemplatesQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetGlobalMetadataTemplatesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGlobalMetadataTemplatesHeaders, 'extraHeaders'> & Partial<Pick<GetGlobalMetadataTemplatesHeaders, 'extraHeaders'>>);
}
export interface GetGlobalMetadataTemplatesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetEnterpriseMetadataTemplatesQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetEnterpriseMetadataTemplatesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetEnterpriseMetadataTemplatesHeaders, 'extraHeaders'> & Partial<Pick<GetEnterpriseMetadataTemplatesHeaders, 'extraHeaders'>>);
}
export interface GetEnterpriseMetadataTemplatesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateMetadataTemplateRequestBodyFieldsTypeField = 'string' | 'float' | 'date' | 'enum' | 'multiSelect';
export interface CreateMetadataTemplateRequestBodyFieldsOptionsField {
    /**
     * The text value of the option. This represents both the display name of the
     * option and the internal key used when updating templates. */
    readonly key: string;
    readonly rawData?: SerializedData;
}
export interface CreateMetadataTemplateRequestBodyFieldsField {
    /**
     * The type of field. The basic fields are a `string` field for text, a
     * `float` field for numbers, and a `date` fields to present the user with a
     * date-time picker.
     *
     * Additionally, metadata templates support an `enum` field for a basic list
     * of items, and ` multiSelect` field for a similar list of items where the
     * user can select more than one value. */
    readonly type: CreateMetadataTemplateRequestBodyFieldsTypeField;
    /**
     * A unique identifier for the field. The identifier must
     * be unique within the template to which it belongs. */
    readonly key: string;
    /**
     * The display name of the field as it is shown to the user in the web and
     * mobile apps. */
    readonly displayName: string;
    /**
     * A description of the field. This is not shown to the user. */
    readonly description?: string;
    /**
     * Whether this field is hidden in the UI for the user and can only be set
     * through the API instead. */
    readonly hidden?: boolean;
    /**
     * A list of options for this field. This is used in combination with the
     * `enum` and `multiSelect` field types. */
    readonly options?: readonly CreateMetadataTemplateRequestBodyFieldsOptionsField[];
    readonly rawData?: SerializedData;
}
export interface CreateMetadataTemplateRequestBody {
    /**
     * The scope of the metadata template to create. Applications can
     * only create templates for use within the authenticated user's
     * enterprise.
     *
     * This value needs to be set to `enterprise`, as `global` scopes can
     * not be created by applications. */
    readonly scope: string;
    /**
     * A unique identifier for the template. This identifier needs to be
     * unique across the enterprise for which the metadata template is
     * being created.
     *
     * When not provided, the API will create a unique `templateKey`
     * based on the value of the `displayName`. */
    readonly templateKey?: string;
    /**
     * The display name of the template. */
    readonly displayName: string;
    /**
     * Defines if this template is visible in the Box web app UI, or if
     * it is purely intended for usage through the API. */
    readonly hidden?: boolean;
    /**
     * An ordered list of template fields which are part of the template.
     * Each field can be a regular text field, date field, number field,
     * as well as a single or multi-select list. */
    readonly fields?: readonly CreateMetadataTemplateRequestBodyFieldsField[];
    /**
     * Whether or not to copy any metadata attached to a file or folder
     * when it is copied. By default, metadata is not copied along with a
     * file or folder when it is copied. */
    readonly copyInstanceOnItemCopy?: boolean;
    readonly rawData?: SerializedData;
}
export declare class CreateMetadataTemplateHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateMetadataTemplateHeaders, 'extraHeaders'> & Partial<Pick<CreateMetadataTemplateHeaders, 'extraHeaders'>>);
}
export interface CreateMetadataTemplateHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class MetadataTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<MetadataTemplatesManager, 'networkSession' | 'getMetadataTemplatesByInstanceId' | 'getMetadataTemplate' | 'updateMetadataTemplate' | 'deleteMetadataTemplate' | 'getMetadataTemplateById' | 'getGlobalMetadataTemplates' | 'getEnterpriseMetadataTemplates' | 'createMetadataTemplate'> & Partial<Pick<MetadataTemplatesManager, 'networkSession'>>);
    /**
     * Finds a metadata template by searching for the ID of an instance of the
     * template.
     * @param {GetMetadataTemplatesByInstanceIdQueryParams} queryParams Query parameters of getMetadataTemplatesByInstanceId method
     * @param {GetMetadataTemplatesByInstanceIdOptionalsInput} optionalsInput
     * @returns {Promise<MetadataTemplates>}
     */
    getMetadataTemplatesByInstanceId(queryParams: GetMetadataTemplatesByInstanceIdQueryParams, optionalsInput?: GetMetadataTemplatesByInstanceIdOptionalsInput): Promise<MetadataTemplates>;
    /**
       * Retrieves a metadata template by its `scope` and `templateKey` values.
       *
       * To find the `scope` and `templateKey` for a template, list all templates for
       * an enterprise or globally, or list all templates applied to a file or folder.
       * @param {GetMetadataTemplateScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {GetMetadataTemplateOptionalsInput} optionalsInput
       * @returns {Promise<MetadataTemplate>}
       */
    getMetadataTemplate(scope: GetMetadataTemplateScope, templateKey: string, optionalsInput?: GetMetadataTemplateOptionalsInput): Promise<MetadataTemplate>;
    /**
       * Updates a metadata template.
       *
       * The metadata template can only be updated if the template
       * already exists.
       *
       * The update is applied atomically. If any errors occur during the
       * application of the operations, the metadata template will not be changed.
       * @param {UpdateMetadataTemplateScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {readonly UpdateMetadataTemplateRequestBody[]} requestBody Request body of updateMetadataTemplate method
       * @param {UpdateMetadataTemplateOptionalsInput} optionalsInput
       * @returns {Promise<MetadataTemplate>}
       */
    updateMetadataTemplate(scope: UpdateMetadataTemplateScope, templateKey: string, requestBody: readonly UpdateMetadataTemplateRequestBody[], optionalsInput?: UpdateMetadataTemplateOptionalsInput): Promise<MetadataTemplate>;
    /**
       * Delete a metadata template and its instances.
       * This deletion is permanent and can not be reversed.
       * @param {DeleteMetadataTemplateScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {DeleteMetadataTemplateOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteMetadataTemplate(scope: DeleteMetadataTemplateScope, templateKey: string, optionalsInput?: DeleteMetadataTemplateOptionalsInput): Promise<undefined>;
    /**
       * Retrieves a metadata template by its ID.
       * @param {string} templateId The ID of the template.
      Example: "f7a9891f"
       * @param {GetMetadataTemplateByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataTemplate>}
       */
    getMetadataTemplateById(templateId: string, optionalsInput?: GetMetadataTemplateByIdOptionalsInput): Promise<MetadataTemplate>;
    /**
     * Used to retrieve all generic, global metadata templates available to all
     * enterprises using Box.
     * @param {GetGlobalMetadataTemplatesQueryParams} queryParams Query parameters of getGlobalMetadataTemplates method
     * @param {GetGlobalMetadataTemplatesHeadersInput} headersInput Headers of getGlobalMetadataTemplates method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<MetadataTemplates>}
     */
    getGlobalMetadataTemplates(queryParams?: GetGlobalMetadataTemplatesQueryParams, headersInput?: GetGlobalMetadataTemplatesHeadersInput, cancellationToken?: CancellationToken): Promise<MetadataTemplates>;
    /**
     * Used to retrieve all metadata templates created to be used specifically within
     * the user's enterprise.
     * @param {GetEnterpriseMetadataTemplatesQueryParams} queryParams Query parameters of getEnterpriseMetadataTemplates method
     * @param {GetEnterpriseMetadataTemplatesHeadersInput} headersInput Headers of getEnterpriseMetadataTemplates method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<MetadataTemplates>}
     */
    getEnterpriseMetadataTemplates(queryParams?: GetEnterpriseMetadataTemplatesQueryParams, headersInput?: GetEnterpriseMetadataTemplatesHeadersInput, cancellationToken?: CancellationToken): Promise<MetadataTemplates>;
    /**
     * Creates a new metadata template that can be applied to
     * files and folders.
     * @param {CreateMetadataTemplateRequestBody} requestBody Request body of createMetadataTemplate method
     * @param {CreateMetadataTemplateOptionalsInput} optionalsInput
     * @returns {Promise<MetadataTemplate>}
     */
    createMetadataTemplate(requestBody: CreateMetadataTemplateRequestBody, optionalsInput?: CreateMetadataTemplateOptionalsInput): Promise<MetadataTemplate>;
}
export interface MetadataTemplatesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetMetadataTemplateScope(val: GetMetadataTemplateScope): SerializedData;
export declare function deserializeGetMetadataTemplateScope(val: SerializedData): GetMetadataTemplateScope;
export declare function serializeUpdateMetadataTemplateScope(val: UpdateMetadataTemplateScope): SerializedData;
export declare function deserializeUpdateMetadataTemplateScope(val: SerializedData): UpdateMetadataTemplateScope;
export declare function serializeUpdateMetadataTemplateRequestBodyOpField(val: UpdateMetadataTemplateRequestBodyOpField): SerializedData;
export declare function deserializeUpdateMetadataTemplateRequestBodyOpField(val: SerializedData): UpdateMetadataTemplateRequestBodyOpField;
export declare function serializeUpdateMetadataTemplateRequestBody(val: UpdateMetadataTemplateRequestBody): SerializedData;
export declare function deserializeUpdateMetadataTemplateRequestBody(val: SerializedData): UpdateMetadataTemplateRequestBody;
export declare function serializeDeleteMetadataTemplateScope(val: DeleteMetadataTemplateScope): SerializedData;
export declare function deserializeDeleteMetadataTemplateScope(val: SerializedData): DeleteMetadataTemplateScope;
export declare function serializeCreateMetadataTemplateRequestBodyFieldsTypeField(val: CreateMetadataTemplateRequestBodyFieldsTypeField): SerializedData;
export declare function deserializeCreateMetadataTemplateRequestBodyFieldsTypeField(val: SerializedData): CreateMetadataTemplateRequestBodyFieldsTypeField;
export declare function serializeCreateMetadataTemplateRequestBodyFieldsOptionsField(val: CreateMetadataTemplateRequestBodyFieldsOptionsField): SerializedData;
export declare function deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField(val: SerializedData): CreateMetadataTemplateRequestBodyFieldsOptionsField;
export declare function serializeCreateMetadataTemplateRequestBodyFieldsField(val: CreateMetadataTemplateRequestBodyFieldsField): SerializedData;
export declare function deserializeCreateMetadataTemplateRequestBodyFieldsField(val: SerializedData): CreateMetadataTemplateRequestBodyFieldsField;
export declare function serializeCreateMetadataTemplateRequestBody(val: CreateMetadataTemplateRequestBody): SerializedData;
export declare function deserializeCreateMetadataTemplateRequestBody(val: SerializedData): CreateMetadataTemplateRequestBody;
