import { serializeShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { deserializeShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { serializeShieldInformationBarrierSegment } from '@/schemas/shieldInformationBarrierSegment.generated';
import { deserializeShieldInformationBarrierSegment } from '@/schemas/shieldInformationBarrierSegment.generated';
import { serializeCreateShieldInformationBarrierSegmentRequestBody } from '@/managers/shieldInformationBarrierSegments.generated';
import { deserializeCreateShieldInformationBarrierSegmentRequestBody } from '@/managers/shieldInformationBarrierSegments.generated';
import { serializeShieldInformationBarrierBase } from '@/schemas/shieldInformationBarrierBase.generated';
import { deserializeShieldInformationBarrierBase } from '@/schemas/shieldInformationBarrierBase.generated';
import { serializeShieldInformationBarrierBaseTypeField } from '@/schemas/shieldInformationBarrierBase.generated';
import { deserializeShieldInformationBarrierBaseTypeField } from '@/schemas/shieldInformationBarrierBase.generated';
import { serializeShieldInformationBarrierSegmentMember } from '@/schemas/shieldInformationBarrierSegmentMember.generated';
import { deserializeShieldInformationBarrierSegmentMember } from '@/schemas/shieldInformationBarrierSegmentMember.generated';
import { serializeCreateShieldInformationBarrierSegmentMemberRequestBody } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { deserializeCreateShieldInformationBarrierSegmentMemberRequestBody } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { serializeUserBase } from '@/schemas/userBase.generated';
import { deserializeUserBase } from '@/schemas/userBase.generated';
import { serializeShieldInformationBarrierSegmentMembers } from '@/schemas/shieldInformationBarrierSegmentMembers.generated';
import { deserializeShieldInformationBarrierSegmentMembers } from '@/schemas/shieldInformationBarrierSegmentMembers.generated';
import { BoxClient } from '@/client.generated';
import { ShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { ShieldInformationBarrierSegment } from '@/schemas/shieldInformationBarrierSegment.generated';
import { CreateShieldInformationBarrierSegmentRequestBody } from '@/managers/shieldInformationBarrierSegments.generated';
import { ShieldInformationBarrierBase } from '@/schemas/shieldInformationBarrierBase.generated';
import { ShieldInformationBarrierBaseTypeField } from '@/schemas/shieldInformationBarrierBase.generated';
import { ShieldInformationBarrierSegmentMember } from '@/schemas/shieldInformationBarrierSegmentMember.generated';
import { CreateShieldInformationBarrierSegmentMemberRequestBody } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { UserBase } from '@/schemas/userBase.generated';
import { ShieldInformationBarrierSegmentMembers } from '@/schemas/shieldInformationBarrierSegmentMembers.generated';
import { GetShieldInformationBarrierSegmentMembersQueryParams } from '@/managers/shieldInformationBarrierSegmentMembers.generated';
import { getEnvVar } from '@/internal/utils';
import { getUuid } from '@/internal/utils';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { getOrCreateShieldInformationBarrier } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
test('testShieldInformationBarrierSegmentMembers', async function testShieldInformationBarrierSegmentMembers(): Promise<any> {
  const client: BoxClient = getDefaultClientWithUserSubject(
    getEnvVar('USER_ID'),
  );
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const barrier: ShieldInformationBarrier =
    await getOrCreateShieldInformationBarrier(client, enterpriseId);
  const barrierId: string = barrier.id!;
  const segmentName: string = getUuid();
  const segment: ShieldInformationBarrierSegment =
    await client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment(
      {
        shieldInformationBarrier: {
          id: barrierId,
          type: 'shield_information_barrier' as ShieldInformationBarrierBaseTypeField,
        } satisfies ShieldInformationBarrierBase,
        name: segmentName,
      } satisfies CreateShieldInformationBarrierSegmentRequestBody,
    );
  if (!(segment.name! == segmentName)) {
    throw new Error('Assertion failed');
  }
  const segmentMember: ShieldInformationBarrierSegmentMember =
    await client.shieldInformationBarrierSegmentMembers.createShieldInformationBarrierSegmentMember(
      {
        shieldInformationBarrierSegment: {
          id: segment.id!,
          type: 'shield_information_barrier_segment' as CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField,
        } satisfies CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField,
        user: new UserBase({ id: getEnvVar('USER_ID') }),
      } satisfies CreateShieldInformationBarrierSegmentMemberRequestBody,
    );
  if (!(segmentMember.user!.id == getEnvVar('USER_ID'))) {
    throw new Error('Assertion failed');
  }
  if (!(segmentMember.shieldInformationBarrierSegment!.id == segment.id!)) {
    throw new Error('Assertion failed');
  }
  const segmentMembers: ShieldInformationBarrierSegmentMembers =
    await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMembers(
      {
        shieldInformationBarrierSegmentId: segment.id!,
      } satisfies GetShieldInformationBarrierSegmentMembersQueryParams,
    );
  if (!(segmentMembers.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const segmentMemberGet: ShieldInformationBarrierSegmentMember =
    await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(
      segmentMember.id!,
    );
  if (!(segmentMemberGet.id! == segmentMember.id!)) {
    throw new Error('Assertion failed');
  }
  await client.shieldInformationBarrierSegmentMembers.deleteShieldInformationBarrierSegmentMemberById(
    segmentMember.id!,
  );
  await expect(async () => {
    await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(
      segmentMember.id!,
    );
  }).rejects.toThrow();
  await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(
    segment.id!,
  );
});
export {};
