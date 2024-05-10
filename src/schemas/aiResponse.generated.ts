import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface AiResponse {
  readonly answer: string;
  readonly createdAt: DateTime;
  readonly completionReason?: string;
}
export function serializeAiResponse(val: AiResponse): SerializedData {
  return {
    ['answer']: val.answer,
    ['created_at']: serializeDateTime(val.createdAt),
    ['completion_reason']:
      val.completionReason == void 0 ? void 0 : val.completionReason,
  };
}
export function deserializeAiResponse(val: any): AiResponse {
  const answer: string = val.answer;
  const createdAt: DateTime = deserializeDateTime(val.created_at);
  const completionReason: undefined | string =
    val.completion_reason == void 0 ? void 0 : val.completion_reason;
  return {
    answer: answer,
    createdAt: createdAt,
    completionReason: completionReason,
  } satisfies AiResponse;
}
