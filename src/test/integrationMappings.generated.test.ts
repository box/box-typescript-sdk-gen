import { serializeFolderFull } from '../schemas/folderFull.generated.js';
import { deserializeFolderFull } from '../schemas/folderFull.generated.js';
import { serializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { serializeIntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { deserializeIntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { serializeIntegrationMappingPartnerItemSlack } from '../schemas/integrationMappingPartnerItemSlack.generated.js';
import { deserializeIntegrationMappingPartnerItemSlack } from '../schemas/integrationMappingPartnerItemSlack.generated.js';
import { serializeIntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { deserializeIntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { serializeIntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { deserializeIntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { serializeUpdateSlackIntegrationMappingByIdRequestBody } from '../managers/integrationMappings.generated.js';
import { deserializeUpdateSlackIntegrationMappingByIdRequestBody } from '../managers/integrationMappings.generated.js';
import { serializeIntegrationMappingTeamsCreateRequest } from '../schemas/integrationMappingTeamsCreateRequest.generated.js';
import { deserializeIntegrationMappingTeamsCreateRequest } from '../schemas/integrationMappingTeamsCreateRequest.generated.js';
import { serializeIntegrationMappingPartnerItemTeamsCreateRequest } from '../schemas/integrationMappingPartnerItemTeamsCreateRequest.generated.js';
import { deserializeIntegrationMappingPartnerItemTeamsCreateRequest } from '../schemas/integrationMappingPartnerItemTeamsCreateRequest.generated.js';
import { serializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField } from '../schemas/integrationMappingPartnerItemTeamsCreateRequest.generated.js';
import { deserializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField } from '../schemas/integrationMappingPartnerItemTeamsCreateRequest.generated.js';
import { serializeFolderReference } from '../schemas/folderReference.generated.js';
import { deserializeFolderReference } from '../schemas/folderReference.generated.js';
import { serializeUpdateTeamsIntegrationMappingByIdRequestBody } from '../managers/integrationMappings.generated.js';
import { deserializeUpdateTeamsIntegrationMappingByIdRequestBody } from '../managers/integrationMappings.generated.js';
import { UpdateSlackIntegrationMappingByIdOptionalsInput } from '../managers/integrationMappings.generated.js';
import { UpdateTeamsIntegrationMappingByIdOptionalsInput } from '../managers/integrationMappings.generated.js';
import { UpdateSlackIntegrationMappingByIdOptionals } from '../managers/integrationMappings.generated.js';
import { UpdateTeamsIntegrationMappingByIdOptionals } from '../managers/integrationMappings.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas/folderFull.generated.js';
import { CreateFolderRequestBody } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { IntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { IntegrationMappingPartnerItemSlack } from '../schemas/integrationMappingPartnerItemSlack.generated.js';
import { IntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { IntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { UpdateSlackIntegrationMappingByIdRequestBody } from '../managers/integrationMappings.generated.js';
import { IntegrationMappingTeamsCreateRequest } from '../schemas/integrationMappingTeamsCreateRequest.generated.js';
import { IntegrationMappingPartnerItemTeamsCreateRequest } from '../schemas/integrationMappingPartnerItemTeamsCreateRequest.generated.js';
import { IntegrationMappingPartnerItemTeamsCreateRequestTypeField } from '../schemas/integrationMappingPartnerItemTeamsCreateRequest.generated.js';
import { FolderReference } from '../schemas/folderReference.generated.js';
import { UpdateTeamsIntegrationMappingByIdRequestBody } from '../managers/integrationMappings.generated.js';
import { generateByteStream } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: BoxClient = getDefaultClient();
test('testSlackIntegrationMappings', async function testSlackIntegrationMappings(): Promise<any> {
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  const slackOrgId: string = '1';
  const partnerItemId: string = '1';
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = getDefaultClientWithUserSubject(userId);
  await expect(async () => {
    await userClient.integrationMappings.createSlackIntegrationMapping({
      partnerItem: new IntegrationMappingPartnerItemSlack({
        id: partnerItemId,
        slackOrgId: slackOrgId,
      }),
      boxItem: new IntegrationMappingBoxItemSlack({ id: folder.id }),
    } satisfies IntegrationMappingSlackCreateRequest);
  }).rejects.toThrow();
  const integrationMappings: IntegrationMappings =
    await userClient.integrationMappings.getSlackIntegrationMapping();
  if (!(integrationMappings.entries!.length == 0)) {
    throw new Error('Assertion failed');
  }
  const integrationMappingId: string = '123456';
  await expect(async () => {
    await userClient.integrationMappings.updateSlackIntegrationMappingById(
      integrationMappingId,
      {
        requestBody: {
          boxItem: new IntegrationMappingBoxItemSlack({ id: '1234567' }),
        } satisfies UpdateSlackIntegrationMappingByIdRequestBody,
      } satisfies UpdateSlackIntegrationMappingByIdOptionalsInput,
    );
  }).rejects.toThrow();
  await expect(async () => {
    await userClient.integrationMappings.deleteSlackIntegrationMappingById(
      integrationMappingId,
    );
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
test('testTeamsIntegrationMappings', async function testTeamsIntegrationMappings(): Promise<any> {
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  const tenantId: string = '1';
  const teamId: string = '2';
  const partnerItemId: string = '3';
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = getDefaultClientWithUserSubject(userId);
  await expect(async () => {
    await userClient.integrationMappings.createTeamsIntegrationMapping({
      partnerItem: {
        type: 'channel' as IntegrationMappingPartnerItemTeamsCreateRequestTypeField,
        id: partnerItemId,
        tenantId: tenantId,
        teamId: teamId,
      } satisfies IntegrationMappingPartnerItemTeamsCreateRequest,
      boxItem: new FolderReference({ id: folder.id }),
    } satisfies IntegrationMappingTeamsCreateRequest);
  }).rejects.toThrow();
  await expect(async () => {
    await userClient.integrationMappings.getTeamsIntegrationMapping();
  }).rejects.toThrow();
  const integrationMappingId: string = '123456';
  await expect(async () => {
    await userClient.integrationMappings.updateTeamsIntegrationMappingById(
      integrationMappingId,
      {
        requestBody: {
          boxItem: new FolderReference({ id: '1234567' }),
        } satisfies UpdateTeamsIntegrationMappingByIdRequestBody,
      } satisfies UpdateTeamsIntegrationMappingByIdOptionalsInput,
    );
  }).rejects.toThrow();
  await expect(async () => {
    await userClient.integrationMappings.deleteTeamsIntegrationMappingById(
      integrationMappingId,
    );
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
