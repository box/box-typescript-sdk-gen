import { AiAgentReference } from './aiAgentReference.generated.js';
import { AiAgentTextGen } from './aiAgentTextGen.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentReferenceOrAiAgentTextGen = AiAgentReference | AiAgentTextGen;
export declare function serializeAiAgentReferenceOrAiAgentTextGen(val: any): SerializedData;
export declare function deserializeAiAgentReferenceOrAiAgentTextGen(val: SerializedData): AiAgentReferenceOrAiAgentTextGen;
//# sourceMappingURL=aiAgentReferenceOrAiAgentTextGen.generated.d.ts.map