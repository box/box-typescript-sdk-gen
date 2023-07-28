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
exports.deserializeGetFolderTrashItemsQueryParamsArg = exports.serializeGetFolderTrashItemsQueryParamsArg = exports.deserializeGetFolderTrashItemsQueryParamsArgSortField = exports.serializeGetFolderTrashItemsQueryParamsArgSortField = exports.deserializeGetFolderTrashItemsQueryParamsArgDirectionField = exports.serializeGetFolderTrashItemsQueryParamsArgDirectionField = exports.TrashedItemsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TrashedItemsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderTrashItems(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["usemarker"]: (0, utils_js_2.toString)(queryParams.usemarker), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["direction"]: (0, utils_js_2.toString)(queryParams.direction), ["sort"]: (0, utils_js_2.toString)(queryParams.sort) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/trash/items"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.TrashedItemsManager = TrashedItemsManager;
function serializeGetFolderTrashItemsQueryParamsArgDirectionField(val) {
    return val;
}
exports.serializeGetFolderTrashItemsQueryParamsArgDirectionField = serializeGetFolderTrashItemsQueryParamsArgDirectionField;
function deserializeGetFolderTrashItemsQueryParamsArgDirectionField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetFolderTrashItemsQueryParamsArgDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetFolderTrashItemsQueryParamsArgDirectionField = deserializeGetFolderTrashItemsQueryParamsArgDirectionField;
function serializeGetFolderTrashItemsQueryParamsArgSortField(val) {
    return val;
}
exports.serializeGetFolderTrashItemsQueryParamsArgSortField = serializeGetFolderTrashItemsQueryParamsArgSortField;
function deserializeGetFolderTrashItemsQueryParamsArgSortField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetFolderTrashItemsQueryParamsArgSortField\"";
    }
    if (val == "name") {
        return "name";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "size") {
        return "size";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetFolderTrashItemsQueryParamsArgSortField = deserializeGetFolderTrashItemsQueryParamsArgSortField;
function serializeGetFolderTrashItemsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset, ["usemarker"]: val.usemarker, ["marker"]: val.marker, ["direction"]: val.direction == void 0 ? void 0 : serializeGetFolderTrashItemsQueryParamsArgDirectionField(val.direction), ["sort"]: val.sort == void 0 ? void 0 : serializeGetFolderTrashItemsQueryParamsArgSortField(val.sort) };
}
exports.serializeGetFolderTrashItemsQueryParamsArg = serializeGetFolderTrashItemsQueryParamsArg;
function deserializeGetFolderTrashItemsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const usemarker = (0, json_js_2.isJson)(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const direction = val.direction == void 0 ? void 0 : deserializeGetFolderTrashItemsQueryParamsArgDirectionField(val.direction);
    const sort = val.sort == void 0 ? void 0 : deserializeGetFolderTrashItemsQueryParamsArgSortField(val.sort);
    return { fields: fields, limit: limit, offset: offset, usemarker: usemarker, marker: marker, direction: direction, sort: sort };
}
exports.deserializeGetFolderTrashItemsQueryParamsArg = deserializeGetFolderTrashItemsQueryParamsArg;
//# sourceMappingURL=trashedItems.generated.js.map