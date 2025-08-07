import { AiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface AiAgentLongTextToolEmbeddingsStrategyField {
    /**
     * The strategy used for the AI agent for calculating embeddings. */
    readonly id?: string;
    /**
     * The number of tokens per chunk. */
    readonly numTokensPerChunk?: number;
    readonly rawData?: SerializedData;
}
export interface AiAgentLongTextToolEmbeddingsField {
    /**
     * The model used for the AI agent for calculating embeddings. */
    readonly model?: string;
    readonly strategy?: AiAgentLongTextToolEmbeddingsStrategyField;
    readonly rawData?: SerializedData;
}
export type AiAgentLongTextTool = AiAgentBasicTextTool & {
    readonly embeddings?: AiAgentLongTextToolEmbeddingsField;
};
export declare function serializeAiAgentLongTextToolEmbeddingsStrategyField(val: AiAgentLongTextToolEmbeddingsStrategyField): SerializedData;
export declare function deserializeAiAgentLongTextToolEmbeddingsStrategyField(val: SerializedData): AiAgentLongTextToolEmbeddingsStrategyField;
export declare function serializeAiAgentLongTextToolEmbeddingsField(val: AiAgentLongTextToolEmbeddingsField): SerializedData;
export declare function deserializeAiAgentLongTextToolEmbeddingsField(val: SerializedData): AiAgentLongTextToolEmbeddingsField;
export declare function serializeAiAgentLongTextTool(val: AiAgentLongTextTool): SerializedData;
export declare function deserializeAiAgentLongTextTool(val: SerializedData): AiAgentLongTextTool;
