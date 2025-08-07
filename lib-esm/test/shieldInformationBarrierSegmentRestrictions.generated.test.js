import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
test('testShieldInformationBarrierSegmentRestrictions', async function testShieldInformationBarrierSegmentRestrictions() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const barrier = await getOrCreateShieldInformationBarrier(client, enterpriseId);
    const barrierId = barrier.id;
    const segment = await client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
        shieldInformationBarrier: {
            id: barrierId,
            type: 'shield_information_barrier',
        },
        name: getUuid(),
        description: 'barrier segment description',
    });
    const segmentId = segment.id;
    const segmentToRestrict = await client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
        shieldInformationBarrier: {
            id: barrierId,
            type: 'shield_information_barrier',
        },
        name: getUuid(),
        description: 'barrier segment description',
    });
    const segmentToRestrictId = segmentToRestrict.id;
    const segmentRestriction = await client.shieldInformationBarrierSegmentRestrictions.createShieldInformationBarrierSegmentRestriction({
        restrictedSegment: {
            id: segmentToRestrictId,
            type: 'shield_information_barrier_segment',
        },
        shieldInformationBarrierSegment: {
            id: segmentId,
            type: 'shield_information_barrier_segment',
        },
        type: 'shield_information_barrier_segment_restriction',
    });
    const segmentRestrictionId = segmentRestriction.id;
    if (!(segmentRestriction.shieldInformationBarrierSegment.id == segmentId)) {
        throw new Error('Assertion failed');
    }
    const segmentRestrictions = await client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictions({
        shieldInformationBarrierSegmentId: segmentId,
    });
    if (!(segmentRestrictions.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const segmentRestrictionFromApi = await client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictionById(segmentRestrictionId);
    if (!(segmentRestrictionFromApi.id == segmentRestrictionId)) {
        throw new Error('Assertion failed');
    }
    if (!(segmentRestrictionFromApi.shieldInformationBarrierSegment.id == segmentId)) {
        throw new Error('Assertion failed');
    }
    if (!(segmentRestrictionFromApi.restrictedSegment.id == segmentToRestrictId)) {
        throw new Error('Assertion failed');
    }
    if (!(segmentRestrictionFromApi.shieldInformationBarrier.id == barrierId)) {
        throw new Error('Assertion failed');
    }
    await client.shieldInformationBarrierSegmentRestrictions.deleteShieldInformationBarrierSegmentRestrictionById(segmentRestrictionId);
    await expect(async () => {
        await client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictionById(segmentRestrictionId);
    }).rejects.toThrow();
    await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segmentId);
    await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segmentToRestrictId);
});
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictions.generated.test.js.map