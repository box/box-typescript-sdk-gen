import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { serializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { serializeAddShareLinkToFolderRequestBody } from '@/managers/sharedLinksFolders.generated';
import { deserializeAddShareLinkToFolderRequestBody } from '@/managers/sharedLinksFolders.generated';
import { serializeAddShareLinkToFolderRequestBodySharedLinkField } from '@/managers/sharedLinksFolders.generated';
import { deserializeAddShareLinkToFolderRequestBodySharedLinkField } from '@/managers/sharedLinksFolders.generated';
import { serializeAddShareLinkToFolderRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFolders.generated';
import { deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFolders.generated';
import { serializeUpdateSharedLinkOnFolderRequestBody } from '@/managers/sharedLinksFolders.generated';
import { deserializeUpdateSharedLinkOnFolderRequestBody } from '@/managers/sharedLinksFolders.generated';
import { serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField } from '@/managers/sharedLinksFolders.generated';
import { deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField } from '@/managers/sharedLinksFolders.generated';
import { serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFolders.generated';
import { deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFolders.generated';
import { serializeRemoveSharedLinkFromFolderRequestBody } from '@/managers/sharedLinksFolders.generated';
import { deserializeRemoveSharedLinkFromFolderRequestBody } from '@/managers/sharedLinksFolders.generated';
import { FindFolderForSharedLinkHeadersInput } from '@/managers/sharedLinksFolders.generated';
import { BoxClient } from '@/client.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { CreateFolderRequestBody } from '@/managers/folders.generated';
import { CreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { AddShareLinkToFolderRequestBody } from '@/managers/sharedLinksFolders.generated';
import { AddShareLinkToFolderRequestBodySharedLinkField } from '@/managers/sharedLinksFolders.generated';
import { AddShareLinkToFolderRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFolders.generated';
import { AddShareLinkToFolderQueryParams } from '@/managers/sharedLinksFolders.generated';
import { GetSharedLinkForFolderQueryParams } from '@/managers/sharedLinksFolders.generated';
import { FindFolderForSharedLinkQueryParams } from '@/managers/sharedLinksFolders.generated';
import { FindFolderForSharedLinkHeaders } from '@/managers/sharedLinksFolders.generated';
import { UpdateSharedLinkOnFolderRequestBody } from '@/managers/sharedLinksFolders.generated';
import { UpdateSharedLinkOnFolderRequestBodySharedLinkField } from '@/managers/sharedLinksFolders.generated';
import { UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFolders.generated';
import { UpdateSharedLinkOnFolderQueryParams } from '@/managers/sharedLinksFolders.generated';
import { RemoveSharedLinkFromFolderRequestBody } from '@/managers/sharedLinksFolders.generated';
import { RemoveSharedLinkFromFolderQueryParams } from '@/managers/sharedLinksFolders.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { createNull } from '@/internal/utils';
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
test('testSharedLinksFolders', async function testSharedLinksFolders(): Promise<any> {
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  await client.sharedLinksFolders.addShareLinkToFolder(
    folder.id,
    {
      sharedLink: {
        access: 'open' as AddShareLinkToFolderRequestBodySharedLinkAccessField,
        password: 'Secret123@',
      } satisfies AddShareLinkToFolderRequestBodySharedLinkField,
    } satisfies AddShareLinkToFolderRequestBody,
    { fields: 'shared_link' } satisfies AddShareLinkToFolderQueryParams,
  );
  const folderFromApi: FolderFull =
    await client.sharedLinksFolders.getSharedLinkForFolder(folder.id, {
      fields: 'shared_link',
    } satisfies GetSharedLinkForFolderQueryParams);
  if (!((toString(folderFromApi.sharedLink!.access) as string) == 'open')) {
    throw new Error('Assertion failed');
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = getDefaultClientWithUserSubject(userId);
  const folderFromSharedLinkPassword: FolderFull =
    await userClient.sharedLinksFolders.findFolderForSharedLink(
      {} satisfies FindFolderForSharedLinkQueryParams,
      {
        boxapi: ''.concat(
          'shared_link=',
          folderFromApi.sharedLink!.url,
          '&shared_link_password=Secret123@',
        ) as string,
      } satisfies FindFolderForSharedLinkHeadersInput,
    );
  if (!(folder.id == folderFromSharedLinkPassword.id)) {
    throw new Error('Assertion failed');
  }
  await expect(async () => {
    await userClient.sharedLinksFolders.findFolderForSharedLink(
      {} satisfies FindFolderForSharedLinkQueryParams,
      {
        boxapi: ''.concat(
          'shared_link=',
          folderFromApi.sharedLink!.url,
          '&shared_link_password=incorrectPassword',
        ) as string,
      } satisfies FindFolderForSharedLinkHeadersInput,
    );
  }).rejects.toThrow();
  const updatedFolder: FolderFull =
    await client.sharedLinksFolders.updateSharedLinkOnFolder(
      folder.id,
      {
        sharedLink: {
          access:
            'collaborators' as UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField,
        } satisfies UpdateSharedLinkOnFolderRequestBodySharedLinkField,
      } satisfies UpdateSharedLinkOnFolderRequestBody,
      { fields: 'shared_link' } satisfies UpdateSharedLinkOnFolderQueryParams,
    );
  if (
    !((toString(updatedFolder.sharedLink!.access) as string) == 'collaborators')
  ) {
    throw new Error('Assertion failed');
  }
  await client.sharedLinksFolders.removeSharedLinkFromFolder(
    folder.id,
    {
      sharedLink: createNull(),
    } satisfies RemoveSharedLinkFromFolderRequestBody,
    { fields: 'shared_link' } satisfies RemoveSharedLinkFromFolderQueryParams,
  );
  const folderFromApiAfterRemove: FolderFull =
    await client.sharedLinksFolders.getSharedLinkForFolder(folder.id, {
      fields: 'shared_link',
    } satisfies GetSharedLinkForFolderQueryParams);
  if (!(folderFromApiAfterRemove.sharedLink == void 0)) {
    throw new Error('Assertion failed');
  }
  await client.folders.deleteFolderById(folder.id);
});
export {};
