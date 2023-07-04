import { newSerializeDevicePinner } from "../schemas.generated.js";
import { newDeserializeDevicePinner } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeDevicePinners } from "../schemas.generated.js";
import { newDeserializeDevicePinners } from "../schemas.generated.js";
import { DevicePinner } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { DevicePinners } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export type GetEnterpriseDevicePinnersQueryParamsArgDirectionField = "ASC" | "DESC";
export interface GetEnterpriseDevicePinnersQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly direction?: GetEnterpriseDevicePinnersQueryParamsArgDirectionField;
}
export class DevicePinnersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DevicePinnersManager, "getDevicePinnerById" | "deleteDevicePinnerById" | "getEnterpriseDevicePinners">) {
        Object.assign(this, fields);
    }
    async getDevicePinnerById(devicePinnerId: string): Promise<DevicePinner> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeDevicePinner(deserializeJson(response.text));
    }
    async deleteDevicePinnerById(devicePinnerId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getEnterpriseDevicePinners(enterpriseId: string, queryParams: undefined | GetEnterpriseDevicePinnersQueryParamsArg = {} satisfies GetEnterpriseDevicePinnersQueryParamsArg): Promise<DevicePinners> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/enterprises/", enterpriseId, "/device_pinners") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeDevicePinners(deserializeJson(response.text));
    }
}
export function newSerializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val: GetEnterpriseDevicePinnersQueryParamsArgDirectionField): Json {
    return val;
}
export function newDeserializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val: any): GetEnterpriseDevicePinnersQueryParamsArgDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetEnterpriseDevicePinnersQueryParamsArgDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGetEnterpriseDevicePinnersQueryParamsArg(val: GetEnterpriseDevicePinnersQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["direction"]: val.direction == void 0 ? void 0 : newSerializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val.direction) };
}
export function newDeserializeGetEnterpriseDevicePinnersQueryParamsArg(val: any): GetEnterpriseDevicePinnersQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const direction: undefined | GetEnterpriseDevicePinnersQueryParamsArgDirectionField = val.direction == void 0 ? void 0 : newDeserializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val.direction);
    return { marker: marker, limit: limit, direction: direction } satisfies GetEnterpriseDevicePinnersQueryParamsArg;
}
