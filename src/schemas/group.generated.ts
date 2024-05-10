import { serializeGroupBaseTypeField } from './groupBase.generated.js';
import { deserializeGroupBaseTypeField } from './groupBase.generated.js';
import { serializeGroupBase } from './groupBase.generated.js';
import { deserializeGroupBase } from './groupBase.generated.js';
import { serializeGroupMiniGroupTypeField } from './groupMini.generated.js';
import { deserializeGroupMiniGroupTypeField } from './groupMini.generated.js';
import { serializeGroupMini } from './groupMini.generated.js';
import { deserializeGroupMini } from './groupMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { GroupBaseTypeField } from './groupBase.generated.js';
import { GroupBase } from './groupBase.generated.js';
import { GroupMiniGroupTypeField } from './groupMini.generated.js';
import { GroupMini } from './groupMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class Group extends GroupMini {
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  constructor(fields: Group) {
    super(fields);
  }
}
export function serializeGroup(val: Group): SerializedData {
  const base: any = serializeGroupMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "Group"' });
  }
  return {
    ...base,
    ...{
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
    },
  };
}
export function deserializeGroup(val: any): Group {
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const groupType: undefined | GroupMiniGroupTypeField =
    val.group_type == void 0
      ? void 0
      : deserializeGroupMiniGroupTypeField(val.group_type);
  const id: string = val.id;
  const type: GroupBaseTypeField = deserializeGroupBaseTypeField(val.type);
  return {
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    name: name,
    groupType: groupType,
    id: id,
    type: type,
  } satisfies Group;
}
