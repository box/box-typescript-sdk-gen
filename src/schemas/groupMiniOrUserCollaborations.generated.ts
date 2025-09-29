import { serializeGroupMini } from './groupMini.generated';
import { deserializeGroupMini } from './groupMini.generated';
import { serializeUserCollaborations } from './userCollaborations.generated';
import { deserializeUserCollaborations } from './userCollaborations.generated';
import { GroupMini } from './groupMini.generated';
import { UserCollaborations } from './userCollaborations.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type GroupMiniOrUserCollaborations = GroupMini | UserCollaborations;
export function serializeGroupMiniOrUserCollaborations(
  val: any,
): SerializedData {
  if (val.type == 'group') {
    return serializeGroupMini(val);
  }
  if (val.type == 'user') {
    return serializeUserCollaborations(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeGroupMiniOrUserCollaborations(
  val: SerializedData,
): GroupMiniOrUserCollaborations {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "GroupMiniOrUserCollaborations"',
    });
  }
  if (val.type == 'group') {
    return deserializeGroupMini(val);
  }
  if (val.type == 'user') {
    return deserializeUserCollaborations(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize GroupMiniOrUserCollaborations",
  });
}
