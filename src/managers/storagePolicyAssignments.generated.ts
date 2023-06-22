import { StoragePolicyAssignments } from "../schemas.generated.js";
import { deserializeStoragePolicyAssignments } from "../schemas.generated.js";
import { serializeStoragePolicyAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { StoragePolicyAssignment } from "../schemas.generated.js";
import { deserializeStoragePolicyAssignment } from "../schemas.generated.js";
import { serializeStoragePolicyAssignment } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type GetStoragePolicyAssignmentsResolvedForTypeArg = "user" | "enterprise";
export interface GetStoragePolicyAssignmentsOptionsArg {
    readonly marker?: string;
}
export type CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = "storage_policy";
export interface CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField {
    readonly type: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField;
    readonly id: string;
}
export type CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = "user" | "enterprise";
export interface CreateStoragePolicyAssignmentRequestBodyArgAssignedToField {
    readonly type: CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField;
    readonly id: string;
}
export interface CreateStoragePolicyAssignmentRequestBodyArg {
    readonly storagePolicy: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField;
    readonly assignedTo: CreateStoragePolicyAssignmentRequestBodyArgAssignedToField;
}
export type UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = "storage_policy";
export interface UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField {
    readonly type: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField;
    readonly id: string;
}
export interface UpdateStoragePolicyAssignmentByIdRequestBodyArg {
    readonly storagePolicy: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField;
}
export class StoragePolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<StoragePolicyAssignmentsManager, "getStoragePolicyAssignments" | "createStoragePolicyAssignment" | "getStoragePolicyAssignmentById" | "updateStoragePolicyAssignmentById" | "deleteStoragePolicyAssignmentById">) {
        Object.assign(this, fields);
    }
    async getStoragePolicyAssignments(resolvedForType: GetStoragePolicyAssignmentsResolvedForTypeArg, resolvedForId: string, options: GetStoragePolicyAssignmentsOptionsArg = {} satisfies GetStoragePolicyAssignmentsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments") as string, { method: "GET", params: { ["marker"]: options.marker, ["resolved_for_type"]: resolvedForType, ["resolved_for_id"]: resolvedForId }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicyAssignments(deserializeJson(response.text));
    }
    async createStoragePolicyAssignment(requestBody: CreateStoragePolicyAssignmentRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicyAssignment(deserializeJson(response.text));
    }
    async getStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicyAssignment(deserializeJson(response.text));
    }
    async updateStoragePolicyAssignmentById(storagePolicyAssignmentId: string, requestBody: UpdateStoragePolicyAssignmentByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicyAssignment(deserializeJson(response.text));
    }
    async deleteStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
