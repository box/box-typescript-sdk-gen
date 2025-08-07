import { ShieldInformationBarrierSegmentMember } from '../schemas/shieldInformationBarrierSegmentMember.generated.js';
import { ShieldInformationBarrierSegmentMembers } from '../schemas/shieldInformationBarrierSegmentMembers.generated.js';
import { ShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { UserBase } from '../schemas/userBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetShieldInformationBarrierSegmentMemberByIdOptionals {
    readonly headers: GetShieldInformationBarrierSegmentMemberByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentMemberByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentMemberByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentMemberByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentMemberByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteShieldInformationBarrierSegmentMemberByIdOptionals {
    readonly headers: DeleteShieldInformationBarrierSegmentMemberByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentMemberByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteShieldInformationBarrierSegmentMemberByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteShieldInformationBarrierSegmentMemberByIdOptionalsInput {
    readonly headers?: DeleteShieldInformationBarrierSegmentMemberByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentMembersOptionals {
    readonly headers: GetShieldInformationBarrierSegmentMembersHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentMembersOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentMembersOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentMembersOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentMembersHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierSegmentMemberOptionals {
    readonly headers: CreateShieldInformationBarrierSegmentMemberHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentMemberOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierSegmentMemberOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierSegmentMemberOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierSegmentMemberHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentMemberByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentMemberByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentMemberByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentMemberByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteShieldInformationBarrierSegmentMemberByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentMemberByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteShieldInformationBarrierSegmentMemberByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteShieldInformationBarrierSegmentMemberByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetShieldInformationBarrierSegmentMembersQueryParams {
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
export declare class GetShieldInformationBarrierSegmentMembersHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentMembersHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentMembersHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentMembersHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField = 'shield_information_barrier_segment_member';
export type CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField = 'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField {
    /**
     * The ID reference of the
     * requesting shield information barrier segment. */
    readonly id?: string;
    /**
     * The type of the shield barrier segment for this member. */
    readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField;
    readonly rawData?: SerializedData;
}
export interface CreateShieldInformationBarrierSegmentMemberRequestBody {
    /**
     * A type of the shield barrier segment member. */
    readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * The `type` and `id` of the
     * requested shield information barrier segment. */
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField;
    /**
     * User to which restriction will be applied. */
    readonly user: UserBase;
    readonly rawData?: SerializedData;
}
export declare class CreateShieldInformationBarrierSegmentMemberHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentMemberHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierSegmentMemberHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierSegmentMemberHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarrierSegmentMembersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentMembersManager, 'networkSession' | 'getShieldInformationBarrierSegmentMemberById' | 'deleteShieldInformationBarrierSegmentMemberById' | 'getShieldInformationBarrierSegmentMembers' | 'createShieldInformationBarrierSegmentMember'> & Partial<Pick<ShieldInformationBarrierSegmentMembersManager, 'networkSession'>>);
    /**
       * Retrieves a shield information barrier
       * segment member by its ID.
       * @param {string} shieldInformationBarrierSegmentMemberId The ID of the shield information barrier segment Member.
      Example: "7815"
       * @param {GetShieldInformationBarrierSegmentMemberByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierSegmentMember>}
       */
    getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string, optionalsInput?: GetShieldInformationBarrierSegmentMemberByIdOptionalsInput): Promise<ShieldInformationBarrierSegmentMember>;
    /**
       * Deletes a shield information barrier
       * segment member based on provided ID.
       * @param {string} shieldInformationBarrierSegmentMemberId The ID of the shield information barrier segment Member.
      Example: "7815"
       * @param {DeleteShieldInformationBarrierSegmentMemberByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string, optionalsInput?: DeleteShieldInformationBarrierSegmentMemberByIdOptionalsInput): Promise<undefined>;
    /**
     * Lists shield information barrier segment members
     * based on provided segment IDs.
     * @param {GetShieldInformationBarrierSegmentMembersQueryParams} queryParams Query parameters of getShieldInformationBarrierSegmentMembers method
     * @param {GetShieldInformationBarrierSegmentMembersOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentMembers>}
     */
    getShieldInformationBarrierSegmentMembers(queryParams: GetShieldInformationBarrierSegmentMembersQueryParams, optionalsInput?: GetShieldInformationBarrierSegmentMembersOptionalsInput): Promise<ShieldInformationBarrierSegmentMembers>;
    /**
     * Creates a new shield information barrier segment member.
     * @param {CreateShieldInformationBarrierSegmentMemberRequestBody} requestBody Request body of createShieldInformationBarrierSegmentMember method
     * @param {CreateShieldInformationBarrierSegmentMemberOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentMember>}
     */
    createShieldInformationBarrierSegmentMember(requestBody: CreateShieldInformationBarrierSegmentMemberRequestBody, optionalsInput?: CreateShieldInformationBarrierSegmentMemberOptionalsInput): Promise<ShieldInformationBarrierSegmentMember>;
}
export interface ShieldInformationBarrierSegmentMembersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val: SerializedData): CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField;
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val: SerializedData): CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField;
export declare function serializeCreateShieldInformationBarrierSegmentMemberRequestBody(val: CreateShieldInformationBarrierSegmentMemberRequestBody): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentMemberRequestBody(val: SerializedData): CreateShieldInformationBarrierSegmentMemberRequestBody;
//# sourceMappingURL=shieldInformationBarrierSegmentMembers.generated.d.ts.map