import { serializeShieldInformationBarrier } from '../schemas.generated.js';
import { deserializeShieldInformationBarrier } from '../schemas.generated.js';
import { serializeShieldInformationBarriers } from '../schemas.generated.js';
import { deserializeShieldInformationBarriers } from '../schemas.generated.js';
import { serializeUpdateShieldInformationBarrierStatusRequestBody } from '../managers/shieldInformationBarriers.generated.js';
import { deserializeUpdateShieldInformationBarrierStatusRequestBody } from '../managers/shieldInformationBarriers.generated.js';
import { serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField } from '../managers/shieldInformationBarriers.generated.js';
import { deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField } from '../managers/shieldInformationBarriers.generated.js';
import { BoxClient } from '../client.generated.js';
import { ShieldInformationBarrier } from '../schemas.generated.js';
import { ShieldInformationBarriers } from '../schemas.generated.js';
import { UpdateShieldInformationBarrierStatusRequestBody } from '../managers/shieldInformationBarriers.generated.js';
import { UpdateShieldInformationBarrierStatusRequestBodyStatusField } from '../managers/shieldInformationBarriers.generated.js';
import { getEnvVar } from '../utils.js';
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
test('testShieldInformationBarriers', async function testShieldInformationBarriers(): Promise<any> {
  const client: BoxClient = await getDefaultClientAsUser(getEnvVar('USER_ID'));
  const enterpriseId: string = getEnvVar('ENTERPRISE_ID');
  const barrier: ShieldInformationBarrier =
    await getOrCreateShieldInformationBarrier(client, enterpriseId);
  if (!((toString(barrier.status!) as string) == 'draft')) {
    throw new Error(String('Assertion failed'));
  }
  if (!((toString(barrier.type!) as string) == 'shield_information_barrier')) {
    throw new Error(String('Assertion failed'));
  }
  if (!(barrier.enterprise!.id == enterpriseId)) {
    throw new Error(String('Assertion failed'));
  }
  if (!((toString(barrier.enterprise!.type) as string) == 'enterprise')) {
    throw new Error(String('Assertion failed'));
  }
  const barrierId: string = barrier.id!;
  const barrierFromApi: ShieldInformationBarrier =
    await client.shieldInformationBarriers.getShieldInformationBarrierById(
      barrierId
    );
  if (!(barrierFromApi.id! == barrierId)) {
    throw new Error(String('Assertion failed'));
  }
  const barriers: ShieldInformationBarriers =
    await client.shieldInformationBarriers.getShieldInformationBarriers();
  if (!(barriers.entries!.length == 1)) {
    throw new Error(String('Assertion failed'));
  }
  await expect(async () => {
    await client.shieldInformationBarriers.updateShieldInformationBarrierStatus(
      {
        id: barrierId,
        status:
          'disabled' as UpdateShieldInformationBarrierStatusRequestBodyStatusField,
      } satisfies UpdateShieldInformationBarrierStatusRequestBody
    );
  }).rejects.toThrow();
});
export {};
