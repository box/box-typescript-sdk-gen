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
exports.deserializeGetStoragePoliciesQueryParamsArg = exports.serializeGetStoragePoliciesQueryParamsArg = exports.StoragePoliciesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class StoragePoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getStoragePolicies(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policies"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetStoragePoliciesQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeStoragePolicies)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getStoragePolicyById(storagePolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policies/", storagePolicyId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeStoragePolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.StoragePoliciesManager = StoragePoliciesManager;
function serializeGetStoragePoliciesQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetStoragePoliciesQueryParamsArg = serializeGetStoragePoliciesQueryParamsArg;
function deserializeGetStoragePoliciesQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, marker: marker, limit: limit };
}
exports.deserializeGetStoragePoliciesQueryParamsArg = deserializeGetStoragePoliciesQueryParamsArg;
//# sourceMappingURL=storagePolicies.generated.js.map