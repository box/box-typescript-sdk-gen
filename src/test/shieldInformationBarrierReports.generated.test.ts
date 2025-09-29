import { serializeShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { deserializeShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { serializeShieldInformationBarrierReports } from '@/schemas/shieldInformationBarrierReports.generated';
import { deserializeShieldInformationBarrierReports } from '@/schemas/shieldInformationBarrierReports.generated';
import { serializeShieldInformationBarrierReport } from '@/schemas/shieldInformationBarrierReport.generated';
import { deserializeShieldInformationBarrierReport } from '@/schemas/shieldInformationBarrierReport.generated';
import { serializeShieldInformationBarrierReference } from '@/schemas/shieldInformationBarrierReference.generated';
import { deserializeShieldInformationBarrierReference } from '@/schemas/shieldInformationBarrierReference.generated';
import { serializeShieldInformationBarrierBase } from '@/schemas/shieldInformationBarrierBase.generated';
import { deserializeShieldInformationBarrierBase } from '@/schemas/shieldInformationBarrierBase.generated';
import { serializeShieldInformationBarrierBaseTypeField } from '@/schemas/shieldInformationBarrierBase.generated';
import { deserializeShieldInformationBarrierBaseTypeField } from '@/schemas/shieldInformationBarrierBase.generated';
import { ShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { ShieldInformationBarrierReports } from '@/schemas/shieldInformationBarrierReports.generated';
import { GetShieldInformationBarrierReportsQueryParams } from '@/managers/shieldInformationBarrierReports.generated';
import { ShieldInformationBarrierReport } from '@/schemas/shieldInformationBarrierReport.generated';
import { ShieldInformationBarrierReference } from '@/schemas/shieldInformationBarrierReference.generated';
import { ShieldInformationBarrierBase } from '@/schemas/shieldInformationBarrierBase.generated';
import { ShieldInformationBarrierBaseTypeField } from '@/schemas/shieldInformationBarrierBase.generated';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { getOrCreateShieldInformationBarrier } from './commons.generated';
import { BoxClient } from '@/client.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
test('testShieldInformationBarrierReports', async function testShieldInformationBarrierReports(): Promise<any> {
  const client: BoxClient = getDefaultClientWithUserSubject(
    getEnvVar('USER_ID'),
  );
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const barrier: ShieldInformationBarrier =
    await getOrCreateShieldInformationBarrier(client, enterpriseId);
  if (!((toString(barrier.status!) as string) == 'draft')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(barrier.type!) as string) == 'shield_information_barrier')) {
    throw new Error('Assertion failed');
  }
  if (!(barrier.enterprise!.id == enterpriseId)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(barrier.enterprise!.type) as string) == 'enterprise')) {
    throw new Error('Assertion failed');
  }
  const barrierId: string = barrier.id!;
  const existingReports: ShieldInformationBarrierReports =
    await client.shieldInformationBarrierReports.getShieldInformationBarrierReports(
      {
        shieldInformationBarrierId: barrierId,
      } satisfies GetShieldInformationBarrierReportsQueryParams,
    );
  if (existingReports.entries!.length > 0) {
    return void 0;
  }
  const createdReport: ShieldInformationBarrierReport =
    await client.shieldInformationBarrierReports.createShieldInformationBarrierReport(
      {
        shieldInformationBarrier: {
          id: barrierId,
          type: 'shield_information_barrier' as ShieldInformationBarrierBaseTypeField,
        } satisfies ShieldInformationBarrierBase,
      } satisfies ShieldInformationBarrierReference,
    );
  if (
    !(
      createdReport.shieldInformationBarrier!.shieldInformationBarrier!.id ==
      barrierId
    )
  ) {
    throw new Error('Assertion failed');
  }
  const retrievedReport: ShieldInformationBarrierReport =
    await client.shieldInformationBarrierReports.getShieldInformationBarrierReportById(
      createdReport.id!,
    );
  if (!(retrievedReport.id == createdReport.id)) {
    throw new Error('Assertion failed');
  }
  const retrievedReports: ShieldInformationBarrierReports =
    await client.shieldInformationBarrierReports.getShieldInformationBarrierReports(
      {
        shieldInformationBarrierId: barrierId,
      } satisfies GetShieldInformationBarrierReportsQueryParams,
    );
  if (!(retrievedReports.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
});
export {};
