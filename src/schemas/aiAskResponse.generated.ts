import { serializeAiCitation } from './aiCitation.generated.js';
import { deserializeAiCitation } from './aiCitation.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { AiCitation } from './aiCitation.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface AiAskResponse {
  /**
   * The answer provided by the LLM. */
  readonly answer: string;
  /**
   * The ISO date formatted timestamp of when the answer to the prompt was created. */
  readonly createdAt: DateTime;
  /**
   * The reason the response finishes. */
  readonly completionReason?: string;
  /**
   * The citations of the LLM's answer reference. */
  readonly citations?: readonly AiCitation[];
}
export function serializeAiAskResponse(val: AiAskResponse): SerializedData {
  return {
    ['answer']: val.answer,
    ['created_at']: serializeDateTime(val.createdAt),
    ['completion_reason']:
      val.completionReason == void 0 ? void 0 : val.completionReason,
    ['citations']:
      val.citations == void 0
        ? void 0
        : (val.citations.map(function (item: AiCitation): SerializedData {
            return serializeAiCitation(item);
          }) as readonly any[]),
  };
}
export function deserializeAiAskResponse(val: SerializedData): AiAskResponse {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "AiAskResponse"' });
  }
  if (val.answer == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "answer" of type "AiAskResponse" to be defined',
    });
  }
  if (!sdIsString(val.answer)) {
    throw new BoxSdkError({
      message: 'Expecting string for "answer" of type "AiAskResponse"',
    });
  }
  const answer: string = val.answer;
  if (val.created_at == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "created_at" of type "AiAskResponse" to be defined',
    });
  }
  if (!sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "AiAskResponse"',
    });
  }
  const createdAt: DateTime = deserializeDateTime(val.created_at);
  if (
    !(val.completion_reason == void 0) &&
    !sdIsString(val.completion_reason)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "completion_reason" of type "AiAskResponse"',
    });
  }
  const completionReason: undefined | string =
    val.completion_reason == void 0 ? void 0 : val.completion_reason;
  if (!(val.citations == void 0) && !sdIsList(val.citations)) {
    throw new BoxSdkError({
      message: 'Expecting array for "citations" of type "AiAskResponse"',
    });
  }
  const citations: undefined | readonly AiCitation[] =
    val.citations == void 0
      ? void 0
      : sdIsList(val.citations)
      ? (val.citations.map(function (itm: SerializedData): AiCitation {
          return deserializeAiCitation(itm);
        }) as readonly any[])
      : [];
  return {
    answer: answer,
    createdAt: createdAt,
    completionReason: completionReason,
    citations: citations,
  } satisfies AiAskResponse;
}
