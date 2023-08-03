import { ShieldInformationBarrierSegment } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetShieldInformationBarrierSegmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarrierSegmentByIdHeadersArg);
}
export interface UpdateShieldInformationBarrierSegmentByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
}
export declare class UpdateShieldInformationBarrierSegmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateShieldInformationBarrierSegmentByIdHeadersArg);
}
export declare class DeleteShieldInformationBarrierSegmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteShieldInformationBarrierSegmentByIdHeadersArg);
}
export interface GetShieldInformationBarrierSegmentsQueryParamsArg {
    readonly shieldInformationBarrierId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarrierSegmentsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarrierSegmentsHeadersArg);
}
export interface CreateShieldInformationBarrierSegmentRequestBodyArg {
    readonly shieldInformationBarrier: ShieldInformationBarrierBase;
    readonly name: string;
    readonly description?: string;
}
export declare class CreateShieldInformationBarrierSegmentHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateShieldInformationBarrierSegmentHeadersArg);
}
export declare class ShieldInformationBarrierSegmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentsManager, "getShieldInformationBarrierSegmentById" | "updateShieldInformationBarrierSegmentById" | "deleteShieldInformationBarrierSegmentById" | "getShieldInformationBarrierSegments" | "createShieldInformationBarrierSegment">);
    getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, headers?: GetShieldInformationBarrierSegmentByIdHeadersArg): Promise<ShieldInformationBarrierSegment>;
    updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg, headers?: UpdateShieldInformationBarrierSegmentByIdHeadersArg): Promise<ShieldInformationBarrierSegment>;
    deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, headers?: DeleteShieldInformationBarrierSegmentByIdHeadersArg): Promise<undefined>;
    getShieldInformationBarrierSegments(queryParams: GetShieldInformationBarrierSegmentsQueryParamsArg, headers?: GetShieldInformationBarrierSegmentsHeadersArg): Promise<undefined>;
    createShieldInformationBarrierSegment(requestBody: CreateShieldInformationBarrierSegmentRequestBodyArg, headers?: CreateShieldInformationBarrierSegmentHeadersArg): Promise<ShieldInformationBarrierSegment>;
}
export declare function serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(val: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg): Json;
export declare function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(val: any): UpdateShieldInformationBarrierSegmentByIdRequestBodyArg;
export declare function serializeCreateShieldInformationBarrierSegmentRequestBodyArg(val: CreateShieldInformationBarrierSegmentRequestBodyArg): Json;
export declare function deserializeCreateShieldInformationBarrierSegmentRequestBodyArg(val: any): CreateShieldInformationBarrierSegmentRequestBodyArg;
