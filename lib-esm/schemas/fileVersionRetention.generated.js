import { serializeFileVersionMini } from './fileVersionMini.generated.js';
import { deserializeFileVersionMini } from './fileVersionMini.generated.js';
import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { serializeRetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { deserializeRetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileVersionRetentionTypeField(val) {
    return val;
}
export function deserializeFileVersionRetentionTypeField(val) {
    if (val == 'file_version_retention') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileVersionRetentionTypeField",
    });
}
export function serializeFileVersionRetention(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeFileVersionRetentionTypeField(val.type),
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : serializeFileVersionMini(val.fileVersion),
        ['file']: val.file == void 0 ? val.file : serializeFileMini(val.file),
        ['applied_at']: val.appliedAt == void 0
            ? val.appliedAt
            : serializeDateTime(val.appliedAt),
        ['disposition_at']: val.dispositionAt == void 0
            ? val.dispositionAt
            : serializeDateTime(val.dispositionAt),
        ['winning_retention_policy']: val.winningRetentionPolicy == void 0
            ? val.winningRetentionPolicy
            : serializeRetentionPolicyMini(val.winningRetentionPolicy),
    };
}
export function deserializeFileVersionRetention(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileVersionRetention"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionRetention"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeFileVersionRetentionTypeField(val.type);
    const fileVersion = val.file_version == void 0
        ? void 0
        : deserializeFileVersionMini(val.file_version);
    const file = val.file == void 0 ? void 0 : deserializeFileMini(val.file);
    if (!(val.applied_at == void 0) && !sdIsString(val.applied_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "applied_at" of type "FileVersionRetention"',
        });
    }
    const appliedAt = val.applied_at == void 0 ? void 0 : deserializeDateTime(val.applied_at);
    if (!(val.disposition_at == void 0) && !sdIsString(val.disposition_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "disposition_at" of type "FileVersionRetention"',
        });
    }
    const dispositionAt = val.disposition_at == void 0
        ? void 0
        : deserializeDateTime(val.disposition_at);
    const winningRetentionPolicy = val.winning_retention_policy == void 0
        ? void 0
        : deserializeRetentionPolicyMini(val.winning_retention_policy);
    return {
        id: id,
        type: type,
        fileVersion: fileVersion,
        file: file,
        appliedAt: appliedAt,
        dispositionAt: dispositionAt,
        winningRetentionPolicy: winningRetentionPolicy,
    };
}
//# sourceMappingURL=fileVersionRetention.generated.js.map