import { serializeAppItemEventSource } from './appItemEventSource.generated';
import { deserializeAppItemEventSource } from './appItemEventSource.generated';
import { serializeEventSource } from './eventSource.generated';
import { deserializeEventSource } from './eventSource.generated';
import { serializeFile } from './file.generated';
import { deserializeFile } from './file.generated';
import { serializeFolder } from './folder.generated';
import { deserializeFolder } from './folder.generated';
import { serializeGenericSource } from './genericSource.generated';
import { deserializeGenericSource } from './genericSource.generated';
import { serializeUser } from './user.generated';
import { deserializeUser } from './user.generated';
import { AppItemEventSource } from './appItemEventSource.generated';
import { EventSource } from './eventSource.generated';
import { File } from './file.generated';
import { Folder } from './folder.generated';
import { GenericSource } from './genericSource.generated';
import { User } from './user.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser =
  AppItemEventSource | EventSource | File | Folder | GenericSource | User;
export function serializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser(
  val: any,
): SerializedData {
  if (val.type == 'app_item') {
    return serializeAppItemEventSource(val);
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
  if (val.itemType == 'file') {
    return serializeEventSource(val);
  }
  if (val.itemType == 'folder') {
    return serializeEventSource(val);
  }
  return serializeGenericSource(val);
}
export function deserializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser(
  val: SerializedData,
): AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser"',
    });
  }
  if (val.type == 'app_item') {
    return deserializeAppItemEventSource(val);
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
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser"',
    });
  }
  if (val.item_type == 'file') {
    return deserializeEventSource(val);
  }
  if (val.item_type == 'folder') {
    return deserializeEventSource(val);
  }
  try {
    return deserializeGenericSource(val);
  } catch (error) {
    void 0;
  } finally {
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser",
  });
}
