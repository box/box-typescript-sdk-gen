import { UserBase } from './userBase.generated.js';
import { AiAgentAllowedEntity } from './aiAgentAllowedEntity.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type AiSingleAgentResponseTypeField = 'ai_agent';
export interface AiSingleAgentResponse {
    /**
     * The unique identifier of the AI Agent. */
    readonly id: string;
    /**
     * The type of agent used to handle queries. */
    readonly type?: AiSingleAgentResponseTypeField;
    /**
     * The provider of the AI Agent. */
    readonly origin: string;
    /**
     * The name of the AI Agent. */
    readonly name: string;
    /**
     * The state of the AI Agent. Possible values are: `enabled`, `disabled`, and `enabled_for_selected_users`. */
    readonly accessState: string;
    /**
     * The user who created this agent. */
    readonly createdBy?: UserBase;
    /**
     * The ISO date-time formatted timestamp of when this AI agent was created. */
    readonly createdAt?: DateTime;
    /**
     * The user who most recently modified this agent. */
    readonly modifiedBy?: UserBase;
    /**
     * The ISO date-time formatted timestamp of when this AI agent was recently modified. */
    readonly modifiedAt?: DateTime;
    /**
     * The icon reference of the AI Agent. */
    readonly iconReference?: string;
    /**
     * List of allowed users or groups. */
    readonly allowedEntities?: readonly AiAgentAllowedEntity[];
    readonly rawData?: SerializedData;
}
export declare function serializeAiSingleAgentResponseTypeField(val: AiSingleAgentResponseTypeField): SerializedData;
export declare function deserializeAiSingleAgentResponseTypeField(val: SerializedData): AiSingleAgentResponseTypeField;
export declare function serializeAiSingleAgentResponse(val: AiSingleAgentResponse): SerializedData;
export declare function deserializeAiSingleAgentResponse(val: SerializedData): AiSingleAgentResponse;
//# sourceMappingURL=aiSingleAgentResponse.generated.d.ts.map