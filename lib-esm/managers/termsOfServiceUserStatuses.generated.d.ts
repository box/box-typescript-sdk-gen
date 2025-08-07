import { TermsOfServiceUserStatuses } from '../schemas/termsOfServiceUserStatuses.generated.js';
import { TermsOfServiceUserStatus } from '../schemas/termsOfServiceUserStatus.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetTermsOfServiceUserStatusesOptionals {
    readonly headers: GetTermsOfServiceUserStatusesHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTermsOfServiceUserStatusesOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTermsOfServiceUserStatusesOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTermsOfServiceUserStatusesOptionalsInput {
    readonly headers?: GetTermsOfServiceUserStatusesHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateTermsOfServiceStatusForUserOptionals {
    readonly headers: CreateTermsOfServiceStatusForUserHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateTermsOfServiceStatusForUserOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateTermsOfServiceStatusForUserOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateTermsOfServiceStatusForUserOptionalsInput {
    readonly headers?: CreateTermsOfServiceStatusForUserHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateTermsOfServiceStatusForUserByIdOptionals {
    readonly headers: UpdateTermsOfServiceStatusForUserByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateTermsOfServiceStatusForUserByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateTermsOfServiceStatusForUserByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateTermsOfServiceStatusForUserByIdOptionalsInput {
    readonly headers?: UpdateTermsOfServiceStatusForUserByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetTermsOfServiceUserStatusesQueryParams {
    /**
     * The ID of the terms of service. */
    readonly tosId: string;
    /**
     * Limits results to the given user ID. */
    readonly userId?: string;
}
export declare class GetTermsOfServiceUserStatusesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'> & Partial<Pick<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'>>);
}
export interface GetTermsOfServiceUserStatusesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateTermsOfServiceStatusForUserRequestBodyTosTypeField = 'terms_of_service';
export declare class CreateTermsOfServiceStatusForUserRequestBodyTosField {
    /**
     * The type of object. */
    readonly type: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
    /**
     * The ID of terms of service. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<CreateTermsOfServiceStatusForUserRequestBodyTosField, 'type'> & Partial<Pick<CreateTermsOfServiceStatusForUserRequestBodyTosField, 'type'>>);
}
export interface CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput {
    /**
     * The type of object. */
    readonly type?: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
    /**
     * The ID of terms of service. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export type CreateTermsOfServiceStatusForUserRequestBodyUserTypeField = 'user';
export declare class CreateTermsOfServiceStatusForUserRequestBodyUserField {
    /**
     * The type of object. */
    readonly type: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
    /**
     * The ID of user. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<CreateTermsOfServiceStatusForUserRequestBodyUserField, 'type'> & Partial<Pick<CreateTermsOfServiceStatusForUserRequestBodyUserField, 'type'>>);
}
export interface CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput {
    /**
     * The type of object. */
    readonly type?: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
    /**
     * The ID of user. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CreateTermsOfServiceStatusForUserRequestBody {
    /**
     * The terms of service to set the status for. */
    readonly tos: CreateTermsOfServiceStatusForUserRequestBodyTosField;
    /**
     * The user to set the status for. */
    readonly user: CreateTermsOfServiceStatusForUserRequestBodyUserField;
    /**
     * Whether the user has accepted the terms. */
    readonly isAccepted: boolean;
    readonly rawData?: SerializedData;
}
export declare class CreateTermsOfServiceStatusForUserHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'> & Partial<Pick<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'>>);
}
export interface CreateTermsOfServiceStatusForUserHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateTermsOfServiceStatusForUserByIdRequestBody {
    /**
     * Whether the user has accepted the terms. */
    readonly isAccepted: boolean;
    readonly rawData?: SerializedData;
}
export declare class UpdateTermsOfServiceStatusForUserByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateTermsOfServiceStatusForUserByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TermsOfServiceUserStatusesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TermsOfServiceUserStatusesManager, 'networkSession' | 'getTermsOfServiceUserStatuses' | 'createTermsOfServiceStatusForUser' | 'updateTermsOfServiceStatusForUserById'> & Partial<Pick<TermsOfServiceUserStatusesManager, 'networkSession'>>);
    /**
     * Retrieves an overview of users and their status for a
     * terms of service, including Whether they have accepted
     * the terms and when.
     * @param {GetTermsOfServiceUserStatusesQueryParams} queryParams Query parameters of getTermsOfServiceUserStatuses method
     * @param {GetTermsOfServiceUserStatusesOptionalsInput} optionalsInput
     * @returns {Promise<TermsOfServiceUserStatuses>}
     */
    getTermsOfServiceUserStatuses(queryParams: GetTermsOfServiceUserStatusesQueryParams, optionalsInput?: GetTermsOfServiceUserStatusesOptionalsInput): Promise<TermsOfServiceUserStatuses>;
    /**
     * Sets the status for a terms of service for a user.
     * @param {CreateTermsOfServiceStatusForUserRequestBody} requestBody Request body of createTermsOfServiceStatusForUser method
     * @param {CreateTermsOfServiceStatusForUserOptionalsInput} optionalsInput
     * @returns {Promise<TermsOfServiceUserStatus>}
     */
    createTermsOfServiceStatusForUser(requestBody: CreateTermsOfServiceStatusForUserRequestBody, optionalsInput?: CreateTermsOfServiceStatusForUserOptionalsInput): Promise<TermsOfServiceUserStatus>;
    /**
       * Updates the status for a terms of service for a user.
       * @param {string} termsOfServiceUserStatusId The ID of the terms of service status.
      Example: "324234"
       * @param {UpdateTermsOfServiceStatusForUserByIdRequestBody} requestBody Request body of updateTermsOfServiceStatusForUserById method
       * @param {UpdateTermsOfServiceStatusForUserByIdOptionalsInput} optionalsInput
       * @returns {Promise<TermsOfServiceUserStatus>}
       */
    updateTermsOfServiceStatusForUserById(termsOfServiceUserStatusId: string, requestBody: UpdateTermsOfServiceStatusForUserByIdRequestBody, optionalsInput?: UpdateTermsOfServiceStatusForUserByIdOptionalsInput): Promise<TermsOfServiceUserStatus>;
}
export interface TermsOfServiceUserStatusesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val: CreateTermsOfServiceStatusForUserRequestBodyTosField): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyTosField;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(val: CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val: CreateTermsOfServiceStatusForUserRequestBodyUserField): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyUserField;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(val: CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput;
export declare function serializeCreateTermsOfServiceStatusForUserRequestBody(val: CreateTermsOfServiceStatusForUserRequestBody): SerializedData;
export declare function deserializeCreateTermsOfServiceStatusForUserRequestBody(val: SerializedData): CreateTermsOfServiceStatusForUserRequestBody;
export declare function serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(val: UpdateTermsOfServiceStatusForUserByIdRequestBody): SerializedData;
export declare function deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody(val: SerializedData): UpdateTermsOfServiceStatusForUserByIdRequestBody;
