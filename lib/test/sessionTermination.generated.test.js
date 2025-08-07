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
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testSessionTerminationUser', function testSessionTerminationUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const adminClient = (0, commons_generated_js_2.getDefaultClientWithUserSubject)((0, utils_js_2.getEnvVar)('USER_ID'));
        const user = yield adminClient.users.getUserMe();
        const result = yield exports.client.sessionTermination.terminateUsersSessions({
            userIds: [(0, utils_js_2.getEnvVar)('USER_ID')],
            userLogins: [user.login],
        });
        if (!(result.message ==
            'Request is successful, please check the admin events for the status of the job')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testSessionTerminationGroup', function testSessionTerminationGroup() {
    return __awaiter(this, void 0, void 0, function* () {
        const groupName = (0, utils_js_1.getUuid)();
        const group = yield exports.client.groups.createGroup({
            name: groupName,
        });
        const result = yield exports.client.sessionTermination.terminateGroupsSessions({
            groupIds: [group.id],
        });
        if (!(result.message ==
            'Request is successful, please check the admin events for the status of the job')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.groups.deleteGroupById(group.id);
    });
});
//# sourceMappingURL=sessionTermination.generated.test.js.map