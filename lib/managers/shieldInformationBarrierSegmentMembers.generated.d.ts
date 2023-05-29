import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { UserBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetShieldInformationBarrierSegmentMembersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = "shield_information_barrier_segment_member";
export type CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
}
export interface CreateShieldInformationBarrierSegmentMemberRequestBodyArg {
    readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
    readonly user: UserBase;
}
export declare class ShieldInformationBarrierSegmentMembersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentMembersManager, "getShieldInformationBarrierSegmentMemberById" | "deleteShieldInformationBarrierSegmentMemberById" | "getShieldInformationBarrierSegmentMembers" | "createShieldInformationBarrierSegmentMember">);
    getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string): Promise<any>;
    deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string): Promise<any>;
    getShieldInformationBarrierSegmentMembers(shieldInformationBarrierSegmentId: string, options?: GetShieldInformationBarrierSegmentMembersOptionsArg): Promise<undefined>;
    createShieldInformationBarrierSegmentMember(requestBody: CreateShieldInformationBarrierSegmentMemberRequestBodyArg): Promise<any>;
}
