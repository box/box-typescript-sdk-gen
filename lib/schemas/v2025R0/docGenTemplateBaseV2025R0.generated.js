"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDocGenTemplateBaseV2025R0 = serializeDocGenTemplateBaseV2025R0;
exports.deserializeDocGenTemplateBaseV2025R0 = deserializeDocGenTemplateBaseV2025R0;
const fileReferenceV2025R0_generated_js_1 = require("./fileReferenceV2025R0.generated.js");
const fileReferenceV2025R0_generated_js_2 = require("./fileReferenceV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
function serializeDocGenTemplateBaseV2025R0(val) {
    return {
        ['file']: val.file == void 0 ? val.file : (0, fileReferenceV2025R0_generated_js_1.serializeFileReferenceV2025R0)(val.file),
    };
}
function deserializeDocGenTemplateBaseV2025R0(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenTemplateBaseV2025R0"',
        });
    }
    const file = val.file == void 0 ? void 0 : (0, fileReferenceV2025R0_generated_js_2.deserializeFileReferenceV2025R0)(val.file);
    return { file: file };
}
//# sourceMappingURL=docGenTemplateBaseV2025R0.generated.js.map