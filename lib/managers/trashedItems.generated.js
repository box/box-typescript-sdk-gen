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
exports.newDeserializeGetFolderTrashItemsQueryParamsArg = exports.newSerializeGetFolderTrashItemsQueryParamsArg = exports.newDeserializeGetFolderTrashItemsQueryParamsArgSortField = exports.newSerializeGetFolderTrashItemsQueryParamsArgSortField = exports.newDeserializeGetFolderTrashItemsQueryParamsArgDirectionField = exports.newSerializeGetFolderTrashItemsQueryParamsArgDirectionField = exports.TrashedItemsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TrashedItemsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderTrashItems(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/trash/items"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeItems)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.TrashedItemsManager = TrashedItemsManager;
function newSerializeGetFolderTrashItemsQueryParamsArgDirectionField(val) {
    return val;
}
exports.newSerializeGetFolderTrashItemsQueryParamsArgDirectionField = newSerializeGetFolderTrashItemsQueryParamsArgDirectionField;
function newDeserializeGetFolderTrashItemsQueryParamsArgDirectionField(val) {
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
exports.newDeserializeGetFolderTrashItemsQueryParamsArgDirectionField = newDeserializeGetFolderTrashItemsQueryParamsArgDirectionField;
function newSerializeGetFolderTrashItemsQueryParamsArgSortField(val) {
    return val;
}
exports.newSerializeGetFolderTrashItemsQueryParamsArgSortField = newSerializeGetFolderTrashItemsQueryParamsArgSortField;
function newDeserializeGetFolderTrashItemsQueryParamsArgSortField(val) {
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
exports.newDeserializeGetFolderTrashItemsQueryParamsArgSortField = newDeserializeGetFolderTrashItemsQueryParamsArgSortField;
function newSerializeGetFolderTrashItemsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset, ["usemarker"]: val.usemarker, ["marker"]: val.marker, ["direction"]: val.direction == void 0 ? void 0 : newSerializeGetFolderTrashItemsQueryParamsArgDirectionField(val.direction), ["sort"]: val.sort == void 0 ? void 0 : newSerializeGetFolderTrashItemsQueryParamsArgSortField(val.sort) };
}
exports.newSerializeGetFolderTrashItemsQueryParamsArg = newSerializeGetFolderTrashItemsQueryParamsArg;
function newDeserializeGetFolderTrashItemsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const usemarker = (0, json_js_2.isJson)(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const direction = val.direction == void 0 ? void 0 : newDeserializeGetFolderTrashItemsQueryParamsArgDirectionField(val.direction);
    const sort = val.sort == void 0 ? void 0 : newDeserializeGetFolderTrashItemsQueryParamsArgSortField(val.sort);
    return { fields: fields, limit: limit, offset: offset, usemarker: usemarker, marker: marker, direction: direction, sort: sort };
}
exports.newDeserializeGetFolderTrashItemsQueryParamsArg = newDeserializeGetFolderTrashItemsQueryParamsArg;
//# sourceMappingURL=trashedItems.generated.js.map