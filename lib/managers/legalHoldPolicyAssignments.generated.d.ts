import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type LegalHoldPolicyAssignmentsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export type GetLegalHoldPolicyAssignmentsOptionsArgAssignToTypeField = "file" | "file_version" | "folder" | "user";
export interface GetLegalHoldPolicyAssignmentsOptionsArg {
    readonly assignToType?: GetLegalHoldPolicyAssignmentsOptionsArgAssignToTypeField;
    readonly assignToId?: string;
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export type CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = "file" | "file_version" | "folder" | "user";
export interface CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField {
    readonly type: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
    readonly id: string;
}
export interface CreateLegalHoldPolicyAssignmentRequestBodyArg {
    readonly policyId: string;
    readonly assignTo: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export interface GetLegalHoldPolicyAssignmentFileVersionOnHoldOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export declare class LegalHoldPolicyAssignmentsManager {
    readonly auth: LegalHoldPolicyAssignmentsManagerAuthField;
    constructor(fields: Omit<LegalHoldPolicyAssignmentsManager, "getLegalHoldPolicyAssignments" | "createLegalHoldPolicyAssignment" | "getLegalHoldPolicyAssignmentById" | "deleteLegalHoldPolicyAssignmentById" | "getLegalHoldPolicyAssignmentFileOnHold" | "getLegalHoldPolicyAssignmentFileVersionOnHold">);
    getLegalHoldPolicyAssignments(policyId: string, options?: GetLegalHoldPolicyAssignmentsOptionsArg): Promise<any>;
    createLegalHoldPolicyAssignment(requestBody: CreateLegalHoldPolicyAssignmentRequestBodyArg): Promise<any>;
    getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string): Promise<any>;
    deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string): Promise<any>;
    getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId: string, options?: GetLegalHoldPolicyAssignmentFileOnHoldOptionsArg): Promise<any>;
    getLegalHoldPolicyAssignmentFileVersionOnHold(legalHoldPolicyAssignmentId: string, options?: GetLegalHoldPolicyAssignmentFileVersionOnHoldOptionsArg): Promise<any>;
}
