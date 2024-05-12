import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type WebLinkBaseTypeField = 'web_link';
export class WebLinkBase {
  readonly id!: string;
  readonly type: WebLinkBaseTypeField = 'web_link' as WebLinkBaseTypeField;
  readonly etag?: string;
  constructor(
    fields: Omit<WebLinkBase, 'type'> & Partial<Pick<WebLinkBase, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.etag) {
      this.etag = fields.etag;
    }
  }
}
export interface WebLinkBaseInput {
  readonly id: string;
  readonly type?: WebLinkBaseTypeField;
  readonly etag?: string;
}
export function serializeWebLinkBaseTypeField(
  val: WebLinkBaseTypeField
): SerializedData {
  return val;
}
export function deserializeWebLinkBaseTypeField(
  val: any
): WebLinkBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "WebLinkBaseTypeField"',
    });
  }
  if (val == 'web_link') {
    return 'web_link';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeWebLinkBase(val: WebLinkBase): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeWebLinkBaseTypeField(val.type),
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
  };
}
export function deserializeWebLinkBase(val: any): WebLinkBase {
  const id: string = val.id;
  const type: WebLinkBaseTypeField = deserializeWebLinkBaseTypeField(val.type);
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  return { id: id, type: type, etag: etag } satisfies WebLinkBase;
}
export function serializeWebLinkBaseInput(
  val: WebLinkBaseInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeWebLinkBaseTypeField(val.type),
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
  };
}
export function deserializeWebLinkBaseInput(val: any): WebLinkBaseInput {
  const id: string = val.id;
  const type: undefined | WebLinkBaseTypeField =
    val.type == void 0 ? void 0 : deserializeWebLinkBaseTypeField(val.type);
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  return { id: id, type: type, etag: etag } satisfies WebLinkBaseInput;
}
