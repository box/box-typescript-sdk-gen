import { newSerializeClassificationTemplate } from "../schemas.generated.js";
import { newDeserializeClassificationTemplate } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
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
        return newDeserializeClassificationTemplate(deserializeJson(response.text));
    }
    async deleteMetadataTemplateEnterpriseSecurityClassificationSchema(): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createMetadataTemplateSchemaClassification(requestBody: CreateMetadataTemplateSchemaClassificationRequestBodyArg): Promise<ClassificationTemplate> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_templates/schema#classifications") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeClassificationTemplate(deserializeJson(response.text));
    }
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField): Json {
    return val;
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField): Json {
    return val;
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField\"";
    }
    if (val == "securityClassification-6VMVochwUWo") {
        return "securityClassification-6VMVochwUWo";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField): Json {
    return val;
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField\"";
    }
    if (val == "enum") {
        return "enum";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField): Json {
    return val;
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField\"";
    }
    if (val == "Box__Security__Classification__Key") {
        return "Box__Security__Classification__Key";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField): Json {
    return val;
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField): Json {
    return { ["classificationDefinition"]: val.classificationDefinition, ["colorId"]: val.colorId };
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    const classificationDefinition: undefined | string = isJson(val.classificationDefinition, "string") ? val.classificationDefinition : void 0;
    const colorId: undefined | number = isJson(val.colorId, "number") ? val.colorId : void 0;
    return { classificationDefinition: classificationDefinition, colorId: colorId } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField): Json {
    return { ["classification"]: val.classification == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification) };
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField {
    const classification: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField = val.classification == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification);
    return { classification: classification } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField): Json {
    return { ["key"]: val.key, ["staticConfig"]: val.staticConfig == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val.staticConfig) };
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField {
    const key: undefined | string = isJson(val.key, "string") ? val.key : void 0;
    const staticConfig: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField = val.staticConfig == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(val.staticConfig);
    return { key: key, staticConfig: staticConfig } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val.type), ["key"]: val.key == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val.key), ["displayName"]: val.displayName == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField): any {
            return newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(item);
        }) as readonly any[] };
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField {
    const type: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField = val.type == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(val.type);
    const key: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField = val.key == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(val.key);
    const displayName: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField = val.displayName == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(val.displayName);
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const options: undefined | readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField[] = isJson(val.options, "array") ? val.options.map(function (itm: Json): any {
        return newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(itm);
    }) as readonly any[] : void 0;
    return { type: type, key: key, displayName: displayName, hidden: hidden, options: options } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField;
}
export function newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(val: CreateMetadataTemplateSchemaClassificationRequestBodyArg): Json {
    return { ["scope"]: newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val.scope), ["templateKey"]: val.templateKey == void 0 ? void 0 : newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val.templateKey), ["displayName"]: newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField): any {
            return newSerializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(item);
        }) as readonly any[] };
}
export function newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(val: any): CreateMetadataTemplateSchemaClassificationRequestBodyArg {
    const scope: CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(val.scope);
    const templateKey: undefined | CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField = val.templateKey == void 0 ? void 0 : newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(val.templateKey);
    const displayName: CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField = newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(val.displayName);
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const copyInstanceOnItemCopy: undefined | boolean = isJson(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    const fields: undefined | readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): any {
        return newDeserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(itm);
    }) as readonly any[] : void 0;
    return { scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, copyInstanceOnItemCopy: copyInstanceOnItemCopy, fields: fields } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArg;
}
