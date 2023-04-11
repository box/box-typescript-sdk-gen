import { DevicePinner } from "../schemas.generated.js";
import { deserializeDevicePinner } from "../schemas.generated.js";
import { serializeDevicePinner } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DevicePinners } from "../schemas.generated.js";
import { deserializeDevicePinners } from "../schemas.generated.js";
import { serializeDevicePinners } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type DevicePinnersManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type GetEnterpriseDevicePinnersOptionsArgDirectionField = "ASC" | "DESC";
export interface GetEnterpriseDevicePinnersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly direction?: GetEnterpriseDevicePinnersOptionsArgDirectionField;
}
export class DevicePinnersManager {
    readonly auth!: DevicePinnersManagerAuthField;
    constructor(fields: Omit<DevicePinnersManager, "getDevicePinnerById" | "deleteDevicePinnerById" | "getEnterpriseDevicePinners">) {
        Object.assign(this, fields);
    }
    async getDevicePinnerById(devicePinnerId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeDevicePinner(deserializeJSON(response.text) as JSON);
    }
    async deleteDevicePinnerById(devicePinnerId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getEnterpriseDevicePinners(enterpriseId: string, options: GetEnterpriseDevicePinnersOptionsArg = {} satisfies GetEnterpriseDevicePinnersOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/enterprises/", enterpriseId, "/device_pinners") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["direction"]: options.direction }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeDevicePinners(deserializeJSON(response.text) as JSON);
    }
}
