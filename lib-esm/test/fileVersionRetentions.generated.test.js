import { generateByteStream } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { createNewFolder } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicy', async function testCreateUpdateGetDeleteRetentionPolicy() {
    const description = getUuid();
    const retentionPolicy = await client.retentionPolicies.createRetentionPolicy({
        policyName: getUuid(),
        policyType: 'finite',
        dispositionAction: 'remove_retention',
        retentionLength: '1',
        description: description,
        canOwnerExtendRetention: false,
        retentionType: 'modifiable',
    });
    if (!(retentionPolicy.description == description)) {
        throw new Error('Assertion failed');
    }
    if (!(retentionPolicy.canOwnerExtendRetention == false)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(retentionPolicy.retentionType) == 'modifiable')) {
        throw new Error('Assertion failed');
    }
    const folder = await createNewFolder();
    const retentionPolicyAssignment = await client.retentionPolicyAssignments.createRetentionPolicyAssignment({
        policyId: retentionPolicy.id,
        assignTo: {
            id: folder.id,
            type: 'folder',
        },
    });
    if (!(retentionPolicyAssignment.retentionPolicy.id == retentionPolicy.id)) {
        throw new Error('Assertion failed');
    }
    if (!(retentionPolicyAssignment.assignedTo.id == folder.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(retentionPolicyAssignment.assignedTo.type) ==
        toString(folder.type))) {
        throw new Error('Assertion failed');
    }
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
    const newFiles = await client.uploads.uploadFileVersion(file.id, {
        attributes: {
            name: file.name,
        },
        file: generateByteStream(20),
    });
    const newFile = newFiles.entries[0];
    if (!(newFile.id == file.id)) {
        throw new Error('Assertion failed');
    }
    const fileVersionRetentions = await client.fileVersionRetentions.getFileVersionRetentions();
    const fileVersionRetentionsCount = fileVersionRetentions.entries.length;
    if (!(fileVersionRetentionsCount >= 0)) {
        throw new Error('Assertion failed');
    }
    if (fileVersionRetentionsCount == 0) {
        await client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
        await client.folders.deleteFolderById(folder.id, {
            queryParams: { recursive: true },
        });
        return void 0;
    }
    const fileVersionRetention = fileVersionRetentions.entries[0];
    const fileVersionRetentionById = await client.fileVersionRetentions.getFileVersionRetentionById(fileVersionRetention.id);
    if (!(fileVersionRetentionById.id == fileVersionRetention.id)) {
        throw new Error('Assertion failed');
    }
    await client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
    await client.folders.deleteFolderById(folder.id, {
        queryParams: { recursive: true },
    });
});
//# sourceMappingURL=fileVersionRetentions.generated.test.js.map