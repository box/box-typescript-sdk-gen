import { ShieldInformationBarrier } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type ShieldInformationBarriersManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export type CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = "pending" | "disabled";
export interface CreateShieldInformationBarrierChangeStatusRequestBodyArg {
    readonly id: string;
    readonly status: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
}
export interface GetShieldInformationBarriersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class ShieldInformationBarriersManager {
    readonly auth: ShieldInformationBarriersManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarriersManager, "getShieldInformationBarrierById" | "createShieldInformationBarrierChangeStatus" | "getShieldInformationBarriers" | "createShieldInformationBarrier">);
    getShieldInformationBarrierById(shieldInformationBarrierId: string): Promise<any>;
    createShieldInformationBarrierChangeStatus(requestBody: CreateShieldInformationBarrierChangeStatusRequestBodyArg): Promise<any>;
    getShieldInformationBarriers(options?: GetShieldInformationBarriersOptionsArg): Promise<undefined>;
    createShieldInformationBarrier(requestBody: ShieldInformationBarrier): Promise<any>;
}
