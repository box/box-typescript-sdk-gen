import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type DevicePinnersManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type GetEnterprisesIdDevicePinnersOptionsArgDirectionField = "ASC" | "DESC";
export interface GetEnterprisesIdDevicePinnersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly direction?: GetEnterprisesIdDevicePinnersOptionsArgDirectionField;
}
export declare class DevicePinnersManager {
    readonly auth: DevicePinnersManagerAuthField;
    constructor(fields: Omit<DevicePinnersManager, "getDevicePinnersId" | "deleteDevicePinnersId" | "getEnterprisesIdDevicePinners">);
    getDevicePinnersId(devicePinnerId: string): Promise<any>;
    deleteDevicePinnersId(devicePinnerId: string): Promise<any>;
    getEnterprisesIdDevicePinners(enterpriseId: string, options?: GetEnterprisesIdDevicePinnersOptionsArg): Promise<any>;
}
