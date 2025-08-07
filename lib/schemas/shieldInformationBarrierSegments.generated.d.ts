import { ShieldInformationBarrierSegment } from './shieldInformationBarrierSegment.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierSegments {
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
     * segments. */
    readonly entries?: readonly ShieldInformationBarrierSegment[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierSegments(val: ShieldInformationBarrierSegments): SerializedData;
export declare function deserializeShieldInformationBarrierSegments(val: SerializedData): ShieldInformationBarrierSegments;
//# sourceMappingURL=shieldInformationBarrierSegments.generated.d.ts.map