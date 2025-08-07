import { serializeSearchResultWithSharedLink } from './searchResultWithSharedLink.generated.js';
import { deserializeSearchResultWithSharedLink } from './searchResultWithSharedLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class SearchResultsWithSharedLinks {
    constructor(fields) {
        /**
         * Specifies the response as search result items with shared links. */
        this.type = 'search_results_with_shared_links';
        if (fields.totalCount !== undefined) {
            this.totalCount = fields.totalCount;
        }
        if (fields.limit !== undefined) {
            this.limit = fields.limit;
        }
        if (fields.offset !== undefined) {
            this.offset = fields.offset;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.entries !== undefined) {
            this.entries = fields.entries;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeSearchResultsWithSharedLinksTypeField(val) {
    return val;
}
export function deserializeSearchResultsWithSharedLinksTypeField(val) {
    if (val == 'search_results_with_shared_links') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SearchResultsWithSharedLinksTypeField",
    });
}
export function serializeSearchResultsWithSharedLinks(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['type']: serializeSearchResultsWithSharedLinksTypeField(val.type),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeSearchResultWithSharedLink(item);
            }),
    };
}
export function deserializeSearchResultsWithSharedLinks(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SearchResultsWithSharedLinks"',
        });
    }
    if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "SearchResultsWithSharedLinks"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "SearchResultsWithSharedLinks"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
        throw new BoxSdkError({
            message: 'Expecting number for "offset" of type "SearchResultsWithSharedLinks"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "SearchResultsWithSharedLinks" to be defined',
        });
    }
    const type = deserializeSearchResultsWithSharedLinksTypeField(val.type);
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "SearchResultsWithSharedLinks"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeSearchResultWithSharedLink(itm);
            })
            : [];
    return {
        totalCount: totalCount,
        limit: limit,
        offset: offset,
        type: type,
        entries: entries,
    };
}
export function serializeSearchResultsWithSharedLinksInput(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['type']: val.type == void 0
            ? val.type
            : serializeSearchResultsWithSharedLinksTypeField(val.type),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeSearchResultWithSharedLink(item);
            }),
    };
}
export function deserializeSearchResultsWithSharedLinksInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SearchResultsWithSharedLinksInput"',
        });
    }
    if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "SearchResultsWithSharedLinksInput"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "SearchResultsWithSharedLinksInput"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
        throw new BoxSdkError({
            message: 'Expecting number for "offset" of type "SearchResultsWithSharedLinksInput"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    const type = val.type == void 0
        ? void 0
        : deserializeSearchResultsWithSharedLinksTypeField(val.type);
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "SearchResultsWithSharedLinksInput"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeSearchResultWithSharedLink(itm);
            })
            : [];
    return {
        totalCount: totalCount,
        limit: limit,
        offset: offset,
        type: type,
        entries: entries,
    };
}
//# sourceMappingURL=searchResultsWithSharedLinks.generated.js.map