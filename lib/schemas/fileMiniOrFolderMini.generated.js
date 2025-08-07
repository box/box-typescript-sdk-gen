"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileMiniOrFolderMini = serializeFileMiniOrFolderMini;
exports.deserializeFileMiniOrFolderMini = deserializeFileMiniOrFolderMini;
const fileMini_generated_js_1 = require("./fileMini.generated.js");
const fileMini_generated_js_2 = require("./fileMini.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeFileMiniOrFolderMini(val) {
    if (val.type == 'file') {
        return (0, fileMini_generated_js_1.serializeFileMini)(val);
    }
    if (val.type == 'folder') {
        return (0, folderMini_generated_js_1.serializeFolderMini)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeFileMiniOrFolderMini(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileMiniOrFolderMini"',
        });
    }
    if (val.type == 'file') {
        return (0, fileMini_generated_js_2.deserializeFileMini)(val);
    }
    if (val.type == 'folder') {
        return (0, folderMini_generated_js_2.deserializeFolderMini)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FileMiniOrFolderMini" });
}
//# sourceMappingURL=fileMiniOrFolderMini.generated.js.map