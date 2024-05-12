import { serializeEventSource } from './eventSource.generated.js';
import { deserializeEventSource } from './eventSource.generated.js';
import { serializeFile } from './file.generated.js';
import { deserializeFile } from './file.generated.js';
import { serializeFolder } from './folder.generated.js';
import { deserializeFolder } from './folder.generated.js';
import { serializeGenericSource } from './genericSource.generated.js';
import { deserializeGenericSource } from './genericSource.generated.js';
import { serializeUser } from './user.generated.js';
import { deserializeUser } from './user.generated.js';
import { EventSource } from './eventSource.generated.js';
import { File } from './file.generated.js';
import { Folder } from './folder.generated.js';
import { GenericSource } from './genericSource.generated.js';
import { User } from './user.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type EventSourceOrFileOrFolderOrGenericSourceOrUser =
  | EventSource
  | File
  | Folder
  | GenericSource
  | User;
export function serializeEventSourceOrFileOrFolderOrGenericSourceOrUser(
  val: any
): SerializedData {
  if (val.itemType == 'file') {
    return serializeEventSource(val);
  }
  if (val.itemType == 'folder') {
    return serializeEventSource(val);
  }
  if (val.type == 'file') {
    return serializeFile(val);
  }
  if (val.type == 'folder') {
    return serializeFolder(val);
  }
  if (val.type == 'user') {
    return serializeUser(val);
  }
  return serializeGenericSource(val);
}
export function deserializeEventSourceOrFileOrFolderOrGenericSourceOrUser(
  val: SerializedData
): EventSourceOrFileOrFolderOrGenericSourceOrUser {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "EventSourceOrFileOrFolderOrGenericSourceOrUser"',
    });
  }
  if (val.item_type == 'file') {
    return deserializeEventSource(val);
  }
  if (val.item_type == 'folder') {
    return deserializeEventSource(val);
  }
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "EventSourceOrFileOrFolderOrGenericSourceOrUser"',
    });
  }
  if (val.type == 'file') {
    return deserializeFile(val);
  }
  if (val.type == 'folder') {
    return deserializeFolder(val);
  }
  if (val.type == 'user') {
    return deserializeUser(val);
  }
  return deserializeGenericSource(val);
}
