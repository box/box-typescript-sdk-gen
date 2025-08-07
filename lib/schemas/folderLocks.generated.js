"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFolderLocks = serializeFolderLocks;
exports.deserializeFolderLocks = deserializeFolderLocks;
const folderLock_generated_js_1 = require("./folderLock.generated.js");
const folderLock_generated_js_2 = require("./folderLock.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeFolderLocks(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, folderLock_generated_js_1.serializeFolderLock)(item);
            }),
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
    };
}
function deserializeFolderLocks(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FolderLocks"' });
    }
    if (!(val.entries == void 0) && !(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "FolderLocks"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, folderLock_generated_js_2.deserializeFolderLock)(itm);
            })
            : [];
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsString)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "limit" of type "FolderLocks"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_1.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "FolderLocks"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    return {
        entries: entries,
        limit: limit,
        nextMarker: nextMarker,
    };
}
//# sourceMappingURL=folderLocks.generated.js.map