import { ShieldInformationBarrier } from '../schemas/shieldInformationBarrier.generated.js';
import { ShieldInformationBarriers } from '../schemas/shieldInformationBarriers.generated.js';
import { EnterpriseBase } from '../schemas/enterpriseBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetShieldInformationBarrierByIdOptionals {
    readonly headers: GetShieldInformationBarrierByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateShieldInformationBarrierStatusOptionals {
    readonly headers: UpdateShieldInformationBarrierStatusHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateShieldInformationBarrierStatusOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateShieldInformationBarrierStatusOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateShieldInformationBarrierStatusOptionalsInput {
    readonly headers?: UpdateShieldInformationBarrierStatusHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierOptionals {
    readonly headers: CreateShieldInformationBarrierHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateShieldInformationBarrierStatusRequestBodyStatusField = 'pending' | 'disabled' | string;
export interface UpdateShieldInformationBarrierStatusRequestBody {
    /**
     * The ID of the shield information barrier. */
    readonly id: string;
    /**
     * The desired status for the shield information barrier. */
    readonly status: UpdateShieldInformationBarrierStatusRequestBodyStatusField;
    readonly rawData?: SerializedData;
}
export declare class UpdateShieldInformationBarrierStatusHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateShieldInformationBarrierStatusHeaders, 'extraHeaders'> & Partial<Pick<UpdateShieldInformationBarrierStatusHeaders, 'extraHeaders'>>);
}
export interface UpdateShieldInformationBarrierStatusHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetShieldInformationBarriersQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetShieldInformationBarriersHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarriersHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarriersHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarriersHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateShieldInformationBarrierRequestBody {
    /**
     * The `type` and `id` of enterprise this barrier is under. */
    readonly enterprise: EnterpriseBase;
    readonly rawData?: SerializedData;
}
export declare class CreateShieldInformationBarrierHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarriersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarriersManager, 'networkSession' | 'getShieldInformationBarrierById' | 'updateShieldInformationBarrierStatus' | 'getShieldInformationBarriers' | 'createShieldInformationBarrier'> & Partial<Pick<ShieldInformationBarriersManager, 'networkSession'>>);
    /**
       * Get shield information barrier based on provided ID.
       * @param {string} shieldInformationBarrierId The ID of the shield information barrier.
      Example: "1910967"
       * @param {GetShieldInformationBarrierByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrier>}
       */
    getShieldInformationBarrierById(shieldInformationBarrierId: string, optionalsInput?: GetShieldInformationBarrierByIdOptionalsInput): Promise<ShieldInformationBarrier>;
    /**
     * Change status of shield information barrier with the specified ID.
     * @param {UpdateShieldInformationBarrierStatusRequestBody} requestBody Request body of updateShieldInformationBarrierStatus method
     * @param {UpdateShieldInformationBarrierStatusOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrier>}
     */
    updateShieldInformationBarrierStatus(requestBody: UpdateShieldInformationBarrierStatusRequestBody, optionalsInput?: UpdateShieldInformationBarrierStatusOptionalsInput): Promise<ShieldInformationBarrier>;
    /**
     * Retrieves a list of shield information barrier objects
     * for the enterprise of JWT.
     * @param {GetShieldInformationBarriersQueryParams} queryParams Query parameters of getShieldInformationBarriers method
     * @param {GetShieldInformationBarriersHeadersInput} headersInput Headers of getShieldInformationBarriers method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ShieldInformationBarriers>}
     */
    getShieldInformationBarriers(queryParams?: GetShieldInformationBarriersQueryParams, headersInput?: GetShieldInformationBarriersHeadersInput, cancellationToken?: CancellationToken): Promise<ShieldInformationBarriers>;
    /**
     * Creates a shield information barrier to
     * separate individuals/groups within the same
     * firm and prevents confidential information passing between them.
     * @param {CreateShieldInformationBarrierRequestBody} requestBody Request body of createShieldInformationBarrier method
     * @param {CreateShieldInformationBarrierOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrier>}
     */
    createShieldInformationBarrier(requestBody: CreateShieldInformationBarrierRequestBody, optionalsInput?: CreateShieldInformationBarrierOptionalsInput): Promise<ShieldInformationBarrier>;
}
export interface ShieldInformationBarriersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val: UpdateShieldInformationBarrierStatusRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val: SerializedData): UpdateShieldInformationBarrierStatusRequestBodyStatusField;
export declare function serializeUpdateShieldInformationBarrierStatusRequestBody(val: UpdateShieldInformationBarrierStatusRequestBody): SerializedData;
export declare function deserializeUpdateShieldInformationBarrierStatusRequestBody(val: SerializedData): UpdateShieldInformationBarrierStatusRequestBody;
export declare function serializeCreateShieldInformationBarrierRequestBody(val: CreateShieldInformationBarrierRequestBody): SerializedData;
export declare function deserializeCreateShieldInformationBarrierRequestBody(val: SerializedData): CreateShieldInformationBarrierRequestBody;
//# sourceMappingURL=shieldInformationBarriers.generated.d.ts.map