import { serializeShieldInformationBarrier } from "../schemas.generated.js";
import { deserializeShieldInformationBarrier } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { ShieldInformationBarrier } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
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
export type CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = "pending" | "disabled";
export interface CreateShieldInformationBarrierChangeStatusRequestBodyArg {
    readonly id: string;
    readonly status: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
}
export interface GetShieldInformationBarriersQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class ShieldInformationBarriersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarriersManager, "getShieldInformationBarrierById" | "createShieldInformationBarrierChangeStatus" | "getShieldInformationBarriers" | "createShieldInformationBarrier">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierById(shieldInformationBarrierId: string): Promise<ShieldInformationBarrier> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers/", shieldInformationBarrierId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrier(deserializeJson(response.text));
    }
    async createShieldInformationBarrierChangeStatus(requestBody: CreateShieldInformationBarrierChangeStatusRequestBodyArg): Promise<ShieldInformationBarrier> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers/change_status") as string, { method: "POST", body: serializeJson(serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrier(deserializeJson(response.text));
    }
    async getShieldInformationBarriers(queryParams: undefined | GetShieldInformationBarriersQueryParamsArg = {} satisfies GetShieldInformationBarriersQueryParamsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers") as string, { method: "GET", params: prepareParams(serializeGetShieldInformationBarriersQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrier(requestBody: ShieldInformationBarrier): Promise<ShieldInformationBarrier> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barriers") as string, { method: "POST", body: serializeJson(serializeShieldInformationBarrier(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrier(deserializeJson(response.text));
    }
}
export function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField): Json {
    return val;
}
export function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val: any): CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(val: CreateShieldInformationBarrierChangeStatusRequestBodyArg): Json {
    return { ["id"]: val.id, ["status"]: serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val.status) };
}
export function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(val: any): CreateShieldInformationBarrierChangeStatusRequestBodyArg {
    const id: string = val.id;
    const status: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val.status);
    return { id: id, status: status } satisfies CreateShieldInformationBarrierChangeStatusRequestBodyArg;
}
export function serializeGetShieldInformationBarriersQueryParamsArg(val: GetShieldInformationBarriersQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetShieldInformationBarriersQueryParamsArg(val: any): GetShieldInformationBarriersQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetShieldInformationBarriersQueryParamsArg;
}
