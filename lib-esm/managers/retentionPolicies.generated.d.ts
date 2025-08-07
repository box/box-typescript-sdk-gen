import { RetentionPolicies } from '../schemas/retentionPolicies.generated.js';
import { RetentionPolicy } from '../schemas/retentionPolicy.generated.js';
import { UserMini } from '../schemas/userMini.generated.js';
import { UserBase } from '../schemas/userBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateRetentionPolicyOptionals {
    readonly headers: CreateRetentionPolicyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateRetentionPolicyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateRetentionPolicyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateRetentionPolicyOptionalsInput {
    readonly headers?: CreateRetentionPolicyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetRetentionPolicyByIdOptionals {
    readonly queryParams: GetRetentionPolicyByIdQueryParams;
    readonly headers: GetRetentionPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetRetentionPolicyByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetRetentionPolicyByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetRetentionPolicyByIdOptionalsInput {
    readonly queryParams?: GetRetentionPolicyByIdQueryParams;
    readonly headers?: GetRetentionPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateRetentionPolicyByIdOptionals {
    readonly requestBody: UpdateRetentionPolicyByIdRequestBody;
    readonly headers: UpdateRetentionPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateRetentionPolicyByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateRetentionPolicyByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateRetentionPolicyByIdOptionalsInput {
    readonly requestBody?: UpdateRetentionPolicyByIdRequestBody;
    readonly headers?: UpdateRetentionPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteRetentionPolicyByIdOptionals {
    readonly headers: DeleteRetentionPolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteRetentionPolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteRetentionPolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteRetentionPolicyByIdOptionalsInput {
    readonly headers?: DeleteRetentionPolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetRetentionPoliciesQueryParamsPolicyTypeField = 'finite' | 'indefinite' | string;
export interface GetRetentionPoliciesQueryParams {
    /**
     * Filters results by a case sensitive prefix of the name of
     * retention policies. */
    readonly policyName?: string;
    /**
     * Filters results by the type of retention policy. */
    readonly policyType?: GetRetentionPoliciesQueryParamsPolicyTypeField;
    /**
     * Filters results by the ID of the user who created policy. */
    readonly createdByUserId?: string;
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
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination. */
    readonly marker?: string;
}
export declare class GetRetentionPoliciesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRetentionPoliciesHeaders, 'extraHeaders'> & Partial<Pick<GetRetentionPoliciesHeaders, 'extraHeaders'>>);
}
export interface GetRetentionPoliciesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateRetentionPolicyRequestBodyPolicyTypeField = 'finite' | 'indefinite' | string;
export type CreateRetentionPolicyRequestBodyDispositionActionField = 'permanently_delete' | 'remove_retention' | string;
export type CreateRetentionPolicyRequestBodyRetentionTypeField = 'modifiable' | 'non_modifiable' | string;
export interface CreateRetentionPolicyRequestBody {
    /**
     * The name for the retention policy. */
    readonly policyName: string;
    /**
     * The additional text description of the retention policy. */
    readonly description?: string;
    /**
     * The type of the retention policy. A retention
     * policy type can either be `finite`, where a
     * specific amount of time to retain the content is known
     * upfront, or `indefinite`, where the amount of time
     * to retain the content is still unknown. */
    readonly policyType: CreateRetentionPolicyRequestBodyPolicyTypeField;
    /**
     * The disposition action of the retention policy.
     * `permanently_delete` deletes the content
     * retained by the policy permanently.
     * `remove_retention` lifts retention policy
     * from the content, allowing it to be deleted
     * by users once the retention policy has expired. */
    readonly dispositionAction: CreateRetentionPolicyRequestBodyDispositionActionField;
    /**
     * The length of the retention policy. This value
     * specifies the duration in days that the retention
     * policy will be active for after being assigned to
     * content.  If the policy has a `policy_type` of
     * `indefinite`, the `retention_length` will also be
     * `indefinite`. */
    readonly retentionLength?: string;
    /**
     * Specifies the retention type:
     *
     * * `modifiable`: You can modify the retention policy. For example,
     * you can add or remove folders, shorten or lengthen
     * the policy duration, or delete the assignment.
     * Use this type if your retention policy
     * is not related to any regulatory purposes.
     *
     * * `non_modifiable`: You can modify the retention policy
     * only in a limited way: add a folder, lengthen the duration,
     * retire the policy, change the disposition action
     * or notification settings. You cannot perform other actions,
     * such as deleting the assignment or shortening the
     * policy duration. Use this type to ensure
     * compliance with regulatory retention policies. */
    readonly retentionType?: CreateRetentionPolicyRequestBodyRetentionTypeField;
    /**
     * Whether the owner of a file will be allowed to
     * extend the retention. */
    readonly canOwnerExtendRetention?: boolean;
    /**
     * Whether owner and co-owners of a file are notified
     * when the policy nears expiration. */
    readonly areOwnersNotified?: boolean;
    /**
     * A list of users notified when
     * the retention policy duration is about to end. */
    readonly customNotificationRecipients?: readonly UserMini[];
    readonly rawData?: SerializedData;
}
export declare class CreateRetentionPolicyHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateRetentionPolicyHeaders, 'extraHeaders'> & Partial<Pick<CreateRetentionPolicyHeaders, 'extraHeaders'>>);
}
export interface CreateRetentionPolicyHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetRetentionPolicyByIdQueryParams {
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
export declare class GetRetentionPolicyByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRetentionPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<GetRetentionPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface GetRetentionPolicyByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateRetentionPolicyByIdRequestBody {
    /**
     * The name for the retention policy. */
    readonly policyName?: string | null;
    /**
     * The additional text description of the retention policy. */
    readonly description?: string | null;
    /**
     * The disposition action of the retention policy.
     * This action can be `permanently_delete`, which
     * will cause the content retained by the policy
     * to be permanently deleted, or `remove_retention`,
     * which will lift the retention policy from the content,
     * allowing it to be deleted by users,
     * once the retention policy has expired.
     * You can use `null` if you don't want to change `disposition_action`. */
    readonly dispositionAction?: string;
    /**
     * Specifies the retention type:
     *
     * * `modifiable`: You can modify the retention policy. For example,
     * you can add or remove folders, shorten or lengthen
     * the policy duration, or delete the assignment.
     * Use this type if your retention policy
     * is not related to any regulatory purposes.
     * * `non-modifiable`: You can modify the retention policy
     * only in a limited way: add a folder, lengthen the duration,
     * retire the policy, change the disposition action
     * or notification settings. You cannot perform other actions,
     * such as deleting the assignment or shortening the
     * policy duration. Use this type to ensure
     * compliance with regulatory retention policies.
     *
     * When updating a retention policy, you can use
     * `non-modifiable` type only. You can convert a
     * `modifiable` policy to `non-modifiable`, but
     * not the other way around. */
    readonly retentionType?: string | null;
    /**
     * The length of the retention policy. This value
     * specifies the duration in days that the retention
     * policy will be active for after being assigned to
     * content.  If the policy has a `policy_type` of
     * `indefinite`, the `retention_length` will also be
     * `indefinite`. */
    readonly retentionLength?: string;
    /**
     * Used to retire a retention policy.
     *
     * If not retiring a policy, do not include this parameter
     * or set it to `null`. */
    readonly status?: string | null;
    /**
     * Determines if the owner of items under the policy
     * can extend the retention when the original retention
     * duration is about to end. */
    readonly canOwnerExtendRetention?: boolean | null;
    /**
     * Determines if owners and co-owners of items
     * under the policy are notified when
     * the retention duration is about to end. */
    readonly areOwnersNotified?: boolean | null;
    /**
     * A list of users notified when the retention duration is about to end. */
    readonly customNotificationRecipients?: readonly UserBase[] | null;
    readonly rawData?: SerializedData;
}
export declare class UpdateRetentionPolicyByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateRetentionPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateRetentionPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateRetentionPolicyByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteRetentionPolicyByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteRetentionPolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteRetentionPolicyByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteRetentionPolicyByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RetentionPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<RetentionPoliciesManager, 'networkSession' | 'getRetentionPolicies' | 'createRetentionPolicy' | 'getRetentionPolicyById' | 'updateRetentionPolicyById' | 'deleteRetentionPolicyById'> & Partial<Pick<RetentionPoliciesManager, 'networkSession'>>);
    /**
     * Retrieves all of the retention policies for an enterprise.
     * @param {GetRetentionPoliciesQueryParams} queryParams Query parameters of getRetentionPolicies method
     * @param {GetRetentionPoliciesHeadersInput} headersInput Headers of getRetentionPolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<RetentionPolicies>}
     */
    getRetentionPolicies(queryParams?: GetRetentionPoliciesQueryParams, headersInput?: GetRetentionPoliciesHeadersInput, cancellationToken?: CancellationToken): Promise<RetentionPolicies>;
    /**
     * Creates a retention policy.
     * @param {CreateRetentionPolicyRequestBody} requestBody Request body of createRetentionPolicy method
     * @param {CreateRetentionPolicyOptionalsInput} optionalsInput
     * @returns {Promise<RetentionPolicy>}
     */
    createRetentionPolicy(requestBody: CreateRetentionPolicyRequestBody, optionalsInput?: CreateRetentionPolicyOptionalsInput): Promise<RetentionPolicy>;
    /**
       * Retrieves a retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {GetRetentionPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicy>}
       */
    getRetentionPolicyById(retentionPolicyId: string, optionalsInput?: GetRetentionPolicyByIdOptionalsInput): Promise<RetentionPolicy>;
    /**
       * Updates a retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {UpdateRetentionPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicy>}
       */
    updateRetentionPolicyById(retentionPolicyId: string, optionalsInput?: UpdateRetentionPolicyByIdOptionalsInput): Promise<RetentionPolicy>;
    /**
       * Permanently deletes a retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {DeleteRetentionPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteRetentionPolicyById(retentionPolicyId: string, optionalsInput?: DeleteRetentionPolicyByIdOptionalsInput): Promise<undefined>;
}
export interface RetentionPoliciesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetRetentionPoliciesQueryParamsPolicyTypeField(val: GetRetentionPoliciesQueryParamsPolicyTypeField): SerializedData;
export declare function deserializeGetRetentionPoliciesQueryParamsPolicyTypeField(val: SerializedData): GetRetentionPoliciesQueryParamsPolicyTypeField;
export declare function serializeCreateRetentionPolicyRequestBodyPolicyTypeField(val: CreateRetentionPolicyRequestBodyPolicyTypeField): SerializedData;
export declare function deserializeCreateRetentionPolicyRequestBodyPolicyTypeField(val: SerializedData): CreateRetentionPolicyRequestBodyPolicyTypeField;
export declare function serializeCreateRetentionPolicyRequestBodyDispositionActionField(val: CreateRetentionPolicyRequestBodyDispositionActionField): SerializedData;
export declare function deserializeCreateRetentionPolicyRequestBodyDispositionActionField(val: SerializedData): CreateRetentionPolicyRequestBodyDispositionActionField;
export declare function serializeCreateRetentionPolicyRequestBodyRetentionTypeField(val: CreateRetentionPolicyRequestBodyRetentionTypeField): SerializedData;
export declare function deserializeCreateRetentionPolicyRequestBodyRetentionTypeField(val: SerializedData): CreateRetentionPolicyRequestBodyRetentionTypeField;
export declare function serializeCreateRetentionPolicyRequestBody(val: CreateRetentionPolicyRequestBody): SerializedData;
export declare function deserializeCreateRetentionPolicyRequestBody(val: SerializedData): CreateRetentionPolicyRequestBody;
export declare function serializeUpdateRetentionPolicyByIdRequestBody(val: UpdateRetentionPolicyByIdRequestBody): SerializedData;
export declare function deserializeUpdateRetentionPolicyByIdRequestBody(val: SerializedData): UpdateRetentionPolicyByIdRequestBody;
