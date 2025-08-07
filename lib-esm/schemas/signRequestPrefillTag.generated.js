import { serializeDate } from '../internal/utils.js';
import { deserializeDate } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSignRequestPrefillTag(val) {
    return {
        ['document_tag_id']: val.documentTagId,
        ['text_value']: val.textValue,
        ['checkbox_value']: val.checkboxValue,
        ['date_value']: val.dateValue == void 0 ? val.dateValue : serializeDate(val.dateValue),
    };
}
export function deserializeSignRequestPrefillTag(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SignRequestPrefillTag"',
        });
    }
    if (!(val.document_tag_id == void 0) && !sdIsString(val.document_tag_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "document_tag_id" of type "SignRequestPrefillTag"',
        });
    }
    const documentTagId = val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
    if (!(val.text_value == void 0) && !sdIsString(val.text_value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "text_value" of type "SignRequestPrefillTag"',
        });
    }
    const textValue = val.text_value == void 0 ? void 0 : val.text_value;
    if (!(val.checkbox_value == void 0) && !sdIsBoolean(val.checkbox_value)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "checkbox_value" of type "SignRequestPrefillTag"',
        });
    }
    const checkboxValue = val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
    if (!(val.date_value == void 0) && !sdIsString(val.date_value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "date_value" of type "SignRequestPrefillTag"',
        });
    }
    const dateValue = val.date_value == void 0 ? void 0 : deserializeDate(val.date_value);
    return {
        documentTagId: documentTagId,
        textValue: textValue,
        checkboxValue: checkboxValue,
        dateValue: dateValue,
    };
}
//# sourceMappingURL=signRequestPrefillTag.generated.js.map