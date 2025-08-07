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
test('testCollaborationAllowlistExemptTargets', function testCollaborationAllowlistExemptTargets() {
    return __awaiter(this, void 0, void 0, function* () {
        const exemptTargets = yield exports.client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargets();
        if (!(exemptTargets.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        const user = yield exports.client.users.createUser({
            name: (0, utils_js_1.getUuid)(),
            login: ''.concat((0, utils_js_1.getUuid)(), '@boxdemo.com'),
            isPlatformAccessOnly: true,
        });
        const newExemptTarget = yield exports.client.collaborationAllowlistExemptTargets.createCollaborationWhitelistExemptTarget({
            user: {
                id: user.id,
            },
        });
        if (!((0, utils_js_2.toString)(newExemptTarget.type) ==
            'collaboration_whitelist_exempt_target')) {
            throw new Error('Assertion failed');
        }
        if (!(newExemptTarget.user.id == user.id)) {
            throw new Error('Assertion failed');
        }
        const exemptTarget = yield exports.client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(newExemptTarget.id);
        if (!(exemptTarget.id == newExemptTarget.id)) {
            throw new Error('Assertion failed');
        }
        if (!(exemptTarget.user.id == user.id)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.collaborationAllowlistExemptTargets.deleteCollaborationWhitelistExemptTargetById(exemptTarget.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(exemptTarget.id);
        })).rejects.toThrow();
        yield exports.client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=collaborationAllowlistExemptTargets.generated.test.js.map