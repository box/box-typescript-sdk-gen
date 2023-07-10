import { serializeIntegrationMappings } from "../schemas.generated.js";
import { deserializeIntegrationMappings } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeIntegrationMapping } from "../schemas.generated.js";
import { deserializeIntegrationMapping } from "../schemas.generated.js";
import { serializeIntegrationMappingSlackCreateRequest } from "../schemas.generated.js";
import { deserializeIntegrationMappingSlackCreateRequest } from "../schemas.generated.js";
import { serializeIntegrationMappingBoxItemSlack } from "../schemas.generated.js";
import { deserializeIntegrationMappingBoxItemSlack } from "../schemas.generated.js";
import { serializeIntegrationMappingSlackOptions } from "../schemas.generated.js";
import { deserializeIntegrationMappingSlackOptions } from "../schemas.generated.js";
import { IntegrationMappings } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { IntegrationMapping } from "../schemas.generated.js";
import { IntegrationMappingSlackCreateRequest } from "../schemas.generated.js";
import { IntegrationMappingBoxItemSlack } from "../schemas.generated.js";
import { IntegrationMappingSlackOptions } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export type GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField = "channel";
export type GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField = "folder";
export interface GetIntegrationMappingSlackQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly partnerItemType?: GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField;
    readonly partnerItemId?: string;
    readonly boxItemId?: string;
    readonly boxItemType?: GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField;
    readonly isManuallyCreated?: boolean;
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField {
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField {
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArg {
    readonly boxItem?: UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField;
    readonly options?: UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField;
}
export class IntegrationMappingsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<IntegrationMappingsManager, "getIntegrationMappingSlack" | "createIntegrationMappingSlack" | "updateIntegrationMappingSlackById" | "deleteIntegrationMappingSlackById">) {
        Object.assign(this, fields);
    }
    async getIntegrationMappingSlack(queryParams: undefined | GetIntegrationMappingSlackQueryParamsArg = {} satisfies GetIntegrationMappingSlackQueryParamsArg): Promise<IntegrationMappings> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeIntegrationMappings(deserializeJson(response.text));
    }
    async createIntegrationMappingSlack(requestBody: IntegrationMappingSlackCreateRequest): Promise<IntegrationMapping> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack") as string, { method: "POST", body: serializeJson(serializeIntegrationMappingSlackCreateRequest(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeIntegrationMapping(deserializeJson(response.text));
    }
    async updateIntegrationMappingSlackById(integrationMappingId: string, requestBody: UpdateIntegrationMappingSlackByIdRequestBodyArg): Promise<IntegrationMapping> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeIntegrationMapping(deserializeJson(response.text));
    }
    async deleteIntegrationMappingSlackById(integrationMappingId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val: GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField): Json {
    return val;
}
export function deserializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val: any): GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField\"";
    }
    if (val == "channel") {
        return "channel";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val: GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField): Json {
    return val;
}
export function deserializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val: any): GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetIntegrationMappingSlackQueryParamsArg(val: GetIntegrationMappingSlackQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["partnerItemType"]: val.partnerItemType == void 0 ? void 0 : serializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val.partnerItemType), ["partnerItemId"]: val.partnerItemId, ["boxItemId"]: val.boxItemId, ["boxItemType"]: val.boxItemType == void 0 ? void 0 : serializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val.boxItemType), ["isManuallyCreated"]: val.isManuallyCreated };
}
export function deserializeGetIntegrationMappingSlackQueryParamsArg(val: any): GetIntegrationMappingSlackQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const partnerItemType: undefined | GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField = val.partnerItemType == void 0 ? void 0 : deserializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val.partnerItemType);
    const partnerItemId: undefined | string = isJson(val.partnerItemId, "string") ? val.partnerItemId : void 0;
    const boxItemId: undefined | string = isJson(val.boxItemId, "string") ? val.boxItemId : void 0;
    const boxItemType: undefined | GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField = val.boxItemType == void 0 ? void 0 : deserializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val.boxItemType);
    const isManuallyCreated: undefined | boolean = isJson(val.isManuallyCreated, "boolean") ? val.isManuallyCreated : void 0;
    return { marker: marker, limit: limit, partnerItemType: partnerItemType, partnerItemId: partnerItemId, boxItemId: boxItemId, boxItemType: boxItemType, isManuallyCreated: isManuallyCreated } satisfies GetIntegrationMappingSlackQueryParamsArg;
}
export function serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val: UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField): Json {
    return {};
}
export function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField {
    return {} satisfies UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField;
}
export function serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val: UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField): Json {
    return {};
}
export function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField {
    return {} satisfies UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField;
}
export function serializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val: UpdateIntegrationMappingSlackByIdRequestBodyArg): Json {
    return { ["boxItem"]: val.boxItem == void 0 ? void 0 : serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val.boxItem), ["options"]: val.options == void 0 ? void 0 : serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val.options) };
}
export function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArg {
    const boxItem: undefined | UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField = val.boxItem == void 0 ? void 0 : deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val.boxItem);
    const options: undefined | UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField = val.options == void 0 ? void 0 : deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val.options);
    return { boxItem: boxItem, options: options } satisfies UpdateIntegrationMappingSlackByIdRequestBodyArg;
}
