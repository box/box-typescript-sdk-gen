"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeZipDownloadRequestItemsTypeField = serializeZipDownloadRequestItemsTypeField;
exports.deserializeZipDownloadRequestItemsTypeField = deserializeZipDownloadRequestItemsTypeField;
exports.serializeZipDownloadRequestItemsField = serializeZipDownloadRequestItemsField;
exports.deserializeZipDownloadRequestItemsField = deserializeZipDownloadRequestItemsField;
exports.serializeZipDownloadRequest = serializeZipDownloadRequest;
exports.deserializeZipDownloadRequest = deserializeZipDownloadRequest;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeZipDownloadRequestItemsTypeField(val) {
    return val;
}
function deserializeZipDownloadRequestItemsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ZipDownloadRequestItemsTypeField",
    });
}
function serializeZipDownloadRequestItemsField(val) {
    return {
        ['type']: serializeZipDownloadRequestItemsTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeZipDownloadRequestItemsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ZipDownloadRequestItemsField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ZipDownloadRequestItemsField" to be defined',
        });
    }
    const type = deserializeZipDownloadRequestItemsTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ZipDownloadRequestItemsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ZipDownloadRequestItemsField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeZipDownloadRequest(val) {
    return {
        ['items']: val.items.map(function (item) {
            return serializeZipDownloadRequestItemsField(item);
        }),
        ['download_file_name']: val.downloadFileName,
    };
}
function deserializeZipDownloadRequest(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ZipDownloadRequest"',
        });
    }
    if (val.items == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "items" of type "ZipDownloadRequest" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.items)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "items" of type "ZipDownloadRequest"',
        });
    }
    const items = (0, json_js_2.sdIsList)(val.items)
        ? val.items.map(function (itm) {
            return deserializeZipDownloadRequestItemsField(itm);
        })
        : [];
    if (!(val.download_file_name == void 0) &&
        !(0, json_js_1.sdIsString)(val.download_file_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "download_file_name" of type "ZipDownloadRequest"',
        });
    }
    const downloadFileName = val.download_file_name == void 0 ? void 0 : val.download_file_name;
    return {
        items: items,
        downloadFileName: downloadFileName,
    };
}
//# sourceMappingURL=zipDownloadRequest.generated.js.map