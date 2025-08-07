import { CreateStoragePolicyAssignmentRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { BoxClient } from '../client.generated.js';
import { getUuid } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const adminUserId = getEnvVar('USER_ID');
export async function getOrCreateStoragePolicyAssignment(clientInput, policyId, userId) {
    const client = new BoxClient({
        auth: clientInput.auth,
        networkSession: clientInput.networkSession,
    });
    const storagePolicyAssignments = await client.storagePolicyAssignments.getStoragePolicyAssignments({
        resolvedForType: 'user',
        resolvedForId: userId,
    });
    if (storagePolicyAssignments.entries.length > 0) {
        if (toString(storagePolicyAssignments.entries[0].assignedTo.type) == 'user') {
            return storagePolicyAssignments.entries[0];
        }
    }
    const storagePolicyAssignment = await client.storagePolicyAssignments.createStoragePolicyAssignment({
        storagePolicy: new CreateStoragePolicyAssignmentRequestBodyStoragePolicyField({
            id: policyId,
        }),
        assignedTo: {
            id: userId,
            type: 'user',
        },
    });
    return storagePolicyAssignment;
}
test('testGetStoragePolicyAssignments', async function testGetStoragePolicyAssignments() {
    const client = getDefaultClientWithUserSubject(adminUserId);
    const userName = getUuid();
    const newUser = await client.users.createUser({
        name: userName,
        isPlatformAccessOnly: true,
    });
    const storagePolicies = await client.storagePolicies.getStoragePolicies();
    const storagePolicy1 = storagePolicies.entries[0];
    const storagePolicy2 = storagePolicies.entries[1];
    const storagePolicyAssignment = await getOrCreateStoragePolicyAssignment(client, storagePolicy1.id, newUser.id);
    if (!(toString(storagePolicyAssignment.type) ==
        'storage_policy_assignment')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(storagePolicyAssignment.assignedTo.type) == 'user')) {
        throw new Error('Assertion failed');
    }
    if (!(storagePolicyAssignment.assignedTo.id == newUser.id)) {
        throw new Error('Assertion failed');
    }
    const getStoragePolicyAssignment = await client.storagePolicyAssignments.getStoragePolicyAssignmentById(storagePolicyAssignment.id);
    if (!(getStoragePolicyAssignment.id == storagePolicyAssignment.id)) {
        throw new Error('Assertion failed');
    }
    const updatedStoragePolicyAssignment = await client.storagePolicyAssignments.updateStoragePolicyAssignmentById(storagePolicyAssignment.id, {
        storagePolicy: new UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField({
            id: storagePolicy2.id,
        }),
    });
    if (!(updatedStoragePolicyAssignment.storagePolicy.id == storagePolicy2.id)) {
        throw new Error('Assertion failed');
    }
    await client.storagePolicyAssignments.deleteStoragePolicyAssignmentById(storagePolicyAssignment.id);
    await client.users.deleteUserById(newUser.id);
});
//# sourceMappingURL=storagePolicicyAssignments.generated.test.js.map