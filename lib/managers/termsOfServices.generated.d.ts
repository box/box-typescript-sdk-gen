import { TermsOfServices } from '../schemas/termsOfServices.generated.js';
import { TermsOfService } from '../schemas/termsOfService.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateTermsOfServiceOptionals {
    readonly headers: CreateTermsOfServiceHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateTermsOfServiceOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateTermsOfServiceOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateTermsOfServiceOptionalsInput {
    readonly headers?: CreateTermsOfServiceHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTermsOfServiceByIdOptionals {
    readonly headers: GetTermsOfServiceByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTermsOfServiceByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTermsOfServiceByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTermsOfServiceByIdOptionalsInput {
    readonly headers?: GetTermsOfServiceByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateTermsOfServiceByIdOptionals {
    readonly headers: UpdateTermsOfServiceByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateTermsOfServiceByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateTermsOfServiceByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateTermsOfServiceByIdOptionalsInput {
    readonly headers?: UpdateTermsOfServiceByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetTermsOfServiceQueryParamsTosTypeField = 'external' | 'managed' | string;
export interface GetTermsOfServiceQueryParams {
    /**
     * Limits the results to the terms of service of the given type. */
    readonly tosType?: GetTermsOfServiceQueryParamsTosTypeField;
}
export declare class GetTermsOfServiceHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTermsOfServiceHeaders, 'extraHeaders'> & Partial<Pick<GetTermsOfServiceHeaders, 'extraHeaders'>>);
}
export interface GetTermsOfServiceHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateTermsOfServiceRequestBodyStatusField = 'enabled' | 'disabled' | string;
export type CreateTermsOfServiceRequestBodyTosTypeField = 'external' | 'managed' | string;
export interface CreateTermsOfServiceRequestBody {
    /**
     * Whether this terms of service is active. */
    readonly status: CreateTermsOfServiceRequestBodyStatusField;
    /**
     * The type of user to set the terms of
     * service for. */
    readonly tosType?: CreateTermsOfServiceRequestBodyTosTypeField;
    /**
     * The terms of service text to display to users.
     *
     * The text can be set to empty if the `status` is set to `disabled`. */
    readonly text: string;
    readonly rawData?: SerializedData;
}
export declare class CreateTermsOfServiceHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateTermsOfServiceHeaders, 'extraHeaders'> & Partial<Pick<CreateTermsOfServiceHeaders, 'extraHeaders'>>);
}
export interface CreateTermsOfServiceHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetTermsOfServiceByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTermsOfServiceByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTermsOfServiceByIdHeaders, 'extraHeaders'>>);
}
export interface GetTermsOfServiceByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateTermsOfServiceByIdRequestBodyStatusField = 'enabled' | 'disabled' | string;
export interface UpdateTermsOfServiceByIdRequestBody {
    /**
     * Whether this terms of service is active. */
    readonly status: UpdateTermsOfServiceByIdRequestBodyStatusField;
    /**
     * The terms of service text to display to users.
     *
     * The text can be set to empty if the `status` is set to `disabled`. */
    readonly text: string;
    readonly rawData?: SerializedData;
}
export declare class UpdateTermsOfServiceByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateTermsOfServiceByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateTermsOfServiceByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateTermsOfServiceByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TermsOfServicesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TermsOfServicesManager, 'networkSession' | 'getTermsOfService' | 'createTermsOfService' | 'getTermsOfServiceById' | 'updateTermsOfServiceById'> & Partial<Pick<TermsOfServicesManager, 'networkSession'>>);
    /**
     * Returns the current terms of service text and settings
     * for the enterprise.
     * @param {GetTermsOfServiceQueryParams} queryParams Query parameters of getTermsOfService method
     * @param {GetTermsOfServiceHeadersInput} headersInput Headers of getTermsOfService method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<TermsOfServices>}
     */
    getTermsOfService(queryParams?: GetTermsOfServiceQueryParams, headersInput?: GetTermsOfServiceHeadersInput, cancellationToken?: CancellationToken): Promise<TermsOfServices>;
    /**
     * Creates a terms of service for a given enterprise
     * and type of user.
     * @param {CreateTermsOfServiceRequestBody} requestBody Request body of createTermsOfService method
     * @param {CreateTermsOfServiceOptionalsInput} optionalsInput
     * @returns {Promise<TermsOfService>}
     */
    createTermsOfService(requestBody: CreateTermsOfServiceRequestBody, optionalsInput?: CreateTermsOfServiceOptionalsInput): Promise<TermsOfService>;
    /**
       * Fetches a specific terms of service.
       * @param {string} termsOfServiceId The ID of the terms of service.
      Example: "324234"
       * @param {GetTermsOfServiceByIdOptionalsInput} optionalsInput
       * @returns {Promise<TermsOfService>}
       */
    getTermsOfServiceById(termsOfServiceId: string, optionalsInput?: GetTermsOfServiceByIdOptionalsInput): Promise<TermsOfService>;
    /**
       * Updates a specific terms of service.
       * @param {string} termsOfServiceId The ID of the terms of service.
      Example: "324234"
       * @param {UpdateTermsOfServiceByIdRequestBody} requestBody Request body of updateTermsOfServiceById method
       * @param {UpdateTermsOfServiceByIdOptionalsInput} optionalsInput
       * @returns {Promise<TermsOfService>}
       */
    updateTermsOfServiceById(termsOfServiceId: string, requestBody: UpdateTermsOfServiceByIdRequestBody, optionalsInput?: UpdateTermsOfServiceByIdOptionalsInput): Promise<TermsOfService>;
}
export interface TermsOfServicesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetTermsOfServiceQueryParamsTosTypeField(val: GetTermsOfServiceQueryParamsTosTypeField): SerializedData;
export declare function deserializeGetTermsOfServiceQueryParamsTosTypeField(val: SerializedData): GetTermsOfServiceQueryParamsTosTypeField;
export declare function serializeCreateTermsOfServiceRequestBodyStatusField(val: CreateTermsOfServiceRequestBodyStatusField): SerializedData;
export declare function deserializeCreateTermsOfServiceRequestBodyStatusField(val: SerializedData): CreateTermsOfServiceRequestBodyStatusField;
export declare function serializeCreateTermsOfServiceRequestBodyTosTypeField(val: CreateTermsOfServiceRequestBodyTosTypeField): SerializedData;
export declare function deserializeCreateTermsOfServiceRequestBodyTosTypeField(val: SerializedData): CreateTermsOfServiceRequestBodyTosTypeField;
export declare function serializeCreateTermsOfServiceRequestBody(val: CreateTermsOfServiceRequestBody): SerializedData;
export declare function deserializeCreateTermsOfServiceRequestBody(val: SerializedData): CreateTermsOfServiceRequestBody;
export declare function serializeUpdateTermsOfServiceByIdRequestBodyStatusField(val: UpdateTermsOfServiceByIdRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateTermsOfServiceByIdRequestBodyStatusField(val: SerializedData): UpdateTermsOfServiceByIdRequestBodyStatusField;
export declare function serializeUpdateTermsOfServiceByIdRequestBody(val: UpdateTermsOfServiceByIdRequestBody): SerializedData;
export declare function deserializeUpdateTermsOfServiceByIdRequestBody(val: SerializedData): UpdateTermsOfServiceByIdRequestBody;
//# sourceMappingURL=termsOfServices.generated.d.ts.map