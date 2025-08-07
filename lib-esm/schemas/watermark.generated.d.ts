import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface WatermarkWatermarkField {
    /**
     * When this watermark was created. */
    readonly createdAt?: DateTime;
    /**
     * When this task was modified. */
    readonly modifiedAt?: DateTime;
    readonly rawData?: SerializedData;
}
export interface Watermark {
    readonly watermark?: WatermarkWatermarkField;
    readonly rawData?: SerializedData;
}
export declare function serializeWatermarkWatermarkField(val: WatermarkWatermarkField): SerializedData;
export declare function deserializeWatermarkWatermarkField(val: SerializedData): WatermarkWatermarkField;
export declare function serializeWatermark(val: Watermark): SerializedData;
export declare function deserializeWatermark(val: SerializedData): Watermark;
