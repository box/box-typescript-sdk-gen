import { serializeDate } from '../internal/utils.js';
import { deserializeDate } from '../internal/utils.js';
import { serializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { deserializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { Date } from '../internal/utils.js';
import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TemplateSignerInputTypeField =
  | 'signature'
  | 'date'
  | 'text'
  | 'checkbox'
  | 'attachment'
  | 'radio'
  | 'dropdown';
export type TemplateSignerInputContentTypeField =
  | 'signature'
  | 'initial'
  | 'stamp'
  | 'date'
  | 'checkbox'
  | 'text'
  | 'full_name'
  | 'first_name'
  | 'last_name'
  | 'company'
  | 'title'
  | 'email'
  | 'attachment'
  | 'radio'
  | 'dropdown';
export interface TemplateSignerInputCoordinatesField {
  readonly x?: number;
  readonly y?: number;
}
export interface TemplateSignerInputDimensionsField {
  readonly width?: number;
  readonly height?: number;
}
export type TemplateSignerInput = SignRequestPrefillTag & {
  readonly type?: TemplateSignerInputTypeField;
  readonly contentType?: TemplateSignerInputContentTypeField;
  readonly isRequired?: boolean;
  readonly pageIndex: number;
  readonly documentId?: string;
  readonly dropdownChoices?: readonly string[];
  readonly groupId?: string;
  readonly coordinates?: TemplateSignerInputCoordinatesField;
  readonly dimensions?: TemplateSignerInputDimensionsField;
  readonly label?: string;
  readonly readOnly?: boolean;
};
export function serializeTemplateSignerInputTypeField(
  val: TemplateSignerInputTypeField
): SerializedData {
  return val;
}
export function deserializeTemplateSignerInputTypeField(
  val: any
): TemplateSignerInputTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TemplateSignerInputTypeField"',
    });
  }
  if (val == 'signature') {
    return 'signature';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'text') {
    return 'text';
  }
  if (val == 'checkbox') {
    return 'checkbox';
  }
  if (val == 'attachment') {
    return 'attachment';
  }
  if (val == 'radio') {
    return 'radio';
  }
  if (val == 'dropdown') {
    return 'dropdown';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTemplateSignerInputContentTypeField(
  val: TemplateSignerInputContentTypeField
): SerializedData {
  return val;
}
export function deserializeTemplateSignerInputContentTypeField(
  val: any
): TemplateSignerInputContentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TemplateSignerInputContentTypeField"',
    });
  }
  if (val == 'signature') {
    return 'signature';
  }
  if (val == 'initial') {
    return 'initial';
  }
  if (val == 'stamp') {
    return 'stamp';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'checkbox') {
    return 'checkbox';
  }
  if (val == 'text') {
    return 'text';
  }
  if (val == 'full_name') {
    return 'full_name';
  }
  if (val == 'first_name') {
    return 'first_name';
  }
  if (val == 'last_name') {
    return 'last_name';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'title') {
    return 'title';
  }
  if (val == 'email') {
    return 'email';
  }
  if (val == 'attachment') {
    return 'attachment';
  }
  if (val == 'radio') {
    return 'radio';
  }
  if (val == 'dropdown') {
    return 'dropdown';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTemplateSignerInputCoordinatesField(
  val: TemplateSignerInputCoordinatesField
): SerializedData {
  return {
    ['x']: val.x == void 0 ? void 0 : val.x,
    ['y']: val.y == void 0 ? void 0 : val.y,
  };
}
export function deserializeTemplateSignerInputCoordinatesField(
  val: any
): TemplateSignerInputCoordinatesField {
  const x: undefined | number = val.x == void 0 ? void 0 : val.x;
  const y: undefined | number = val.y == void 0 ? void 0 : val.y;
  return { x: x, y: y } satisfies TemplateSignerInputCoordinatesField;
}
export function serializeTemplateSignerInputDimensionsField(
  val: TemplateSignerInputDimensionsField
): SerializedData {
  return {
    ['width']: val.width == void 0 ? void 0 : val.width,
    ['height']: val.height == void 0 ? void 0 : val.height,
  };
}
export function deserializeTemplateSignerInputDimensionsField(
  val: any
): TemplateSignerInputDimensionsField {
  const width: undefined | number = val.width == void 0 ? void 0 : val.width;
  const height: undefined | number = val.height == void 0 ? void 0 : val.height;
  return {
    width: width,
    height: height,
  } satisfies TemplateSignerInputDimensionsField;
}
export function serializeTemplateSignerInput(
  val: TemplateSignerInput
): SerializedData {
  const base: any = serializeSignRequestPrefillTag(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TemplateSignerInput"',
    });
  }
  return {
    ...base,
    ...{
      ['type']:
        val.type == void 0
          ? void 0
          : serializeTemplateSignerInputTypeField(val.type),
      ['content_type']:
        val.contentType == void 0
          ? void 0
          : serializeTemplateSignerInputContentTypeField(val.contentType),
      ['is_required']: val.isRequired == void 0 ? void 0 : val.isRequired,
      ['page_index']: val.pageIndex,
      ['document_id']: val.documentId == void 0 ? void 0 : val.documentId,
      ['dropdown_choices']:
        val.dropdownChoices == void 0
          ? void 0
          : (val.dropdownChoices.map(function (item: string): SerializedData {
              return item;
            }) as readonly any[]),
      ['group_id']: val.groupId == void 0 ? void 0 : val.groupId,
      ['coordinates']:
        val.coordinates == void 0
          ? void 0
          : serializeTemplateSignerInputCoordinatesField(val.coordinates),
      ['dimensions']:
        val.dimensions == void 0
          ? void 0
          : serializeTemplateSignerInputDimensionsField(val.dimensions),
      ['label']: val.label == void 0 ? void 0 : val.label,
      ['read_only']: val.readOnly == void 0 ? void 0 : val.readOnly,
    },
  };
}
export function deserializeTemplateSignerInput(val: any): TemplateSignerInput {
  const type: undefined | TemplateSignerInputTypeField =
    val.type == void 0
      ? void 0
      : deserializeTemplateSignerInputTypeField(val.type);
  const contentType: undefined | TemplateSignerInputContentTypeField =
    val.content_type == void 0
      ? void 0
      : deserializeTemplateSignerInputContentTypeField(val.content_type);
  const isRequired: undefined | boolean =
    val.is_required == void 0 ? void 0 : val.is_required;
  const pageIndex: number = val.page_index;
  const documentId: undefined | string =
    val.document_id == void 0 ? void 0 : val.document_id;
  const dropdownChoices: undefined | readonly string[] =
    val.dropdown_choices == void 0
      ? void 0
      : sdIsList(val.dropdown_choices)
      ? val.dropdown_choices
      : [];
  const groupId: undefined | string =
    val.group_id == void 0 ? void 0 : val.group_id;
  const coordinates: undefined | TemplateSignerInputCoordinatesField =
    val.coordinates == void 0
      ? void 0
      : deserializeTemplateSignerInputCoordinatesField(val.coordinates);
  const dimensions: undefined | TemplateSignerInputDimensionsField =
    val.dimensions == void 0
      ? void 0
      : deserializeTemplateSignerInputDimensionsField(val.dimensions);
  const label: undefined | string = val.label == void 0 ? void 0 : val.label;
  const readOnly: undefined | boolean =
    val.read_only == void 0 ? void 0 : val.read_only;
  const documentTagId: undefined | string =
    val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
  const textValue: undefined | string =
    val.text_value == void 0 ? void 0 : val.text_value;
  const checkboxValue: undefined | boolean =
    val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
  const dateValue: undefined | Date =
    val.date_value == void 0 ? void 0 : deserializeDate(val.date_value);
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
  } satisfies TemplateSignerInput;
}
