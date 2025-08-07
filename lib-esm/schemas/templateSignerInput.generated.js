import { deserializeDate } from '../internal/utils.js';
import { serializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeTemplateSignerInputTypeField(val) {
    return val;
}
export function deserializeTemplateSignerInputTypeField(val) {
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
    if (val == 'attachment') {
        return val;
    }
    if (val == 'radio') {
        return val;
    }
    if (val == 'dropdown') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TemplateSignerInputTypeField",
    });
}
export function serializeTemplateSignerInputContentTypeField(val) {
    return val;
}
export function deserializeTemplateSignerInputContentTypeField(val) {
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
        message: "Can't deserialize TemplateSignerInputContentTypeField",
    });
}
export function serializeTemplateSignerInputCoordinatesField(val) {
    return { ['x']: val.x, ['y']: val.y };
}
export function deserializeTemplateSignerInputCoordinatesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TemplateSignerInputCoordinatesField"',
        });
    }
    if (!(val.x == void 0) && !sdIsNumber(val.x)) {
        throw new BoxSdkError({
            message: 'Expecting number for "x" of type "TemplateSignerInputCoordinatesField"',
        });
    }
    const x = val.x == void 0 ? void 0 : val.x;
    if (!(val.y == void 0) && !sdIsNumber(val.y)) {
        throw new BoxSdkError({
            message: 'Expecting number for "y" of type "TemplateSignerInputCoordinatesField"',
        });
    }
    const y = val.y == void 0 ? void 0 : val.y;
    return { x: x, y: y };
}
export function serializeTemplateSignerInputDimensionsField(val) {
    return { ['width']: val.width, ['height']: val.height };
}
export function deserializeTemplateSignerInputDimensionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TemplateSignerInputDimensionsField"',
        });
    }
    if (!(val.width == void 0) && !sdIsNumber(val.width)) {
        throw new BoxSdkError({
            message: 'Expecting number for "width" of type "TemplateSignerInputDimensionsField"',
        });
    }
    const width = val.width == void 0 ? void 0 : val.width;
    if (!(val.height == void 0) && !sdIsNumber(val.height)) {
        throw new BoxSdkError({
            message: 'Expecting number for "height" of type "TemplateSignerInputDimensionsField"',
        });
    }
    const height = val.height == void 0 ? void 0 : val.height;
    return {
        width: width,
        height: height,
    };
}
export function serializeTemplateSignerInput(val) {
    const base = serializeSignRequestPrefillTag(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TemplateSignerInput"',
        });
    }
    return {
        ...base,
        ...{
            ['type']: val.type == void 0
                ? val.type
                : serializeTemplateSignerInputTypeField(val.type),
            ['content_type']: val.contentType == void 0
                ? val.contentType
                : serializeTemplateSignerInputContentTypeField(val.contentType),
            ['is_required']: val.isRequired,
            ['page_index']: val.pageIndex,
            ['document_id']: val.documentId,
            ['dropdown_choices']: val.dropdownChoices == void 0
                ? val.dropdownChoices
                : val.dropdownChoices.map(function (item) {
                    return item;
                }),
            ['group_id']: val.groupId,
            ['coordinates']: val.coordinates == void 0
                ? val.coordinates
                : serializeTemplateSignerInputCoordinatesField(val.coordinates),
            ['dimensions']: val.dimensions == void 0
                ? val.dimensions
                : serializeTemplateSignerInputDimensionsField(val.dimensions),
            ['label']: val.label,
            ['read_only']: val.readOnly,
        },
    };
}
export function deserializeTemplateSignerInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TemplateSignerInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTemplateSignerInputTypeField(val.type);
    const contentType = val.content_type == void 0
        ? void 0
        : deserializeTemplateSignerInputContentTypeField(val.content_type);
    if (!(val.is_required == void 0) && !sdIsBoolean(val.is_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_required" of type "TemplateSignerInput"',
        });
    }
    const isRequired = val.is_required == void 0 ? void 0 : val.is_required;
    if (val.page_index == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "page_index" of type "TemplateSignerInput" to be defined',
        });
    }
    if (!sdIsNumber(val.page_index)) {
        throw new BoxSdkError({
            message: 'Expecting number for "page_index" of type "TemplateSignerInput"',
        });
    }
    const pageIndex = val.page_index;
    if (!(val.document_id == void 0) && !sdIsString(val.document_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "document_id" of type "TemplateSignerInput"',
        });
    }
    const documentId = val.document_id == void 0 ? void 0 : val.document_id;
    if (!(val.dropdown_choices == void 0) && !sdIsList(val.dropdown_choices)) {
        throw new BoxSdkError({
            message: 'Expecting array for "dropdown_choices" of type "TemplateSignerInput"',
        });
    }
    const dropdownChoices = val.dropdown_choices == void 0
        ? void 0
        : sdIsList(val.dropdown_choices)
            ? val.dropdown_choices.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "TemplateSignerInput"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.group_id == void 0) && !sdIsString(val.group_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "group_id" of type "TemplateSignerInput"',
        });
    }
    const groupId = val.group_id == void 0 ? void 0 : val.group_id;
    const coordinates = val.coordinates == void 0
        ? void 0
        : deserializeTemplateSignerInputCoordinatesField(val.coordinates);
    const dimensions = val.dimensions == void 0
        ? void 0
        : deserializeTemplateSignerInputDimensionsField(val.dimensions);
    if (!(val.label == void 0) && !sdIsString(val.label)) {
        throw new BoxSdkError({
            message: 'Expecting string for "label" of type "TemplateSignerInput"',
        });
    }
    const label = val.label == void 0 ? void 0 : val.label;
    if (!(val.read_only == void 0) && !sdIsBoolean(val.read_only)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "read_only" of type "TemplateSignerInput"',
        });
    }
    const readOnly = val.read_only == void 0 ? void 0 : val.read_only;
    if (!(val.document_tag_id == void 0) && !sdIsString(val.document_tag_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "document_tag_id" of type "TemplateSignerInput"',
        });
    }
    const documentTagId = val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
    if (!(val.text_value == void 0) && !sdIsString(val.text_value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "text_value" of type "TemplateSignerInput"',
        });
    }
    const textValue = val.text_value == void 0 ? void 0 : val.text_value;
    if (!(val.checkbox_value == void 0) && !sdIsBoolean(val.checkbox_value)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "checkbox_value" of type "TemplateSignerInput"',
        });
    }
    const checkboxValue = val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
    if (!(val.date_value == void 0) && !sdIsString(val.date_value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "date_value" of type "TemplateSignerInput"',
        });
    }
    const dateValue = val.date_value == void 0 ? void 0 : deserializeDate(val.date_value);
    return {
        type: type,
        contentType: contentType,
        isRequired: isRequired,
        pageIndex: pageIndex,
        documentId: documentId,
        dropdownChoices: dropdownChoices,
        groupId: groupId,
        coordinates: coordinates,
        dimensions: dimensions,
        label: label,
        readOnly: readOnly,
        documentTagId: documentTagId,
        textValue: textValue,
        checkboxValue: checkboxValue,
        dateValue: dateValue,
    };
}
//# sourceMappingURL=templateSignerInput.generated.js.map