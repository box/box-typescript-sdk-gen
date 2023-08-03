import { ShieldInformationBarrierSegmentMember } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { UserBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetShieldInformationBarrierSegmentMemberByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarrierSegmentMemberByIdHeadersArg);
}
export declare class DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg);
}
export interface GetShieldInformationBarrierSegmentMembersQueryParamsArg {
    readonly shieldInformationBarrierSegmentId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarrierSegmentMembersHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarrierSegmentMembersHeadersArg);
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
export declare class CreateShieldInformationBarrierSegmentMemberHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateShieldInformationBarrierSegmentMemberHeadersArg);
}
export declare class ShieldInformationBarrierSegmentMembersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentMembersManager, "getShieldInformationBarrierSegmentMemberById" | "deleteShieldInformationBarrierSegmentMemberById" | "getShieldInformationBarrierSegmentMembers" | "createShieldInformationBarrierSegmentMember">);
    getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string, headers?: GetShieldInformationBarrierSegmentMemberByIdHeadersArg): Promise<ShieldInformationBarrierSegmentMember>;
    deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string, headers?: DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg): Promise<undefined>;
    getShieldInformationBarrierSegmentMembers(queryParams: GetShieldInformationBarrierSegmentMembersQueryParamsArg, headers?: GetShieldInformationBarrierSegmentMembersHeadersArg): Promise<undefined>;
    createShieldInformationBarrierSegmentMember(requestBody: CreateShieldInformationBarrierSegmentMemberRequestBodyArg, headers?: CreateShieldInformationBarrierSegmentMemberHeadersArg): Promise<ShieldInformationBarrierSegmentMember>;
}
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val: any): CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: any): CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val: any): CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val: CreateShieldInformationBarrierSegmentMemberRequestBodyArg): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val: any): CreateShieldInformationBarrierSegmentMemberRequestBodyArg;
