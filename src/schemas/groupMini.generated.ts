import { serializeGroupBaseTypeField } from './groupBase.generated.js';
import { deserializeGroupBaseTypeField } from './groupBase.generated.js';
import { serializeGroupBase } from './groupBase.generated.js';
import { deserializeGroupBase } from './groupBase.generated.js';
import { GroupBaseTypeField } from './groupBase.generated.js';
import { GroupBase } from './groupBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type GroupMiniGroupTypeField = 'managed_group' | 'all_users_group';
export class GroupMini extends GroupBase {
  readonly name?: string;
  readonly groupType?: GroupMiniGroupTypeField;
  constructor(fields: GroupMini) {
    super(fields);
  }
}
export function serializeGroupMiniGroupTypeField(
  val: GroupMiniGroupTypeField
): SerializedData {
  return val;
}
export function deserializeGroupMiniGroupTypeField(
  val: any
): GroupMiniGroupTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GroupMiniGroupTypeField"',
    });
  }
  if (val == 'managed_group') {
    return 'managed_group';
  }
  if (val == 'all_users_group') {
    return 'all_users_group';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGroupMini(val: GroupMini): SerializedData {
  const base: any = serializeGroupBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "GroupMini"' });
  }
  return {
    ...base,
    ...{
      ['name']: val.name == void 0 ? void 0 : val.name,
      ['group_type']:
        val.groupType == void 0
          ? void 0
          : serializeGroupMiniGroupTypeField(val.groupType),
    },
  };
}
export function deserializeGroupMini(val: any): GroupMini {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const groupType: undefined | GroupMiniGroupTypeField =
    val.group_type == void 0
      ? void 0
      : deserializeGroupMiniGroupTypeField(val.group_type);
  const id: string = val.id;
  const type: GroupBaseTypeField = deserializeGroupBaseTypeField(val.type);
  return {
    name: name,
    groupType: groupType,
    id: id,
    type: type,
  } satisfies GroupMini;
}
