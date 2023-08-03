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
export declare class GetRetentionPolicyAssignmentsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetRetentionPolicyAssignmentsHeadersArg);
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
export declare class CreateRetentionPolicyAssignmentHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateRetentionPolicyAssignmentHeadersArg);
}
export interface GetRetentionPolicyAssignmentByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GetRetentionPolicyAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetRetentionPolicyAssignmentByIdHeadersArg);
}
export declare class DeleteRetentionPolicyAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteRetentionPolicyAssignmentByIdHeadersArg);
}
export interface GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg);
}
export interface GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg);
}
export declare class RetentionPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RetentionPolicyAssignmentsManager, "getRetentionPolicyAssignments" | "createRetentionPolicyAssignment" | "getRetentionPolicyAssignmentById" | "deleteRetentionPolicyAssignmentById" | "getRetentionPolicyAssignmentFileUnderRetention" | "getRetentionPolicyAssignmentFileVersionUnderRetention">);
    getRetentionPolicyAssignments(retentionPolicyId: string, queryParams?: GetRetentionPolicyAssignmentsQueryParamsArg, headers?: GetRetentionPolicyAssignmentsHeadersArg): Promise<RetentionPolicyAssignments>;
    createRetentionPolicyAssignment(requestBody: CreateRetentionPolicyAssignmentRequestBodyArg, headers?: CreateRetentionPolicyAssignmentHeadersArg): Promise<RetentionPolicyAssignment>;
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, queryParams?: GetRetentionPolicyAssignmentByIdQueryParamsArg, headers?: GetRetentionPolicyAssignmentByIdHeadersArg): Promise<RetentionPolicyAssignment>;
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, headers?: DeleteRetentionPolicyAssignmentByIdHeadersArg): Promise<undefined>;
    getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId: string, queryParams?: GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg, headers?: GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg): Promise<FilesUnderRetention>;
    getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId: string, queryParams?: GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg, headers?: GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg): Promise<FilesUnderRetention>;
}
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField): Json;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField): Json;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField): Json;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyArg(val: CreateRetentionPolicyAssignmentRequestBodyArg): Json;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyArg(val: any): CreateRetentionPolicyAssignmentRequestBodyArg;
