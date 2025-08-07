import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testLegalHoldPolicyAssignments', async function testLegalHoldPolicyAssignments() {
    const legalHoldPolicyName = getUuid();
    const legalHoldDescription = 'test description';
    const legalHoldPolicy = await client.legalHoldPolicies.createLegalHoldPolicy({
        policyName: legalHoldPolicyName,
        description: legalHoldDescription,
        isOngoing: true,
    });
    const legalHoldPolicyId = legalHoldPolicy.id;
    const file = await uploadNewFile();
    const fileId = file.id;
    const legalHoldPolicyAssignment = await client.legalHoldPolicyAssignments.createLegalHoldPolicyAssignment({
        policyId: legalHoldPolicyId,
        assignTo: {
            type: 'file',
            id: fileId,
        },
    });
    if (!(toString(legalHoldPolicyAssignment.legalHoldPolicy.type) ==
        'legal_hold_policy')) {
        throw new Error('Assertion failed');
    }
    if (!(legalHoldPolicyAssignment.assignedTo.id == fileId)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(legalHoldPolicyAssignment.assignedTo.type) == 'file')) {
        throw new Error('Assertion failed');
    }
    const legalHoldPolicyAssignmentId = legalHoldPolicyAssignment.id;
    const legalHoldPolicyAssignmentFromApi = await client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId);
    if (!(legalHoldPolicyAssignmentFromApi.id == legalHoldPolicyAssignmentId)) {
        throw new Error('Assertion failed');
    }
    const legalPolicyAssignments = await client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignments({
        policyId: legalHoldPolicyId,
    });
    if (!(legalPolicyAssignments.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    const filesOnHold = await client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId);
    if (!(filesOnHold.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    if (!(filesOnHold.entries[0].id == fileId)) {
        throw new Error('Assertion failed');
    }
    await client.legalHoldPolicyAssignments.deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId);
    await expect(async () => {
        await client.legalHoldPolicyAssignments.deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId);
    }).rejects.toThrow();
    await client.files.deleteFileById(fileId);
    try {
        await client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicyId);
    }
    catch (error) {
        console.log(''.concat('Could not delete Legal Policy with id: ', legalHoldPolicyId));
    }
    finally {
    }
});
//# sourceMappingURL=legalHoldPolicyAssignments.generated.test.js.map