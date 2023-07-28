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
exports.deserializeGetCollectionItemsQueryParamsArg = exports.serializeGetCollectionItemsQueryParamsArg = exports.deserializeGetCollectionsQueryParamsArg = exports.serializeGetCollectionsQueryParamsArg = exports.CollectionsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class CollectionsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollections(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collections"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollections)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCollectionItems(collectionId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collections/", collectionId, "/items"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.CollectionsManager = CollectionsManager;
function serializeGetCollectionsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
exports.serializeGetCollectionsQueryParamsArg = serializeGetCollectionsQueryParamsArg;
function deserializeGetCollectionsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, offset: offset, limit: limit };
}
exports.deserializeGetCollectionsQueryParamsArg = deserializeGetCollectionsQueryParamsArg;
function serializeGetCollectionItemsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
exports.serializeGetCollectionItemsQueryParamsArg = serializeGetCollectionItemsQueryParamsArg;
function deserializeGetCollectionItemsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, offset: offset, limit: limit };
}
exports.deserializeGetCollectionItemsQueryParamsArg = deserializeGetCollectionItemsQueryParamsArg;
//# sourceMappingURL=collections.generated.js.map