import { serializeFolderBaseTypeField } from './folderBase.generated.js';
import { deserializeFolderBaseTypeField } from './folderBase.generated.js';
import { serializeFolderBase } from './folderBase.generated.js';
import { deserializeFolderBase } from './folderBase.generated.js';
import { FolderBaseTypeField } from './folderBase.generated.js';
import { FolderBase } from './folderBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FolderMini extends FolderBase {
  readonly sequenceId?: string;
  readonly name?: string;
  constructor(
    fields: Omit<FolderMini, 'type'> & Partial<Pick<FolderMini, 'type'>>
  ) {
    super(fields);
  }
}
export function serializeFolderMini(val: FolderMini): SerializedData {
  const base: any = serializeFolderBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FolderMini"' });
  }
  return {
    ...base,
    ...{
      ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
      ['name']: val.name == void 0 ? void 0 : val.name,
    },
  };
}
export function deserializeFolderMini(val: any): FolderMini {
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
  return {
    sequenceId: sequenceId,
    name: name,
    id: id,
    etag: etag,
    type: type,
  } satisfies FolderMini;
}
