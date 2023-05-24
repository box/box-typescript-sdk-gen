import { IntegrationMappings } from "../schemas.generated.js";
import { deserializeIntegrationMappings } from "../schemas.generated.js";
import { serializeIntegrationMappings } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { IntegrationMapping } from "../schemas.generated.js";
import { deserializeIntegrationMapping } from "../schemas.generated.js";
import { serializeIntegrationMapping } from "../schemas.generated.js";
import { IntegrationMappingSlackCreateRequest } from "../schemas.generated.js";
import { deserializeIntegrationMappingSlackCreateRequest } from "../schemas.generated.js";
import { serializeIntegrationMappingSlackCreateRequest } from "../schemas.generated.js";
import { IntegrationMappingBoxItemSlack } from "../schemas.generated.js";
import { deserializeIntegrationMappingBoxItemSlack } from "../schemas.generated.js";
import { serializeIntegrationMappingBoxItemSlack } from "../schemas.generated.js";
import { IntegrationMappingSlackOptions } from "../schemas.generated.js";
import { deserializeIntegrationMappingSlackOptions } from "../schemas.generated.js";
import { serializeIntegrationMappingSlackOptions } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
export type IntegrationMappingsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export type GetIntegrationMappingSlackOptionsArgPartnerItemTypeField = "channel";
export type GetIntegrationMappingSlackOptionsArgBoxItemTypeField = "folder";
export interface GetIntegrationMappingSlackOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly partnerItemType?: GetIntegrationMappingSlackOptionsArgPartnerItemTypeField;
    readonly partnerItemId?: string;
    readonly boxItemId?: string;
    readonly boxItemType?: GetIntegrationMappingSlackOptionsArgBoxItemTypeField;
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
    readonly auth!: IntegrationMappingsManagerAuthField;
    constructor(fields: Omit<IntegrationMappingsManager, "getIntegrationMappingSlack" | "createIntegrationMappingSlack" | "updateIntegrationMappingSlackById" | "deleteIntegrationMappingSlackById">) {
        Object.assign(this, fields);
    }
    async getIntegrationMappingSlack(options: GetIntegrationMappingSlackOptionsArg = {} satisfies GetIntegrationMappingSlackOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["partner_item_type"]: options.partnerItemType, ["partner_item_id"]: options.partnerItemId, ["box_item_id"]: options.boxItemId, ["box_item_type"]: options.boxItemType, ["is_manually_created"]: options.isManuallyCreated }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeIntegrationMappings(deserializeJson(response.text));
    }
    async createIntegrationMappingSlack(requestBody: IntegrationMappingSlackCreateRequest): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack") as string, { method: "POST", body: serializeJson(serializeIntegrationMappingSlackCreateRequest(requestBody)), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeIntegrationMapping(deserializeJson(response.text));
    }
    async updateIntegrationMappingSlackById(integrationMappingId: string, requestBody: UpdateIntegrationMappingSlackByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeIntegrationMapping(deserializeJson(response.text));
    }
    async deleteIntegrationMappingSlackById(integrationMappingId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/integration_mappings/slack/", integrationMappingId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
