import { DocGenTemplateBaseV2025R0 } from '../schemas/v2025R0/docGenTemplateBaseV2025R0.generated.js';
import { BoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated.js';
import { DocGenTemplateCreateRequestV2025R0 } from '../schemas/v2025R0/docGenTemplateCreateRequestV2025R0.generated.js';
import { DocGenTemplatesV2025R0 } from '../schemas/v2025R0/docGenTemplatesV2025R0.generated.js';
import { DocGenTemplateV2025R0 } from '../schemas/v2025R0/docGenTemplateV2025R0.generated.js';
import { DocGenTagsV2025R0 } from '../schemas/v2025R0/docGenTagsV2025R0.generated.js';
import { DocGenJobsV2025R0 } from '../schemas/v2025R0/docGenJobsV2025R0.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class CreateDocgenTemplateV2025R0Optionals {
    readonly headers: CreateDocgenTemplateV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateDocgenTemplateV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateDocgenTemplateV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateDocgenTemplateV2025R0OptionalsInput {
    readonly headers?: CreateDocgenTemplateV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteDocgenTemplateByIdV2025R0Optionals {
    readonly headers: DeleteDocgenTemplateByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteDocgenTemplateByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteDocgenTemplateByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteDocgenTemplateByIdV2025R0OptionalsInput {
    readonly headers?: DeleteDocgenTemplateByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetDocgenTemplateByIdV2025R0Optionals {
    readonly headers: GetDocgenTemplateByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetDocgenTemplateByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetDocgenTemplateByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface GetDocgenTemplateByIdV2025R0OptionalsInput {
    readonly headers?: GetDocgenTemplateByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetDocgenTemplateTagsV2025R0Optionals {
    readonly queryParams: GetDocgenTemplateTagsV2025R0QueryParams;
    readonly headers: GetDocgenTemplateTagsV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetDocgenTemplateTagsV2025R0Optionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetDocgenTemplateTagsV2025R0Optionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetDocgenTemplateTagsV2025R0OptionalsInput {
    readonly queryParams?: GetDocgenTemplateTagsV2025R0QueryParams;
    readonly headers?: GetDocgenTemplateTagsV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetDocgenTemplateJobByIdV2025R0Optionals {
    readonly queryParams: GetDocgenTemplateJobByIdV2025R0QueryParams;
    readonly headers: GetDocgenTemplateJobByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetDocgenTemplateJobByIdV2025R0Optionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetDocgenTemplateJobByIdV2025R0Optionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetDocgenTemplateJobByIdV2025R0OptionalsInput {
    readonly queryParams?: GetDocgenTemplateJobByIdV2025R0QueryParams;
    readonly headers?: GetDocgenTemplateJobByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateDocgenTemplateV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateDocgenTemplateV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<CreateDocgenTemplateV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface CreateDocgenTemplateV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetDocgenTemplatesV2025R0QueryParams {
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
export declare class GetDocgenTemplatesV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDocgenTemplatesV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetDocgenTemplatesV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetDocgenTemplatesV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteDocgenTemplateByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteDocgenTemplateByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<DeleteDocgenTemplateByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface DeleteDocgenTemplateByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetDocgenTemplateByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDocgenTemplateByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetDocgenTemplateByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetDocgenTemplateByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetDocgenTemplateTagsV2025R0QueryParams {
    /**
     * Id of template version. */
    readonly templateVersionId?: string;
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
export declare class GetDocgenTemplateTagsV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDocgenTemplateTagsV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetDocgenTemplateTagsV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetDocgenTemplateTagsV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetDocgenTemplateJobByIdV2025R0QueryParams {
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
export declare class GetDocgenTemplateJobByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDocgenTemplateJobByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetDocgenTemplateJobByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetDocgenTemplateJobByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DocgenTemplateManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<DocgenTemplateManager, 'networkSession' | 'createDocgenTemplateV2025R0' | 'getDocgenTemplatesV2025R0' | 'deleteDocgenTemplateByIdV2025R0' | 'getDocgenTemplateByIdV2025R0' | 'getDocgenTemplateTagsV2025R0' | 'getDocgenTemplateJobByIdV2025R0'> & Partial<Pick<DocgenTemplateManager, 'networkSession'>>);
    /**
     * Marks a file as a Box Doc Gen template.
     * @param {DocGenTemplateCreateRequestV2025R0} requestBody Request body of createDocgenTemplateV2025R0 method
     * @param {CreateDocgenTemplateV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<DocGenTemplateBaseV2025R0>}
     */
    createDocgenTemplateV2025R0(requestBody: DocGenTemplateCreateRequestV2025R0, optionalsInput?: CreateDocgenTemplateV2025R0OptionalsInput): Promise<DocGenTemplateBaseV2025R0>;
    /**
     * Lists Box Doc Gen templates on which the user is a collaborator.
     * @param {GetDocgenTemplatesV2025R0QueryParams} queryParams Query parameters of getDocgenTemplatesV2025R0 method
     * @param {GetDocgenTemplatesV2025R0HeadersInput} headersInput Headers of getDocgenTemplatesV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<DocGenTemplatesV2025R0>}
     */
    getDocgenTemplatesV2025R0(queryParams?: GetDocgenTemplatesV2025R0QueryParams, headersInput?: GetDocgenTemplatesV2025R0HeadersInput, cancellationToken?: CancellationToken): Promise<DocGenTemplatesV2025R0>;
    /**
       * Unmarks file as Box Doc Gen template.
       * @param {string} templateId ID of the file which will no longer be marked as a Box Doc Gen template.
      Example: "123"
       * @param {DeleteDocgenTemplateByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteDocgenTemplateByIdV2025R0(templateId: string, optionalsInput?: DeleteDocgenTemplateByIdV2025R0OptionalsInput): Promise<undefined>;
    /**
       * Lists details of a specific Box Doc Gen template.
       * @param {string} templateId The ID of a Box Doc Gen template.
      Example: 123
       * @param {GetDocgenTemplateByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenTemplateV2025R0>}
       */
    getDocgenTemplateByIdV2025R0(templateId: string, optionalsInput?: GetDocgenTemplateByIdV2025R0OptionalsInput): Promise<DocGenTemplateV2025R0>;
    /**
       * Lists all tags in a Box Doc Gen template.
       * @param {string} templateId ID of template.
      Example: 123
       * @param {GetDocgenTemplateTagsV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenTagsV2025R0>}
       */
    getDocgenTemplateTagsV2025R0(templateId: string, optionalsInput?: GetDocgenTemplateTagsV2025R0OptionalsInput): Promise<DocGenTagsV2025R0>;
    /**
       * Lists the users jobs which use this template.
       * @param {string} templateId Id of template to fetch jobs for.
      Example: 123
       * @param {GetDocgenTemplateJobByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenJobsV2025R0>}
       */
    getDocgenTemplateJobByIdV2025R0(templateId: string, optionalsInput?: GetDocgenTemplateJobByIdV2025R0OptionalsInput): Promise<DocGenJobsV2025R0>;
}
export interface DocgenTemplateManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
