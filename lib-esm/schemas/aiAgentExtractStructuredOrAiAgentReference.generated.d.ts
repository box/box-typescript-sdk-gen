import { AiAgentExtractStructured } from './aiAgentExtractStructured.generated.js';
import { AiAgentReference } from './aiAgentReference.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentExtractStructuredOrAiAgentReference = AiAgentExtractStructured | AiAgentReference;
export declare function serializeAiAgentExtractStructuredOrAiAgentReference(val: any): SerializedData;
export declare function deserializeAiAgentExtractStructuredOrAiAgentReference(val: SerializedData): AiAgentExtractStructuredOrAiAgentReference;
