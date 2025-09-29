import { serializeFileFull } from './fileFull.generated';
import { deserializeFileFull } from './fileFull.generated';
import { serializeFolderMini } from './folderMini.generated';
import { deserializeFolderMini } from './folderMini.generated';
import { serializeWebLink } from './webLink.generated';
import { deserializeWebLink } from './webLink.generated';
import { FileFull } from './fileFull.generated';
import { FolderMini } from './folderMini.generated';
import { WebLink } from './webLink.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type FileFullOrFolderMiniOrWebLink = FileFull | FolderMini | WebLink;
export function serializeFileFullOrFolderMiniOrWebLink(
  val: any,
): SerializedData {
  if (val.type == 'file') {
    return serializeFileFull(val);
  }
  if (val.type == 'folder') {
    return serializeFolderMini(val);
  }
  if (val.type == 'web_link') {
    return serializeWebLink(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileFullOrFolderMiniOrWebLink(
  val: SerializedData,
): FileFullOrFolderMiniOrWebLink {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileFullOrFolderMiniOrWebLink"',
    });
  }
  if (val.type == 'file') {
    return deserializeFileFull(val);
  }
  if (val.type == 'folder') {
    return deserializeFolderMini(val);
  }
  if (val.type == 'web_link') {
    return deserializeWebLink(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize FileFullOrFolderMiniOrWebLink",
  });
}
