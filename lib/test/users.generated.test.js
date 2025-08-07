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
test('test_get_users', function test_get_users() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield exports.client.users.getUsers();
        if (!(users.totalCount >= 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_get_user_me', function test_get_user_me() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentUser = yield exports.client.users.getUserMe();
        if (!((0, utils_js_2.toString)(currentUser.type) == 'user')) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_create_update_get_delete_user', function test_create_update_get_delete_user() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0, utils_js_1.getUuid)();
        const userLogin = ''.concat((0, utils_js_1.getUuid)(), '@gmail.com');
        const user = yield exports.client.users.createUser({
            name: userName,
            login: userLogin,
            isPlatformAccessOnly: true,
        });
        if (!(user.name == userName)) {
            throw new Error('Assertion failed');
        }
        const userById = yield exports.client.users.getUserById(user.id);
        if (!(userById.id == user.id)) {
            throw new Error('Assertion failed');
        }
        const updatedUserName = (0, utils_js_1.getUuid)();
        const updatedUser = yield exports.client.users.updateUserById(user.id, {
            requestBody: { name: updatedUserName },
        });
        if (!(updatedUser.name == updatedUserName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=users.generated.test.js.map