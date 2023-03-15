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
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type RetentionPolicyAssignmentsManagerAuthField = DeveloperTokenAuth | CcgAuth;
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
export class RetentionPolicyAssignmentsManager {
    readonly auth!: RetentionPolicyAssignmentsManagerAuthField;
    constructor(fields: Omit<RetentionPolicyAssignmentsManager, "getRetentionPoliciesIdAssignments" | "postRetentionPolicyAssignments" | "getRetentionPolicyAssignmentsId" | "deleteRetentionPolicyAssignmentsId" | "getRetentionPolicyAssignmentsIdFilesUnderRetention" | "getRetentionPolicyAssignmentsIdFileVersionsUnderRetention">) {
        Object.assign(this, fields);
    }
    async getRetentionPoliciesIdAssignments(retentionPolicyId: string, options: GetRetentionPoliciesIdAssignmentsOptionsArg = {} satisfies GetRetentionPoliciesIdAssignmentsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId, "/assignments") as string, { method: "GET", params: { ["type"]: options.type, ["fields"]: options.fields, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeRetentionPolicyAssignments(await deserializeJson(response.text));
    }
    async postRetentionPolicyAssignments(requestBody: PostRetentionPolicyAssignmentsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeRetentionPolicyAssignment(await deserializeJson(response.text));
    }
    async getRetentionPolicyAssignmentsId(retentionPolicyAssignmentId: string, options: GetRetentionPolicyAssignmentsIdOptionsArg = {} satisfies GetRetentionPolicyAssignmentsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeRetentionPolicyAssignment(await deserializeJson(response.text));
    }
    async deleteRetentionPolicyAssignmentsId(retentionPolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getRetentionPolicyAssignmentsIdFilesUnderRetention(retentionPolicyAssignmentId: string, options: GetRetentionPolicyAssignmentsIdFilesUnderRetentionOptionsArg = {} satisfies GetRetentionPolicyAssignmentsIdFilesUnderRetentionOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/files_under_retention") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFilesUnderRetention(await deserializeJson(response.text));
    }
    async getRetentionPolicyAssignmentsIdFileVersionsUnderRetention(retentionPolicyAssignmentId: string, options: GetRetentionPolicyAssignmentsIdFileVersionsUnderRetentionOptionsArg = {} satisfies GetRetentionPolicyAssignmentsIdFileVersionsUnderRetentionOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/file_versions_under_retention") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFilesUnderRetention(await deserializeJson(response.text));
    }
}
