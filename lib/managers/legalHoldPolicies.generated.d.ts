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
export interface CreateLegalHoldPolicyRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly filterStartedAt?: string;
    readonly filterEndedAt?: string;
    readonly isOngoing?: boolean;
}
export interface UpdateLegalHoldPolicyByIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly releaseNotes?: string;
}
export declare class LegalHoldPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<LegalHoldPoliciesManager, "getLegalHoldPolicies" | "createLegalHoldPolicy" | "getLegalHoldPolicyById" | "updateLegalHoldPolicyById" | "deleteLegalHoldPolicyById">);
    getLegalHoldPolicies(queryParams?: GetLegalHoldPoliciesQueryParamsArg): Promise<LegalHoldPolicies>;
    createLegalHoldPolicy(requestBody: CreateLegalHoldPolicyRequestBodyArg): Promise<LegalHoldPolicy>;
    getLegalHoldPolicyById(legalHoldPolicyId: string): Promise<LegalHoldPolicy>;
    updateLegalHoldPolicyById(legalHoldPolicyId: string, requestBody: UpdateLegalHoldPolicyByIdRequestBodyArg): Promise<LegalHoldPolicy>;
    deleteLegalHoldPolicyById(legalHoldPolicyId: string): Promise<any>;
}
export declare function serializeGetLegalHoldPoliciesQueryParamsArg(val: GetLegalHoldPoliciesQueryParamsArg): Json;
export declare function deserializeGetLegalHoldPoliciesQueryParamsArg(val: any): GetLegalHoldPoliciesQueryParamsArg;
export declare function serializeCreateLegalHoldPolicyRequestBodyArg(val: CreateLegalHoldPolicyRequestBodyArg): Json;
export declare function deserializeCreateLegalHoldPolicyRequestBodyArg(val: any): CreateLegalHoldPolicyRequestBodyArg;
export declare function serializeUpdateLegalHoldPolicyByIdRequestBodyArg(val: UpdateLegalHoldPolicyByIdRequestBodyArg): Json;
export declare function deserializeUpdateLegalHoldPolicyByIdRequestBodyArg(val: any): UpdateLegalHoldPolicyByIdRequestBodyArg;
