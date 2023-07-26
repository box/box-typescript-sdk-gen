import { serializeShieldInformationBarrierSegment } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierSegment } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { ShieldInformationBarrierSegment } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface UpdateShieldInformationBarrierSegmentByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
}
export interface GetShieldInformationBarrierSegmentsQueryParamsArg {
    readonly shieldInformationBarrierId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export interface CreateShieldInformationBarrierSegmentRequestBodyArg {
    readonly shieldInformationBarrier: ShieldInformationBarrierBase;
    readonly name: string;
    readonly description?: string;
}
export class ShieldInformationBarrierSegmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentsManager, "getShieldInformationBarrierSegmentById" | "updateShieldInformationBarrierSegmentById" | "deleteShieldInformationBarrierSegmentById" | "getShieldInformationBarrierSegments" | "createShieldInformationBarrierSegment">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string): Promise<ShieldInformationBarrierSegment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegment(deserializeJson(response.text));
    }
    async updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg): Promise<ShieldInformationBarrierSegment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId) as string, { method: "PUT", body: serializeJson(serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegment(deserializeJson(response.text));
    }
    async deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getShieldInformationBarrierSegments(queryParams: GetShieldInformationBarrierSegmentsQueryParamsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments") as string, { method: "GET", params: prepareParams(serializeGetShieldInformationBarrierSegmentsQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierSegment(requestBody: CreateShieldInformationBarrierSegmentRequestBodyArg): Promise<ShieldInformationBarrierSegment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segments") as string, { method: "POST", body: serializeJson(serializeCreateShieldInformationBarrierSegmentRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegment(deserializeJson(response.text));
    }
}
export function serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(val: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg): Json {
    return { ["name"]: val.name, ["description"]: val.description };
}
export function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(val: any): UpdateShieldInformationBarrierSegmentByIdRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    return { name: name, description: description } satisfies UpdateShieldInformationBarrierSegmentByIdRequestBodyArg;
}
export function serializeGetShieldInformationBarrierSegmentsQueryParamsArg(val: GetShieldInformationBarrierSegmentsQueryParamsArg): Json {
    return { ["shield_information_barrier_id"]: val.shieldInformationBarrierId, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetShieldInformationBarrierSegmentsQueryParamsArg(val: any): GetShieldInformationBarrierSegmentsQueryParamsArg {
    const shieldInformationBarrierId: string = val.shield_information_barrier_id;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierId: shieldInformationBarrierId, marker: marker, limit: limit } satisfies GetShieldInformationBarrierSegmentsQueryParamsArg;
}
export function serializeCreateShieldInformationBarrierSegmentRequestBodyArg(val: CreateShieldInformationBarrierSegmentRequestBodyArg): Json {
    return { ["shield_information_barrier"]: serializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["name"]: val.name, ["description"]: val.description };
}
export function deserializeCreateShieldInformationBarrierSegmentRequestBodyArg(val: any): CreateShieldInformationBarrierSegmentRequestBodyArg {
    const shieldInformationBarrier: ShieldInformationBarrierBase = deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const name: string = val.name;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    return { shieldInformationBarrier: shieldInformationBarrier, name: name, description: description } satisfies CreateShieldInformationBarrierSegmentRequestBodyArg;
}
