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
exports.adminUserId = void 0;
exports.getOrCreateStoragePolicyAssignment = getOrCreateStoragePolicyAssignment;
const storagePolicyAssignments_generated_js_1 = require("../managers/storagePolicyAssignments.generated.js");
const storagePolicyAssignments_generated_js_2 = require("../managers/storagePolicyAssignments.generated.js");
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const client_generated_js_1 = require("../client.generated.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
exports.adminUserId = (0, utils_js_1.getEnvVar)('USER_ID');
function getOrCreateStoragePolicyAssignment(clientInput, policyId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new client_generated_js_1.BoxClient({
            auth: clientInput.auth,
            networkSession: clientInput.networkSession,
        });
        const storagePolicyAssignments = yield client.storagePolicyAssignments.getStoragePolicyAssignments({
            resolvedForType: 'user',
            resolvedForId: userId,
        });
        if (storagePolicyAssignments.entries.length > 0) {
            if ((0, utils_js_3.toString)(storagePolicyAssignments.entries[0].assignedTo.type) == 'user') {
                return storagePolicyAssignments.entries[0];
            }
        }
        const storagePolicyAssignment = yield client.storagePolicyAssignments.createStoragePolicyAssignment({
            storagePolicy: new storagePolicyAssignments_generated_js_1.CreateStoragePolicyAssignmentRequestBodyStoragePolicyField({
                id: policyId,
            }),
            assignedTo: {
                id: userId,
                type: 'user',
            },
        });
        return storagePolicyAssignment;
    });
}
test('testGetStoragePolicyAssignments', function testGetStoragePolicyAssignments() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)(exports.adminUserId);
        const userName = (0, utils_js_2.getUuid)();
        const newUser = yield client.users.createUser({
            name: userName,
            isPlatformAccessOnly: true,
        });
        const storagePolicies = yield client.storagePolicies.getStoragePolicies();
        const storagePolicy1 = storagePolicies.entries[0];
        const storagePolicy2 = storagePolicies.entries[1];
        const storagePolicyAssignment = yield getOrCreateStoragePolicyAssignment(client, storagePolicy1.id, newUser.id);
        if (!((0, utils_js_3.toString)(storagePolicyAssignment.type) ==
            'storage_policy_assignment')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(storagePolicyAssignment.assignedTo.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!(storagePolicyAssignment.assignedTo.id == newUser.id)) {
            throw new Error('Assertion failed');
        }
        const getStoragePolicyAssignment = yield client.storagePolicyAssignments.getStoragePolicyAssignmentById(storagePolicyAssignment.id);
        if (!(getStoragePolicyAssignment.id == storagePolicyAssignment.id)) {
            throw new Error('Assertion failed');
        }
        const updatedStoragePolicyAssignment = yield client.storagePolicyAssignments.updateStoragePolicyAssignmentById(storagePolicyAssignment.id, {
            storagePolicy: new storagePolicyAssignments_generated_js_2.UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField({
                id: storagePolicy2.id,
            }),
        });
        if (!(updatedStoragePolicyAssignment.storagePolicy.id == storagePolicy2.id)) {
            throw new Error('Assertion failed');
        }
        yield client.storagePolicyAssignments.deleteStoragePolicyAssignmentById(storagePolicyAssignment.id);
        yield client.users.deleteUserById(newUser.id);
    });
});
//# sourceMappingURL=storagePolicicyAssignments.generated.test.js.map