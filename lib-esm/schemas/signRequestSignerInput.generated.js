import { deserializeDate } from '../internal/utils.js';
import { serializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSignRequestSignerInputTypeField(val) {
    return val;
}
export function deserializeSignRequestSignerInputTypeField(val) {
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
    throw new BoxSdkError({
        message: "Can't deserialize SignRequestSignerInputTypeField",
    });
}
export function serializeSignRequestSignerInputContentTypeField(val) {
    return val;
}
export function deserializeSignRequestSignerInputContentTypeField(val) {
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
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SignRequestSignerInputContentTypeField",
    });
}
export function serializeSignRequestSignerInput(val) {
    const base = serializeSignRequestPrefillTag(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SignRequestSignerInput"',
        });
    }
    return {
        ...base,
        ...{
            ['type']: val.type == void 0
                ? val.type
                : serializeSignRequestSignerInputTypeField(val.type),
            ['content_type']: val.contentType == void 0
                ? val.contentType
                : serializeSignRequestSignerInputContentTypeField(val.contentType),
            ['page_index']: val.pageIndex,
            ['read_only']: val.readOnly,
        },
    };
}
export function deserializeSignRequestSignerInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
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
        throw new BoxSdkError({
            message: 'Expecting "page_index" of type "SignRequestSignerInput" to be defined',
        });
    }
    if (!sdIsNumber(val.page_index)) {
        throw new BoxSdkError({
            message: 'Expecting number for "page_index" of type "SignRequestSignerInput"',
        });
    }
    const pageIndex = val.page_index;
    if (!(val.read_only == void 0) && !sdIsBoolean(val.read_only)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "read_only" of type "SignRequestSignerInput"',
        });
    }
    const readOnly = val.read_only == void 0 ? void 0 : val.read_only;
    if (!(val.document_tag_id == void 0) && !sdIsString(val.document_tag_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "document_tag_id" of type "SignRequestSignerInput"',
        });
    }
    const documentTagId = val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
    if (!(val.text_value == void 0) && !sdIsString(val.text_value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "text_value" of type "SignRequestSignerInput"',
        });
    }
    const textValue = val.text_value == void 0 ? void 0 : val.text_value;
    if (!(val.checkbox_value == void 0) && !sdIsBoolean(val.checkbox_value)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "checkbox_value" of type "SignRequestSignerInput"',
        });
    }
    const checkboxValue = val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
    if (!(val.date_value == void 0) && !sdIsString(val.date_value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "date_value" of type "SignRequestSignerInput"',
        });
    }
    const dateValue = val.date_value == void 0 ? void 0 : deserializeDate(val.date_value);
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