import { LegalHoldPolicies } from "../schemas.generated.js";
import { LegalHoldPolicy } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetLegalHoldPoliciesQueryParamsArg {
    readonly policyName?: string;
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetLegalHoldPoliciesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetLegalHoldPoliciesHeadersArg);
}
export interface CreateLegalHoldPolicyRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly filterStartedAt?: string;
    readonly filterEndedAt?: string;
    readonly isOngoing?: boolean;
}
export declare class CreateLegalHoldPolicyHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateLegalHoldPolicyHeadersArg);
}
export declare class GetLegalHoldPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetLegalHoldPolicyByIdHeadersArg);
}
export interface UpdateLegalHoldPolicyByIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly releaseNotes?: string;
}
export declare class UpdateLegalHoldPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateLegalHoldPolicyByIdHeadersArg);
}
export declare class DeleteLegalHoldPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteLegalHoldPolicyByIdHeadersArg);
}
export declare class LegalHoldPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<LegalHoldPoliciesManager, "getLegalHoldPolicies" | "createLegalHoldPolicy" | "getLegalHoldPolicyById" | "updateLegalHoldPolicyById" | "deleteLegalHoldPolicyById">);
    getLegalHoldPolicies(queryParams?: GetLegalHoldPoliciesQueryParamsArg, headers?: GetLegalHoldPoliciesHeadersArg): Promise<LegalHoldPolicies>;
    createLegalHoldPolicy(requestBody: CreateLegalHoldPolicyRequestBodyArg, headers?: CreateLegalHoldPolicyHeadersArg): Promise<LegalHoldPolicy>;
    getLegalHoldPolicyById(legalHoldPolicyId: string, headers?: GetLegalHoldPolicyByIdHeadersArg): Promise<LegalHoldPolicy>;
    updateLegalHoldPolicyById(legalHoldPolicyId: string, requestBody: UpdateLegalHoldPolicyByIdRequestBodyArg, headers?: UpdateLegalHoldPolicyByIdHeadersArg): Promise<LegalHoldPolicy>;
    deleteLegalHoldPolicyById(legalHoldPolicyId: string, headers?: DeleteLegalHoldPolicyByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateLegalHoldPolicyRequestBodyArg(val: CreateLegalHoldPolicyRequestBodyArg): Json;
export declare function deserializeCreateLegalHoldPolicyRequestBodyArg(val: any): CreateLegalHoldPolicyRequestBodyArg;
export declare function serializeUpdateLegalHoldPolicyByIdRequestBodyArg(val: UpdateLegalHoldPolicyByIdRequestBodyArg): Json;
export declare function deserializeUpdateLegalHoldPolicyByIdRequestBodyArg(val: any): UpdateLegalHoldPolicyByIdRequestBodyArg;
