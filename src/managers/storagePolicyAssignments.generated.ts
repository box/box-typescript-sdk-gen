import { StoragePolicyAssignments } from "../schemas.generated.js";
import { deserializeStoragePolicyAssignments } from "../schemas.generated.js";
import { serializeStoragePolicyAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { StoragePolicyAssignment } from "../schemas.generated.js";
import { deserializeStoragePolicyAssignment } from "../schemas.generated.js";
import { serializeStoragePolicyAssignment } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type StoragePolicyAssignmentsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type GetStoragePolicyAssignmentsResolvedForTypeArg = "user" | "enterprise";
export interface GetStoragePolicyAssignmentsOptionsArg {
    readonly marker?: string;
}
export type PostStoragePolicyAssignmentsRequestBodyArgStoragePolicyFieldTypeField = "storage_policy";
export interface PostStoragePolicyAssignmentsRequestBodyArgStoragePolicyField {
    readonly type: PostStoragePolicyAssignmentsRequestBodyArgStoragePolicyFieldTypeField;
    readonly id: string;
}
export type PostStoragePolicyAssignmentsRequestBodyArgAssignedToFieldTypeField = "user" | "enterprise";
export interface PostStoragePolicyAssignmentsRequestBodyArgAssignedToField {
    readonly type: PostStoragePolicyAssignmentsRequestBodyArgAssignedToFieldTypeField;
    readonly id: string;
}
export interface PostStoragePolicyAssignmentsRequestBodyArg {
    readonly storagePolicy: PostStoragePolicyAssignmentsRequestBodyArgStoragePolicyField;
    readonly assignedTo: PostStoragePolicyAssignmentsRequestBodyArgAssignedToField;
}
export type PutStoragePolicyAssignmentsIdRequestBodyArgStoragePolicyFieldTypeField = "storage_policy";
export interface PutStoragePolicyAssignmentsIdRequestBodyArgStoragePolicyField {
    readonly type: PutStoragePolicyAssignmentsIdRequestBodyArgStoragePolicyFieldTypeField;
    readonly id: string;
}
export interface PutStoragePolicyAssignmentsIdRequestBodyArg {
    readonly storagePolicy: PutStoragePolicyAssignmentsIdRequestBodyArgStoragePolicyField;
}
export class StoragePolicyAssignmentsManager {
    readonly auth!: StoragePolicyAssignmentsManagerAuthField;
    constructor(fields: Omit<StoragePolicyAssignmentsManager, "getStoragePolicyAssignments" | "postStoragePolicyAssignments" | "getStoragePolicyAssignmentsId" | "putStoragePolicyAssignmentsId" | "deleteStoragePolicyAssignmentsId">) {
        Object.assign(this, fields);
    }
    async getStoragePolicyAssignments(resolvedForType: GetStoragePolicyAssignmentsResolvedForTypeArg, resolvedForId: string, options: GetStoragePolicyAssignmentsOptionsArg = {} satisfies GetStoragePolicyAssignmentsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments") as string, { method: "GET", params: { ["marker"]: options.marker, ["resolved_for_type"]: resolvedForType, ["resolved_for_id"]: resolvedForId }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeStoragePolicyAssignments(await deserializeJson(response.text));
    }
    async postStoragePolicyAssignments(requestBody: PostStoragePolicyAssignmentsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeStoragePolicyAssignment(await deserializeJson(response.text));
    }
    async getStoragePolicyAssignmentsId(storagePolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeStoragePolicyAssignment(await deserializeJson(response.text));
    }
    async putStoragePolicyAssignmentsId(storagePolicyAssignmentId: string, requestBody: PutStoragePolicyAssignmentsIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeStoragePolicyAssignment(await deserializeJson(response.text));
    }
    async deleteStoragePolicyAssignmentsId(storagePolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
