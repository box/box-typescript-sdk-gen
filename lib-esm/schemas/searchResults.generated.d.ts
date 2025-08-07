import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SearchResultsTypeField = 'search_results_items';
export declare class SearchResults {
    /**
     * One greater than the offset of the last entry in the search results.
     * The total number of entries in the collection may be less than
     * `total_count`. */
    readonly totalCount?: number;
    /**
     * The limit that was used for this search. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. */
    readonly limit?: number;
    /**
     * The 0-based offset of the first entry in this set. This will be the same
     * as the `offset` query parameter used. */
    readonly offset?: number;
    /**
     * Specifies the response as search result items without shared links. */
    readonly type: SearchResultsTypeField;
    /**
     * The search results for the query provided. */
    readonly entries?: readonly FileFullOrFolderFullOrWebLink[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<SearchResults, 'type'> & Partial<Pick<SearchResults, 'type'>>);
}
export interface SearchResultsInput {
    /**
     * One greater than the offset of the last entry in the search results.
     * The total number of entries in the collection may be less than
     * `total_count`. */
    readonly totalCount?: number;
    /**
     * The limit that was used for this search. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. */
    readonly limit?: number;
    /**
     * The 0-based offset of the first entry in this set. This will be the same
     * as the `offset` query parameter used. */
    readonly offset?: number;
    /**
     * Specifies the response as search result items without shared links. */
    readonly type?: SearchResultsTypeField;
    /**
     * The search results for the query provided. */
    readonly entries?: readonly FileFullOrFolderFullOrWebLink[];
    readonly rawData?: SerializedData;
}
export declare function serializeSearchResultsTypeField(val: SearchResultsTypeField): SerializedData;
export declare function deserializeSearchResultsTypeField(val: SerializedData): SearchResultsTypeField;
export declare function serializeSearchResults(val: SearchResults): SerializedData;
export declare function deserializeSearchResults(val: SerializedData): SearchResults;
export declare function serializeSearchResultsInput(val: SearchResultsInput): SerializedData;
export declare function deserializeSearchResultsInput(val: SerializedData): SearchResultsInput;
