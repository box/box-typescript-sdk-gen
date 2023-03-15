import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type LegalHoldPolicyAssignmentsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type GetLegalHoldPolicyAssignmentsOptionsArgAssignToTypeField = "file" | "file_version" | "folder" | "user";
export interface GetLegalHoldPolicyAssignmentsOptionsArg {
    readonly assignToType?: GetLegalHoldPolicyAssignmentsOptionsArgAssignToTypeField;
    readonly assignToId?: string;
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export type PostLegalHoldPolicyAssignmentsRequestBodyArgAssignToFieldTypeField = "file" | "file_version" | "folder" | "user";
export interface PostLegalHoldPolicyAssignmentsRequestBodyArgAssignToField {
    readonly type: PostLegalHoldPolicyAssignmentsRequestBodyArgAssignToFieldTypeField;
    readonly id: string;
}
export interface PostLegalHoldPolicyAssignmentsRequestBodyArg {
    readonly policyId: string;
    readonly assignTo: PostLegalHoldPolicyAssignmentsRequestBodyArgAssignToField;
}
export interface GetLegalHoldPolicyAssignmentsIdFilesOnHoldOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export interface GetLegalHoldPolicyAssignmentsIdFileVersionsOnHoldOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export declare class LegalHoldPolicyAssignmentsManager {
    readonly auth: LegalHoldPolicyAssignmentsManagerAuthField;
    constructor(fields: Omit<LegalHoldPolicyAssignmentsManager, "getLegalHoldPolicyAssignments" | "postLegalHoldPolicyAssignments" | "getLegalHoldPolicyAssignmentsId" | "deleteLegalHoldPolicyAssignmentsId" | "getLegalHoldPolicyAssignmentsIdFilesOnHold" | "getLegalHoldPolicyAssignmentsIdFileVersionsOnHold">);
    getLegalHoldPolicyAssignments(policyId: string, options?: GetLegalHoldPolicyAssignmentsOptionsArg): Promise<any>;
    postLegalHoldPolicyAssignments(requestBody: PostLegalHoldPolicyAssignmentsRequestBodyArg): Promise<any>;
    getLegalHoldPolicyAssignmentsId(legalHoldPolicyAssignmentId: string): Promise<any>;
    deleteLegalHoldPolicyAssignmentsId(legalHoldPolicyAssignmentId: string): Promise<any>;
    getLegalHoldPolicyAssignmentsIdFilesOnHold(legalHoldPolicyAssignmentId: string, options?: GetLegalHoldPolicyAssignmentsIdFilesOnHoldOptionsArg): Promise<any>;
    getLegalHoldPolicyAssignmentsIdFileVersionsOnHold(legalHoldPolicyAssignmentId: string, options?: GetLegalHoldPolicyAssignmentsIdFileVersionsOnHoldOptionsArg): Promise<any>;
}
