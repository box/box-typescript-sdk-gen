import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { serializeUpdateFolderAddSharedLinkRequestBodyArg } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderAddSharedLinkRequestBodyArg } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderUpdateSharedLinkRequestBodyArg } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderUpdateSharedLinkRequestBodyArg } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFolders.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { UpdateFolderAddSharedLinkRequestBodyArg } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderAddSharedLinkQueryParamsArg } from '../managers/sharedLinksFolders.generated.js';
import { GetFolderGetSharedLinkQueryParamsArg } from '../managers/sharedLinksFolders.generated.js';
import { GetSharedItemFoldersQueryParamsArg } from '../managers/sharedLinksFolders.generated.js';
import { GetSharedItemFoldersHeadersArg } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderUpdateSharedLinkRequestBodyArg } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateFolderUpdateSharedLinkQueryParamsArg } from '../managers/sharedLinksFolders.generated.js';
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
    parent: { id: '0' } satisfies CreateFolderRequestBodyArgParentField,
  } satisfies CreateFolderRequestBodyArg);
  await client.sharedLinksFolders.updateFolderAddSharedLink(
    folder.id,
    {
      sharedLink: {
        access:
          'open' as UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField,
        password: 'Secret123@',
      } satisfies UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField,
    } satisfies UpdateFolderAddSharedLinkRequestBodyArg,
    { fields: 'shared_link' } satisfies UpdateFolderAddSharedLinkQueryParamsArg
  );
  const folderFromApi: FolderFull =
    await client.sharedLinksFolders.getFolderGetSharedLink(folder.id, {
      fields: 'shared_link',
    } satisfies GetFolderGetSharedLinkQueryParamsArg);
  if (!((toString(folderFromApi.sharedLink!.access) as string) == 'open')) {
    throw 'Assertion failed';
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = await getDefaultClientAsUser(userId);
  const folderFromSharedLinkPassword: FolderFull =
    await userClient.sharedLinksFolders.getSharedItemFolders(
      {} satisfies GetSharedItemFoldersQueryParamsArg,
      new GetSharedItemFoldersHeadersArg({
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
  expect(async () => {
    await userClient.sharedLinksFolders.getSharedItemFolders(
      {} satisfies GetSharedItemFoldersQueryParamsArg,
      new GetSharedItemFoldersHeadersArg({
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
            'collaborators' as UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField,
        } satisfies UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField,
      } satisfies UpdateFolderUpdateSharedLinkRequestBodyArg,
      {
        fields: 'shared_link',
      } satisfies UpdateFolderUpdateSharedLinkQueryParamsArg
    );
  if (
    !((toString(updatedFolder.sharedLink!.access) as string) == 'collaborators')
  ) {
    throw 'Assertion failed';
  }
  await client.folders.deleteFolderById(folder.id);
});
export {};
