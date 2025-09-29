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
import { serializeAiAgentBasicTextToolTextGen } from './aiAgentBasicTextToolTextGen.generated';
import { deserializeAiAgentBasicTextToolTextGen } from './aiAgentBasicTextToolTextGen.generated';
import { AiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated';
import { AiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated';
import { AiLlmEndpointParamsAws } from './aiLlmEndpointParamsAws.generated';
import { AiLlmEndpointParamsIbm } from './aiLlmEndpointParamsIbm.generated';
import { AiLlmEndpointParams } from './aiLlmEndpointParams.generated';
import { AiAgentBasicTextToolBase } from './aiAgentBasicTextToolBase.generated';
import { AiAgentBasicTextToolTextGen } from './aiAgentBasicTextToolTextGen.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
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
export function serializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(
  val: AiAgentLongTextToolTextGenEmbeddingsStrategyField,
): SerializedData {
  return { ['id']: val.id, ['num_tokens_per_chunk']: val.numTokensPerChunk };
}
export function deserializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(
  val: SerializedData,
): AiAgentLongTextToolTextGenEmbeddingsStrategyField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AiAgentLongTextToolTextGenEmbeddingsStrategyField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "AiAgentLongTextToolTextGenEmbeddingsStrategyField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  if (
    !(val.num_tokens_per_chunk == void 0) &&
    !sdIsNumber(val.num_tokens_per_chunk)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "num_tokens_per_chunk" of type "AiAgentLongTextToolTextGenEmbeddingsStrategyField"',
    });
  }
  const numTokensPerChunk: undefined | number =
    val.num_tokens_per_chunk == void 0 ? void 0 : val.num_tokens_per_chunk;
  return {
    id: id,
    numTokensPerChunk: numTokensPerChunk,
  } satisfies AiAgentLongTextToolTextGenEmbeddingsStrategyField;
}
export function serializeAiAgentLongTextToolTextGenEmbeddingsField(
  val: AiAgentLongTextToolTextGenEmbeddingsField,
): SerializedData {
  return {
    ['model']: val.model,
    ['strategy']:
      val.strategy == void 0
        ? val.strategy
        : serializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(
            val.strategy,
          ),
  };
}
export function deserializeAiAgentLongTextToolTextGenEmbeddingsField(
  val: SerializedData,
): AiAgentLongTextToolTextGenEmbeddingsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AiAgentLongTextToolTextGenEmbeddingsField"',
    });
  }
  if (!(val.model == void 0) && !sdIsString(val.model)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "model" of type "AiAgentLongTextToolTextGenEmbeddingsField"',
    });
  }
  const model: undefined | string = val.model == void 0 ? void 0 : val.model;
  const strategy:
    | undefined
    | AiAgentLongTextToolTextGenEmbeddingsStrategyField =
    val.strategy == void 0
      ? void 0
      : deserializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(
          val.strategy,
        );
  return {
    model: model,
    strategy: strategy,
  } satisfies AiAgentLongTextToolTextGenEmbeddingsField;
}
export function serializeAiAgentLongTextToolTextGen(
  val: AiAgentLongTextToolTextGen,
): SerializedData {
  const base: any = serializeAiAgentBasicTextToolTextGen(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentLongTextToolTextGen"',
    });
  }
  return {
    ...base,
    ...{
      ['embeddings']:
        val.embeddings == void 0
          ? val.embeddings
          : serializeAiAgentLongTextToolTextGenEmbeddingsField(val.embeddings),
    },
  };
}
export function deserializeAiAgentLongTextToolTextGen(
  val: SerializedData,
): AiAgentLongTextToolTextGen {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentLongTextToolTextGen"',
    });
  }
  const embeddings: undefined | AiAgentLongTextToolTextGenEmbeddingsField =
    val.embeddings == void 0
      ? void 0
      : deserializeAiAgentLongTextToolTextGenEmbeddingsField(val.embeddings);
  if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "system_message" of type "AiAgentLongTextToolTextGen"',
    });
  }
  const systemMessage: undefined | string =
    val.system_message == void 0 ? void 0 : val.system_message;
  if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "prompt_template" of type "AiAgentLongTextToolTextGen"',
    });
  }
  const promptTemplate: undefined | string =
    val.prompt_template == void 0 ? void 0 : val.prompt_template;
  if (!(val.model == void 0) && !sdIsString(val.model)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "model" of type "AiAgentLongTextToolTextGen"',
    });
  }
  const model: undefined | string = val.model == void 0 ? void 0 : val.model;
  if (
    !(val.num_tokens_for_completion == void 0) &&
    !sdIsNumber(val.num_tokens_for_completion)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "num_tokens_for_completion" of type "AiAgentLongTextToolTextGen"',
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
  } satisfies AiAgentLongTextToolTextGen;
}
