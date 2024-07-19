import { serializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js';
import { deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js';
import { serializeAiAgentBasicTextToolTextGen } from './aiAgentBasicTextToolTextGen.generated.js';
import { deserializeAiAgentBasicTextToolTextGen } from './aiAgentBasicTextToolTextGen.generated.js';
import { serializeAiAgentLongTextToolEmbeddingsField } from './aiAgentLongTextTool.generated.js';
import { deserializeAiAgentLongTextToolEmbeddingsField } from './aiAgentLongTextTool.generated.js';
import { serializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { deserializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js';
import { AiAgentBasicTextToolTextGen } from './aiAgentBasicTextToolTextGen.generated.js';
import { AiAgentLongTextToolEmbeddingsField } from './aiAgentLongTextTool.generated.js';
import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiAgentBasicGenTool = AiAgentLongTextTool & {
  readonly contentTemplate?: string;
};
export function serializeAiAgentBasicGenTool(
  val: AiAgentBasicGenTool
): SerializedData {
  const base: any = serializeAiAgentLongTextTool(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentBasicGenTool"',
    });
  }
  return {
    ...base,
    ...{
      ['content_template']:
        val.contentTemplate == void 0 ? void 0 : val.contentTemplate,
    },
  };
}
export function deserializeAiAgentBasicGenTool(
  val: SerializedData
): AiAgentBasicGenTool {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentBasicGenTool"',
    });
  }
  if (!(val.content_template == void 0) && !sdIsString(val.content_template)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "content_template" of type "AiAgentBasicGenTool"',
    });
  }
  const contentTemplate: undefined | string =
    val.content_template == void 0 ? void 0 : val.content_template;
  const embeddings: undefined | AiAgentLongTextToolEmbeddingsField =
    val.embeddings == void 0
      ? void 0
      : deserializeAiAgentLongTextToolEmbeddingsField(val.embeddings);
  if (!(val.model == void 0) && !sdIsString(val.model)) {
    throw new BoxSdkError({
      message: 'Expecting string for "model" of type "AiAgentBasicGenTool"',
    });
  }
  const model: undefined | string = val.model == void 0 ? void 0 : val.model;
  if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "system_message" of type "AiAgentBasicGenTool"',
    });
  }
  const systemMessage: undefined | string =
    val.system_message == void 0 ? void 0 : val.system_message;
  if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "prompt_template" of type "AiAgentBasicGenTool"',
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
        'Expecting number for "num_tokens_for_completion" of type "AiAgentBasicGenTool"',
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
    contentTemplate: contentTemplate,
    embeddings: embeddings,
    model: model,
    systemMessage: systemMessage,
    promptTemplate: promptTemplate,
    numTokensForCompletion: numTokensForCompletion,
    llmEndpointParams: llmEndpointParams,
  } satisfies AiAgentBasicGenTool;
}
