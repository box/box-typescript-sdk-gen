import { serializeShieldInformationBarriers } from '../schemas.generated.js';
import { deserializeShieldInformationBarriers } from '../schemas.generated.js';
import { serializeCreateShieldInformationBarrierRequestBodyArg } from '../managers/shieldInformationBarriers.generated.js';
import { deserializeCreateShieldInformationBarrierRequestBodyArg } from '../managers/shieldInformationBarriers.generated.js';
import { serializeEnterpriseBase } from '../schemas.generated.js';
import { deserializeEnterpriseBase } from '../schemas.generated.js';
import { serializeEnterpriseBaseTypeField } from '../schemas.generated.js';
import { deserializeEnterpriseBaseTypeField } from '../schemas.generated.js';
import { serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg } from '../managers/shieldInformationBarriers.generated.js';
import { deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArg } from '../managers/shieldInformationBarriers.generated.js';
import { serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField } from '../managers/shieldInformationBarriers.generated.js';
import { deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField } from '../managers/shieldInformationBarriers.generated.js';
import { serializeShieldInformationBarrier } from '../schemas.generated.js';
import { deserializeShieldInformationBarrier } from '../schemas.generated.js';
import { ShieldInformationBarriers } from '../schemas.generated.js';
import { CreateShieldInformationBarrierRequestBodyArg } from '../managers/shieldInformationBarriers.generated.js';
import { EnterpriseBase } from '../schemas.generated.js';
import { EnterpriseBaseTypeField } from '../schemas.generated.js';
import { CreateShieldInformationBarrierChangeStatusRequestBodyArg } from '../managers/shieldInformationBarriers.generated.js';
import { CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField } from '../managers/shieldInformationBarriers.generated.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
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
export async function getOrCreateShieldInformationBarrier(
  client: BoxClient,
  enterpriseId: string
): Promise<ShieldInformationBarrier> {
  const barriers: ShieldInformationBarriers =
    await client.shieldInformationBarriers.getShieldInformationBarriers();
  const numberOfBarriers: number = barriers.entries!.length;
  if (numberOfBarriers == 0) {
    return await client.shieldInformationBarriers.createShieldInformationBarrier(
      {
        enterprise: {
          id: enterpriseId,
          type: 'enterprise' as EnterpriseBaseTypeField,
        } satisfies EnterpriseBase,
      } satisfies CreateShieldInformationBarrierRequestBodyArg
    );
  }
  return barriers.entries![numberOfBarriers - 1];
}
test('testShieldInformationBarriers', async function testShieldInformationBarriers(): Promise<any> {
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
  const barrierFromApi: ShieldInformationBarrier =
    await client.shieldInformationBarriers.getShieldInformationBarrierById(
      barrierId
    );
  if (!(barrierFromApi.id! == barrierId)) {
    throw 'Assertion failed';
  }
  const barriers: ShieldInformationBarriers =
    await client.shieldInformationBarriers.getShieldInformationBarriers();
  if (!(barriers.entries!.length == 1)) {
    throw 'Assertion failed';
  }
  expect(async () => {
    await client.shieldInformationBarriers.createShieldInformationBarrierChangeStatus(
      {
        id: barrierId,
        status:
          'disabled' as CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField,
      } satisfies CreateShieldInformationBarrierChangeStatusRequestBodyArg
    );
  }).rejects.toThrow();
});
export {};
