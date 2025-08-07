import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testShieldInformationBarrierSegments', async function testShieldInformationBarrierSegments() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const barrier = await getOrCreateShieldInformationBarrier(client, enterpriseId);
    const barrierId = barrier.id;
    const segmentName = getUuid();
    const segmentDescription = 'barrier segment description';
    const segment = await client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
        shieldInformationBarrier: {
            id: barrierId,
            type: 'shield_information_barrier',
        },
        name: segmentName,
        description: segmentDescription,
    });
    if (!(segment.name == segmentName)) {
        throw new Error('Assertion failed');
    }
    const segments = await client.shieldInformationBarrierSegments.getShieldInformationBarrierSegments({
        shieldInformationBarrierId: barrierId,
    });
    if (!(segments.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const segmentId = segment.id;
    const segmentFromApi = await client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(segmentId);
    if (!(toString(segmentFromApi.type) ==
        'shield_information_barrier_segment')) {
        throw new Error('Assertion failed');
    }
    if (!(segmentFromApi.id == segmentId)) {
        throw new Error('Assertion failed');
    }
    if (!(segmentFromApi.name == segmentName)) {
        throw new Error('Assertion failed');
    }
    if (!(segmentFromApi.description == segmentDescription)) {
        throw new Error('Assertion failed');
    }
    if (!(segmentFromApi.shieldInformationBarrier.id == barrierId)) {
        throw new Error('Assertion failed');
    }
    const updatedSegmentDescription = 'updated barrier segment description';
    const updatedSegment = await client.shieldInformationBarrierSegments.updateShieldInformationBarrierSegmentById(segmentId, {
        requestBody: {
            description: updatedSegmentDescription,
        },
    });
    if (!(updatedSegment.description == updatedSegmentDescription)) {
        throw new Error('Assertion failed');
    }
    await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segmentId);
    await expect(async () => {
        await client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(segmentId);
    }).rejects.toThrow();
});
//# sourceMappingURL=shieldInformationBarrierSegments.generated.test.js.map