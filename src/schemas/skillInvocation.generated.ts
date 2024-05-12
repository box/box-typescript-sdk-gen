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
  val: SerializedData
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
  val: SerializedData
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
  val: SerializedData
): SkillInvocationSkillField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SkillInvocationSkillField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "SkillInvocationSkillField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | SkillInvocationSkillTypeField =
    val.type == void 0
      ? void 0
      : deserializeSkillInvocationSkillTypeField(val.type);
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "name" of type "SkillInvocationSkillField"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.api_key == void 0) && !sdIsString(val.api_key)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "api_key" of type "SkillInvocationSkillField"',
    });
  }
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
  val: SerializedData
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
  val: SerializedData
): SkillInvocationTokenReadField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SkillInvocationTokenReadField"',
    });
  }
  if (!(val.access_token == void 0) && !sdIsString(val.access_token)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "access_token" of type "SkillInvocationTokenReadField"',
    });
  }
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  if (!(val.expires_in == void 0) && !sdIsNumber(val.expires_in)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "expires_in" of type "SkillInvocationTokenReadField"',
    });
  }
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | SkillInvocationTokenReadTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeSkillInvocationTokenReadTokenTypeField(val.token_type);
  if (!(val.restricted_to == void 0) && !sdIsString(val.restricted_to)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "restricted_to" of type "SkillInvocationTokenReadField"',
    });
  }
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
  val: SerializedData
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
  val: SerializedData
): SkillInvocationTokenWriteField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SkillInvocationTokenWriteField"',
    });
  }
  if (!(val.access_token == void 0) && !sdIsString(val.access_token)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "access_token" of type "SkillInvocationTokenWriteField"',
    });
  }
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  if (!(val.expires_in == void 0) && !sdIsNumber(val.expires_in)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "expires_in" of type "SkillInvocationTokenWriteField"',
    });
  }
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | SkillInvocationTokenWriteTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeSkillInvocationTokenWriteTokenTypeField(val.token_type);
  if (!(val.restricted_to == void 0) && !sdIsString(val.restricted_to)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "restricted_to" of type "SkillInvocationTokenWriteField"',
    });
  }
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
  val: SerializedData
): SkillInvocationTokenField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SkillInvocationTokenField"',
    });
  }
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
  val: SerializedData
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
  val: SerializedData
): SkillInvocationStatusField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SkillInvocationStatusField"',
    });
  }
  const state: undefined | SkillInvocationStatusStateField =
    val.state == void 0
      ? void 0
      : deserializeSkillInvocationStatusStateField(val.state);
  if (!(val.message == void 0) && !sdIsString(val.message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "message" of type "SkillInvocationStatusField"',
    });
  }
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  if (!(val.error_code == void 0) && !sdIsString(val.error_code)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "error_code" of type "SkillInvocationStatusField"',
    });
  }
  const errorCode: undefined | string =
    val.error_code == void 0 ? void 0 : val.error_code;
  if (!(val.additional_info == void 0) && !sdIsString(val.additional_info)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "additional_info" of type "SkillInvocationStatusField"',
    });
  }
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
  val: SerializedData
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
  val: SerializedData
): SkillInvocationEnterpriseField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SkillInvocationEnterpriseField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "SkillInvocationEnterpriseField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | SkillInvocationEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeSkillInvocationEnterpriseTypeField(val.type);
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "name" of type "SkillInvocationEnterpriseField"',
    });
  }
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
export function deserializeSkillInvocation(
  val: SerializedData
): SkillInvocation {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "SkillInvocation"' });
  }
  const type: undefined | SkillInvocationTypeField =
    val.type == void 0 ? void 0 : deserializeSkillInvocationTypeField(val.type);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "SkillInvocation"',
    });
  }
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
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "SkillInvocation"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.trigger == void 0) && !sdIsString(val.trigger)) {
    throw new BoxSdkError({
      message: 'Expecting string for "trigger" of type "SkillInvocation"',
    });
  }
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
