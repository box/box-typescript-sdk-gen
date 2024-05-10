import { serializeDate } from '../internal/utils.js';
import { deserializeDate } from '../internal/utils.js';
import { Date } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface SignRequestPrefillTag {
  readonly documentTagId?: string;
  readonly textValue?: string;
  readonly checkboxValue?: boolean;
  readonly dateValue?: Date;
}
export function serializeSignRequestPrefillTag(
  val: SignRequestPrefillTag
): SerializedData {
  return {
    ['document_tag_id']:
      val.documentTagId == void 0 ? void 0 : val.documentTagId,
    ['text_value']: val.textValue == void 0 ? void 0 : val.textValue,
    ['checkbox_value']:
      val.checkboxValue == void 0 ? void 0 : val.checkboxValue,
    ['date_value']:
      val.dateValue == void 0 ? void 0 : serializeDate(val.dateValue),
  };
}
export function deserializeSignRequestPrefillTag(
  val: any
): SignRequestPrefillTag {
  const documentTagId: undefined | string =
    val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
  const textValue: undefined | string =
    val.text_value == void 0 ? void 0 : val.text_value;
  const checkboxValue: undefined | boolean =
    val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
  const dateValue: undefined | Date =
    val.date_value == void 0 ? void 0 : deserializeDate(val.date_value);
  return {
    documentTagId: documentTagId,
    textValue: textValue,
    checkboxValue: checkboxValue,
    dateValue: dateValue,
  } satisfies SignRequestPrefillTag;
}
