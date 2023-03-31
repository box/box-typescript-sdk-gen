import { ShieldInformationBarrierReport } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierReport } from "../schemas.generated.js";
import { serializeShieldInformationBarrierReport } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierReference } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierReference } from "../schemas.generated.js";
import { serializeShieldInformationBarrierReference } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { JSON } from "../json.js";
import { deserializeJson } from "../json.js";
export type ShieldInformationBarrierReportsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetShieldInformationBarrierReportsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class ShieldInformationBarrierReportsManager {
    readonly auth!: ShieldInformationBarrierReportsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierReportsManager, "getShieldInformationBarrierReports" | "createShieldInformationBarrierReport" | "getShieldInformationBarrierReportById">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierReports(shieldInformationBarrierId: string, options: GetShieldInformationBarrierReportsOptionsArg = {} satisfies GetShieldInformationBarrierReportsOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_reports") as string, { method: "GET", params: { ["shield_information_barrier_id"]: shieldInformationBarrierId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierReport(requestBody: ShieldInformationBarrierReference): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_reports") as string, { method: "POST", body: serializeShieldInformationBarrierReference(serializeJSON(requestBody) as string), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierReport(deserializeJSON(response.text) as JSON);
    }
    async getShieldInformationBarrierReportById(shieldInformationBarrierReportId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_reports/", shieldInformationBarrierReportId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierReport(deserializeJSON(response.text) as JSON);
    }
}
