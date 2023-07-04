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
export type CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = "file" | "file_version" | "folder" | "user";
export interface CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField {
    readonly type: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
    readonly id: string;
}
export interface CreateLegalHoldPolicyAssignmentRequestBodyArg {
    readonly policyId: string;
    readonly assignTo: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export interface GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export declare class LegalHoldPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<LegalHoldPolicyAssignmentsManager, "getLegalHoldPolicyAssignments" | "createLegalHoldPolicyAssignment" | "getLegalHoldPolicyAssignmentById" | "deleteLegalHoldPolicyAssignmentById" | "getLegalHoldPolicyAssignmentFileOnHold" | "getLegalHoldPolicyAssignmentFileVersionOnHold">);
    getLegalHoldPolicyAssignments(queryParams: GetLegalHoldPolicyAssignmentsQueryParamsArg): Promise<LegalHoldPolicyAssignments>;
    createLegalHoldPolicyAssignment(requestBody: CreateLegalHoldPolicyAssignmentRequestBodyArg): Promise<LegalHoldPolicyAssignment>;
    getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string): Promise<LegalHoldPolicyAssignment>;
    deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string): Promise<any>;
    getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId: string, queryParams?: undefined | GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg): Promise<FileVersionLegalHolds>;
    getLegalHoldPolicyAssignmentFileVersionOnHold(legalHoldPolicyAssignmentId: string, queryParams?: undefined | GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg): Promise<FileVersionLegalHolds>;
}
export declare function newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val: GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField): Json;
export declare function newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val: any): GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField;
export declare function newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArg(val: GetLegalHoldPolicyAssignmentsQueryParamsArg): Json;
export declare function newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArg(val: any): GetLegalHoldPolicyAssignmentsQueryParamsArg;
export declare function newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField): Json;
export declare function newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: any): CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
export declare function newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField): Json;
export declare function newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val: any): CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
export declare function newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val: CreateLegalHoldPolicyAssignmentRequestBodyArg): Json;
export declare function newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val: any): CreateLegalHoldPolicyAssignmentRequestBodyArg;
export declare function newSerializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg(val: GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg): Json;
export declare function newDeserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg(val: any): GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg;
export declare function newSerializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg(val: GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg): Json;
export declare function newDeserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg(val: any): GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg;
