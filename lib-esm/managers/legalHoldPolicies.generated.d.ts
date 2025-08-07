import { LegalHoldPolicies } from '../schemas/legalHoldPolicies.generated.js';
import { LegalHoldPolicy } from '../schemas/legalHoldPolicy.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class CreateLegalHoldPolicyOptionals {
    readonly headers: CreateLegalHoldPolicyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateLegalHoldPolicyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateLegalHoldPolicyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateLegalHoldPolicyOptionalsInput {
    readonly headers?: CreateLegalHoldPolicyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetLegalHoldPolicyByIdOptionals {
    readonly headers: GetLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetLegalHoldPolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetLegalHoldPolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetLegalHoldPolicyByIdOptionalsInput {
    readonly headers?: GetLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateLegalHoldPolicyByIdOptionals {
    readonly requestBody: UpdateLegalHoldPolicyByIdRequestBody;
    readonly headers: UpdateLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateLegalHoldPolicyByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateLegalHoldPolicyByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateLegalHoldPolicyByIdOptionalsInput {
    readonly requestBody?: UpdateLegalHoldPolicyByIdRequestBody;
    readonly headers?: UpdateLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteLegalHoldPolicyByIdOptionals {
    readonly headers: DeleteLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteLegalHoldPolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteLegalHoldPolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteLegalHoldPolicyByIdOptionalsInput {
    readonly headers?: DeleteLegalHoldPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetLegalHoldPoliciesQueryParams {
    /**
     * Limits results to policies for which the names start with
     * this search term. This is a case-insensitive prefix. */
    readonly policyName?: string;
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
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetLegalHoldPoliciesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPoliciesHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPoliciesHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPoliciesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateLegalHoldPolicyRequestBody {
    /**
     * The name of the policy. */
    readonly policyName: string;
    /**
     * A description for the policy. */
    readonly description?: string;
    /**
     * The filter start date.
     *
     * When this policy is applied using a `custodian` legal
     * hold assignments, it will only apply to file versions
     * created or uploaded inside of the
     * date range. Other assignment types, such as folders and
     * files, will ignore the date filter.
     *
     * Required if `is_ongoing` is set to `false`. */
    readonly filterStartedAt?: DateTime;
    /**
     * The filter end date.
     *
     * When this policy is applied using a `custodian` legal
     * hold assignments, it will only apply to file versions
     * created or uploaded inside of the
     * date range. Other assignment types, such as folders and
     * files, will ignore the date filter.
     *
     * Required if `is_ongoing` is set to `false`. */
    readonly filterEndedAt?: DateTime;
    /**
     * Whether new assignments under this policy should
     * continue applying to files even after initialization.
     *
     * When this policy is applied using a legal hold assignment,
     * it will continue applying the policy to any new file versions
     * even after it has been applied.
     *
     * For example, if a legal hold assignment is placed on a user
     * today, and that user uploads a file tomorrow, that file will
     * get held. This will continue until the policy is retired.
     *
     * Required if no filter dates are set. */
    readonly isOngoing?: boolean;
    readonly rawData?: SerializedData;
}
export declare class CreateLegalHoldPolicyHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateLegalHoldPolicyHeaders, 'extraHeaders'> & Partial<Pick<CreateLegalHoldPolicyHeaders, 'extraHeaders'>>);
}
export interface CreateLegalHoldPolicyHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetLegalHoldPolicyByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetLegalHoldPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<GetLegalHoldPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface GetLegalHoldPolicyByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateLegalHoldPolicyByIdRequestBody {
    /**
     * The name of the policy. */
    readonly policyName?: string;
    /**
     * A description for the policy. */
    readonly description?: string;
    /**
     * Notes around why the policy was released. */
    readonly releaseNotes?: string;
    readonly rawData?: SerializedData;
}
export declare class UpdateLegalHoldPolicyByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateLegalHoldPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateLegalHoldPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateLegalHoldPolicyByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteLegalHoldPolicyByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteLegalHoldPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteLegalHoldPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteLegalHoldPolicyByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class LegalHoldPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<LegalHoldPoliciesManager, 'networkSession' | 'getLegalHoldPolicies' | 'createLegalHoldPolicy' | 'getLegalHoldPolicyById' | 'updateLegalHoldPolicyById' | 'deleteLegalHoldPolicyById'> & Partial<Pick<LegalHoldPoliciesManager, 'networkSession'>>);
    /**
     * Retrieves a list of legal hold policies that belong to
     * an enterprise.
     * @param {GetLegalHoldPoliciesQueryParams} queryParams Query parameters of getLegalHoldPolicies method
     * @param {GetLegalHoldPoliciesHeadersInput} headersInput Headers of getLegalHoldPolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<LegalHoldPolicies>}
     */
    getLegalHoldPolicies(queryParams?: GetLegalHoldPoliciesQueryParams, headersInput?: GetLegalHoldPoliciesHeadersInput, cancellationToken?: CancellationToken): Promise<LegalHoldPolicies>;
    /**
     * Create a new legal hold policy.
     * @param {CreateLegalHoldPolicyRequestBody} requestBody Request body of createLegalHoldPolicy method
     * @param {CreateLegalHoldPolicyOptionalsInput} optionalsInput
     * @returns {Promise<LegalHoldPolicy>}
     */
    createLegalHoldPolicy(requestBody: CreateLegalHoldPolicyRequestBody, optionalsInput?: CreateLegalHoldPolicyOptionalsInput): Promise<LegalHoldPolicy>;
    /**
       * Retrieve a legal hold policy.
       * @param {string} legalHoldPolicyId The ID of the legal hold policy.
      Example: "324432"
       * @param {GetLegalHoldPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<LegalHoldPolicy>}
       */
    getLegalHoldPolicyById(legalHoldPolicyId: string, optionalsInput?: GetLegalHoldPolicyByIdOptionalsInput): Promise<LegalHoldPolicy>;
    /**
       * Update legal hold policy.
       * @param {string} legalHoldPolicyId The ID of the legal hold policy.
      Example: "324432"
       * @param {UpdateLegalHoldPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<LegalHoldPolicy>}
       */
    updateLegalHoldPolicyById(legalHoldPolicyId: string, optionalsInput?: UpdateLegalHoldPolicyByIdOptionalsInput): Promise<LegalHoldPolicy>;
    /**
       * Delete an existing legal hold policy.
       *
       * This is an asynchronous process. The policy will not be
       * fully deleted yet when the response returns.
       * @param {string} legalHoldPolicyId The ID of the legal hold policy.
      Example: "324432"
       * @param {DeleteLegalHoldPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteLegalHoldPolicyById(legalHoldPolicyId: string, optionalsInput?: DeleteLegalHoldPolicyByIdOptionalsInput): Promise<undefined>;
}
export interface LegalHoldPoliciesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateLegalHoldPolicyRequestBody(val: CreateLegalHoldPolicyRequestBody): SerializedData;
export declare function deserializeCreateLegalHoldPolicyRequestBody(val: SerializedData): CreateLegalHoldPolicyRequestBody;
export declare function serializeUpdateLegalHoldPolicyByIdRequestBody(val: UpdateLegalHoldPolicyByIdRequestBody): SerializedData;
export declare function deserializeUpdateLegalHoldPolicyByIdRequestBody(val: SerializedData): UpdateLegalHoldPolicyByIdRequestBody;
