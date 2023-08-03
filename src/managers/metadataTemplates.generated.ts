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
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
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
export class GetMetadataTemplatesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetMetadataTemplatesHeadersArg) {
        Object.assign(this, fields);
    }
}
export type GetMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export class GetMetadataTemplateSchemaHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetMetadataTemplateSchemaHeadersArg) {
        Object.assign(this, fields);
    }
}
export type DeleteMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export class DeleteMetadataTemplateSchemaHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteMetadataTemplateSchemaHeadersArg) {
        Object.assign(this, fields);
    }
}
export class GetMetadataTemplateByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetMetadataTemplateByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetMetadataTemplateGlobalQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class GetMetadataTemplateGlobalHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetMetadataTemplateGlobalHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetMetadataTemplateEnterpriseQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class GetMetadataTemplateEnterpriseHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetMetadataTemplateEnterpriseHeadersArg) {
        Object.assign(this, fields);
    }
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
export class CreateMetadataTemplateSchemaHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateMetadataTemplateSchemaHeadersArg) {
        Object.assign(this, fields);
    }
}
export class MetadataTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MetadataTemplatesManager, "getMetadataTemplates" | "getMetadataTemplateSchema" | "deleteMetadataTemplateSchema" | "getMetadataTemplateById" | "getMetadataTemplateGlobal" | "getMetadataTemplateEnterprise" | "createMetadataTemplateSchema">) {
        Object.assign(this, fields);
    }
    async getMetadataTemplates(queryParams: GetMetadataTemplatesQueryParamsArg, headers: GetMetadataTemplatesHeadersArg = new GetMetadataTemplatesHeadersArg({})): Promise<MetadataTemplates> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["metadata_instance_id"]: toString(queryParams.metadataInstanceId) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplates(deserializeJson(response.text));
    }
    async getMetadataTemplateSchema(scope: GetMetadataTemplateSchemaScopeArg, templateKey: string, headers: GetMetadataTemplateSchemaHeadersArg = new GetMetadataTemplateSchemaHeadersArg({})): Promise<MetadataTemplate> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema") as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplate(deserializeJson(response.text));
    }
    async deleteMetadataTemplateSchema(scope: DeleteMetadataTemplateSchemaScopeArg, templateKey: string, headers: DeleteMetadataTemplateSchemaHeadersArg = new DeleteMetadataTemplateSchemaHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", scope, "/", templateKey, "/schema") as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async getMetadataTemplateById(templateId: string, headers: GetMetadataTemplateByIdHeadersArg = new GetMetadataTemplateByIdHeadersArg({})): Promise<MetadataTemplate> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/", templateId) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplate(deserializeJson(response.text));
    }
    async getMetadataTemplateGlobal(queryParams: GetMetadataTemplateGlobalQueryParamsArg = {} satisfies GetMetadataTemplateGlobalQueryParamsArg, headers: GetMetadataTemplateGlobalHeadersArg = new GetMetadataTemplateGlobalHeadersArg({})): Promise<MetadataTemplates> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/global") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplates(deserializeJson(response.text));
    }
    async getMetadataTemplateEnterprise(queryParams: GetMetadataTemplateEnterpriseQueryParamsArg = {} satisfies GetMetadataTemplateEnterpriseQueryParamsArg, headers: GetMetadataTemplateEnterpriseHeadersArg = new GetMetadataTemplateEnterpriseHeadersArg({})): Promise<MetadataTemplates> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplates(deserializeJson(response.text));
    }
    async createMetadataTemplateSchema(requestBody: CreateMetadataTemplateSchemaRequestBodyArg, headers: CreateMetadataTemplateSchemaHeadersArg = new CreateMetadataTemplateSchemaHeadersArg({})): Promise<MetadataTemplate> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/schema") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateMetadataTemplateSchemaRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataTemplate(deserializeJson(response.text));
    }
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
