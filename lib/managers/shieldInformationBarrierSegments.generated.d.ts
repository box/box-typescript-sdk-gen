import { ShieldInformationBarrierSegment } from '../schemas/shieldInformationBarrierSegment.generated.js';
import { ShieldInformationBarrierSegments } from '../schemas/shieldInformationBarrierSegments.generated.js';
import { ShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetShieldInformationBarrierSegmentByIdOptionals {
    readonly headers: GetShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteShieldInformationBarrierSegmentByIdOptionals {
    readonly headers: DeleteShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteShieldInformationBarrierSegmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteShieldInformationBarrierSegmentByIdOptionalsInput {
    readonly headers?: DeleteShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateShieldInformationBarrierSegmentByIdOptionals {
    readonly requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBody;
    readonly headers: UpdateShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateShieldInformationBarrierSegmentByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateShieldInformationBarrierSegmentByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateShieldInformationBarrierSegmentByIdOptionalsInput {
    readonly requestBody?: UpdateShieldInformationBarrierSegmentByIdRequestBody;
    readonly headers?: UpdateShieldInformationBarrierSegmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentsOptionals {
    readonly headers: GetShieldInformationBarrierSegmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierSegmentsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierSegmentsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierSegmentsOptionalsInput {
    readonly headers?: GetShieldInformationBarrierSegmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierSegmentOptionals {
    readonly headers: CreateShieldInformationBarrierSegmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierSegmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierSegmentOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierSegmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierSegmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteShieldInformationBarrierSegmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteShieldInformationBarrierSegmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateShieldInformationBarrierSegmentByIdRequestBody {
    /**
     * The updated name for the shield information barrier segment. */
    readonly name?: string;
    /**
     * The updated description for
     * the shield information barrier segment. */
    readonly description?: string | null;
    readonly rawData?: SerializedData;
}
export declare class UpdateShieldInformationBarrierSegmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateShieldInformationBarrierSegmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetShieldInformationBarrierSegmentsQueryParams {
    /**
     * The ID of the shield information barrier. */
    readonly shieldInformationBarrierId: string;
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
export declare class GetShieldInformationBarrierSegmentsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierSegmentsHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierSegmentsHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierSegmentsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateShieldInformationBarrierSegmentRequestBody {
    readonly shieldInformationBarrier: ShieldInformationBarrierBase;
    /**
     * Name of the shield information barrier segment. */
    readonly name: string;
    /**
     * Description of the shield information barrier segment. */
    readonly description?: string;
    readonly rawData?: SerializedData;
}
export declare class CreateShieldInformationBarrierSegmentHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierSegmentHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierSegmentHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierSegmentHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarrierSegmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentsManager, 'networkSession' | 'getShieldInformationBarrierSegmentById' | 'deleteShieldInformationBarrierSegmentById' | 'updateShieldInformationBarrierSegmentById' | 'getShieldInformationBarrierSegments' | 'createShieldInformationBarrierSegment'> & Partial<Pick<ShieldInformationBarrierSegmentsManager, 'networkSession'>>);
    /**
       * Retrieves shield information barrier segment based on provided ID..
       * @param {string} shieldInformationBarrierSegmentId The ID of the shield information barrier segment.
      Example: "3423"
       * @param {GetShieldInformationBarrierSegmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierSegment>}
       */
    getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, optionalsInput?: GetShieldInformationBarrierSegmentByIdOptionalsInput): Promise<ShieldInformationBarrierSegment>;
    /**
       * Deletes the shield information barrier segment
       * based on provided ID.
       * @param {string} shieldInformationBarrierSegmentId The ID of the shield information barrier segment.
      Example: "3423"
       * @param {DeleteShieldInformationBarrierSegmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, optionalsInput?: DeleteShieldInformationBarrierSegmentByIdOptionalsInput): Promise<undefined>;
    /**
       * Updates the shield information barrier segment based on provided ID..
       * @param {string} shieldInformationBarrierSegmentId The ID of the shield information barrier segment.
      Example: "3423"
       * @param {UpdateShieldInformationBarrierSegmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierSegment>}
       */
    updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId: string, optionalsInput?: UpdateShieldInformationBarrierSegmentByIdOptionalsInput): Promise<ShieldInformationBarrierSegment>;
    /**
     * Retrieves a list of shield information barrier segment objects
     * for the specified Information Barrier ID.
     * @param {GetShieldInformationBarrierSegmentsQueryParams} queryParams Query parameters of getShieldInformationBarrierSegments method
     * @param {GetShieldInformationBarrierSegmentsOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegments>}
     */
    getShieldInformationBarrierSegments(queryParams: GetShieldInformationBarrierSegmentsQueryParams, optionalsInput?: GetShieldInformationBarrierSegmentsOptionalsInput): Promise<ShieldInformationBarrierSegments>;
    /**
     * Creates a shield information barrier segment.
     * @param {CreateShieldInformationBarrierSegmentRequestBody} requestBody Request body of createShieldInformationBarrierSegment method
     * @param {CreateShieldInformationBarrierSegmentOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegment>}
     */
    createShieldInformationBarrierSegment(requestBody: CreateShieldInformationBarrierSegmentRequestBody, optionalsInput?: CreateShieldInformationBarrierSegmentOptionalsInput): Promise<ShieldInformationBarrierSegment>;
}
export interface ShieldInformationBarrierSegmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(val: UpdateShieldInformationBarrierSegmentByIdRequestBody): SerializedData;
export declare function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBody(val: SerializedData): UpdateShieldInformationBarrierSegmentByIdRequestBody;
export declare function serializeCreateShieldInformationBarrierSegmentRequestBody(val: CreateShieldInformationBarrierSegmentRequestBody): SerializedData;
export declare function deserializeCreateShieldInformationBarrierSegmentRequestBody(val: SerializedData): CreateShieldInformationBarrierSegmentRequestBody;
//# sourceMappingURL=shieldInformationBarrierSegments.generated.d.ts.map