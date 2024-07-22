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
export interface AiAgentBasicTextToolAsk {
  readonly model?: string;
  readonly systemMessage?: string;
  readonly promptTemplate?: string;
  readonly numTokensForCompletion?: number;
  readonly llmEndpointParams?: AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi;
}
export function serializeAiAgentBasicTextToolAsk(
  val: AiAgentBasicTextToolAsk
): SerializedData {
  return {
    ['model']: val.model == void 0 ? void 0 : val.model,
    ['system_message']:
      val.systemMessage == void 0 ? void 0 : val.systemMessage,
    ['prompt_template']:
      val.promptTemplate == void 0 ? void 0 : val.promptTemplate,
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
export function deserializeAiAgentBasicTextToolAsk(
  val: SerializedData
): AiAgentBasicTextToolAsk {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentBasicTextToolAsk"',
    });
  }
  if (!(val.model == void 0) && !sdIsString(val.model)) {
    throw new BoxSdkError({
      message: 'Expecting string for "model" of type "AiAgentBasicTextToolAsk"',
    });
  }
  const model: undefined | string = val.model == void 0 ? void 0 : val.model;
  if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "system_message" of type "AiAgentBasicTextToolAsk"',
    });
  }
  const systemMessage: undefined | string =
    val.system_message == void 0 ? void 0 : val.system_message;
  if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "prompt_template" of type "AiAgentBasicTextToolAsk"',
    });
  }
  const promptTemplate: undefined | string =
    val.prompt_template == void 0 ? void 0 : val.prompt_template;
  if (
    !(val.num_tokens_for_completion == void 0) &&
    !sdIsNumber(val.num_tokens_for_completion)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "num_tokens_for_completion" of type "AiAgentBasicTextToolAsk"',
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
    systemMessage: systemMessage,
    promptTemplate: promptTemplate,
    numTokensForCompletion: numTokensForCompletion,
    llmEndpointParams: llmEndpointParams,
  } satisfies AiAgentBasicTextToolAsk;
}
