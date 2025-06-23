import { serializeHubsV2025R0 } from '../schemas/v2025R0/hubsV2025R0.generated.js';
import { deserializeHubsV2025R0 } from '../schemas/v2025R0/hubsV2025R0.generated.js';
import { serializeGetHubsV2025R0QueryParamsDirectionField } from '../managers/hubs.generated.js';
import { deserializeGetHubsV2025R0QueryParamsDirectionField } from '../managers/hubs.generated.js';
import { serializeHubV2025R0 } from '../schemas/v2025R0/hubV2025R0.generated.js';
import { deserializeHubV2025R0 } from '../schemas/v2025R0/hubV2025R0.generated.js';
import { serializeGetEnterpriseHubsV2025R0QueryParamsDirectionField } from '../managers/hubs.generated.js';
import { deserializeGetEnterpriseHubsV2025R0QueryParamsDirectionField } from '../managers/hubs.generated.js';
import { BoxClient } from '../client.generated.js';
import { HubsV2025R0 } from '../schemas/v2025R0/hubsV2025R0.generated.js';
import { GetHubsV2025R0QueryParams } from '../managers/hubs.generated.js';
import { GetHubsV2025R0QueryParamsDirectionField } from '../managers/hubs.generated.js';
import { HubV2025R0 } from '../schemas/v2025R0/hubV2025R0.generated.js';
import { GetEnterpriseHubsV2025R0QueryParams } from '../managers/hubs.generated.js';
import { GetEnterpriseHubsV2025R0QueryParamsDirectionField } from '../managers/hubs.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getEnvVar } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: BoxClient = getDefaultClientWithUserSubject(
  getEnvVar('USER_ID'),
);
test('testGetAndDeleteHubs', async function testGetAndDeleteHubs(): Promise<any> {
  const userHubs: HubsV2025R0 = await client.hubs.getHubsV2025R0({
    scope: 'all',
    sort: 'name',
    direction: 'ASC' as GetHubsV2025R0QueryParamsDirectionField,
  } satisfies GetHubsV2025R0QueryParams);
  if (!(userHubs.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const userHub: HubV2025R0 = userHubs.entries![0];
  if (!!(userHub.title == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(userHub.id == '')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(userHub.type) as string) == 'hubs')) {
    throw new Error('Assertion failed');
  }
  const enterpriseHubs: HubsV2025R0 =
    await client.hubs.getEnterpriseHubsV2025R0({
      sort: 'name',
      direction: 'ASC' as GetEnterpriseHubsV2025R0QueryParamsDirectionField,
    } satisfies GetEnterpriseHubsV2025R0QueryParams);
  if (!(enterpriseHubs.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const enterpriseHub: HubV2025R0 = enterpriseHubs.entries![0];
  if (!!(enterpriseHub.title == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(enterpriseHub.id == '')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(enterpriseHub.type) as string) == 'hubs')) {
    throw new Error('Assertion failed');
  }
  const hub: HubV2025R0 = await client.hubs.getHubByIdV2025R0(userHub.id);
  if (!!(hub.title == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(hub.id == '')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(hub.type) as string) == 'hubs')) {
    throw new Error('Assertion failed');
  }
  if (enterpriseHubs.entries!.length > 10) {
    await client.hubs.deleteHubByIdV2025R0(hub.id);
  }
});
export {};
