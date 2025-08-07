"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSearchResultsOrSearchResultsWithSharedLinks = serializeSearchResultsOrSearchResultsWithSharedLinks;
exports.deserializeSearchResultsOrSearchResultsWithSharedLinks = deserializeSearchResultsOrSearchResultsWithSharedLinks;
const searchResults_generated_js_1 = require("./searchResults.generated.js");
const searchResults_generated_js_2 = require("./searchResults.generated.js");
const searchResultsWithSharedLinks_generated_js_1 = require("./searchResultsWithSharedLinks.generated.js");
const searchResultsWithSharedLinks_generated_js_2 = require("./searchResultsWithSharedLinks.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeSearchResultsOrSearchResultsWithSharedLinks(val) {
    if (val.type == 'search_results_items') {
        return (0, searchResults_generated_js_1.serializeSearchResults)(val);
    }
    if (val.type == 'search_results_with_shared_links') {
        return (0, searchResultsWithSharedLinks_generated_js_1.serializeSearchResultsWithSharedLinks)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeSearchResultsOrSearchResultsWithSharedLinks(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SearchResultsOrSearchResultsWithSharedLinks"',
        });
    }
    if (val.type == 'search_results_items') {
        return (0, searchResults_generated_js_2.deserializeSearchResults)(val);
    }
    if (val.type == 'search_results_with_shared_links') {
        return (0, searchResultsWithSharedLinks_generated_js_2.deserializeSearchResultsWithSharedLinks)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SearchResultsOrSearchResultsWithSharedLinks",
    });
}
//# sourceMappingURL=searchResultsOrSearchResultsWithSharedLinks.generated.js.map