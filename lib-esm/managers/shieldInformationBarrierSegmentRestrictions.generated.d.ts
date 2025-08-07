import { ShieldInformationBarrierSegmentRestriction } from '../schemas/shieldInformationBarrierSegmentRestriction.generated.js';
import { ShieldInformationBarrierSegmentRestrictions } from '../schemas/shieldInformationBarrierSegmentRestrictions.generated.js';
import { ShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetShieldInformationBarrierSegmentRestrictionByIdOptionals {
    readonly headers: GetShieldInformationBarrierSegmentRestrictionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentRestrictionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentRestrictionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentRestrictionByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentRestrictionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals {
    readonly headers: DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteShieldInformationBarrierSegmentRestrictionByIdOptionalsInput {
    readonly headers?: DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentRestrictionsOptionals {
    readonly headers: GetShieldInformationBarrierSegmentRestrictionsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentRestrictionsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentRestrictionsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentRestrictionsOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentRestrictionsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierSegmentRestrictionOptionals {
    readonly headers: CreateShieldInformationBarrierSegmentRestrictionHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentRestrictionOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierSegmentRestrictionOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierSegmentRestrictionOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierSegmentRestrictionHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentRestrictionByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentRestrictionByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentRestrictionByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentRestrictionByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetShieldInformationBarrierSegmentRestrictionsQueryParams {
    /**
     * The ID of the shield information barrier segment. */
    readonly shieldInformationBarrierSegmentId: string;
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
export declare class GetShieldInformationBarrierSegmentRestrictionsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentRestrictionsHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentRestrictionsHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentRestrictionsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField = 'shield_information_barrier_segment_restriction';
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField = 'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField {
    /**
     * The ID reference of the requesting
     * shield information barrier segment. */
    readonly id?: string;
    /**
     * The type of the shield barrier segment for this member. */
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField;
    readonly rawData?: SerializedData;
}
export type CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField = 'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField {
    /**
     * The ID reference of the restricted
     * shield information barrier segment. */
    readonly id?: string;
    /**
     * The type of the restricted shield
     * information barrier segment. */
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField;
    readonly rawData?: SerializedData;
}
export declare class CreateShieldInformationBarrierSegmentRestrictionRequestBody {
    /**
     * The type of the shield barrier segment
     * restriction for this member. */
    readonly type: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * The `type` and `id` of the requested
     * shield information barrier segment. */
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
    /**
     * The `type` and `id` of the restricted
     * shield information barrier segment. */
    readonly restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentRestrictionRequestBody, 'type'> & Partial<Pick<CreateShieldInformationBarrierSegmentRestrictionRequestBody, 'type'>>);
}
export interface CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput {
    /**
     * The type of the shield barrier segment
     * restriction for this member. */
    readonly type?: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * The `type` and `id` of the requested
     * shield information barrier segment. */
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
    /**
     * The `type` and `id` of the restricted
     * shield information barrier segment. */
    readonly restrictedSegment: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
    readonly rawData?: SerializedData;
}
export declare class CreateShieldInformationBarrierSegmentRestrictionHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentRestrictionHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierSegmentRestrictionHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierSegmentRestrictionHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarrierSegmentRestrictionsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentRestrictionsManager, 'networkSession' | 'getShieldInformationBarrierSegmentRestrictionById' | 'deleteShieldInformationBarrierSegmentRestrictionById' | 'getShieldInformationBarrierSegmentRestrictions' | 'createShieldInformationBarrierSegmentRestriction'> & Partial<Pick<ShieldInformationBarrierSegmentRestrictionsManager, 'networkSession'>>);
    /**
       * Retrieves a shield information barrier segment
       * restriction based on provided ID.
       * @param {string} shieldInformationBarrierSegmentRestrictionId The ID of the shield information barrier segment Restriction.
      Example: "4563"
       * @param {GetShieldInformationBarrierSegmentRestrictionByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierSegmentRestriction>}
       */
    getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string, optionalsInput?: GetShieldInformationBarrierSegmentRestrictionByIdOptionalsInput): Promise<ShieldInformationBarrierSegmentRestriction>;
    /**
       * Delete shield information barrier segment restriction
       * based on provided ID.
       * @param {string} shieldInformationBarrierSegmentRestrictionId The ID of the shield information barrier segment Restriction.
      Example: "4563"
       * @param {DeleteShieldInformationBarrierSegmentRestrictionByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId: string, optionalsInput?: DeleteShieldInformationBarrierSegmentRestrictionByIdOptionalsInput): Promise<undefined>;
    /**
     * Lists shield information barrier segment restrictions
     * based on provided segment ID.
     * @param {GetShieldInformationBarrierSegmentRestrictionsQueryParams} queryParams Query parameters of getShieldInformationBarrierSegmentRestrictions method
     * @param {GetShieldInformationBarrierSegmentRestrictionsOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentRestrictions>}
     */
    getShieldInformationBarrierSegmentRestrictions(queryParams: GetShieldInformationBarrierSegmentRestrictionsQueryParams, optionalsInput?: GetShieldInformationBarrierSegmentRestrictionsOptionalsInput): Promise<ShieldInformationBarrierSegmentRestrictions>;
    /**
     * Creates a shield information barrier
     * segment restriction object.
     * @param {CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput} requestBodyInput Request body of createShieldInformationBarrierSegmentRestriction method
     * @param {CreateShieldInformationBarrierSegmentRestrictionOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentRestriction>}
     */
    createShieldInformationBarrierSegmentRestriction(requestBodyInput: CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput, optionalsInput?: CreateShieldInformationBarrierSegmentRestrictionOptionalsInput): Promise<ShieldInformationBarrierSegmentRestriction>;
}
export interface ShieldInformationBarrierSegmentRestrictionsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(val: CreateShieldInformationBarrierSegmentRestrictionRequestBody): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBody;
export declare function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(val: CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(val: SerializedData): CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput;
