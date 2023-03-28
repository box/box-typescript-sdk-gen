import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type RetentionPolicyAssignmentsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type GetRetentionPoliciesIdAssignmentsOptionsArgTypeField = "folder" | "enterprise" | "metadata_template";
export interface GetRetentionPoliciesIdAssignmentsOptionsArg {
    readonly type?: GetRetentionPoliciesIdAssignmentsOptionsArgTypeField;
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export type PostRetentionPolicyAssignmentsRequestBodyArgAssignToFieldTypeField = "enterprise" | "folder" | "metadata_template";
export interface PostRetentionPolicyAssignmentsRequestBodyArgAssignToField {
    readonly type: PostRetentionPolicyAssignmentsRequestBodyArgAssignToFieldTypeField;
    readonly id: string;
}
export interface PostRetentionPolicyAssignmentsRequestBodyArgFilterFieldsField {
    readonly field?: string;
    readonly value?: string;
}
export interface PostRetentionPolicyAssignmentsRequestBodyArg {
    readonly policyId: string;
    readonly assignTo: PostRetentionPolicyAssignmentsRequestBodyArgAssignToField;
    readonly filterFields?: readonly PostRetentionPolicyAssignmentsRequestBodyArgFilterFieldsField[];
    readonly startDateField?: string;
}
export interface GetRetentionPolicyAssignmentsIdOptionsArg {
    readonly fields?: string;
}
export interface GetRetentionPolicyAssignmentsIdFilesUnderRetentionOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetRetentionPolicyAssignmentsIdFileVersionsUnderRetentionOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class RetentionPolicyAssignmentsManager {
    readonly auth: RetentionPolicyAssignmentsManagerAuthField;
    constructor(fields: Omit<RetentionPolicyAssignmentsManager, "getRetentionPoliciesIdAssignments" | "postRetentionPolicyAssignments" | "getRetentionPolicyAssignmentsId" | "deleteRetentionPolicyAssignmentsId" | "getRetentionPolicyAssignmentsIdFilesUnderRetention" | "getRetentionPolicyAssignmentsIdFileVersionsUnderRetention">);
    getRetentionPoliciesIdAssignments(retentionPolicyId: string, options?: GetRetentionPoliciesIdAssignmentsOptionsArg): Promise<any>;
    postRetentionPolicyAssignments(requestBody: PostRetentionPolicyAssignmentsRequestBodyArg): Promise<any>;
    getRetentionPolicyAssignmentsId(retentionPolicyAssignmentId: string, options?: GetRetentionPolicyAssignmentsIdOptionsArg): Promise<any>;
    deleteRetentionPolicyAssignmentsId(retentionPolicyAssignmentId: string): Promise<any>;
    getRetentionPolicyAssignmentsIdFilesUnderRetention(retentionPolicyAssignmentId: string, options?: GetRetentionPolicyAssignmentsIdFilesUnderRetentionOptionsArg): Promise<any>;
    getRetentionPolicyAssignmentsIdFileVersionsUnderRetention(retentionPolicyAssignmentId: string, options?: GetRetentionPolicyAssignmentsIdFileVersionsUnderRetentionOptionsArg): Promise<any>;
}
