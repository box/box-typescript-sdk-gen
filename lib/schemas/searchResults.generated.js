"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResults = void 0;
exports.serializeSearchResultsTypeField = serializeSearchResultsTypeField;
exports.deserializeSearchResultsTypeField = deserializeSearchResultsTypeField;
exports.serializeSearchResults = serializeSearchResults;
exports.deserializeSearchResults = deserializeSearchResults;
exports.serializeSearchResultsInput = serializeSearchResultsInput;
exports.deserializeSearchResultsInput = deserializeSearchResultsInput;
const fileFullOrFolderFullOrWebLink_generated_js_1 = require("./fileFullOrFolderFullOrWebLink.generated.js");
const fileFullOrFolderFullOrWebLink_generated_js_2 = require("./fileFullOrFolderFullOrWebLink.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class SearchResults {
    constructor(fields) {
        /**
         * Specifies the response as search result items without shared links. */
        this.type = 'search_results_items';
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
exports.SearchResults = SearchResults;
function serializeSearchResultsTypeField(val) {
    return val;
}
function deserializeSearchResultsTypeField(val) {
    if (val == 'search_results_items') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SearchResultsTypeField",
    });
}
function serializeSearchResults(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['type']: serializeSearchResultsTypeField(val.type),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, fileFullOrFolderFullOrWebLink_generated_js_1.serializeFileFullOrFolderFullOrWebLink)(item);
            }),
    };
}
function deserializeSearchResults(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "SearchResults"' });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "SearchResults"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "SearchResults"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "SearchResults"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "SearchResults" to be defined',
        });
    }
    const type = deserializeSearchResultsTypeField(val.type);
    if (!(val.entries == void 0) && !(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "SearchResults"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, fileFullOrFolderFullOrWebLink_generated_js_2.deserializeFileFullOrFolderFullOrWebLink)(itm);
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
function serializeSearchResultsInput(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['type']: val.type == void 0 ? val.type : serializeSearchResultsTypeField(val.type),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, fileFullOrFolderFullOrWebLink_generated_js_1.serializeFileFullOrFolderFullOrWebLink)(item);
            }),
    };
}
function deserializeSearchResultsInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SearchResultsInput"',
        });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "SearchResultsInput"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "SearchResultsInput"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "SearchResultsInput"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    const type = val.type == void 0 ? void 0 : deserializeSearchResultsTypeField(val.type);
    if (!(val.entries == void 0) && !(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "SearchResultsInput"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, fileFullOrFolderFullOrWebLink_generated_js_2.deserializeFileFullOrFolderFullOrWebLink)(itm);
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
//# sourceMappingURL=searchResults.generated.js.map