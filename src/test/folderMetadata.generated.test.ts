import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { serializeMetadatas } from '../schemas.generated.js';
import { deserializeMetadatas } from '../schemas.generated.js';
import { serializeMetadata } from '../schemas.generated.js';
import { deserializeMetadata } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeUpdateFolderMetadataByIdRequestBodyArg } from '../managers/folderMetadata.generated.js';
import { deserializeUpdateFolderMetadataByIdRequestBodyArg } from '../managers/folderMetadata.generated.js';
import { serializeUpdateFolderMetadataByIdRequestBodyArgOpField } from '../managers/folderMetadata.generated.js';
import { deserializeUpdateFolderMetadataByIdRequestBodyArgOpField } from '../managers/folderMetadata.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { Metadatas } from '../schemas.generated.js';
import { Metadata } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { UpdateFolderMetadataByIdRequestBodyArg } from '../managers/folderMetadata.generated.js';
import { UpdateFolderMetadataByIdRequestBodyArgOpField } from '../managers/folderMetadata.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: any = getDefaultClient();
test('testFolderMetadata', async function testFolderMetadata(): Promise<any> {
  const folder: any = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyArgParentField,
  } satisfies CreateFolderRequestBodyArg);
  const folderMetadata: any = await client.folderMetadata.getFolderMetadata(
    folder.id
  );
  if (!(folderMetadata.entries!.length == 0)) {
    throw 'Assertion failed';
  }
  const scope: any = 'global';
  const template: any = 'properties';
  const data: any = { ['abc']: 'xyz' };
  const createdMetadata: any =
    await client.folderMetadata.createFolderMetadataById(
      folder.id,
      scope,
      template,
      data
    );
  if (!(createdMetadata.template == template)) {
    throw 'Assertion failed';
  }
  if (!(createdMetadata.scope == scope)) {
    throw 'Assertion failed';
  }
  if (!(createdMetadata.version == 0)) {
    throw 'Assertion failed';
  }
  const receivedMetadata: any =
    await client.folderMetadata.getFolderMetadataById(
      folder.id,
      scope,
      template
    );
  if (!(receivedMetadata.extraData!.abc == data.abc)) {
    throw 'Assertion failed';
  }
  const newValue: any = 'bar';
  const updatedMetadata: any =
    await client.folderMetadata.updateFolderMetadataById(
      folder.id,
      scope,
      template,
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
      scope,
      template
    );
  if (!(receivedUpdatedMetadata.extraData!.abc == newValue)) {
    throw 'Assertion failed';
  }
  await client.folderMetadata.deleteFolderMetadataById(
    folder.id,
    scope,
    template
  );
  expect(async () => {
    await client.folderMetadata.getFolderMetadataById(
      folder.id,
      scope,
      template
    );
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
