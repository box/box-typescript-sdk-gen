"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDocGenDocumentGenerationDataV2025R0 = serializeDocGenDocumentGenerationDataV2025R0;
exports.deserializeDocGenDocumentGenerationDataV2025R0 = deserializeDocGenDocumentGenerationDataV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeDocGenDocumentGenerationDataV2025R0(val) {
    return {
        ['generated_file_name']: val.generatedFileName,
        ['user_input']: Object.fromEntries(Object.entries(val.userInput).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ])),
    };
}
function deserializeDocGenDocumentGenerationDataV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenDocumentGenerationDataV2025R0"',
        });
    }
    if (val.generated_file_name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "generated_file_name" of type "DocGenDocumentGenerationDataV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.generated_file_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "generated_file_name" of type "DocGenDocumentGenerationDataV2025R0"',
        });
    }
    const generatedFileName = val.generated_file_name;
    if (val.user_input == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "user_input" of type "DocGenDocumentGenerationDataV2025R0" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsMap)(val.user_input)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting object for "user_input" of type "DocGenDocumentGenerationDataV2025R0"',
        });
    }
    const userInput = (0, json_js_2.sdIsMap)(val.user_input)
        ? Object.fromEntries(Object.entries(val.user_input).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ]))
        : {};
    return {
        generatedFileName: generatedFileName,
        userInput: userInput,
    };
}
//# sourceMappingURL=docGenDocumentGenerationDataV2025R0.generated.js.map