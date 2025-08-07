"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignRequestPrefillTag = serializeSignRequestPrefillTag;
exports.deserializeSignRequestPrefillTag = deserializeSignRequestPrefillTag;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeSignRequestPrefillTag(val) {
    return {
        ['document_tag_id']: val.documentTagId,
        ['text_value']: val.textValue,
        ['checkbox_value']: val.checkboxValue,
        ['date_value']: val.dateValue == void 0 ? val.dateValue : (0, utils_js_1.serializeDate)(val.dateValue),
    };
}
function deserializeSignRequestPrefillTag(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestPrefillTag"',
        });
    }
    if (!(val.document_tag_id == void 0) && !(0, json_js_2.sdIsString)(val.document_tag_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "document_tag_id" of type "SignRequestPrefillTag"',
        });
    }
    const documentTagId = val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
    if (!(val.text_value == void 0) && !(0, json_js_2.sdIsString)(val.text_value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "text_value" of type "SignRequestPrefillTag"',
        });
    }
    const textValue = val.text_value == void 0 ? void 0 : val.text_value;
    if (!(val.checkbox_value == void 0) && !(0, json_js_1.sdIsBoolean)(val.checkbox_value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "checkbox_value" of type "SignRequestPrefillTag"',
        });
    }
    const checkboxValue = val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
    if (!(val.date_value == void 0) && !(0, json_js_2.sdIsString)(val.date_value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "date_value" of type "SignRequestPrefillTag"',
        });
    }
    const dateValue = val.date_value == void 0 ? void 0 : (0, utils_js_2.deserializeDate)(val.date_value);
    return {
        documentTagId: documentTagId,
        textValue: textValue,
        checkboxValue: checkboxValue,
        dateValue: dateValue,
    };
}
//# sourceMappingURL=signRequestPrefillTag.generated.js.map