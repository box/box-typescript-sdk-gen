import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBody } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBody } from '../managers/users.generated.js';
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCollaboration } from '../schemas.generated.js';
import { deserializeCollaboration } from '../schemas.generated.js';
import { serializeCreateCollaborationRequestBody } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBody } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyItemField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyItemField } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyItemTypeField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyItemTypeField } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyAccessibleByField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyAccessibleByField } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyAccessibleByTypeField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyAccessibleByTypeField } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyRoleField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyRoleField } from '../managers/userCollaborations.generated.js';
import { serializeUpdateCollaborationByIdRequestBody } from '../managers/userCollaborations.generated.js';
import { deserializeUpdateCollaborationByIdRequestBody } from '../managers/userCollaborations.generated.js';
import { serializeUpdateCollaborationByIdRequestBodyRoleField } from '../managers/userCollaborations.generated.js';
import { deserializeUpdateCollaborationByIdRequestBodyRoleField } from '../managers/userCollaborations.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBody } from '../managers/users.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { Collaboration } from '../schemas.generated.js';
import { CreateCollaborationRequestBody } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyItemField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyItemTypeField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyAccessibleByField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyAccessibleByTypeField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyRoleField } from '../managers/userCollaborations.generated.js';
import { UpdateCollaborationByIdRequestBody } from '../managers/userCollaborations.generated.js';
import { UpdateCollaborationByIdRequestBodyRoleField } from '../managers/userCollaborations.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
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
  const updatedCollaboration: Collaboration =
    await client.userCollaborations.updateCollaborationById(collaborationId, {
      role: 'viewer' as UpdateCollaborationByIdRequestBodyRoleField,
    } satisfies UpdateCollaborationByIdRequestBody);
  if (!((toString(updatedCollaboration.role!) as string) == 'viewer')) {
    throw new Error('Assertion failed');
  }
  await client.userCollaborations.deleteCollaborationById(collaborationId);
  await expect(async () => {
    await client.userCollaborations.getCollaborationById(collaborationId);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
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
  const updatedCollaboration: Collaboration =
    await client.userCollaborations.updateCollaborationById(collaborationId, {
      role: 'viewer' as UpdateCollaborationByIdRequestBodyRoleField,
    } satisfies UpdateCollaborationByIdRequestBody);
  if (!((toString(updatedCollaboration.role!) as string) == 'viewer')) {
    throw new Error('Assertion failed');
  }
  await client.userCollaborations.deleteCollaborationById(collaborationId);
  await expect(async () => {
    await client.userCollaborations.getCollaborationById(collaborationId);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
