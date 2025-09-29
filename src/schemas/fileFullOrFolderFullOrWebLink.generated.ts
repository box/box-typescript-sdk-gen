import { serializeFileFull } from './fileFull.generated';
import { deserializeFileFull } from './fileFull.generated';
import { serializeFolderFull } from './folderFull.generated';
import { deserializeFolderFull } from './folderFull.generated';
import { serializeWebLink } from './webLink.generated';
import { deserializeWebLink } from './webLink.generated';
import { FileFull } from './fileFull.generated';
import { FolderFull } from './folderFull.generated';
import { WebLink } from './webLink.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type FileFullOrFolderFullOrWebLink = FileFull | FolderFull | WebLink;
export function serializeFileFullOrFolderFullOrWebLink(
  val: any,
): SerializedData {
  if (val.type == 'file') {
    return serializeFileFull(val);
  }
  if (val.type == 'folder') {
    return serializeFolderFull(val);
  }
  if (val.type == 'web_link') {
    return serializeWebLink(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileFullOrFolderFullOrWebLink(
  val: SerializedData,
): FileFullOrFolderFullOrWebLink {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileFullOrFolderFullOrWebLink"',
    });
  }
  if (val.type == 'file') {
    return deserializeFileFull(val);
  }
  if (val.type == 'folder') {
    return deserializeFolderFull(val);
  }
  if (val.type == 'web_link') {
    return deserializeWebLink(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize FileFullOrFolderFullOrWebLink",
  });
}
