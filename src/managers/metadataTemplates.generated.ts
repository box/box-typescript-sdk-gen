import { serializeMetadataTemplates } from "../schemas.generated.js";
import { deserializeMetadataTemplates } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeMetadataTemplate } from "../schemas.generated.js";
import { deserializeMetadataTemplate } from "../schemas.generated.js";
import { MetadataTemplates } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { MetadataTemplate } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetMetadataTemplatesQueryParamsArg {
    readonly metadataInstanceId: string;
}
export type GetMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export type DeleteMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export interface GetMetadataTemplateGlobalQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetMetadataTemplateEnterpriseQueryParamsArg {
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MetadataTemplatesManager, "getMetadataTemplates" | "getMetadataTemplateSchema" | "deleteMetadataTemplateSchema" | "getMetadataTemplateById" | "getMetadataTemplateGlobal" | "getMetadataTemplateEnterprise" | "createMetadataTemplateSchema">) {
        Object.assign(this, fields);
    }
    async getMetadataTemplates(queryParams: GetMetadataTemplatesQueryParamsArg): Promise<MetadataTemplates> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates") as string, { method: "GET", params: prepareParams(serializeGetMetadataTemplatesQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplates(deserializeJson(response.text));
    }
    async getMetadataTemplateSchema(scope: GetMetadataTemplateSchemaScopeArg, templateKey: string): Promise<MetadataTemplate> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplate(deserializeJson(response.text));
    }
    async deleteMetadataTemplateSchema(scope: DeleteMetadataTemplateSchemaScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getMetadataTemplateById(templateId: string): Promise<MetadataTemplate> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", templateId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplate(deserializeJson(response.text));
    }
    async getMetadataTemplateGlobal(queryParams: undefined | GetMetadataTemplateGlobalQueryParamsArg = {} satisfies GetMetadataTemplateGlobalQueryParamsArg): Promise<MetadataTemplates> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/global") as string, { method: "GET", params: prepareParams(serializeGetMetadataTemplateGlobalQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplates(deserializeJson(response.text));
    }
    async getMetadataTemplateEnterprise(queryParams: undefined | GetMetadataTemplateEnterpriseQueryParamsArg = {} satisfies GetMetadataTemplateEnterpriseQueryParamsArg): Promise<MetadataTemplates> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise") as string, { method: "GET", params: prepareParams(serializeGetMetadataTemplateEnterpriseQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplates(deserializeJson(response.text));
    }
    async createMetadataTemplateSchema(requestBody: CreateMetadataTemplateSchemaRequestBodyArg): Promise<MetadataTemplate> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/schema") as string, { method: "POST", body: serializeJson(serializeCreateMetadataTemplateSchemaRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplate(deserializeJson(response.text));
    }
}
export function serializeGetMetadataTemplatesQueryParamsArg(val: GetMetadataTemplatesQueryParamsArg): Json {
    return { ["metadata_instance_id"]: val.metadataInstanceId };
}
export function deserializeGetMetadataTemplatesQueryParamsArg(val: any): GetMetadataTemplatesQueryParamsArg {
    const metadataInstanceId: string = val.metadata_instance_id;
    return { metadataInstanceId: metadataInstanceId } satisfies GetMetadataTemplatesQueryParamsArg;
}
export function serializeGetMetadataTemplateSchemaScopeArg(val: GetMetadataTemplateSchemaScopeArg): Json {
    return val;
}
export function deserializeGetMetadataTemplateSchemaScopeArg(val: any): GetMetadataTemplateSchemaScopeArg {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetMetadataTemplateSchemaScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeDeleteMetadataTemplateSchemaScopeArg(val: DeleteMetadataTemplateSchemaScopeArg): Json {
    return val;
}
export function deserializeDeleteMetadataTemplateSchemaScopeArg(val: any): DeleteMetadataTemplateSchemaScopeArg {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"DeleteMetadataTemplateSchemaScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetMetadataTemplateGlobalQueryParamsArg(val: GetMetadataTemplateGlobalQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetMetadataTemplateGlobalQueryParamsArg(val: any): GetMetadataTemplateGlobalQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetMetadataTemplateGlobalQueryParamsArg;
}
export function serializeGetMetadataTemplateEnterpriseQueryParamsArg(val: GetMetadataTemplateEnterpriseQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetMetadataTemplateEnterpriseQueryParamsArg(val: any): GetMetadataTemplateEnterpriseQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetMetadataTemplateEnterpriseQueryParamsArg;
}
export function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField): Json {
    return val;
}
export function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val: any): CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField\"";
    }
    if (val == "string") {
        return "string";
    }
    if (val == "float") {
        return "float";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "enum") {
        return "enum";
    }
    if (val == "multiSelect") {
        return "multiSelect";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(val: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField): Json {
    return { ["key"]: val.key };
}
export function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(val: any): CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField {
    const key: string = val.key;
    return { key: key } satisfies CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField;
}
export function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(val: CreateMetadataTemplateSchemaRequestBodyArgFieldsField): Json {
    return { ["type"]: serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val.type), ["key"]: val.key, ["displayName"]: val.displayName, ["description"]: val.description, ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField): any {
            return serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(item);
        }) as readonly any[] };
}
export function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(val: any): CreateMetadataTemplateSchemaRequestBodyArgFieldsField {
    const type: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField = deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val.type);
    const key: string = val.key;
    const displayName: string = val.displayName;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const options: undefined | readonly CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField[] = isJson(val.options, "array") ? val.options.map(function (itm: Json): any {
        return deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(itm);
    }) as readonly any[] : void 0;
    return { type: type, key: key, displayName: displayName, description: description, hidden: hidden, options: options } satisfies CreateMetadataTemplateSchemaRequestBodyArgFieldsField;
}
export function serializeCreateMetadataTemplateSchemaRequestBodyArg(val: CreateMetadataTemplateSchemaRequestBodyArg): Json {
    return { ["scope"]: val.scope, ["templateKey"]: val.templateKey, ["displayName"]: val.displayName, ["hidden"]: val.hidden, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: CreateMetadataTemplateSchemaRequestBodyArgFieldsField): any {
            return serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(item);
        }) as readonly any[], ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy };
}
export function deserializeCreateMetadataTemplateSchemaRequestBodyArg(val: any): CreateMetadataTemplateSchemaRequestBodyArg {
    const scope: string = val.scope;
    const templateKey: undefined | string = isJson(val.templateKey, "string") ? val.templateKey : void 0;
    const displayName: string = val.displayName;
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const fields: undefined | readonly CreateMetadataTemplateSchemaRequestBodyArgFieldsField[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): any {
        return deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(itm);
    }) as readonly any[] : void 0;
    const copyInstanceOnItemCopy: undefined | boolean = isJson(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    return { scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, fields: fields, copyInstanceOnItemCopy: copyInstanceOnItemCopy } satisfies CreateMetadataTemplateSchemaRequestBodyArg;
}
