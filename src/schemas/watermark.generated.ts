import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface WatermarkWatermarkField {
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
}
export interface Watermark {
  readonly watermark?: WatermarkWatermarkField;
}
export function serializeWatermarkWatermarkField(
  val: WatermarkWatermarkField
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
  };
}
export function deserializeWatermarkWatermarkField(
  val: SerializedData
): WatermarkWatermarkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "WatermarkWatermarkField"',
    });
  }
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "created_at" of type "WatermarkWatermarkField"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "modified_at" of type "WatermarkWatermarkField"',
    });
  }
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  return {
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies WatermarkWatermarkField;
}
export function serializeWatermark(val: Watermark): SerializedData {
  return {
    ['watermark']:
      val.watermark == void 0
        ? void 0
        : serializeWatermarkWatermarkField(val.watermark),
  };
}
export function deserializeWatermark(val: SerializedData): Watermark {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "Watermark"' });
  }
  const watermark: undefined | WatermarkWatermarkField =
    val.watermark == void 0
      ? void 0
      : deserializeWatermarkWatermarkField(val.watermark);
  return { watermark: watermark } satisfies Watermark;
}
