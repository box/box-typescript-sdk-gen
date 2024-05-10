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
export type SignRequestSignerInputTypeField =
  | 'signature'
  | 'date'
  | 'text'
  | 'checkbox'
  | 'radio'
  | 'dropdown';
export type SignRequestSignerInputContentTypeField =
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
export type SignRequestSignerInput = SignRequestPrefillTag & {
  readonly type?: SignRequestSignerInputTypeField;
  readonly contentType?: SignRequestSignerInputContentTypeField;
  readonly pageIndex: number;
  readonly readOnly?: boolean;
};
export function serializeSignRequestSignerInputTypeField(
  val: SignRequestSignerInputTypeField
): SerializedData {
  return val;
}
export function deserializeSignRequestSignerInputTypeField(
  val: SerializedData
): SignRequestSignerInputTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SignRequestSignerInputTypeField"',
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
export function serializeSignRequestSignerInputContentTypeField(
  val: SignRequestSignerInputContentTypeField
): SerializedData {
  return val;
}
export function deserializeSignRequestSignerInputContentTypeField(
  val: SerializedData
): SignRequestSignerInputContentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SignRequestSignerInputContentTypeField"',
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
export function serializeSignRequestSignerInput(
  val: SignRequestSignerInput
): SerializedData {
  const base: any = serializeSignRequestPrefillTag(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SignRequestSignerInput"',
    });
  }
  return {
    ...base,
    ...{
      ['type']:
        val.type == void 0
          ? void 0
          : serializeSignRequestSignerInputTypeField(val.type),
      ['content_type']:
        val.contentType == void 0
          ? void 0
          : serializeSignRequestSignerInputContentTypeField(val.contentType),
      ['page_index']: val.pageIndex,
      ['read_only']: val.readOnly == void 0 ? void 0 : val.readOnly,
    },
  };
}
export function deserializeSignRequestSignerInput(
  val: SerializedData
): SignRequestSignerInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SignRequestSignerInput"',
    });
  }
  const type: undefined | SignRequestSignerInputTypeField =
    val.type == void 0
      ? void 0
      : deserializeSignRequestSignerInputTypeField(val.type);
  const contentType: undefined | SignRequestSignerInputContentTypeField =
    val.content_type == void 0
      ? void 0
      : deserializeSignRequestSignerInputContentTypeField(val.content_type);
  if (val.page_index == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "page_index" of type "SignRequestSignerInput" to be defined',
    });
  }
  if (!sdIsNumber(val.page_index)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "page_index" of type "SignRequestSignerInput"',
    });
  }
  const pageIndex: number = val.page_index;
  if (!(val.read_only == void 0) && !sdIsBoolean(val.read_only)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "read_only" of type "SignRequestSignerInput"',
    });
  }
  const readOnly: undefined | boolean =
    val.read_only == void 0 ? void 0 : val.read_only;
  if (!(val.document_tag_id == void 0) && !sdIsString(val.document_tag_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "document_tag_id" of type "SignRequestSignerInput"',
    });
  }
  const documentTagId: undefined | string =
    val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
  if (!(val.text_value == void 0) && !sdIsString(val.text_value)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "text_value" of type "SignRequestSignerInput"',
    });
  }
  const textValue: undefined | string =
    val.text_value == void 0 ? void 0 : val.text_value;
  if (!(val.checkbox_value == void 0) && !sdIsBoolean(val.checkbox_value)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "checkbox_value" of type "SignRequestSignerInput"',
    });
  }
  const checkboxValue: undefined | boolean =
    val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
  if (!(val.date_value == void 0) && !sdIsString(val.date_value)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "date_value" of type "SignRequestSignerInput"',
    });
  }
  const dateValue: undefined | Date =
    val.date_value == void 0 ? void 0 : deserializeDate(val.date_value);
  return {
    type: type,
    contentType: contentType,
    pageIndex: pageIndex,
    readOnly: readOnly,
    documentTagId: documentTagId,
    textValue: textValue,
    checkboxValue: checkboxValue,
    dateValue: dateValue,
  } satisfies SignRequestSignerInput;
}
