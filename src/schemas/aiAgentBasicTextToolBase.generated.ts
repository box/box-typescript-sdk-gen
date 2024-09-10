import { serializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js';
import { deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js';
import { AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface AiAgentBasicTextToolBase {
  /**
   * The model used for the AI Agent for basic text. For specific model values, see the [available models list](g://box-ai/supported-models). */
  readonly model?: string;
  /**
   * The number of tokens for completion. */
  readonly numTokensForCompletion?: number;
  /**
   * The parameters for the LLM endpoint specific to OpenAI / Google models. */
  readonly llmEndpointParams?: AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi;
}
export function serializeAiAgentBasicTextToolBase(
  val: AiAgentBasicTextToolBase
): SerializedData {
  return {
    ['model']: val.model == void 0 ? void 0 : val.model,
    ['num_tokens_for_completion']:
      val.numTokensForCompletion == void 0
        ? void 0
        : val.numTokensForCompletion,
    ['llm_endpoint_params']:
      val.llmEndpointParams == void 0
        ? void 0
        : serializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi(
            val.llmEndpointParams
          ),
  };
}
export function deserializeAiAgentBasicTextToolBase(
  val: SerializedData
): AiAgentBasicTextToolBase {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentBasicTextToolBase"',
    });
  }
  if (!(val.model == void 0) && !sdIsString(val.model)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "model" of type "AiAgentBasicTextToolBase"',
    });
  }
  const model: undefined | string = val.model == void 0 ? void 0 : val.model;
  if (
    !(val.num_tokens_for_completion == void 0) &&
    !sdIsNumber(val.num_tokens_for_completion)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "num_tokens_for_completion" of type "AiAgentBasicTextToolBase"',
    });
  }
  const numTokensForCompletion: undefined | number =
    val.num_tokens_for_completion == void 0
      ? void 0
      : val.num_tokens_for_completion;
  const llmEndpointParams:
    | undefined
    | AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi =
    val.llm_endpoint_params == void 0
      ? void 0
      : deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi(
          val.llm_endpoint_params
        );
  return {
    model: model,
    numTokensForCompletion: numTokensForCompletion,
    llmEndpointParams: llmEndpointParams,
  } satisfies AiAgentBasicTextToolBase;
}
