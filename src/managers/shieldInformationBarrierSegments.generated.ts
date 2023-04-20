import { ShieldInformationBarrierSegment } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierSegment } from "../schemas.generated.js";
import { serializeShieldInformationBarrierSegment } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { serializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type ShieldInformationBarrierSegmentsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface UpdateShieldInformationBarrierSegmentByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
}
export interface GetShieldInformationBarrierSegmentsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface CreateShieldInformationBarrierSegmentRequestBodyArg {
    readonly shieldInformationBarrier: ShieldInformationBarrierBase;
    readonly name: string;
    readonly description?: string;
}
export class ShieldInformationBarrierSegmentsManager {
    readonly auth!: ShieldInformationBarrierSegmentsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierSegmentsManager, "getShieldInformationBarrierSegmentById" | "updateShieldInformationBarrierSegmentById" | "deleteShieldInformationBarrierSegmentById" | "getShieldInformationBarrierSegments" | "createShieldInformationBarrierSegment">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegment(deserializeJson(response.text));
    }
    async updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegment(deserializeJson(response.text));
    }
    async deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getShieldInformationBarrierSegments(shieldInformationBarrierId: string, options: GetShieldInformationBarrierSegmentsOptionsArg = {} satisfies GetShieldInformationBarrierSegmentsOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments") as string, { method: "GET", params: { ["shield_information_barrier_id"]: shieldInformationBarrierId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierSegment(requestBody: CreateShieldInformationBarrierSegmentRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegment(deserializeJson(response.text));
    }
}
