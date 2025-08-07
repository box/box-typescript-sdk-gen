import { AppItemAssociation } from './appItemAssociation.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface AppItemAssociations {
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
    readonly entries?: readonly AppItemAssociation[];
    readonly rawData?: SerializedData;
}
export declare function serializeAppItemAssociations(val: AppItemAssociations): SerializedData;
export declare function deserializeAppItemAssociations(val: SerializedData): AppItemAssociations;
//# sourceMappingURL=appItemAssociations.generated.d.ts.map