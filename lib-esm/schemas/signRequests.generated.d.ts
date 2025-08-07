import { SignRequest } from './signRequest.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface SignRequests {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    /**
     * A list of Box Sign requests. */
    readonly entries?: readonly SignRequest[];
    readonly rawData?: SerializedData;
}
export declare function serializeSignRequests(val: SignRequests): SerializedData;
export declare function deserializeSignRequests(val: SerializedData): SignRequests;
