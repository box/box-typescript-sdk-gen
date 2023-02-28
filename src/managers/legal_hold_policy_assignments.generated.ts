import { LegalHoldPolicyAssignments } from "../schemas.generated.js";
import { deserializeLegalHoldPolicyAssignments } from "../schemas.generated.js";
import { serializeLegalHoldPolicyAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { LegalHoldPolicyAssignment } from "../schemas.generated.js";
import { deserializeLegalHoldPolicyAssignment } from "../schemas.generated.js";
import { serializeLegalHoldPolicyAssignment } from "../schemas.generated.js";
import { FileVersionLegalHolds } from "../schemas.generated.js";
import { deserializeFileVersionLegalHolds } from "../schemas.generated.js";
import { serializeFileVersionLegalHolds } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type LegalHoldPolicyAssignmentsManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
export class LegalHoldPolicyAssignmentsManager {
    readonly auth!: LegalHoldPolicyAssignmentsManagerAuthField;
    constructor(fields: Omit<LegalHoldPolicyAssignmentsManager, "getLegalHoldPolicyAssignments" | "postLegalHoldPolicyAssignments" | "getLegalHoldPolicyAssignmentsId" | "deleteLegalHoldPolicyAssignmentsId" | "getLegalHoldPolicyAssignmentsIdFilesOnHold" | "getLegalHoldPolicyAssignmentsIdFileVersionsOnHold">) {
        Object.assign(this, fields);
    }
    async getLegalHoldPolicyAssignments(policyId: string, options: GetLegalHoldPolicyAssignmentsOptionsArg = {} satisfies GetLegalHoldPolicyAssignmentsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments") as string, { method: "GET", params: { ["policy_id"]: policyId, ["assign_to_type"]: options.assignToType, ["assign_to_id"]: options.assignToId, ["marker"]: options.marker, ["limit"]: options.limit, ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeLegalHoldPolicyAssignments(deserializeJSON(response.text) as JSON);
    }
    async postLegalHoldPolicyAssignments(requestBody: PostLegalHoldPolicyAssignmentsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeLegalHoldPolicyAssignment(deserializeJSON(response.text) as JSON);
    }
    async getLegalHoldPolicyAssignmentsId(legalHoldPolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeLegalHoldPolicyAssignment(deserializeJSON(response.text) as JSON);
    }
    async deleteLegalHoldPolicyAssignmentsId(legalHoldPolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getLegalHoldPolicyAssignmentsIdFilesOnHold(legalHoldPolicyAssignmentId: string, options: GetLegalHoldPolicyAssignmentsIdFilesOnHoldOptionsArg = {} satisfies GetLegalHoldPolicyAssignmentsIdFilesOnHoldOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/files_on_hold") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFileVersionLegalHolds(deserializeJSON(response.text) as JSON);
    }
    async getLegalHoldPolicyAssignmentsIdFileVersionsOnHold(legalHoldPolicyAssignmentId: string, options: GetLegalHoldPolicyAssignmentsIdFileVersionsOnHoldOptionsArg = {} satisfies GetLegalHoldPolicyAssignmentsIdFileVersionsOnHoldOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/file_versions_on_hold") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFileVersionLegalHolds(deserializeJSON(response.text) as JSON);
    }
}
