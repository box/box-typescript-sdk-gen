import { DevicePinner } from "../schemas.generated.js";
import { DevicePinners } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetEnterpriseDevicePinnersQueryParamsArgDirectionField = "ASC" | "DESC";
export interface GetEnterpriseDevicePinnersQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly direction?: GetEnterpriseDevicePinnersQueryParamsArgDirectionField;
}
export declare class DevicePinnersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DevicePinnersManager, "getDevicePinnerById" | "deleteDevicePinnerById" | "getEnterpriseDevicePinners">);
    getDevicePinnerById(devicePinnerId: string): Promise<DevicePinner>;
    deleteDevicePinnerById(devicePinnerId: string): Promise<any>;
    getEnterpriseDevicePinners(enterpriseId: string, queryParams?: undefined | GetEnterpriseDevicePinnersQueryParamsArg): Promise<DevicePinners>;
}
export declare function serializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val: GetEnterpriseDevicePinnersQueryParamsArgDirectionField): Json;
export declare function deserializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val: any): GetEnterpriseDevicePinnersQueryParamsArgDirectionField;
export declare function serializeGetEnterpriseDevicePinnersQueryParamsArg(val: GetEnterpriseDevicePinnersQueryParamsArg): Json;
export declare function deserializeGetEnterpriseDevicePinnersQueryParamsArg(val: any): GetEnterpriseDevicePinnersQueryParamsArg;