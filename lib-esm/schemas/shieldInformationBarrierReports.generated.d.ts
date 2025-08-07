import { ShieldInformationBarrierReport } from './shieldInformationBarrierReport.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierReports {
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
     * barrier reports. */
    readonly entries?: readonly ShieldInformationBarrierReport[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierReports(val: ShieldInformationBarrierReports): SerializedData;
export declare function deserializeShieldInformationBarrierReports(val: SerializedData): ShieldInformationBarrierReports;
