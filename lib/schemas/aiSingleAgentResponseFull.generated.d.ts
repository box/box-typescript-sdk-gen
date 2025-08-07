import { AiSingleAgentResponse } from './aiSingleAgentResponse.generated.js';
import { AiStudioAgentAskResponse } from './aiStudioAgentAskResponse.generated.js';
import { AiStudioAgentTextGenResponse } from './aiStudioAgentTextGenResponse.generated.js';
import { AiStudioAgentExtractResponse } from './aiStudioAgentExtractResponse.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiSingleAgentResponseFull = AiSingleAgentResponse & {
    readonly ask?: AiStudioAgentAskResponse;
    readonly textGen?: AiStudioAgentTextGenResponse;
    readonly extract?: AiStudioAgentExtractResponse;
};
export declare function serializeAiSingleAgentResponseFull(val: AiSingleAgentResponseFull): SerializedData;
export declare function deserializeAiSingleAgentResponseFull(val: SerializedData): AiSingleAgentResponseFull;
//# sourceMappingURL=aiSingleAgentResponseFull.generated.d.ts.map