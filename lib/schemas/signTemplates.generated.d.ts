import { SignTemplate } from './signTemplate.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface SignTemplates {
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
     * A list of templates. */
    readonly entries?: readonly SignTemplate[];
    readonly rawData?: SerializedData;
}
export declare function serializeSignTemplates(val: SignTemplates): SerializedData;
export declare function deserializeSignTemplates(val: SerializedData): SignTemplates;
//# sourceMappingURL=signTemplates.generated.d.ts.map