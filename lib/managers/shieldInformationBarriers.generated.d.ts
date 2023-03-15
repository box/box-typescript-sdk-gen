import { ShieldInformationBarrier } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type ShieldInformationBarriersManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type PostShieldInformationBarriersChangeStatusRequestBodyArgStatusField = "pending" | "disabled";
export interface PostShieldInformationBarriersChangeStatusRequestBodyArg {
    readonly id: string;
    readonly status: PostShieldInformationBarriersChangeStatusRequestBodyArgStatusField;
}
export interface GetShieldInformationBarriersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class ShieldInformationBarriersManager {
    readonly auth: ShieldInformationBarriersManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarriersManager, "getShieldInformationBarriersId" | "postShieldInformationBarriersChangeStatus" | "getShieldInformationBarriers" | "postShieldInformationBarriers">);
    getShieldInformationBarriersId(shieldInformationBarrierId: string): Promise<any>;
    postShieldInformationBarriersChangeStatus(requestBody: PostShieldInformationBarriersChangeStatusRequestBodyArg): Promise<any>;
    getShieldInformationBarriers(options?: GetShieldInformationBarriersOptionsArg): Promise<undefined>;
    postShieldInformationBarriers(requestBody: ShieldInformationBarrier): Promise<any>;
}
