import { LegalHoldPolicy } from './legalHoldPolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface LegalHoldPolicies {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    /**
     * The marker for the start of the previous page of results. */
    readonly prevMarker?: string | null;
    /**
     * A list of legal hold policies. */
    readonly entries?: readonly LegalHoldPolicy[];
    readonly rawData?: SerializedData;
}
export declare function serializeLegalHoldPolicies(val: LegalHoldPolicies): SerializedData;
export declare function deserializeLegalHoldPolicies(val: SerializedData): LegalHoldPolicies;
//# sourceMappingURL=legalHoldPolicies.generated.d.ts.map