import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type DevicePinnersManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type GetEnterpriseDevicePinnersOptionsArgDirectionField = "ASC" | "DESC";
export interface GetEnterpriseDevicePinnersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly direction?: GetEnterpriseDevicePinnersOptionsArgDirectionField;
}
export declare class DevicePinnersManager {
    readonly auth: DevicePinnersManagerAuthField;
    constructor(fields: Omit<DevicePinnersManager, "getDevicePinnerById" | "deleteDevicePinnerById" | "getEnterpriseDevicePinners">);
    getDevicePinnerById(devicePinnerId: string): Promise<any>;
    deleteDevicePinnerById(devicePinnerId: string): Promise<any>;
    getEnterpriseDevicePinners(enterpriseId: string, options?: GetEnterpriseDevicePinnersOptionsArg): Promise<any>;
}
