import { Metadata } from './metadata.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Metadatas {
    /**
     * A list of metadata instances, as applied to this file or folder. */
    readonly entries?: readonly Metadata[];
    /**
     * The limit that was used for this page of results. */
    readonly limit?: number;
    readonly rawData?: SerializedData;
}
export declare function serializeMetadatas(val: Metadatas): SerializedData;
export declare function deserializeMetadatas(val: SerializedData): Metadatas;
//# sourceMappingURL=metadatas.generated.d.ts.map