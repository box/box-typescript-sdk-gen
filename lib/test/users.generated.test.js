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
test("test_get_users", function test_get_users() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield client.users.getUsers();
        if (!(users.totalCount >= 0)) {
            throw "Assertion failed";
        }
    });
});
test("test_get_user_me", function test_get_user_me() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentUser = yield client.users.getUserMe();
        if (!(currentUser.type == "user")) {
            throw "Assertion failed";
        }
    });
});
test("test_create_update_get_delete_user", function test_create_update_get_delete_user() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0, utils_js_3.getUuid)();
        const userLogin = "".concat((0, utils_js_3.getUuid)(), "@gmail.com");
        const user = yield client.users.createUser({ name: userName, login: userLogin, isPlatformAccessOnly: true });
        if (!(user.name == userName)) {
            throw "Assertion failed";
        }
        const userById = yield client.users.getUserById(user.id);
        if (!(userById.id == user.id)) {
            throw "Assertion failed";
        }
        const updatedUserName = (0, utils_js_3.getUuid)();
        const updatedUser = yield client.users.updateUserById(user.id, { name: updatedUserName });
        if (!(updatedUser.name == updatedUserName)) {
            throw "Assertion failed";
        }
        yield client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=users.generated.test.js.map