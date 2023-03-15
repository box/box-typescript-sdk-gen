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
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type MetadataTemplatesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type GetMetadataTemplatesIdIdSchemaScopeArg = "global" | "enterprise";
export type DeleteMetadataTemplatesIdIdSchemaScopeArg = "global" | "enterprise";
export interface GetMetadataTemplatesGlobalOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetMetadataTemplatesEnterpriseOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type PostMetadataTemplatesSchemaRequestBodyArgFieldsFieldTypeField = "string" | "float" | "date" | "enum" | "multiSelect";
export interface PostMetadataTemplatesSchemaRequestBodyArgFieldsFieldOptionsField {
    readonly key: string;
}
export interface PostMetadataTemplatesSchemaRequestBodyArgFieldsField {
    readonly type: PostMetadataTemplatesSchemaRequestBodyArgFieldsFieldTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly PostMetadataTemplatesSchemaRequestBodyArgFieldsFieldOptionsField[];
}
export interface PostMetadataTemplatesSchemaRequestBodyArg {
    readonly scope: string;
    readonly templateKey?: string;
    readonly displayName: string;
    readonly hidden?: boolean;
    readonly fields?: readonly PostMetadataTemplatesSchemaRequestBodyArgFieldsField[];
    readonly copyInstanceOnItemCopy?: boolean;
}
export class MetadataTemplatesManager {
    readonly auth!: MetadataTemplatesManagerAuthField;
    constructor(fields: Omit<MetadataTemplatesManager, "getMetadataTemplates" | "getMetadataTemplatesIdIdSchema" | "deleteMetadataTemplatesIdIdSchema" | "getMetadataTemplatesId" | "getMetadataTemplatesGlobal" | "getMetadataTemplatesEnterprise" | "postMetadataTemplatesSchema">) {
        Object.assign(this, fields);
    }
    async getMetadataTemplates(metadataInstanceId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates") as string, { method: "GET", params: { ["metadata_instance_id"]: metadataInstanceId }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadataTemplates(await deserializeJson(response.text));
    }
    async getMetadataTemplatesIdIdSchema(scope: GetMetadataTemplatesIdIdSchemaScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadataTemplate(await deserializeJson(response.text));
    }
    async deleteMetadataTemplatesIdIdSchema(scope: DeleteMetadataTemplatesIdIdSchemaScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getMetadataTemplatesId(templateId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", templateId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadataTemplate(await deserializeJson(response.text));
    }
    async getMetadataTemplatesGlobal(options: GetMetadataTemplatesGlobalOptionsArg = {} satisfies GetMetadataTemplatesGlobalOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/global") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadataTemplates(await deserializeJson(response.text));
    }
    async getMetadataTemplatesEnterprise(options: GetMetadataTemplatesEnterpriseOptionsArg = {} satisfies GetMetadataTemplatesEnterpriseOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadataTemplates(await deserializeJson(response.text));
    }
    async postMetadataTemplatesSchema(requestBody: PostMetadataTemplatesSchemaRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/schema") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadataTemplate(await deserializeJson(response.text));
    }
}
