import { serializeFileVersionBaseTypeField } from './fileVersionBase.generated.js';
import { deserializeFileVersionBaseTypeField } from './fileVersionBase.generated.js';
import { serializeFileVersionBase } from './fileVersionBase.generated.js';
import { deserializeFileVersionBase } from './fileVersionBase.generated.js';
import { serializeFileVersionMini } from './fileVersionMini.generated.js';
import { deserializeFileVersionMini } from './fileVersionMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeFileVersion } from './fileVersion.generated.js';
import { deserializeFileVersion } from './fileVersion.generated.js';
import { FileVersionBaseTypeField } from './fileVersionBase.generated.js';
import { FileVersionBase } from './fileVersionBase.generated.js';
import { FileVersionMini } from './fileVersionMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { UserMini } from './userMini.generated.js';
import { FileVersion } from './fileVersion.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FileVersionFull extends FileVersion {
  readonly versionNumber?: string;
  constructor(fields: FileVersionFull) {
    super(fields);
  }
}
export function serializeFileVersionFull(val: FileVersionFull): SerializedData {
  const base: any = serializeFileVersion(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FileVersionFull"' });
  }
  return {
    ...base,
    ...{
      ['version_number']:
        val.versionNumber == void 0 ? void 0 : val.versionNumber,
    },
  };
}
export function deserializeFileVersionFull(val: any): FileVersionFull {
  const versionNumber: undefined | string =
    val.version_number == void 0 ? void 0 : val.version_number;
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
    versionNumber: versionNumber,
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
  } satisfies FileVersionFull;
}
