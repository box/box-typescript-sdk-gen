import { ShieldInformationBarrier } from "../schemas.generated.js";
import { deserializeShieldInformationBarrier } from "../schemas.generated.js";
import { serializeShieldInformationBarrier } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
export type ShieldInformationBarriersManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export type CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = "pending" | "disabled";
export interface CreateShieldInformationBarrierChangeStatusRequestBodyArg {
    readonly id: string;
    readonly status: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
}
export interface GetShieldInformationBarriersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class ShieldInformationBarriersManager {
    readonly auth!: ShieldInformationBarriersManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarriersManager, "getShieldInformationBarrierById" | "createShieldInformationBarrierChangeStatus" | "getShieldInformationBarriers" | "createShieldInformationBarrier">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierById(shieldInformationBarrierId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers/", shieldInformationBarrierId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrier(deserializeJson(response.text));
    }
    async createShieldInformationBarrierChangeStatus(requestBody: CreateShieldInformationBarrierChangeStatusRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers/change_status") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrier(deserializeJson(response.text));
    }
    async getShieldInformationBarriers(options: GetShieldInformationBarriersOptionsArg = {} satisfies GetShieldInformationBarriersOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrier(requestBody: ShieldInformationBarrier): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers") as string, { method: "POST", body: serializeJson(serializeShieldInformationBarrier(requestBody)), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrier(deserializeJson(response.text));
    }
}
