import { serializeShieldInformationBarrier } from '../schemas.generated.js';
import { deserializeShieldInformationBarrier } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { serializeCreateShieldInformationBarrierSegmentRequestBodyArg } from '../managers/shieldInformationBarrierSegments.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentRequestBodyArg } from '../managers/shieldInformationBarrierSegments.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { serializeShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegmentMember } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentMember } from '../schemas.generated.js';
import { serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { serializeUserBase } from '../schemas.generated.js';
import { deserializeUserBase } from '../schemas.generated.js';
import { serializeUserBaseTypeField } from '../schemas.generated.js';
import { deserializeUserBaseTypeField } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegmentMembers } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentMembers } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { ShieldInformationBarrier } from '../schemas.generated.js';
import { ShieldInformationBarrierSegment } from '../schemas.generated.js';
import { CreateShieldInformationBarrierSegmentRequestBodyArg } from '../managers/shieldInformationBarrierSegments.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
import { ShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { ShieldInformationBarrierSegmentMember } from '../schemas.generated.js';
import { CreateShieldInformationBarrierSegmentMemberRequestBodyArg } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
import { UserBase } from '../schemas.generated.js';
import { UserBaseTypeField } from '../schemas.generated.js';
import { ShieldInformationBarrierSegmentMembers } from '../schemas.generated.js';
import { GetShieldInformationBarrierSegmentMembersQueryParamsArg } from '../managers/shieldInformationBarrierSegmentMembers.generated.js';
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
  const client: BoxClient = await getDefaultClientAsUser(getEnvVar('USER_ID'));
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
      } satisfies CreateShieldInformationBarrierSegmentRequestBodyArg
    );
  if (!(segment.name! == segmentName)) {
    throw 'Assertion failed';
  }
  const segmentMember: ShieldInformationBarrierSegmentMember =
    await client.shieldInformationBarrierSegmentMembers.createShieldInformationBarrierSegmentMember(
      {
        shieldInformationBarrierSegment: {
          id: segment.id!,
          type: 'shield_information_barrier_segment' as CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField,
        } satisfies CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField,
        user: {
          id: getEnvVar('USER_ID'),
          type: 'user' as UserBaseTypeField,
        } satisfies UserBase,
      } satisfies CreateShieldInformationBarrierSegmentMemberRequestBodyArg
    );
  if (!(segmentMember.user!.id == getEnvVar('USER_ID'))) {
    throw 'Assertion failed';
  }
  if (!(segmentMember.shieldInformationBarrierSegment!.id == segment.id!)) {
    throw 'Assertion failed';
  }
  const segmentMembers: ShieldInformationBarrierSegmentMembers =
    await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMembers(
      {
        shieldInformationBarrierSegmentId: segment.id!,
      } satisfies GetShieldInformationBarrierSegmentMembersQueryParamsArg
    );
  if (!(segmentMembers.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const segmentMemberGet: ShieldInformationBarrierSegmentMember =
    await client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(
      segmentMember.id!
    );
  if (!(segmentMemberGet.id! == segmentMember.id!)) {
    throw 'Assertion failed';
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
