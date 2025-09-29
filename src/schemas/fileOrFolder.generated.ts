import { serializeFile } from './file.generated';
import { deserializeFile } from './file.generated';
import { serializeFolder } from './folder.generated';
import { deserializeFolder } from './folder.generated';
import { File } from './file.generated';
import { Folder } from './folder.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type FileOrFolder = File | Folder;
export function serializeFileOrFolder(val: any): SerializedData {
  if (val.type == 'file') {
    return serializeFile(val);
  }
  if (val.type == 'folder') {
    return serializeFolder(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileOrFolder(val: SerializedData): FileOrFolder {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FileOrFolder"' });
  }
  if (val.type == 'file') {
    return deserializeFile(val);
  }
  if (val.type == 'folder') {
    return deserializeFolder(val);
  }
  throw new BoxSdkError({ message: "Can't deserialize FileOrFolder" });
}
