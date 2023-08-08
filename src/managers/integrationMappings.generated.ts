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
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
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
export class GetIntegrationMappingSlackHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetIntegrationMappingSlackHeadersArg) {
        Object.assign(this, fields);
    }
}
export class CreateIntegrationMappingSlackHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateIntegrationMappingSlackHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField {
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField {
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArg {
    readonly boxItem?: UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField;
    readonly options?: UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField;
}
export class UpdateIntegrationMappingSlackByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateIntegrationMappingSlackByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteIntegrationMappingSlackByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteIntegrationMappingSlackByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class IntegrationMappingsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<IntegrationMappingsManager, "getIntegrationMappingSlack" | "createIntegrationMappingSlack" | "updateIntegrationMappingSlackById" | "deleteIntegrationMappingSlackById">) {
        Object.assign(this, fields);
    }
    async getIntegrationMappingSlack(queryParams: GetIntegrationMappingSlackQueryParamsArg = {} satisfies GetIntegrationMappingSlackQueryParamsArg, headers: GetIntegrationMappingSlackHeadersArg = new GetIntegrationMappingSlackHeadersArg({})): Promise<IntegrationMappings> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit), ["partner_item_type"]: toString(queryParams.partnerItemType), ["partner_item_id"]: toString(queryParams.partnerItemId), ["box_item_id"]: toString(queryParams.boxItemId), ["box_item_type"]: toString(queryParams.boxItemType), ["is_manually_created"]: toString(queryParams.isManuallyCreated) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeIntegrationMappings(deserializeJson(response.text));
    }
    async createIntegrationMappingSlack(requestBody: IntegrationMappingSlackCreateRequest, headers: CreateIntegrationMappingSlackHeadersArg = new CreateIntegrationMappingSlackHeadersArg({})): Promise<IntegrationMapping> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeIntegrationMappingSlackCreateRequest(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeIntegrationMapping(deserializeJson(response.text));
    }
    async updateIntegrationMappingSlackById(integrationMappingId: string, requestBody: UpdateIntegrationMappingSlackByIdRequestBodyArg = {} satisfies UpdateIntegrationMappingSlackByIdRequestBodyArg, headers: UpdateIntegrationMappingSlackByIdHeadersArg = new UpdateIntegrationMappingSlackByIdHeadersArg({})): Promise<IntegrationMapping> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId) as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateIntegrationMappingSlackByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeIntegrationMapping(deserializeJson(response.text));
    }
    async deleteIntegrationMappingSlackById(integrationMappingId: string, headers: DeleteIntegrationMappingSlackByIdHeadersArg = new DeleteIntegrationMappingSlackByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
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
    return { ["box_item"]: val.boxItem == void 0 ? void 0 : serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val.boxItem), ["options"]: val.options == void 0 ? void 0 : serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val.options) };
}
export function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArg {
    const boxItem: undefined | UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField = val.box_item == void 0 ? void 0 : deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val.box_item);
    const options: undefined | UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField = val.options == void 0 ? void 0 : deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val.options);
    return { boxItem: boxItem, options: options } satisfies UpdateIntegrationMappingSlackByIdRequestBodyArg;
}
