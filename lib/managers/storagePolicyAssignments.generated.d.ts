import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
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
export declare class StoragePolicyAssignmentsManager {
    readonly auth: StoragePolicyAssignmentsManagerAuthField;
    constructor(fields: Omit<StoragePolicyAssignmentsManager, "getStoragePolicyAssignments" | "postStoragePolicyAssignments" | "getStoragePolicyAssignmentsId" | "putStoragePolicyAssignmentsId" | "deleteStoragePolicyAssignmentsId">);
    getStoragePolicyAssignments(resolvedForType: GetStoragePolicyAssignmentsResolvedForTypeArg, resolvedForId: string, options?: GetStoragePolicyAssignmentsOptionsArg): Promise<any>;
    postStoragePolicyAssignments(requestBody: PostStoragePolicyAssignmentsRequestBodyArg): Promise<any>;
    getStoragePolicyAssignmentsId(storagePolicyAssignmentId: string): Promise<any>;
    putStoragePolicyAssignmentsId(storagePolicyAssignmentId: string, requestBody: PutStoragePolicyAssignmentsIdRequestBodyArg): Promise<any>;
    deleteStoragePolicyAssignmentsId(storagePolicyAssignmentId: string): Promise<any>;
}
