"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDocGenTemplateV2025R0 = serializeDocGenTemplateV2025R0;
exports.deserializeDocGenTemplateV2025R0 = deserializeDocGenTemplateV2025R0;
const fileReferenceV2025R0_generated_js_1 = require("./fileReferenceV2025R0.generated.js");
const docGenTemplateBaseV2025R0_generated_js_1 = require("./docGenTemplateBaseV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeDocGenTemplateV2025R0(val) {
    const base = (0, docGenTemplateBaseV2025R0_generated_js_1.serializeDocGenTemplateBaseV2025R0)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenTemplateV2025R0"',
        });
    }
    return Object.assign(Object.assign({}, base), { ['file_name']: val.fileName });
}
function deserializeDocGenTemplateV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenTemplateV2025R0"',
        });
    }
    if (!(val.file_name == void 0) && !(0, json_js_1.sdIsString)(val.file_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "file_name" of type "DocGenTemplateV2025R0"',
        });
    }
    const fileName = val.file_name == void 0 ? void 0 : val.file_name;
    const file = val.file == void 0 ? void 0 : (0, fileReferenceV2025R0_generated_js_1.deserializeFileReferenceV2025R0)(val.file);
    return { fileName: fileName, file: file };
}
//# sourceMappingURL=docGenTemplateV2025R0.generated.js.map