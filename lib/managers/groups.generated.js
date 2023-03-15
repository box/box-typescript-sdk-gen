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
exports.GroupsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class GroupsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getGroups(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups"), { method: "GET", params: { ["filter_term"]: options.filterTerm, ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeGroups)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
    postGroups(requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups"), { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeGroup)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupsId(groupId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId), { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeGroup)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
    putGroupsId(groupId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId), { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeGroup)(yield (0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteGroupsId(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.GroupsManager = GroupsManager;
//# sourceMappingURL=groups.generated.js.map