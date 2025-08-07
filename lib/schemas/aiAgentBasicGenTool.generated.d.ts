import { AiAgentLongTextToolTextGen } from './aiAgentLongTextToolTextGen.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentBasicGenTool = AiAgentLongTextToolTextGen & {
    /**
     * How the content should be included in a request to the LLM.
     * Input for `{content}` is optional, depending on the use. */
    readonly contentTemplate?: string;
};
export declare function serializeAiAgentBasicGenTool(val: AiAgentBasicGenTool): SerializedData;
export declare function deserializeAiAgentBasicGenTool(val: SerializedData): AiAgentBasicGenTool;
//# sourceMappingURL=aiAgentBasicGenTool.generated.d.ts.map