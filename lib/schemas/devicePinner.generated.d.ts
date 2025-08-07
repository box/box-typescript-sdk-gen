import { UserMini } from './userMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type DevicePinnerTypeField = 'device_pinner';
export interface DevicePinner {
    /**
     * The unique identifier for this device pin. */
    readonly id?: string;
    /**
     * The value will always be `device_pinner`. */
    readonly type?: DevicePinnerTypeField;
    readonly ownedBy?: UserMini;
    /**
     * The type of device being pinned. */
    readonly productName?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeDevicePinnerTypeField(val: DevicePinnerTypeField): SerializedData;
export declare function deserializeDevicePinnerTypeField(val: SerializedData): DevicePinnerTypeField;
export declare function serializeDevicePinner(val: DevicePinner): SerializedData;
export declare function deserializeDevicePinner(val: SerializedData): DevicePinner;
//# sourceMappingURL=devicePinner.generated.d.ts.map