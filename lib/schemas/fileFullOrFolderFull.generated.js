"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileFullOrFolderFull = serializeFileFullOrFolderFull;
exports.deserializeFileFullOrFolderFull = deserializeFileFullOrFolderFull;
const fileFull_generated_js_1 = require("./fileFull.generated.js");
const fileFull_generated_js_2 = require("./fileFull.generated.js");
const folderFull_generated_js_1 = require("./folderFull.generated.js");
const folderFull_generated_js_2 = require("./folderFull.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeFileFullOrFolderFull(val) {
    if (val.type == 'file') {
        return (0, fileFull_generated_js_1.serializeFileFull)(val);
    }
    if (val.type == 'folder') {
        return (0, folderFull_generated_js_1.serializeFolderFull)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeFileFullOrFolderFull(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullOrFolderFull"',
        });
    }
    if (val.type == 'file') {
        return (0, fileFull_generated_js_2.deserializeFileFull)(val);
    }
    if (val.type == 'folder') {
        return (0, folderFull_generated_js_2.deserializeFolderFull)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FileFullOrFolderFull" });
}
//# sourceMappingURL=fileFullOrFolderFull.generated.js.map