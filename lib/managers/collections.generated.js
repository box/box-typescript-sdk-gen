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
exports.newDeserializeGetCollectionItemsQueryParamsArg = exports.newSerializeGetCollectionItemsQueryParamsArg = exports.newDeserializeGetCollectionsQueryParamsArg = exports.newSerializeGetCollectionsQueryParamsArg = exports.CollectionsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class CollectionsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollections(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collections"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeCollections)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCollectionItems(collectionId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collections/", collectionId, "/items"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.CollectionsManager = CollectionsManager;
function newSerializeGetCollectionsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
exports.newSerializeGetCollectionsQueryParamsArg = newSerializeGetCollectionsQueryParamsArg;
function newDeserializeGetCollectionsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, offset: offset, limit: limit };
}
exports.newDeserializeGetCollectionsQueryParamsArg = newDeserializeGetCollectionsQueryParamsArg;
function newSerializeGetCollectionItemsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
exports.newSerializeGetCollectionItemsQueryParamsArg = newSerializeGetCollectionItemsQueryParamsArg;
function newDeserializeGetCollectionItemsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, offset: offset, limit: limit };
}
exports.newDeserializeGetCollectionItemsQueryParamsArg = newDeserializeGetCollectionItemsQueryParamsArg;
//# sourceMappingURL=collections.generated.js.map