import { serializeAiDialogueHistory } from './aiDialogueHistory.generated.js';
import { deserializeAiDialogueHistory } from './aiDialogueHistory.generated.js';
import { serializeAiAgentTextGen } from './aiAgentTextGen.generated.js';
import { deserializeAiAgentTextGen } from './aiAgentTextGen.generated.js';
import { AiDialogueHistory } from './aiDialogueHistory.generated.js';
import { AiAgentTextGen } from './aiAgentTextGen.generated.js';
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
  readonly dialogueHistory?: readonly AiDialogueHistory[];
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
            item: AiDialogueHistory
          ): SerializedData {
            return serializeAiDialogueHistory(item);
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
  const dialogueHistory: undefined | readonly AiDialogueHistory[] =
    val.dialogue_history == void 0
      ? void 0
      : sdIsList(val.dialogue_history)
      ? (val.dialogue_history.map(function (
          itm: SerializedData
        ): AiDialogueHistory {
          return deserializeAiDialogueHistory(itm);
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
