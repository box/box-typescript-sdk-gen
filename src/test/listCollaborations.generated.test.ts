import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeGroupFull } from '../schemas.generated.js';
import { deserializeGroupFull } from '../schemas.generated.js';
import { serializeCreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { deserializeCreateGroupRequestBodyArg } from '../managers/groups.generated.js';
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
import { serializeCollaborations } from '../schemas.generated.js';
import { deserializeCollaborations } from '../schemas.generated.js';
import { serializeGetCollaborationsQueryParamsArgStatusField } from '../managers/listCollaborations.generated.js';
import { deserializeGetCollaborationsQueryParamsArgStatusField } from '../managers/listCollaborations.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { FileFull } from '../schemas.generated.js';
import { GroupFull } from '../schemas.generated.js';
import { CreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { Collaboration } from '../schemas.generated.js';
import { CreateCollaborationRequestBodyArg } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgItemField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgItemFieldTypeField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgAccessibleByField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgAccessibleByFieldTypeField } from '../managers/userCollaborations.generated.js';
import { CreateCollaborationRequestBodyArgRoleField } from '../managers/userCollaborations.generated.js';
import { Collaborations } from '../schemas.generated.js';
import { GetCollaborationsQueryParamsArg } from '../managers/listCollaborations.generated.js';
import { GetCollaborationsQueryParamsArgStatusField } from '../managers/listCollaborations.generated.js';
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
  } satisfies CreateGroupRequestBodyArg);
  const groupCollaboration: Collaboration =
    await client.userCollaborations.createCollaboration({
      item: {
        type: 'folder' as CreateCollaborationRequestBodyArgItemFieldTypeField,
        id: folder.id,
      } satisfies CreateCollaborationRequestBodyArgItemField,
      accessibleBy: {
        type: 'group' as CreateCollaborationRequestBodyArgAccessibleByFieldTypeField,
        id: group.id,
      } satisfies CreateCollaborationRequestBodyArgAccessibleByField,
      role: 'editor' as CreateCollaborationRequestBodyArgRoleField,
    } satisfies CreateCollaborationRequestBodyArg);
  const fileCollaboration: Collaboration =
    await client.userCollaborations.createCollaboration({
      item: {
        type: 'file' as CreateCollaborationRequestBodyArgItemFieldTypeField,
        id: file.id,
      } satisfies CreateCollaborationRequestBodyArgItemField,
      accessibleBy: {
        type: 'user' as CreateCollaborationRequestBodyArgAccessibleByFieldTypeField,
        id: getEnvVar('USER_ID'),
      } satisfies CreateCollaborationRequestBodyArgAccessibleByField,
      role: 'editor' as CreateCollaborationRequestBodyArgRoleField,
    } satisfies CreateCollaborationRequestBodyArg);
  if (!((toString(groupCollaboration.role) as string) == 'editor')) {
    throw 'Assertion failed';
  }
  if (!((toString(groupCollaboration.type) as string) == 'collaboration')) {
    throw 'Assertion failed';
  }
  const fileCollaborations: Collaborations =
    await client.listCollaborations.getFileCollaborations(file.id);
  if (!(fileCollaborations.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const folderCollaborations: Collaborations =
    await client.listCollaborations.getFolderCollaborations(folder.id);
  if (!(folderCollaborations.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const pendingCollaborations: Collaborations =
    await client.listCollaborations.getCollaborations({
      status: 'pending' as GetCollaborationsQueryParamsArgStatusField,
    } satisfies GetCollaborationsQueryParamsArg);
  if (!(pendingCollaborations.entries!.length >= 0)) {
    throw 'Assertion failed';
  }
  const groupCollaborations: Collaborations =
    await client.listCollaborations.getGroupCollaborations(group.id);
  if (!(groupCollaborations.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  await client.userCollaborations.deleteCollaborationById(
    groupCollaboration.id
  );
  await client.files.deleteFileById(file.id);
  await client.folders.deleteFolderById(folder.id);
  await client.groups.deleteGroupById(group.id);
});
export {};
