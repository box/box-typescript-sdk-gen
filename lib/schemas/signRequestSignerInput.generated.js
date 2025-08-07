"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignRequestSignerInputTypeField = serializeSignRequestSignerInputTypeField;
exports.deserializeSignRequestSignerInputTypeField = deserializeSignRequestSignerInputTypeField;
exports.serializeSignRequestSignerInputContentTypeField = serializeSignRequestSignerInputContentTypeField;
exports.deserializeSignRequestSignerInputContentTypeField = deserializeSignRequestSignerInputContentTypeField;
exports.serializeSignRequestSignerInput = serializeSignRequestSignerInput;
exports.deserializeSignRequestSignerInput = deserializeSignRequestSignerInput;
const utils_js_1 = require("../internal/utils.js");
const signRequestPrefillTag_generated_js_1 = require("./signRequestPrefillTag.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeSignRequestSignerInputTypeField(val) {
    return val;
}
function deserializeSignRequestSignerInputTypeField(val) {
    if (val == 'signature') {
        return val;
    }
    if (val == 'date') {
        return val;
    }
    if (val == 'text') {
        return val;
    }
    if (val == 'checkbox') {
        return val;
    }
    if (val == 'radio') {
        return val;
    }
    if (val == 'dropdown') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SignRequestSignerInputTypeField",
    });
}
function serializeSignRequestSignerInputContentTypeField(val) {
    return val;
}
function deserializeSignRequestSignerInputContentTypeField(val) {
    if (val == 'signature') {
        return val;
    }
    if (val == 'initial') {
        return val;
    }
    if (val == 'stamp') {
        return val;
    }
    if (val == 'date') {
        return val;
    }
    if (val == 'checkbox') {
        return val;
    }
    if (val == 'text') {
        return val;
    }
    if (val == 'full_name') {
        return val;
    }
    if (val == 'first_name') {
        return val;
    }
    if (val == 'last_name') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'title') {
        return val;
    }
    if (val == 'email') {
        return val;
    }
    if (val == 'attachment') {
        return val;
    }
    if (val == 'radio') {
        return val;
    }
    if (val == 'dropdown') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SignRequestSignerInputContentTypeField",
    });
}
function serializeSignRequestSignerInput(val) {
    const base = (0, signRequestPrefillTag_generated_js_1.serializeSignRequestPrefillTag)(val);
    if (!(0, json_js_4.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestSignerInput"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['type']: val.type == void 0
            ? val.type
            : serializeSignRequestSignerInputTypeField(val.type),
        ['content_type']: val.contentType == void 0
            ? val.contentType
            : serializeSignRequestSignerInputContentTypeField(val.contentType),
        ['page_index']: val.pageIndex,
        ['read_only']: val.readOnly,
    });
}
function deserializeSignRequestSignerInput(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestSignerInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeSignRequestSignerInputTypeField(val.type);
    const contentType = val.content_type == void 0
        ? void 0
        : deserializeSignRequestSignerInputContentTypeField(val.content_type);
    if (val.page_index == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "page_index" of type "SignRequestSignerInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.page_index)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "page_index" of type "SignRequestSignerInput"',
        });
    }
    const pageIndex = val.page_index;
    if (!(val.read_only == void 0) && !(0, json_js_1.sdIsBoolean)(val.read_only)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "read_only" of type "SignRequestSignerInput"',
        });
    }
    const readOnly = val.read_only == void 0 ? void 0 : val.read_only;
    if (!(val.document_tag_id == void 0) && !(0, json_js_3.sdIsString)(val.document_tag_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "document_tag_id" of type "SignRequestSignerInput"',
        });
    }
    const documentTagId = val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
    if (!(val.text_value == void 0) && !(0, json_js_3.sdIsString)(val.text_value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "text_value" of type "SignRequestSignerInput"',
        });
    }
    const textValue = val.text_value == void 0 ? void 0 : val.text_value;
    if (!(val.checkbox_value == void 0) && !(0, json_js_1.sdIsBoolean)(val.checkbox_value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "checkbox_value" of type "SignRequestSignerInput"',
        });
    }
    const checkboxValue = val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
    if (!(val.date_value == void 0) && !(0, json_js_3.sdIsString)(val.date_value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "date_value" of type "SignRequestSignerInput"',
        });
    }
    const dateValue = val.date_value == void 0 ? void 0 : (0, utils_js_1.deserializeDate)(val.date_value);
    return {
        type: type,
        contentType: contentType,
        pageIndex: pageIndex,
        readOnly: readOnly,
        documentTagId: documentTagId,
        textValue: textValue,
        checkboxValue: checkboxValue,
        dateValue: dateValue,
    };
}
//# sourceMappingURL=signRequestSignerInput.generated.js.map