"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeZipDownloadNameConflictsTypeField = serializeZipDownloadNameConflictsTypeField;
exports.deserializeZipDownloadNameConflictsTypeField = deserializeZipDownloadNameConflictsTypeField;
exports.serializeZipDownloadNameConflictsField = serializeZipDownloadNameConflictsField;
exports.deserializeZipDownloadNameConflictsField = deserializeZipDownloadNameConflictsField;
exports.serializeZipDownload = serializeZipDownload;
exports.deserializeZipDownload = deserializeZipDownload;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeZipDownloadNameConflictsTypeField(val) {
    return val;
}
function deserializeZipDownloadNameConflictsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ZipDownloadNameConflictsTypeField",
    });
}
function serializeZipDownloadNameConflictsField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeZipDownloadNameConflictsTypeField(val.type),
        ['original_name']: val.originalName,
        ['download_name']: val.downloadName,
    };
}
function deserializeZipDownloadNameConflictsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ZipDownloadNameConflictsField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ZipDownloadNameConflictsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeZipDownloadNameConflictsTypeField(val.type);
    if (!(val.original_name == void 0) && !(0, json_js_1.sdIsString)(val.original_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "original_name" of type "ZipDownloadNameConflictsField"',
        });
    }
    const originalName = val.original_name == void 0 ? void 0 : val.original_name;
    if (!(val.download_name == void 0) && !(0, json_js_1.sdIsString)(val.download_name)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeZipDownload(val) {
    return {
        ['download_url']: val.downloadUrl,
        ['status_url']: val.statusUrl,
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : (0, utils_js_1.serializeDateTime)(val.expiresAt),
        ['name_conflicts']: val.nameConflicts == void 0
            ? val.nameConflicts
            : val.nameConflicts.map(function (item) {
                return item.map(function (item) {
                    return serializeZipDownloadNameConflictsField(item);
                });
            }),
    };
}
function deserializeZipDownload(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "ZipDownload"' });
    }
    if (!(val.download_url == void 0) && !(0, json_js_1.sdIsString)(val.download_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "download_url" of type "ZipDownload"',
        });
    }
    const downloadUrl = val.download_url == void 0 ? void 0 : val.download_url;
    if (!(val.status_url == void 0) && !(0, json_js_1.sdIsString)(val.status_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "status_url" of type "ZipDownload"',
        });
    }
    const statusUrl = val.status_url == void 0 ? void 0 : val.status_url;
    if (!(val.expires_at == void 0) && !(0, json_js_1.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "ZipDownload"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expires_at);
    if (!(val.name_conflicts == void 0) && !(0, json_js_2.sdIsList)(val.name_conflicts)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "name_conflicts" of type "ZipDownload"',
        });
    }
    const nameConflicts = val.name_conflicts == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.name_conflicts)
            ? val.name_conflicts.map(function (itm) {
                return (0, json_js_2.sdIsList)(itm)
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