import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeZipDownloadNameConflictsTypeField(val) {
    return val;
}
export function deserializeZipDownloadNameConflictsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ZipDownloadNameConflictsTypeField",
    });
}
export function serializeZipDownloadNameConflictsField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeZipDownloadNameConflictsTypeField(val.type),
        ['original_name']: val.originalName,
        ['download_name']: val.downloadName,
    };
}
export function deserializeZipDownloadNameConflictsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ZipDownloadNameConflictsField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ZipDownloadNameConflictsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeZipDownloadNameConflictsTypeField(val.type);
    if (!(val.original_name == void 0) && !sdIsString(val.original_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "original_name" of type "ZipDownloadNameConflictsField"',
        });
    }
    const originalName = val.original_name == void 0 ? void 0 : val.original_name;
    if (!(val.download_name == void 0) && !sdIsString(val.download_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "download_name" of type "ZipDownloadNameConflictsField"',
        });
    }
    const downloadName = val.download_name == void 0 ? void 0 : val.download_name;
    return {
        id: id,
        type: type,
        originalName: originalName,
        downloadName: downloadName,
    };
}
export function serializeZipDownload(val) {
    return {
        ['download_url']: val.downloadUrl,
        ['status_url']: val.statusUrl,
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : serializeDateTime(val.expiresAt),
        ['name_conflicts']: val.nameConflicts == void 0
            ? val.nameConflicts
            : val.nameConflicts.map(function (item) {
                return item.map(function (item) {
                    return serializeZipDownloadNameConflictsField(item);
                });
            }),
    };
}
export function deserializeZipDownload(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "ZipDownload"' });
    }
    if (!(val.download_url == void 0) && !sdIsString(val.download_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "download_url" of type "ZipDownload"',
        });
    }
    const downloadUrl = val.download_url == void 0 ? void 0 : val.download_url;
    if (!(val.status_url == void 0) && !sdIsString(val.status_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "status_url" of type "ZipDownload"',
        });
    }
    const statusUrl = val.status_url == void 0 ? void 0 : val.status_url;
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "ZipDownload"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
    if (!(val.name_conflicts == void 0) && !sdIsList(val.name_conflicts)) {
        throw new BoxSdkError({
            message: 'Expecting array for "name_conflicts" of type "ZipDownload"',
        });
    }
    const nameConflicts = val.name_conflicts == void 0
        ? void 0
        : sdIsList(val.name_conflicts)
            ? val.name_conflicts.map(function (itm) {
                return sdIsList(itm)
                    ? itm.map(function (itm) {
                        return deserializeZipDownloadNameConflictsField(itm);
                    })
                    : [];
            })
            : [];
    return {
        downloadUrl: downloadUrl,
        statusUrl: statusUrl,
        expiresAt: expiresAt,
        nameConflicts: nameConflicts,
    };
}
//# sourceMappingURL=zipDownload.generated.js.map