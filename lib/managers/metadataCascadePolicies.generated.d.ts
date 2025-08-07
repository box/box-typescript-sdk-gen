import { MetadataCascadePolicies } from '../schemas/metadataCascadePolicies.generated.js';
import { MetadataCascadePolicy } from '../schemas/metadataCascadePolicy.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetMetadataCascadePoliciesOptionals {
    readonly headers: GetMetadataCascadePoliciesHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataCascadePoliciesOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataCascadePoliciesOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataCascadePoliciesOptionalsInput {
    readonly headers?: GetMetadataCascadePoliciesHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateMetadataCascadePolicyOptionals {
    readonly headers: CreateMetadataCascadePolicyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateMetadataCascadePolicyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateMetadataCascadePolicyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateMetadataCascadePolicyOptionalsInput {
    readonly headers?: CreateMetadataCascadePolicyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetMetadataCascadePolicyByIdOptionals {
    readonly headers: GetMetadataCascadePolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetMetadataCascadePolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetMetadataCascadePolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetMetadataCascadePolicyByIdOptionalsInput {
    readonly headers?: GetMetadataCascadePolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteMetadataCascadePolicyByIdOptionals {
    readonly headers: DeleteMetadataCascadePolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteMetadataCascadePolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteMetadataCascadePolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteMetadataCascadePolicyByIdOptionalsInput {
    readonly headers?: DeleteMetadataCascadePolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class ApplyMetadataCascadePolicyOptionals {
    readonly headers: ApplyMetadataCascadePolicyHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<ApplyMetadataCascadePolicyOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<ApplyMetadataCascadePolicyOptionals, 'headers' | 'cancellationToken'>>);
}
export interface ApplyMetadataCascadePolicyOptionalsInput {
    readonly headers?: ApplyMetadataCascadePolicyHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetMetadataCascadePoliciesQueryParams {
    /**
     * Specifies which folder to return policies for. This can not be used on the
     * root folder with ID `0`. */
    readonly folderId: string;
    /**
     * The ID of the enterprise ID for which to find metadata
     * cascade policies. If not specified, it defaults to the
     * current enterprise. */
    readonly ownerEnterpriseId?: string;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The offset of the item at which to begin the response.
     *
     * Queries with offset parameter value
     * exceeding 10000 will be rejected
     * with a 400 response. */
    readonly offset?: number;
}
export declare class GetMetadataCascadePoliciesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataCascadePoliciesHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataCascadePoliciesHeaders, 'extraHeaders'>>);
}
export interface GetMetadataCascadePoliciesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateMetadataCascadePolicyRequestBodyScopeField = 'global' | 'enterprise' | string;
export interface CreateMetadataCascadePolicyRequestBody {
    /**
     * The ID of the folder to apply the policy to. This folder will
     * need to already have an instance of the targeted metadata
     * template applied to it. */
    readonly folderId: string;
    /**
     * The scope of the targeted metadata template. This template will
     * need to already have an instance applied to the targeted folder. */
    readonly scope: CreateMetadataCascadePolicyRequestBodyScopeField;
    /**
     * The key of the targeted metadata template. This template will
     * need to already have an instance applied to the targeted folder.
     *
     * In many cases the template key is automatically derived
     * of its display name, for example `Contract Template` would
     * become `contractTemplate`. In some cases the creator of the
     * template will have provided its own template key.
     *
     * Please [list the templates for an enterprise][list], or
     * get all instances on a [file][file] or [folder][folder]
     * to inspect a template's key.
     *
     * [list]: e://get-metadata-templates-enterprise
     * [file]: e://get-files-id-metadata
     * [folder]: e://get-folders-id-metadata */
    readonly templateKey: string;
    readonly rawData?: SerializedData;
}
export declare class CreateMetadataCascadePolicyHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateMetadataCascadePolicyHeaders, 'extraHeaders'> & Partial<Pick<CreateMetadataCascadePolicyHeaders, 'extraHeaders'>>);
}
export interface CreateMetadataCascadePolicyHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetMetadataCascadePolicyByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetMetadataCascadePolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<GetMetadataCascadePolicyByIdHeaders, 'extraHeaders'>>);
}
export interface GetMetadataCascadePolicyByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteMetadataCascadePolicyByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteMetadataCascadePolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteMetadataCascadePolicyByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteMetadataCascadePolicyByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type ApplyMetadataCascadePolicyRequestBodyConflictResolutionField = 'none' | 'overwrite' | string;
export interface ApplyMetadataCascadePolicyRequestBody {
    /**
     * Describes the desired behavior when dealing with the conflict
     * where a metadata template already has an instance applied
     * to a child.
     *
     * * `none` will preserve the existing value on the file
     * * `overwrite` will force-apply the templates values over
     *   any existing values. */
    readonly conflictResolution: ApplyMetadataCascadePolicyRequestBodyConflictResolutionField;
    readonly rawData?: SerializedData;
}
export declare class ApplyMetadataCascadePolicyHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<ApplyMetadataCascadePolicyHeaders, 'extraHeaders'> & Partial<Pick<ApplyMetadataCascadePolicyHeaders, 'extraHeaders'>>);
}
export interface ApplyMetadataCascadePolicyHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class MetadataCascadePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<MetadataCascadePoliciesManager, 'networkSession' | 'getMetadataCascadePolicies' | 'createMetadataCascadePolicy' | 'getMetadataCascadePolicyById' | 'deleteMetadataCascadePolicyById' | 'applyMetadataCascadePolicy'> & Partial<Pick<MetadataCascadePoliciesManager, 'networkSession'>>);
    /**
     * Retrieves a list of all the metadata cascade policies
     * that are applied to a given folder. This can not be used on the root
     * folder with ID `0`.
     * @param {GetMetadataCascadePoliciesQueryParams} queryParams Query parameters of getMetadataCascadePolicies method
     * @param {GetMetadataCascadePoliciesOptionalsInput} optionalsInput
     * @returns {Promise<MetadataCascadePolicies>}
     */
    getMetadataCascadePolicies(queryParams: GetMetadataCascadePoliciesQueryParams, optionalsInput?: GetMetadataCascadePoliciesOptionalsInput): Promise<MetadataCascadePolicies>;
    /**
     * Creates a new metadata cascade policy that applies a given
     * metadata template to a given folder and automatically
     * cascades it down to any files within that folder.
     *
     * In order for the policy to be applied a metadata instance must first
     * be applied to the folder the policy is to be applied to.
     * @param {CreateMetadataCascadePolicyRequestBody} requestBody Request body of createMetadataCascadePolicy method
     * @param {CreateMetadataCascadePolicyOptionalsInput} optionalsInput
     * @returns {Promise<MetadataCascadePolicy>}
     */
    createMetadataCascadePolicy(requestBody: CreateMetadataCascadePolicyRequestBody, optionalsInput?: CreateMetadataCascadePolicyOptionalsInput): Promise<MetadataCascadePolicy>;
    /**
       * Retrieve a specific metadata cascade policy assigned to a folder.
       * @param {string} metadataCascadePolicyId The ID of the metadata cascade policy.
      Example: "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
       * @param {GetMetadataCascadePolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataCascadePolicy>}
       */
    getMetadataCascadePolicyById(metadataCascadePolicyId: string, optionalsInput?: GetMetadataCascadePolicyByIdOptionalsInput): Promise<MetadataCascadePolicy>;
    /**
       * Deletes a metadata cascade policy.
       * @param {string} metadataCascadePolicyId The ID of the metadata cascade policy.
      Example: "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
       * @param {DeleteMetadataCascadePolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteMetadataCascadePolicyById(metadataCascadePolicyId: string, optionalsInput?: DeleteMetadataCascadePolicyByIdOptionalsInput): Promise<undefined>;
    /**
       * Force the metadata on a folder with a metadata cascade policy to be applied to
       * all of its children. This can be used after creating a new cascade policy to
       * enforce the metadata to be cascaded down to all existing files within that
       * folder.
       * @param {string} metadataCascadePolicyId The ID of the cascade policy to force-apply.
      Example: "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
       * @param {ApplyMetadataCascadePolicyRequestBody} requestBody Request body of applyMetadataCascadePolicy method
       * @param {ApplyMetadataCascadePolicyOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    applyMetadataCascadePolicy(metadataCascadePolicyId: string, requestBody: ApplyMetadataCascadePolicyRequestBody, optionalsInput?: ApplyMetadataCascadePolicyOptionalsInput): Promise<undefined>;
}
export interface MetadataCascadePoliciesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateMetadataCascadePolicyRequestBodyScopeField(val: CreateMetadataCascadePolicyRequestBodyScopeField): SerializedData;
export declare function deserializeCreateMetadataCascadePolicyRequestBodyScopeField(val: SerializedData): CreateMetadataCascadePolicyRequestBodyScopeField;
export declare function serializeCreateMetadataCascadePolicyRequestBody(val: CreateMetadataCascadePolicyRequestBody): SerializedData;
export declare function deserializeCreateMetadataCascadePolicyRequestBody(val: SerializedData): CreateMetadataCascadePolicyRequestBody;
export declare function serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val: ApplyMetadataCascadePolicyRequestBodyConflictResolutionField): SerializedData;
export declare function deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val: SerializedData): ApplyMetadataCascadePolicyRequestBodyConflictResolutionField;
export declare function serializeApplyMetadataCascadePolicyRequestBody(val: ApplyMetadataCascadePolicyRequestBody): SerializedData;
export declare function deserializeApplyMetadataCascadePolicyRequestBody(val: SerializedData): ApplyMetadataCascadePolicyRequestBody;
//# sourceMappingURL=metadataCascadePolicies.generated.d.ts.map