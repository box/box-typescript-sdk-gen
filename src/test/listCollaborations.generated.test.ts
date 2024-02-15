import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeGroupFull } from '../schemas.generated.js';
import { deserializeGroupFull } from '../schemas.generated.js';
import { serializeCreateGroupRequestBody } from '../managers/groups.generated.js';
import { deserializeCreateGroupRequestBody } from '../managers/groups.generated.js';
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
import { serializeCollaborations } from '../schemas.generated.js';
import { deserializeCollaborations } from '../schemas.generated.js';
import { serializeGetCollaborationsQueryParamsStatusField } from '../managers/listCollaborations.generated.js';
import { deserializeGetCollaborationsQueryParamsStatusField } from '../managers/listCollaborations.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { FileFull } from '../schemas.generated.js';
import { GroupFull } from '../schemas.generated.js';
import { CreateGroupRequestBody } from '../managers/groups.generated.js';
import { Collaboration } from '../schemas.generated.js';
import { CreateCollaborationRequestBody } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyItemField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyItemTypeField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyAccessibleByField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyAccessibleByTypeField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyRoleField } from '../managers/userCollaborations.generated.js';
import { Collaborations } from '../schemas.generated.js';
import { GetCollaborationsQueryParams } from '../managers/listCollaborations.generated.js';
import { GetCollaborationsQueryParamsStatusField } from '../managers/listCollaborations.generated.js';
import { getUuid } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
test('testListCollaborations', async function testListCollaborations(): Promise<any> {
  const client: BoxClient = getDefaultClient();
  const folder: FolderFull = await createNewFolder();
  const file: FileFull = await uploadNewFile();
  const group: GroupFull = await client.groups.createGroup({
    name: getUuid(),
  } satisfies CreateGroupRequestBody);
  const groupCollaboration: Collaboration =
    await client.userCollaborations.createCollaboration({
      item: {
        type: 'folder' as CreateCollaborationRequestBodyItemTypeField,
        id: folder.id,
      } satisfies CreateCollaborationRequestBodyItemField,
      accessibleBy: {
        type: 'group' as CreateCollaborationRequestBodyAccessibleByTypeField,
        id: group.id,
      } satisfies CreateCollaborationRequestBodyAccessibleByField,
      role: 'editor' as CreateCollaborationRequestBodyRoleField,
    } satisfies CreateCollaborationRequestBody);
  const fileCollaboration: Collaboration =
    await client.userCollaborations.createCollaboration({
      item: {
        type: 'file' as CreateCollaborationRequestBodyItemTypeField,
        id: file.id,
      } satisfies CreateCollaborationRequestBodyItemField,
      accessibleBy: {
        type: 'user' as CreateCollaborationRequestBodyAccessibleByTypeField,
        id: getEnvVar('USER_ID'),
      } satisfies CreateCollaborationRequestBodyAccessibleByField,
      role: 'editor' as CreateCollaborationRequestBodyRoleField,
    } satisfies CreateCollaborationRequestBody);
  if (!((toString(groupCollaboration.role) as string) == 'editor')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(groupCollaboration.type) as string) == 'collaboration')) {
    throw new Error('Assertion failed');
  }
  const fileCollaborations: Collaborations =
    await client.listCollaborations.getFileCollaborations(file.id);
  if (!(fileCollaborations.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const folderCollaborations: Collaborations =
    await client.listCollaborations.getFolderCollaborations(folder.id);
  if (!(folderCollaborations.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const pendingCollaborations: Collaborations =
    await client.listCollaborations.getCollaborations({
      status: 'pending' as GetCollaborationsQueryParamsStatusField,
    } satisfies GetCollaborationsQueryParams);
  if (!(pendingCollaborations.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  const groupCollaborations: Collaborations =
    await client.listCollaborations.getGroupCollaborations(group.id);
  if (!(groupCollaborations.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  await client.userCollaborations.deleteCollaborationById(
    groupCollaboration.id
  );
  await client.files.deleteFileById(file.id);
  await client.folders.deleteFolderById(folder.id);
  await client.groups.deleteGroupById(group.id);
});
export {};
