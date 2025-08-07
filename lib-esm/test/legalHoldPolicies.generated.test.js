import { getUuid } from '../internal/utils.js';
import { dateTimeFromString } from '../internal/utils.js';
import { dateTimeToString } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateNotOngoingLegalHoldPolicy', async function testCreateNotOngoingLegalHoldPolicy() {
    const legalHoldPolicyName = getUuid();
    const legalHoldDescription = 'test description';
    const filterStartedAt = dateTimeFromString('2021-01-01T00:00:00-08:00');
    const filterEndedAt = dateTimeFromString('2022-01-01T00:00:00-08:00');
    const legalHoldPolicy = await client.legalHoldPolicies.createLegalHoldPolicy({
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
    if (!(dateTimeToString(legalHoldPolicy.filterStartedAt) ==
        dateTimeToString(filterStartedAt))) {
        throw new Error('Assertion failed');
    }
    if (!(dateTimeToString(legalHoldPolicy.filterEndedAt) ==
        dateTimeToString(filterEndedAt))) {
        throw new Error('Assertion failed');
    }
    await client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicy.id);
});
test('testCreateUpdateGetDeleteLegalHoldPolicy', async function testCreateUpdateGetDeleteLegalHoldPolicy() {
    const legalHoldPolicyName = getUuid();
    const legalHoldDescription = 'test description';
    const legalHoldPolicy = await client.legalHoldPolicies.createLegalHoldPolicy({
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
    const legalHoldPolicyById = await client.legalHoldPolicies.getLegalHoldPolicyById(legalHoldPolicyId);
    if (!(legalHoldPolicyById.id == legalHoldPolicyId)) {
        throw new Error('Assertion failed');
    }
    const legalHoldPolicies = await client.legalHoldPolicies.getLegalHoldPolicies();
    if (!(legalHoldPolicies.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const updatedLegalHoldPolicyName = getUuid();
    const updatedLegalHoldPolicy = await client.legalHoldPolicies.updateLegalHoldPolicyById(legalHoldPolicyId, {
        requestBody: {
            policyName: updatedLegalHoldPolicyName,
        },
    });
    if (!(updatedLegalHoldPolicy.policyName == updatedLegalHoldPolicyName)) {
        throw new Error('Assertion failed');
    }
    await client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicyId);
});
//# sourceMappingURL=legalHoldPolicies.generated.test.js.map