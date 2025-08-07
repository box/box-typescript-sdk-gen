import { AiItemBase } from './aiItemBase.generated.js';
import { AiAgentExtractOrAiAgentReference } from './aiAgentExtractOrAiAgentReference.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface AiExtract {
    /**
     * The prompt provided to a Large Language Model (LLM) in the request. The prompt can be up to 10000 characters long and it can be an XML or a JSON schema. */
    readonly prompt: string;
    /**
     * The items that LLM will process. Currently, you can use files only. */
    readonly items: readonly AiItemBase[];
    readonly aiAgent?: AiAgentExtractOrAiAgentReference;
    readonly rawData?: SerializedData;
}
export declare function serializeAiExtract(val: AiExtract): SerializedData;
export declare function deserializeAiExtract(val: SerializedData): AiExtract;
//# sourceMappingURL=aiExtract.generated.d.ts.map