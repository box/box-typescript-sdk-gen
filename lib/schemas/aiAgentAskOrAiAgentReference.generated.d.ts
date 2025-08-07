import { AiAgentAsk } from './aiAgentAsk.generated.js';
import { AiAgentReference } from './aiAgentReference.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentAskOrAiAgentReference = AiAgentAsk | AiAgentReference;
export declare function serializeAiAgentAskOrAiAgentReference(val: any): SerializedData;
export declare function deserializeAiAgentAskOrAiAgentReference(val: SerializedData): AiAgentAskOrAiAgentReference;
//# sourceMappingURL=aiAgentAskOrAiAgentReference.generated.d.ts.map