import { ShieldInformationBarrier } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarriersManager, "getShieldInformationBarrierById" | "createShieldInformationBarrierChangeStatus" | "getShieldInformationBarriers" | "createShieldInformationBarrier">);
    getShieldInformationBarrierById(shieldInformationBarrierId: string): Promise<any>;
    createShieldInformationBarrierChangeStatus(requestBody: CreateShieldInformationBarrierChangeStatusRequestBodyArg): Promise<any>;
    getShieldInformationBarriers(options?: GetShieldInformationBarriersOptionsArg): Promise<undefined>;
    createShieldInformationBarrier(requestBody: ShieldInformationBarrier): Promise<any>;
}
