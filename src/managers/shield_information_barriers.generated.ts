import { ShieldInformationBarrier } from "../schemas.generated.js";
import { deserializeShieldInformationBarrier } from "../schemas.generated.js";
import { serializeShieldInformationBarrier } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
import { serializeJSON, JSON } from "../json.js";
export type ShieldInformationBarriersManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type PostShieldInformationBarriersChangeStatusRequestBodyArgStatusField = "pending" | "disabled";
export interface PostShieldInformationBarriersChangeStatusRequestBodyArg {
    readonly id: string;
    readonly status: PostShieldInformationBarriersChangeStatusRequestBodyArgStatusField;
}
export interface GetShieldInformationBarriersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class ShieldInformationBarriersManager {
    readonly auth!: ShieldInformationBarriersManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarriersManager, "getShieldInformationBarriersId" | "postShieldInformationBarriersChangeStatus" | "getShieldInformationBarriers" | "postShieldInformationBarriers">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarriersId(shieldInformationBarrierId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers/", shieldInformationBarrierId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrier(deserializeJSON(response.text) as JSON);
    }
    async postShieldInformationBarriersChangeStatus(requestBody: PostShieldInformationBarriersChangeStatusRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers/change_status") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrier(deserializeJSON(response.text) as JSON);
    }
    async getShieldInformationBarriers(options: GetShieldInformationBarriersOptionsArg = {} satisfies GetShieldInformationBarriersOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async postShieldInformationBarriers(requestBody: ShieldInformationBarrier): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers") as string, { method: "POST", body: await serializeShieldInformationBarrier(serializeJSON(requestBody) as string), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrier(deserializeJSON(response.text) as JSON);
    }
}
