import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { serializeUpdateFolderAddSharedLinkRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderAddSharedLinkRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderAddSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderAddSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderAddSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderAddSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderUpdateSharedLinkRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderUpdateSharedLinkRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBody } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { UpdateFolderAddSharedLinkRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderAddSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderAddSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderAddSharedLinkQueryParams } from '../managers/sharedLinksFolders.generated.js';
import { GetFolderGetSharedLinkQueryParams } from '../managers/sharedLinksFolders.generated.js';
import { GetSharedItemFoldersQueryParams } from '../managers/sharedLinksFolders.generated.js';
import { GetSharedItemFoldersHeaders } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderUpdateSharedLinkRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderUpdateSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderUpdateSharedLinkQueryParams } from '../managers/sharedLinksFolders.generated.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientAsUser } from './commons.generated.js';
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
test('testSharedLinksFolders', async function testSharedLinksFolders(): Promise<any> {
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  await client.sharedLinksFolders.updateFolderAddSharedLink(
    folder.id,
    {
      sharedLink: {
        access:
          'open' as UpdateFolderAddSharedLinkRequestBodySharedLinkAccessField,
        password: 'Secret123@',
      } satisfies UpdateFolderAddSharedLinkRequestBodySharedLinkField,
    } satisfies UpdateFolderAddSharedLinkRequestBody,
    { fields: 'shared_link' } satisfies UpdateFolderAddSharedLinkQueryParams
  );
  const folderFromApi: FolderFull =
    await client.sharedLinksFolders.getFolderGetSharedLink(folder.id, {
      fields: 'shared_link',
    } satisfies GetFolderGetSharedLinkQueryParams);
  if (!((toString(folderFromApi.sharedLink!.access) as string) == 'open')) {
    throw 'Assertion failed';
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = await getDefaultClientAsUser(userId);
  const folderFromSharedLinkPassword: FolderFull =
    await userClient.sharedLinksFolders.getSharedItemFolders(
      {} satisfies GetSharedItemFoldersQueryParams,
      new GetSharedItemFoldersHeaders({
        boxapi: ''.concat(
          'shared_link=',
          folderFromApi.sharedLink!.url,
          '&shared_link_password=Secret123@'
        ) as string,
      })
    );
  if (!(folder.id == folderFromSharedLinkPassword.id)) {
    throw 'Assertion failed';
  }
  await expect(async () => {
    await userClient.sharedLinksFolders.getSharedItemFolders(
      {} satisfies GetSharedItemFoldersQueryParams,
      new GetSharedItemFoldersHeaders({
        boxapi: ''.concat(
          'shared_link=',
          folderFromApi.sharedLink!.url,
          '&shared_link_password=incorrectPassword'
        ) as string,
      })
    );
  }).rejects.toThrow();
  const updatedFolder: FolderFull =
    await client.sharedLinksFolders.updateFolderUpdateSharedLink(
      folder.id,
      {
        sharedLink: {
          access:
            'collaborators' as UpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField,
        } satisfies UpdateFolderUpdateSharedLinkRequestBodySharedLinkField,
      } satisfies UpdateFolderUpdateSharedLinkRequestBody,
      {
        fields: 'shared_link',
      } satisfies UpdateFolderUpdateSharedLinkQueryParams
    );
  if (
    !((toString(updatedFolder.sharedLink!.access) as string) == 'collaborators')
  ) {
    throw 'Assertion failed';
  }
  await client.folders.deleteFolderById(folder.id);
});
export {};
