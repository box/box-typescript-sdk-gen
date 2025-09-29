import { serializeDevicePinners } from '@/schemas/devicePinners.generated';
import { deserializeDevicePinners } from '@/schemas/devicePinners.generated';
import { serializeGetEnterpriseDevicePinnersQueryParamsDirectionField } from '@/managers/devicePinners.generated';
import { deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField } from '@/managers/devicePinners.generated';
import { GetEnterpriseDevicePinnersOptionalsInput } from '@/managers/devicePinners.generated';
import { GetEnterpriseDevicePinnersOptionals } from '@/managers/devicePinners.generated';
import { BoxClient } from '@/client.generated';
import { DevicePinners } from '@/schemas/devicePinners.generated';
import { GetEnterpriseDevicePinnersQueryParams } from '@/managers/devicePinners.generated';
import { GetEnterpriseDevicePinnersQueryParamsDirectionField } from '@/managers/devicePinners.generated';
import { getDefaultClient } from './commons.generated';
import { getEnvVar } from '@/internal/utils';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testDevicePinners', async function testDevicePinners(): Promise<any> {
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const devicePinners: DevicePinners =
    await client.devicePinners.getEnterpriseDevicePinners(enterpriseId);
  if (!(devicePinners.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  const devicePinnersInDescDirection: DevicePinners =
    await client.devicePinners.getEnterpriseDevicePinners(enterpriseId, {
      queryParams: {
        direction:
          'desc' as GetEnterpriseDevicePinnersQueryParamsDirectionField,
      } satisfies GetEnterpriseDevicePinnersQueryParams,
    } satisfies GetEnterpriseDevicePinnersOptionalsInput);
  if (!(devicePinnersInDescDirection.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  const devicePinnerId: string = '123456';
  await expect(async () => {
    await client.devicePinners.getDevicePinnerById(devicePinnerId);
  }).rejects.toThrow();
  await expect(async () => {
    await client.devicePinners.deleteDevicePinnerById(devicePinnerId);
  }).rejects.toThrow();
});
export {};
