import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeCreateUserRequestBody } from '@/managers/users.generated';
import { deserializeCreateUserRequestBody } from '@/managers/users.generated';
import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeCollaboration } from '@/schemas/collaboration.generated';
import { deserializeCollaboration } from '@/schemas/collaboration.generated';
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
import { serializeUpdateCollaborationByIdRequestBody } from '@/managers/userCollaborations.generated';
import { deserializeUpdateCollaborationByIdRequestBody } from '@/managers/userCollaborations.generated';
import { serializeUpdateCollaborationByIdRequestBodyRoleField } from '@/managers/userCollaborations.generated';
import { deserializeUpdateCollaborationByIdRequestBodyRoleField } from '@/managers/userCollaborations.generated';
import { serializeCollaborations } from '@/schemas/collaborations.generated';
import { deserializeCollaborations } from '@/schemas/collaborations.generated';
import { BoxClient } from '@/client.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { CreateUserRequestBody } from '@/managers/users.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { Collaboration } from '@/schemas/collaboration.generated';
import { CreateCollaborationRequestBody } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyItemField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyItemTypeField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyAccessibleByField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyAccessibleByTypeField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyRoleField } from '@/managers/userCollaborations.generated';
import { UpdateCollaborationByIdRequestBody } from '@/managers/userCollaborations.generated';
import { UpdateCollaborationByIdRequestBodyRoleField } from '@/managers/userCollaborations.generated';
import { Collaborations } from '@/schemas/collaborations.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { createNewFolder } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testUserCollaborations', async function testUserCollaborations(): Promise<any> {
  const userName: string = getUuid();
  const userLogin: string = ''.concat(getUuid(), '@gmail.com') as string;
  const user: UserFull = await client.users.createUser({
    name: userName,
    login: userLogin,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const folder: FolderFull = await createNewFolder();
  const collaboration: Collaboration =
    await client.userCollaborations.createCollaboration({
      item: {
        type: 'folder' as CreateCollaborationRequestBodyItemTypeField,
        id: folder.id,
      } satisfies CreateCollaborationRequestBodyItemField,
      accessibleBy: {
        type: 'user' as CreateCollaborationRequestBodyAccessibleByTypeField,
        id: user.id,
      } satisfies CreateCollaborationRequestBodyAccessibleByField,
      role: 'editor' as CreateCollaborationRequestBodyRoleField,
    } satisfies CreateCollaborationRequestBody);
  if (!((toString(collaboration.role!) as string) == 'editor')) {
    throw new Error('Assertion failed');
  }
  const collaborationId: string = collaboration.id;
  const collaborationFromApi: Collaboration =
    await client.userCollaborations.getCollaborationById(collaborationId);
  if (!(collaborationId == collaborationFromApi.id)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(collaborationFromApi.status!) as string) == 'accepted')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(collaborationFromApi.type) as string) == 'collaboration')) {
    throw new Error('Assertion failed');
  }
  if (!(collaborationFromApi.inviteEmail == void 0)) {
    throw new Error('Assertion failed');
  }
  const updatedCollaboration: undefined | Collaboration =
    await client.userCollaborations.updateCollaborationById(collaborationId, {
      role: 'viewer' as UpdateCollaborationByIdRequestBodyRoleField,
    } satisfies UpdateCollaborationByIdRequestBody);
  if (!((toString(updatedCollaboration!.role!) as string) == 'viewer')) {
    throw new Error('Assertion failed');
  }
  await client.userCollaborations.deleteCollaborationById(collaborationId);
  await expect(async () => {
    await client.userCollaborations.getCollaborationById(collaborationId);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
  await client.users.deleteUserById(user.id);
});
test('testConvertingUserCollaborationToOwnership', async function testConvertingUserCollaborationToOwnership(): Promise<any> {
  const userName: string = getUuid();
  const userLogin: string = ''.concat(getUuid(), '@gmail.com') as string;
  const user: UserFull = await client.users.createUser({
    name: userName,
    login: userLogin,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const folder: FolderFull = await createNewFolder();
  const collaboration: Collaboration =
    await client.userCollaborations.createCollaboration({
      item: {
        type: 'folder' as CreateCollaborationRequestBodyItemTypeField,
        id: folder.id,
      } satisfies CreateCollaborationRequestBodyItemField,
      accessibleBy: {
        type: 'user' as CreateCollaborationRequestBodyAccessibleByTypeField,
        id: user.id,
      } satisfies CreateCollaborationRequestBodyAccessibleByField,
      role: 'editor' as CreateCollaborationRequestBodyRoleField,
    } satisfies CreateCollaborationRequestBody);
  if (!((toString(collaboration.role!) as string) == 'editor')) {
    throw new Error('Assertion failed');
  }
  const ownerCollaboration: undefined | Collaboration =
    await client.userCollaborations.updateCollaborationById(collaboration.id, {
      role: 'owner' as UpdateCollaborationByIdRequestBodyRoleField,
    } satisfies UpdateCollaborationByIdRequestBody);
  if (!(ownerCollaboration == void 0)) {
    throw new Error('Assertion failed');
  }
  const folderCollaborations: Collaborations =
    await client.listCollaborations.getFolderCollaborations(folder.id);
  const folderCollaboration: Collaboration = folderCollaborations.entries![0];
  await client.userCollaborations.deleteCollaborationById(
    folderCollaboration.id,
  );
  const userClient: BoxClient = client.withAsUserHeader(user.id);
  await userClient.folders.deleteFolderById(folder.id);
  await userClient.trashedFolders.deleteTrashedFolderById(folder.id);
  await client.users.deleteUserById(user.id);
});
test('testExternalUserCollaborations', async function testExternalUserCollaborations(): Promise<any> {
  const userName: string = getUuid();
  const userLogin: string = ''.concat(getUuid(), '@boxdemo.com') as string;
  const folder: FolderFull = await createNewFolder();
  const collaboration: Collaboration =
    await client.userCollaborations.createCollaboration({
      item: {
        type: 'folder' as CreateCollaborationRequestBodyItemTypeField,
        id: folder.id,
      } satisfies CreateCollaborationRequestBodyItemField,
      accessibleBy: {
        type: 'user' as CreateCollaborationRequestBodyAccessibleByTypeField,
        login: userLogin,
      } satisfies CreateCollaborationRequestBodyAccessibleByField,
      role: 'editor' as CreateCollaborationRequestBodyRoleField,
    } satisfies CreateCollaborationRequestBody);
  if (!((toString(collaboration.role!) as string) == 'editor')) {
    throw new Error('Assertion failed');
  }
  const collaborationId: string = collaboration.id;
  const collaborationFromApi: Collaboration =
    await client.userCollaborations.getCollaborationById(collaborationId);
  if (!(collaborationId == collaborationFromApi.id)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(collaborationFromApi.status!) as string) == 'pending')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(collaborationFromApi.type) as string) == 'collaboration')) {
    throw new Error('Assertion failed');
  }
  if (!(collaborationFromApi.inviteEmail == userLogin)) {
    throw new Error('Assertion failed');
  }
  const updatedCollaboration: undefined | Collaboration =
    await client.userCollaborations.updateCollaborationById(collaborationId, {
      role: 'viewer' as UpdateCollaborationByIdRequestBodyRoleField,
    } satisfies UpdateCollaborationByIdRequestBody);
  if (!((toString(updatedCollaboration!.role!) as string) == 'viewer')) {
    throw new Error('Assertion failed');
  }
  await client.userCollaborations.deleteCollaborationById(collaborationId);
  await expect(async () => {
    await client.userCollaborations.getCollaborationById(collaborationId);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
