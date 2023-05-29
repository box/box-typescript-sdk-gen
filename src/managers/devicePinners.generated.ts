import { DevicePinner } from "../schemas.generated.js";
import { deserializeDevicePinner } from "../schemas.generated.js";
import { serializeDevicePinner } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DevicePinners } from "../schemas.generated.js";
import { deserializeDevicePinners } from "../schemas.generated.js";
import { serializeDevicePinners } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type GetEnterpriseDevicePinnersOptionsArgDirectionField = "ASC" | "DESC";
export interface GetEnterpriseDevicePinnersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly direction?: GetEnterpriseDevicePinnersOptionsArgDirectionField;
}
export class DevicePinnersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DevicePinnersManager, "getDevicePinnerById" | "deleteDevicePinnerById" | "getEnterpriseDevicePinners">) {
        Object.assign(this, fields);
    }
    async getDevicePinnerById(devicePinnerId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeDevicePinner(deserializeJson(response.text));
    }
    async deleteDevicePinnerById(devicePinnerId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getEnterpriseDevicePinners(enterpriseId: string, options: GetEnterpriseDevicePinnersOptionsArg = {} satisfies GetEnterpriseDevicePinnersOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/enterprises/", enterpriseId, "/device_pinners") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["direction"]: options.direction }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeDevicePinners(deserializeJson(response.text));
    }
}
