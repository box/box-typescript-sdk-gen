import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type ShieldInformationBarrierSegmentsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface UpdateShieldInformationBarrierSegmentByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
}
export interface GetShieldInformationBarrierSegmentsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface CreateShieldInformationBarrierSegmentRequestBodyArg {
    readonly shieldInformationBarrier: ShieldInformationBarrierBase;
    readonly name: string;
    readonly description?: string;
}
export declare class ShieldInformationBarrierSegmentsManager {
    readonly auth: ShieldInformationBarrierSegmentsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierSegmentsManager, "getShieldInformationBarrierSegmentById" | "updateShieldInformationBarrierSegmentById" | "deleteShieldInformationBarrierSegmentById" | "getShieldInformationBarrierSegments" | "createShieldInformationBarrierSegment">);
    getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string): Promise<any>;
    updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg): Promise<any>;
    deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string): Promise<any>;
    getShieldInformationBarrierSegments(shieldInformationBarrierId: string, options?: GetShieldInformationBarrierSegmentsOptionsArg): Promise<undefined>;
    createShieldInformationBarrierSegment(requestBody: CreateShieldInformationBarrierSegmentRequestBodyArg): Promise<any>;
}
