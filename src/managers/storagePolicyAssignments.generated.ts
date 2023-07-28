import { serializeStoragePolicyAssignments } from "../schemas.generated.js";
import { deserializeStoragePolicyAssignments } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeStoragePolicyAssignment } from "../schemas.generated.js";
import { deserializeStoragePolicyAssignment } from "../schemas.generated.js";
import { StoragePolicyAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { StoragePolicyAssignment } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export type GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = "user" | "enterprise";
export interface GetStoragePolicyAssignmentsQueryParamsArg {
    readonly marker?: string;
    readonly resolvedForType: GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField;
    readonly resolvedForId: string;
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
    async getStoragePolicyAssignments(queryParams: GetStoragePolicyAssignmentsQueryParamsArg): Promise<StoragePolicyAssignments> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["marker"]: toString(queryParams.marker), ["resolved_for_type"]: toString(queryParams.resolvedForType), ["resolved_for_id"]: toString(queryParams.resolvedForId) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicyAssignments(deserializeJson(response.text));
    }
    async createStoragePolicyAssignment(requestBody: CreateStoragePolicyAssignmentRequestBodyArg): Promise<StoragePolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments") as string, { method: "POST", body: serializeJson(serializeCreateStoragePolicyAssignmentRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicyAssignment(deserializeJson(response.text));
    }
    async getStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<StoragePolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicyAssignment(deserializeJson(response.text));
    }
    async updateStoragePolicyAssignmentById(storagePolicyAssignmentId: string, requestBody: UpdateStoragePolicyAssignmentByIdRequestBodyArg): Promise<StoragePolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "PUT", body: serializeJson(serializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicyAssignment(deserializeJson(response.text));
    }
    async deleteStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val: GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField): Json {
    return val;
}
export function deserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val: any): GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetStoragePolicyAssignmentsQueryParamsArg(val: GetStoragePolicyAssignmentsQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["resolved_for_type"]: serializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val.resolvedForType), ["resolved_for_id"]: val.resolvedForId };
}
export function deserializeGetStoragePolicyAssignmentsQueryParamsArg(val: any): GetStoragePolicyAssignmentsQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const resolvedForType: GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = deserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val.resolved_for_type);
    const resolvedForId: string = val.resolved_for_id;
    return { marker: marker, resolvedForType: resolvedForType, resolvedForId: resolvedForId } satisfies GetStoragePolicyAssignmentsQueryParamsArg;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField): Json {
    return val;
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val: any): CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField): Json {
    return { ["type"]: serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val: any): CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField {
    const type: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val: CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField): Json {
    return val;
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val: any): CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val: CreateStoragePolicyAssignmentRequestBodyArgAssignedToField): Json {
    return { ["type"]: serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val: any): CreateStoragePolicyAssignmentRequestBodyArgAssignedToField {
    const type: CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateStoragePolicyAssignmentRequestBodyArgAssignedToField;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyArg(val: CreateStoragePolicyAssignmentRequestBodyArg): Json {
    return { ["storage_policy"]: serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val.storagePolicy), ["assigned_to"]: serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val.assignedTo) };
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyArg(val: any): CreateStoragePolicyAssignmentRequestBodyArg {
    const storagePolicy: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val.storage_policy);
    const assignedTo: CreateStoragePolicyAssignmentRequestBodyArgAssignedToField = deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val.assigned_to);
    return { storagePolicy: storagePolicy, assignedTo: assignedTo } satisfies CreateStoragePolicyAssignmentRequestBodyArg;
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField): Json {
    return val;
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField): Json {
    return { ["type"]: serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField {
    const type: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField;
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val: UpdateStoragePolicyAssignmentByIdRequestBodyArg): Json {
    return { ["storage_policy"]: serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val.storagePolicy) };
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArg {
    const storagePolicy: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val.storage_policy);
    return { storagePolicy: storagePolicy } satisfies UpdateStoragePolicyAssignmentByIdRequestBodyArg;
}
