import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeMetadatas } from '../schemas.generated.js';
import { deserializeMetadatas } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeCreateFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { deserializeCreateFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { serializeGetFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { deserializeGetFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { serializeUpdateFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { deserializeUpdateFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { serializeUpdateFolderMetadataByIdRequestBody } from '../managers/folderMetadata.generated.js';
import { deserializeUpdateFolderMetadataByIdRequestBody } from '../managers/folderMetadata.generated.js';
import { serializeUpdateFolderMetadataByIdRequestBodyOpField } from '../managers/folderMetadata.generated.js';
import { deserializeUpdateFolderMetadataByIdRequestBodyOpField } from '../managers/folderMetadata.generated.js';
import { serializeDeleteFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { deserializeDeleteFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { Metadatas } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { CreateFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { GetFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { UpdateFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
import { UpdateFolderMetadataByIdRequestBody } from '../managers/folderMetadata.generated.js';
import { UpdateFolderMetadataByIdRequestBodyOpField } from '../managers/folderMetadata.generated.js';
import { DeleteFolderMetadataByIdScope } from '../managers/folderMetadata.generated.js';
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
      'global' as CreateFolderMetadataByIdScope,
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
      'global' as GetFolderMetadataByIdScope,
      'properties'
    );
  if (!(receivedMetadata.extraData!.abc == 'xyz')) {
    throw 'Assertion failed';
  }
  const newValue: any = 'bar';
  const updatedMetadata: any =
    await client.folderMetadata.updateFolderMetadataById(
      folder.id,
      'global' as UpdateFolderMetadataByIdScope,
      'properties',
      [
        {
          op: 'replace' as UpdateFolderMetadataByIdRequestBodyOpField,
          path: '/abc',
          value: newValue,
        } satisfies UpdateFolderMetadataByIdRequestBody,
      ]
    );
  const receivedUpdatedMetadata: any =
    await client.folderMetadata.getFolderMetadataById(
      folder.id,
      'global' as GetFolderMetadataByIdScope,
      'properties'
    );
  if (!(receivedUpdatedMetadata.extraData!.abc == newValue)) {
    throw 'Assertion failed';
  }
  await client.folderMetadata.deleteFolderMetadataById(
    folder.id,
    'global' as DeleteFolderMetadataByIdScope,
    'properties'
  );
  await expect(async () => {
    await client.folderMetadata.getFolderMetadataById(
      folder.id,
      'global' as GetFolderMetadataByIdScope,
      'properties'
    );
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
