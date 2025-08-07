import { DocGenTemplateV2025R0 } from './docGenTemplateV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface DocGenTemplatesV2025R0 {
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
    readonly entries?: readonly DocGenTemplateV2025R0[];
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenTemplatesV2025R0(val: DocGenTemplatesV2025R0): SerializedData;
export declare function deserializeDocGenTemplatesV2025R0(val: SerializedData): DocGenTemplatesV2025R0;
