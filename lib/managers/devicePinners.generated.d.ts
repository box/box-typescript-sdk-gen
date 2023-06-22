import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetEnterpriseDevicePinnersOptionsArgDirectionField = "ASC" | "DESC";
export interface GetEnterpriseDevicePinnersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly direction?: GetEnterpriseDevicePinnersOptionsArgDirectionField;
}
export declare class DevicePinnersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DevicePinnersManager, "getDevicePinnerById" | "deleteDevicePinnerById" | "getEnterpriseDevicePinners">);
    getDevicePinnerById(devicePinnerId: string): Promise<any>;
    deleteDevicePinnerById(devicePinnerId: string): Promise<any>;
    getEnterpriseDevicePinners(enterpriseId: string, options?: GetEnterpriseDevicePinnersOptionsArg): Promise<any>;
}
