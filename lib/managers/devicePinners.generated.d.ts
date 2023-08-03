import { DevicePinner } from "../schemas.generated.js";
import { DevicePinners } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export declare class GetDevicePinnerByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetDevicePinnerByIdHeadersArg);
}
export declare class DeleteDevicePinnerByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteDevicePinnerByIdHeadersArg);
}
export type GetEnterpriseDevicePinnersQueryParamsArgDirectionField = "ASC" | "DESC";
export interface GetEnterpriseDevicePinnersQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly direction?: GetEnterpriseDevicePinnersQueryParamsArgDirectionField;
}
export declare class GetEnterpriseDevicePinnersHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetEnterpriseDevicePinnersHeadersArg);
}
export declare class DevicePinnersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DevicePinnersManager, "getDevicePinnerById" | "deleteDevicePinnerById" | "getEnterpriseDevicePinners">);
    getDevicePinnerById(devicePinnerId: string, headers?: GetDevicePinnerByIdHeadersArg): Promise<DevicePinner>;
    deleteDevicePinnerById(devicePinnerId: string, headers?: DeleteDevicePinnerByIdHeadersArg): Promise<undefined>;
    getEnterpriseDevicePinners(enterpriseId: string, queryParams?: GetEnterpriseDevicePinnersQueryParamsArg, headers?: GetEnterpriseDevicePinnersHeadersArg): Promise<DevicePinners>;
}
