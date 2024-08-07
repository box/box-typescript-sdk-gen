import { serializeAiAgentAsk } from './aiAgentAsk.generated.js';
import { deserializeAiAgentAsk } from './aiAgentAsk.generated.js';
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
export type AiAskItemsTypeField = 'file';
export class AiAskItemsField {
  /**
   * The id of the item. */
  readonly id!: string;
  /**
   * The type of the item. */
  readonly type: AiAskItemsTypeField = 'file' as AiAskItemsTypeField;
  /**
   * The content of the item, often the text representation. */
  readonly content?: string;
  constructor(
    fields: Omit<AiAskItemsField, 'type'> &
      Partial<Pick<AiAskItemsField, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.content) {
      this.content = fields.content;
    }
  }
}
export interface AiAskItemsFieldInput {
  /**
   * The id of the item. */
  readonly id: string;
  /**
   * The type of the item. */
  readonly type?: AiAskItemsTypeField;
  /**
   * The content of the item, often the text representation. */
  readonly content?: string;
}
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
  readonly items: readonly AiAskItemsField[];
  readonly aiAgent?: AiAgentAsk;
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
export function serializeAiAskItemsTypeField(
  val: AiAskItemsTypeField
): SerializedData {
  return val;
}
export function deserializeAiAskItemsTypeField(
  val: SerializedData
): AiAskItemsTypeField {
  if (val == 'file') {
    return val;
  }
  throw new BoxSdkError({ message: "Can't deserialize AiAskItemsTypeField" });
}
export function serializeAiAskItemsField(val: AiAskItemsField): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeAiAskItemsTypeField(val.type),
    ['content']: val.content == void 0 ? void 0 : val.content,
  };
}
export function deserializeAiAskItemsField(
  val: SerializedData
): AiAskItemsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "AiAskItemsField"' });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "AiAskItemsField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "AiAskItemsField"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "AiAskItemsField" to be defined',
    });
  }
  const type: AiAskItemsTypeField = deserializeAiAskItemsTypeField(val.type);
  if (!(val.content == void 0) && !sdIsString(val.content)) {
    throw new BoxSdkError({
      message: 'Expecting string for "content" of type "AiAskItemsField"',
    });
  }
  const content: undefined | string =
    val.content == void 0 ? void 0 : val.content;
  return { id: id, type: type, content: content } satisfies AiAskItemsField;
}
export function serializeAiAskItemsFieldInput(
  val: AiAskItemsFieldInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeAiAskItemsTypeField(val.type),
    ['content']: val.content == void 0 ? void 0 : val.content,
  };
}
export function deserializeAiAskItemsFieldInput(
  val: SerializedData
): AiAskItemsFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAskItemsFieldInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "AiAskItemsFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "AiAskItemsFieldInput"',
    });
  }
  const id: string = val.id;
  const type: undefined | AiAskItemsTypeField =
    val.type == void 0 ? void 0 : deserializeAiAskItemsTypeField(val.type);
  if (!(val.content == void 0) && !sdIsString(val.content)) {
    throw new BoxSdkError({
      message: 'Expecting string for "content" of type "AiAskItemsFieldInput"',
    });
  }
  const content: undefined | string =
    val.content == void 0 ? void 0 : val.content;
  return {
    id: id,
    type: type,
    content: content,
  } satisfies AiAskItemsFieldInput;
}
export function serializeAiAsk(val: AiAsk): SerializedData {
  return {
    ['mode']: serializeAiAskModeField(val.mode),
    ['prompt']: val.prompt,
    ['items']: val.items.map(function (item: AiAskItemsField): SerializedData {
      return serializeAiAskItemsField(item);
    }) as readonly any[],
    ['ai_agent']:
      val.aiAgent == void 0 ? void 0 : serializeAiAgentAsk(val.aiAgent),
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
  const items: readonly AiAskItemsField[] = sdIsList(val.items)
    ? (val.items.map(function (itm: SerializedData): AiAskItemsField {
        return deserializeAiAskItemsField(itm);
      }) as readonly any[])
    : [];
  const aiAgent: undefined | AiAgentAsk =
    val.ai_agent == void 0 ? void 0 : deserializeAiAgentAsk(val.ai_agent);
  return {
    mode: mode,
    prompt: prompt,
    items: items,
    aiAgent: aiAgent,
  } satisfies AiAsk;
}
