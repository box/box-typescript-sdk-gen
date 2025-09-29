import { serializeAiExtractResponse } from './aiExtractResponse.generated';
import { deserializeAiExtractResponse } from './aiExtractResponse.generated';
import { serializeAiAgentInfo } from './aiAgentInfo.generated';
import { deserializeAiAgentInfo } from './aiAgentInfo.generated';
import { serializeDateTime } from '../internal/utils';
import { deserializeDateTime } from '../internal/utils';
import { AiExtractResponse } from './aiExtractResponse.generated';
import { AiAgentInfo } from './aiAgentInfo.generated';
import { BoxSdkError } from '../box/errors';
import { DateTime } from '../internal/utils';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export interface AiExtractStructuredResponse {
  readonly answer: AiExtractResponse;
  /**
   * The ISO date formatted timestamp of when the answer to the prompt was created. */
  readonly createdAt: DateTime;
  /**
   * The reason the response finishes. */
  readonly completionReason?: string;
  readonly aiAgentInfo?: AiAgentInfo;
  readonly rawData?: SerializedData;
}
export function serializeAiExtractStructuredResponse(
  val: AiExtractStructuredResponse,
): SerializedData {
  return {
    ['answer']: serializeAiExtractResponse(val.answer),
    ['created_at']: serializeDateTime(val.createdAt),
    ['completion_reason']: val.completionReason,
    ['ai_agent_info']:
      val.aiAgentInfo == void 0
        ? val.aiAgentInfo
        : serializeAiAgentInfo(val.aiAgentInfo),
  };
}
export function deserializeAiExtractStructuredResponse(
  val: SerializedData,
): AiExtractStructuredResponse {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiExtractStructuredResponse"',
    });
  }
  if (val.answer == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "answer" of type "AiExtractStructuredResponse" to be defined',
    });
  }
  const answer: AiExtractResponse = deserializeAiExtractResponse(val.answer);
  if (val.created_at == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "created_at" of type "AiExtractStructuredResponse" to be defined',
    });
  }
  if (!sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "created_at" of type "AiExtractStructuredResponse"',
    });
  }
  const createdAt: DateTime = deserializeDateTime(val.created_at);
  if (
    !(val.completion_reason == void 0) &&
    !sdIsString(val.completion_reason)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "completion_reason" of type "AiExtractStructuredResponse"',
    });
  }
  const completionReason: undefined | string =
    val.completion_reason == void 0 ? void 0 : val.completion_reason;
  const aiAgentInfo: undefined | AiAgentInfo =
    val.ai_agent_info == void 0
      ? void 0
      : deserializeAiAgentInfo(val.ai_agent_info);
  return {
    answer: answer,
    createdAt: createdAt,
    completionReason: completionReason,
    aiAgentInfo: aiAgentInfo,
  } satisfies AiExtractStructuredResponse;
}
