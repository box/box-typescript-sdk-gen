import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetRetentionPolicyAssignmentsOptionsArgTypeField = "folder" | "enterprise" | "metadata_template";
export interface GetRetentionPolicyAssignmentsOptionsArg {
    readonly type?: GetRetentionPolicyAssignmentsOptionsArgTypeField;
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = "enterprise" | "folder" | "metadata_template";
export interface CreateRetentionPolicyAssignmentRequestBodyArgAssignToField {
    readonly type: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
    readonly id: string;
}
export interface CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField {
    readonly field?: string;
    readonly value?: string;
}
export interface CreateRetentionPolicyAssignmentRequestBodyArg {
    readonly policyId: string;
    readonly assignTo: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
    readonly filterFields?: readonly CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField[];
    readonly startDateField?: string;
}
export interface GetRetentionPolicyAssignmentByIdOptionsArg {
    readonly fields?: string;
}
export interface GetRetentionPolicyAssignmentFileUnderRetentionOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetRetentionPolicyAssignmentFileVersionUnderRetentionOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class RetentionPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RetentionPolicyAssignmentsManager, "getRetentionPolicyAssignments" | "createRetentionPolicyAssignment" | "getRetentionPolicyAssignmentById" | "deleteRetentionPolicyAssignmentById" | "getRetentionPolicyAssignmentFileUnderRetention" | "getRetentionPolicyAssignmentFileVersionUnderRetention">);
    getRetentionPolicyAssignments(retentionPolicyId: string, options?: GetRetentionPolicyAssignmentsOptionsArg): Promise<any>;
    createRetentionPolicyAssignment(requestBody: CreateRetentionPolicyAssignmentRequestBodyArg): Promise<any>;
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, options?: GetRetentionPolicyAssignmentByIdOptionsArg): Promise<any>;
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string): Promise<any>;
    getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId: string, options?: GetRetentionPolicyAssignmentFileUnderRetentionOptionsArg): Promise<any>;
    getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId: string, options?: GetRetentionPolicyAssignmentFileVersionUnderRetentionOptionsArg): Promise<any>;
}
