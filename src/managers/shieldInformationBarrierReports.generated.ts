import { serializeShieldInformationBarrierReport } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierReport } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeShieldInformationBarrierReference } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierReference } from "../schemas.generated.js";
import { ShieldInformationBarrierReport } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierReference } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
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
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["shield_information_barrier_id"]: toString(queryParams.shieldInformationBarrierId), ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_reports") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierReport(requestBody: ShieldInformationBarrierReference): Promise<ShieldInformationBarrierReport> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_reports") as string, { method: "POST", body: serializeJson(serializeShieldInformationBarrierReference(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierReport(deserializeJson(response.text));
    }
    async getShieldInformationBarrierReportById(shieldInformationBarrierReportId: string): Promise<ShieldInformationBarrierReport> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_reports/", shieldInformationBarrierReportId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierReport(deserializeJson(response.text));
    }
}
export function serializeGetShieldInformationBarrierReportsQueryParamsArg(val: GetShieldInformationBarrierReportsQueryParamsArg): Json {
    return { ["shield_information_barrier_id"]: val.shieldInformationBarrierId, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetShieldInformationBarrierReportsQueryParamsArg(val: any): GetShieldInformationBarrierReportsQueryParamsArg {
    const shieldInformationBarrierId: string = val.shield_information_barrier_id;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierId: shieldInformationBarrierId, marker: marker, limit: limit } satisfies GetShieldInformationBarrierReportsQueryParamsArg;
}
