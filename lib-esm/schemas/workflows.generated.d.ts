import { Workflow } from './workflow.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Workflows {
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
     * A list of workflows. */
    readonly entries?: readonly Workflow[];
    readonly rawData?: SerializedData;
}
export declare function serializeWorkflows(val: Workflows): SerializedData;
export declare function deserializeWorkflows(val: SerializedData): Workflows;
