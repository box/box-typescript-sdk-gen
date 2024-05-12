import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
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
  val: any
): WatermarkWatermarkField {
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
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
export function deserializeWatermark(val: any): Watermark {
  const watermark: undefined | WatermarkWatermarkField =
    val.watermark == void 0
      ? void 0
      : deserializeWatermarkWatermarkField(val.watermark);
  return { watermark: watermark } satisfies Watermark;
}
