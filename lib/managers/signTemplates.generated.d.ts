import { SignTemplates } from '../schemas/signTemplates.generated.js';
import { SignTemplate } from '../schemas/signTemplate.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetSignTemplateByIdOptionals {
    readonly headers: GetSignTemplateByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSignTemplateByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSignTemplateByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSignTemplateByIdOptionalsInput {
    readonly headers?: GetSignTemplateByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetSignTemplatesQueryParams {
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
export declare class GetSignTemplatesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSignTemplatesHeaders, 'extraHeaders'> & Partial<Pick<GetSignTemplatesHeaders, 'extraHeaders'>>);
}
export interface GetSignTemplatesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetSignTemplateByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSignTemplateByIdHeaders, 'extraHeaders'> & Partial<Pick<GetSignTemplateByIdHeaders, 'extraHeaders'>>);
}
export interface GetSignTemplateByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SignTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SignTemplatesManager, 'networkSession' | 'getSignTemplates' | 'getSignTemplateById'> & Partial<Pick<SignTemplatesManager, 'networkSession'>>);
    /**
     * Gets Box Sign templates created by a user.
     * @param {GetSignTemplatesQueryParams} queryParams Query parameters of getSignTemplates method
     * @param {GetSignTemplatesHeadersInput} headersInput Headers of getSignTemplates method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<SignTemplates>}
     */
    getSignTemplates(queryParams?: GetSignTemplatesQueryParams, headersInput?: GetSignTemplatesHeadersInput, cancellationToken?: CancellationToken): Promise<SignTemplates>;
    /**
       * Fetches details of a specific Box Sign template.
       * @param {string} templateId The ID of a Box Sign template.
      Example: "123075213-7d117509-8f05-42e4-a5ef-5190a319d41d"
       * @param {GetSignTemplateByIdOptionalsInput} optionalsInput
       * @returns {Promise<SignTemplate>}
       */
    getSignTemplateById(templateId: string, optionalsInput?: GetSignTemplateByIdOptionalsInput): Promise<SignTemplate>;
}
export interface SignTemplatesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=signTemplates.generated.d.ts.map