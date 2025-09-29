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
import { serializeAiAgentSpreadsheetTool } from './aiAgentSpreadsheetTool.generated';
import { deserializeAiAgentSpreadsheetTool } from './aiAgentSpreadsheetTool.generated';
import { AiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated';
import { AiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated';
import { AiLlmEndpointParamsAws } from './aiLlmEndpointParamsAws.generated';
import { AiLlmEndpointParamsIbm } from './aiLlmEndpointParamsIbm.generated';
import { AiLlmEndpointParams } from './aiLlmEndpointParams.generated';
import { AiAgentSpreadsheetTool } from './aiAgentSpreadsheetTool.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type AiStudioAgentSpreadsheetTool = AiAgentSpreadsheetTool & {};
export function serializeAiStudioAgentSpreadsheetTool(
  val: AiStudioAgentSpreadsheetTool,
): SerializedData {
  const base: any = serializeAiAgentSpreadsheetTool(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiStudioAgentSpreadsheetTool"',
    });
  }
  return { ...base, ...{} };
}
export function deserializeAiStudioAgentSpreadsheetTool(
  val: SerializedData,
): AiStudioAgentSpreadsheetTool {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiStudioAgentSpreadsheetTool"',
    });
  }
  if (!(val.model == void 0) && !sdIsString(val.model)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "model" of type "AiStudioAgentSpreadsheetTool"',
    });
  }
  const model: undefined | string = val.model == void 0 ? void 0 : val.model;
  if (
    !(val.num_tokens_for_completion == void 0) &&
    !sdIsNumber(val.num_tokens_for_completion)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentSpreadsheetTool"',
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
    model: model,
    numTokensForCompletion: numTokensForCompletion,
    llmEndpointParams: llmEndpointParams,
  } satisfies AiStudioAgentSpreadsheetTool;
}
