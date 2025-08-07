import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testShieldInformationBarriers', async function testShieldInformationBarriers() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const barrier = await getOrCreateShieldInformationBarrier(client, enterpriseId);
    if (!(toString(barrier.status) == 'draft')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(barrier.type) == 'shield_information_barrier')) {
        throw new Error('Assertion failed');
    }
    if (!(barrier.enterprise.id == enterpriseId)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(barrier.enterprise.type) == 'enterprise')) {
        throw new Error('Assertion failed');
    }
    const barrierId = barrier.id;
    const barrierFromApi = await client.shieldInformationBarriers.getShieldInformationBarrierById(barrierId);
    if (!(barrierFromApi.id == barrierId)) {
        throw new Error('Assertion failed');
    }
    const barriers = await client.shieldInformationBarriers.getShieldInformationBarriers();
    if (!(barriers.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
    await expect(async () => {
        await client.shieldInformationBarriers.updateShieldInformationBarrierStatus({
            id: barrierId,
            status: 'disabled',
        });
    }).rejects.toThrow();
});
//# sourceMappingURL=shieldInformationBarriers.generated.test.js.map