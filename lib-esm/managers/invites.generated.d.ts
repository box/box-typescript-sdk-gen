import { Invite } from '../schemas/invite.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateInviteOptionals {
    readonly queryParams: CreateInviteQueryParams;
    readonly headers: CreateInviteHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateInviteOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateInviteOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateInviteOptionalsInput {
    readonly queryParams?: CreateInviteQueryParams;
    readonly headers?: CreateInviteHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetInviteByIdOptionals {
    readonly queryParams: GetInviteByIdQueryParams;
    readonly headers: GetInviteByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetInviteByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetInviteByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetInviteByIdOptionalsInput {
    readonly queryParams?: GetInviteByIdQueryParams;
    readonly headers?: GetInviteByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface CreateInviteRequestBodyEnterpriseField {
    /**
     * The ID of the enterprise. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CreateInviteRequestBodyActionableByField {
    /**
     * The login of the invited user. */
    readonly login?: string;
    readonly rawData?: SerializedData;
}
export interface CreateInviteRequestBody {
    /**
     * The enterprise to invite the user to. */
    readonly enterprise: CreateInviteRequestBodyEnterpriseField;
    /**
     * The user to invite. */
    readonly actionableBy: CreateInviteRequestBodyActionableByField;
    readonly rawData?: SerializedData;
}
export interface CreateInviteQueryParams {
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
export declare class CreateInviteHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateInviteHeaders, 'extraHeaders'> & Partial<Pick<CreateInviteHeaders, 'extraHeaders'>>);
}
export interface CreateInviteHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetInviteByIdQueryParams {
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
export declare class GetInviteByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetInviteByIdHeaders, 'extraHeaders'> & Partial<Pick<GetInviteByIdHeaders, 'extraHeaders'>>);
}
export interface GetInviteByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class InvitesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<InvitesManager, 'networkSession' | 'createInvite' | 'getInviteById'> & Partial<Pick<InvitesManager, 'networkSession'>>);
    /**
     * Invites an existing external user to join an enterprise.
     *
     * The existing user can not be part of another enterprise and
     * must already have a Box account. Once invited, the user will receive an
     * email and are prompted to accept the invitation within the
     * Box web application.
     *
     * This method requires the "Manage An Enterprise" scope enabled for
     * the application, which can be enabled within the developer console.
     * @param {CreateInviteRequestBody} requestBody Request body of createInvite method
     * @param {CreateInviteOptionalsInput} optionalsInput
     * @returns {Promise<Invite>}
     */
    createInvite(requestBody: CreateInviteRequestBody, optionalsInput?: CreateInviteOptionalsInput): Promise<Invite>;
    /**
       * Returns the status of a user invite.
       * @param {string} inviteId The ID of an invite.
      Example: "213723"
       * @param {GetInviteByIdOptionalsInput} optionalsInput
       * @returns {Promise<Invite>}
       */
    getInviteById(inviteId: string, optionalsInput?: GetInviteByIdOptionalsInput): Promise<Invite>;
}
export interface InvitesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateInviteRequestBodyEnterpriseField(val: CreateInviteRequestBodyEnterpriseField): SerializedData;
export declare function deserializeCreateInviteRequestBodyEnterpriseField(val: SerializedData): CreateInviteRequestBodyEnterpriseField;
export declare function serializeCreateInviteRequestBodyActionableByField(val: CreateInviteRequestBodyActionableByField): SerializedData;
export declare function deserializeCreateInviteRequestBodyActionableByField(val: SerializedData): CreateInviteRequestBodyActionableByField;
export declare function serializeCreateInviteRequestBody(val: CreateInviteRequestBody): SerializedData;
export declare function deserializeCreateInviteRequestBody(val: SerializedData): CreateInviteRequestBody;
