import { DevicePinner } from './devicePinner.generated.js';
import { SerializedData } from '../serialization/json.js';
export type DevicePinnersOrderByField = 'id' | string;
export type DevicePinnersOrderDirectionField = 'asc' | 'desc' | string;
export interface DevicePinnersOrderField {
    /**
     * The field that is ordered by. */
    readonly by?: DevicePinnersOrderByField;
    /**
     * The direction to order by, either ascending or descending. */
    readonly direction?: DevicePinnersOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface DevicePinners {
    /**
     * A list of device pins. */
    readonly entries?: readonly DevicePinner[];
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: number;
    /**
     * The order by which items are returned. */
    readonly order?: readonly DevicePinnersOrderField[];
    readonly rawData?: SerializedData;
}
export declare function serializeDevicePinnersOrderByField(val: DevicePinnersOrderByField): SerializedData;
export declare function deserializeDevicePinnersOrderByField(val: SerializedData): DevicePinnersOrderByField;
export declare function serializeDevicePinnersOrderDirectionField(val: DevicePinnersOrderDirectionField): SerializedData;
export declare function deserializeDevicePinnersOrderDirectionField(val: SerializedData): DevicePinnersOrderDirectionField;
export declare function serializeDevicePinnersOrderField(val: DevicePinnersOrderField): SerializedData;
export declare function deserializeDevicePinnersOrderField(val: SerializedData): DevicePinnersOrderField;
export declare function serializeDevicePinners(val: DevicePinners): SerializedData;
export declare function deserializeDevicePinners(val: SerializedData): DevicePinners;
