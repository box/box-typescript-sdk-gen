import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeWatermarkWatermarkField(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : serializeDateTime(val.modifiedAt),
    };
}
export function deserializeWatermarkWatermarkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WatermarkWatermarkField"',
        });
    }
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "WatermarkWatermarkField"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "WatermarkWatermarkField"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    return {
        createdAt: createdAt,
        modifiedAt: modifiedAt,
    };
}
export function serializeWatermark(val) {
    return {
        ['watermark']: val.watermark == void 0
            ? val.watermark
            : serializeWatermarkWatermarkField(val.watermark),
    };
}
export function deserializeWatermark(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Watermark"' });
    }
    const watermark = val.watermark == void 0
        ? void 0
        : deserializeWatermarkWatermarkField(val.watermark);
    return { watermark: watermark };
}
//# sourceMappingURL=watermark.generated.js.map