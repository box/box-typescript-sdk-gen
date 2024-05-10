import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type UserBaseTypeField = 'user';
export class UserBase {
  readonly id!: string;
  readonly type: UserBaseTypeField = 'user' as UserBaseTypeField;
  constructor(
    fields: Omit<UserBase, 'type'> & Partial<Pick<UserBase, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface UserBaseInput {
  readonly id: string;
  readonly type?: UserBaseTypeField;
}
export function serializeUserBaseTypeField(
  val: UserBaseTypeField
): SerializedData {
  return val;
}
export function deserializeUserBaseTypeField(val: any): UserBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UserBaseTypeField"',
    });
  }
  if (val == 'user') {
    return 'user';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUserBase(val: UserBase): SerializedData {
  return { ['id']: val.id, ['type']: serializeUserBaseTypeField(val.type) };
}
export function deserializeUserBase(val: any): UserBase {
  const id: string = val.id;
  const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
  return { id: id, type: type } satisfies UserBase;
}
export function serializeUserBaseInput(val: UserBaseInput): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeUserBaseTypeField(val.type),
  };
}
export function deserializeUserBaseInput(val: any): UserBaseInput {
  const id: string = val.id;
  const type: undefined | UserBaseTypeField =
    val.type == void 0 ? void 0 : deserializeUserBaseTypeField(val.type);
  return { id: id, type: type } satisfies UserBaseInput;
}
