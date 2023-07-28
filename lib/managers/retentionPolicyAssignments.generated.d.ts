import { RetentionPolicyAssignments } from "../schemas.generated.js";
import { RetentionPolicyAssignment } from "../schemas.generated.js";
import { FilesUnderRetention } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetRetentionPolicyAssignmentsQueryParamsArgTypeField = "folder" | "enterprise" | "metadata_template";
export interface GetRetentionPolicyAssignmentsQueryParamsArg {
    readonly type?: GetRetentionPolicyAssignmentsQueryParamsArgTypeField;
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
export interface GetRetentionPolicyAssignmentByIdQueryParamsArg {
    readonly fields?: string;
}
export interface GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class RetentionPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RetentionPolicyAssignmentsManager, "getRetentionPolicyAssignments" | "createRetentionPolicyAssignment" | "getRetentionPolicyAssignmentById" | "deleteRetentionPolicyAssignmentById" | "getRetentionPolicyAssignmentFileUnderRetention" | "getRetentionPolicyAssignmentFileVersionUnderRetention">);
    getRetentionPolicyAssignments(retentionPolicyId: string, queryParams?: GetRetentionPolicyAssignmentsQueryParamsArg): Promise<RetentionPolicyAssignments>;
    createRetentionPolicyAssignment(requestBody: CreateRetentionPolicyAssignmentRequestBodyArg): Promise<RetentionPolicyAssignment>;
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, queryParams?: GetRetentionPolicyAssignmentByIdQueryParamsArg): Promise<RetentionPolicyAssignment>;
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string): Promise<any>;
    getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId: string, queryParams?: GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg): Promise<FilesUnderRetention>;
    getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId: string, queryParams?: GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg): Promise<FilesUnderRetention>;
}
export declare function serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val: GetRetentionPolicyAssignmentsQueryParamsArgTypeField): Json;
export declare function deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val: any): GetRetentionPolicyAssignmentsQueryParamsArgTypeField;
export declare function serializeGetRetentionPolicyAssignmentsQueryParamsArg(val: GetRetentionPolicyAssignmentsQueryParamsArg): Json;
export declare function deserializeGetRetentionPolicyAssignmentsQueryParamsArg(val: any): GetRetentionPolicyAssignmentsQueryParamsArg;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField): Json;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField): Json;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField): Json;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyArg(val: CreateRetentionPolicyAssignmentRequestBodyArg): Json;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyArg(val: any): CreateRetentionPolicyAssignmentRequestBodyArg;
export declare function serializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val: GetRetentionPolicyAssignmentByIdQueryParamsArg): Json;
export declare function deserializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val: any): GetRetentionPolicyAssignmentByIdQueryParamsArg;
export declare function serializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val: GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg): Json;
export declare function deserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val: any): GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg;
export declare function serializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val: GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg): Json;
export declare function deserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val: any): GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg;
