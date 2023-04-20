import { MetadataTemplates } from "../schemas.generated.js";
import { deserializeMetadataTemplates } from "../schemas.generated.js";
import { serializeMetadataTemplates } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { MetadataTemplate } from "../schemas.generated.js";
import { deserializeMetadataTemplate } from "../schemas.generated.js";
import { serializeMetadataTemplate } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type MetadataTemplatesManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export type GetMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export type DeleteMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export interface GetMetadataTemplateGlobalOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetMetadataTemplateEnterpriseOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField = "string" | "float" | "date" | "enum" | "multiSelect";
export interface CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField {
    readonly key: string;
}
export interface CreateMetadataTemplateSchemaRequestBodyArgFieldsField {
    readonly type: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField[];
}
export interface CreateMetadataTemplateSchemaRequestBodyArg {
    readonly scope: string;
    readonly templateKey?: string;
    readonly displayName: string;
    readonly hidden?: boolean;
    readonly fields?: readonly CreateMetadataTemplateSchemaRequestBodyArgFieldsField[];
    readonly copyInstanceOnItemCopy?: boolean;
}
export class MetadataTemplatesManager {
    readonly auth!: MetadataTemplatesManagerAuthField;
    constructor(fields: Omit<MetadataTemplatesManager, "getMetadataTemplates" | "getMetadataTemplateSchema" | "deleteMetadataTemplateSchema" | "getMetadataTemplateById" | "getMetadataTemplateGlobal" | "getMetadataTemplateEnterprise" | "createMetadataTemplateSchema">) {
        Object.assign(this, fields);
    }
    async getMetadataTemplates(metadataInstanceId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates") as string, { method: "GET", params: { ["metadata_instance_id"]: metadataInstanceId }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplates(deserializeJson(response.text));
    }
    async getMetadataTemplateSchema(scope: GetMetadataTemplateSchemaScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplate(deserializeJson(response.text));
    }
    async deleteMetadataTemplateSchema(scope: DeleteMetadataTemplateSchemaScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getMetadataTemplateById(templateId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", templateId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplate(deserializeJson(response.text));
    }
    async getMetadataTemplateGlobal(options: GetMetadataTemplateGlobalOptionsArg = {} satisfies GetMetadataTemplateGlobalOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/global") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplates(deserializeJson(response.text));
    }
    async getMetadataTemplateEnterprise(options: GetMetadataTemplateEnterpriseOptionsArg = {} satisfies GetMetadataTemplateEnterpriseOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplates(deserializeJson(response.text));
    }
    async createMetadataTemplateSchema(requestBody: CreateMetadataTemplateSchemaRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/schema") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplate(deserializeJson(response.text));
    }
}
