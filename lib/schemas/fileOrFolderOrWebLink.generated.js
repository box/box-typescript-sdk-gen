"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileOrFolderOrWebLink = serializeFileOrFolderOrWebLink;
exports.deserializeFileOrFolderOrWebLink = deserializeFileOrFolderOrWebLink;
const file_generated_js_1 = require("./file.generated.js");
const file_generated_js_2 = require("./file.generated.js");
const folder_generated_js_1 = require("./folder.generated.js");
const folder_generated_js_2 = require("./folder.generated.js");
const webLink_generated_js_1 = require("./webLink.generated.js");
const webLink_generated_js_2 = require("./webLink.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeFileOrFolderOrWebLink(val) {
    if (val.type == 'file') {
        return (0, file_generated_js_1.serializeFile)(val);
    }
    if (val.type == 'folder') {
        return (0, folder_generated_js_1.serializeFolder)(val);
    }
    if (val.type == 'web_link') {
        return (0, webLink_generated_js_1.serializeWebLink)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeFileOrFolderOrWebLink(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileOrFolderOrWebLink"',
        });
    }
    if (val.type == 'file') {
        return (0, file_generated_js_2.deserializeFile)(val);
    }
    if (val.type == 'folder') {
        return (0, folder_generated_js_2.deserializeFolder)(val);
    }
    if (val.type == 'web_link') {
        return (0, webLink_generated_js_2.deserializeWebLink)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FileOrFolderOrWebLink" });
}
//# sourceMappingURL=fileOrFolderOrWebLink.generated.js.map