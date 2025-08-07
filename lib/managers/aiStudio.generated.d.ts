import { CreateAiAgentInput } from '../schemas/createAiAgent.generated.js';
import { AiMultipleAgentResponse } from '../schemas/aiMultipleAgentResponse.generated.js';
import { AiSingleAgentResponseFull } from '../schemas/aiSingleAgentResponseFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class CreateAiAgentOptionals {
    readonly headers: CreateAiAgentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateAiAgentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateAiAgentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateAiAgentOptionalsInput {
    readonly headers?: CreateAiAgentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateAiAgentByIdOptionals {
    readonly headers: UpdateAiAgentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateAiAgentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateAiAgentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateAiAgentByIdOptionalsInput {
    readonly headers?: UpdateAiAgentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetAiAgentByIdOptionals {
    readonly queryParams: GetAiAgentByIdQueryParams;
    readonly headers: GetAiAgentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetAiAgentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetAiAgentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetAiAgentByIdOptionalsInput {
    readonly queryParams?: GetAiAgentByIdQueryParams;
    readonly headers?: GetAiAgentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteAiAgentByIdOptionals {
    readonly headers: DeleteAiAgentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteAiAgentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteAiAgentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteAiAgentByIdOptionalsInput {
    readonly headers?: DeleteAiAgentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetAiAgentsQueryParams {
    /**
     * The mode to filter the agent config to return. Possible values are: `ask`, `text_gen`, and `extract`. */
    readonly mode?: readonly string[];
    /**
     * The fields to return in the response. */
    readonly fields?: readonly string[];
    /**
     * The state of the agents to return. Possible values are: `enabled`, `disabled` and `enabled_for_selected_users`. */
    readonly agentState?: readonly string[];
    /**
     * Whether to include the Box default agents in the response. */
    readonly includeBoxDefault?: boolean;
    /**
     * Defines the position marker at which to begin returning results. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetAiAgentsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetAiAgentsHeaders, 'extraHeaders'> & Partial<Pick<GetAiAgentsHeaders, 'extraHeaders'>>);
}
export interface GetAiAgentsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateAiAgentHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateAiAgentHeaders, 'extraHeaders'> & Partial<Pick<CreateAiAgentHeaders, 'extraHeaders'>>);
}
export interface CreateAiAgentHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UpdateAiAgentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateAiAgentByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateAiAgentByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateAiAgentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetAiAgentByIdQueryParams {
    /**
     * The fields to return in the response. */
    readonly fields?: readonly string[];
}
export declare class GetAiAgentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetAiAgentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetAiAgentByIdHeaders, 'extraHeaders'>>);
}
export interface GetAiAgentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteAiAgentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteAiAgentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteAiAgentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteAiAgentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class AiStudioManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<AiStudioManager, 'networkSession' | 'getAiAgents' | 'createAiAgent' | 'updateAiAgentById' | 'getAiAgentById' | 'deleteAiAgentById'> & Partial<Pick<AiStudioManager, 'networkSession'>>);
    /**
     * Lists AI agents based on the provided parameters.
     * @param {GetAiAgentsQueryParams} queryParams Query parameters of getAiAgents method
     * @param {GetAiAgentsHeadersInput} headersInput Headers of getAiAgents method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<AiMultipleAgentResponse>}
     */
    getAiAgents(queryParams?: GetAiAgentsQueryParams, headersInput?: GetAiAgentsHeadersInput, cancellationToken?: CancellationToken): Promise<AiMultipleAgentResponse>;
    /**
     * Creates an AI agent. At least one of the following capabilities must be provided: `ask`, `text_gen`, `extract`.
     * @param {CreateAiAgentInput} requestBodyInput Request body of createAiAgent method
     * @param {CreateAiAgentOptionalsInput} optionalsInput
     * @returns {Promise<AiSingleAgentResponseFull>}
     */
    createAiAgent(requestBodyInput: CreateAiAgentInput, optionalsInput?: CreateAiAgentOptionalsInput): Promise<AiSingleAgentResponseFull>;
    /**
       * Updates an AI agent.
       * @param {string} agentId The ID of the agent to update.
      Example: "1234"
       * @param {CreateAiAgentInput} requestBodyInput Request body of updateAiAgentById method
       * @param {UpdateAiAgentByIdOptionalsInput} optionalsInput
       * @returns {Promise<AiSingleAgentResponseFull>}
       */
    updateAiAgentById(agentId: string, requestBodyInput: CreateAiAgentInput, optionalsInput?: UpdateAiAgentByIdOptionalsInput): Promise<AiSingleAgentResponseFull>;
    /**
       * Gets an AI Agent using the `agent_id` parameter.
       * @param {string} agentId The agent id to get.
      Example: "1234"
       * @param {GetAiAgentByIdOptionalsInput} optionalsInput
       * @returns {Promise<AiSingleAgentResponseFull>}
       */
    getAiAgentById(agentId: string, optionalsInput?: GetAiAgentByIdOptionalsInput): Promise<AiSingleAgentResponseFull>;
    /**
       * Deletes an AI agent using the provided parameters.
       * @param {string} agentId The ID of the agent to delete.
      Example: "1234"
       * @param {DeleteAiAgentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteAiAgentById(agentId: string, optionalsInput?: DeleteAiAgentByIdOptionalsInput): Promise<undefined>;
}
export interface AiStudioManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=aiStudio.generated.d.ts.map