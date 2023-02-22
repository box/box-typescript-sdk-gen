import { ClassificationTemplate } from "../schemas.generated.js";
import { deserializeClassificationTemplate } from "../schemas.generated.js";
import { serializeClassificationTemplate } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type ClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
export class ClassificationsManager {
    readonly auth!: ClassificationsManagerAuthField;
    constructor(fields: Omit<ClassificationsManager, "getMetadataTemplatesEnterpriseSecurityClassification6VmVochwUWoSchema" | "deleteMetadataTemplatesEnterpriseSecurityClassification6VmVochwUWoSchema" | "postMetadataTemplatesSchemaClassifications">) {
        Object.assign(this, fields);
    }
    async getMetadataTemplatesEnterpriseSecurityClassification6VmVochwUWoSchema(): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeClassificationTemplate(deserializeJSON(response.text) as JSON);
    }
    async deleteMetadataTemplatesEnterpriseSecurityClassification6VmVochwUWoSchema(): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async postMetadataTemplatesSchemaClassifications(requestBody: PostMetadataTemplatesSchemaClassificationsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/schema#classifications") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeClassificationTemplate(deserializeJSON(response.text) as JSON);
    }
}
