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
export declare function newSerializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val: GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField): Json;
export declare function newDeserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val: any): GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField;
export declare function newSerializeGetStoragePolicyAssignmentsQueryParamsArg(val: GetStoragePolicyAssignmentsQueryParamsArg): Json;
export declare function newDeserializeGetStoragePolicyAssignmentsQueryParamsArg(val: any): GetStoragePolicyAssignmentsQueryParamsArg;
export declare function newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField): Json;
export declare function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val: any): CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField;
export declare function newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val: CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField): Json;
export declare function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val: any): CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField;
export declare function newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val: CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField): Json;
export declare function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val: any): CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField;
export declare function newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val: CreateStoragePolicyAssignmentRequestBodyArgAssignedToField): Json;
export declare function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val: any): CreateStoragePolicyAssignmentRequestBodyArgAssignedToField;
export declare function newSerializeCreateStoragePolicyAssignmentRequestBodyArg(val: CreateStoragePolicyAssignmentRequestBodyArg): Json;
export declare function newDeserializeCreateStoragePolicyAssignmentRequestBodyArg(val: any): CreateStoragePolicyAssignmentRequestBodyArg;
export declare function newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField): Json;
export declare function newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField;
export declare function newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val: UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField): Json;
export declare function newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField;
export declare function newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val: UpdateStoragePolicyAssignmentByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val: any): UpdateStoragePolicyAssignmentByIdRequestBodyArg;
