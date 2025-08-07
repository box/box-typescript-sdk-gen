import { serializeSearchResults } from './searchResults.generated.js';
import { deserializeSearchResults } from './searchResults.generated.js';
import { serializeSearchResultsWithSharedLinks } from './searchResultsWithSharedLinks.generated.js';
import { deserializeSearchResultsWithSharedLinks } from './searchResultsWithSharedLinks.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSearchResultsOrSearchResultsWithSharedLinks(val) {
    if (val.type == 'search_results_items') {
        return serializeSearchResults(val);
    }
    if (val.type == 'search_results_with_shared_links') {
        return serializeSearchResultsWithSharedLinks(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeSearchResultsOrSearchResultsWithSharedLinks(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SearchResultsOrSearchResultsWithSharedLinks"',
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
//# sourceMappingURL=searchResultsOrSearchResultsWithSharedLinks.generated.js.map