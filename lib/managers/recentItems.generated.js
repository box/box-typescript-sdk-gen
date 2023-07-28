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
exports.deserializeGetRecentItemsQueryParamsArg = exports.serializeGetRecentItemsQueryParamsArg = exports.RecentItemsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class RecentItemsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getRecentItems(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["marker"]: (0, utils_js_2.toString)(queryParams.marker) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/recent_items"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeRecentItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.RecentItemsManager = RecentItemsManager;
function serializeGetRecentItemsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["marker"]: val.marker };
}
exports.serializeGetRecentItemsQueryParamsArg = serializeGetRecentItemsQueryParamsArg;
function deserializeGetRecentItemsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    return { fields: fields, limit: limit, marker: marker };
}
exports.deserializeGetRecentItemsQueryParamsArg = deserializeGetRecentItemsQueryParamsArg;
//# sourceMappingURL=recentItems.generated.js.map