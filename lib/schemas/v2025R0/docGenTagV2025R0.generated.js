"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDocGenTagV2025R0TagTypeField = serializeDocGenTagV2025R0TagTypeField;
exports.deserializeDocGenTagV2025R0TagTypeField = deserializeDocGenTagV2025R0TagTypeField;
exports.serializeDocGenTagV2025R0 = serializeDocGenTagV2025R0;
exports.deserializeDocGenTagV2025R0 = deserializeDocGenTagV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
function serializeDocGenTagV2025R0TagTypeField(val) {
    return val;
}
function deserializeDocGenTagV2025R0TagTypeField(val) {
    if (val == 'text') {
        return val;
    }
    if (val == 'arithmetic') {
        return val;
    }
    if (val == 'conditional') {
        return val;
    }
    if (val == 'for-loop') {
        return val;
    }
    if (val == 'table-loop') {
        return val;
    }
    if (val == 'image') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DocGenTagV2025R0TagTypeField",
    });
}
function serializeDocGenTagV2025R0(val) {
    return {
        ['tag_content']: val.tagContent,
        ['tag_type']: serializeDocGenTagV2025R0TagTypeField(val.tagType),
        ['json_paths']: val.jsonPaths.map(function (item) {
            return item;
        }),
    };
}
function deserializeDocGenTagV2025R0(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenTagV2025R0"',
        });
    }
    if (val.tag_content == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "tag_content" of type "DocGenTagV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.tag_content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "tag_content" of type "DocGenTagV2025R0"',
        });
    }
    const tagContent = val.tag_content;
    if (val.tag_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "tag_type" of type "DocGenTagV2025R0" to be defined',
        });
    }
    const tagType = deserializeDocGenTagV2025R0TagTypeField(val.tag_type);
    if (val.json_paths == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "json_paths" of type "DocGenTagV2025R0" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.json_paths)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "json_paths" of type "DocGenTagV2025R0"',
        });
    }
    const jsonPaths = (0, json_js_2.sdIsList)(val.json_paths)
        ? val.json_paths.map(function (itm) {
            if (!(0, json_js_1.sdIsString)(itm)) {
                throw new errors_js_1.BoxSdkError({
                    message: 'Expecting string for "DocGenTagV2025R0"',
                });
            }
            return itm;
        })
        : [];
    return {
        tagContent: tagContent,
        tagType: tagType,
        jsonPaths: jsonPaths,
    };
}
//# sourceMappingURL=docGenTagV2025R0.generated.js.map