"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeGetSearchQueryParamsArg = exports.serializeGetSearchQueryParamsArg = exports.deserializeGetSearchQueryParamsArgDirectionField = exports.serializeGetSearchQueryParamsArgDirectionField = exports.deserializeGetSearchQueryParamsArgSortField = exports.serializeGetSearchQueryParamsArgSortField = exports.deserializeGetSearchQueryParamsArgTrashContentField = exports.serializeGetSearchQueryParamsArgTrashContentField = exports.deserializeGetSearchQueryParamsArgTypeField = exports.serializeGetSearchQueryParamsArgTypeField = exports.deserializeGetSearchQueryParamsArgScopeField = exports.serializeGetSearchQueryParamsArgScopeField = exports.deserializeGetMetadataQueryIndicesQueryParamsArg = exports.serializeGetMetadataQueryIndicesQueryParamsArg = exports.deserializeGetMetadataQueryIndicesQueryParamsArgScopeField = exports.serializeGetMetadataQueryIndicesQueryParamsArgScopeField = exports.SearchManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class SearchManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createMetadataQueryExecuteRead(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_queries/execute_read"), { method: "POST", body: (0, json_js_1.serializeJson)((0, schemas_generated_js_2.serializeMetadataQuery)(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataQueryResults)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getMetadataQueryIndices(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_query_indices"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeMetadataQueryIndices)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getSearch(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/search"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_4.deserializeSearchResultsOrSearchResultsWithSharedLinks)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.SearchManager = SearchManager;
function serializeGetMetadataQueryIndicesQueryParamsArgScopeField(val) {
    return val;
}
exports.serializeGetMetadataQueryIndicesQueryParamsArgScopeField = serializeGetMetadataQueryIndicesQueryParamsArgScopeField;
function deserializeGetMetadataQueryIndicesQueryParamsArgScopeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetMetadataQueryIndicesQueryParamsArgScopeField\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetMetadataQueryIndicesQueryParamsArgScopeField = deserializeGetMetadataQueryIndicesQueryParamsArgScopeField;
function serializeGetMetadataQueryIndicesQueryParamsArg(val) {
    return { ["scope"]: serializeGetMetadataQueryIndicesQueryParamsArgScopeField(val.scope), ["templateKey"]: val.templateKey };
}
exports.serializeGetMetadataQueryIndicesQueryParamsArg = serializeGetMetadataQueryIndicesQueryParamsArg;
function deserializeGetMetadataQueryIndicesQueryParamsArg(val) {
    const scope = deserializeGetMetadataQueryIndicesQueryParamsArgScopeField(val.scope);
    const templateKey = val.templateKey;
    return { scope: scope, templateKey: templateKey };
}
exports.deserializeGetMetadataQueryIndicesQueryParamsArg = deserializeGetMetadataQueryIndicesQueryParamsArg;
function serializeGetSearchQueryParamsArgScopeField(val) {
    return val;
}
exports.serializeGetSearchQueryParamsArgScopeField = serializeGetSearchQueryParamsArgScopeField;
function deserializeGetSearchQueryParamsArgScopeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgScopeField\"";
    }
    if (val == "user_content") {
        return "user_content";
    }
    if (val == "enterprise_content") {
        return "enterprise_content";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetSearchQueryParamsArgScopeField = deserializeGetSearchQueryParamsArgScopeField;
function serializeGetSearchQueryParamsArgTypeField(val) {
    return val;
}
exports.serializeGetSearchQueryParamsArgTypeField = serializeGetSearchQueryParamsArgTypeField;
function deserializeGetSearchQueryParamsArgTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "web_link") {
        return "web_link";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetSearchQueryParamsArgTypeField = deserializeGetSearchQueryParamsArgTypeField;
function serializeGetSearchQueryParamsArgTrashContentField(val) {
    return val;
}
exports.serializeGetSearchQueryParamsArgTrashContentField = serializeGetSearchQueryParamsArgTrashContentField;
function deserializeGetSearchQueryParamsArgTrashContentField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgTrashContentField\"";
    }
    if (val == "non_trashed_only") {
        return "non_trashed_only";
    }
    if (val == "trashed_only") {
        return "trashed_only";
    }
    if (val == "all_items") {
        return "all_items";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetSearchQueryParamsArgTrashContentField = deserializeGetSearchQueryParamsArgTrashContentField;
function serializeGetSearchQueryParamsArgSortField(val) {
    return val;
}
exports.serializeGetSearchQueryParamsArgSortField = serializeGetSearchQueryParamsArgSortField;
function deserializeGetSearchQueryParamsArgSortField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgSortField\"";
    }
    if (val == "modified_at") {
        return "modified_at";
    }
    if (val == "relevance") {
        return "relevance";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetSearchQueryParamsArgSortField = deserializeGetSearchQueryParamsArgSortField;
function serializeGetSearchQueryParamsArgDirectionField(val) {
    return val;
}
exports.serializeGetSearchQueryParamsArgDirectionField = serializeGetSearchQueryParamsArgDirectionField;
function deserializeGetSearchQueryParamsArgDirectionField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgDirectionField\"";
    }
    if (val == "DESC") {
        return "DESC";
    }
    if (val == "ASC") {
        return "ASC";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetSearchQueryParamsArgDirectionField = deserializeGetSearchQueryParamsArgDirectionField;
function serializeGetSearchQueryParamsArg(val) {
    return { ["query"]: val.query, ["scope"]: val.scope == void 0 ? void 0 : serializeGetSearchQueryParamsArgScopeField(val.scope), ["fileExtensions"]: val.fileExtensions, ["createdAtRange"]: val.createdAtRange, ["updatedAtRange"]: val.updatedAtRange, ["sizeRange"]: val.sizeRange, ["ownerUserIds"]: val.ownerUserIds, ["recentUpdaterUserIds"]: val.recentUpdaterUserIds, ["ancestorFolderIds"]: val.ancestorFolderIds, ["contentTypes"]: val.contentTypes, ["type"]: val.type == void 0 ? void 0 : serializeGetSearchQueryParamsArgTypeField(val.type), ["trashContent"]: val.trashContent == void 0 ? void 0 : serializeGetSearchQueryParamsArgTrashContentField(val.trashContent), ["mdfilters"]: val.mdfilters, ["sort"]: val.sort == void 0 ? void 0 : serializeGetSearchQueryParamsArgSortField(val.sort), ["direction"]: val.direction == void 0 ? void 0 : serializeGetSearchQueryParamsArgDirectionField(val.direction), ["limit"]: val.limit, ["includeRecentSharedLinks"]: val.includeRecentSharedLinks, ["fields"]: val.fields, ["offset"]: val.offset, ["deletedUserIds"]: val.deletedUserIds, ["deletedAtRange"]: val.deletedAtRange };
}
exports.serializeGetSearchQueryParamsArg = serializeGetSearchQueryParamsArg;
function deserializeGetSearchQueryParamsArg(val) {
    const query = (0, json_js_3.isJson)(val.query, "string") ? val.query : void 0;
    const scope = val.scope == void 0 ? void 0 : deserializeGetSearchQueryParamsArgScopeField(val.scope);
    const fileExtensions = (0, json_js_3.isJson)(val.fileExtensions, "string") ? val.fileExtensions : void 0;
    const createdAtRange = (0, json_js_3.isJson)(val.createdAtRange, "string") ? val.createdAtRange : void 0;
    const updatedAtRange = (0, json_js_3.isJson)(val.updatedAtRange, "string") ? val.updatedAtRange : void 0;
    const sizeRange = (0, json_js_3.isJson)(val.sizeRange, "string") ? val.sizeRange : void 0;
    const ownerUserIds = (0, json_js_3.isJson)(val.ownerUserIds, "string") ? val.ownerUserIds : void 0;
    const recentUpdaterUserIds = (0, json_js_3.isJson)(val.recentUpdaterUserIds, "string") ? val.recentUpdaterUserIds : void 0;
    const ancestorFolderIds = (0, json_js_3.isJson)(val.ancestorFolderIds, "string") ? val.ancestorFolderIds : void 0;
    const contentTypes = (0, json_js_3.isJson)(val.contentTypes, "string") ? val.contentTypes : void 0;
    const type = val.type == void 0 ? void 0 : deserializeGetSearchQueryParamsArgTypeField(val.type);
    const trashContent = val.trashContent == void 0 ? void 0 : deserializeGetSearchQueryParamsArgTrashContentField(val.trashContent);
    const mdfilters = (0, json_js_3.isJson)(val.mdfilters, "string") ? val.mdfilters : void 0;
    const sort = val.sort == void 0 ? void 0 : deserializeGetSearchQueryParamsArgSortField(val.sort);
    const direction = val.direction == void 0 ? void 0 : deserializeGetSearchQueryParamsArgDirectionField(val.direction);
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const includeRecentSharedLinks = (0, json_js_3.isJson)(val.includeRecentSharedLinks, "boolean") ? val.includeRecentSharedLinks : void 0;
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    const offset = (0, json_js_3.isJson)(val.offset, "number") ? val.offset : void 0;
    const deletedUserIds = (0, json_js_3.isJson)(val.deletedUserIds, "string") ? val.deletedUserIds : void 0;
    const deletedAtRange = (0, json_js_3.isJson)(val.deletedAtRange, "string") ? val.deletedAtRange : void 0;
    return { query: query, scope: scope, fileExtensions: fileExtensions, createdAtRange: createdAtRange, updatedAtRange: updatedAtRange, sizeRange: sizeRange, ownerUserIds: ownerUserIds, recentUpdaterUserIds: recentUpdaterUserIds, ancestorFolderIds: ancestorFolderIds, contentTypes: contentTypes, type: type, trashContent: trashContent, mdfilters: mdfilters, sort: sort, direction: direction, limit: limit, includeRecentSharedLinks: includeRecentSharedLinks, fields: fields, offset: offset, deletedUserIds: deletedUserIds, deletedAtRange: deletedAtRange };
}
exports.deserializeGetSearchQueryParamsArg = deserializeGetSearchQueryParamsArg;
//# sourceMappingURL=search.generated.js.map