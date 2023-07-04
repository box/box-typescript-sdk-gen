import { newSerializeStoragePolicyAssignments } from "../schemas.generated.js";
import { newDeserializeStoragePolicyAssignments } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeStoragePolicyAssignment } from "../schemas.generated.js";
import { newDeserializeStoragePolicyAssignment } from "../schemas.generated.js";
import { StoragePolicyAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { StoragePolicyAssignment } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeStoragePolicyAssignments(deserializeJson(response.text));
    }
    async createStoragePolicyAssignment(requestBody: CreateStoragePolicyAssignmentRequestBodyArg): Promise<StoragePolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeStoragePolicyAssignment(deserializeJson(response.text));
    }
    async getStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<StoragePolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeStoragePolicyAssignment(deserializeJson(response.text));
    }
    async updateStoragePolicyAssignmentById(storagePolicyAssignmentId: string, requestBody: UpdateStoragePolicyAssignmentByIdRequestBodyArg): Promise<StoragePolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeStoragePolicyAssignment(deserializeJson(response.text));
    }
    async deleteStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val: GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField): Json {
    return val;
}
export function newDeserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val: any): GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField {
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
export function newSerializeGetStoragePolicyAssignmentsQueryParamsArg(val: GetStoragePolicyAssignmentsQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["resolvedForType"]: newSerializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val.resolvedForType), ["resolvedForId"]: val.resolvedForId };
}
export function newDeserializeGetStoragePolicyAssignmentsQueryParamsArg(val: any): GetStoragePolicyAssignmentsQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const resolvedForType: GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = newDeserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val.resolvedForType);
    const resolvedForId: string = val.resolvedForId;
    return { marker: marker, resolvedForType: resolvedForType, resolvedForId: resolvedForId } satisfies GetStoragePolicyAssignmentsQueryParamsArg;
}
export function newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val: any): CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField): Json {
    return { ["type"]: newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val: any): CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField {
    const type: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField;
}
export function newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val: CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val: any): CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField {
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
export function newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val: CreateStoragePolicyAssignmentRequestBodyArgAssignedToField): Json {
    return { ["type"]: newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val: any): CreateStoragePolicyAssignmentRequestBodyArgAssignedToField {
    const type: CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateStoragePolicyAssignmentRequestBodyArgAssignedToField;
}
export function newSerializeCreateStoragePolicyAssignmentRequestBodyArg(val: CreateStoragePolicyAssignmentRequestBodyArg): Json {
    return { ["storagePolicy"]: newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val.storagePolicy), ["assignedTo"]: newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val.assignedTo) };
}
export function newDeserializeCreateStoragePolicyAssignmentRequestBodyArg(val: any): CreateStoragePolicyAssignmentRequestBodyArg {
    const storagePolicy: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val.storagePolicy);
    const assignedTo: CreateStoragePolicyAssignmentRequestBodyArgAssignedToField = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val.assignedTo);
    return { storagePolicy: storagePolicy, assignedTo: assignedTo } satisfies CreateStoragePolicyAssignmentRequestBodyArg;
}
export function newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField): Json {
    return val;
}
export function newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField): Json {
    return { ["type"]: newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField {
    const type: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField;
}
export function newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val: UpdateStoragePolicyAssignmentByIdRequestBodyArg): Json {
    return { ["storagePolicy"]: newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val.storagePolicy) };
}
export function newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArg {
    const storagePolicy: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val.storagePolicy);
    return { storagePolicy: storagePolicy } satisfies UpdateStoragePolicyAssignmentByIdRequestBodyArg;
}
