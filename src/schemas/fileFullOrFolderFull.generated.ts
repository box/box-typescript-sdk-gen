import { serializeFileFull } from './fileFull.generated';
import { deserializeFileFull } from './fileFull.generated';
import { serializeFolderFull } from './folderFull.generated';
import { deserializeFolderFull } from './folderFull.generated';
import { FileFull } from './fileFull.generated';
import { FolderFull } from './folderFull.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type FileFullOrFolderFull = FileFull | FolderFull;
export function serializeFileFullOrFolderFull(val: any): SerializedData {
  if (val.type == 'file') {
    return serializeFileFull(val);
  }
  if (val.type == 'folder') {
    return serializeFolderFull(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileFullOrFolderFull(
  val: SerializedData,
): FileFullOrFolderFull {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileFullOrFolderFull"',
    });
  }
  if (val.type == 'file') {
    return deserializeFileFull(val);
  }
  if (val.type == 'folder') {
    return deserializeFolderFull(val);
  }
  throw new BoxSdkError({ message: "Can't deserialize FileFullOrFolderFull" });
}
