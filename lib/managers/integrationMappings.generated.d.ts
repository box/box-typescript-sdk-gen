import { IntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { IntegrationMapping } from '../schemas/integrationMapping.generated.js';
import { IntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { IntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { IntegrationMappingSlackOptions } from '../schemas/integrationMappingSlackOptions.generated.js';
import { IntegrationMappingsTeams } from '../schemas/integrationMappingsTeams.generated.js';
import { IntegrationMappingTeams } from '../schemas/integrationMappingTeams.generated.js';
import { IntegrationMappingTeamsCreateRequest } from '../schemas/integrationMappingTeamsCreateRequest.generated.js';
import { FolderReference } from '../schemas/folderReference.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateSlackIntegrationMappingOptionals {
    readonly headers: CreateSlackIntegrationMappingHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateSlackIntegrationMappingOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateSlackIntegrationMappingOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateSlackIntegrationMappingOptionalsInput {
    readonly headers?: CreateSlackIntegrationMappingHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateSlackIntegrationMappingByIdOptionals {
    readonly requestBody: UpdateSlackIntegrationMappingByIdRequestBody;
    readonly headers: UpdateSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateSlackIntegrationMappingByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateSlackIntegrationMappingByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateSlackIntegrationMappingByIdOptionalsInput {
    readonly requestBody?: UpdateSlackIntegrationMappingByIdRequestBody;
    readonly headers?: UpdateSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteSlackIntegrationMappingByIdOptionals {
    readonly headers: DeleteSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteSlackIntegrationMappingByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteSlackIntegrationMappingByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteSlackIntegrationMappingByIdOptionalsInput {
    readonly headers?: DeleteSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateTeamsIntegrationMappingOptionals {
    readonly headers: CreateTeamsIntegrationMappingHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateTeamsIntegrationMappingOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateTeamsIntegrationMappingOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateTeamsIntegrationMappingOptionalsInput {
    readonly headers?: CreateTeamsIntegrationMappingHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateTeamsIntegrationMappingByIdOptionals {
    readonly requestBody: UpdateTeamsIntegrationMappingByIdRequestBody;
    readonly headers: UpdateTeamsIntegrationMappingByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateTeamsIntegrationMappingByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateTeamsIntegrationMappingByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateTeamsIntegrationMappingByIdOptionalsInput {
    readonly requestBody?: UpdateTeamsIntegrationMappingByIdRequestBody;
    readonly headers?: UpdateTeamsIntegrationMappingByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTeamsIntegrationMappingByIdOptionals {
    readonly headers: DeleteTeamsIntegrationMappingByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTeamsIntegrationMappingByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTeamsIntegrationMappingByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTeamsIntegrationMappingByIdOptionalsInput {
    readonly headers?: DeleteTeamsIntegrationMappingByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetSlackIntegrationMappingQueryParamsPartnerItemTypeField = 'channel' | string;
export type GetSlackIntegrationMappingQueryParamsBoxItemTypeField = 'folder' | string;
export interface GetSlackIntegrationMappingQueryParams {
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
     * Mapped item type, for which the mapping should be returned. */
    readonly partnerItemType?: GetSlackIntegrationMappingQueryParamsPartnerItemTypeField;
    /**
     * ID of the mapped item,
     * for which the mapping should be returned. */
    readonly partnerItemId?: string;
    /**
     * Box item ID, for which the mappings should be returned. */
    readonly boxItemId?: string;
    /**
     * Box item type, for
     * which the mappings should be returned. */
    readonly boxItemType?: GetSlackIntegrationMappingQueryParamsBoxItemTypeField;
    /**
     * Whether the mapping has been manually created. */
    readonly isManuallyCreated?: boolean;
}
export declare class GetSlackIntegrationMappingHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSlackIntegrationMappingHeaders, 'extraHeaders'> & Partial<Pick<GetSlackIntegrationMappingHeaders, 'extraHeaders'>>);
}
export interface GetSlackIntegrationMappingHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateSlackIntegrationMappingHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateSlackIntegrationMappingHeaders, 'extraHeaders'> & Partial<Pick<CreateSlackIntegrationMappingHeaders, 'extraHeaders'>>);
}
export interface CreateSlackIntegrationMappingHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateSlackIntegrationMappingByIdRequestBody {
    readonly boxItem?: IntegrationMappingBoxItemSlack;
    readonly options?: IntegrationMappingSlackOptions;
    readonly rawData?: SerializedData;
}
export declare class UpdateSlackIntegrationMappingByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateSlackIntegrationMappingByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteSlackIntegrationMappingByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteSlackIntegrationMappingByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetTeamsIntegrationMappingQueryParamsPartnerItemTypeField = 'channel' | 'team' | string;
export type GetTeamsIntegrationMappingQueryParamsBoxItemTypeField = 'folder' | string;
export interface GetTeamsIntegrationMappingQueryParams {
    /**
     * Mapped item type, for which the mapping should be returned. */
    readonly partnerItemType?: GetTeamsIntegrationMappingQueryParamsPartnerItemTypeField;
    /**
     * ID of the mapped item,
     * for which the mapping should be returned. */
    readonly partnerItemId?: string;
    /**
     * Box item ID, for which the mappings should be returned. */
    readonly boxItemId?: string;
    /**
     * Box item type, for
     * which the mappings should be returned. */
    readonly boxItemType?: GetTeamsIntegrationMappingQueryParamsBoxItemTypeField;
}
export declare class GetTeamsIntegrationMappingHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTeamsIntegrationMappingHeaders, 'extraHeaders'> & Partial<Pick<GetTeamsIntegrationMappingHeaders, 'extraHeaders'>>);
}
export interface GetTeamsIntegrationMappingHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateTeamsIntegrationMappingHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateTeamsIntegrationMappingHeaders, 'extraHeaders'> & Partial<Pick<CreateTeamsIntegrationMappingHeaders, 'extraHeaders'>>);
}
export interface CreateTeamsIntegrationMappingHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateTeamsIntegrationMappingByIdRequestBody {
    readonly boxItem?: FolderReference;
    readonly rawData?: SerializedData;
}
export declare class UpdateTeamsIntegrationMappingByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateTeamsIntegrationMappingByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateTeamsIntegrationMappingByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateTeamsIntegrationMappingByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTeamsIntegrationMappingByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTeamsIntegrationMappingByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTeamsIntegrationMappingByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTeamsIntegrationMappingByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class IntegrationMappingsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<IntegrationMappingsManager, 'networkSession' | 'getSlackIntegrationMapping' | 'createSlackIntegrationMapping' | 'updateSlackIntegrationMappingById' | 'deleteSlackIntegrationMappingById' | 'getTeamsIntegrationMapping' | 'createTeamsIntegrationMapping' | 'updateTeamsIntegrationMappingById' | 'deleteTeamsIntegrationMappingById'> & Partial<Pick<IntegrationMappingsManager, 'networkSession'>>);
    /**
     * Lists [Slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack) in a users' enterprise.
     *
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {GetSlackIntegrationMappingQueryParams} queryParams Query parameters of getSlackIntegrationMapping method
     * @param {GetSlackIntegrationMappingHeadersInput} headersInput Headers of getSlackIntegrationMapping method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<IntegrationMappings>}
     */
    getSlackIntegrationMapping(queryParams?: GetSlackIntegrationMappingQueryParams, headersInput?: GetSlackIntegrationMappingHeadersInput, cancellationToken?: CancellationToken): Promise<IntegrationMappings>;
    /**
     * Creates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
     * by mapping a Slack channel to a Box item.
     *
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {IntegrationMappingSlackCreateRequest} requestBody Request body of createSlackIntegrationMapping method
     * @param {CreateSlackIntegrationMappingOptionalsInput} optionalsInput
     * @returns {Promise<IntegrationMapping>}
     */
    createSlackIntegrationMapping(requestBody: IntegrationMappingSlackCreateRequest, optionalsInput?: CreateSlackIntegrationMappingOptionalsInput): Promise<IntegrationMapping>;
    /**
       * Updates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
       * Supports updating the Box folder ID and options.
       *
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping.
      Example: "11235432"
       * @param {UpdateSlackIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<IntegrationMapping>}
       */
    updateSlackIntegrationMappingById(integrationMappingId: string, optionalsInput?: UpdateSlackIntegrationMappingByIdOptionalsInput): Promise<IntegrationMapping>;
    /**
       * Deletes a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
       *
       *
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping.
      Example: "11235432"
       * @param {DeleteSlackIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteSlackIntegrationMappingById(integrationMappingId: string, optionalsInput?: DeleteSlackIntegrationMappingByIdOptionalsInput): Promise<undefined>;
    /**
     * Lists [Teams integration mappings](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams) in a users' enterprise.
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {GetTeamsIntegrationMappingQueryParams} queryParams Query parameters of getTeamsIntegrationMapping method
     * @param {GetTeamsIntegrationMappingHeadersInput} headersInput Headers of getTeamsIntegrationMapping method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<IntegrationMappingsTeams>}
     */
    getTeamsIntegrationMapping(queryParams?: GetTeamsIntegrationMappingQueryParams, headersInput?: GetTeamsIntegrationMappingHeadersInput, cancellationToken?: CancellationToken): Promise<IntegrationMappingsTeams>;
    /**
     * Creates a [Teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams)
     * by mapping a Teams channel to a Box item.
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {IntegrationMappingTeamsCreateRequest} requestBody Request body of createTeamsIntegrationMapping method
     * @param {CreateTeamsIntegrationMappingOptionalsInput} optionalsInput
     * @returns {Promise<IntegrationMappingTeams>}
     */
    createTeamsIntegrationMapping(requestBody: IntegrationMappingTeamsCreateRequest, optionalsInput?: CreateTeamsIntegrationMappingOptionalsInput): Promise<IntegrationMappingTeams>;
    /**
       * Updates a [Teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams).
       * Supports updating the Box folder ID and options.
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping.
      Example: "11235432"
       * @param {UpdateTeamsIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<IntegrationMappingTeams>}
       */
    updateTeamsIntegrationMappingById(integrationMappingId: string, optionalsInput?: UpdateTeamsIntegrationMappingByIdOptionalsInput): Promise<IntegrationMappingTeams>;
    /**
       * Deletes a [Teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams).
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping.
      Example: "11235432"
       * @param {DeleteTeamsIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTeamsIntegrationMappingById(integrationMappingId: string, optionalsInput?: DeleteTeamsIntegrationMappingByIdOptionalsInput): Promise<undefined>;
}
export interface IntegrationMappingsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val: GetSlackIntegrationMappingQueryParamsPartnerItemTypeField): SerializedData;
export declare function deserializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val: SerializedData): GetSlackIntegrationMappingQueryParamsPartnerItemTypeField;
export declare function serializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val: GetSlackIntegrationMappingQueryParamsBoxItemTypeField): SerializedData;
export declare function deserializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val: SerializedData): GetSlackIntegrationMappingQueryParamsBoxItemTypeField;
export declare function serializeUpdateSlackIntegrationMappingByIdRequestBody(val: UpdateSlackIntegrationMappingByIdRequestBody): SerializedData;
export declare function deserializeUpdateSlackIntegrationMappingByIdRequestBody(val: SerializedData): UpdateSlackIntegrationMappingByIdRequestBody;
export declare function serializeGetTeamsIntegrationMappingQueryParamsPartnerItemTypeField(val: GetTeamsIntegrationMappingQueryParamsPartnerItemTypeField): SerializedData;
export declare function deserializeGetTeamsIntegrationMappingQueryParamsPartnerItemTypeField(val: SerializedData): GetTeamsIntegrationMappingQueryParamsPartnerItemTypeField;
export declare function serializeGetTeamsIntegrationMappingQueryParamsBoxItemTypeField(val: GetTeamsIntegrationMappingQueryParamsBoxItemTypeField): SerializedData;
export declare function deserializeGetTeamsIntegrationMappingQueryParamsBoxItemTypeField(val: SerializedData): GetTeamsIntegrationMappingQueryParamsBoxItemTypeField;
export declare function serializeUpdateTeamsIntegrationMappingByIdRequestBody(val: UpdateTeamsIntegrationMappingByIdRequestBody): SerializedData;
export declare function deserializeUpdateTeamsIntegrationMappingByIdRequestBody(val: SerializedData): UpdateTeamsIntegrationMappingByIdRequestBody;
//# sourceMappingURL=integrationMappings.generated.d.ts.map