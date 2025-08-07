"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDocGenTemplateCreateRequestV2025R0 = serializeDocGenTemplateCreateRequestV2025R0;
exports.deserializeDocGenTemplateCreateRequestV2025R0 = deserializeDocGenTemplateCreateRequestV2025R0;
const fileReferenceV2025R0_generated_js_1 = require("./fileReferenceV2025R0.generated.js");
const fileReferenceV2025R0_generated_js_2 = require("./fileReferenceV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
function serializeDocGenTemplateCreateRequestV2025R0(val) {
    return { ['file']: (0, fileReferenceV2025R0_generated_js_1.serializeFileReferenceV2025R0)(val.file) };
}
function deserializeDocGenTemplateCreateRequestV2025R0(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenTemplateCreateRequestV2025R0"',
        });
    }
    if (val.file == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "file" of type "DocGenTemplateCreateRequestV2025R0" to be defined',
        });
    }
    const file = (0, fileReferenceV2025R0_generated_js_2.deserializeFileReferenceV2025R0)(val.file);
    return { file: file };
}
//# sourceMappingURL=docGenTemplateCreateRequestV2025R0.generated.js.map