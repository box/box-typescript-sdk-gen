import { serializeAiItemBase } from './aiItemBase.generated.js';
import { deserializeAiItemBase } from './aiItemBase.generated.js';
import { serializeAiDialogueHistory } from './aiDialogueHistory.generated.js';
import { deserializeAiDialogueHistory } from './aiDialogueHistory.generated.js';
import { serializeAiAgentAsk } from './aiAgentAsk.generated.js';
import { deserializeAiAgentAsk } from './aiAgentAsk.generated.js';
import { AiItemBase } from './aiItemBase.generated.js';
import { AiDialogueHistory } from './aiDialogueHistory.generated.js';
import { AiAgentAsk } from './aiAgentAsk.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiAskModeField = 'multiple_item_qa' | 'single_item_qa';
export interface AiAsk {
  /**
   * The mode specifies if this request is for a single or multiple items. If you select `single_item_qa` the `items` array can have one element only. Selecting `multiple_item_qa` allows you to provide up to 25 items. */
  readonly mode: AiAskModeField;
  /**
   * The prompt provided by the client to be answered by the LLM. The prompt's length is limited to 10000 characters. */
  readonly prompt: string;
  /**
   * The items to be processed by the LLM, often files.
   *
   * **Note**: Box AI handles documents with text representations up to 1MB in size, or a maximum of 25 files, whichever comes first.
   * If the file size exceeds 1MB, the first 1MB of text representation will be processed.
   * If you set `mode` parameter to `single_item_qa`, the `items` array can have one element only.  */
  readonly items: readonly AiItemBase[];
  /**
   * The history of prompts and answers previously passed to the LLM. This provides additional context to the LLM in generating the response. */
  readonly dialogueHistory?: readonly AiDialogueHistory[];
  /**
   * A flag to indicate whether citations should be returned. */
  readonly includeCitations?: boolean;
  readonly aiAgent?: AiAgentAsk;
  readonly rawData?: SerializedData;
}
export function serializeAiAskModeField(val: AiAskModeField): SerializedData {
  return val;
}
export function deserializeAiAskModeField(val: SerializedData): AiAskModeField {
  if (val == 'multiple_item_qa') {
    return val;
  }
  if (val == 'single_item_qa') {
    return val;
  }
  throw new BoxSdkError({ message: "Can't deserialize AiAskModeField" });
}
export function serializeAiAsk(val: AiAsk): SerializedData {
  return {
    ['mode']: serializeAiAskModeField(val.mode),
    ['prompt']: val.prompt,
    ['items']: val.items.map(function (item: AiItemBase): SerializedData {
      return serializeAiItemBase(item);
    }) as readonly any[],
    ['dialogue_history']:
      val.dialogueHistory == void 0
        ? val.dialogueHistory
        : (val.dialogueHistory.map(function (
            item: AiDialogueHistory,
          ): SerializedData {
            return serializeAiDialogueHistory(item);
          }) as readonly any[]),
    ['include_citations']: val.includeCitations,
    ['ai_agent']:
      val.aiAgent == void 0 ? val.aiAgent : serializeAiAgentAsk(val.aiAgent),
  };
}
export function deserializeAiAsk(val: SerializedData): AiAsk {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "AiAsk"' });
  }
  if (val.mode == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "mode" of type "AiAsk" to be defined',
    });
  }
  const mode: AiAskModeField = deserializeAiAskModeField(val.mode);
  if (val.prompt == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "prompt" of type "AiAsk" to be defined',
    });
  }
  if (!sdIsString(val.prompt)) {
    throw new BoxSdkError({
      message: 'Expecting string for "prompt" of type "AiAsk"',
    });
  }
  const prompt: string = val.prompt;
  if (val.items == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "items" of type "AiAsk" to be defined',
    });
  }
  if (!sdIsList(val.items)) {
    throw new BoxSdkError({
      message: 'Expecting array for "items" of type "AiAsk"',
    });
  }
  const items: readonly AiItemBase[] = sdIsList(val.items)
    ? (val.items.map(function (itm: SerializedData): AiItemBase {
        return deserializeAiItemBase(itm);
      }) as readonly any[])
    : [];
  if (!(val.dialogue_history == void 0) && !sdIsList(val.dialogue_history)) {
    throw new BoxSdkError({
      message: 'Expecting array for "dialogue_history" of type "AiAsk"',
    });
  }
  const dialogueHistory: undefined | readonly AiDialogueHistory[] =
    val.dialogue_history == void 0
      ? void 0
      : sdIsList(val.dialogue_history)
        ? (val.dialogue_history.map(function (
            itm: SerializedData,
          ): AiDialogueHistory {
            return deserializeAiDialogueHistory(itm);
          }) as readonly any[])
        : [];
  if (
    !(val.include_citations == void 0) &&
    !sdIsBoolean(val.include_citations)
  ) {
    throw new BoxSdkError({
      message: 'Expecting boolean for "include_citations" of type "AiAsk"',
    });
  }
  const includeCitations: undefined | boolean =
    val.include_citations == void 0 ? void 0 : val.include_citations;
  const aiAgent: undefined | AiAgentAsk =
    val.ai_agent == void 0 ? void 0 : deserializeAiAgentAsk(val.ai_agent);
  return {
    mode: mode,
    prompt: prompt,
    items: items,
    dialogueHistory: dialogueHistory,
    includeCitations: includeCitations,
    aiAgent: aiAgent,
  } satisfies AiAsk;
}
