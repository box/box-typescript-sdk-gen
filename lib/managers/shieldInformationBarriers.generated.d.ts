import { ShieldInformationBarrier } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetShieldInformationBarrierByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarrierByIdHeadersArg);
}
export type CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField = "pending" | "disabled";
export interface CreateShieldInformationBarrierChangeStatusRequestBodyArg {
    readonly id: string;
    readonly status: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
}
export declare class CreateShieldInformationBarrierChangeStatusHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateShieldInformationBarrierChangeStatusHeadersArg);
}
export interface GetShieldInformationBarriersQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarriersHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarriersHeadersArg);
}
export declare class CreateShieldInformationBarrierHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateShieldInformationBarrierHeadersArg);
}
export declare class ShieldInformationBarriersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarriersManager, "getShieldInformationBarrierById" | "createShieldInformationBarrierChangeStatus" | "getShieldInformationBarriers" | "createShieldInformationBarrier">);
    getShieldInformationBarrierById(shieldInformationBarrierId: string, headers?: GetShieldInformationBarrierByIdHeadersArg): Promise<ShieldInformationBarrier>;
    createShieldInformationBarrierChangeStatus(requestBody: CreateShieldInformationBarrierChangeStatusRequestBodyArg, headers?: CreateShieldInformationBarrierChangeStatusHeadersArg): Promise<ShieldInformationBarrier>;
    getShieldInformationBarriers(queryParams?: GetShieldInformationBarriersQueryParamsArg, headers?: GetShieldInformationBarriersHeadersArg): Promise<undefined>;
    createShieldInformationBarrier(requestBody: ShieldInformationBarrier, headers?: CreateShieldInformationBarrierHeadersArg): Promise<ShieldInformationBarrier>;
}
export declare function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField): Json;
export declare function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(val: any): CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
export declare function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(val: CreateShieldInformationBarrierChangeStatusRequestBodyArg): Json;
export declare function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(val: any): CreateShieldInformationBarrierChangeStatusRequestBodyArg;
