import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicyAssignment', async function testCreateUpdateGetDeleteRetentionPolicyAssignment() {
    const retentionPolicyName = getUuid();
    const retentionDescription = 'test description';
    const retentionPolicy = await client.retentionPolicies.createRetentionPolicy({
        policyName: retentionPolicyName,
        policyType: 'finite',
        areOwnersNotified: true,
        canOwnerExtendRetention: true,
        description: retentionDescription,
        dispositionAction: 'remove_retention',
        retentionLength: '1',
        retentionType: 'modifiable',
    });
    const folder = await client.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    const files = await client.uploads.uploadFile({
        attributes: {
            name: getUuid(),
            parent: {
                id: folder.id,
            },
        },
        file: generateByteStream(10),
    });
    const file = files.entries[0];
    const newVersions = await client.uploads.uploadFileVersion(file.id, {
        attributes: {
            name: getUuid(),
        },
        file: generateByteStream(20),
    });
    const newVersion = newVersions.entries[0];
    const retentionPolicyAssignment = await client.retentionPolicyAssignments.createRetentionPolicyAssignment({
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
    const retentionPolicyAssignmentById = await client.retentionPolicyAssignments.getRetentionPolicyAssignmentById(retentionPolicyAssignment.id);
    if (!(retentionPolicyAssignmentById.id == retentionPolicyAssignment.id)) {
        throw new Error('Assertion failed');
    }
    const retentionPolicyAssignments = await client.retentionPolicyAssignments.getRetentionPolicyAssignments(retentionPolicy.id);
    if (!(retentionPolicyAssignments.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    const filesUnderRetention = await client.retentionPolicyAssignments.getFilesUnderRetentionPolicyAssignment(retentionPolicyAssignment.id);
    if (!(filesUnderRetention.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    await client.retentionPolicyAssignments.deleteRetentionPolicyAssignmentById(retentionPolicyAssignment.id);
    const retentionPolicyAssignmentsAfterDelete = await client.retentionPolicyAssignments.getRetentionPolicyAssignments(retentionPolicy.id);
    if (!(retentionPolicyAssignmentsAfterDelete.entries.length == 0)) {
        throw new Error('Assertion failed');
    }
    await client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=retentionPolicyAssignments.generated.test.js.map