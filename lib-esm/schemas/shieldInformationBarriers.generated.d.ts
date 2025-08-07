import { ShieldInformationBarrier } from './shieldInformationBarrier.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarriers {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    /**
     * A list of shield information barrier objects. */
    readonly entries?: readonly ShieldInformationBarrier[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarriers(val: ShieldInformationBarriers): SerializedData;
export declare function deserializeShieldInformationBarriers(val: SerializedData): ShieldInformationBarriers;
