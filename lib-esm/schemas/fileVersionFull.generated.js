import { deserializeFileVersionBaseTypeField } from './fileVersionBase.generated.js';
import { deserializeDateTime } from '../internal/utils.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeFileVersion } from './fileVersion.generated.js';
import { FileVersion } from './fileVersion.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FileVersionFull extends FileVersion {
    constructor(fields) {
        super(fields);
        if (fields.versionNumber !== undefined) {
            this.versionNumber = fields.versionNumber;
        }
    }
}
export function serializeFileVersionFull(val) {
    const base = serializeFileVersion(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileVersionFull"' });
    }
    return { ...base, ...{ ['version_number']: val.versionNumber } };
}
export function deserializeFileVersionFull(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileVersionFull"' });
    }
    if (!(val.version_number == void 0) && !sdIsString(val.version_number)) {
        throw new BoxSdkError({
            message: 'Expecting string for "version_number" of type "FileVersionFull"',
        });
    }
    const versionNumber = val.version_number == void 0 ? void 0 : val.version_number;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "FileVersionFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.size == void 0) && !sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "FileVersionFull"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "FileVersionFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "FileVersionFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    const modifiedBy = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "FileVersionFull"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
    const trashedBy = val.trashed_by == void 0 ? void 0 : deserializeUserMini(val.trashed_by);
    if (!(val.restored_at == void 0) && !sdIsString(val.restored_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "restored_at" of type "FileVersionFull"',
        });
    }
    const restoredAt = val.restored_at == void 0 ? void 0 : deserializeDateTime(val.restored_at);
    const restoredBy = val.restored_by == void 0 ? void 0 : deserializeUserMini(val.restored_by);
    if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "purged_at" of type "FileVersionFull"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
    if (!(val.uploader_display_name == void 0) &&
        !sdIsString(val.uploader_display_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "uploader_display_name" of type "FileVersionFull"',
        });
    }
    const uploaderDisplayName = val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
    if (!(val.sha1 == void 0) && !sdIsString(val.sha1)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sha1" of type "FileVersionFull"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
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
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "FileVersionFull" to be defined',
        });
    }
    const type = deserializeFileVersionBaseTypeField(val.type);
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
    };
}
//# sourceMappingURL=fileVersionFull.generated.js.map