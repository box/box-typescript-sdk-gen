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
  readonly id!: string;
  readonly type: AiAskItemsTypeField = 'file' as AiAskItemsTypeField;
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
  readonly id: string;
  readonly type?: AiAskItemsTypeField;
  readonly content?: string;
}
export interface AiAsk {
  readonly mode: AiAskModeField;
  readonly prompt: string;
  readonly items: readonly AiAskItemsField[];
}
export function serializeAiAskModeField(val: AiAskModeField): SerializedData {
  return val;
}
export function deserializeAiAskModeField(val: any): AiAskModeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "AiAskModeField"',
    });
  }
  if (val == 'multiple_item_qa') {
    return 'multiple_item_qa';
  }
  if (val == 'single_item_qa') {
    return 'single_item_qa';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeAiAskItemsTypeField(
  val: AiAskItemsTypeField
): SerializedData {
  return val;
}
export function deserializeAiAskItemsTypeField(val: any): AiAskItemsTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "AiAskItemsTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeAiAskItemsField(val: AiAskItemsField): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeAiAskItemsTypeField(val.type),
    ['content']: val.content == void 0 ? void 0 : val.content,
  };
}
export function deserializeAiAskItemsField(val: any): AiAskItemsField {
  const id: string = val.id;
  const type: AiAskItemsTypeField = deserializeAiAskItemsTypeField(val.type);
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
  val: any
): AiAskItemsFieldInput {
  const id: string = val.id;
  const type: undefined | AiAskItemsTypeField =
    val.type == void 0 ? void 0 : deserializeAiAskItemsTypeField(val.type);
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
  };
}
export function deserializeAiAsk(val: any): AiAsk {
  const mode: AiAskModeField = deserializeAiAskModeField(val.mode);
  const prompt: string = val.prompt;
  const items: readonly AiAskItemsField[] = sdIsList(val.items)
    ? (val.items.map(function (itm: SerializedData): AiAskItemsField {
        return deserializeAiAskItemsField(itm);
      }) as readonly any[])
    : [];
  return { mode: mode, prompt: prompt, items: items } satisfies AiAsk;
}
