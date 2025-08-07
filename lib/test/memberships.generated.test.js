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
exports.client = void 0;
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testMemberships', function testMemberships() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.client.users.createUser({
            name: (0, utils_js_1.getUuid)(),
            login: ''.concat((0, utils_js_1.getUuid)(), '@boxdemo.com'),
        });
        const userMemberships = yield exports.client.memberships.getUserMemberships(user.id);
        if (!(userMemberships.totalCount == 0)) {
            throw new Error('Assertion failed');
        }
        const group = yield exports.client.groups.createGroup({
            name: (0, utils_js_1.getUuid)(),
        });
        const groupMemberships = yield exports.client.memberships.getGroupMemberships(group.id);
        if (!(groupMemberships.totalCount == 0)) {
            throw new Error('Assertion failed');
        }
        const groupMembership = yield exports.client.memberships.createGroupMembership({
            user: { id: user.id },
            group: {
                id: group.id,
            },
        });
        if (!(groupMembership.user.id == user.id)) {
            throw new Error('Assertion failed');
        }
        if (!(groupMembership.group.id == group.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(groupMembership.role) == 'member')) {
            throw new Error('Assertion failed');
        }
        const getGroupMembership = yield exports.client.memberships.getGroupMembershipById(groupMembership.id);
        if (!(getGroupMembership.id == groupMembership.id)) {
            throw new Error('Assertion failed');
        }
        const updatedGroupMembership = yield exports.client.memberships.updateGroupMembershipById(groupMembership.id, {
            requestBody: {
                role: 'admin',
            },
        });
        if (!(updatedGroupMembership.id == groupMembership.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(updatedGroupMembership.role) == 'admin')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.memberships.deleteGroupMembershipById(groupMembership.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.memberships.getGroupMembershipById(groupMembership.id);
        })).rejects.toThrow();
        yield exports.client.groups.deleteGroupById(group.id);
        yield exports.client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=memberships.generated.test.js.map