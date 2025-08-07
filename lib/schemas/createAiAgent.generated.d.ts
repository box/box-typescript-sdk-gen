import { AiAgentAllowedEntity } from './aiAgentAllowedEntity.generated.js';
import { AiStudioAgentAsk } from './aiStudioAgentAsk.generated.js';
import { AiStudioAgentTextGen } from './aiStudioAgentTextGen.generated.js';
import { AiStudioAgentExtract } from './aiStudioAgentExtract.generated.js';
import { SerializedData } from '../serialization/json.js';
export type CreateAiAgentTypeField = 'ai_agent';
export declare class CreateAiAgent {
    /**
     * The type of agent used to handle queries. */
    readonly type: CreateAiAgentTypeField;
    /**
     * The name of the AI Agent. */
    readonly name: string;
    /**
     * The state of the AI Agent. Possible values are: `enabled`, `disabled`, and `enabled_for_selected_users`. */
    readonly accessState: string;
    /**
     * The icon reference of the AI Agent. It should have format of the URL `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/<file_name>`
     * where possible values of `file_name` are: `logo_boxAi.png`,`logo_stamp.png`,`logo_legal.png`,`logo_finance.png`,`logo_config.png`,`logo_handshake.png`,`logo_analytics.png`,`logo_classification.png`. */
    readonly iconReference?: string;
    /**
     * List of allowed users or groups. */
    readonly allowedEntities?: readonly AiAgentAllowedEntity[];
    readonly ask?: AiStudioAgentAsk;
    readonly textGen?: AiStudioAgentTextGen;
    readonly extract?: AiStudioAgentExtract;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<CreateAiAgent, 'type'> & Partial<Pick<CreateAiAgent, 'type'>>);
}
export interface CreateAiAgentInput {
    /**
     * The type of agent used to handle queries. */
    readonly type?: CreateAiAgentTypeField;
    /**
     * The name of the AI Agent. */
    readonly name: string;
    /**
     * The state of the AI Agent. Possible values are: `enabled`, `disabled`, and `enabled_for_selected_users`. */
    readonly accessState: string;
    /**
     * The icon reference of the AI Agent. It should have format of the URL `https://cdn01.boxcdn.net/app-assets/aistudio/avatars/<file_name>`
     * where possible values of `file_name` are: `logo_boxAi.png`,`logo_stamp.png`,`logo_legal.png`,`logo_finance.png`,`logo_config.png`,`logo_handshake.png`,`logo_analytics.png`,`logo_classification.png`. */
    readonly iconReference?: string;
    /**
     * List of allowed users or groups. */
    readonly allowedEntities?: readonly AiAgentAllowedEntity[];
    readonly ask?: AiStudioAgentAsk;
    readonly textGen?: AiStudioAgentTextGen;
    readonly extract?: AiStudioAgentExtract;
    readonly rawData?: SerializedData;
}
export declare function serializeCreateAiAgentTypeField(val: CreateAiAgentTypeField): SerializedData;
export declare function deserializeCreateAiAgentTypeField(val: SerializedData): CreateAiAgentTypeField;
export declare function serializeCreateAiAgent(val: CreateAiAgent): SerializedData;
export declare function deserializeCreateAiAgent(val: SerializedData): CreateAiAgent;
export declare function serializeCreateAiAgentInput(val: CreateAiAgentInput): SerializedData;
export declare function deserializeCreateAiAgentInput(val: SerializedData): CreateAiAgentInput;
//# sourceMappingURL=createAiAgent.generated.d.ts.map