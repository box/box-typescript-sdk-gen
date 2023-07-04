import { newSerializeShieldInformationBarrierReport } from "../schemas.generated.js";
import { newDeserializeShieldInformationBarrierReport } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeShieldInformationBarrierReference } from "../schemas.generated.js";
import { newDeserializeShieldInformationBarrierReference } from "../schemas.generated.js";
import { ShieldInformationBarrierReport } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierReference } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { Json } from "../json.js";
import { deserializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetShieldInformationBarrierReportsQueryParamsArg {
    readonly shieldInformationBarrierId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export class ShieldInformationBarrierReportsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierReportsManager, "getShieldInformationBarrierReports" | "createShieldInformationBarrierReport" | "getShieldInformationBarrierReportById">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierReports(queryParams: GetShieldInformationBarrierReportsQueryParamsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_reports") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierReport(requestBody: ShieldInformationBarrierReference): Promise<ShieldInformationBarrierReport> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_reports") as string, { method: "POST", body: serializeJson(newSerializeShieldInformationBarrierReference(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeShieldInformationBarrierReport(deserializeJson(response.text));
    }
    async getShieldInformationBarrierReportById(shieldInformationBarrierReportId: string): Promise<ShieldInformationBarrierReport> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_reports/", shieldInformationBarrierReportId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeShieldInformationBarrierReport(deserializeJson(response.text));
    }
}
export function newSerializeGetShieldInformationBarrierReportsQueryParamsArg(val: GetShieldInformationBarrierReportsQueryParamsArg): Json {
    return { ["shieldInformationBarrierId"]: val.shieldInformationBarrierId, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function newDeserializeGetShieldInformationBarrierReportsQueryParamsArg(val: any): GetShieldInformationBarrierReportsQueryParamsArg {
    const shieldInformationBarrierId: string = val.shieldInformationBarrierId;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierId: shieldInformationBarrierId, marker: marker, limit: limit } satisfies GetShieldInformationBarrierReportsQueryParamsArg;
}
