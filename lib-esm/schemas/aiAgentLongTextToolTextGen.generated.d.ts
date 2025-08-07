import { AiAgentBasicTextToolTextGen } from './aiAgentBasicTextToolTextGen.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface AiAgentLongTextToolTextGenEmbeddingsStrategyField {
    /**
     * The strategy used for the AI agent for calculating embeddings. */
    readonly id?: string;
    /**
     * The number of tokens per chunk. */
    readonly numTokensPerChunk?: number;
    readonly rawData?: SerializedData;
}
export interface AiAgentLongTextToolTextGenEmbeddingsField {
    /**
     * The model used for the AI agent for calculating embeddings. */
    readonly model?: string;
    readonly strategy?: AiAgentLongTextToolTextGenEmbeddingsStrategyField;
    readonly rawData?: SerializedData;
}
export type AiAgentLongTextToolTextGen = AiAgentBasicTextToolTextGen & {
    readonly embeddings?: AiAgentLongTextToolTextGenEmbeddingsField;
};
export declare function serializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(val: AiAgentLongTextToolTextGenEmbeddingsStrategyField): SerializedData;
export declare function deserializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(val: SerializedData): AiAgentLongTextToolTextGenEmbeddingsStrategyField;
export declare function serializeAiAgentLongTextToolTextGenEmbeddingsField(val: AiAgentLongTextToolTextGenEmbeddingsField): SerializedData;
export declare function deserializeAiAgentLongTextToolTextGenEmbeddingsField(val: SerializedData): AiAgentLongTextToolTextGenEmbeddingsField;
export declare function serializeAiAgentLongTextToolTextGen(val: AiAgentLongTextToolTextGen): SerializedData;
export declare function deserializeAiAgentLongTextToolTextGen(val: SerializedData): AiAgentLongTextToolTextGen;
