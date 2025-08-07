"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResultsWithSharedLinks = void 0;
exports.serializeSearchResultsWithSharedLinksTypeField = serializeSearchResultsWithSharedLinksTypeField;
exports.deserializeSearchResultsWithSharedLinksTypeField = deserializeSearchResultsWithSharedLinksTypeField;
exports.serializeSearchResultsWithSharedLinks = serializeSearchResultsWithSharedLinks;
exports.deserializeSearchResultsWithSharedLinks = deserializeSearchResultsWithSharedLinks;
exports.serializeSearchResultsWithSharedLinksInput = serializeSearchResultsWithSharedLinksInput;
exports.deserializeSearchResultsWithSharedLinksInput = deserializeSearchResultsWithSharedLinksInput;
const searchResultWithSharedLink_generated_js_1 = require("./searchResultWithSharedLink.generated.js");
const searchResultWithSharedLink_generated_js_2 = require("./searchResultWithSharedLink.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class SearchResultsWithSharedLinks {
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
exports.SearchResultsWithSharedLinks = SearchResultsWithSharedLinks;
function serializeSearchResultsWithSharedLinksTypeField(val) {
    return val;
}
function deserializeSearchResultsWithSharedLinksTypeField(val) {
    if (val == 'search_results_with_shared_links') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SearchResultsWithSharedLinksTypeField",
    });
}
function serializeSearchResultsWithSharedLinks(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['type']: serializeSearchResultsWithSharedLinksTypeField(val.type),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, searchResultWithSharedLink_generated_js_1.serializeSearchResultWithSharedLink)(item);
            }),
    };
}
function deserializeSearchResultsWithSharedLinks(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SearchResultsWithSharedLinks"',
        });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "SearchResultsWithSharedLinks"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "SearchResultsWithSharedLinks"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "SearchResultsWithSharedLinks"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "SearchResultsWithSharedLinks" to be defined',
        });
    }
    const type = deserializeSearchResultsWithSharedLinksTypeField(val.type);
    if (!(val.entries == void 0) && !(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "SearchResultsWithSharedLinks"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, searchResultWithSharedLink_generated_js_2.deserializeSearchResultWithSharedLink)(itm);
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
function serializeSearchResultsWithSharedLinksInput(val) {
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
                return (0, searchResultWithSharedLink_generated_js_1.serializeSearchResultWithSharedLink)(item);
            }),
    };
}
function deserializeSearchResultsWithSharedLinksInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SearchResultsWithSharedLinksInput"',
        });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "SearchResultsWithSharedLinksInput"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "SearchResultsWithSharedLinksInput"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "SearchResultsWithSharedLinksInput"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    const type = val.type == void 0
        ? void 0
        : deserializeSearchResultsWithSharedLinksTypeField(val.type);
    if (!(val.entries == void 0) && !(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "SearchResultsWithSharedLinksInput"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, searchResultWithSharedLink_generated_js_2.deserializeSearchResultWithSharedLink)(itm);
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