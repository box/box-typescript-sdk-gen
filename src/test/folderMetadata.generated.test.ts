import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeMetadatas } from '../schemas.generated.js';
import { deserializeMetadatas } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeCreateFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { deserializeCreateFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { serializeGetFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { deserializeGetFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { serializeUpdateFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { deserializeUpdateFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { serializeUpdateFolderMetadataByIdRequestBodyArg } from '../managers/folderMetadata.generated.js';
import { deserializeUpdateFolderMetadataByIdRequestBodyArg } from '../managers/folderMetadata.generated.js';
import { serializeUpdateFolderMetadataByIdRequestBodyArgOpField } from '../managers/folderMetadata.generated.js';
import { deserializeUpdateFolderMetadataByIdRequestBodyArgOpField } from '../managers/folderMetadata.generated.js';
import { serializeDeleteFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { deserializeDeleteFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { Metadatas } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { CreateFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { GetFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { UpdateFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
import { UpdateFolderMetadataByIdRequestBodyArg } from '../managers/folderMetadata.generated.js';
import { UpdateFolderMetadataByIdRequestBodyArgOpField } from '../managers/folderMetadata.generated.js';
import { DeleteFolderMetadataByIdScopeArg } from '../managers/folderMetadata.generated.js';
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
const client: any = getDefaultClient();
test('testFolderMetadata', async function testFolderMetadata(): Promise<any> {
  const folder: any = await createNewFolder();
  const folderMetadata: any = await client.folderMetadata.getFolderMetadata(
    folder.id
  );
  if (!(folderMetadata.entries!.length == 0)) {
    throw 'Assertion failed';
  }
  const createdMetadata: any =
    await client.folderMetadata.createFolderMetadataById(
      folder.id,
      'global' as CreateFolderMetadataByIdScopeArg,
      'properties',
      { ['abc']: 'xyz' }
    );
  if (!((toString(createdMetadata.template) as string) == 'properties')) {
    throw 'Assertion failed';
  }
  if (!((toString(createdMetadata.scope) as string) == 'global')) {
    throw 'Assertion failed';
  }
  if (!(createdMetadata.version == 0)) {
    throw 'Assertion failed';
  }
  const receivedMetadata: any =
    await client.folderMetadata.getFolderMetadataById(
      folder.id,
      'global' as GetFolderMetadataByIdScopeArg,
      'properties'
    );
  if (!(receivedMetadata.extraData!.abc == 'xyz')) {
    throw 'Assertion failed';
  }
  const newValue: any = 'bar';
  const updatedMetadata: any =
    await client.folderMetadata.updateFolderMetadataById(
      folder.id,
      'global' as UpdateFolderMetadataByIdScopeArg,
      'properties',
      [
        {
          op: 'replace' as UpdateFolderMetadataByIdRequestBodyArgOpField,
          path: '/abc',
          value: newValue,
        } satisfies UpdateFolderMetadataByIdRequestBodyArg,
      ]
    );
  const receivedUpdatedMetadata: any =
    await client.folderMetadata.getFolderMetadataById(
      folder.id,
      'global' as GetFolderMetadataByIdScopeArg,
      'properties'
    );
  if (!(receivedUpdatedMetadata.extraData!.abc == newValue)) {
    throw 'Assertion failed';
  }
  await client.folderMetadata.deleteFolderMetadataById(
    folder.id,
    'global' as DeleteFolderMetadataByIdScopeArg,
    'properties'
  );
  await expect(async () => {
    await client.folderMetadata.getFolderMetadataById(
      folder.id,
      'global' as GetFolderMetadataByIdScopeArg,
      'properties'
    );
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
