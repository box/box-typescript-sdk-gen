import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { serializeAddShareLinkToFolderRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { deserializeAddShareLinkToFolderRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { serializeAddShareLinkToFolderRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeAddShareLinkToFolderRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { serializeAddShareLinkToFolderRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateSharedLinkOnFolderRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateSharedLinkOnFolderRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBody } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { AddShareLinkToFolderRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { AddShareLinkToFolderRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { AddShareLinkToFolderRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { AddShareLinkToFolderQueryParams } from '../managers/sharedLinksFolders.generated.js';
import { GetSharedLinkForFolderQueryParams } from '../managers/sharedLinksFolders.generated.js';
import { FindFolderForSharedLinkQueryParams } from '../managers/sharedLinksFolders.generated.js';
import { FindFolderForSharedLinkHeaders } from '../managers/sharedLinksFolders.generated.js';
import { UpdateSharedLinkOnFolderRequestBody } from '../managers/sharedLinksFolders.generated.js';
import { UpdateSharedLinkOnFolderRequestBodySharedLinkField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField } from '../managers/sharedLinksFolders.generated.js';
import { UpdateSharedLinkOnFolderQueryParams } from '../managers/sharedLinksFolders.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
const client: BoxClient = getDefaultClient();
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
    { fields: 'shared_link' } satisfies AddShareLinkToFolderQueryParams
  );
  const folderFromApi: FolderFull =
    await client.sharedLinksFolders.getSharedLinkForFolder(folder.id, {
      fields: 'shared_link',
    } satisfies GetSharedLinkForFolderQueryParams);
  if (!((toString(folderFromApi.sharedLink!.access) as string) == 'open')) {
    throw new Error('Assertion failed');
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = getDefaultClientAsUser(userId);
  const folderFromSharedLinkPassword: FolderFull =
    await userClient.sharedLinksFolders.findFolderForSharedLink(
      {} satisfies FindFolderForSharedLinkQueryParams,
      new FindFolderForSharedLinkHeaders({
        boxapi: ''.concat(
          'shared_link=',
          folderFromApi.sharedLink!.url,
          '&shared_link_password=Secret123@'
        ) as string,
      })
    );
  if (!(folder.id == folderFromSharedLinkPassword.id)) {
    throw new Error('Assertion failed');
  }
  await expect(async () => {
    await userClient.sharedLinksFolders.findFolderForSharedLink(
      {} satisfies FindFolderForSharedLinkQueryParams,
      new FindFolderForSharedLinkHeaders({
        boxapi: ''.concat(
          'shared_link=',
          folderFromApi.sharedLink!.url,
          '&shared_link_password=incorrectPassword'
        ) as string,
      })
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
      { fields: 'shared_link' } satisfies UpdateSharedLinkOnFolderQueryParams
    );
  if (
    !((toString(updatedFolder.sharedLink!.access) as string) == 'collaborators')
  ) {
    throw new Error('Assertion failed');
  }
  await client.folders.deleteFolderById(folder.id);
});
export {};
