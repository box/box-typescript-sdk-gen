import { serializeShieldInformationBarrierReports } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierReports } from '../schemas.generated.js';
import { serializeShieldInformationBarrierReport } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierReport } from '../schemas.generated.js';
import { serializeShieldInformationBarrierReference } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierReference } from '../schemas.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { serializeShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { serializeShieldInformationBarrier } from '../schemas.generated.js';
import { deserializeShieldInformationBarrier } from '../schemas.generated.js';
import { ShieldInformationBarrierReports } from '../schemas.generated.js';
import { GetShieldInformationBarrierReportsQueryParams } from '../managers/shieldInformationBarrierReports.generated.js';
import { ShieldInformationBarrierReport } from '../schemas.generated.js';
import { ShieldInformationBarrierReference } from '../schemas.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
import { ShieldInformationBarrierBaseTypeField } from '../schemas.generated.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
import { ShieldInformationBarrier } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
test('shieldInformationBarrierReports', async function shieldInformationBarrierReports(): Promise<any> {
  const client: BoxClient = await getDefaultClientAsUser(getEnvVar('USER_ID'));
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const barrier: ShieldInformationBarrier =
    await getOrCreateShieldInformationBarrier(client, enterpriseId);
  if (!((toString(barrier.status!) as string) == 'draft')) {
    throw 'Assertion failed';
  }
  if (!((toString(barrier.type!) as string) == 'shield_information_barrier')) {
    throw 'Assertion failed';
  }
  if (!(barrier.enterprise!.id == enterpriseId)) {
    throw 'Assertion failed';
  }
  if (!((toString(barrier.enterprise!.type) as string) == 'enterprise')) {
    throw 'Assertion failed';
  }
  const barrierId: string = barrier.id!;
  const existingReports: ShieldInformationBarrierReports =
    await client.shieldInformationBarrierReports.getShieldInformationBarrierReports(
      {
        shieldInformationBarrierId: barrierId,
      } satisfies GetShieldInformationBarrierReportsQueryParams
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
      } satisfies ShieldInformationBarrierReference
    );
  if (
    !(
      createdReport.shieldInformationBarrier!.shieldInformationBarrier!.id ==
      barrierId
    )
  ) {
    throw 'Assertion failed';
  }
  const retrievedReport: ShieldInformationBarrierReport =
    await client.shieldInformationBarrierReports.getShieldInformationBarrierReportById(
      createdReport.id!
    );
  if (!(retrievedReport.id == createdReport.id)) {
    throw 'Assertion failed';
  }
  const retrievedReports: ShieldInformationBarrierReports =
    await client.shieldInformationBarrierReports.getShieldInformationBarrierReports(
      {
        shieldInformationBarrierId: barrierId,
      } satisfies GetShieldInformationBarrierReportsQueryParams
    );
  if (!(retrievedReports.entries!.length > 0)) {
    throw 'Assertion failed';
  }
});
export {};
