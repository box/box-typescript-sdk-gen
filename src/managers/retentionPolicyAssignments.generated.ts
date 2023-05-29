import { RetentionPolicyAssignments } from "../schemas.generated.js";
import { deserializeRetentionPolicyAssignments } from "../schemas.generated.js";
import { serializeRetentionPolicyAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { RetentionPolicyAssignment } from "../schemas.generated.js";
import { deserializeRetentionPolicyAssignment } from "../schemas.generated.js";
import { serializeRetentionPolicyAssignment } from "../schemas.generated.js";
import { FilesUnderRetention } from "../schemas.generated.js";
import { deserializeFilesUnderRetention } from "../schemas.generated.js";
import { serializeFilesUnderRetention } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
export class RetentionPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RetentionPolicyAssignmentsManager, "getRetentionPolicyAssignments" | "createRetentionPolicyAssignment" | "getRetentionPolicyAssignmentById" | "deleteRetentionPolicyAssignmentById" | "getRetentionPolicyAssignmentFileUnderRetention" | "getRetentionPolicyAssignmentFileVersionUnderRetention">) {
        Object.assign(this, fields);
    }
    async getRetentionPolicyAssignments(retentionPolicyId: string, options: GetRetentionPolicyAssignmentsOptionsArg = {} satisfies GetRetentionPolicyAssignmentsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId, "/assignments") as string, { method: "GET", params: { ["type"]: options.type, ["fields"]: options.fields, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicyAssignments(deserializeJson(response.text));
    }
    async createRetentionPolicyAssignment(requestBody: CreateRetentionPolicyAssignmentRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicyAssignment(deserializeJson(response.text));
    }
    async getRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, options: GetRetentionPolicyAssignmentByIdOptionsArg = {} satisfies GetRetentionPolicyAssignmentByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicyAssignment(deserializeJson(response.text));
    }
    async deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId: string, options: GetRetentionPolicyAssignmentFileUnderRetentionOptionsArg = {} satisfies GetRetentionPolicyAssignmentFileUnderRetentionOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/files_under_retention") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFilesUnderRetention(deserializeJson(response.text));
    }
    async getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId: string, options: GetRetentionPolicyAssignmentFileVersionUnderRetentionOptionsArg = {} satisfies GetRetentionPolicyAssignmentFileVersionUnderRetentionOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/file_versions_under_retention") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFilesUnderRetention(deserializeJson(response.text));
    }
}
