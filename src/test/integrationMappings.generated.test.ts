import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { serializeIntegrationMappingSlackCreateRequest } from '../schemas.generated.js';
import { deserializeIntegrationMappingSlackCreateRequest } from '../schemas.generated.js';
import { serializeIntegrationMappingPartnerItemSlack } from '../schemas.generated.js';
import { deserializeIntegrationMappingPartnerItemSlack } from '../schemas.generated.js';
import { serializeIntegrationMappingPartnerItemSlackTypeField } from '../schemas.generated.js';
import { deserializeIntegrationMappingPartnerItemSlackTypeField } from '../schemas.generated.js';
import { serializeIntegrationMappingBoxItemSlack } from '../schemas.generated.js';
import { deserializeIntegrationMappingBoxItemSlack } from '../schemas.generated.js';
import { serializeIntegrationMappingBoxItemSlackTypeField } from '../schemas.generated.js';
import { deserializeIntegrationMappingBoxItemSlackTypeField } from '../schemas.generated.js';
import { serializeIntegrationMappings } from '../schemas.generated.js';
import { deserializeIntegrationMappings } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBody } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { IntegrationMappingSlackCreateRequest } from '../schemas.generated.js';
import { IntegrationMappingPartnerItemSlack } from '../schemas.generated.js';
import { IntegrationMappingPartnerItemSlackTypeField } from '../schemas.generated.js';
import { IntegrationMappingBoxItemSlack } from '../schemas.generated.js';
import { IntegrationMappingBoxItemSlackTypeField } from '../schemas.generated.js';
import { IntegrationMappings } from '../schemas.generated.js';
import { generateByteStream } from '../utils.js';
import { getUuid } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testIntegrationMappings', async function testIntegrationMappings(): Promise<any> {
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  const slackOrgId: string = '1';
  const partnerItemId: string = '1';
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = getDefaultClientAsUser(userId);
  await expect(async () => {
    await userClient.integrationMappings.createSlackIntegrationMapping({
      partnerItem: {
        type: 'channel' as IntegrationMappingPartnerItemSlackTypeField,
        id: partnerItemId,
        slackOrgId: slackOrgId,
      } satisfies IntegrationMappingPartnerItemSlack,
      boxItem: {
        id: folder.id,
        type: 'folder' as IntegrationMappingBoxItemSlackTypeField,
      } satisfies IntegrationMappingBoxItemSlack,
    } satisfies IntegrationMappingSlackCreateRequest);
  }).rejects.toThrow();
  const integrationMappings: IntegrationMappings =
    await userClient.integrationMappings.getSlackIntegrationMapping();
  if (!(integrationMappings.entries!.length == 0)) {
    throw new Error('Assertion failed');
  }
  await client.folders.deleteFolderById(folder.id);
});
export {};
