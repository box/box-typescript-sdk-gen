import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type ClassificationsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type PostMetadataTemplatesSchemaClassificationsRequestBodyArgScopeField = "enterprise";
export type PostMetadataTemplatesSchemaClassificationsRequestBodyArgTemplateKeyField = "securityClassification-6VMVochwUWo";
export type PostMetadataTemplatesSchemaClassificationsRequestBodyArgDisplayNameField = "Classification";
export type PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldTypeField = "enum";
export type PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldKeyField = "Box__Security__Classification__Key";
export type PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldDisplayNameField = "Classification";
export interface PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export interface PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldOptionsFieldStaticConfigField {
    readonly classification?: PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export interface PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldOptionsField {
    readonly key?: string;
    readonly staticConfig?: PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
}
export interface PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsField {
    readonly type?: PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldTypeField;
    readonly key?: PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldKeyField;
    readonly displayName?: PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldDisplayNameField;
    readonly hidden?: boolean;
    readonly options?: readonly PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsFieldOptionsField[];
}
export interface PostMetadataTemplatesSchemaClassificationsRequestBodyArg {
    readonly scope: PostMetadataTemplatesSchemaClassificationsRequestBodyArgScopeField;
    readonly templateKey?: PostMetadataTemplatesSchemaClassificationsRequestBodyArgTemplateKeyField;
    readonly displayName: PostMetadataTemplatesSchemaClassificationsRequestBodyArgDisplayNameField;
    readonly hidden?: boolean;
    readonly copyInstanceOnItemCopy?: boolean;
    readonly fields?: readonly PostMetadataTemplatesSchemaClassificationsRequestBodyArgFieldsField[];
}
export declare class ClassificationsManager {
    readonly auth: ClassificationsManagerAuthField;
    constructor(fields: Omit<ClassificationsManager, "getMetadataTemplatesEnterpriseSecurityClassification6VmVochwUWoSchema" | "deleteMetadataTemplatesEnterpriseSecurityClassification6VmVochwUWoSchema" | "postMetadataTemplatesSchemaClassifications">);
    getMetadataTemplatesEnterpriseSecurityClassification6VmVochwUWoSchema(): Promise<any>;
    deleteMetadataTemplatesEnterpriseSecurityClassification6VmVochwUWoSchema(): Promise<any>;
    postMetadataTemplatesSchemaClassifications(requestBody: PostMetadataTemplatesSchemaClassificationsRequestBodyArg): Promise<any>;
}
