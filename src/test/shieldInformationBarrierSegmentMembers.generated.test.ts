import { serializeShieldInformationBarrier } from '../schemas.generated.js';
import { deserializeShieldInformationBarrier } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { serializeCreateShieldInformationBarrierSegmentRequestBody } from '../managers/shieldInformationBarrierSegments.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentRequestBody } from '../managers/shieldInformationBarrierSegments.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { serializeShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegmentMember } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentMember } from '../schemas.generated.js';
import { serializeCreateShieldInformationBarrierSegmentMemberRequestBody } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentMemberRequestBody } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { serializeUserBase } from '../schemas.generated.js';
import { deserializeUserBase } from '../schemas.generated.js';
import { serializeUserBaseTypeField } from '../schemas.generated.js';
import { deserializeUserBaseTypeField } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegmentMembers } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentMembers } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { ShieldInformationBarrier } from '../schemas.generated.js';
import { ShieldInformationBarrierSegment } from '../schemas.generated.js';
import { CreateShieldInformationBarrierSegmentRequestBody } from '../managers/shieldInformationBarrierSegments.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
import { ShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { ShieldInformationBarrierSegmentMember } from '../schemas.generated.js';
import { CreateShieldInformationBarrierSegmentMemberRequestBody } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { UserBase } from '../schemas.generated.js';
import { UserBaseTypeField } from '../schemas.generated.js';
import { ShieldInformationBarrierSegmentMembers } from '../schemas.generated.js';
import { GetShieldInformationBarrierSegmentMembersQueryParams } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
test('testShieldInformationBarrierSegmentMembers', async function testShieldInformationBarrierSegmentMembers(): Promise<any> {
  const client: BoxClient = getDefaultClientAsUser(getEnvVar('USER_ID'));
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
      } satisfies CreateShieldInformationBarrierSegmentRequestBody
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
        user: {
          id: getEnvVar('USER_ID'),
          type: 'user' as UserBaseTypeField,
        } satisfies UserBase,
      } satisfies CreateShieldInformationBarrierSegmentMemberRequestBody
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
      } satisfies GetShieldInformationBarrierSegmentMembersQueryParams
    );
  if (!(segmentMembers.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const segmentMemberGet: ShieldInformationBarrierSegmentMember =
    await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(
      segmentMember.id!
    );
  if (!(segmentMemberGet.id! == segmentMember.id!)) {
    throw new Error('Assertion failed');
  }
  await client.shieldInformationBarrierSegmentMembers.deleteShieldInformationBarrierSegmentMemberById(
    segmentMember.id!
  );
  await expect(async () => {
    await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(
      segmentMember.id!
    );
  }).rejects.toThrow();
  await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(
    segment.id!
  );
});
export {};
