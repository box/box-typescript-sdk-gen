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
import { serializeShieldInformationBarrierSegments } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegments } from '../schemas.generated.js';
import { serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg } from '../managers/shieldInformationBarrierSegments.generated.js';
import { deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg } from '../managers/shieldInformationBarrierSegments.generated.js';
import { BoxClient } from '../client.generated.js';
import { ShieldInformationBarrier } from '../schemas.generated.js';
import { ShieldInformationBarrierSegment } from '../schemas.generated.js';
import { CreateShieldInformationBarrierSegmentRequestBodyArg } from '../managers/shieldInformationBarrierSegments.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
import { ShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { ShieldInformationBarrierSegments } from '../schemas.generated.js';
import { GetShieldInformationBarrierSegmentsQueryParamsArg } from '../managers/shieldInformationBarrierSegments.generated.js';
import { UpdateShieldInformationBarrierSegmentByIdRequestBodyArg } from '../managers/shieldInformationBarrierSegments.generated.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
test('testShieldInformationBarrierSegments', async function testShieldInformationBarrierSegments(): Promise<any> {
  const client: BoxClient = await getDefaultClientAsUser(getEnvVar('USER_ID'));
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const barrier: ShieldInformationBarrier =
    await getOrCreateShieldInformationBarrier(client, enterpriseId);
  const barrierId: string = barrier.id!;
  const segmentName: string = getUuid();
  const segmentDescription: string = 'barrier segment description';
  const segment: ShieldInformationBarrierSegment =
    await client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment(
      {
        shieldInformationBarrier: {
          id: barrierId,
          type: 'shield_information_barrier' as ShieldInformationBarrierBaseTypeField,
        } satisfies ShieldInformationBarrierBase,
        name: segmentName,
        description: segmentDescription,
      } satisfies CreateShieldInformationBarrierSegmentRequestBodyArg
    );
  if (!(segment.name! == segmentName)) {
    throw 'Assertion failed';
  }
  const segments: ShieldInformationBarrierSegments =
    await client.shieldInformationBarrierSegments.getShieldInformationBarrierSegments(
      {
        shieldInformationBarrierId: barrierId,
      } satisfies GetShieldInformationBarrierSegmentsQueryParamsArg
    );
  if (!(segments.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const segmentId: string = segment.id!;
  const segmentFromApi: ShieldInformationBarrierSegment =
    await client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(
      segmentId
    );
  if (
    !(
      (toString(segmentFromApi.type!) as string) ==
      'shield_information_barrier_segment'
    )
  ) {
    throw 'Assertion failed';
  }
  if (!(segmentFromApi.id! == segmentId)) {
    throw 'Assertion failed';
  }
  if (!(segmentFromApi.name! == segmentName)) {
    throw 'Assertion failed';
  }
  if (!(segmentFromApi.description! == segmentDescription)) {
    throw 'Assertion failed';
  }
  if (!(segmentFromApi.shieldInformationBarrier!.id == barrierId)) {
    throw 'Assertion failed';
  }
  const updatedSegmentDescription: string =
    'updated barrier segment description';
  const updatedSegment: ShieldInformationBarrierSegment =
    await client.shieldInformationBarrierSegments.updateShieldInformationBarrierSegmentById(
      segmentId,
      {
        description: updatedSegmentDescription,
      } satisfies UpdateShieldInformationBarrierSegmentByIdRequestBodyArg
    );
  if (!(updatedSegment.description! == updatedSegmentDescription)) {
    throw 'Assertion failed';
  }
  await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(
    segmentId
  );
  await expect(async () => {
    await client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(
      segmentId
    );
  }).rejects.toThrow();
});
export {};
