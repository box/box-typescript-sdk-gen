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
import { serializeShieldInformationBarrierSegments } from '@/schemas/shieldInformationBarrierSegments.generated';
import { deserializeShieldInformationBarrierSegments } from '@/schemas/shieldInformationBarrierSegments.generated';
import { serializeUpdateShieldInformationBarrierSegmentByIdRequestBody } from '@/managers/shieldInformationBarrierSegments.generated';
import { deserializeUpdateShieldInformationBarrierSegmentByIdRequestBody } from '@/managers/shieldInformationBarrierSegments.generated';
import { UpdateShieldInformationBarrierSegmentByIdOptionalsInput } from '@/managers/shieldInformationBarrierSegments.generated';
import { UpdateShieldInformationBarrierSegmentByIdOptionals } from '@/managers/shieldInformationBarrierSegments.generated';
import { BoxClient } from '@/client.generated';
import { ShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { ShieldInformationBarrierSegment } from '@/schemas/shieldInformationBarrierSegment.generated';
import { CreateShieldInformationBarrierSegmentRequestBody } from '@/managers/shieldInformationBarrierSegments.generated';
import { ShieldInformationBarrierBase } from '@/schemas/shieldInformationBarrierBase.generated';
import { ShieldInformationBarrierBaseTypeField } from '@/schemas/shieldInformationBarrierBase.generated';
import { ShieldInformationBarrierSegments } from '@/schemas/shieldInformationBarrierSegments.generated';
import { GetShieldInformationBarrierSegmentsQueryParams } from '@/managers/shieldInformationBarrierSegments.generated';
import { UpdateShieldInformationBarrierSegmentByIdRequestBody } from '@/managers/shieldInformationBarrierSegments.generated';
import { getEnvVar } from '@/internal/utils';
import { getUuid } from '@/internal/utils';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { getOrCreateShieldInformationBarrier } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
test('testShieldInformationBarrierSegments', async function testShieldInformationBarrierSegments(): Promise<any> {
  const client: BoxClient = getDefaultClientWithUserSubject(
    getEnvVar('USER_ID'),
  );
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
      } satisfies CreateShieldInformationBarrierSegmentRequestBody,
    );
  if (!(segment.name! == segmentName)) {
    throw new Error('Assertion failed');
  }
  const segments: ShieldInformationBarrierSegments =
    await client.shieldInformationBarrierSegments.getShieldInformationBarrierSegments(
      {
        shieldInformationBarrierId: barrierId,
      } satisfies GetShieldInformationBarrierSegmentsQueryParams,
    );
  if (!(segments.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const segmentId: string = segment.id!;
  const segmentFromApi: ShieldInformationBarrierSegment =
    await client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(
      segmentId,
    );
  if (
    !(
      (toString(segmentFromApi.type!) as string) ==
      'shield_information_barrier_segment'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (!(segmentFromApi.id! == segmentId)) {
    throw new Error('Assertion failed');
  }
  if (!(segmentFromApi.name! == segmentName)) {
    throw new Error('Assertion failed');
  }
  if (!(segmentFromApi.description! == segmentDescription)) {
    throw new Error('Assertion failed');
  }
  if (!(segmentFromApi.shieldInformationBarrier!.id == barrierId)) {
    throw new Error('Assertion failed');
  }
  const updatedSegmentDescription: string =
    'updated barrier segment description';
  const updatedSegment: ShieldInformationBarrierSegment =
    await client.shieldInformationBarrierSegments.updateShieldInformationBarrierSegmentById(
      segmentId,
      {
        requestBody: {
          description: updatedSegmentDescription,
        } satisfies UpdateShieldInformationBarrierSegmentByIdRequestBody,
      } satisfies UpdateShieldInformationBarrierSegmentByIdOptionalsInput,
    );
  if (!(updatedSegment.description! == updatedSegmentDescription)) {
    throw new Error('Assertion failed');
  }
  await client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(
    segmentId,
  );
  await expect(async () => {
    await client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(
      segmentId,
    );
  }).rejects.toThrow();
});
export {};
