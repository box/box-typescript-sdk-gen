import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type ShieldInformationBarrierSegmentsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PutShieldInformationBarrierSegmentsIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
}
export interface GetShieldInformationBarrierSegmentsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface PostShieldInformationBarrierSegmentsRequestBodyArg {
    readonly shieldInformationBarrier: ShieldInformationBarrierBase;
    readonly name: string;
    readonly description?: string;
}
export declare class ShieldInformationBarrierSegmentsManager {
    readonly auth: ShieldInformationBarrierSegmentsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierSegmentsManager, "getShieldInformationBarrierSegmentsId" | "putShieldInformationBarrierSegmentsId" | "deleteShieldInformationBarrierSegmentsId" | "getShieldInformationBarrierSegments" | "postShieldInformationBarrierSegments">);
    getShieldInformationBarrierSegmentsId(shieldInformationBarrierSegmentId: string): Promise<any>;
    putShieldInformationBarrierSegmentsId(shieldInformationBarrierSegmentId: string, requestBody: PutShieldInformationBarrierSegmentsIdRequestBodyArg): Promise<any>;
    deleteShieldInformationBarrierSegmentsId(shieldInformationBarrierSegmentId: string): Promise<any>;
    getShieldInformationBarrierSegments(shieldInformationBarrierId: string, options?: GetShieldInformationBarrierSegmentsOptionsArg): Promise<undefined>;
    postShieldInformationBarrierSegments(requestBody: PostShieldInformationBarrierSegmentsRequestBodyArg): Promise<any>;
}
