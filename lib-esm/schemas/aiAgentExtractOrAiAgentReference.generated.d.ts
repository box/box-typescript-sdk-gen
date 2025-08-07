import { AiAgentExtract } from './aiAgentExtract.generated.js';
import { AiAgentReference } from './aiAgentReference.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentExtractOrAiAgentReference = AiAgentExtract | AiAgentReference;
export declare function serializeAiAgentExtractOrAiAgentReference(val: any): SerializedData;
export declare function deserializeAiAgentExtractOrAiAgentReference(val: SerializedData): AiAgentExtractOrAiAgentReference;
