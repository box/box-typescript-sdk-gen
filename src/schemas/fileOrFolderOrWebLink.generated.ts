import { serializeFile } from './file.generated';
import { deserializeFile } from './file.generated';
import { serializeFolder } from './folder.generated';
import { deserializeFolder } from './folder.generated';
import { serializeWebLink } from './webLink.generated';
import { deserializeWebLink } from './webLink.generated';
import { File } from './file.generated';
import { Folder } from './folder.generated';
import { WebLink } from './webLink.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type FileOrFolderOrWebLink = File | Folder | WebLink;
export function serializeFileOrFolderOrWebLink(val: any): SerializedData {
  if (val.type == 'file') {
    return serializeFile(val);
  }
  if (val.type == 'folder') {
    return serializeFolder(val);
  }
  if (val.type == 'web_link') {
    return serializeWebLink(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileOrFolderOrWebLink(
  val: SerializedData,
): FileOrFolderOrWebLink {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileOrFolderOrWebLink"',
    });
  }
  if (val.type == 'file') {
    return deserializeFile(val);
  }
  if (val.type == 'folder') {
    return deserializeFolder(val);
  }
  if (val.type == 'web_link') {
    return deserializeWebLink(val);
  }
  throw new BoxSdkError({ message: "Can't deserialize FileOrFolderOrWebLink" });
}
