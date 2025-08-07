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
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testCreateUpdateGetDeleteRetentionPolicyAssignment', function testCreateUpdateGetDeleteRetentionPolicyAssignment() {
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
        const folder = yield exports.client.folders.createFolder({
            name: (0, utils_js_1.getUuid)(),
            parent: { id: '0' },
        });
        const files = yield exports.client.uploads.uploadFile({
            attributes: {
                name: (0, utils_js_1.getUuid)(),
                parent: {
                    id: folder.id,
                },
            },
            file: (0, utils_js_2.generateByteStream)(10),
        });
        const file = files.entries[0];
        const newVersions = yield exports.client.uploads.uploadFileVersion(file.id, {
            attributes: {
                name: (0, utils_js_1.getUuid)(),
            },
            file: (0, utils_js_2.generateByteStream)(20),
        });
        const newVersion = newVersions.entries[0];
        const retentionPolicyAssignment = yield exports.client.retentionPolicyAssignments.createRetentionPolicyAssignment({
            policyId: retentionPolicy.id,
            assignTo: {
                type: 'folder',
                id: folder.id,
            },
        });
        if (!(retentionPolicyAssignment.retentionPolicy.id == retentionPolicy.id)) {
            throw new Error('Assertion failed');
        }
        if (!(retentionPolicyAssignment.assignedTo.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        const retentionPolicyAssignmentById = yield exports.client.retentionPolicyAssignments.getRetentionPolicyAssignmentById(retentionPolicyAssignment.id);
        if (!(retentionPolicyAssignmentById.id == retentionPolicyAssignment.id)) {
            throw new Error('Assertion failed');
        }
        const retentionPolicyAssignments = yield exports.client.retentionPolicyAssignments.getRetentionPolicyAssignments(retentionPolicy.id);
        if (!(retentionPolicyAssignments.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        const filesUnderRetention = yield exports.client.retentionPolicyAssignments.getFilesUnderRetentionPolicyAssignment(retentionPolicyAssignment.id);
        if (!(filesUnderRetention.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.retentionPolicyAssignments.deleteRetentionPolicyAssignmentById(retentionPolicyAssignment.id);
        const retentionPolicyAssignmentsAfterDelete = yield exports.client.retentionPolicyAssignments.getRetentionPolicyAssignments(retentionPolicy.id);
        if (!(retentionPolicyAssignmentsAfterDelete.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=retentionPolicyAssignments.generated.test.js.map