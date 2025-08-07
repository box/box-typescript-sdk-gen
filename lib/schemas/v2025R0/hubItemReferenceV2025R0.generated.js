"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubItemReferenceV2025R0 = serializeHubItemReferenceV2025R0;
exports.deserializeHubItemReferenceV2025R0 = deserializeHubItemReferenceV2025R0;
const fileReferenceV2025R0_generated_js_1 = require("./fileReferenceV2025R0.generated.js");
const fileReferenceV2025R0_generated_js_2 = require("./fileReferenceV2025R0.generated.js");
const folderReferenceV2025R0_generated_js_1 = require("./folderReferenceV2025R0.generated.js");
const folderReferenceV2025R0_generated_js_2 = require("./folderReferenceV2025R0.generated.js");
const weblinkReferenceV2025R0_generated_js_1 = require("./weblinkReferenceV2025R0.generated.js");
const weblinkReferenceV2025R0_generated_js_2 = require("./weblinkReferenceV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
function serializeHubItemReferenceV2025R0(val) {
    if (val.type == 'file') {
        return (0, fileReferenceV2025R0_generated_js_1.serializeFileReferenceV2025R0)(val);
    }
    if (val.type == 'folder') {
        return (0, folderReferenceV2025R0_generated_js_1.serializeFolderReferenceV2025R0)(val);
    }
    if (val.type == 'weblink') {
        return (0, weblinkReferenceV2025R0_generated_js_1.serializeWeblinkReferenceV2025R0)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeHubItemReferenceV2025R0(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubItemReferenceV2025R0"',
        });
    }
    if (val.type == 'file') {
        return (0, fileReferenceV2025R0_generated_js_2.deserializeFileReferenceV2025R0)(val);
    }
    if (val.type == 'folder') {
        return (0, folderReferenceV2025R0_generated_js_2.deserializeFolderReferenceV2025R0)(val);
    }
    if (val.type == 'weblink') {
        return (0, weblinkReferenceV2025R0_generated_js_2.deserializeWeblinkReferenceV2025R0)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize HubItemReferenceV2025R0",
    });
}
//# sourceMappingURL=hubItemReferenceV2025R0.generated.js.map