"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileFullOrFolderMiniOrWebLink = serializeFileFullOrFolderMiniOrWebLink;
exports.deserializeFileFullOrFolderMiniOrWebLink = deserializeFileFullOrFolderMiniOrWebLink;
const fileFull_generated_js_1 = require("./fileFull.generated.js");
const fileFull_generated_js_2 = require("./fileFull.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const webLink_generated_js_1 = require("./webLink.generated.js");
const webLink_generated_js_2 = require("./webLink.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeFileFullOrFolderMiniOrWebLink(val) {
    if (val.type == 'file') {
        return (0, fileFull_generated_js_1.serializeFileFull)(val);
    }
    if (val.type == 'folder') {
        return (0, folderMini_generated_js_1.serializeFolderMini)(val);
    }
    if (val.type == 'web_link') {
        return (0, webLink_generated_js_1.serializeWebLink)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeFileFullOrFolderMiniOrWebLink(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullOrFolderMiniOrWebLink"',
        });
    }
    if (val.type == 'file') {
        return (0, fileFull_generated_js_2.deserializeFileFull)(val);
    }
    if (val.type == 'folder') {
        return (0, folderMini_generated_js_2.deserializeFolderMini)(val);
    }
    if (val.type == 'web_link') {
        return (0, webLink_generated_js_2.deserializeWebLink)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileFullOrFolderMiniOrWebLink",
    });
}
//# sourceMappingURL=fileFullOrFolderMiniOrWebLink.generated.js.map