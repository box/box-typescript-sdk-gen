import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type LegalHoldPoliciesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetLegalHoldPoliciesOptionsArg {
    readonly policyName?: string;
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export interface PostLegalHoldPoliciesRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly filterStartedAt?: string;
    readonly filterEndedAt?: string;
    readonly isOngoing?: boolean;
}
export interface PutLegalHoldPoliciesIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly releaseNotes?: string;
}
export declare class LegalHoldPoliciesManager {
    readonly auth: LegalHoldPoliciesManagerAuthField;
    constructor(fields: Omit<LegalHoldPoliciesManager, "getLegalHoldPolicies" | "postLegalHoldPolicies" | "getLegalHoldPoliciesId" | "putLegalHoldPoliciesId" | "deleteLegalHoldPoliciesId">);
    getLegalHoldPolicies(options?: GetLegalHoldPoliciesOptionsArg): Promise<any>;
    postLegalHoldPolicies(requestBody: PostLegalHoldPoliciesRequestBodyArg): Promise<any>;
    getLegalHoldPoliciesId(legalHoldPolicyId: string): Promise<any>;
    putLegalHoldPoliciesId(legalHoldPolicyId: string, requestBody: PutLegalHoldPoliciesIdRequestBodyArg): Promise<any>;
    deleteLegalHoldPoliciesId(legalHoldPolicyId: string): Promise<any>;
}
