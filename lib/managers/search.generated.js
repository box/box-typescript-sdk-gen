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
exports.SearchManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
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
    getMetadataQueryIndices(scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/metadata_query_indices"), { method: "GET", params: { ["scope"]: scope, ["template_key"]: templateKey }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeMetadataQueryIndices)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getSearch(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/search"), { method: "GET", params: { ["query"]: options.query, ["scope"]: options.scope, ["file_extensions"]: options.fileExtensions, ["created_at_range"]: options.createdAtRange, ["updated_at_range"]: options.updatedAtRange, ["size_range"]: options.sizeRange, ["owner_user_ids"]: options.ownerUserIds, ["recent_updater_user_ids"]: options.recentUpdaterUserIds, ["ancestor_folder_ids"]: options.ancestorFolderIds, ["content_types"]: options.contentTypes, ["type"]: options.type, ["trash_content"]: options.trashContent, ["mdfilters"]: options.mdfilters, ["sort"]: options.sort, ["direction"]: options.direction, ["limit"]: options.limit, ["include_recent_shared_links"]: options.includeRecentSharedLinks, ["fields"]: options.fields, ["offset"]: options.offset, ["deleted_user_ids"]: options.deletedUserIds, ["deleted_at_range"]: options.deletedAtRange }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_4.deserializeSearchResultsOrSearchResultsWithSharedLinks)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.SearchManager = SearchManager;
//# sourceMappingURL=search.generated.js.map