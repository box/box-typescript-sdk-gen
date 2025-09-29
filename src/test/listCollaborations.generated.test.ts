import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeGroupFull } from '@/schemas/groupFull.generated';
import { deserializeGroupFull } from '@/schemas/groupFull.generated';
import { serializeCreateGroupRequestBody } from '@/managers/groups.generated';
import { deserializeCreateGroupRequestBody } from '@/managers/groups.generated';
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
import { serializeCollaborations } from '@/schemas/collaborations.generated';
import { deserializeCollaborations } from '@/schemas/collaborations.generated';
import { serializeCollaborationsOffsetPaginated } from '@/schemas/collaborationsOffsetPaginated.generated';
import { deserializeCollaborationsOffsetPaginated } from '@/schemas/collaborationsOffsetPaginated.generated';
import { serializeGetCollaborationsQueryParamsStatusField } from '@/managers/listCollaborations.generated';
import { deserializeGetCollaborationsQueryParamsStatusField } from '@/managers/listCollaborations.generated';
import { BoxClient } from '@/client.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { GroupFull } from '@/schemas/groupFull.generated';
import { CreateGroupRequestBody } from '@/managers/groups.generated';
import { Collaboration } from '@/schemas/collaboration.generated';
import { CreateCollaborationRequestBody } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyItemField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyItemTypeField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyAccessibleByField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyAccessibleByTypeField } from '@/managers/userCollaborations.generated';
import { CreateCollaborationRequestBodyRoleField } from '@/managers/userCollaborations.generated';
import { Collaborations } from '@/schemas/collaborations.generated';
import { CollaborationsOffsetPaginated } from '@/schemas/collaborationsOffsetPaginated.generated';
import { GetCollaborationsQueryParams } from '@/managers/listCollaborations.generated';
import { GetCollaborationsQueryParamsStatusField } from '@/managers/listCollaborations.generated';
import { getUuid } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { createNewFolder } from './commons.generated';
import { uploadNewFile } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
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
  const pendingCollaborations: CollaborationsOffsetPaginated =
    await client.listCollaborations.getCollaborations({
      status: 'pending' as GetCollaborationsQueryParamsStatusField,
    } satisfies GetCollaborationsQueryParams);
  if (!(pendingCollaborations.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  const groupCollaborations: CollaborationsOffsetPaginated =
    await client.listCollaborations.getGroupCollaborations(group.id);
  if (!(groupCollaborations.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  await client.userCollaborations.deleteCollaborationById(
    groupCollaboration.id,
  );
  await client.files.deleteFileById(file.id);
  await client.folders.deleteFolderById(folder.id);
  await client.groups.deleteGroupById(group.id);
});
export {};
