import { LegalHoldPolicyAssignments } from '../schemas/legalHoldPolicyAssignments.generated.js';
import { LegalHoldPolicyAssignment } from '../schemas/legalHoldPolicyAssignment.generated.js';
import { FilesOnHold } from '../schemas/filesOnHold.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetLegalHoldPolicyAssignmentsOptionals {
    readonly headers: GetLegalHoldPolicyAssignmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetLegalHoldPolicyAssignmentsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetLegalHoldPolicyAssignmentsOptionalsInput {
    readonly headers?: GetLegalHoldPolicyAssignmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateLegalHoldPolicyAssignmentOptionals {
    readonly headers: CreateLegalHoldPolicyAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateLegalHoldPolicyAssignmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateLegalHoldPolicyAssignmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateLegalHoldPolicyAssignmentOptionalsInput {
    readonly headers?: CreateLegalHoldPolicyAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetLegalHoldPolicyAssignmentByIdOptionals {
    readonly headers: GetLegalHoldPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetLegalHoldPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetLegalHoldPolicyAssignmentByIdOptionalsInput {
    readonly headers?: GetLegalHoldPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteLegalHoldPolicyAssignmentByIdOptionals {
    readonly headers: DeleteLegalHoldPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteLegalHoldPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteLegalHoldPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteLegalHoldPolicyAssignmentByIdOptionalsInput {
    readonly headers?: DeleteLegalHoldPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetLegalHoldPolicyAssignmentFileOnHoldOptionals {
    readonly queryParams: GetLegalHoldPolicyAssignmentFileOnHoldQueryParams;
    readonly headers: GetLegalHoldPolicyAssignmentFileOnHoldHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentFileOnHoldOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetLegalHoldPolicyAssignmentFileOnHoldOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldOptionalsInput {
    readonly queryParams?: GetLegalHoldPolicyAssignmentFileOnHoldQueryParams;
    readonly headers?: GetLegalHoldPolicyAssignmentFileOnHoldHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField = 'file' | 'file_version' | 'folder' | 'user' | 'ownership' | 'interactions' | string;
export interface GetLegalHoldPolicyAssignmentsQueryParams {
    /**
     * The ID of the legal hold policy. */
    readonly policyId: string;
    /**
     * Filters the results by the type of item the
     * policy was applied to. */
    readonly assignToType?: GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField;
    /**
     * Filters the results by the ID of item the
     * policy was applied to. */
    readonly assignToId?: string;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class GetLegalHoldPolicyAssignmentsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentsHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPolicyAssignmentsHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPolicyAssignmentsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField = 'file' | 'file_version' | 'folder' | 'user' | 'ownership' | 'interaction';
export interface CreateLegalHoldPolicyAssignmentRequestBodyAssignToField {
    /**
     * The type of item to assign the policy to. */
    readonly type: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField;
    /**
     * The ID of item to assign the policy to. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CreateLegalHoldPolicyAssignmentRequestBody {
    /**
     * The ID of the policy to assign. */
    readonly policyId: string;
    /**
     * The item to assign the policy to. */
    readonly assignTo: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
    readonly rawData?: SerializedData;
}
export declare class CreateLegalHoldPolicyAssignmentHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateLegalHoldPolicyAssignmentHeaders, 'extraHeaders'> & Partial<Pick<CreateLegalHoldPolicyAssignmentHeaders, 'extraHeaders'>>);
}
export interface CreateLegalHoldPolicyAssignmentHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetLegalHoldPolicyAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPolicyAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteLegalHoldPolicyAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteLegalHoldPolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteLegalHoldPolicyAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class GetLegalHoldPolicyAssignmentFileOnHoldHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPolicyAssignmentFileOnHoldHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPolicyAssignmentFileOnHoldHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class LegalHoldPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<LegalHoldPolicyAssignmentsManager, 'networkSession' | 'getLegalHoldPolicyAssignments' | 'createLegalHoldPolicyAssignment' | 'getLegalHoldPolicyAssignmentById' | 'deleteLegalHoldPolicyAssignmentById' | 'getLegalHoldPolicyAssignmentFileOnHold'> & Partial<Pick<LegalHoldPolicyAssignmentsManager, 'networkSession'>>);
    /**
     * Retrieves a list of items a legal hold policy has been assigned to.
     * @param {GetLegalHoldPolicyAssignmentsQueryParams} queryParams Query parameters of getLegalHoldPolicyAssignments method
     * @param {GetLegalHoldPolicyAssignmentsOptionalsInput} optionalsInput
     * @returns {Promise<LegalHoldPolicyAssignments>}
     */
    getLegalHoldPolicyAssignments(queryParams: GetLegalHoldPolicyAssignmentsQueryParams, optionalsInput?: GetLegalHoldPolicyAssignmentsOptionalsInput): Promise<LegalHoldPolicyAssignments>;
    /**
     * Assign a legal hold to a file, file version, folder, or user.
     * @param {CreateLegalHoldPolicyAssignmentRequestBody} requestBody Request body of createLegalHoldPolicyAssignment method
     * @param {CreateLegalHoldPolicyAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<LegalHoldPolicyAssignment>}
     */
    createLegalHoldPolicyAssignment(requestBody: CreateLegalHoldPolicyAssignmentRequestBody, optionalsInput?: CreateLegalHoldPolicyAssignmentOptionalsInput): Promise<LegalHoldPolicyAssignment>;
    /**
       * Retrieve a legal hold policy assignment.
       * @param {string} legalHoldPolicyAssignmentId The ID of the legal hold policy assignment.
      Example: "753465"
       * @param {GetLegalHoldPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<LegalHoldPolicyAssignment>}
       */
    getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string, optionalsInput?: GetLegalHoldPolicyAssignmentByIdOptionalsInput): Promise<LegalHoldPolicyAssignment>;
    /**
       * Remove a legal hold from an item.
       *
       * This is an asynchronous process. The policy will not be
       * fully removed yet when the response returns.
       * @param {string} legalHoldPolicyAssignmentId The ID of the legal hold policy assignment.
      Example: "753465"
       * @param {DeleteLegalHoldPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string, optionalsInput?: DeleteLegalHoldPolicyAssignmentByIdOptionalsInput): Promise<undefined>;
    /**
       * Get a list of files with current file versions for a legal hold
       * assignment.
       *
       * In some cases you may want to get previous file versions instead. In these
       * cases, use the `GET  /legal_hold_policy_assignments/:id/file_versions_on_hold`
       * API instead to return any previous versions of a file for this legal hold
       * policy assignment.
       *
       * Due to ongoing re-architecture efforts this API might not return all file
       * versions held for this policy ID. Instead, this API will only return the
       * latest file version held in the newly developed architecture. The `GET
       * /file_version_legal_holds` API can be used to fetch current and past versions
       * of files held within the legacy architecture.
       *
       * This endpoint does not support returning any content that is on hold due to
       * a Custodian collaborating on a Hub.
       *
       * The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
       * find a list of policy assignments for a given policy ID.
       * @param {string} legalHoldPolicyAssignmentId The ID of the legal hold policy assignment.
      Example: "753465"
       * @param {GetLegalHoldPolicyAssignmentFileOnHoldOptionalsInput} optionalsInput
       * @returns {Promise<FilesOnHold>}
       */
    getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId: string, optionalsInput?: GetLegalHoldPolicyAssignmentFileOnHoldOptionalsInput): Promise<FilesOnHold>;
}
export interface LegalHoldPolicyAssignmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(val: GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField): SerializedData;
export declare function deserializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(val: SerializedData): GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField;
export declare function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val: CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField): SerializedData;
export declare function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val: SerializedData): CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField;
export declare function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val: CreateLegalHoldPolicyAssignmentRequestBodyAssignToField): SerializedData;
export declare function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val: SerializedData): CreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
export declare function serializeCreateLegalHoldPolicyAssignmentRequestBody(val: CreateLegalHoldPolicyAssignmentRequestBody): SerializedData;
export declare function deserializeCreateLegalHoldPolicyAssignmentRequestBody(val: SerializedData): CreateLegalHoldPolicyAssignmentRequestBody;
//# sourceMappingURL=legalHoldPolicyAssignments.generated.d.ts.map