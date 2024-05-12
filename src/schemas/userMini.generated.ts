import { serializeUserBaseTypeField } from './userBase.generated.js';
import { deserializeUserBaseTypeField } from './userBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { UserBaseTypeField } from './userBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class UserMini extends UserBase {
  readonly name?: string;
  readonly login?: string;
  constructor(fields: UserMini) {
    super(fields);
  }
}
export function serializeUserMini(val: UserMini): SerializedData {
  const base: any = serializeUserBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "UserMini"' });
  }
  return {
    ...base,
    ...{
      ['name']: val.name == void 0 ? void 0 : val.name,
      ['login']: val.login == void 0 ? void 0 : val.login,
    },
  };
}
export function deserializeUserMini(val: any): UserMini {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const id: string = val.id;
  const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
  return { name: name, login: login, id: id, type: type } satisfies UserMini;
}
