import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetLegalHoldPoliciesOptionsArg {
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
    getLegalHoldPolicies(options?: GetLegalHoldPoliciesOptionsArg): Promise<any>;
    createLegalHoldPolicy(requestBody: CreateLegalHoldPolicyRequestBodyArg): Promise<any>;
    getLegalHoldPolicyById(legalHoldPolicyId: string): Promise<any>;
    updateLegalHoldPolicyById(legalHoldPolicyId: string, requestBody: UpdateLegalHoldPolicyByIdRequestBodyArg): Promise<any>;
    deleteLegalHoldPolicyById(legalHoldPolicyId: string): Promise<any>;
}
