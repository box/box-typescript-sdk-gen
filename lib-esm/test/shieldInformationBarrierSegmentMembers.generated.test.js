import { UserBase } from '../schemas/userBase.generated.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
test('testShieldInformationBarrierSegmentMembers', async function testShieldInformationBarrierSegmentMembers() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const barrier = await getOrCreateShieldInformationBarrier(client, enterpriseId);
    const barrierId = barrier.id;
    const segmentName = getUuid();
    const segment = await client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
        shieldInformationBarrier: {
            id: barrierId,
            type: 'shield_information_barrier',
        },
        name: segmentName,
    });
    if (!(segment.name == segmentName)) {
        throw new Error('Assertion failed');
    }
    const segmentMember = await client.shieldInformationBarrierSegmentMembers.createShieldInformationBarrierSegmentMember({
        shieldInformationBarrierSegment: {
            id: segment.id,
            type: 'shield_information_barrier_segment',
        },
        user: new UserBase({ id: getEnvVar('USER_ID') }),
    });
    if (!(segmentMember.user.id == getEnvVar('USER_ID'))) {
        throw new Error('Assertion failed');
    }
    if (!(segmentMember.shieldInformationBarrierSegment.id == segment.id)) {
        throw new Error('Assertion failed');
    }
    const segmentMembers = await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMembers({
        shieldInformationBarrierSegmentId: segment.id,
    });
    if (!(segmentMembers.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const segmentMemberGet = await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(segmentMember.id);
    if (!(segmentMemberGet.id == segmentMember.id)) {
        throw new Error('Assertion failed');
    }
    await client.shieldInformationBarrierSegmentMembers.deleteShieldInformationBarrierSegmentMemberById(segmentMember.id);
    await expect(async () => {
        await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(segmentMember.id);
    }).rejects.toThrow();
    await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segment.id);
});
//# sourceMappingURL=shieldInformationBarrierSegmentMembers.generated.test.js.map