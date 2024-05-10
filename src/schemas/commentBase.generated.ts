import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type CommentBaseTypeField = 'comment';
export interface CommentBase {
  readonly id?: string;
  readonly type?: CommentBaseTypeField;
}
export function serializeCommentBaseTypeField(
  val: CommentBaseTypeField
): SerializedData {
  return val;
}
export function deserializeCommentBaseTypeField(
  val: any
): CommentBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CommentBaseTypeField"',
    });
  }
  if (val == 'comment') {
    return 'comment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCommentBase(val: CommentBase): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeCommentBaseTypeField(val.type),
  };
}
export function deserializeCommentBase(val: any): CommentBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CommentBaseTypeField =
    val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
  return { id: id, type: type } satisfies CommentBase;
}
