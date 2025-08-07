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
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testEmailAliases', function testEmailAliases() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUserName = (0, utils_js_1.getUuid)();
        const newUserLogin = ''.concat((0, utils_js_1.getUuid)(), '@boxdemo.com');
        const newUser = yield exports.client.users.createUser({
            name: newUserName,
            login: newUserLogin,
        });
        const aliases = yield exports.client.emailAliases.getUserEmailAliases(newUser.id);
        if (!(aliases.totalCount == 0)) {
            throw new Error('Assertion failed');
        }
        const newAliasEmail = ''.concat(newUser.id, '@boxdemo.com');
        const newAlias = yield exports.client.emailAliases.createUserEmailAlias(newUser.id, { email: newAliasEmail });
        const updatedAliases = yield exports.client.emailAliases.getUserEmailAliases(newUser.id);
        if (!(updatedAliases.totalCount == 1)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedAliases.entries[0].email == newAliasEmail)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.emailAliases.deleteUserEmailAliasById(newUser.id, newAlias.id);
        const finalAliases = yield exports.client.emailAliases.getUserEmailAliases(newUser.id);
        if (!(finalAliases.totalCount == 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.users.deleteUserById(newUser.id);
    });
});
//# sourceMappingURL=emailAliases.generated.test.js.map