import { ShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg);
}
export declare class DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg);
}
export interface GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg {
    readonly shieldInformationBarrierSegmentId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarrierSegmentRestrictionsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarrierSegmentRestrictionsHeadersArg);
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
export declare class CreateShieldInformationBarrierSegmentRestrictionHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateShieldInformationBarrierSegmentRestrictionHeadersArg);
}
export declare class ShieldInformationBarrierSegmentRestrictionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentRestrictionsManager, "getShieldInformationBarrierSegmentRestrictionById" | "deleteShieldInformationBarrierSegmentRestrictionById" | "getShieldInformationBarrierSegmentRestrictions" | "createShieldInformationBarrierSegmentRestriction">);
    getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string, headers?: GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg): Promise<ShieldInformationBarrierSegmentRestriction>;
    deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string, headers?: DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg): Promise<undefined>;
    getShieldInformationBarrierSegmentRestrictions(queryParams: GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg, headers?: GetShieldInformationBarrierSegmentRestrictionsHeadersArg): Promise<undefined>;
    createShieldInformationBarrierSegmentRestriction(requestBody: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg, headers?: CreateShieldInformationBarrierSegmentRestrictionHeadersArg): Promise<ShieldInformationBarrierSegmentRestriction>;
}
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val: any): CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
