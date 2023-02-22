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
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type ShieldInformationBarrierSegmentsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PutShieldInformationBarrierSegmentsIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
}
export interface GetShieldInformationBarrierSegmentsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface PostShieldInformationBarrierSegmentsRequestBodyArg {
    readonly shieldInformationBarrier: ShieldInformationBarrierBase;
    readonly name: string;
    readonly description?: string;
}
export class ShieldInformationBarrierSegmentsManager {
    readonly auth!: ShieldInformationBarrierSegmentsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierSegmentsManager, "getShieldInformationBarrierSegmentsId" | "putShieldInformationBarrierSegmentsId" | "deleteShieldInformationBarrierSegmentsId" | "getShieldInformationBarrierSegments" | "postShieldInformationBarrierSegments">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierSegmentsId(shieldInformationBarrierSegmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrierSegment(deserializeJSON(response.text) as JSON);
    }
    async putShieldInformationBarrierSegmentsId(shieldInformationBarrierSegmentId: string, requestBody: PutShieldInformationBarrierSegmentsIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrierSegment(deserializeJSON(response.text) as JSON);
    }
    async deleteShieldInformationBarrierSegmentsId(shieldInformationBarrierSegmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getShieldInformationBarrierSegments(shieldInformationBarrierId: string, options: GetShieldInformationBarrierSegmentsOptionsArg = {} satisfies GetShieldInformationBarrierSegmentsOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments") as string, { method: "GET", params: { ["shield_information_barrier_id"]: shieldInformationBarrierId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async postShieldInformationBarrierSegments(requestBody: PostShieldInformationBarrierSegmentsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrierSegment(deserializeJSON(response.text) as JSON);
    }
}
