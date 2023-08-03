import { LegalHoldPolicyAssignments } from "../schemas.generated.js";
import { LegalHoldPolicyAssignment } from "../schemas.generated.js";
import { FileVersionLegalHolds } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = "file" | "file_version" | "folder" | "user";
export interface GetLegalHoldPolicyAssignmentsQueryParamsArg {
    readonly policyId: string;
    readonly assignToType?: GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField;
    readonly assignToId?: string;
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export declare class GetLegalHoldPolicyAssignmentsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetLegalHoldPolicyAssignmentsHeadersArg);
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
export declare class CreateLegalHoldPolicyAssignmentHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateLegalHoldPolicyAssignmentHeadersArg);
}
export declare class GetLegalHoldPolicyAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetLegalHoldPolicyAssignmentByIdHeadersArg);
}
export declare class DeleteLegalHoldPolicyAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteLegalHoldPolicyAssignmentByIdHeadersArg);
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export declare class GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg);
}
export interface GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export declare class GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg);
}
export declare class LegalHoldPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<LegalHoldPolicyAssignmentsManager, "getLegalHoldPolicyAssignments" | "createLegalHoldPolicyAssignment" | "getLegalHoldPolicyAssignmentById" | "deleteLegalHoldPolicyAssignmentById" | "getLegalHoldPolicyAssignmentFileOnHold" | "getLegalHoldPolicyAssignmentFileVersionOnHold">);
    getLegalHoldPolicyAssignments(queryParams: GetLegalHoldPolicyAssignmentsQueryParamsArg, headers?: GetLegalHoldPolicyAssignmentsHeadersArg): Promise<LegalHoldPolicyAssignments>;
    createLegalHoldPolicyAssignment(requestBody: CreateLegalHoldPolicyAssignmentRequestBodyArg, headers?: CreateLegalHoldPolicyAssignmentHeadersArg): Promise<LegalHoldPolicyAssignment>;
    getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string, headers?: GetLegalHoldPolicyAssignmentByIdHeadersArg): Promise<LegalHoldPolicyAssignment>;
    deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string, headers?: DeleteLegalHoldPolicyAssignmentByIdHeadersArg): Promise<undefined>;
    getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId: string, queryParams?: GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg, headers?: GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg): Promise<FileVersionLegalHolds>;
    getLegalHoldPolicyAssignmentFileVersionOnHold(legalHoldPolicyAssignmentId: string, queryParams?: GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg, headers?: GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg): Promise<FileVersionLegalHolds>;
}
export declare function serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField): Json;
export declare function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: any): CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
export declare function serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField): Json;
export declare function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val: any): CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
export declare function serializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val: CreateLegalHoldPolicyAssignmentRequestBodyArg): Json;
export declare function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val: any): CreateLegalHoldPolicyAssignmentRequestBodyArg;
