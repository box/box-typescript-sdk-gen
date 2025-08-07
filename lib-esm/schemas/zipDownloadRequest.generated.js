import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeZipDownloadRequestItemsTypeField(val) {
    return val;
}
export function deserializeZipDownloadRequestItemsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ZipDownloadRequestItemsTypeField",
    });
}
export function serializeZipDownloadRequestItemsField(val) {
    return {
        ['type']: serializeZipDownloadRequestItemsTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeZipDownloadRequestItemsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ZipDownloadRequestItemsField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "ZipDownloadRequestItemsField" to be defined',
        });
    }
    const type = deserializeZipDownloadRequestItemsTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "ZipDownloadRequestItemsField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ZipDownloadRequestItemsField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeZipDownloadRequest(val) {
    return {
        ['items']: val.items.map(function (item) {
            return serializeZipDownloadRequestItemsField(item);
        }),
        ['download_file_name']: val.downloadFileName,
    };
}
export function deserializeZipDownloadRequest(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ZipDownloadRequest"',
        });
    }
    if (val.items == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "items" of type "ZipDownloadRequest" to be defined',
        });
    }
    if (!sdIsList(val.items)) {
        throw new BoxSdkError({
            message: 'Expecting array for "items" of type "ZipDownloadRequest"',
        });
    }
    const items = sdIsList(val.items)
        ? val.items.map(function (itm) {
            return deserializeZipDownloadRequestItemsField(itm);
        })
        : [];
    if (!(val.download_file_name == void 0) &&
        !sdIsString(val.download_file_name)) {
        throw new BoxSdkError({
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