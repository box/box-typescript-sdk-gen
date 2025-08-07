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
test('testCreateUpdateGetDeleteRetentionPolicy', function testCreateUpdateGetDeleteRetentionPolicy() {
    return __awaiter(this, void 0, void 0, function* () {
        const retentionPolicyName = (0, utils_js_1.getUuid)();
        const retentionDescription = 'test description';
        const retentionPolicy = yield exports.client.retentionPolicies.createRetentionPolicy({
            policyName: retentionPolicyName,
            policyType: 'finite',
            areOwnersNotified: true,
            canOwnerExtendRetention: true,
            description: retentionDescription,
            dispositionAction: 'remove_retention',
            retentionLength: '1',
            retentionType: 'modifiable',
        });
        if (!(retentionPolicy.policyName == retentionPolicyName)) {
            throw new Error('Assertion failed');
        }
        if (!(retentionPolicy.description == retentionDescription)) {
            throw new Error('Assertion failed');
        }
        const retentionPolicyById = yield exports.client.retentionPolicies.getRetentionPolicyById(retentionPolicy.id);
        if (!(retentionPolicyById.id == retentionPolicy.id)) {
            throw new Error('Assertion failed');
        }
        const retentionPolicies = yield exports.client.retentionPolicies.getRetentionPolicies();
        if (!(retentionPolicies.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const updatedRetentionPolicyName = (0, utils_js_1.getUuid)();
        const updatedRetentionPolicy = yield exports.client.retentionPolicies.updateRetentionPolicyById(retentionPolicy.id, {
            requestBody: {
                policyName: updatedRetentionPolicyName,
            },
        });
        if (!(updatedRetentionPolicy.policyName == updatedRetentionPolicyName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
    });
});
//# sourceMappingURL=retentionPolicies.generated.test.js.map