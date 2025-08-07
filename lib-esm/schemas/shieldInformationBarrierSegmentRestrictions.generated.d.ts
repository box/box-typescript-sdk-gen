import { ShieldInformationBarrierSegmentRestriction } from './shieldInformationBarrierSegmentRestriction.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierSegmentRestrictions {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    /**
     * A list of shield information barrier
     * segment restriction objects. */
    readonly entries?: readonly ShieldInformationBarrierSegmentRestriction[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierSegmentRestrictions(val: ShieldInformationBarrierSegmentRestrictions): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestrictions(val: SerializedData): ShieldInformationBarrierSegmentRestrictions;
