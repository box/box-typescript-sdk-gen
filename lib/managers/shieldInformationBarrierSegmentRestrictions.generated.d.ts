import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type ShieldInformationBarrierSegmentRestrictionsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetShieldInformationBarrierSegmentRestrictionsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = "shield_information_barrier_segment_restriction";
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = "shield_information_barrier_segment";
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField {
    readonly id?: string;
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField;
}
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg {
    readonly type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
    readonly restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
}
export declare class ShieldInformationBarrierSegmentRestrictionsManager {
    readonly auth: ShieldInformationBarrierSegmentRestrictionsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierSegmentRestrictionsManager, "getShieldInformationBarrierSegmentRestrictionById" | "deleteShieldInformationBarrierSegmentRestrictionById" | "getShieldInformationBarrierSegmentRestrictions" | "createShieldInformationBarrierSegmentRestriction">);
    getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string): Promise<any>;
    deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string): Promise<any>;
    getShieldInformationBarrierSegmentRestrictions(shieldInformationBarrierSegmentId: string, options?: GetShieldInformationBarrierSegmentRestrictionsOptionsArg): Promise<undefined>;
    createShieldInformationBarrierSegmentRestriction(requestBody: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg): Promise<any>;
}
