import { ClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class AddClassificationOptionals {
    readonly headers: AddClassificationHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddClassificationOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AddClassificationOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AddClassificationOptionalsInput {
    readonly headers?: AddClassificationHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateClassificationOptionals {
    readonly headers: UpdateClassificationHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateClassificationOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateClassificationOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateClassificationOptionalsInput {
    readonly headers?: UpdateClassificationHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateClassificationTemplateOptionals {
    readonly headers: CreateClassificationTemplateHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateClassificationTemplateOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateClassificationTemplateOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateClassificationTemplateOptionalsInput {
    readonly headers?: CreateClassificationTemplateHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetClassificationTemplateHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetClassificationTemplateHeaders, 'extraHeaders'> & Partial<Pick<GetClassificationTemplateHeaders, 'extraHeaders'>>);
}
export interface GetClassificationTemplateHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type AddClassificationRequestBodyOpField = 'addEnumOption' | string;
export type AddClassificationRequestBodyFieldKeyField = 'Box__Security__Classification__Key' | string;
export interface AddClassificationRequestBodyDataStaticConfigClassificationField {
    /**
     * A longer description of the classification. */
    readonly classificationDefinition?: string;
    /**
     * An internal Box identifier used to assign a color to
     * a classification label.
     *
     * Mapping between a `colorID` and a color may change
     * without notice. Currently, the color mappings are as
     * follows.
     *
     * * `0`: Yellow.
     * * `1`: Orange.
     * * `2`: Watermelon red.
     * * `3`: Purple rain.
     * * `4`: Light blue.
     * * `5`: Dark blue.
     * * `6`: Light green.
     * * `7`: Gray. */
    readonly colorId?: number;
    readonly rawData?: SerializedData;
}
export interface AddClassificationRequestBodyDataStaticConfigField {
    /**
     * Additional details for the classification. */
    readonly classification?: AddClassificationRequestBodyDataStaticConfigClassificationField;
    readonly rawData?: SerializedData;
}
export interface AddClassificationRequestBodyDataField {
    /**
     * The label of the classification as shown in the web and
     * mobile interfaces. This is the only field required to
     * add a classification. */
    readonly key: string;
    /**
     * A static configuration for the classification. */
    readonly staticConfig?: AddClassificationRequestBodyDataStaticConfigField;
    readonly rawData?: SerializedData;
}
export declare class AddClassificationRequestBody {
    /**
     * The type of change to perform on the classification
     * object. */
    readonly op: AddClassificationRequestBodyOpField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly fieldKey: AddClassificationRequestBodyFieldKeyField;
    /**
     * The details of the classification to add. */
    readonly data: AddClassificationRequestBodyDataField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AddClassificationRequestBody, 'op' | 'fieldKey'> & Partial<Pick<AddClassificationRequestBody, 'op' | 'fieldKey'>>);
}
export interface AddClassificationRequestBodyInput {
    /**
     * The type of change to perform on the classification
     * object. */
    readonly op?: AddClassificationRequestBodyOpField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly fieldKey?: AddClassificationRequestBodyFieldKeyField;
    /**
     * The details of the classification to add. */
    readonly data: AddClassificationRequestBodyDataField;
    readonly rawData?: SerializedData;
}
export declare class AddClassificationHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddClassificationHeaders, 'extraHeaders'> & Partial<Pick<AddClassificationHeaders, 'extraHeaders'>>);
}
export interface AddClassificationHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateClassificationRequestBodyOpField = 'editEnumOption' | string;
export type UpdateClassificationRequestBodyFieldKeyField = 'Box__Security__Classification__Key' | string;
export interface UpdateClassificationRequestBodyDataStaticConfigClassificationField {
    /**
     * A longer description of the classification. */
    readonly classificationDefinition?: string;
    /**
     * An internal Box identifier used to assign a color to
     * a classification label.
     *
     * Mapping between a `colorID` and a color may change
     * without notice. Currently, the color mappings are as
     * follows.
     *
     * * `0`: Yellow.
     * * `1`: Orange.
     * * `2`: Watermelon red.
     * * `3`: Purple rain.
     * * `4`: Light blue.
     * * `5`: Dark blue.
     * * `6`: Light green.
     * * `7`: Gray. */
    readonly colorId?: number;
    readonly rawData?: SerializedData;
}
export interface UpdateClassificationRequestBodyDataStaticConfigField {
    /**
     * Additional details for the classification. */
    readonly classification?: UpdateClassificationRequestBodyDataStaticConfigClassificationField;
    readonly rawData?: SerializedData;
}
export interface UpdateClassificationRequestBodyDataField {
    /**
     * A new label for the classification, as it will be
     * shown in the web and mobile interfaces. */
    readonly key: string;
    /**
     * A static configuration for the classification. */
    readonly staticConfig?: UpdateClassificationRequestBodyDataStaticConfigField;
    readonly rawData?: SerializedData;
}
export declare class UpdateClassificationRequestBody {
    /**
     * The type of change to perform on the classification
     * object. */
    readonly op: UpdateClassificationRequestBodyOpField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly fieldKey: UpdateClassificationRequestBodyFieldKeyField;
    /**
     * The original label of the classification to change. */
    readonly enumOptionKey: string;
    /**
     * The details of the updated classification. */
    readonly data: UpdateClassificationRequestBodyDataField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<UpdateClassificationRequestBody, 'op' | 'fieldKey'> & Partial<Pick<UpdateClassificationRequestBody, 'op' | 'fieldKey'>>);
}
export interface UpdateClassificationRequestBodyInput {
    /**
     * The type of change to perform on the classification
     * object. */
    readonly op?: UpdateClassificationRequestBodyOpField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly fieldKey?: UpdateClassificationRequestBodyFieldKeyField;
    /**
     * The original label of the classification to change. */
    readonly enumOptionKey: string;
    /**
     * The details of the updated classification. */
    readonly data: UpdateClassificationRequestBodyDataField;
    readonly rawData?: SerializedData;
}
export declare class UpdateClassificationHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateClassificationHeaders, 'extraHeaders'> & Partial<Pick<UpdateClassificationHeaders, 'extraHeaders'>>);
}
export interface UpdateClassificationHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateClassificationTemplateRequestBodyScopeField = 'enterprise' | string;
export type CreateClassificationTemplateRequestBodyTemplateKeyField = 'securityClassification-6VMVochwUWo' | string;
export type CreateClassificationTemplateRequestBodyDisplayNameField = 'Classification' | string;
export type CreateClassificationTemplateRequestBodyFieldsTypeField = 'enum';
export type CreateClassificationTemplateRequestBodyFieldsKeyField = 'Box__Security__Classification__Key' | string;
export type CreateClassificationTemplateRequestBodyFieldsDisplayNameField = 'Classification' | string;
export interface CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField {
    /**
     * A longer description of the classification. */
    readonly classificationDefinition?: string;
    /**
     * An identifier used to assign a color to
     * a classification label.
     *
     * Mapping between a `colorID` and a color may
     * change without notice. Currently, the color
     * mappings are as follows.
     *
     * * `0`: Yellow.
     * * `1`: Orange.
     * * `2`: Watermelon red.
     * * `3`: Purple rain.
     * * `4`: Light blue.
     * * `5`: Dark blue.
     * * `6`: Light green.
     * * `7`: Gray. */
    readonly colorId?: number;
    readonly rawData?: SerializedData;
}
export interface CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField {
    /**
     * Additional information about the classification. */
    readonly classification?: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
    readonly rawData?: SerializedData;
}
export interface CreateClassificationTemplateRequestBodyFieldsOptionsField {
    /**
     * The display name and key this classification. This
     * will be show in the Box UI. */
    readonly key: string;
    /**
     * Additional information about the classification. */
    readonly staticConfig?: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
    readonly rawData?: SerializedData;
}
export declare class CreateClassificationTemplateRequestBodyFieldsField {
    /**
     * The type of the field
     * that is always enum. */
    readonly type: CreateClassificationTemplateRequestBodyFieldsTypeField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly key: CreateClassificationTemplateRequestBodyFieldsKeyField;
    /**
     * A display name for the classification. */
    readonly displayName: CreateClassificationTemplateRequestBodyFieldsDisplayNameField;
    /**
     * Determines if the classification
     * template is
     * hidden or available on
     * web and mobile
     * devices. */
    readonly hidden?: boolean;
    /**
     * The actual list of classifications that are present on
     * this template. */
    readonly options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<CreateClassificationTemplateRequestBodyFieldsField, 'type' | 'key' | 'displayName'> & Partial<Pick<CreateClassificationTemplateRequestBodyFieldsField, 'type' | 'key' | 'displayName'>>);
}
export interface CreateClassificationTemplateRequestBodyFieldsFieldInput {
    /**
     * The type of the field
     * that is always enum. */
    readonly type?: CreateClassificationTemplateRequestBodyFieldsTypeField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly key?: CreateClassificationTemplateRequestBodyFieldsKeyField;
    /**
     * A display name for the classification. */
    readonly displayName?: CreateClassificationTemplateRequestBodyFieldsDisplayNameField;
    /**
     * Determines if the classification
     * template is
     * hidden or available on
     * web and mobile
     * devices. */
    readonly hidden?: boolean;
    /**
     * The actual list of classifications that are present on
     * this template. */
    readonly options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[];
    readonly rawData?: SerializedData;
}
export declare class CreateClassificationTemplateRequestBody {
    /**
     * The scope in which to create the classifications. This should
     * be `enterprise` or `enterprise_{id}` where `id` is the unique
     * ID of the enterprise. */
    readonly scope: CreateClassificationTemplateRequestBodyScopeField;
    /**
     * Defines the list of metadata templates. */
    readonly templateKey: CreateClassificationTemplateRequestBodyTemplateKeyField;
    /**
     * The name of the
     * template as shown in web and mobile interfaces. */
    readonly displayName: CreateClassificationTemplateRequestBodyDisplayNameField;
    /**
     * Determines if the classification template is
     * hidden or available on web and mobile
     * devices. */
    readonly hidden?: boolean;
    /**
     * Determines if classifications are
     * copied along when the file or folder is
     * copied. */
    readonly copyInstanceOnItemCopy?: boolean;
    /**
     * The classification template requires exactly
     * one field, which holds
     * all the valid classification values. */
    readonly fields: readonly CreateClassificationTemplateRequestBodyFieldsField[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<CreateClassificationTemplateRequestBody, 'scope' | 'templateKey' | 'displayName'> & Partial<Pick<CreateClassificationTemplateRequestBody, 'scope' | 'templateKey' | 'displayName'>>);
}
export interface CreateClassificationTemplateRequestBodyInput {
    /**
     * The scope in which to create the classifications. This should
     * be `enterprise` or `enterprise_{id}` where `id` is the unique
     * ID of the enterprise. */
    readonly scope?: CreateClassificationTemplateRequestBodyScopeField;
    /**
     * Defines the list of metadata templates. */
    readonly templateKey?: CreateClassificationTemplateRequestBodyTemplateKeyField;
    /**
     * The name of the
     * template as shown in web and mobile interfaces. */
    readonly displayName?: CreateClassificationTemplateRequestBodyDisplayNameField;
    /**
     * Determines if the classification template is
     * hidden or available on web and mobile
     * devices. */
    readonly hidden?: boolean;
    /**
     * Determines if classifications are
     * copied along when the file or folder is
     * copied. */
    readonly copyInstanceOnItemCopy?: boolean;
    /**
     * The classification template requires exactly
     * one field, which holds
     * all the valid classification values. */
    readonly fields: readonly CreateClassificationTemplateRequestBodyFieldsField[];
    readonly rawData?: SerializedData;
}
export declare class CreateClassificationTemplateHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateClassificationTemplateHeaders, 'extraHeaders'> & Partial<Pick<CreateClassificationTemplateHeaders, 'extraHeaders'>>);
}
export interface CreateClassificationTemplateHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ClassificationsManager, 'networkSession' | 'getClassificationTemplate' | 'addClassification' | 'updateClassification' | 'createClassificationTemplate'> & Partial<Pick<ClassificationsManager, 'networkSession'>>);
    /**
     * Retrieves the classification metadata template and lists all the
     * classifications available to this enterprise.
     *
     * This API can also be called by including the enterprise ID in the
     * URL explicitly, for example
     * `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
     * @param {GetClassificationTemplateHeadersInput} headersInput Headers of getClassificationTemplate method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ClassificationTemplate>}
     */
    getClassificationTemplate(headersInput?: GetClassificationTemplateHeadersInput, cancellationToken?: CancellationToken): Promise<ClassificationTemplate>;
    /**
     * Adds one or more new classifications to the list of classifications
     * available to the enterprise.
     *
     * This API can also be called by including the enterprise ID in the
     * URL explicitly, for example
     * `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
     * @param {readonly AddClassificationRequestBody[]} requestBody Request body of addClassification method
     * @param {AddClassificationOptionalsInput} optionalsInput
     * @returns {Promise<ClassificationTemplate>}
     */
    addClassification(requestBody: readonly AddClassificationRequestBody[], optionalsInput?: AddClassificationOptionalsInput): Promise<ClassificationTemplate>;
    /**
     * Updates the labels and descriptions of one or more classifications
     * available to the enterprise.
     *
     * This API can also be called by including the enterprise ID in the
     * URL explicitly, for example
     * `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
     * @param {readonly UpdateClassificationRequestBody[]} requestBody Request body of updateClassification method
     * @param {UpdateClassificationOptionalsInput} optionalsInput
     * @returns {Promise<ClassificationTemplate>}
     */
    updateClassification(requestBody: readonly UpdateClassificationRequestBody[], optionalsInput?: UpdateClassificationOptionalsInput): Promise<ClassificationTemplate>;
    /**
     * When an enterprise does not yet have any classifications, this API call
     * initializes the classification template with an initial set of
     * classifications.
     *
     * If an enterprise already has a classification, the template will already
     * exist and instead an API call should be made to add additional
     * classifications.
     * @param {CreateClassificationTemplateRequestBodyInput} requestBodyInput Request body of createClassificationTemplate method
     * @param {CreateClassificationTemplateOptionalsInput} optionalsInput
     * @returns {Promise<ClassificationTemplate>}
     */
    createClassificationTemplate(requestBodyInput: CreateClassificationTemplateRequestBodyInput, optionalsInput?: CreateClassificationTemplateOptionalsInput): Promise<ClassificationTemplate>;
}
export interface ClassificationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddClassificationRequestBodyOpField(val: AddClassificationRequestBodyOpField): SerializedData;
export declare function deserializeAddClassificationRequestBodyOpField(val: SerializedData): AddClassificationRequestBodyOpField;
export declare function serializeAddClassificationRequestBodyFieldKeyField(val: AddClassificationRequestBodyFieldKeyField): SerializedData;
export declare function deserializeAddClassificationRequestBodyFieldKeyField(val: SerializedData): AddClassificationRequestBodyFieldKeyField;
export declare function serializeAddClassificationRequestBodyDataStaticConfigClassificationField(val: AddClassificationRequestBodyDataStaticConfigClassificationField): SerializedData;
export declare function deserializeAddClassificationRequestBodyDataStaticConfigClassificationField(val: SerializedData): AddClassificationRequestBodyDataStaticConfigClassificationField;
export declare function serializeAddClassificationRequestBodyDataStaticConfigField(val: AddClassificationRequestBodyDataStaticConfigField): SerializedData;
export declare function deserializeAddClassificationRequestBodyDataStaticConfigField(val: SerializedData): AddClassificationRequestBodyDataStaticConfigField;
export declare function serializeAddClassificationRequestBodyDataField(val: AddClassificationRequestBodyDataField): SerializedData;
export declare function deserializeAddClassificationRequestBodyDataField(val: SerializedData): AddClassificationRequestBodyDataField;
export declare function serializeAddClassificationRequestBody(val: AddClassificationRequestBody): SerializedData;
export declare function deserializeAddClassificationRequestBody(val: SerializedData): AddClassificationRequestBody;
export declare function serializeAddClassificationRequestBodyInput(val: AddClassificationRequestBodyInput): SerializedData;
export declare function deserializeAddClassificationRequestBodyInput(val: SerializedData): AddClassificationRequestBodyInput;
export declare function serializeUpdateClassificationRequestBodyOpField(val: UpdateClassificationRequestBodyOpField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyOpField(val: SerializedData): UpdateClassificationRequestBodyOpField;
export declare function serializeUpdateClassificationRequestBodyFieldKeyField(val: UpdateClassificationRequestBodyFieldKeyField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyFieldKeyField(val: SerializedData): UpdateClassificationRequestBodyFieldKeyField;
export declare function serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val: UpdateClassificationRequestBodyDataStaticConfigClassificationField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val: SerializedData): UpdateClassificationRequestBodyDataStaticConfigClassificationField;
export declare function serializeUpdateClassificationRequestBodyDataStaticConfigField(val: UpdateClassificationRequestBodyDataStaticConfigField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyDataStaticConfigField(val: SerializedData): UpdateClassificationRequestBodyDataStaticConfigField;
export declare function serializeUpdateClassificationRequestBodyDataField(val: UpdateClassificationRequestBodyDataField): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyDataField(val: SerializedData): UpdateClassificationRequestBodyDataField;
export declare function serializeUpdateClassificationRequestBody(val: UpdateClassificationRequestBody): SerializedData;
export declare function deserializeUpdateClassificationRequestBody(val: SerializedData): UpdateClassificationRequestBody;
export declare function serializeUpdateClassificationRequestBodyInput(val: UpdateClassificationRequestBodyInput): SerializedData;
export declare function deserializeUpdateClassificationRequestBodyInput(val: SerializedData): UpdateClassificationRequestBodyInput;
export declare function serializeCreateClassificationTemplateRequestBodyScopeField(val: CreateClassificationTemplateRequestBodyScopeField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyScopeField(val: SerializedData): CreateClassificationTemplateRequestBodyScopeField;
export declare function serializeCreateClassificationTemplateRequestBodyTemplateKeyField(val: CreateClassificationTemplateRequestBodyTemplateKeyField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val: SerializedData): CreateClassificationTemplateRequestBodyTemplateKeyField;
export declare function serializeCreateClassificationTemplateRequestBodyDisplayNameField(val: CreateClassificationTemplateRequestBodyDisplayNameField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val: SerializedData): CreateClassificationTemplateRequestBodyDisplayNameField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsTypeField(val: CreateClassificationTemplateRequestBodyFieldsTypeField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsTypeField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsKeyField(val: CreateClassificationTemplateRequestBodyFieldsKeyField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsKeyField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val: CreateClassificationTemplateRequestBodyFieldsDisplayNameField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsDisplayNameField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val: CreateClassificationTemplateRequestBodyFieldsOptionsField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsOptionsField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsField(val: CreateClassificationTemplateRequestBodyFieldsField): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsField(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsField;
export declare function serializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val: CreateClassificationTemplateRequestBodyFieldsFieldInput): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val: SerializedData): CreateClassificationTemplateRequestBodyFieldsFieldInput;
export declare function serializeCreateClassificationTemplateRequestBody(val: CreateClassificationTemplateRequestBody): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBody(val: SerializedData): CreateClassificationTemplateRequestBody;
export declare function serializeCreateClassificationTemplateRequestBodyInput(val: CreateClassificationTemplateRequestBodyInput): SerializedData;
export declare function deserializeCreateClassificationTemplateRequestBodyInput(val: SerializedData): CreateClassificationTemplateRequestBodyInput;
