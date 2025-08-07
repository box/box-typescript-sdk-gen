import { ShieldInformationBarrierSegmentMember } from './shieldInformationBarrierSegmentMember.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierSegmentMembers {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    /**
     * A list of shield information
     * barrier segment members. */
    readonly entries?: readonly ShieldInformationBarrierSegmentMember[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierSegmentMembers(val: ShieldInformationBarrierSegmentMembers): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMembers(val: SerializedData): ShieldInformationBarrierSegmentMembers;
