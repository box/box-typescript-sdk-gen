import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicy', async function testCreateUpdateGetDeleteRetentionPolicy() {
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
    if (!(retentionPolicy.policyName == retentionPolicyName)) {
        throw new Error('Assertion failed');
    }
    if (!(retentionPolicy.description == retentionDescription)) {
        throw new Error('Assertion failed');
    }
    const retentionPolicyById = await client.retentionPolicies.getRetentionPolicyById(retentionPolicy.id);
    if (!(retentionPolicyById.id == retentionPolicy.id)) {
        throw new Error('Assertion failed');
    }
    const retentionPolicies = await client.retentionPolicies.getRetentionPolicies();
    if (!(retentionPolicies.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const updatedRetentionPolicyName = getUuid();
    const updatedRetentionPolicy = await client.retentionPolicies.updateRetentionPolicyById(retentionPolicy.id, {
        requestBody: {
            policyName: updatedRetentionPolicyName,
        },
    });
    if (!(updatedRetentionPolicy.policyName == updatedRetentionPolicyName)) {
        throw new Error('Assertion failed');
    }
    await client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
});
//# sourceMappingURL=retentionPolicies.generated.test.js.map