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
export type TimelineSkillCardTypeField = 'skill_card';
export type TimelineSkillCardSkillCardTypeField = 'timeline';
export interface TimelineSkillCardSkillCardTitleField {
  readonly code?: string;
  readonly message: string;
}
export type TimelineSkillCardSkillTypeField = 'service';
export class TimelineSkillCardSkillField {
  readonly type: TimelineSkillCardSkillTypeField =
    'service' as TimelineSkillCardSkillTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<TimelineSkillCardSkillField, 'type'> &
      Partial<Pick<TimelineSkillCardSkillField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface TimelineSkillCardSkillFieldInput {
  readonly type?: TimelineSkillCardSkillTypeField;
  readonly id: string;
}
export type TimelineSkillCardInvocationTypeField = 'skill_invocation';
export class TimelineSkillCardInvocationField {
  readonly type: TimelineSkillCardInvocationTypeField =
    'skill_invocation' as TimelineSkillCardInvocationTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<TimelineSkillCardInvocationField, 'type'> &
      Partial<Pick<TimelineSkillCardInvocationField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface TimelineSkillCardInvocationFieldInput {
  readonly type?: TimelineSkillCardInvocationTypeField;
  readonly id: string;
}
export interface TimelineSkillCardEntriesAppearsField {
  readonly start?: number;
  readonly end?: number;
}
export interface TimelineSkillCardEntriesField {
  readonly text?: string;
  readonly appears?: readonly TimelineSkillCardEntriesAppearsField[];
  readonly imageUrl?: string;
}
export class TimelineSkillCard {
  readonly createdAt?: DateTime;
  readonly type: TimelineSkillCardTypeField =
    'skill_card' as TimelineSkillCardTypeField;
  readonly skillCardType: TimelineSkillCardSkillCardTypeField =
    'timeline' as TimelineSkillCardSkillCardTypeField;
  readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
  readonly skill!: TimelineSkillCardSkillField;
  readonly invocation!: TimelineSkillCardInvocationField;
  readonly duration?: number;
  readonly entries!: readonly TimelineSkillCardEntriesField[];
  constructor(
    fields: Omit<TimelineSkillCard, 'type' | 'skillCardType'> &
      Partial<Pick<TimelineSkillCard, 'type' | 'skillCardType'>>
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
    if (fields.duration) {
      this.duration = fields.duration;
    }
    if (fields.entries) {
      this.entries = fields.entries;
    }
  }
}
export interface TimelineSkillCardInput {
  readonly createdAt?: DateTime;
  readonly type?: TimelineSkillCardTypeField;
  readonly skillCardType?: TimelineSkillCardSkillCardTypeField;
  readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
  readonly skill: TimelineSkillCardSkillField;
  readonly invocation: TimelineSkillCardInvocationField;
  readonly duration?: number;
  readonly entries: readonly TimelineSkillCardEntriesField[];
}
export function serializeTimelineSkillCardTypeField(
  val: TimelineSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardTypeField(
  val: SerializedData
): TimelineSkillCardTypeField {
  if (val == 'skill_card') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize TimelineSkillCardTypeField",
  });
}
export function serializeTimelineSkillCardSkillCardTypeField(
  val: TimelineSkillCardSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardSkillCardTypeField(
  val: SerializedData
): TimelineSkillCardSkillCardTypeField {
  if (val == 'timeline') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize TimelineSkillCardSkillCardTypeField",
  });
}
export function serializeTimelineSkillCardSkillCardTitleField(
  val: TimelineSkillCardSkillCardTitleField
): SerializedData {
  return {
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['message']: val.message,
  };
}
export function deserializeTimelineSkillCardSkillCardTitleField(
  val: SerializedData
): TimelineSkillCardSkillCardTitleField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TimelineSkillCardSkillCardTitleField"',
    });
  }
  if (!(val.code == void 0) && !sdIsString(val.code)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "code" of type "TimelineSkillCardSkillCardTitleField"',
    });
  }
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  if (val.message == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "message" of type "TimelineSkillCardSkillCardTitleField" to be defined',
    });
  }
  if (!sdIsString(val.message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "message" of type "TimelineSkillCardSkillCardTitleField"',
    });
  }
  const message: string = val.message;
  return {
    code: code,
    message: message,
  } satisfies TimelineSkillCardSkillCardTitleField;
}
export function serializeTimelineSkillCardSkillTypeField(
  val: TimelineSkillCardSkillTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardSkillTypeField(
  val: SerializedData
): TimelineSkillCardSkillTypeField {
  if (val == 'service') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize TimelineSkillCardSkillTypeField",
  });
}
export function serializeTimelineSkillCardSkillField(
  val: TimelineSkillCardSkillField
): SerializedData {
  return {
    ['type']: serializeTimelineSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardSkillField(
  val: SerializedData
): TimelineSkillCardSkillField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TimelineSkillCardSkillField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "TimelineSkillCardSkillField" to be defined',
    });
  }
  const type: TimelineSkillCardSkillTypeField =
    deserializeTimelineSkillCardSkillTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "TimelineSkillCardSkillField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "TimelineSkillCardSkillField"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardSkillField;
}
export function serializeTimelineSkillCardSkillFieldInput(
  val: TimelineSkillCardSkillFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTimelineSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardSkillFieldInput(
  val: SerializedData
): TimelineSkillCardSkillFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TimelineSkillCardSkillFieldInput"',
    });
  }
  const type: undefined | TimelineSkillCardSkillTypeField =
    val.type == void 0
      ? void 0
      : deserializeTimelineSkillCardSkillTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "TimelineSkillCardSkillFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "TimelineSkillCardSkillFieldInput"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardSkillFieldInput;
}
export function serializeTimelineSkillCardInvocationTypeField(
  val: TimelineSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardInvocationTypeField(
  val: SerializedData
): TimelineSkillCardInvocationTypeField {
  if (val == 'skill_invocation') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize TimelineSkillCardInvocationTypeField",
  });
}
export function serializeTimelineSkillCardInvocationField(
  val: TimelineSkillCardInvocationField
): SerializedData {
  return {
    ['type']: serializeTimelineSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardInvocationField(
  val: SerializedData
): TimelineSkillCardInvocationField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TimelineSkillCardInvocationField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "TimelineSkillCardInvocationField" to be defined',
    });
  }
  const type: TimelineSkillCardInvocationTypeField =
    deserializeTimelineSkillCardInvocationTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "TimelineSkillCardInvocationField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "TimelineSkillCardInvocationField"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardInvocationField;
}
export function serializeTimelineSkillCardInvocationFieldInput(
  val: TimelineSkillCardInvocationFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTimelineSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardInvocationFieldInput(
  val: SerializedData
): TimelineSkillCardInvocationFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TimelineSkillCardInvocationFieldInput"',
    });
  }
  const type: undefined | TimelineSkillCardInvocationTypeField =
    val.type == void 0
      ? void 0
      : deserializeTimelineSkillCardInvocationTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "TimelineSkillCardInvocationFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "TimelineSkillCardInvocationFieldInput"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardInvocationFieldInput;
}
export function serializeTimelineSkillCardEntriesAppearsField(
  val: TimelineSkillCardEntriesAppearsField
): SerializedData {
  return {
    ['start']: val.start == void 0 ? void 0 : val.start,
    ['end']: val.end == void 0 ? void 0 : val.end,
  };
}
export function deserializeTimelineSkillCardEntriesAppearsField(
  val: SerializedData
): TimelineSkillCardEntriesAppearsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TimelineSkillCardEntriesAppearsField"',
    });
  }
  if (!(val.start == void 0) && !sdIsNumber(val.start)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "start" of type "TimelineSkillCardEntriesAppearsField"',
    });
  }
  const start: undefined | number = val.start == void 0 ? void 0 : val.start;
  if (!(val.end == void 0) && !sdIsNumber(val.end)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "end" of type "TimelineSkillCardEntriesAppearsField"',
    });
  }
  const end: undefined | number = val.end == void 0 ? void 0 : val.end;
  return {
    start: start,
    end: end,
  } satisfies TimelineSkillCardEntriesAppearsField;
}
export function serializeTimelineSkillCardEntriesField(
  val: TimelineSkillCardEntriesField
): SerializedData {
  return {
    ['text']: val.text == void 0 ? void 0 : val.text,
    ['appears']:
      val.appears == void 0
        ? void 0
        : (val.appears.map(function (
            item: TimelineSkillCardEntriesAppearsField
          ): SerializedData {
            return serializeTimelineSkillCardEntriesAppearsField(item);
          }) as readonly any[]),
    ['image_url']: val.imageUrl == void 0 ? void 0 : val.imageUrl,
  };
}
export function deserializeTimelineSkillCardEntriesField(
  val: SerializedData
): TimelineSkillCardEntriesField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TimelineSkillCardEntriesField"',
    });
  }
  if (!(val.text == void 0) && !sdIsString(val.text)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "text" of type "TimelineSkillCardEntriesField"',
    });
  }
  const text: undefined | string = val.text == void 0 ? void 0 : val.text;
  if (!(val.appears == void 0) && !sdIsList(val.appears)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "appears" of type "TimelineSkillCardEntriesField"',
    });
  }
  const appears: undefined | readonly TimelineSkillCardEntriesAppearsField[] =
    val.appears == void 0
      ? void 0
      : sdIsList(val.appears)
      ? (val.appears.map(function (
          itm: SerializedData
        ): TimelineSkillCardEntriesAppearsField {
          return deserializeTimelineSkillCardEntriesAppearsField(itm);
        }) as readonly any[])
      : [];
  if (!(val.image_url == void 0) && !sdIsString(val.image_url)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "image_url" of type "TimelineSkillCardEntriesField"',
    });
  }
  const imageUrl: undefined | string =
    val.image_url == void 0 ? void 0 : val.image_url;
  return {
    text: text,
    appears: appears,
    imageUrl: imageUrl,
  } satisfies TimelineSkillCardEntriesField;
}
export function serializeTimelineSkillCard(
  val: TimelineSkillCard
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']: serializeTimelineSkillCardTypeField(val.type),
    ['skill_card_type']: serializeTimelineSkillCardSkillCardTypeField(
      val.skillCardType
    ),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeTimelineSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeTimelineSkillCardSkillField(val.skill),
    ['invocation']: serializeTimelineSkillCardInvocationField(val.invocation),
    ['duration']: val.duration == void 0 ? void 0 : val.duration,
    ['entries']: val.entries.map(function (
      item: TimelineSkillCardEntriesField
    ): SerializedData {
      return serializeTimelineSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTimelineSkillCard(
  val: SerializedData
): TimelineSkillCard {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TimelineSkillCard"',
    });
  }
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "TimelineSkillCard"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "TimelineSkillCard" to be defined',
    });
  }
  const type: TimelineSkillCardTypeField =
    deserializeTimelineSkillCardTypeField(val.type);
  if (val.skill_card_type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "skill_card_type" of type "TimelineSkillCard" to be defined',
    });
  }
  const skillCardType: TimelineSkillCardSkillCardTypeField =
    deserializeTimelineSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | TimelineSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeTimelineSkillCardSkillCardTitleField(val.skill_card_title);
  if (val.skill == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "skill" of type "TimelineSkillCard" to be defined',
    });
  }
  const skill: TimelineSkillCardSkillField =
    deserializeTimelineSkillCardSkillField(val.skill);
  if (val.invocation == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "invocation" of type "TimelineSkillCard" to be defined',
    });
  }
  const invocation: TimelineSkillCardInvocationField =
    deserializeTimelineSkillCardInvocationField(val.invocation);
  if (!(val.duration == void 0) && !sdIsNumber(val.duration)) {
    throw new BoxSdkError({
      message: 'Expecting number for "duration" of type "TimelineSkillCard"',
    });
  }
  const duration: undefined | number =
    val.duration == void 0 ? void 0 : val.duration;
  if (val.entries == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "entries" of type "TimelineSkillCard" to be defined',
    });
  }
  if (!sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "TimelineSkillCard"',
    });
  }
  const entries: readonly TimelineSkillCardEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (
        itm: SerializedData
      ): TimelineSkillCardEntriesField {
        return deserializeTimelineSkillCardEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    skill: skill,
    invocation: invocation,
    duration: duration,
    entries: entries,
  } satisfies TimelineSkillCard;
}
export function serializeTimelineSkillCardInput(
  val: TimelineSkillCardInput
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTimelineSkillCardTypeField(val.type),
    ['skillCardType']:
      val.skillCardType == void 0
        ? void 0
        : serializeTimelineSkillCardSkillCardTypeField(val.skillCardType),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeTimelineSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeTimelineSkillCardSkillField(val.skill),
    ['invocation']: serializeTimelineSkillCardInvocationField(val.invocation),
    ['duration']: val.duration == void 0 ? void 0 : val.duration,
    ['entries']: val.entries.map(function (
      item: TimelineSkillCardEntriesField
    ): SerializedData {
      return serializeTimelineSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTimelineSkillCardInput(
  val: SerializedData
): TimelineSkillCardInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TimelineSkillCardInput"',
    });
  }
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "created_at" of type "TimelineSkillCardInput"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const type: undefined | TimelineSkillCardTypeField =
    val.type == void 0
      ? void 0
      : deserializeTimelineSkillCardTypeField(val.type);
  const skillCardType: undefined | TimelineSkillCardSkillCardTypeField =
    val.skillCardType == void 0
      ? void 0
      : deserializeTimelineSkillCardSkillCardTypeField(val.skillCardType);
  const skillCardTitle: undefined | TimelineSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeTimelineSkillCardSkillCardTitleField(val.skill_card_title);
  if (val.skill == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "skill" of type "TimelineSkillCardInput" to be defined',
    });
  }
  const skill: TimelineSkillCardSkillField =
    deserializeTimelineSkillCardSkillField(val.skill);
  if (val.invocation == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "invocation" of type "TimelineSkillCardInput" to be defined',
    });
  }
  const invocation: TimelineSkillCardInvocationField =
    deserializeTimelineSkillCardInvocationField(val.invocation);
  if (!(val.duration == void 0) && !sdIsNumber(val.duration)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "duration" of type "TimelineSkillCardInput"',
    });
  }
  const duration: undefined | number =
    val.duration == void 0 ? void 0 : val.duration;
  if (val.entries == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "entries" of type "TimelineSkillCardInput" to be defined',
    });
  }
  if (!sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "TimelineSkillCardInput"',
    });
  }
  const entries: readonly TimelineSkillCardEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (
        itm: SerializedData
      ): TimelineSkillCardEntriesField {
        return deserializeTimelineSkillCardEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    skill: skill,
    invocation: invocation,
    duration: duration,
    entries: entries,
  } satisfies TimelineSkillCardInput;
}
