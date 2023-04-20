import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type DevicePinnersManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
