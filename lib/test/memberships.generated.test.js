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
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const utils_js_3 = require("../utils.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)("JWT_CONFIG_BASE_64")));
const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
const client = new client_generated_js_1.Client({ auth: auth });
test("testMemberships", function testMemberships() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.users.createUser({ name: (0, utils_js_3.getUuid)(), login: "".concat((0, utils_js_3.getUuid)(), "@boxdemo.com") });
        const userMemberships = yield client.memberships.getUserMemberships(user.id);
        if (!(userMemberships.totalCount == 0)) {
            throw "Assertion failed";
        }
        const group = yield client.groups.createGroup({ name: (0, utils_js_3.getUuid)() });
        const groupMemberships = yield client.memberships.getGroupMemberships(group.id);
        if (!(groupMemberships.totalCount == 0)) {
            throw "Assertion failed";
        }
        const groupMembership = yield client.memberships.createGroupMembership({ user: user, group: group });
        if (!(groupMembership.user.id == user.id)) {
            throw "Assertion failed";
        }
        if (!(groupMembership.group.id == group.id)) {
            throw "Assertion failed";
        }
        if (!(groupMembership.role == "member")) {
            throw "Assertion failed";
        }
        if (!(yield client.memberships.getGroupMembershipById(groupMembership.id))) {
            throw "Assertion failed";
        }
        const updatedGroupMembership = yield client.memberships.updateGroupMembershipById(groupMembership.id, { role: "admin" });
        if (!(updatedGroupMembership.id == groupMembership.id)) {
            throw "Assertion failed";
        }
        if (!(updatedGroupMembership.role == "admin")) {
            throw "Assertion failed";
        }
        yield client.memberships.deleteGroupMembershipById(groupMembership.id);
        expect(() => __awaiter(this, void 0, void 0, function* () { yield client.memberships.getGroupMembershipById(groupMembership.id); })).rejects.toThrow();
        yield client.groups.deleteGroupById(group.id);
        yield client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=memberships.generated.test.js.map