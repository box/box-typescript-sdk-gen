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
import { serializeAiAgentLongTextToolEmbeddingsField } from './aiAgentLongTextTool.generated';
import { deserializeAiAgentLongTextToolEmbeddingsField } from './aiAgentLongTextTool.generated';
import { serializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated';
import { deserializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated';
import { AiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated';
import { AiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated';
import { AiLlmEndpointParamsAws } from './aiLlmEndpointParamsAws.generated';
import { AiLlmEndpointParamsIbm } from './aiLlmEndpointParamsIbm.generated';
import { AiLlmEndpointParams } from './aiLlmEndpointParams.generated';
import { AiAgentBasicTextToolBase } from './aiAgentBasicTextToolBase.generated';
import { AiAgentBasicTextTool } from './aiAgentBasicTextTool.generated';
import { AiAgentLongTextToolEmbeddingsField } from './aiAgentLongTextTool.generated';
import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type AiStudioAgentLongTextTool = AiAgentLongTextTool & {
  /**
   * True if system message contains custom instructions placeholder, false otherwise. */
  readonly isCustomInstructionsIncluded?: boolean;
};
export function serializeAiStudioAgentLongTextTool(
  val: AiStudioAgentLongTextTool,
): SerializedData {
  const base: any = serializeAiAgentLongTextTool(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiStudioAgentLongTextTool"',
    });
  }
  return {
    ...base,
    ...{
      ['is_custom_instructions_included']: val.isCustomInstructionsIncluded,
    },
  };
}
export function deserializeAiStudioAgentLongTextTool(
  val: SerializedData,
): AiStudioAgentLongTextTool {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiStudioAgentLongTextTool"',
    });
  }
  if (
    !(val.is_custom_instructions_included == void 0) &&
    !sdIsBoolean(val.is_custom_instructions_included)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_custom_instructions_included" of type "AiStudioAgentLongTextTool"',
    });
  }
  const isCustomInstructionsIncluded: undefined | boolean =
    val.is_custom_instructions_included == void 0
      ? void 0
      : val.is_custom_instructions_included;
  const embeddings: undefined | AiAgentLongTextToolEmbeddingsField =
    val.embeddings == void 0
      ? void 0
      : deserializeAiAgentLongTextToolEmbeddingsField(val.embeddings);
  if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "system_message" of type "AiStudioAgentLongTextTool"',
    });
  }
  const systemMessage: undefined | string =
    val.system_message == void 0 ? void 0 : val.system_message;
  if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "prompt_template" of type "AiStudioAgentLongTextTool"',
    });
  }
  const promptTemplate: undefined | string =
    val.prompt_template == void 0 ? void 0 : val.prompt_template;
  if (!(val.model == void 0) && !sdIsString(val.model)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "model" of type "AiStudioAgentLongTextTool"',
    });
  }
  const model: undefined | string = val.model == void 0 ? void 0 : val.model;
  if (
    !(val.num_tokens_for_completion == void 0) &&
    !sdIsNumber(val.num_tokens_for_completion)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentLongTextTool"',
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
    isCustomInstructionsIncluded: isCustomInstructionsIncluded,
    embeddings: embeddings,
    systemMessage: systemMessage,
    promptTemplate: promptTemplate,
    model: model,
    numTokensForCompletion: numTokensForCompletion,
    llmEndpointParams: llmEndpointParams,
  } satisfies AiStudioAgentLongTextTool;
}
