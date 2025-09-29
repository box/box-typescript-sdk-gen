import { serializeFileVersionBaseTypeField } from './fileVersionBase.generated';
import { deserializeFileVersionBaseTypeField } from './fileVersionBase.generated';
import { serializeFileVersionBase } from './fileVersionBase.generated';
import { deserializeFileVersionBase } from './fileVersionBase.generated';
import { serializeFileVersionMini } from './fileVersionMini.generated';
import { deserializeFileVersionMini } from './fileVersionMini.generated';
import { serializeDateTime } from '../internal/utils';
import { deserializeDateTime } from '../internal/utils';
import { serializeUserMini } from './userMini.generated';
import { deserializeUserMini } from './userMini.generated';
import { serializeFileVersion } from './fileVersion.generated';
import { deserializeFileVersion } from './fileVersion.generated';
import { FileVersionBaseTypeField } from './fileVersionBase.generated';
import { FileVersionBase } from './fileVersionBase.generated';
import { FileVersionMini } from './fileVersionMini.generated';
import { DateTime } from '../internal/utils';
import { UserMini } from './userMini.generated';
import { FileVersion } from './fileVersion.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export class FileVersionFull extends FileVersion {
  readonly versionNumber?: string;
  constructor(fields: FileVersionFull) {
    super(fields);
    if (fields.versionNumber !== undefined) {
      this.versionNumber = fields.versionNumber;
    }
  }
}
export function serializeFileVersionFull(val: FileVersionFull): SerializedData {
  const base: any = serializeFileVersion(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FileVersionFull"' });
  }
  return { ...base, ...{ ['version_number']: val.versionNumber } };
}
export function deserializeFileVersionFull(
  val: SerializedData,
): FileVersionFull {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FileVersionFull"' });
  }
  if (!(val.version_number == void 0) && !sdIsString(val.version_number)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "version_number" of type "FileVersionFull"',
    });
  }
  const versionNumber: undefined | string =
    val.version_number == void 0 ? void 0 : val.version_number;
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "FileVersionFull"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.size == void 0) && !sdIsNumber(val.size)) {
    throw new BoxSdkError({
      message: 'Expecting number for "size" of type "FileVersionFull"',
    });
  }
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "FileVersionFull"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "modified_at" of type "FileVersionFull"',
    });
  }
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "trashed_at" of type "FileVersionFull"',
    });
  }
  const trashedAt: undefined | DateTime =
    val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
  const trashedBy: undefined | UserMini =
    val.trashed_by == void 0 ? void 0 : deserializeUserMini(val.trashed_by);
  if (!(val.restored_at == void 0) && !sdIsString(val.restored_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "restored_at" of type "FileVersionFull"',
    });
  }
  const restoredAt: undefined | DateTime =
    val.restored_at == void 0 ? void 0 : deserializeDateTime(val.restored_at);
  const restoredBy: undefined | UserMini =
    val.restored_by == void 0 ? void 0 : deserializeUserMini(val.restored_by);
  if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "purged_at" of type "FileVersionFull"',
    });
  }
  const purgedAt: undefined | DateTime =
    val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
  if (
    !(val.uploader_display_name == void 0) &&
    !sdIsString(val.uploader_display_name)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "uploader_display_name" of type "FileVersionFull"',
    });
  }
  const uploaderDisplayName: undefined | string =
    val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
  if (!(val.sha1 == void 0) && !sdIsString(val.sha1)) {
    throw new BoxSdkError({
      message: 'Expecting string for "sha1" of type "FileVersionFull"',
    });
  }
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "FileVersionFull" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "FileVersionFull"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "FileVersionFull" to be defined',
    });
  }
  const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(
    val.type,
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
