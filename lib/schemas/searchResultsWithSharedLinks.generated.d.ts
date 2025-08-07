import { SearchResultWithSharedLink } from './searchResultWithSharedLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SearchResultsWithSharedLinksTypeField = 'search_results_with_shared_links';
export declare class SearchResultsWithSharedLinks {
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
     * Specifies the response as search result items with shared links. */
    readonly type: SearchResultsWithSharedLinksTypeField;
    /**
     * The search results for the query provided, including the
     * additional information about any shared links through
     * which the item has been shared with the user. */
    readonly entries?: readonly SearchResultWithSharedLink[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<SearchResultsWithSharedLinks, 'type'> & Partial<Pick<SearchResultsWithSharedLinks, 'type'>>);
}
export interface SearchResultsWithSharedLinksInput {
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
     * Specifies the response as search result items with shared links. */
    readonly type?: SearchResultsWithSharedLinksTypeField;
    /**
     * The search results for the query provided, including the
     * additional information about any shared links through
     * which the item has been shared with the user. */
    readonly entries?: readonly SearchResultWithSharedLink[];
    readonly rawData?: SerializedData;
}
export declare function serializeSearchResultsWithSharedLinksTypeField(val: SearchResultsWithSharedLinksTypeField): SerializedData;
export declare function deserializeSearchResultsWithSharedLinksTypeField(val: SerializedData): SearchResultsWithSharedLinksTypeField;
export declare function serializeSearchResultsWithSharedLinks(val: SearchResultsWithSharedLinks): SerializedData;
export declare function deserializeSearchResultsWithSharedLinks(val: SerializedData): SearchResultsWithSharedLinks;
export declare function serializeSearchResultsWithSharedLinksInput(val: SearchResultsWithSharedLinksInput): SerializedData;
export declare function deserializeSearchResultsWithSharedLinksInput(val: SerializedData): SearchResultsWithSharedLinksInput;
//# sourceMappingURL=searchResultsWithSharedLinks.generated.d.ts.map