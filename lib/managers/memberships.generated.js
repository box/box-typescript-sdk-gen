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
exports.MembershipsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class MembershipsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUserMemberships(userId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/memberships"), { method: "GET", params: { ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeGroupMemberships)(deserializeJSON(response.text));
        });
    }
    getGroupMemberships(groupId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId, "/memberships"), { method: "GET", params: { ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeGroupMemberships)(deserializeJSON(response.text));
        });
    }
    createGroupMembership(requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships"), { method: "POST", params: { ["fields"]: options.fields }, body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_2.deserializeGroupMembership)(deserializeJSON(response.text));
        });
    }
    getGroupMembershipById(groupMembershipId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth });
            return (0, schemas_generated_js_2.deserializeGroupMembership)(deserializeJSON(response.text));
        });
    }
    updateGroupMembershipById(groupMembershipId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "PUT", params: { ["fields"]: options.fields }, body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_2.deserializeGroupMembership)(deserializeJSON(response.text));
        });
    }
    deleteGroupMembershipById(groupMembershipId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.MembershipsManager = MembershipsManager;
//# sourceMappingURL=memberships.generated.js.map