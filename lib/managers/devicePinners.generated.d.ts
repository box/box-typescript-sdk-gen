import { DevicePinner } from '../schemas/devicePinner.generated.js';
import { DevicePinners } from '../schemas/devicePinners.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetDevicePinnerByIdOptionals {
    readonly headers: GetDevicePinnerByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetDevicePinnerByIdOptionalsInput {
    readonly headers?: GetDevicePinnerByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteDevicePinnerByIdOptionals {
    readonly headers: DeleteDevicePinnerByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteDevicePinnerByIdOptionalsInput {
    readonly headers?: DeleteDevicePinnerByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetEnterpriseDevicePinnersOptionals {
    readonly queryParams: GetEnterpriseDevicePinnersQueryParams;
    readonly headers: GetEnterpriseDevicePinnersHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetEnterpriseDevicePinnersOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetEnterpriseDevicePinnersOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetEnterpriseDevicePinnersOptionalsInput {
    readonly queryParams?: GetEnterpriseDevicePinnersQueryParams;
    readonly headers?: GetEnterpriseDevicePinnersHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetDevicePinnerByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDevicePinnerByIdHeaders, 'extraHeaders'> & Partial<Pick<GetDevicePinnerByIdHeaders, 'extraHeaders'>>);
}
export interface GetDevicePinnerByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteDevicePinnerByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteDevicePinnerByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteDevicePinnerByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteDevicePinnerByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetEnterpriseDevicePinnersQueryParamsDirectionField = 'ASC' | 'DESC' | string;
export interface GetEnterpriseDevicePinnersQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * The direction to sort results in. This can be either in alphabetical ascending
     * (`ASC`) or descending (`DESC`) order. */
    readonly direction?: GetEnterpriseDevicePinnersQueryParamsDirectionField;
}
export declare class GetEnterpriseDevicePinnersHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetEnterpriseDevicePinnersHeaders, 'extraHeaders'> & Partial<Pick<GetEnterpriseDevicePinnersHeaders, 'extraHeaders'>>);
}
export interface GetEnterpriseDevicePinnersHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DevicePinnersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<DevicePinnersManager, 'networkSession' | 'getDevicePinnerById' | 'deleteDevicePinnerById' | 'getEnterpriseDevicePinners'> & Partial<Pick<DevicePinnersManager, 'networkSession'>>);
    /**
       * Retrieves information about an individual device pin.
       * @param {string} devicePinnerId The ID of the device pin.
      Example: "2324234"
       * @param {GetDevicePinnerByIdOptionalsInput} optionalsInput
       * @returns {Promise<DevicePinner>}
       */
    getDevicePinnerById(devicePinnerId: string, optionalsInput?: GetDevicePinnerByIdOptionalsInput): Promise<DevicePinner>;
    /**
       * Deletes an individual device pin.
       * @param {string} devicePinnerId The ID of the device pin.
      Example: "2324234"
       * @param {DeleteDevicePinnerByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteDevicePinnerById(devicePinnerId: string, optionalsInput?: DeleteDevicePinnerByIdOptionalsInput): Promise<undefined>;
    /**
       * Retrieves all the device pins within an enterprise.
       *
       * The user must have admin privileges, and the application
       * needs the "manage enterprise" scope to make this call.
       * @param {string} enterpriseId The ID of the enterprise.
      Example: "3442311"
       * @param {GetEnterpriseDevicePinnersOptionalsInput} optionalsInput
       * @returns {Promise<DevicePinners>}
       */
    getEnterpriseDevicePinners(enterpriseId: string, optionalsInput?: GetEnterpriseDevicePinnersOptionalsInput): Promise<DevicePinners>;
}
export interface DevicePinnersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val: GetEnterpriseDevicePinnersQueryParamsDirectionField): SerializedData;
export declare function deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val: SerializedData): GetEnterpriseDevicePinnersQueryParamsDirectionField;
//# sourceMappingURL=devicePinners.generated.d.ts.map