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
exports.SearchManager = exports.GetSearchHeadersArg = exports.GetMetadataQueryIndicesHeadersArg = exports.CreateMetadataQueryExecuteReadHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class CreateMetadataQueryExecuteReadHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateMetadataQueryExecuteReadHeadersArg = CreateMetadataQueryExecuteReadHeadersArg;
class GetMetadataQueryIndicesHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetMetadataQueryIndicesHeadersArg = GetMetadataQueryIndicesHeadersArg;
class GetSearchHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetSearchHeadersArg = GetSearchHeadersArg;
class SearchManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createMetadataQueryExecuteRead(requestBody, headers = new CreateMetadataQueryExecuteReadHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_queries/execute_read"), { method: "POST", headers: headersMap, body: (0, json_js_1.serializeJson)((0, schemas_generated_js_2.serializeMetadataQuery)(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadataQueryResults)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getMetadataQueryIndices(queryParams, headers = new GetMetadataQueryIndicesHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["scope"]: (0, utils_js_2.toString)(queryParams.scope), ["template_key"]: (0, utils_js_2.toString)(queryParams.templateKey) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_query_indices"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeMetadataQueryIndices)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getSearch(queryParams = {}, headers = new GetSearchHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["query"]: (0, utils_js_2.toString)(queryParams.query), ["scope"]: (0, utils_js_2.toString)(queryParams.scope), ["file_extensions"]: (0, utils_js_2.toString)(queryParams.fileExtensions), ["created_at_range"]: (0, utils_js_2.toString)(queryParams.createdAtRange), ["updated_at_range"]: (0, utils_js_2.toString)(queryParams.updatedAtRange), ["size_range"]: (0, utils_js_2.toString)(queryParams.sizeRange), ["owner_user_ids"]: (0, utils_js_2.toString)(queryParams.ownerUserIds), ["recent_updater_user_ids"]: (0, utils_js_2.toString)(queryParams.recentUpdaterUserIds), ["ancestor_folder_ids"]: (0, utils_js_2.toString)(queryParams.ancestorFolderIds), ["content_types"]: (0, utils_js_2.toString)(queryParams.contentTypes), ["type"]: (0, utils_js_2.toString)(queryParams.type), ["trash_content"]: (0, utils_js_2.toString)(queryParams.trashContent), ["mdfilters"]: (0, utils_js_2.toString)(queryParams.mdfilters), ["sort"]: (0, utils_js_2.toString)(queryParams.sort), ["direction"]: (0, utils_js_2.toString)(queryParams.direction), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["include_recent_shared_links"]: (0, utils_js_2.toString)(queryParams.includeRecentSharedLinks), ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["deleted_user_ids"]: (0, utils_js_2.toString)(queryParams.deletedUserIds), ["deleted_at_range"]: (0, utils_js_2.toString)(queryParams.deletedAtRange) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/search"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_4.deserializeSearchResultsOrSearchResultsWithSharedLinks)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.SearchManager = SearchManager;
//# sourceMappingURL=search.generated.js.map