import { ShieldInformationBarrierSegment } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface UpdateShieldInformationBarrierSegmentByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
}
export interface GetShieldInformationBarrierSegmentsQueryParamsArg {
    readonly shieldInformationBarrierId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export interface CreateShieldInformationBarrierSegmentRequestBodyArg {
    readonly shieldInformationBarrier: ShieldInformationBarrierBase;
    readonly name: string;
    readonly description?: string;
}
export declare class ShieldInformationBarrierSegmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentsManager, "getShieldInformationBarrierSegmentById" | "updateShieldInformationBarrierSegmentById" | "deleteShieldInformationBarrierSegmentById" | "getShieldInformationBarrierSegments" | "createShieldInformationBarrierSegment">);
    getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string): Promise<ShieldInformationBarrierSegment>;
    updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg): Promise<ShieldInformationBarrierSegment>;
    deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string): Promise<any>;
    getShieldInformationBarrierSegments(queryParams: GetShieldInformationBarrierSegmentsQueryParamsArg): Promise<undefined>;
    createShieldInformationBarrierSegment(requestBody: CreateShieldInformationBarrierSegmentRequestBodyArg): Promise<ShieldInformationBarrierSegment>;
}
export declare function serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(val: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg): Json;
export declare function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(val: any): UpdateShieldInformationBarrierSegmentByIdRequestBodyArg;
export declare function serializeGetShieldInformationBarrierSegmentsQueryParamsArg(val: GetShieldInformationBarrierSegmentsQueryParamsArg): Json;
export declare function deserializeGetShieldInformationBarrierSegmentsQueryParamsArg(val: any): GetShieldInformationBarrierSegmentsQueryParamsArg;
export declare function serializeCreateShieldInformationBarrierSegmentRequestBodyArg(val: CreateShieldInformationBarrierSegmentRequestBodyArg): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentRequestBodyArg(val: any): CreateShieldInformationBarrierSegmentRequestBodyArg;
