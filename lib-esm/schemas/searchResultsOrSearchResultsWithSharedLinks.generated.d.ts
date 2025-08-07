import { SearchResults } from './searchResults.generated.js';
import { SearchResultsWithSharedLinks } from './searchResultsWithSharedLinks.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SearchResultsOrSearchResultsWithSharedLinks = SearchResults | SearchResultsWithSharedLinks;
export declare function serializeSearchResultsOrSearchResultsWithSharedLinks(val: any): SerializedData;
export declare function deserializeSearchResultsOrSearchResultsWithSharedLinks(val: SerializedData): SearchResultsOrSearchResultsWithSharedLinks;
