"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileOrFolderScopeScopeField = serializeFileOrFolderScopeScopeField;
exports.deserializeFileOrFolderScopeScopeField = deserializeFileOrFolderScopeScopeField;
exports.serializeFileOrFolderScope = serializeFileOrFolderScope;
exports.deserializeFileOrFolderScope = deserializeFileOrFolderScope;
const fileMiniOrFolderMini_generated_js_1 = require("./fileMiniOrFolderMini.generated.js");
const fileMiniOrFolderMini_generated_js_2 = require("./fileMiniOrFolderMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeFileOrFolderScopeScopeField(val) {
    return val;
}
function deserializeFileOrFolderScopeScopeField(val) {
    if (val == 'annotation_edit') {
        return val;
    }
    if (val == 'annotation_view_all') {
        return val;
    }
    if (val == 'annotation_view_self') {
        return val;
    }
    if (val == 'base_explorer') {
        return val;
    }
    if (val == 'base_picker') {
        return val;
    }
    if (val == 'base_preview') {
        return val;
    }
    if (val == 'base_upload') {
        return val;
    }
    if (val == 'item_delete') {
        return val;
    }
    if (val == 'item_download') {
        return val;
    }
    if (val == 'item_preview') {
        return val;
    }
    if (val == 'item_rename') {
        return val;
    }
    if (val == 'item_share') {
        return val;
    }
    if (val == 'item_upload') {
        return val;
    }
    if (val == 'item_read') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileOrFolderScopeScopeField",
    });
}
function serializeFileOrFolderScope(val) {
    return {
        ['scope']: val.scope == void 0
            ? val.scope
            : serializeFileOrFolderScopeScopeField(val.scope),
        ['object']: val.object == void 0
            ? val.object
            : (0, fileMiniOrFolderMini_generated_js_1.serializeFileMiniOrFolderMini)(val.object),
    };
}
function deserializeFileOrFolderScope(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileOrFolderScope"',
        });
    }
    const scope = val.scope == void 0
        ? void 0
        : deserializeFileOrFolderScopeScopeField(val.scope);
    const object = val.object == void 0 ? void 0 : (0, fileMiniOrFolderMini_generated_js_2.deserializeFileMiniOrFolderMini)(val.object);
    return { scope: scope, object: object };
}
//# sourceMappingURL=fileOrFolderScope.generated.js.map