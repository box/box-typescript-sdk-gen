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
const utils_js_3 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testCreateNotOngoingLegalHoldPolicy', function testCreateNotOngoingLegalHoldPolicy() {
    return __awaiter(this, void 0, void 0, function* () {
        const legalHoldPolicyName = (0, utils_js_1.getUuid)();
        const legalHoldDescription = 'test description';
        const filterStartedAt = (0, utils_js_2.dateTimeFromString)('2021-01-01T00:00:00-08:00');
        const filterEndedAt = (0, utils_js_2.dateTimeFromString)('2022-01-01T00:00:00-08:00');
        const legalHoldPolicy = yield exports.client.legalHoldPolicies.createLegalHoldPolicy({
            policyName: legalHoldPolicyName,
            description: legalHoldDescription,
            isOngoing: false,
            filterStartedAt: filterStartedAt,
            filterEndedAt: filterEndedAt,
        });
        if (!(legalHoldPolicy.policyName == legalHoldPolicyName)) {
            throw new Error('Assertion failed');
        }
        if (!(legalHoldPolicy.description == legalHoldDescription)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.dateTimeToString)(legalHoldPolicy.filterStartedAt) ==
            (0, utils_js_3.dateTimeToString)(filterStartedAt))) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.dateTimeToString)(legalHoldPolicy.filterEndedAt) ==
            (0, utils_js_3.dateTimeToString)(filterEndedAt))) {
            throw new Error('Assertion failed');
        }
        yield exports.client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicy.id);
    });
});
test('testCreateUpdateGetDeleteLegalHoldPolicy', function testCreateUpdateGetDeleteLegalHoldPolicy() {
    return __awaiter(this, void 0, void 0, function* () {
        const legalHoldPolicyName = (0, utils_js_1.getUuid)();
        const legalHoldDescription = 'test description';
        const legalHoldPolicy = yield exports.client.legalHoldPolicies.createLegalHoldPolicy({
            policyName: legalHoldPolicyName,
            description: legalHoldDescription,
            isOngoing: true,
        });
        if (!(legalHoldPolicy.policyName == legalHoldPolicyName)) {
            throw new Error('Assertion failed');
        }
        if (!(legalHoldPolicy.description == legalHoldDescription)) {
            throw new Error('Assertion failed');
        }
        const legalHoldPolicyId = legalHoldPolicy.id;
        const legalHoldPolicyById = yield exports.client.legalHoldPolicies.getLegalHoldPolicyById(legalHoldPolicyId);
        if (!(legalHoldPolicyById.id == legalHoldPolicyId)) {
            throw new Error('Assertion failed');
        }
        const legalHoldPolicies = yield exports.client.legalHoldPolicies.getLegalHoldPolicies();
        if (!(legalHoldPolicies.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const updatedLegalHoldPolicyName = (0, utils_js_1.getUuid)();
        const updatedLegalHoldPolicy = yield exports.client.legalHoldPolicies.updateLegalHoldPolicyById(legalHoldPolicyId, {
            requestBody: {
                policyName: updatedLegalHoldPolicyName,
            },
        });
        if (!(updatedLegalHoldPolicy.policyName == updatedLegalHoldPolicyName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicyId);
    });
});
//# sourceMappingURL=legalHoldPolicies.generated.test.js.map