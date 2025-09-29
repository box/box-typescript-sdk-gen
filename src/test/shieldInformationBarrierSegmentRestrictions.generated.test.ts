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
import { serializeShieldInformationBarrierSegmentRestriction } from '@/schemas/shieldInformationBarrierSegmentRestriction.generated';
import { deserializeShieldInformationBarrierSegmentRestriction } from '@/schemas/shieldInformationBarrierSegmentRestriction.generated';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBody } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { serializeShieldInformationBarrierSegmentRestrictions } from '@/schemas/shieldInformationBarrierSegmentRestrictions.generated';
import { deserializeShieldInformationBarrierSegmentRestrictions } from '@/schemas/shieldInformationBarrierSegmentRestrictions.generated';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { BoxClient } from '@/client.generated';
import { ShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { ShieldInformationBarrierSegment } from '@/schemas/shieldInformationBarrierSegment.generated';
import { CreateShieldInformationBarrierSegmentRequestBody } from '@/managers/shieldInformationBarrierSegments.generated';
import { ShieldInformationBarrierBase } from '@/schemas/shieldInformationBarrierBase.generated';
import { ShieldInformationBarrierBaseTypeField } from '@/schemas/shieldInformationBarrierBase.generated';
import { ShieldInformationBarrierSegmentRestriction } from '@/schemas/shieldInformationBarrierSegmentRestriction.generated';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBody } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
import { ShieldInformationBarrierSegmentRestrictions } from '@/schemas/shieldInformationBarrierSegmentRestrictions.generated';
import { GetShieldInformationBarrierSegmentRestrictionsQueryParams } from '@/managers/shieldInformationBarrierSegmentRestrictions.generated';
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
test('testShieldInformationBarrierSegmentRestrictions', async function testShieldInformationBarrierSegmentRestrictions(): Promise<any> {
  const client: BoxClient = getDefaultClientWithUserSubject(
    getEnvVar('USER_ID'),
  );
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const barrier: ShieldInformationBarrier =
    await getOrCreateShieldInformationBarrier(client, enterpriseId);
  const barrierId: string = barrier.id!;
  const segment: ShieldInformationBarrierSegment =
    await client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment(
      {
        shieldInformationBarrier: {
          id: barrierId,
          type: 'shield_information_barrier' as ShieldInformationBarrierBaseTypeField,
        } satisfies ShieldInformationBarrierBase,
        name: getUuid(),
        description: 'barrier segment description',
      } satisfies CreateShieldInformationBarrierSegmentRequestBody,
    );
  const segmentId: string = segment.id!;
  const segmentToRestrict: ShieldInformationBarrierSegment =
    await client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment(
      {
        shieldInformationBarrier: {
          id: barrierId,
          type: 'shield_information_barrier' as ShieldInformationBarrierBaseTypeField,
        } satisfies ShieldInformationBarrierBase,
        name: getUuid(),
        description: 'barrier segment description',
      } satisfies CreateShieldInformationBarrierSegmentRequestBody,
    );
  const segmentToRestrictId: string = segmentToRestrict.id!;
  const segmentRestriction: ShieldInformationBarrierSegmentRestriction =
    await client.shieldInformationBarrierSegmentRestrictions.createShieldInformationBarrierSegmentRestriction(
      {
        restrictedSegment: {
          id: segmentToRestrictId,
          type: 'shield_information_barrier_segment' as CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField,
        } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField,
        shieldInformationBarrierSegment: {
          id: segmentId,
          type: 'shield_information_barrier_segment' as CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField,
        } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField,
        type: 'shield_information_barrier_segment_restriction' as CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField,
      } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput,
    );
  const segmentRestrictionId: string = segmentRestriction.id!;
  if (!(segmentRestriction.shieldInformationBarrierSegment.id == segmentId)) {
    throw new Error('Assertion failed');
  }
  const segmentRestrictions: ShieldInformationBarrierSegmentRestrictions =
    await client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictions(
      {
        shieldInformationBarrierSegmentId: segmentId,
      } satisfies GetShieldInformationBarrierSegmentRestrictionsQueryParams,
    );
  if (!(segmentRestrictions.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const segmentRestrictionFromApi: ShieldInformationBarrierSegmentRestriction =
    await client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictionById(
      segmentRestrictionId,
    );
  if (!(segmentRestrictionFromApi.id! == segmentRestrictionId)) {
    throw new Error('Assertion failed');
  }
  if (
    !(segmentRestrictionFromApi.shieldInformationBarrierSegment.id == segmentId)
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(segmentRestrictionFromApi.restrictedSegment.id == segmentToRestrictId)
  ) {
    throw new Error('Assertion failed');
  }
  if (!(segmentRestrictionFromApi.shieldInformationBarrier!.id == barrierId)) {
    throw new Error('Assertion failed');
  }
  await client.shieldInformationBarrierSegmentRestrictions.deleteShieldInformationBarrierSegmentRestrictionById(
    segmentRestrictionId,
  );
  await expect(async () => {
    await client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictionById(
      segmentRestrictionId,
    );
  }).rejects.toThrow();
  await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(
    segmentId,
  );
  await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(
    segmentToRestrictId,
  );
});
export {};
