import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeMetadatas } from '../schemas.generated.js';
import { deserializeMetadatas } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeCreateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { deserializeCreateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { serializeGetFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { deserializeGetFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { serializeUpdateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { deserializeUpdateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { serializeUpdateFileMetadataByIdRequestBodyArg } from '../managers/fileMetadata.generated.js';
import { deserializeUpdateFileMetadataByIdRequestBodyArg } from '../managers/fileMetadata.generated.js';
import { serializeUpdateFileMetadataByIdRequestBodyArgOpField } from '../managers/fileMetadata.generated.js';
import { deserializeUpdateFileMetadataByIdRequestBodyArgOpField } from '../managers/fileMetadata.generated.js';
import { serializeDeleteFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { deserializeDeleteFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Metadatas } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { CreateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { GetFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { UpdateFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { UpdateFileMetadataByIdRequestBodyArg } from '../managers/fileMetadata.generated.js';
import { UpdateFileMetadataByIdRequestBodyArgOpField } from '../managers/fileMetadata.generated.js';
import { DeleteFileMetadataByIdScopeArg } from '../managers/fileMetadata.generated.js';
import { generateByteStream } from '../utils.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
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
const client: any = getDefaultClient();
test('testFileMetadata', async function testFileMetadata(): Promise<any> {
  const file: any = await uploadNewFile();
  const fileMetadata: any = await client.fileMetadata.getFileMetadata(file.id);
  if (!(fileMetadata.entries!.length == 0)) {
    throw 'Assertion failed';
  }
  const createdMetadata: any = await client.fileMetadata.createFileMetadataById(
    file.id,
    'global' as CreateFileMetadataByIdScopeArg,
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
  const receivedMetadata: any = await client.fileMetadata.getFileMetadataById(
    file.id,
    'global' as GetFileMetadataByIdScopeArg,
    'properties'
  );
  if (!(receivedMetadata.extraData!.abc == 'xyz')) {
    throw 'Assertion failed';
  }
  const newValue: any = 'bar';
  const updatedMetadata: any = await client.fileMetadata.updateFileMetadataById(
    file.id,
    'global' as UpdateFileMetadataByIdScopeArg,
    'properties',
    [
      {
        op: 'replace' as UpdateFileMetadataByIdRequestBodyArgOpField,
        path: '/abc',
        value: newValue,
      } satisfies UpdateFileMetadataByIdRequestBodyArg,
    ]
  );
  const receivedUpdatedMetadata: any =
    await client.fileMetadata.getFileMetadataById(
      file.id,
      'global' as GetFileMetadataByIdScopeArg,
      'properties'
    );
  if (!(receivedUpdatedMetadata.extraData!.abc == newValue)) {
    throw 'Assertion failed';
  }
  await client.fileMetadata.deleteFileMetadataById(
    file.id,
    'global' as DeleteFileMetadataByIdScopeArg,
    'properties'
  );
  expect(async () => {
    await client.fileMetadata.getFileMetadataById(
      file.id,
      'global' as GetFileMetadataByIdScopeArg,
      'properties'
    );
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
export {};
