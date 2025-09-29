import { serializeSearchResults } from './searchResults.generated';
import { deserializeSearchResults } from './searchResults.generated';
import { serializeSearchResultsWithSharedLinks } from './searchResultsWithSharedLinks.generated';
import { deserializeSearchResultsWithSharedLinks } from './searchResultsWithSharedLinks.generated';
import { SearchResults } from './searchResults.generated';
import { SearchResultsWithSharedLinks } from './searchResultsWithSharedLinks.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type SearchResultsOrSearchResultsWithSharedLinks =
  | SearchResults
  | SearchResultsWithSharedLinks;
export function serializeSearchResultsOrSearchResultsWithSharedLinks(
  val: any,
): SerializedData {
  if (val.type == 'search_results_items') {
    return serializeSearchResults(val);
  }
  if (val.type == 'search_results_with_shared_links') {
    return serializeSearchResultsWithSharedLinks(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeSearchResultsOrSearchResultsWithSharedLinks(
  val: SerializedData,
): SearchResultsOrSearchResultsWithSharedLinks {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "SearchResultsOrSearchResultsWithSharedLinks"',
    });
  }
  if (val.type == 'search_results_items') {
    return deserializeSearchResults(val);
  }
  if (val.type == 'search_results_with_shared_links') {
    return deserializeSearchResultsWithSharedLinks(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize SearchResultsOrSearchResultsWithSharedLinks",
  });
}
