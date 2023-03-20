import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { UserBase } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type ShieldInformationBarrierSegmentMembersManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetShieldInformationBarrierSegmentMembersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type PostShieldInformationBarrierSegmentMembersRequestBodyArgTypeField = "shield_information_barrier_segment_member";
export type PostShieldInformationBarrierSegmentMembersRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface PostShieldInformationBarrierSegmentMembersRequestBodyArgShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: PostShieldInformationBarrierSegmentMembersRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
}
export interface PostShieldInformationBarrierSegmentMembersRequestBodyArg {
    readonly type?: PostShieldInformationBarrierSegmentMembersRequestBodyArgTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: PostShieldInformationBarrierSegmentMembersRequestBodyArgShieldInformationBarrierSegmentField;
    readonly user: UserBase;
}
export declare class ShieldInformationBarrierSegmentMembersManager {
    readonly auth: ShieldInformationBarrierSegmentMembersManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierSegmentMembersManager, "getShieldInformationBarrierSegmentMembersId" | "deleteShieldInformationBarrierSegmentMembersId" | "getShieldInformationBarrierSegmentMembers" | "postShieldInformationBarrierSegmentMembers">);
    getShieldInformationBarrierSegmentMembersId(shieldInformationBarrierSegmentMemberId: string): Promise<any>;
    deleteShieldInformationBarrierSegmentMembersId(shieldInformationBarrierSegmentMemberId: string): Promise<any>;
    getShieldInformationBarrierSegmentMembers(shieldInformationBarrierSegmentId: string, options?: GetShieldInformationBarrierSegmentMembersOptionsArg): Promise<undefined>;
    postShieldInformationBarrierSegmentMembers(requestBody: PostShieldInformationBarrierSegmentMembersRequestBodyArg): Promise<any>;
}
