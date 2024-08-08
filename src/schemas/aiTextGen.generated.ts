import { serializeAiAgentTextGen } from './aiAgentTextGen.generated.js';
import { deserializeAiAgentTextGen } from './aiAgentTextGen.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { AiAgentTextGen } from './aiAgentTextGen.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiTextGenItemsTypeField = 'file';
export interface AiTextGenItemsField {
  /**
   * The id of the item. */
  readonly id?: string;
  /**
   * The type of the item. */
  readonly type?: AiTextGenItemsTypeField;
  /**
   * The content to use as context for generating new text or editing existing text. */
  readonly content?: string;
}
export interface AiTextGenDialogueHistoryField {
  /**
   * The prompt previously provided by the client and answered by the LLM. */
  readonly prompt?: string;
  /**
   * The answer previously provided by the LLM. */
  readonly answer?: string;
  /**
   * The ISO date formatted timestamp of when the previous answer to the prompt was created. */
  readonly createdAt?: DateTime;
}
export interface AiTextGen {
  /**
   * The prompt provided by the client to be answered by the LLM. The prompt's length is limited to 10000 characters. */
  readonly prompt: string;
  /**
   * The items to be processed by the LLM, often files.
   * The array can include **exactly one** element.
   *
   * **Note**: Box AI handles documents with text representations up to 1MB in size.
   * If the file size exceeds 1MB, the first 1MB of text representation will be processed. */
  readonly items: readonly AiTextGenItemsField[];
  /**
   * The history of prompts and answers previously passed to the LLM. This provides additional context to the LLM in generating the response. */
  readonly dialogueHistory?: readonly AiTextGenDialogueHistoryField[];
  readonly aiAgent?: AiAgentTextGen;
}
export function serializeAiTextGenItemsTypeField(
  val: AiTextGenItemsTypeField
): SerializedData {
  return val;
}
export function deserializeAiTextGenItemsTypeField(
  val: SerializedData
): AiTextGenItemsTypeField {
  if (val == 'file') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiTextGenItemsTypeField",
  });
}
export function serializeAiTextGenItemsField(
  val: AiTextGenItemsField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeAiTextGenItemsTypeField(val.type),
    ['content']: val.content == void 0 ? void 0 : val.content,
  };
}
export function deserializeAiTextGenItemsField(
  val: SerializedData
): AiTextGenItemsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiTextGenItemsField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "AiTextGenItemsField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | AiTextGenItemsTypeField =
    val.type == void 0 ? void 0 : deserializeAiTextGenItemsTypeField(val.type);
  if (!(val.content == void 0) && !sdIsString(val.content)) {
    throw new BoxSdkError({
      message: 'Expecting string for "content" of type "AiTextGenItemsField"',
    });
  }
  const content: undefined | string =
    val.content == void 0 ? void 0 : val.content;
  return { id: id, type: type, content: content } satisfies AiTextGenItemsField;
}
export function serializeAiTextGenDialogueHistoryField(
  val: AiTextGenDialogueHistoryField
): SerializedData {
  return {
    ['prompt']: val.prompt == void 0 ? void 0 : val.prompt,
    ['answer']: val.answer == void 0 ? void 0 : val.answer,
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
  };
}
export function deserializeAiTextGenDialogueHistoryField(
  val: SerializedData
): AiTextGenDialogueHistoryField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiTextGenDialogueHistoryField"',
    });
  }
  if (!(val.prompt == void 0) && !sdIsString(val.prompt)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "prompt" of type "AiTextGenDialogueHistoryField"',
    });
  }
  const prompt: undefined | string = val.prompt == void 0 ? void 0 : val.prompt;
  if (!(val.answer == void 0) && !sdIsString(val.answer)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "answer" of type "AiTextGenDialogueHistoryField"',
    });
  }
  const answer: undefined | string = val.answer == void 0 ? void 0 : val.answer;
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "created_at" of type "AiTextGenDialogueHistoryField"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  return {
    prompt: prompt,
    answer: answer,
    createdAt: createdAt,
  } satisfies AiTextGenDialogueHistoryField;
}
export function serializeAiTextGen(val: AiTextGen): SerializedData {
  return {
    ['prompt']: val.prompt,
    ['items']: val.items.map(function (
      item: AiTextGenItemsField
    ): SerializedData {
      return serializeAiTextGenItemsField(item);
    }) as readonly any[],
    ['dialogue_history']:
      val.dialogueHistory == void 0
        ? void 0
        : (val.dialogueHistory.map(function (
            item: AiTextGenDialogueHistoryField
          ): SerializedData {
            return serializeAiTextGenDialogueHistoryField(item);
          }) as readonly any[]),
    ['ai_agent']:
      val.aiAgent == void 0 ? void 0 : serializeAiAgentTextGen(val.aiAgent),
  };
}
export function deserializeAiTextGen(val: SerializedData): AiTextGen {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "AiTextGen"' });
  }
  if (val.prompt == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "prompt" of type "AiTextGen" to be defined',
    });
  }
  if (!sdIsString(val.prompt)) {
    throw new BoxSdkError({
      message: 'Expecting string for "prompt" of type "AiTextGen"',
    });
  }
  const prompt: string = val.prompt;
  if (val.items == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "items" of type "AiTextGen" to be defined',
    });
  }
  if (!sdIsList(val.items)) {
    throw new BoxSdkError({
      message: 'Expecting array for "items" of type "AiTextGen"',
    });
  }
  const items: readonly AiTextGenItemsField[] = sdIsList(val.items)
    ? (val.items.map(function (itm: SerializedData): AiTextGenItemsField {
        return deserializeAiTextGenItemsField(itm);
      }) as readonly any[])
    : [];
  if (!(val.dialogue_history == void 0) && !sdIsList(val.dialogue_history)) {
    throw new BoxSdkError({
      message: 'Expecting array for "dialogue_history" of type "AiTextGen"',
    });
  }
  const dialogueHistory: undefined | readonly AiTextGenDialogueHistoryField[] =
    val.dialogue_history == void 0
      ? void 0
      : sdIsList(val.dialogue_history)
      ? (val.dialogue_history.map(function (
          itm: SerializedData
        ): AiTextGenDialogueHistoryField {
          return deserializeAiTextGenDialogueHistoryField(itm);
        }) as readonly any[])
      : [];
  const aiAgent: undefined | AiAgentTextGen =
    val.ai_agent == void 0 ? void 0 : deserializeAiAgentTextGen(val.ai_agent);
  return {
    prompt: prompt,
    items: items,
    dialogueHistory: dialogueHistory,
    aiAgent: aiAgent,
  } satisfies AiTextGen;
}
