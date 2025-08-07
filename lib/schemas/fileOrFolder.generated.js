"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileOrFolder = serializeFileOrFolder;
exports.deserializeFileOrFolder = deserializeFileOrFolder;
const file_generated_js_1 = require("./file.generated.js");
const file_generated_js_2 = require("./file.generated.js");
const folder_generated_js_1 = require("./folder.generated.js");
const folder_generated_js_2 = require("./folder.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeFileOrFolder(val) {
    if (val.type == 'file') {
        return (0, file_generated_js_1.serializeFile)(val);
    }
    if (val.type == 'folder') {
        return (0, folder_generated_js_1.serializeFolder)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeFileOrFolder(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileOrFolder"' });
    }
    if (val.type == 'file') {
        return (0, file_generated_js_2.deserializeFile)(val);
    }
    if (val.type == 'folder') {
        return (0, folder_generated_js_2.deserializeFolder)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FileOrFolder" });
}
//# sourceMappingURL=fileOrFolder.generated.js.map