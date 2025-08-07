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
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
test('testInvites', function testInvites() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, utils_js_1.getEnvVar)('USER_ID');
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)(userId);
        const currentUser = yield client.users.getUserMe({
            fields: ['enterprise'],
        });
        const email = (0, utils_js_1.getEnvVar)('BOX_EXTERNAL_USER_EMAIL');
        const invitation = yield client.invites.createInvite({
            enterprise: {
                id: currentUser.enterprise.id,
            },
            actionableBy: {
                login: email,
            },
        });
        if (!((0, utils_js_2.toString)(invitation.type) == 'invite')) {
            throw new Error('Assertion failed');
        }
        if (!(invitation.invitedTo.id == currentUser.enterprise.id)) {
            throw new Error('Assertion failed');
        }
        if (!(invitation.actionableBy.login == email)) {
            throw new Error('Assertion failed');
        }
        const getInvitation = yield client.invites.getInviteById(invitation.id);
        if (!(getInvitation.id == invitation.id)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=invites.generated.test.js.map