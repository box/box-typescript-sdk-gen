import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type KeywordSkillCardTypeField = 'skill_card';
export type KeywordSkillCardSkillCardTypeField = 'keyword';
export interface KeywordSkillCardSkillCardTitleField {
  readonly code?: string;
  readonly message: string;
}
export type KeywordSkillCardSkillTypeField = 'service';
export class KeywordSkillCardSkillField {
  readonly type: KeywordSkillCardSkillTypeField =
    'service' as KeywordSkillCardSkillTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<KeywordSkillCardSkillField, 'type'> &
      Partial<Pick<KeywordSkillCardSkillField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface KeywordSkillCardSkillFieldInput {
  readonly type?: KeywordSkillCardSkillTypeField;
  readonly id: string;
}
export type KeywordSkillCardInvocationTypeField = 'skill_invocation';
export class KeywordSkillCardInvocationField {
  readonly type: KeywordSkillCardInvocationTypeField =
    'skill_invocation' as KeywordSkillCardInvocationTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<KeywordSkillCardInvocationField, 'type'> &
      Partial<Pick<KeywordSkillCardInvocationField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface KeywordSkillCardInvocationFieldInput {
  readonly type?: KeywordSkillCardInvocationTypeField;
  readonly id: string;
}
export interface KeywordSkillCardEntriesField {
  readonly text?: string;
}
export class KeywordSkillCard {
  readonly createdAt?: DateTime;
  readonly type: KeywordSkillCardTypeField =
    'skill_card' as KeywordSkillCardTypeField;
  readonly skillCardType: KeywordSkillCardSkillCardTypeField =
    'keyword' as KeywordSkillCardSkillCardTypeField;
  readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
  readonly skill!: KeywordSkillCardSkillField;
  readonly invocation!: KeywordSkillCardInvocationField;
  readonly entries!: readonly KeywordSkillCardEntriesField[];
  constructor(
    fields: Omit<KeywordSkillCard, 'type' | 'skillCardType'> &
      Partial<Pick<KeywordSkillCard, 'type' | 'skillCardType'>>
  ) {
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.skillCardType) {
      this.skillCardType = fields.skillCardType;
    }
    if (fields.skillCardTitle) {
      this.skillCardTitle = fields.skillCardTitle;
    }
    if (fields.skill) {
      this.skill = fields.skill;
    }
    if (fields.invocation) {
      this.invocation = fields.invocation;
    }
    if (fields.entries) {
      this.entries = fields.entries;
    }
  }
}
export interface KeywordSkillCardInput {
  readonly createdAt?: DateTime;
  readonly type?: KeywordSkillCardTypeField;
  readonly skillCardType?: KeywordSkillCardSkillCardTypeField;
  readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
  readonly skill: KeywordSkillCardSkillField;
  readonly invocation: KeywordSkillCardInvocationField;
  readonly entries: readonly KeywordSkillCardEntriesField[];
}
export function serializeKeywordSkillCardTypeField(
  val: KeywordSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeKeywordSkillCardTypeField(
  val: SerializedData
): KeywordSkillCardTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "KeywordSkillCardTypeField"',
    });
  }
  if (val == 'skill_card') {
    return 'skill_card';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeKeywordSkillCardSkillCardTypeField(
  val: KeywordSkillCardSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeKeywordSkillCardSkillCardTypeField(
  val: SerializedData
): KeywordSkillCardSkillCardTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "KeywordSkillCardSkillCardTypeField"',
    });
  }
  if (val == 'keyword') {
    return 'keyword';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeKeywordSkillCardSkillCardTitleField(
  val: KeywordSkillCardSkillCardTitleField
): SerializedData {
  return {
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['message']: val.message,
  };
}
export function deserializeKeywordSkillCardSkillCardTitleField(
  val: SerializedData
): KeywordSkillCardSkillCardTitleField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "KeywordSkillCardSkillCardTitleField"',
    });
  }
  if (!(val.code == void 0) && !sdIsString(val.code)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "code" of type "KeywordSkillCardSkillCardTitleField"',
    });
  }
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  if (val.message == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "message" of type "KeywordSkillCardSkillCardTitleField" to be defined',
    });
  }
  if (!sdIsString(val.message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "message" of type "KeywordSkillCardSkillCardTitleField"',
    });
  }
  const message: string = val.message;
  return {
    code: code,
    message: message,
  } satisfies KeywordSkillCardSkillCardTitleField;
}
export function serializeKeywordSkillCardSkillTypeField(
  val: KeywordSkillCardSkillTypeField
): SerializedData {
  return val;
}
export function deserializeKeywordSkillCardSkillTypeField(
  val: SerializedData
): KeywordSkillCardSkillTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "KeywordSkillCardSkillTypeField"',
    });
  }
  if (val == 'service') {
    return 'service';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeKeywordSkillCardSkillField(
  val: KeywordSkillCardSkillField
): SerializedData {
  return {
    ['type']: serializeKeywordSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeKeywordSkillCardSkillField(
  val: SerializedData
): KeywordSkillCardSkillField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "KeywordSkillCardSkillField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "KeywordSkillCardSkillField" to be defined',
    });
  }
  const type: KeywordSkillCardSkillTypeField =
    deserializeKeywordSkillCardSkillTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "KeywordSkillCardSkillField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "KeywordSkillCardSkillField"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies KeywordSkillCardSkillField;
}
export function serializeKeywordSkillCardSkillFieldInput(
  val: KeywordSkillCardSkillFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeKeywordSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeKeywordSkillCardSkillFieldInput(
  val: SerializedData
): KeywordSkillCardSkillFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "KeywordSkillCardSkillFieldInput"',
    });
  }
  const type: undefined | KeywordSkillCardSkillTypeField =
    val.type == void 0
      ? void 0
      : deserializeKeywordSkillCardSkillTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "KeywordSkillCardSkillFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "KeywordSkillCardSkillFieldInput"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies KeywordSkillCardSkillFieldInput;
}
export function serializeKeywordSkillCardInvocationTypeField(
  val: KeywordSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeKeywordSkillCardInvocationTypeField(
  val: SerializedData
): KeywordSkillCardInvocationTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "KeywordSkillCardInvocationTypeField"',
    });
  }
  if (val == 'skill_invocation') {
    return 'skill_invocation';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeKeywordSkillCardInvocationField(
  val: KeywordSkillCardInvocationField
): SerializedData {
  return {
    ['type']: serializeKeywordSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeKeywordSkillCardInvocationField(
  val: SerializedData
): KeywordSkillCardInvocationField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "KeywordSkillCardInvocationField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "KeywordSkillCardInvocationField" to be defined',
    });
  }
  const type: KeywordSkillCardInvocationTypeField =
    deserializeKeywordSkillCardInvocationTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "KeywordSkillCardInvocationField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "KeywordSkillCardInvocationField"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies KeywordSkillCardInvocationField;
}
export function serializeKeywordSkillCardInvocationFieldInput(
  val: KeywordSkillCardInvocationFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeKeywordSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeKeywordSkillCardInvocationFieldInput(
  val: SerializedData
): KeywordSkillCardInvocationFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "KeywordSkillCardInvocationFieldInput"',
    });
  }
  const type: undefined | KeywordSkillCardInvocationTypeField =
    val.type == void 0
      ? void 0
      : deserializeKeywordSkillCardInvocationTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "KeywordSkillCardInvocationFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "KeywordSkillCardInvocationFieldInput"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies KeywordSkillCardInvocationFieldInput;
}
export function serializeKeywordSkillCardEntriesField(
  val: KeywordSkillCardEntriesField
): SerializedData {
  return { ['text']: val.text == void 0 ? void 0 : val.text };
}
export function deserializeKeywordSkillCardEntriesField(
  val: SerializedData
): KeywordSkillCardEntriesField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "KeywordSkillCardEntriesField"',
    });
  }
  if (!(val.text == void 0) && !sdIsString(val.text)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "text" of type "KeywordSkillCardEntriesField"',
    });
  }
  const text: undefined | string = val.text == void 0 ? void 0 : val.text;
  return { text: text } satisfies KeywordSkillCardEntriesField;
}
export function serializeKeywordSkillCard(
  val: KeywordSkillCard
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']: serializeKeywordSkillCardTypeField(val.type),
    ['skill_card_type']: serializeKeywordSkillCardSkillCardTypeField(
      val.skillCardType
    ),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeKeywordSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeKeywordSkillCardSkillField(val.skill),
    ['invocation']: serializeKeywordSkillCardInvocationField(val.invocation),
    ['entries']: val.entries.map(function (
      item: KeywordSkillCardEntriesField
    ): SerializedData {
      return serializeKeywordSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeKeywordSkillCard(
  val: SerializedData
): KeywordSkillCard {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "KeywordSkillCard"',
    });
  }
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "KeywordSkillCard"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "KeywordSkillCard" to be defined',
    });
  }
  const type: KeywordSkillCardTypeField = deserializeKeywordSkillCardTypeField(
    val.type
  );
  if (val.skill_card_type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "skill_card_type" of type "KeywordSkillCard" to be defined',
    });
  }
  const skillCardType: KeywordSkillCardSkillCardTypeField =
    deserializeKeywordSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | KeywordSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeKeywordSkillCardSkillCardTitleField(val.skill_card_title);
  if (val.skill == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "skill" of type "KeywordSkillCard" to be defined',
    });
  }
  const skill: KeywordSkillCardSkillField =
    deserializeKeywordSkillCardSkillField(val.skill);
  if (val.invocation == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "invocation" of type "KeywordSkillCard" to be defined',
    });
  }
  const invocation: KeywordSkillCardInvocationField =
    deserializeKeywordSkillCardInvocationField(val.invocation);
  if (val.entries == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "entries" of type "KeywordSkillCard" to be defined',
    });
  }
  if (!sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "KeywordSkillCard"',
    });
  }
  const entries: readonly KeywordSkillCardEntriesField[] = sdIsList(val.entries)
    ? (val.entries.map(function (
        itm: SerializedData
      ): KeywordSkillCardEntriesField {
        return deserializeKeywordSkillCardEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    skill: skill,
    invocation: invocation,
    entries: entries,
  } satisfies KeywordSkillCard;
}
export function serializeKeywordSkillCardInput(
  val: KeywordSkillCardInput
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']:
      val.type == void 0
        ? void 0
        : serializeKeywordSkillCardTypeField(val.type),
    ['skillCardType']:
      val.skillCardType == void 0
        ? void 0
        : serializeKeywordSkillCardSkillCardTypeField(val.skillCardType),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeKeywordSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeKeywordSkillCardSkillField(val.skill),
    ['invocation']: serializeKeywordSkillCardInvocationField(val.invocation),
    ['entries']: val.entries.map(function (
      item: KeywordSkillCardEntriesField
    ): SerializedData {
      return serializeKeywordSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeKeywordSkillCardInput(
  val: SerializedData
): KeywordSkillCardInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "KeywordSkillCardInput"',
    });
  }
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "created_at" of type "KeywordSkillCardInput"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const type: undefined | KeywordSkillCardTypeField =
    val.type == void 0
      ? void 0
      : deserializeKeywordSkillCardTypeField(val.type);
  const skillCardType: undefined | KeywordSkillCardSkillCardTypeField =
    val.skillCardType == void 0
      ? void 0
      : deserializeKeywordSkillCardSkillCardTypeField(val.skillCardType);
  const skillCardTitle: undefined | KeywordSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeKeywordSkillCardSkillCardTitleField(val.skill_card_title);
  if (val.skill == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "skill" of type "KeywordSkillCardInput" to be defined',
    });
  }
  const skill: KeywordSkillCardSkillField =
    deserializeKeywordSkillCardSkillField(val.skill);
  if (val.invocation == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "invocation" of type "KeywordSkillCardInput" to be defined',
    });
  }
  const invocation: KeywordSkillCardInvocationField =
    deserializeKeywordSkillCardInvocationField(val.invocation);
  if (val.entries == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "entries" of type "KeywordSkillCardInput" to be defined',
    });
  }
  if (!sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "KeywordSkillCardInput"',
    });
  }
  const entries: readonly KeywordSkillCardEntriesField[] = sdIsList(val.entries)
    ? (val.entries.map(function (
        itm: SerializedData
      ): KeywordSkillCardEntriesField {
        return deserializeKeywordSkillCardEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    skill: skill,
    invocation: invocation,
    entries: entries,
  } satisfies KeywordSkillCardInput;
}
