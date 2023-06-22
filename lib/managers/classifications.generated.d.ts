import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = "enterprise";
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = "securityClassification-6VMVochwUWo";
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = "Classification";
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = "enum";
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = "Box__Security__Classification__Key";
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = "Classification";
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField {
    readonly classification?: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField {
    readonly key?: string;
    readonly staticConfig?: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
}
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField {
    readonly type?: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField;
    readonly key?: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField;
    readonly displayName?: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField;
    readonly hidden?: boolean;
    readonly options?: readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField[];
}
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArg {
    readonly scope: CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField;
    readonly templateKey?: CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField;
    readonly displayName: CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField;
    readonly hidden?: boolean;
    readonly copyInstanceOnItemCopy?: boolean;
    readonly fields?: readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField[];
}
export declare class ClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ClassificationsManager, "getMetadataTemplateEnterpriseSecurityClassificationSchema" | "deleteMetadataTemplateEnterpriseSecurityClassificationSchema" | "createMetadataTemplateSchemaClassification">);
    getMetadataTemplateEnterpriseSecurityClassificationSchema(): Promise<any>;
    deleteMetadataTemplateEnterpriseSecurityClassificationSchema(): Promise<any>;
    createMetadataTemplateSchemaClassification(requestBody: CreateMetadataTemplateSchemaClassificationRequestBodyArg): Promise<any>;
}
