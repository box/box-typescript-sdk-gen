import { ShieldInformationBarrier } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = "pending" | "disabled";
export interface CreateShieldInformationBarrierChangeStatusRequestBodyArg {
    readonly id: string;
    readonly status: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
}
export interface GetShieldInformationBarriersQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class ShieldInformationBarriersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarriersManager, "getShieldInformationBarrierById" | "createShieldInformationBarrierChangeStatus" | "getShieldInformationBarriers" | "createShieldInformationBarrier">);
    getShieldInformationBarrierById(shieldInformationBarrierId: string): Promise<ShieldInformationBarrier>;
    createShieldInformationBarrierChangeStatus(requestBody: CreateShieldInformationBarrierChangeStatusRequestBodyArg): Promise<ShieldInformationBarrier>;
    getShieldInformationBarriers(queryParams?: undefined | GetShieldInformationBarriersQueryParamsArg): Promise<undefined>;
    createShieldInformationBarrier(requestBody: ShieldInformationBarrier): Promise<ShieldInformationBarrier>;
}
export declare function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField): Json;
export declare function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val: any): CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
export declare function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(val: CreateShieldInformationBarrierChangeStatusRequestBodyArg): Json;
export declare function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(val: any): CreateShieldInformationBarrierChangeStatusRequestBodyArg;
export declare function serializeGetShieldInformationBarriersQueryParamsArg(val: GetShieldInformationBarriersQueryParamsArg): Json;
export declare function deserializeGetShieldInformationBarriersQueryParamsArg(val: any): GetShieldInformationBarriersQueryParamsArg;
