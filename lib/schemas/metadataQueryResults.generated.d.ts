import { FileFullOrFolderFull } from './fileFullOrFolderFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface MetadataQueryResults {
    /**
     * The mini representation of the files and folders that match the search
     * terms.
     *
     * By default, this endpoint returns only the most basic info about the
     * items. To get additional fields for each item, including any of the
     * metadata, use the `fields` attribute in the query. */
    readonly entries?: readonly FileFullOrFolderFull[];
    /**
     * The limit that was used for this search. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeMetadataQueryResults(val: MetadataQueryResults): SerializedData;
export declare function deserializeMetadataQueryResults(val: SerializedData): MetadataQueryResults;
//# sourceMappingURL=metadataQueryResults.generated.d.ts.map