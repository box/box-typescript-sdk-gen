import { serializeClassificationTemplate } from "../schemas.generated.js";
import { deserializeClassificationTemplate } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { ClassificationTemplate } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ClassificationsManager, "getMetadataTemplateEnterpriseSecurityClassificationSchema" | "deleteMetadataTemplateEnterpriseSecurityClassificationSchema" | "createMetadataTemplateSchemaClassification">) {
        Object.assign(this, fields);
    }
    async getMetadataTemplateEnterpriseSecurityClassificationSchema(): Promise<ClassificationTemplate> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeClassificationTemplate(deserializeJson(response.text));
    }
    async deleteMetadataTemplateEnterpriseSecurityClassificationSchema(): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createMetadataTemplateSchemaClassification(requestBody: CreateMetadataTemplateSchemaClassificationRequestBodyArg): Promise<ClassificationTemplate> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/schema#classifications") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeClassificationTemplate(deserializeJson(response.text));
    }
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField): Json {
    return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField): Json {
    return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField\"";
    }
    if (val == "securityClassification-6VMVochwUWo") {
        return "securityClassification-6VMVochwUWo";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField): Json {
    return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField): Json {
    return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField\"";
    }
    if (val == "enum") {
        return "enum";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField): Json {
    return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField\"";
    }
    if (val == "Box__Security__Classification__Key") {
        return "Box__Security__Classification__Key";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField): Json {
    return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField): Json {
    return { ["classificationDefinition"]: val.classificationDefinition, ["colorId"]: val.colorId };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    const classificationDefinition: undefined | string = isJson(val.classificationDefinition, "string") ? val.classificationDefinition : void 0;
    const colorId: undefined | number = isJson(val.colorId, "number") ? val.colorId : void 0;
    return { classificationDefinition: classificationDefinition, colorId: colorId } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField): Json {
    return { ["classification"]: val.classification == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification) };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField {
    const classification: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = val.classification == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification);
    return { classification: classification } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField): Json {
    return { ["key"]: val.key, ["staticConfig"]: val.staticConfig == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val.staticConfig) };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField {
    const key: undefined | string = isJson(val.key, "string") ? val.key : void 0;
    const staticConfig: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = val.staticConfig == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val.staticConfig);
    return { key: key, staticConfig: staticConfig } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val.type), ["key"]: val.key == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val.key), ["displayName"]: val.displayName == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField): any {
            return serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(item);
        }) as readonly any[] };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField {
    const type: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = val.type == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val.type);
    const key: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = val.key == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val.key);
    const displayName: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = val.displayName == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val.displayName);
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const options: undefined | readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField[] = isJson(val.options, "array") ? val.options.map(function (itm: Json): any {
        return deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(itm);
    }) as readonly any[] : void 0;
    return { type: type, key: key, displayName: displayName, hidden: hidden, options: options } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(val: CreateMetadataTemplateSchemaClassificationRequestBodyArg): Json {
    return { ["scope"]: serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val.scope), ["templateKey"]: val.templateKey == void 0 ? void 0 : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val.templateKey), ["displayName"]: serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField): any {
            return serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(item);
        }) as readonly any[] };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArg {
    const scope: CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val.scope);
    const templateKey: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = val.templateKey == void 0 ? void 0 : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val.templateKey);
    const displayName: CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val.displayName);
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const copyInstanceOnItemCopy: undefined | boolean = isJson(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    const fields: undefined | readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): any {
        return deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(itm);
    }) as readonly any[] : void 0;
    return { scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, copyInstanceOnItemCopy: copyInstanceOnItemCopy, fields: fields } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArg;
}
