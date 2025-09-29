import { serializeAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated';
import { deserializeAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated';
import { serializeAiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated';
import { deserializeAiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated';
import { serializeAiLlmEndpointParamsAws } from './aiLlmEndpointParamsAws.generated';
import { deserializeAiLlmEndpointParamsAws } from './aiLlmEndpointParamsAws.generated';
import { serializeAiLlmEndpointParamsIbm } from './aiLlmEndpointParamsIbm.generated';
import { deserializeAiLlmEndpointParamsIbm } from './aiLlmEndpointParamsIbm.generated';
import { serializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated';
import { deserializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated';
import { serializeAiAgentBasicTextToolBase } from './aiAgentBasicTextToolBase.generated';
import { deserializeAiAgentBasicTextToolBase } from './aiAgentBasicTextToolBase.generated';
import { serializeAiAgentBasicTextTool } from './aiAgentBasicTextTool.generated';
import { deserializeAiAgentBasicTextTool } from './aiAgentBasicTextTool.generated';
import { AiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated';
import { AiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated';
import { AiLlmEndpointParamsAws } from './aiLlmEndpointParamsAws.generated';
import { AiLlmEndpointParamsIbm } from './aiLlmEndpointParamsIbm.generated';
import { AiLlmEndpointParams } from './aiLlmEndpointParams.generated';
import { AiAgentBasicTextToolBase } from './aiAgentBasicTextToolBase.generated';
import { AiAgentBasicTextTool } from './aiAgentBasicTextTool.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
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
export function serializeAiAgentLongTextToolEmbeddingsStrategyField(
  val: AiAgentLongTextToolEmbeddingsStrategyField,
): SerializedData {
  return { ['id']: val.id, ['num_tokens_per_chunk']: val.numTokensPerChunk };
}
export function deserializeAiAgentLongTextToolEmbeddingsStrategyField(
  val: SerializedData,
): AiAgentLongTextToolEmbeddingsStrategyField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AiAgentLongTextToolEmbeddingsStrategyField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "AiAgentLongTextToolEmbeddingsStrategyField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  if (
    !(val.num_tokens_per_chunk == void 0) &&
    !sdIsNumber(val.num_tokens_per_chunk)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "num_tokens_per_chunk" of type "AiAgentLongTextToolEmbeddingsStrategyField"',
    });
  }
  const numTokensPerChunk: undefined | number =
    val.num_tokens_per_chunk == void 0 ? void 0 : val.num_tokens_per_chunk;
  return {
    id: id,
    numTokensPerChunk: numTokensPerChunk,
  } satisfies AiAgentLongTextToolEmbeddingsStrategyField;
}
export function serializeAiAgentLongTextToolEmbeddingsField(
  val: AiAgentLongTextToolEmbeddingsField,
): SerializedData {
  return {
    ['model']: val.model,
    ['strategy']:
      val.strategy == void 0
        ? val.strategy
        : serializeAiAgentLongTextToolEmbeddingsStrategyField(val.strategy),
  };
}
export function deserializeAiAgentLongTextToolEmbeddingsField(
  val: SerializedData,
): AiAgentLongTextToolEmbeddingsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentLongTextToolEmbeddingsField"',
    });
  }
  if (!(val.model == void 0) && !sdIsString(val.model)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "model" of type "AiAgentLongTextToolEmbeddingsField"',
    });
  }
  const model: undefined | string = val.model == void 0 ? void 0 : val.model;
  const strategy: undefined | AiAgentLongTextToolEmbeddingsStrategyField =
    val.strategy == void 0
      ? void 0
      : deserializeAiAgentLongTextToolEmbeddingsStrategyField(val.strategy);
  return {
    model: model,
    strategy: strategy,
  } satisfies AiAgentLongTextToolEmbeddingsField;
}
export function serializeAiAgentLongTextTool(
  val: AiAgentLongTextTool,
): SerializedData {
  const base: any = serializeAiAgentBasicTextTool(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentLongTextTool"',
    });
  }
  return {
    ...base,
    ...{
      ['embeddings']:
        val.embeddings == void 0
          ? val.embeddings
          : serializeAiAgentLongTextToolEmbeddingsField(val.embeddings),
    },
  };
}
export function deserializeAiAgentLongTextTool(
  val: SerializedData,
): AiAgentLongTextTool {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentLongTextTool"',
    });
  }
  const embeddings: undefined | AiAgentLongTextToolEmbeddingsField =
    val.embeddings == void 0
      ? void 0
      : deserializeAiAgentLongTextToolEmbeddingsField(val.embeddings);
  if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "system_message" of type "AiAgentLongTextTool"',
    });
  }
  const systemMessage: undefined | string =
    val.system_message == void 0 ? void 0 : val.system_message;
  if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "prompt_template" of type "AiAgentLongTextTool"',
    });
  }
  const promptTemplate: undefined | string =
    val.prompt_template == void 0 ? void 0 : val.prompt_template;
  if (!(val.model == void 0) && !sdIsString(val.model)) {
    throw new BoxSdkError({
      message: 'Expecting string for "model" of type "AiAgentLongTextTool"',
    });
  }
  const model: undefined | string = val.model == void 0 ? void 0 : val.model;
  if (
    !(val.num_tokens_for_completion == void 0) &&
    !sdIsNumber(val.num_tokens_for_completion)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "num_tokens_for_completion" of type "AiAgentLongTextTool"',
    });
  }
  const numTokensForCompletion: undefined | number =
    val.num_tokens_for_completion == void 0
      ? void 0
      : val.num_tokens_for_completion;
  const llmEndpointParams: undefined | AiLlmEndpointParams =
    val.llm_endpoint_params == void 0
      ? void 0
      : deserializeAiLlmEndpointParams(val.llm_endpoint_params);
  return {
    embeddings: embeddings,
    systemMessage: systemMessage,
    promptTemplate: promptTemplate,
    model: model,
    numTokensForCompletion: numTokensForCompletion,
    llmEndpointParams: llmEndpointParams,
  } satisfies AiAgentLongTextTool;
}
