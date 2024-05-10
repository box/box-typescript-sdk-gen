import { serializeFileOrFolder } from './fileOrFolder.generated.js';
import { deserializeFileOrFolder } from './fileOrFolder.generated.js';
import { serializeEvent } from './event.generated.js';
import { deserializeEvent } from './event.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileOrFolder } from './fileOrFolder.generated.js';
import { Event } from './event.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type SkillInvocationTypeField = 'skill_invocation';
export type SkillInvocationSkillTypeField = 'skill';
export interface SkillInvocationSkillField {
  readonly id?: string;
  readonly type?: SkillInvocationSkillTypeField;
  readonly name?: string;
  readonly apiKey?: string;
}
export type SkillInvocationTokenReadTokenTypeField = 'bearer';
export interface SkillInvocationTokenReadField {
  readonly accessToken?: string;
  readonly expiresIn?: number;
  readonly tokenType?: SkillInvocationTokenReadTokenTypeField;
  readonly restrictedTo?: string;
}
export type SkillInvocationTokenWriteTokenTypeField = 'bearer';
export interface SkillInvocationTokenWriteField {
  readonly accessToken?: string;
  readonly expiresIn?: number;
  readonly tokenType?: SkillInvocationTokenWriteTokenTypeField;
  readonly restrictedTo?: string;
}
export interface SkillInvocationTokenField {
  readonly read?: SkillInvocationTokenReadField;
  readonly write?: SkillInvocationTokenWriteField;
}
export type SkillInvocationStatusStateField =
  | 'invoked'
  | 'processing'
  | 'success'
  | 'transient_failure'
  | 'permanent_failure';
export interface SkillInvocationStatusField {
  readonly state?: SkillInvocationStatusStateField;
  readonly message?: string;
  readonly errorCode?: string;
  readonly additionalInfo?: string;
}
export type SkillInvocationEnterpriseTypeField = 'enterprise';
export interface SkillInvocationEnterpriseField {
  readonly id?: string;
  readonly type?: SkillInvocationEnterpriseTypeField;
  readonly name?: string;
}
export interface SkillInvocation {
  readonly type?: SkillInvocationTypeField;
  readonly id?: string;
  readonly skill?: SkillInvocationSkillField;
  readonly token?: SkillInvocationTokenField;
  readonly status?: SkillInvocationStatusField;
  readonly createdAt?: DateTime;
  readonly trigger?: string;
  readonly enterprise?: SkillInvocationEnterpriseField;
  readonly source?: FileOrFolder;
  readonly event?: Event;
}
export function serializeSkillInvocationTypeField(
  val: SkillInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationTypeField(
  val: any
): SkillInvocationTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SkillInvocationTypeField"',
    });
  }
  if (val == 'skill_invocation') {
    return 'skill_invocation';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSkillInvocationSkillTypeField(
  val: SkillInvocationSkillTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationSkillTypeField(
  val: any
): SkillInvocationSkillTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SkillInvocationSkillTypeField"',
    });
  }
  if (val == 'skill') {
    return 'skill';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSkillInvocationSkillField(
  val: SkillInvocationSkillField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeSkillInvocationSkillTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['api_key']: val.apiKey == void 0 ? void 0 : val.apiKey,
  };
}
export function deserializeSkillInvocationSkillField(
  val: any
): SkillInvocationSkillField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | SkillInvocationSkillTypeField =
    val.type == void 0
      ? void 0
      : deserializeSkillInvocationSkillTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const apiKey: undefined | string =
    val.api_key == void 0 ? void 0 : val.api_key;
  return {
    id: id,
    type: type,
    name: name,
    apiKey: apiKey,
  } satisfies SkillInvocationSkillField;
}
export function serializeSkillInvocationTokenReadTokenTypeField(
  val: SkillInvocationTokenReadTokenTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationTokenReadTokenTypeField(
  val: any
): SkillInvocationTokenReadTokenTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SkillInvocationTokenReadTokenTypeField"',
    });
  }
  if (val == 'bearer') {
    return 'bearer';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSkillInvocationTokenReadField(
  val: SkillInvocationTokenReadField
): SerializedData {
  return {
    ['access_token']: val.accessToken == void 0 ? void 0 : val.accessToken,
    ['expires_in']: val.expiresIn == void 0 ? void 0 : val.expiresIn,
    ['token_type']:
      val.tokenType == void 0
        ? void 0
        : serializeSkillInvocationTokenReadTokenTypeField(val.tokenType),
    ['restricted_to']: val.restrictedTo == void 0 ? void 0 : val.restrictedTo,
  };
}
export function deserializeSkillInvocationTokenReadField(
  val: any
): SkillInvocationTokenReadField {
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | SkillInvocationTokenReadTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeSkillInvocationTokenReadTokenTypeField(val.token_type);
  const restrictedTo: undefined | string =
    val.restricted_to == void 0 ? void 0 : val.restricted_to;
  return {
    accessToken: accessToken,
    expiresIn: expiresIn,
    tokenType: tokenType,
    restrictedTo: restrictedTo,
  } satisfies SkillInvocationTokenReadField;
}
export function serializeSkillInvocationTokenWriteTokenTypeField(
  val: SkillInvocationTokenWriteTokenTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationTokenWriteTokenTypeField(
  val: any
): SkillInvocationTokenWriteTokenTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SkillInvocationTokenWriteTokenTypeField"',
    });
  }
  if (val == 'bearer') {
    return 'bearer';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSkillInvocationTokenWriteField(
  val: SkillInvocationTokenWriteField
): SerializedData {
  return {
    ['access_token']: val.accessToken == void 0 ? void 0 : val.accessToken,
    ['expires_in']: val.expiresIn == void 0 ? void 0 : val.expiresIn,
    ['token_type']:
      val.tokenType == void 0
        ? void 0
        : serializeSkillInvocationTokenWriteTokenTypeField(val.tokenType),
    ['restricted_to']: val.restrictedTo == void 0 ? void 0 : val.restrictedTo,
  };
}
export function deserializeSkillInvocationTokenWriteField(
  val: any
): SkillInvocationTokenWriteField {
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | SkillInvocationTokenWriteTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeSkillInvocationTokenWriteTokenTypeField(val.token_type);
  const restrictedTo: undefined | string =
    val.restricted_to == void 0 ? void 0 : val.restricted_to;
  return {
    accessToken: accessToken,
    expiresIn: expiresIn,
    tokenType: tokenType,
    restrictedTo: restrictedTo,
  } satisfies SkillInvocationTokenWriteField;
}
export function serializeSkillInvocationTokenField(
  val: SkillInvocationTokenField
): SerializedData {
  return {
    ['read']:
      val.read == void 0
        ? void 0
        : serializeSkillInvocationTokenReadField(val.read),
    ['write']:
      val.write == void 0
        ? void 0
        : serializeSkillInvocationTokenWriteField(val.write),
  };
}
export function deserializeSkillInvocationTokenField(
  val: any
): SkillInvocationTokenField {
  const read: undefined | SkillInvocationTokenReadField =
    val.read == void 0
      ? void 0
      : deserializeSkillInvocationTokenReadField(val.read);
  const write: undefined | SkillInvocationTokenWriteField =
    val.write == void 0
      ? void 0
      : deserializeSkillInvocationTokenWriteField(val.write);
  return { read: read, write: write } satisfies SkillInvocationTokenField;
}
export function serializeSkillInvocationStatusStateField(
  val: SkillInvocationStatusStateField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationStatusStateField(
  val: any
): SkillInvocationStatusStateField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SkillInvocationStatusStateField"',
    });
  }
  if (val == 'invoked') {
    return 'invoked';
  }
  if (val == 'processing') {
    return 'processing';
  }
  if (val == 'success') {
    return 'success';
  }
  if (val == 'transient_failure') {
    return 'transient_failure';
  }
  if (val == 'permanent_failure') {
    return 'permanent_failure';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSkillInvocationStatusField(
  val: SkillInvocationStatusField
): SerializedData {
  return {
    ['state']:
      val.state == void 0
        ? void 0
        : serializeSkillInvocationStatusStateField(val.state),
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['error_code']: val.errorCode == void 0 ? void 0 : val.errorCode,
    ['additional_info']:
      val.additionalInfo == void 0 ? void 0 : val.additionalInfo,
  };
}
export function deserializeSkillInvocationStatusField(
  val: any
): SkillInvocationStatusField {
  const state: undefined | SkillInvocationStatusStateField =
    val.state == void 0
      ? void 0
      : deserializeSkillInvocationStatusStateField(val.state);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const errorCode: undefined | string =
    val.error_code == void 0 ? void 0 : val.error_code;
  const additionalInfo: undefined | string =
    val.additional_info == void 0 ? void 0 : val.additional_info;
  return {
    state: state,
    message: message,
    errorCode: errorCode,
    additionalInfo: additionalInfo,
  } satisfies SkillInvocationStatusField;
}
export function serializeSkillInvocationEnterpriseTypeField(
  val: SkillInvocationEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationEnterpriseTypeField(
  val: any
): SkillInvocationEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SkillInvocationEnterpriseTypeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSkillInvocationEnterpriseField(
  val: SkillInvocationEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeSkillInvocationEnterpriseTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeSkillInvocationEnterpriseField(
  val: any
): SkillInvocationEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | SkillInvocationEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeSkillInvocationEnterpriseTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    id: id,
    type: type,
    name: name,
  } satisfies SkillInvocationEnterpriseField;
}
export function serializeSkillInvocation(val: SkillInvocation): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeSkillInvocationTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['skill']:
      val.skill == void 0
        ? void 0
        : serializeSkillInvocationSkillField(val.skill),
    ['token']:
      val.token == void 0
        ? void 0
        : serializeSkillInvocationTokenField(val.token),
    ['status']:
      val.status == void 0
        ? void 0
        : serializeSkillInvocationStatusField(val.status),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['trigger']: val.trigger == void 0 ? void 0 : val.trigger,
    ['enterprise']:
      val.enterprise == void 0
        ? void 0
        : serializeSkillInvocationEnterpriseField(val.enterprise),
    ['source']:
      val.source == void 0 ? void 0 : serializeFileOrFolder(val.source),
    ['event']: val.event == void 0 ? void 0 : serializeEvent(val.event),
  };
}
export function deserializeSkillInvocation(val: any): SkillInvocation {
  const type: undefined | SkillInvocationTypeField =
    val.type == void 0 ? void 0 : deserializeSkillInvocationTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const skill: undefined | SkillInvocationSkillField =
    val.skill == void 0
      ? void 0
      : deserializeSkillInvocationSkillField(val.skill);
  const token: undefined | SkillInvocationTokenField =
    val.token == void 0
      ? void 0
      : deserializeSkillInvocationTokenField(val.token);
  const status: undefined | SkillInvocationStatusField =
    val.status == void 0
      ? void 0
      : deserializeSkillInvocationStatusField(val.status);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const trigger: undefined | string =
    val.trigger == void 0 ? void 0 : val.trigger;
  const enterprise: undefined | SkillInvocationEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeSkillInvocationEnterpriseField(val.enterprise);
  const source: undefined | FileOrFolder =
    val.source == void 0 ? void 0 : deserializeFileOrFolder(val.source);
  const event: undefined | Event =
    val.event == void 0 ? void 0 : deserializeEvent(val.event);
  return {
    type: type,
    id: id,
    skill: skill,
    token: token,
    status: status,
    createdAt: createdAt,
    trigger: trigger,
    enterprise: enterprise,
    source: source,
    event: event,
  } satisfies SkillInvocation;
}
