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
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testLegalHoldPolicyAssignments', function testLegalHoldPolicyAssignments() {
    return __awaiter(this, void 0, void 0, function* () {
        const legalHoldPolicyName = (0, utils_js_1.getUuid)();
        const legalHoldDescription = 'test description';
        const legalHoldPolicy = yield exports.client.legalHoldPolicies.createLegalHoldPolicy({
            policyName: legalHoldPolicyName,
            description: legalHoldDescription,
            isOngoing: true,
        });
        const legalHoldPolicyId = legalHoldPolicy.id;
        const file = yield (0, commons_generated_js_2.uploadNewFile)();
        const fileId = file.id;
        const legalHoldPolicyAssignment = yield exports.client.legalHoldPolicyAssignments.createLegalHoldPolicyAssignment({
            policyId: legalHoldPolicyId,
            assignTo: {
                type: 'file',
                id: fileId,
            },
        });
        if (!((0, utils_js_2.toString)(legalHoldPolicyAssignment.legalHoldPolicy.type) ==
            'legal_hold_policy')) {
            throw new Error('Assertion failed');
        }
        if (!(legalHoldPolicyAssignment.assignedTo.id == fileId)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(legalHoldPolicyAssignment.assignedTo.type) == 'file')) {
            throw new Error('Assertion failed');
        }
        const legalHoldPolicyAssignmentId = legalHoldPolicyAssignment.id;
        const legalHoldPolicyAssignmentFromApi = yield exports.client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId);
        if (!(legalHoldPolicyAssignmentFromApi.id == legalHoldPolicyAssignmentId)) {
            throw new Error('Assertion failed');
        }
        const legalPolicyAssignments = yield exports.client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignments({
            policyId: legalHoldPolicyId,
        });
        if (!(legalPolicyAssignments.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        const filesOnHold = yield exports.client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId);
        if (!(filesOnHold.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        if (!(filesOnHold.entries[0].id == fileId)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.legalHoldPolicyAssignments.deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.legalHoldPolicyAssignments.deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId);
        })).rejects.toThrow();
        yield exports.client.files.deleteFileById(fileId);
        try {
            yield exports.client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicyId);
        }
        catch (error) {
            console.log(''.concat('Could not delete Legal Policy with id: ', legalHoldPolicyId));
        }
        finally {
        }
    });
});
//# sourceMappingURL=legalHoldPolicyAssignments.generated.test.js.map