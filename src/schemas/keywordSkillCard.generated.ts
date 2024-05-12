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
  val: any
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
  val: any
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
  val: any
): KeywordSkillCardSkillCardTitleField {
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
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
  val: any
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
  val: any
): KeywordSkillCardSkillField {
  const type: KeywordSkillCardSkillTypeField =
    deserializeKeywordSkillCardSkillTypeField(val.type);
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
  val: any
): KeywordSkillCardSkillFieldInput {
  const type: undefined | KeywordSkillCardSkillTypeField =
    val.type == void 0
      ? void 0
      : deserializeKeywordSkillCardSkillTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies KeywordSkillCardSkillFieldInput;
}
export function serializeKeywordSkillCardInvocationTypeField(
  val: KeywordSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeKeywordSkillCardInvocationTypeField(
  val: any
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
  val: any
): KeywordSkillCardInvocationField {
  const type: KeywordSkillCardInvocationTypeField =
    deserializeKeywordSkillCardInvocationTypeField(val.type);
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
  val: any
): KeywordSkillCardInvocationFieldInput {
  const type: undefined | KeywordSkillCardInvocationTypeField =
    val.type == void 0
      ? void 0
      : deserializeKeywordSkillCardInvocationTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies KeywordSkillCardInvocationFieldInput;
}
export function serializeKeywordSkillCardEntriesField(
  val: KeywordSkillCardEntriesField
): SerializedData {
  return { ['text']: val.text == void 0 ? void 0 : val.text };
}
export function deserializeKeywordSkillCardEntriesField(
  val: any
): KeywordSkillCardEntriesField {
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
export function deserializeKeywordSkillCard(val: any): KeywordSkillCard {
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const type: KeywordSkillCardTypeField = deserializeKeywordSkillCardTypeField(
    val.type
  );
  const skillCardType: KeywordSkillCardSkillCardTypeField =
    deserializeKeywordSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | KeywordSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeKeywordSkillCardSkillCardTitleField(val.skill_card_title);
  const skill: KeywordSkillCardSkillField =
    deserializeKeywordSkillCardSkillField(val.skill);
  const invocation: KeywordSkillCardInvocationField =
    deserializeKeywordSkillCardInvocationField(val.invocation);
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
  val: any
): KeywordSkillCardInput {
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
  const skill: KeywordSkillCardSkillField =
    deserializeKeywordSkillCardSkillField(val.skill);
  const invocation: KeywordSkillCardInvocationField =
    deserializeKeywordSkillCardInvocationField(val.invocation);
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
