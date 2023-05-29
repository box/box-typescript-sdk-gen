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
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
export class LegalHoldPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<LegalHoldPolicyAssignmentsManager, "getLegalHoldPolicyAssignments" | "createLegalHoldPolicyAssignment" | "getLegalHoldPolicyAssignmentById" | "deleteLegalHoldPolicyAssignmentById" | "getLegalHoldPolicyAssignmentFileOnHold" | "getLegalHoldPolicyAssignmentFileVersionOnHold">) {
        Object.assign(this, fields);
    }
    async getLegalHoldPolicyAssignments(policyId: string, options: GetLegalHoldPolicyAssignmentsOptionsArg = {} satisfies GetLegalHoldPolicyAssignmentsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments") as string, { method: "GET", params: { ["policy_id"]: policyId, ["assign_to_type"]: options.assignToType, ["assign_to_id"]: options.assignToId, ["marker"]: options.marker, ["limit"]: options.limit, ["fields"]: options.fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicyAssignments(deserializeJson(response.text));
    }
    async createLegalHoldPolicyAssignment(requestBody: CreateLegalHoldPolicyAssignmentRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicyAssignment(deserializeJson(response.text));
    }
    async getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicyAssignment(deserializeJson(response.text));
    }
    async deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId: string, options: GetLegalHoldPolicyAssignmentFileOnHoldOptionsArg = {} satisfies GetLegalHoldPolicyAssignmentFileOnHoldOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/files_on_hold") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["fields"]: options.fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHolds(deserializeJson(response.text));
    }
    async getLegalHoldPolicyAssignmentFileVersionOnHold(legalHoldPolicyAssignmentId: string, options: GetLegalHoldPolicyAssignmentFileVersionOnHoldOptionsArg = {} satisfies GetLegalHoldPolicyAssignmentFileVersionOnHoldOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/file_versions_on_hold") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["fields"]: options.fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHolds(deserializeJson(response.text));
    }
}
