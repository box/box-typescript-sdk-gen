import { SerializedData } from '../serialization/json.js';
export type TrackingCodeTypeField = 'tracking_code';
export interface TrackingCode {
    /**
     * The value will always be `tracking_code`. */
    readonly type?: TrackingCodeTypeField;
    /**
     * The name of the tracking code, which must be preconfigured in
     * the Admin Console. */
    readonly name?: string;
    /**
     * The value of the tracking code. */
    readonly value?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeTrackingCodeTypeField(val: TrackingCodeTypeField): SerializedData;
export declare function deserializeTrackingCodeTypeField(val: SerializedData): TrackingCodeTypeField;
export declare function serializeTrackingCode(val: TrackingCode): SerializedData;
export declare function deserializeTrackingCode(val: SerializedData): TrackingCode;
