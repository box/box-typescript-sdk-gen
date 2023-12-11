import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCollaboration } from '../schemas.generated.js';
import { deserializeCollaboration } from '../schemas.generated.js';
import { serializeCreateCollaborationRequestBodyArg } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyArg } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyArgItemField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyArgItemField } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyArgItemFieldTypeField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyArgItemFieldTypeField } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyArgAccessibleByField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyArgAccessibleByField } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField } from '../managers/userCollaborations.generated.js';
import { serializeCreateCollaborationRequestBodyArgRoleField } from '../managers/userCollaborations.generated.js';
import { deserializeCreateCollaborationRequestBodyArgRoleField } from '../managers/userCollaborations.generated.js';
import { serializeUpdateCollaborationByIdRequestBodyArg } from '../managers/userCollaborations.generated.js';
import { deserializeUpdateCollaborationByIdRequestBodyArg } from '../managers/userCollaborations.generated.js';
import { serializeUpdateCollaborationByIdRequestBodyArgRoleField } from '../managers/userCollaborations.generated.js';
import { deserializeUpdateCollaborationByIdRequestBodyArgRoleField } from '../managers/userCollaborations.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBodyArg } from '../managers/users.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { Collaboration } from '../schemas.generated.js';
import { CreateCollaborationRequestBodyArg } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgItemField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgItemFieldTypeField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgAccessibleByField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgAccessibleByFieldTypeField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgRoleField } from '../managers/userCollaborations.generated.js';
import { UpdateCollaborationByIdRequestBodyArg } from '../managers/userCollaborations.generated.js';
import { UpdateCollaborationByIdRequestBodyArgRoleField } from '../managers/userCollaborations.generated.js';
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
  } satisfies CreateUserRequestBodyArg);
  const folder: FolderFull = await createNewFolder();
  const collaboration: Collaboration =
    await client.userCollaborations.createCollaboration({
      item: {
        type: 'folder' as CreateCollaborationRequestBodyArgItemFieldTypeField,
        id: folder.id,
      } satisfies CreateCollaborationRequestBodyArgItemField,
      accessibleBy: {
        type: 'user' as CreateCollaborationRequestBodyArgAccessibleByFieldTypeField,
        id: user.id,
      } satisfies CreateCollaborationRequestBodyArgAccessibleByField,
      role: 'editor' as CreateCollaborationRequestBodyArgRoleField,
    } satisfies CreateCollaborationRequestBodyArg);
  if (!((toString(collaboration.role!) as string) == 'editor')) {
    throw 'Assertion failed';
  }
  const collaborationId: string = collaboration.id;
  const collaborationFromApi: Collaboration =
    await client.userCollaborations.getCollaborationById(collaborationId);
  if (!(collaborationId == collaborationFromApi.id)) {
    throw 'Assertion failed';
  }
  if (!((toString(collaborationFromApi.status!) as string) == 'accepted')) {
    throw 'Assertion failed';
  }
  if (!((toString(collaborationFromApi.type) as string) == 'collaboration')) {
    throw 'Assertion failed';
  }
  if (!(collaborationFromApi.inviteEmail == void 0)) {
    throw 'Assertion failed';
  }
  const updatedCollaboration: Collaboration =
    await client.userCollaborations.updateCollaborationById(collaborationId, {
      role: 'viewer' as UpdateCollaborationByIdRequestBodyArgRoleField,
    } satisfies UpdateCollaborationByIdRequestBodyArg);
  if (!((toString(updatedCollaboration.role!) as string) == 'viewer')) {
    throw 'Assertion failed';
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
        type: 'folder' as CreateCollaborationRequestBodyArgItemFieldTypeField,
        id: folder.id,
      } satisfies CreateCollaborationRequestBodyArgItemField,
      accessibleBy: {
        type: 'user' as CreateCollaborationRequestBodyArgAccessibleByFieldTypeField,
        login: userLogin,
      } satisfies CreateCollaborationRequestBodyArgAccessibleByField,
      role: 'editor' as CreateCollaborationRequestBodyArgRoleField,
    } satisfies CreateCollaborationRequestBodyArg);
  if (!((toString(collaboration.role!) as string) == 'editor')) {
    throw 'Assertion failed';
  }
  const collaborationId: string = collaboration.id;
  const collaborationFromApi: Collaboration =
    await client.userCollaborations.getCollaborationById(collaborationId);
  if (!(collaborationId == collaborationFromApi.id)) {
    throw 'Assertion failed';
  }
  if (!((toString(collaborationFromApi.status!) as string) == 'pending')) {
    throw 'Assertion failed';
  }
  if (!((toString(collaborationFromApi.type) as string) == 'collaboration')) {
    throw 'Assertion failed';
  }
  if (!(collaborationFromApi.inviteEmail == userLogin)) {
    throw 'Assertion failed';
  }
  const updatedCollaboration: Collaboration =
    await client.userCollaborations.updateCollaborationById(collaborationId, {
      role: 'viewer' as UpdateCollaborationByIdRequestBodyArgRoleField,
    } satisfies UpdateCollaborationByIdRequestBodyArg);
  if (!((toString(updatedCollaboration.role!) as string) == 'viewer')) {
    throw 'Assertion failed';
  }
  await client.userCollaborations.deleteCollaborationById(collaborationId);
  await expect(async () => {
    await client.userCollaborations.getCollaborationById(collaborationId);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
