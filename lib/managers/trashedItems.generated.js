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
exports.TrashedItemsManager = exports.GetFolderTrashItemsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class GetFolderTrashItemsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFolderTrashItemsHeadersArg = GetFolderTrashItemsHeadersArg;
class TrashedItemsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderTrashItems(queryParams = {}, headers = new GetFolderTrashItemsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["usemarker"]: (0, utils_js_2.toString)(queryParams.usemarker), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["direction"]: (0, utils_js_2.toString)(queryParams.direction), ["sort"]: (0, utils_js_2.toString)(queryParams.sort) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/trash/items"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.TrashedItemsManager = TrashedItemsManager;
//# sourceMappingURL=trashedItems.generated.js.map