import { AiResponseFull } from '../schemas/aiResponseFull.generated.js';
import { AiAsk } from '../schemas/aiAsk.generated.js';
import { AiResponse } from '../schemas/aiResponse.generated.js';
import { AiTextGen } from '../schemas/aiTextGen.generated.js';
import { AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated.js';
import { AiExtract } from '../schemas/aiExtract.generated.js';
import { AiExtractStructuredResponse } from '../schemas/aiExtractStructuredResponse.generated.js';
import { AiExtractStructured } from '../schemas/aiExtractStructured.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateAiAskOptionals {
    readonly headers: CreateAiAskHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateAiAskOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateAiAskOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateAiAskOptionalsInput {
    readonly headers?: CreateAiAskHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateAiTextGenOptionals {
    readonly headers: CreateAiTextGenHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateAiTextGenOptionalsInput {
    readonly headers?: CreateAiTextGenHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetAiAgentDefaultConfigOptionals {
    readonly headers: GetAiAgentDefaultConfigHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetAiAgentDefaultConfigOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetAiAgentDefaultConfigOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetAiAgentDefaultConfigOptionalsInput {
    readonly headers?: GetAiAgentDefaultConfigHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateAiExtractOptionals {
    readonly headers: CreateAiExtractHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateAiExtractOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateAiExtractOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateAiExtractOptionalsInput {
    readonly headers?: CreateAiExtractHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateAiExtractStructuredOptionals {
    readonly headers: CreateAiExtractStructuredHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateAiExtractStructuredOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateAiExtractStructuredOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateAiExtractStructuredOptionalsInput {
    readonly headers?: CreateAiExtractStructuredHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateAiAskHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateAiAskHeaders, 'extraHeaders'> & Partial<Pick<CreateAiAskHeaders, 'extraHeaders'>>);
}
export interface CreateAiAskHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateAiTextGenHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateAiTextGenHeaders, 'extraHeaders'> & Partial<Pick<CreateAiTextGenHeaders, 'extraHeaders'>>);
}
export interface CreateAiTextGenHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetAiAgentDefaultConfigQueryParamsModeField = 'ask' | 'text_gen' | 'extract' | 'extract_structured' | string;
export interface GetAiAgentDefaultConfigQueryParams {
    /**
     * The mode to filter the agent config to return. */
    readonly mode: GetAiAgentDefaultConfigQueryParamsModeField;
    /**
     * The ISO language code to return the agent config for.
     * If the language is not supported the default agent config is returned. */
    readonly language?: string;
    /**
     * The model to return the default agent config for. */
    readonly model?: string;
}
export declare class GetAiAgentDefaultConfigHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetAiAgentDefaultConfigHeaders, 'extraHeaders'> & Partial<Pick<GetAiAgentDefaultConfigHeaders, 'extraHeaders'>>);
}
export interface GetAiAgentDefaultConfigHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateAiExtractHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateAiExtractHeaders, 'extraHeaders'> & Partial<Pick<CreateAiExtractHeaders, 'extraHeaders'>>);
}
export interface CreateAiExtractHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateAiExtractStructuredHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateAiExtractStructuredHeaders, 'extraHeaders'> & Partial<Pick<CreateAiExtractStructuredHeaders, 'extraHeaders'>>);
}
export interface CreateAiExtractStructuredHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class AiManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<AiManager, 'networkSession' | 'createAiAsk' | 'createAiTextGen' | 'getAiAgentDefaultConfig' | 'createAiExtract' | 'createAiExtractStructured'> & Partial<Pick<AiManager, 'networkSession'>>);
    /**
     * Sends an AI request to supported LLMs and returns an answer specifically focused on the user's question given the provided context.
     * @param {AiAsk} requestBody Request body of createAiAsk method
     * @param {CreateAiAskOptionalsInput} optionalsInput
     * @returns {Promise<undefined | AiResponseFull>}
     */
    createAiAsk(requestBody: AiAsk, optionalsInput?: CreateAiAskOptionalsInput): Promise<undefined | AiResponseFull>;
    /**
     * Sends an AI request to supported Large Language Models (LLMs) and returns generated text based on the provided prompt.
     * @param {AiTextGen} requestBody Request body of createAiTextGen method
     * @param {CreateAiTextGenOptionalsInput} optionalsInput
     * @returns {Promise<AiResponse>}
     */
    createAiTextGen(requestBody: AiTextGen, optionalsInput?: CreateAiTextGenOptionalsInput): Promise<AiResponse>;
    /**
     * Get the AI agent default config.
     * @param {GetAiAgentDefaultConfigQueryParams} queryParams Query parameters of getAiAgentDefaultConfig method
     * @param {GetAiAgentDefaultConfigOptionalsInput} optionalsInput
     * @returns {Promise<AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen>}
     */
    getAiAgentDefaultConfig(queryParams: GetAiAgentDefaultConfigQueryParams, optionalsInput?: GetAiAgentDefaultConfigOptionalsInput): Promise<AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen>;
    /**
     * Sends an AI request to supported Large Language Models (LLMs) and extracts metadata in form of key-value pairs.
     * In this request, both the prompt and the output can be freeform.
     * Metadata template setup before sending the request is not required.
     * @param {AiExtract} requestBody Request body of createAiExtract method
     * @param {CreateAiExtractOptionalsInput} optionalsInput
     * @returns {Promise<AiResponse>}
     */
    createAiExtract(requestBody: AiExtract, optionalsInput?: CreateAiExtractOptionalsInput): Promise<AiResponse>;
    /**
     * Sends an AI request to supported Large Language Models (LLMs) and returns extracted metadata as a set of key-value pairs.
     * For this request, you either need a metadata template or a list of fields you want to extract.
     * Input is **either** a metadata template or a list of fields to ensure the structure.
     * To learn more about creating templates, see [Creating metadata templates in the Admin Console](https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates)
     * or use the [metadata template API](g://metadata/templates/create).
     * @param {AiExtractStructured} requestBody Request body of createAiExtractStructured method
     * @param {CreateAiExtractStructuredOptionalsInput} optionalsInput
     * @returns {Promise<AiExtractStructuredResponse>}
     */
    createAiExtractStructured(requestBody: AiExtractStructured, optionalsInput?: CreateAiExtractStructuredOptionalsInput): Promise<AiExtractStructuredResponse>;
}
export interface AiManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetAiAgentDefaultConfigQueryParamsModeField(val: GetAiAgentDefaultConfigQueryParamsModeField): SerializedData;
export declare function deserializeGetAiAgentDefaultConfigQueryParamsModeField(val: SerializedData): GetAiAgentDefaultConfigQueryParamsModeField;
//# sourceMappingURL=ai.generated.d.ts.map