import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type WebhookMiniTypeField = 'webhook';
export type WebhookMiniTargetTypeField = 'file' | 'folder';
export interface WebhookMiniTargetField {
  readonly id?: string;
  readonly type?: WebhookMiniTargetTypeField;
}
export interface WebhookMini {
  readonly id?: string;
  readonly type?: WebhookMiniTypeField;
  readonly target?: WebhookMiniTargetField;
}
export function serializeWebhookMiniTypeField(
  val: WebhookMiniTypeField
): SerializedData {
  return val;
}
export function deserializeWebhookMiniTypeField(
  val: any
): WebhookMiniTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "WebhookMiniTypeField"',
    });
  }
  if (val == 'webhook') {
    return 'webhook';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeWebhookMiniTargetTypeField(
  val: WebhookMiniTargetTypeField
): SerializedData {
  return val;
}
export function deserializeWebhookMiniTargetTypeField(
  val: any
): WebhookMiniTargetTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "WebhookMiniTargetTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeWebhookMiniTargetField(
  val: WebhookMiniTargetField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeWebhookMiniTargetTypeField(val.type),
  };
}
export function deserializeWebhookMiniTargetField(
  val: any
): WebhookMiniTargetField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WebhookMiniTargetTypeField =
    val.type == void 0
      ? void 0
      : deserializeWebhookMiniTargetTypeField(val.type);
  return { id: id, type: type } satisfies WebhookMiniTargetField;
}
export function serializeWebhookMini(val: WebhookMini): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeWebhookMiniTypeField(val.type),
    ['target']:
      val.target == void 0
        ? void 0
        : serializeWebhookMiniTargetField(val.target),
  };
}
export function deserializeWebhookMini(val: any): WebhookMini {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WebhookMiniTypeField =
    val.type == void 0 ? void 0 : deserializeWebhookMiniTypeField(val.type);
  const target: undefined | WebhookMiniTargetField =
    val.target == void 0
      ? void 0
      : deserializeWebhookMiniTargetField(val.target);
  return { id: id, type: type, target: target } satisfies WebhookMini;
}
