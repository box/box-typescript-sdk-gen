import { serializeFileVersionBaseTypeField } from './fileVersionBase.generated.js';
import { deserializeFileVersionBaseTypeField } from './fileVersionBase.generated.js';
import { serializeFileVersionBase } from './fileVersionBase.generated.js';
import { deserializeFileVersionBase } from './fileVersionBase.generated.js';
import { serializeFileVersionMini } from './fileVersionMini.generated.js';
import { deserializeFileVersionMini } from './fileVersionMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileVersionBaseTypeField } from './fileVersionBase.generated.js';
import { FileVersionBase } from './fileVersionBase.generated.js';
import { FileVersionMini } from './fileVersionMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FileVersion extends FileVersionMini {
  readonly name?: string;
  readonly size?: number;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly modifiedBy?: UserMini;
  readonly trashedAt?: DateTime;
  readonly trashedBy?: UserMini;
  readonly restoredAt?: DateTime;
  readonly restoredBy?: UserMini;
  readonly purgedAt?: DateTime;
  readonly uploaderDisplayName?: string;
  constructor(fields: FileVersion) {
    super(fields);
  }
}
export function serializeFileVersion(val: FileVersion): SerializedData {
  const base: any = serializeFileVersionMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FileVersion"' });
  }
  return {
    ...base,
    ...{
      ['name']: val.name == void 0 ? void 0 : val.name,
      ['size']: val.size == void 0 ? void 0 : val.size,
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
      ['modified_by']:
        val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
      ['trashed_at']:
        val.trashedAt == void 0 ? void 0 : serializeDateTime(val.trashedAt),
      ['trashed_by']:
        val.trashedBy == void 0 ? void 0 : serializeUserMini(val.trashedBy),
      ['restored_at']:
        val.restoredAt == void 0 ? void 0 : serializeDateTime(val.restoredAt),
      ['restored_by']:
        val.restoredBy == void 0 ? void 0 : serializeUserMini(val.restoredBy),
      ['purged_at']:
        val.purgedAt == void 0 ? void 0 : serializeDateTime(val.purgedAt),
      ['uploader_display_name']:
        val.uploaderDisplayName == void 0 ? void 0 : val.uploaderDisplayName,
    },
  };
}
export function deserializeFileVersion(val: any): FileVersion {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const trashedAt: undefined | DateTime =
    val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
  const trashedBy: undefined | UserMini =
    val.trashed_by == void 0 ? void 0 : deserializeUserMini(val.trashed_by);
  const restoredAt: undefined | DateTime =
    val.restored_at == void 0 ? void 0 : deserializeDateTime(val.restored_at);
  const restoredBy: undefined | UserMini =
    val.restored_by == void 0 ? void 0 : deserializeUserMini(val.restored_by);
  const purgedAt: undefined | DateTime =
    val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
  const uploaderDisplayName: undefined | string =
    val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const id: string = val.id;
  const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(
    val.type
  );
  return {
    name: name,
    size: size,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    modifiedBy: modifiedBy,
    trashedAt: trashedAt,
    trashedBy: trashedBy,
    restoredAt: restoredAt,
    restoredBy: restoredBy,
    purgedAt: purgedAt,
    uploaderDisplayName: uploaderDisplayName,
    sha1: sha1,
    id: id,
    type: type,
  } satisfies FileVersion;
}
