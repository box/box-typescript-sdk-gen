import { StoragePolicyAssignments } from '../schemas/storagePolicyAssignments.generated.js';
import { StoragePolicyAssignment } from '../schemas/storagePolicyAssignment.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetStoragePolicyAssignmentsOptionals {
    readonly headers: GetStoragePolicyAssignmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetStoragePolicyAssignmentsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetStoragePolicyAssignmentsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetStoragePolicyAssignmentsOptionalsInput {
    readonly headers?: GetStoragePolicyAssignmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateStoragePolicyAssignmentOptionals {
    readonly headers: CreateStoragePolicyAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateStoragePolicyAssignmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateStoragePolicyAssignmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateStoragePolicyAssignmentOptionalsInput {
    readonly headers?: CreateStoragePolicyAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetStoragePolicyAssignmentByIdOptionals {
    readonly headers: GetStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetStoragePolicyAssignmentByIdOptionalsInput {
    readonly headers?: GetStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateStoragePolicyAssignmentByIdOptionals {
    readonly headers: UpdateStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateStoragePolicyAssignmentByIdOptionalsInput {
    readonly headers?: UpdateStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteStoragePolicyAssignmentByIdOptionals {
    readonly headers: DeleteStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteStoragePolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteStoragePolicyAssignmentByIdOptionalsInput {
    readonly headers?: DeleteStoragePolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField = 'user' | 'enterprise' | string;
export interface GetStoragePolicyAssignmentsQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The target type to return assignments for. */
    readonly resolvedForType: GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField;
    /**
     * The ID of the user or enterprise to return assignments for. */
    readonly resolvedForId: string;
}
export declare class GetStoragePolicyAssignmentsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetStoragePolicyAssignmentsHeaders, 'extraHeaders'> & Partial<Pick<GetStoragePolicyAssignmentsHeaders, 'extraHeaders'>>);
}
export interface GetStoragePolicyAssignmentsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField = 'storage_policy';
export declare class CreateStoragePolicyAssignmentRequestBodyStoragePolicyField {
    /**
     * The type to assign. */
    readonly type: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
    /**
     * The ID of the storage policy to assign. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<CreateStoragePolicyAssignmentRequestBodyStoragePolicyField, 'type'> & Partial<Pick<CreateStoragePolicyAssignmentRequestBodyStoragePolicyField, 'type'>>);
}
export interface CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput {
    /**
     * The type to assign. */
    readonly type?: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
    /**
     * The ID of the storage policy to assign. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export type CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField = 'user' | 'enterprise';
export interface CreateStoragePolicyAssignmentRequestBodyAssignedToField {
    /**
     * The type to assign the policy to. */
    readonly type: CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField;
    /**
     * The ID of the user or enterprise. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CreateStoragePolicyAssignmentRequestBody {
    /**
     * The storage policy to assign to the user or
     * enterprise. */
    readonly storagePolicy: CreateStoragePolicyAssignmentRequestBodyStoragePolicyField;
    /**
     * The user or enterprise to assign the storage
     * policy to. */
    readonly assignedTo: CreateStoragePolicyAssignmentRequestBodyAssignedToField;
    readonly rawData?: SerializedData;
}
export declare class CreateStoragePolicyAssignmentHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateStoragePolicyAssignmentHeaders, 'extraHeaders'> & Partial<Pick<CreateStoragePolicyAssignmentHeaders, 'extraHeaders'>>);
}
export interface CreateStoragePolicyAssignmentHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetStoragePolicyAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetStoragePolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetStoragePolicyAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField = 'storage_policy';
export declare class UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField {
    /**
     * The type to assign. */
    readonly type: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
    /**
     * The ID of the storage policy to assign. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField, 'type'> & Partial<Pick<UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField, 'type'>>);
}
export interface UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput {
    /**
     * The type to assign. */
    readonly type?: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
    /**
     * The ID of the storage policy to assign. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface UpdateStoragePolicyAssignmentByIdRequestBody {
    /**
     * The storage policy to assign to the user or
     * enterprise. */
    readonly storagePolicy: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField;
    readonly rawData?: SerializedData;
}
export declare class UpdateStoragePolicyAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateStoragePolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateStoragePolicyAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteStoragePolicyAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteStoragePolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteStoragePolicyAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class StoragePolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<StoragePolicyAssignmentsManager, 'networkSession' | 'getStoragePolicyAssignments' | 'createStoragePolicyAssignment' | 'getStoragePolicyAssignmentById' | 'updateStoragePolicyAssignmentById' | 'deleteStoragePolicyAssignmentById'> & Partial<Pick<StoragePolicyAssignmentsManager, 'networkSession'>>);
    /**
     * Fetches all the storage policy assignment for an enterprise or user.
     * @param {GetStoragePolicyAssignmentsQueryParams} queryParams Query parameters of getStoragePolicyAssignments method
     * @param {GetStoragePolicyAssignmentsOptionalsInput} optionalsInput
     * @returns {Promise<StoragePolicyAssignments>}
     */
    getStoragePolicyAssignments(queryParams: GetStoragePolicyAssignmentsQueryParams, optionalsInput?: GetStoragePolicyAssignmentsOptionalsInput): Promise<StoragePolicyAssignments>;
    /**
     * Creates a storage policy assignment for an enterprise or user.
     * @param {CreateStoragePolicyAssignmentRequestBody} requestBody Request body of createStoragePolicyAssignment method
     * @param {CreateStoragePolicyAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<StoragePolicyAssignment>}
     */
    createStoragePolicyAssignment(requestBody: CreateStoragePolicyAssignmentRequestBody, optionalsInput?: CreateStoragePolicyAssignmentOptionalsInput): Promise<StoragePolicyAssignment>;
    /**
       * Fetches a specific storage policy assignment.
       * @param {string} storagePolicyAssignmentId The ID of the storage policy assignment.
      Example: "932483"
       * @param {GetStoragePolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<StoragePolicyAssignment>}
       */
    getStoragePolicyAssignmentById(storagePolicyAssignmentId: string, optionalsInput?: GetStoragePolicyAssignmentByIdOptionalsInput): Promise<StoragePolicyAssignment>;
    /**
       * Updates a specific storage policy assignment.
       * @param {string} storagePolicyAssignmentId The ID of the storage policy assignment.
      Example: "932483"
       * @param {UpdateStoragePolicyAssignmentByIdRequestBody} requestBody Request body of updateStoragePolicyAssignmentById method
       * @param {UpdateStoragePolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<StoragePolicyAssignment>}
       */
    updateStoragePolicyAssignmentById(storagePolicyAssignmentId: string, requestBody: UpdateStoragePolicyAssignmentByIdRequestBody, optionalsInput?: UpdateStoragePolicyAssignmentByIdOptionalsInput): Promise<StoragePolicyAssignment>;
    /**
       * Delete a storage policy assignment.
       *
       * Deleting a storage policy assignment on a user
       * will have the user inherit the enterprise's default
       * storage policy.
       *
       * There is a rate limit for calling this endpoint of only
       * twice per user in a 24 hour time frame.
       * @param {string} storagePolicyAssignmentId The ID of the storage policy assignment.
      Example: "932483"
       * @param {DeleteStoragePolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteStoragePolicyAssignmentById(storagePolicyAssignmentId: string, optionalsInput?: DeleteStoragePolicyAssignmentByIdOptionalsInput): Promise<undefined>;
}
export interface StoragePolicyAssignmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(val: GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField): SerializedData;
export declare function deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(val: SerializedData): GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val: CreateStoragePolicyAssignmentRequestBodyStoragePolicyField): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyStoragePolicyField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(val: CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val: CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField;
export declare function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val: CreateStoragePolicyAssignmentRequestBodyAssignedToField): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val: SerializedData): CreateStoragePolicyAssignmentRequestBodyAssignedToField;
export declare function serializeCreateStoragePolicyAssignmentRequestBody(val: CreateStoragePolicyAssignmentRequestBody): SerializedData;
export declare function deserializeCreateStoragePolicyAssignmentRequestBody(val: SerializedData): CreateStoragePolicyAssignmentRequestBody;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField): SerializedData;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val: SerializedData): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField): SerializedData;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val: SerializedData): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(val: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput): SerializedData;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(val: SerializedData): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput;
export declare function serializeUpdateStoragePolicyAssignmentByIdRequestBody(val: UpdateStoragePolicyAssignmentByIdRequestBody): SerializedData;
export declare function deserializeUpdateStoragePolicyAssignmentByIdRequestBody(val: SerializedData): UpdateStoragePolicyAssignmentByIdRequestBody;
//# sourceMappingURL=storagePolicyAssignments.generated.d.ts.map