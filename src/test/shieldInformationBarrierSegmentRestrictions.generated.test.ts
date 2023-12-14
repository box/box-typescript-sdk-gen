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
import { serializeShieldInformationBarrierSegmentRestriction } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentRestriction } from '../schemas.generated.js';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBody } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { serializeShieldInformationBarrierSegmentRestrictions } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentRestrictions } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { ShieldInformationBarrier } from '../schemas.generated.js';
import { ShieldInformationBarrierSegment } from '../schemas.generated.js';
import { CreateShieldInformationBarrierSegmentRequestBody } from '../managers/shieldInformationBarrierSegments.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
import { ShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { ShieldInformationBarrierSegmentRestriction } from '../schemas.generated.js';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBody } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { ShieldInformationBarrierSegmentRestrictions } from '../schemas.generated.js';
import { GetShieldInformationBarrierSegmentRestrictionsQueryParams } from '../managers/shieldInformationBarrierSegmentRestrictions.generated.js';
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
test('testShieldInformationBarrierSegmentRestrictions', async function testShieldInformationBarrierSegmentRestrictions(): Promise<any> {
  const client: BoxClient = await getDefaultClientAsUser(getEnvVar('USER_ID'));
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
      } satisfies CreateShieldInformationBarrierSegmentRequestBody
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
      } satisfies CreateShieldInformationBarrierSegmentRequestBody
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
      } satisfies CreateShieldInformationBarrierSegmentRestrictionRequestBody
    );
  const segmentRestrictionId: string = segmentRestriction.id!;
  if (!(segmentRestriction.shieldInformationBarrierSegment.id == segmentId)) {
    throw 'Assertion failed';
  }
  const segmentRestrictions: ShieldInformationBarrierSegmentRestrictions =
    await client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictions(
      {
        shieldInformationBarrierSegmentId: segmentId,
      } satisfies GetShieldInformationBarrierSegmentRestrictionsQueryParams
    );
  if (!(segmentRestrictions.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const segmentRestrictionFromApi: ShieldInformationBarrierSegmentRestriction =
    await client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictionById(
      segmentRestrictionId
    );
  if (!(segmentRestrictionFromApi.id! == segmentRestrictionId)) {
    throw 'Assertion failed';
  }
  if (
    !(segmentRestrictionFromApi.shieldInformationBarrierSegment.id == segmentId)
  ) {
    throw 'Assertion failed';
  }
  if (
    !(segmentRestrictionFromApi.restrictedSegment.id == segmentToRestrictId)
  ) {
    throw 'Assertion failed';
  }
  if (!(segmentRestrictionFromApi.shieldInformationBarrier!.id == barrierId)) {
    throw 'Assertion failed';
  }
  await client.shieldInformationBarrierSegmentRestrictions.deleteShieldInformationBarrierSegmentRestrictionById(
    segmentRestrictionId
  );
  await expect(async () => {
    await client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictionById(
      segmentRestrictionId
    );
  }).rejects.toThrow();
  await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(
    segmentId
  );
  await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(
    segmentToRestrictId
  );
});
export {};
