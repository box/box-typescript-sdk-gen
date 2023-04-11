import { ShieldInformationBarrier } from "../schemas.generated.js";
import { deserializeShieldInformationBarrier } from "../schemas.generated.js";
import { serializeShieldInformationBarrier } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
import { serializeJson } from "../json.js";
export type ShieldInformationBarriersManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
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
        return deserializeShieldInformationBarrier(deserializeJSON(response.text) as JSON);
    }
    async createShieldInformationBarrierChangeStatus(requestBody: CreateShieldInformationBarrierChangeStatusRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers/change_status") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrier(deserializeJSON(response.text) as JSON);
    }
    async getShieldInformationBarriers(options: GetShieldInformationBarriersOptionsArg = {} satisfies GetShieldInformationBarriersOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrier(requestBody: ShieldInformationBarrier): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers") as string, { method: "POST", body: serializeShieldInformationBarrier(serializeJSON(requestBody) as string), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrier(deserializeJSON(response.text) as JSON);
    }
}
