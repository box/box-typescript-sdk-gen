"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileBaseOrFolderBaseOrWebLinkBase = serializeFileBaseOrFolderBaseOrWebLinkBase;
exports.deserializeFileBaseOrFolderBaseOrWebLinkBase = deserializeFileBaseOrFolderBaseOrWebLinkBase;
const fileBase_generated_js_1 = require("./fileBase.generated.js");
const fileBase_generated_js_2 = require("./fileBase.generated.js");
const folderBase_generated_js_1 = require("./folderBase.generated.js");
const folderBase_generated_js_2 = require("./folderBase.generated.js");
const webLinkBase_generated_js_1 = require("./webLinkBase.generated.js");
const webLinkBase_generated_js_2 = require("./webLinkBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeFileBaseOrFolderBaseOrWebLinkBase(val) {
    if (val.type == 'file') {
        return (0, fileBase_generated_js_1.serializeFileBase)(val);
    }
    if (val.type == 'folder') {
        return (0, folderBase_generated_js_1.serializeFolderBase)(val);
    }
    if (val.type == 'web_link') {
        return (0, webLinkBase_generated_js_1.serializeWebLinkBase)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeFileBaseOrFolderBaseOrWebLinkBase(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileBaseOrFolderBaseOrWebLinkBase"',
        });
    }
    if (val.type == 'file') {
        return (0, fileBase_generated_js_2.deserializeFileBase)(val);
    }
    if (val.type == 'folder') {
        return (0, folderBase_generated_js_2.deserializeFolderBase)(val);
    }
    if (val.type == 'web_link') {
        return (0, webLinkBase_generated_js_2.deserializeWebLinkBase)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileBaseOrFolderBaseOrWebLinkBase",
    });
}
//# sourceMappingURL=fileBaseOrFolderBaseOrWebLinkBase.generated.js.map