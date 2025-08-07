import { CollaborationAllowlistExemptTargets } from '../schemas/collaborationAllowlistExemptTargets.generated.js';
import { CollaborationAllowlistExemptTarget } from '../schemas/collaborationAllowlistExemptTarget.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateCollaborationWhitelistExemptTargetOptionals {
    readonly headers: CreateCollaborationWhitelistExemptTargetHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateCollaborationWhitelistExemptTargetOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateCollaborationWhitelistExemptTargetOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateCollaborationWhitelistExemptTargetOptionalsInput {
    readonly headers?: CreateCollaborationWhitelistExemptTargetHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetCollaborationWhitelistExemptTargetByIdOptionals {
    readonly headers: GetCollaborationWhitelistExemptTargetByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollaborationWhitelistExemptTargetByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetCollaborationWhitelistExemptTargetByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetCollaborationWhitelistExemptTargetByIdOptionalsInput {
    readonly headers?: GetCollaborationWhitelistExemptTargetByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteCollaborationWhitelistExemptTargetByIdOptionals {
    readonly headers: DeleteCollaborationWhitelistExemptTargetByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteCollaborationWhitelistExemptTargetByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteCollaborationWhitelistExemptTargetByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteCollaborationWhitelistExemptTargetByIdOptionalsInput {
    readonly headers?: DeleteCollaborationWhitelistExemptTargetByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollaborationWhitelistExemptTargetsQueryParams {
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
export declare class GetCollaborationWhitelistExemptTargetsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationWhitelistExemptTargetsHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationWhitelistExemptTargetsHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationWhitelistExemptTargetsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyUserField {
    /**
     * The ID of the user to exempt. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CreateCollaborationWhitelistExemptTargetRequestBody {
    /**
     * The user to exempt. */
    readonly user: CreateCollaborationWhitelistExemptTargetRequestBodyUserField;
    readonly rawData?: SerializedData;
}
export declare class CreateCollaborationWhitelistExemptTargetHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateCollaborationWhitelistExemptTargetHeaders, 'extraHeaders'> & Partial<Pick<CreateCollaborationWhitelistExemptTargetHeaders, 'extraHeaders'>>);
}
export interface CreateCollaborationWhitelistExemptTargetHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetCollaborationWhitelistExemptTargetByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationWhitelistExemptTargetByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteCollaborationWhitelistExemptTargetByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteCollaborationWhitelistExemptTargetByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CollaborationAllowlistExemptTargetsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistExemptTargetsManager, 'networkSession' | 'getCollaborationWhitelistExemptTargets' | 'createCollaborationWhitelistExemptTarget' | 'getCollaborationWhitelistExemptTargetById' | 'deleteCollaborationWhitelistExemptTargetById'> & Partial<Pick<CollaborationAllowlistExemptTargetsManager, 'networkSession'>>);
    /**
     * Returns a list of users who have been exempt from the collaboration
     * domain restrictions.
     * @param {GetCollaborationWhitelistExemptTargetsQueryParams} queryParams Query parameters of getCollaborationWhitelistExemptTargets method
     * @param {GetCollaborationWhitelistExemptTargetsHeadersInput} headersInput Headers of getCollaborationWhitelistExemptTargets method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<CollaborationAllowlistExemptTargets>}
     */
    getCollaborationWhitelistExemptTargets(queryParams?: GetCollaborationWhitelistExemptTargetsQueryParams, headersInput?: GetCollaborationWhitelistExemptTargetsHeadersInput, cancellationToken?: CancellationToken): Promise<CollaborationAllowlistExemptTargets>;
    /**
     * Exempts a user from the restrictions set out by the allowed list of domains
     * for collaborations.
     * @param {CreateCollaborationWhitelistExemptTargetRequestBody} requestBody Request body of createCollaborationWhitelistExemptTarget method
     * @param {CreateCollaborationWhitelistExemptTargetOptionalsInput} optionalsInput
     * @returns {Promise<CollaborationAllowlistExemptTarget>}
     */
    createCollaborationWhitelistExemptTarget(requestBody: CreateCollaborationWhitelistExemptTargetRequestBody, optionalsInput?: CreateCollaborationWhitelistExemptTargetOptionalsInput): Promise<CollaborationAllowlistExemptTarget>;
    /**
       * Returns a users who has been exempt from the collaboration
       * domain restrictions.
       * @param {string} collaborationWhitelistExemptTargetId The ID of the exemption to the list.
      Example: "984923"
       * @param {GetCollaborationWhitelistExemptTargetByIdOptionalsInput} optionalsInput
       * @returns {Promise<CollaborationAllowlistExemptTarget>}
       */
    getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string, optionalsInput?: GetCollaborationWhitelistExemptTargetByIdOptionalsInput): Promise<CollaborationAllowlistExemptTarget>;
    /**
       * Removes a user's exemption from the restrictions set out by the allowed list
       * of domains for collaborations.
       * @param {string} collaborationWhitelistExemptTargetId The ID of the exemption to the list.
      Example: "984923"
       * @param {DeleteCollaborationWhitelistExemptTargetByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string, optionalsInput?: DeleteCollaborationWhitelistExemptTargetByIdOptionalsInput): Promise<undefined>;
}
export interface CollaborationAllowlistExemptTargetsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val: CreateCollaborationWhitelistExemptTargetRequestBodyUserField): SerializedData;
export declare function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val: SerializedData): CreateCollaborationWhitelistExemptTargetRequestBodyUserField;
export declare function serializeCreateCollaborationWhitelistExemptTargetRequestBody(val: CreateCollaborationWhitelistExemptTargetRequestBody): SerializedData;
export declare function deserializeCreateCollaborationWhitelistExemptTargetRequestBody(val: SerializedData): CreateCollaborationWhitelistExemptTargetRequestBody;
//# sourceMappingURL=collaborationAllowlistExemptTargets.generated.d.ts.map