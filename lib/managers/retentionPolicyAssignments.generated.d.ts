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
    getRetentionPolicyAssignments(retentionPolicyId: string, queryParams?: undefined | GetRetentionPolicyAssignmentsQueryParamsArg): Promise<RetentionPolicyAssignments>;
    createRetentionPolicyAssignment(requestBody: CreateRetentionPolicyAssignmentRequestBodyArg): Promise<RetentionPolicyAssignment>;
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, queryParams?: undefined | GetRetentionPolicyAssignmentByIdQueryParamsArg): Promise<RetentionPolicyAssignment>;
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string): Promise<any>;
    getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId: string, queryParams?: undefined | GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg): Promise<FilesUnderRetention>;
    getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId: string, queryParams?: undefined | GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg): Promise<FilesUnderRetention>;
}
export declare function newSerializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val: GetRetentionPolicyAssignmentsQueryParamsArgTypeField): Json;
export declare function newDeserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val: any): GetRetentionPolicyAssignmentsQueryParamsArgTypeField;
export declare function newSerializeGetRetentionPolicyAssignmentsQueryParamsArg(val: GetRetentionPolicyAssignmentsQueryParamsArg): Json;
export declare function newDeserializeGetRetentionPolicyAssignmentsQueryParamsArg(val: any): GetRetentionPolicyAssignmentsQueryParamsArg;
export declare function newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField): Json;
export declare function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
export declare function newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField): Json;
export declare function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
export declare function newSerializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField): Json;
export declare function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
export declare function newSerializeCreateRetentionPolicyAssignmentRequestBodyArg(val: CreateRetentionPolicyAssignmentRequestBodyArg): Json;
export declare function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArg(val: any): CreateRetentionPolicyAssignmentRequestBodyArg;
export declare function newSerializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val: GetRetentionPolicyAssignmentByIdQueryParamsArg): Json;
export declare function newDeserializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val: any): GetRetentionPolicyAssignmentByIdQueryParamsArg;
export declare function newSerializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val: GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg): Json;
export declare function newDeserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val: any): GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg;
export declare function newSerializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val: GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg): Json;
export declare function newDeserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val: any): GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg;
