import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type StoragePolicyAssignmentsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
export declare class StoragePolicyAssignmentsManager {
    readonly auth: StoragePolicyAssignmentsManagerAuthField;
    constructor(fields: Omit<StoragePolicyAssignmentsManager, "getStoragePolicyAssignments" | "createStoragePolicyAssignment" | "getStoragePolicyAssignmentById" | "updateStoragePolicyAssignmentById" | "deleteStoragePolicyAssignmentById">);
    getStoragePolicyAssignments(resolvedForType: GetStoragePolicyAssignmentsResolvedForTypeArg, resolvedForId: string, options?: GetStoragePolicyAssignmentsOptionsArg): Promise<any>;
    createStoragePolicyAssignment(requestBody: CreateStoragePolicyAssignmentRequestBodyArg): Promise<any>;
    getStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<any>;
    updateStoragePolicyAssignmentById(storagePolicyAssignmentId: string, requestBody: UpdateStoragePolicyAssignmentByIdRequestBodyArg): Promise<any>;
    deleteStoragePolicyAssignmentById(storagePolicyAssignmentId: string): Promise<any>;
}
