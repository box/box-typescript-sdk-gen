import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type ShieldInformationBarrierSegmentRestrictionsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetShieldInformationBarrierSegmentRestrictionsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgTypeField = "shield_information_barrier_segment_restriction";
export type PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
}
export type PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgRestrictedSegmentFieldTypeField = "shield_information_barrier_segment";
export interface PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgRestrictedSegmentField {
    readonly id?: string;
    readonly type?: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgRestrictedSegmentFieldTypeField;
}
export interface PostShieldInformationBarrierSegmentRestrictionsRequestBodyArg {
    readonly type: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgShieldInformationBarrierSegmentField;
    readonly restrictedSegment: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgRestrictedSegmentField;
}
export declare class ShieldInformationBarrierSegmentRestrictionsManager {
    readonly auth: ShieldInformationBarrierSegmentRestrictionsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierSegmentRestrictionsManager, "getShieldInformationBarrierSegmentRestrictionsId" | "deleteShieldInformationBarrierSegmentRestrictionsId" | "getShieldInformationBarrierSegmentRestrictions" | "postShieldInformationBarrierSegmentRestrictions">);
    getShieldInformationBarrierSegmentRestrictionsId(shieldInformationBarrierSegmentRestrictionId: string): Promise<any>;
    deleteShieldInformationBarrierSegmentRestrictionsId(shieldInformationBarrierSegmentRestrictionId: string): Promise<any>;
    getShieldInformationBarrierSegmentRestrictions(shieldInformationBarrierSegmentId: string, options?: GetShieldInformationBarrierSegmentRestrictionsOptionsArg): Promise<undefined>;
    postShieldInformationBarrierSegmentRestrictions(requestBody: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArg): Promise<any>;
}
