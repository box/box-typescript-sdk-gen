import { ClassificationTemplate } from "../schemas.generated.js";
import { deserializeClassificationTemplate } from "../schemas.generated.js";
import { serializeClassificationTemplate } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type ClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
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
export class ClassificationsManager {
    readonly auth!: ClassificationsManagerAuthField;
    constructor(fields: Omit<ClassificationsManager, "getMetadataTemplateEnterpriseSecurityClassification6VmVochwUWoSchema" | "deleteMetadataTemplateEnterpriseSecurityClassification6VmVochwUWoSchema" | "createMetadataTemplateSchemaClassification">) {
        Object.assign(this, fields);
    }
    async getMetadataTemplateEnterpriseSecurityClassification6VmVochwUWoSchema(): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeClassificationTemplate(deserializeJSON(response.text) as JSON);
    }
    async deleteMetadataTemplateEnterpriseSecurityClassification6VmVochwUWoSchema(): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createMetadataTemplateSchemaClassification(requestBody: CreateMetadataTemplateSchemaClassificationRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/schema#classifications") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeClassificationTemplate(deserializeJSON(response.text) as JSON);
    }
}
