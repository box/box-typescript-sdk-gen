import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { serializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { serializeCreateCollaborationRequestBody } from '@/managers/userCollaborations.generated';
import { deserializeCreateCollaborationRequestBody } from '@/managers/userCollaborations.generated';
import { serializeCreateCollaborationRequestBodyItemField } from '@/managers/userCollaborations.generated';
import { deserializeCreateCollaborationRequestBodyItemField } from '@/managers/userCollaborations.generated';
import { serializeCreateCollaborationRequestBodyItemTypeField } from '@/managers/userCollaborations.generated';
import { deserializeCreateCollaborationRequestBodyItemTypeField } from '@/managers/userCollaborations.generated';
import { serializeCreateCollaborationRequestBodyAccessibleByField } from '@/managers/userCollaborations.generated';
import { deserializeCreateCollaborationRequestBodyAccessibleByField } from '@/managers/userCollaborations.generated';
import { serializeCreateCollaborationRequestBodyAccessibleByTypeField } from '@/managers/userCollaborations.generated';
import { deserializeCreateCollaborationRequestBodyAccessibleByTypeField } from '@/managers/userCollaborations.generated';
import { serializeCreateCollaborationRequestBodyRoleField } from '@/managers/userCollaborations.generated';
import { deserializeCreateCollaborationRequestBodyRoleField } from '@/managers/userCollaborations.generated';
import { serializeIntegrationMappings } from '@/schemas/integrationMappings.generated';
import { deserializeIntegrationMappings } from '@/schemas/integrationMappings.generated';
import { serializeIntegrationMappingSlackCreateRequest } from '@/schemas/integrationMappingSlackCreateRequest.generated';
import { deserializeIntegrationMappingSlackCreateRequest } from '@/schemas/integrationMappingSlackCreateRequest.generated';
import { serializeIntegrationMappingPartnerItemSlack } from '@/schemas/integrationMappingPartnerItemSlack.generated';
import { deserializeIntegrationMappingPartnerItemSlack } from '@/schemas/integrationMappingPartnerItemSlack.generated';
import { serializeIntegrationMappingBoxItemSlack } from '@/schemas/integrationMappingBoxItemSlack.generated';
import { deserializeIntegrationMappingBoxItemSlack } from '@/schemas/integrationMappingBoxItemSlack.generated';
import { serializeIntegrationMapping } from '@/schemas/integrationMapping.generated';
import { deserializeIntegrationMapping } from '@/schemas/integrationMapping.generated';
import { serializeUpdateSlackIntegrationMappingByIdRequestBody } from '@/managers/integrationMappings.generated';
import { deserializeUpdateSlackIntegrationMappingByIdRequestBody } from '@/managers/integrationMappings.generated';
import { serializeIntegrationMappingTeamsCreateRequest } from '@/schemas/integrationMappingTeamsCreateRequest.generated';
import { deserializeIntegrationMappingTeamsCreateRequest } from '@/schemas/integrationMappingTeamsCreateRequest.generated';
import { serializeIntegrationMappingPartnerItemTeamsCreateRequest } from '@/schemas/integrationMappingPartnerItemTeamsCreateRequest.generated';
import { deserializeIntegrationMappingPartnerItemTeamsCreateRequest } from '@/schemas/integrationMappingPartnerItemTeamsCreateRequest.generated';
import { serializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField } from '@/schemas/integrationMappingPartnerItemTeamsCreateRequest.generated';
import { deserializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField } from '@/schemas/integrationMappingPartnerItemTeamsCreateRequest.generated';
import { serializeFolderReference } from '@/schemas/folderReference.generated';
import { deserializeFolderReference } from '@/schemas/folderReference.generated';
import { serializeUpdateTeamsIntegrationMappingByIdRequestBody } from '@/managers/integrationMappings.generated';
import { deserializeUpdateTeamsIntegrationMappingByIdRequestBody } from '@/managers/integrationMappings.generated';
import { UpdateSlackIntegrationMappingByIdOptionalsInput } from '@/managers/integrationMappings.generated';
import { UpdateTeamsIntegrationMappingByIdOptionalsInput } from '@/managers/integrationMappings.generated';
import { UpdateSlackIntegrationMappingByIdOptionals } from '@/managers/integrationMappings.generated';
import { UpdateTeamsIntegrationMappingByIdOptionals } from '@/managers/integrationMappings.generated';
import { BoxClient } from '@/client.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { CreateFolderRequestBody } from '@/managers/folders.generated';
import { CreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { CreateCollaborationRequestBody } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyItemField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyItemTypeField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyAccessibleByField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyAccessibleByTypeField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyRoleField } from '@/managers/userCollaborations.generated';
import { IntegrationMappings } from '@/schemas/integrationMappings.generated';
import { IntegrationMappingSlackCreateRequest } from '@/schemas/integrationMappingSlackCreateRequest.generated';
import { IntegrationMappingPartnerItemSlack } from '@/schemas/integrationMappingPartnerItemSlack.generated';
import { IntegrationMappingBoxItemSlack } from '@/schemas/integrationMappingBoxItemSlack.generated';
import { IntegrationMapping } from '@/schemas/integrationMapping.generated';
import { UpdateSlackIntegrationMappingByIdRequestBody } from '@/managers/integrationMappings.generated';
import { IntegrationMappingTeamsCreateRequest } from '@/schemas/integrationMappingTeamsCreateRequest.generated';
import { IntegrationMappingPartnerItemTeamsCreateRequest } from '@/schemas/integrationMappingPartnerItemTeamsCreateRequest.generated';
import { IntegrationMappingPartnerItemTeamsCreateRequestTypeField } from '@/schemas/integrationMappingPartnerItemTeamsCreateRequest.generated';
import { FolderReference } from '@/schemas/folderReference.generated';
import { UpdateTeamsIntegrationMappingByIdRequestBody } from '@/managers/integrationMappings.generated';
import { generateByteStream } from '@/internal/utils';
import { getUuid } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { toString } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testSlackIntegrationMappings', async function testSlackIntegrationMappings(): Promise<any> {
  const userId: string = getEnvVar('USER_ID');
  const slackAutomationUserId: string = getEnvVar('SLACK_AUTOMATION_USER_ID');
  const slackOrgId: string = getEnvVar('SLACK_ORG_ID');
  const slackPartnerItemId: string = getEnvVar('SLACK_PARTNER_ITEM_ID');
  const userClient: BoxClient = getDefaultClientWithUserSubject(userId);
  const folder: FolderFull = await userClient.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  await userClient.userCollaborations.createCollaboration({
    item: {
      type: 'folder' as CreateCollaborationRequestBodyItemTypeField,
      id: folder.id,
    } satisfies CreateCollaborationRequestBodyItemField,
    accessibleBy: {
      type: 'user' as CreateCollaborationRequestBodyAccessibleByTypeField,
      id: slackAutomationUserId,
    } satisfies CreateCollaborationRequestBodyAccessibleByField,
    role: 'co-owner' as CreateCollaborationRequestBodyRoleField,
  } satisfies CreateCollaborationRequestBody);
  const slackIntegrations: IntegrationMappings =
    await userClient.integrationMappings.getSlackIntegrationMapping();
  if (slackIntegrations.entries!.length == 0) {
    await userClient.integrationMappings.createSlackIntegrationMapping({
      partnerItem: new IntegrationMappingPartnerItemSlack({
        id: slackPartnerItemId,
        slackOrgId: slackOrgId,
      }),
      boxItem: new IntegrationMappingBoxItemSlack({ id: folder.id }),
    } satisfies IntegrationMappingSlackCreateRequest);
  }
  const slackMappings: IntegrationMappings =
    await userClient.integrationMappings.getSlackIntegrationMapping();
  if (!(slackMappings.entries!.length >= 1)) {
    throw new Error('Assertion failed');
  }
  const slackIntegrationMapping: IntegrationMapping = slackMappings.entries![0];
  if (
    !((toString(slackIntegrationMapping.integrationType) as string) == 'slack')
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(slackIntegrationMapping.type) as string) ==
      'integration_mapping'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !((toString(slackIntegrationMapping.boxItem.type) as string) == 'folder')
  ) {
    throw new Error('Assertion failed');
  }
  if (!(slackIntegrationMapping.partnerItem.id == slackPartnerItemId)) {
    throw new Error('Assertion failed');
  }
  if (!(slackIntegrationMapping.partnerItem.slackWorkspaceId == slackOrgId)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(slackIntegrationMapping.partnerItem.type) as string) ==
      'channel'
    )
  ) {
    throw new Error('Assertion failed');
  }
  const updatedSlackMapping: IntegrationMapping =
    await userClient.integrationMappings.updateSlackIntegrationMappingById(
      slackIntegrationMapping.id,
      {
        requestBody: {
          boxItem: new IntegrationMappingBoxItemSlack({ id: folder.id }),
        } satisfies UpdateSlackIntegrationMappingByIdRequestBody,
      } satisfies UpdateSlackIntegrationMappingByIdOptionalsInput,
    );
  if (!((toString(updatedSlackMapping.boxItem.type) as string) == 'folder')) {
    throw new Error('Assertion failed');
  }
  if (!(updatedSlackMapping.boxItem.id == folder.id)) {
    throw new Error('Assertion failed');
  }
  if (slackMappings.entries!.length > 2) {
    await userClient.integrationMappings.deleteSlackIntegrationMappingById(
      slackIntegrationMapping.id,
    );
  }
  await userClient.folders.deleteFolderById(folder.id);
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
