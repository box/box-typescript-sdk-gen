import { StoragePolicyAssignments } from "../schemas.generated.js";
import { StoragePolicyAssignment } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
export declare class StoragePolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<StoragePolicyAssignmentsManager, "getStoragePolicyAssignments" | "createStoragePolicyAssignment" | "getStoragePolicyAssignmentById" | "updateStoragePolicyAssignmentById" | "deleteStoragePolicyAssignmentById">);
    getStoragePolicyAssignments(queryParams: GetStoragePolicyAssignmentsQueryParamsArg): Promise<StoragePolicyAssignments>;
    createStoragePolicyAssignment(requestBody: CreateStoragePolicyAssignmentRequestBodyArg): Promise<StoragePolicyAssignment>;
    getStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<StoragePolicyAssignment>;
    updateStoragePolicyAssignmentById(storagePolicyAssignmentId: string, requestBody: UpdateStoragePolicyAssignmentByIdRequestBodyArg): Promise<StoragePolicyAssignment>;
    deleteStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<any>;
}
export declare function serializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val: GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField): Json;
export declare function deserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val: any): GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField;
export declare function serializeGetStoragePolicyAssignmentsQueryParamsArg(val: GetStoragePolicyAssignmentsQueryParamsArg): Json;
export declare function deserializeGetStoragePolicyAssignmentsQueryParamsArg(val: any): GetStoragePolicyAssignmentsQueryParamsArg;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField): Json;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val: any): CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField): Json;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val: any): CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val: CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField): Json;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val: any): CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val: CreateStoragePolicyAssignmentRequestBodyArgAssignedToField): Json;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val: any): CreateStoragePolicyAssignmentRequestBodyArgAssignedToField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyArg(val: CreateStoragePolicyAssignmentRequestBodyArg): Json;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyArg(val: any): CreateStoragePolicyAssignmentRequestBodyArg;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField): Json;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField): Json;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val: UpdateStoragePolicyAssignmentByIdRequestBodyArg): Json;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArg;
