import { RetentionPolicyAssignments } from '../schemas/retentionPolicyAssignments.generated.js';
import { RetentionPolicyAssignment } from '../schemas/retentionPolicyAssignment.generated.js';
import { FilesUnderRetention } from '../schemas/filesUnderRetention.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetRetentionPolicyAssignmentsOptionals {
    readonly queryParams: GetRetentionPolicyAssignmentsQueryParams;
    readonly headers: GetRetentionPolicyAssignmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetRetentionPolicyAssignmentsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetRetentionPolicyAssignmentsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetRetentionPolicyAssignmentsOptionalsInput {
    readonly queryParams?: GetRetentionPolicyAssignmentsQueryParams;
    readonly headers?: GetRetentionPolicyAssignmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateRetentionPolicyAssignmentOptionals {
    readonly headers: CreateRetentionPolicyAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateRetentionPolicyAssignmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateRetentionPolicyAssignmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateRetentionPolicyAssignmentOptionalsInput {
    readonly headers?: CreateRetentionPolicyAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetRetentionPolicyAssignmentByIdOptionals {
    readonly queryParams: GetRetentionPolicyAssignmentByIdQueryParams;
    readonly headers: GetRetentionPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetRetentionPolicyAssignmentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetRetentionPolicyAssignmentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetRetentionPolicyAssignmentByIdOptionalsInput {
    readonly queryParams?: GetRetentionPolicyAssignmentByIdQueryParams;
    readonly headers?: GetRetentionPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteRetentionPolicyAssignmentByIdOptionals {
    readonly headers: DeleteRetentionPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteRetentionPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteRetentionPolicyAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteRetentionPolicyAssignmentByIdOptionalsInput {
    readonly headers?: DeleteRetentionPolicyAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFilesUnderRetentionPolicyAssignmentOptionals {
    readonly queryParams: GetFilesUnderRetentionPolicyAssignmentQueryParams;
    readonly headers: GetFilesUnderRetentionPolicyAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFilesUnderRetentionPolicyAssignmentOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFilesUnderRetentionPolicyAssignmentOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFilesUnderRetentionPolicyAssignmentOptionalsInput {
    readonly queryParams?: GetFilesUnderRetentionPolicyAssignmentQueryParams;
    readonly headers?: GetFilesUnderRetentionPolicyAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetRetentionPolicyAssignmentsQueryParamsTypeField = 'folder' | 'enterprise' | 'metadata_template';
export interface GetRetentionPolicyAssignmentsQueryParams {
    /**
     * The type of the retention policy assignment to retrieve. */
    readonly type?: GetRetentionPolicyAssignmentsQueryParamsTypeField;
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
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetRetentionPolicyAssignmentsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRetentionPolicyAssignmentsHeaders, 'extraHeaders'> & Partial<Pick<GetRetentionPolicyAssignmentsHeaders, 'extraHeaders'>>);
}
export interface GetRetentionPolicyAssignmentsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField = 'enterprise' | 'folder' | 'metadata_template';
export interface CreateRetentionPolicyAssignmentRequestBodyAssignToField {
    /**
     * The type of item to assign the policy to. */
    readonly type: CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField;
    /**
     * The ID of item to assign the policy to.
     * Set to `null` or omit when `type` is set to
     * `enterprise`. */
    readonly id?: string | null;
    readonly rawData?: SerializedData;
}
export interface CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField {
    /**
     * The metadata attribute key id. */
    readonly field?: string;
    /**
     * The metadata attribute field id. For value, only
     * enum and multiselect types are supported. */
    readonly value?: string;
    readonly rawData?: SerializedData;
}
export interface CreateRetentionPolicyAssignmentRequestBody {
    /**
     * The ID of the retention policy to assign. */
    readonly policyId: string;
    /**
     * The item to assign the policy to. */
    readonly assignTo: CreateRetentionPolicyAssignmentRequestBodyAssignToField;
    /**
     * If the `assign_to` type is `metadata_template`,
     * then optionally add the `filter_fields` parameter which will
     * require an array of objects with a field entry and a value entry.
     * Currently only one object of `field` and `value` is supported. */
    readonly filterFields?: readonly CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField[];
    /**
     * The date the retention policy assignment begins.
     *
     * If the `assigned_to` type is `metadata_template`,
     * this field can be a date field's metadata attribute key id. */
    readonly startDateField?: string;
    readonly rawData?: SerializedData;
}
export declare class CreateRetentionPolicyAssignmentHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateRetentionPolicyAssignmentHeaders, 'extraHeaders'> & Partial<Pick<CreateRetentionPolicyAssignmentHeaders, 'extraHeaders'>>);
}
export interface CreateRetentionPolicyAssignmentHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetRetentionPolicyAssignmentByIdQueryParams {
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
export declare class GetRetentionPolicyAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetRetentionPolicyAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteRetentionPolicyAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteRetentionPolicyAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteRetentionPolicyAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFilesUnderRetentionPolicyAssignmentQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetFilesUnderRetentionPolicyAssignmentHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFilesUnderRetentionPolicyAssignmentHeaders, 'extraHeaders'> & Partial<Pick<GetFilesUnderRetentionPolicyAssignmentHeaders, 'extraHeaders'>>);
}
export interface GetFilesUnderRetentionPolicyAssignmentHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RetentionPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<RetentionPolicyAssignmentsManager, 'networkSession' | 'getRetentionPolicyAssignments' | 'createRetentionPolicyAssignment' | 'getRetentionPolicyAssignmentById' | 'deleteRetentionPolicyAssignmentById' | 'getFilesUnderRetentionPolicyAssignment'> & Partial<Pick<RetentionPolicyAssignmentsManager, 'networkSession'>>);
    /**
       * Returns a list of all retention policy assignments associated with a specified
       * retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {GetRetentionPolicyAssignmentsOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicyAssignments>}
       */
    getRetentionPolicyAssignments(retentionPolicyId: string, optionalsInput?: GetRetentionPolicyAssignmentsOptionalsInput): Promise<RetentionPolicyAssignments>;
    /**
     * Assigns a retention policy to an item.
     * @param {CreateRetentionPolicyAssignmentRequestBody} requestBody Request body of createRetentionPolicyAssignment method
     * @param {CreateRetentionPolicyAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<RetentionPolicyAssignment>}
     */
    createRetentionPolicyAssignment(requestBody: CreateRetentionPolicyAssignmentRequestBody, optionalsInput?: CreateRetentionPolicyAssignmentOptionalsInput): Promise<RetentionPolicyAssignment>;
    /**
       * Retrieves a retention policy assignment.
       * @param {string} retentionPolicyAssignmentId The ID of the retention policy assignment.
      Example: "1233123"
       * @param {GetRetentionPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicyAssignment>}
       */
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, optionalsInput?: GetRetentionPolicyAssignmentByIdOptionalsInput): Promise<RetentionPolicyAssignment>;
    /**
       * Removes a retention policy assignment
       * applied to content.
       * @param {string} retentionPolicyAssignmentId The ID of the retention policy assignment.
      Example: "1233123"
       * @param {DeleteRetentionPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, optionalsInput?: DeleteRetentionPolicyAssignmentByIdOptionalsInput): Promise<undefined>;
    /**
       * Returns a list of files under retention for a retention policy assignment.
       * @param {string} retentionPolicyAssignmentId The ID of the retention policy assignment.
      Example: "1233123"
       * @param {GetFilesUnderRetentionPolicyAssignmentOptionalsInput} optionalsInput
       * @returns {Promise<FilesUnderRetention>}
       */
    getFilesUnderRetentionPolicyAssignment(retentionPolicyAssignmentId: string, optionalsInput?: GetFilesUnderRetentionPolicyAssignmentOptionalsInput): Promise<FilesUnderRetention>;
}
export interface RetentionPolicyAssignmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetRetentionPolicyAssignmentsQueryParamsTypeField(val: GetRetentionPolicyAssignmentsQueryParamsTypeField): SerializedData;
export declare function deserializeGetRetentionPolicyAssignmentsQueryParamsTypeField(val: SerializedData): GetRetentionPolicyAssignmentsQueryParamsTypeField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val: CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField): SerializedData;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val: SerializedData): CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val: CreateRetentionPolicyAssignmentRequestBodyAssignToField): SerializedData;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val: SerializedData): CreateRetentionPolicyAssignmentRequestBodyAssignToField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(val: CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField): SerializedData;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(val: SerializedData): CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField;
export declare function serializeCreateRetentionPolicyAssignmentRequestBody(val: CreateRetentionPolicyAssignmentRequestBody): SerializedData;
export declare function deserializeCreateRetentionPolicyAssignmentRequestBody(val: SerializedData): CreateRetentionPolicyAssignmentRequestBody;
//# sourceMappingURL=retentionPolicyAssignments.generated.d.ts.map