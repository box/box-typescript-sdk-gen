import { serializeFileBase } from './fileBase.generated';
import { deserializeFileBase } from './fileBase.generated';
import { serializeFolderBase } from './folderBase.generated';
import { deserializeFolderBase } from './folderBase.generated';
import { serializeWebLinkBase } from './webLinkBase.generated';
import { deserializeWebLinkBase } from './webLinkBase.generated';
import { FileBase } from './fileBase.generated';
import { FolderBase } from './folderBase.generated';
import { WebLinkBase } from './webLinkBase.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type FileBaseOrFolderBaseOrWebLinkBase =
  | FileBase
  | FolderBase
  | WebLinkBase;
export function serializeFileBaseOrFolderBaseOrWebLinkBase(
  val: any,
): SerializedData {
  if (val.type == 'file') {
    return serializeFileBase(val);
  }
  if (val.type == 'folder') {
    return serializeFolderBase(val);
  }
  if (val.type == 'web_link') {
    return serializeWebLinkBase(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileBaseOrFolderBaseOrWebLinkBase(
  val: SerializedData,
): FileBaseOrFolderBaseOrWebLinkBase {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileBaseOrFolderBaseOrWebLinkBase"',
    });
  }
  if (val.type == 'file') {
    return deserializeFileBase(val);
  }
  if (val.type == 'folder') {
    return deserializeFolderBase(val);
  }
  if (val.type == 'web_link') {
    return deserializeWebLinkBase(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize FileBaseOrFolderBaseOrWebLinkBase",
  });
}
