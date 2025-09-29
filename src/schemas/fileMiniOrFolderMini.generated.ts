import { serializeFileMini } from './fileMini.generated';
import { deserializeFileMini } from './fileMini.generated';
import { serializeFolderMini } from './folderMini.generated';
import { deserializeFolderMini } from './folderMini.generated';
import { FileMini } from './fileMini.generated';
import { FolderMini } from './folderMini.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type FileMiniOrFolderMini = FileMini | FolderMini;
export function serializeFileMiniOrFolderMini(val: any): SerializedData {
  if (val.type == 'file') {
    return serializeFileMini(val);
  }
  if (val.type == 'folder') {
    return serializeFolderMini(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileMiniOrFolderMini(
  val: SerializedData,
): FileMiniOrFolderMini {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileMiniOrFolderMini"',
    });
  }
  if (val.type == 'file') {
    return deserializeFileMini(val);
  }
  if (val.type == 'folder') {
    return deserializeFolderMini(val);
  }
  throw new BoxSdkError({ message: "Can't deserialize FileMiniOrFolderMini" });
}
