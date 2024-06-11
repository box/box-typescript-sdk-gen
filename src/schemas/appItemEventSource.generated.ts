import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeGroupMini } from './groupMini.generated.js';
import { deserializeGroupMini } from './groupMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { GroupMini } from './groupMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AppItemEventSourceTypeField = 'app_item';
export class AppItemEventSource {
  readonly id!: string;
  readonly type: AppItemEventSourceTypeField =
    'app_item' as AppItemEventSourceTypeField;
  readonly appItemType!: string;
  readonly user?: UserMini;
  readonly group?: GroupMini;
  constructor(
    fields: Omit<AppItemEventSource, 'type'> &
      Partial<Pick<AppItemEventSource, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.appItemType) {
      this.appItemType = fields.appItemType;
    }
    if (fields.user) {
      this.user = fields.user;
    }
    if (fields.group) {
      this.group = fields.group;
    }
  }
}
export interface AppItemEventSourceInput {
  readonly id: string;
  readonly type?: AppItemEventSourceTypeField;
  readonly appItemType: string;
  readonly user?: UserMini;
  readonly group?: GroupMini;
}
export function serializeAppItemEventSourceTypeField(
  val: AppItemEventSourceTypeField
): SerializedData {
  return val;
}
export function deserializeAppItemEventSourceTypeField(
  val: SerializedData
): AppItemEventSourceTypeField {
  if (val == 'app_item') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize AppItemEventSourceTypeField",
  });
}
export function serializeAppItemEventSource(
  val: AppItemEventSource
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeAppItemEventSourceTypeField(val.type),
    ['app_item_type']: val.appItemType,
    ['user']: val.user == void 0 ? void 0 : serializeUserMini(val.user),
    ['group']: val.group == void 0 ? void 0 : serializeGroupMini(val.group),
  };
}
export function deserializeAppItemEventSource(
  val: SerializedData
): AppItemEventSource {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AppItemEventSource"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "AppItemEventSource" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "AppItemEventSource"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "AppItemEventSource" to be defined',
    });
  }
  const type: AppItemEventSourceTypeField =
    deserializeAppItemEventSourceTypeField(val.type);
  if (val.app_item_type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "app_item_type" of type "AppItemEventSource" to be defined',
    });
  }
  if (!sdIsString(val.app_item_type)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "app_item_type" of type "AppItemEventSource"',
    });
  }
  const appItemType: string = val.app_item_type;
  const user: undefined | UserMini =
    val.user == void 0 ? void 0 : deserializeUserMini(val.user);
  const group: undefined | GroupMini =
    val.group == void 0 ? void 0 : deserializeGroupMini(val.group);
  return {
    id: id,
    type: type,
    appItemType: appItemType,
    user: user,
    group: group,
  } satisfies AppItemEventSource;
}
export function serializeAppItemEventSourceInput(
  val: AppItemEventSourceInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeAppItemEventSourceTypeField(val.type),
    ['app_item_type']: val.appItemType,
    ['user']: val.user == void 0 ? void 0 : serializeUserMini(val.user),
    ['group']: val.group == void 0 ? void 0 : serializeGroupMini(val.group),
  };
}
export function deserializeAppItemEventSourceInput(
  val: SerializedData
): AppItemEventSourceInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AppItemEventSourceInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "AppItemEventSourceInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "AppItemEventSourceInput"',
    });
  }
  const id: string = val.id;
  const type: undefined | AppItemEventSourceTypeField =
    val.type == void 0
      ? void 0
      : deserializeAppItemEventSourceTypeField(val.type);
  if (val.app_item_type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "app_item_type" of type "AppItemEventSourceInput" to be defined',
    });
  }
  if (!sdIsString(val.app_item_type)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "app_item_type" of type "AppItemEventSourceInput"',
    });
  }
  const appItemType: string = val.app_item_type;
  const user: undefined | UserMini =
    val.user == void 0 ? void 0 : deserializeUserMini(val.user);
  const group: undefined | GroupMini =
    val.group == void 0 ? void 0 : deserializeGroupMini(val.group);
  return {
    id: id,
    type: type,
    appItemType: appItemType,
    user: user,
    group: group,
  } satisfies AppItemEventSourceInput;
}
