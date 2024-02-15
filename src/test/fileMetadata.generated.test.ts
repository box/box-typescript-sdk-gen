import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeMetadatas } from '../schemas.generated.js';
import { deserializeMetadatas } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeGetFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeGetFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeUpdateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeUpdateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeUpdateFileMetadataByIdRequestBody } from '../managers/fileMetadata.generated.js';
import { deserializeUpdateFileMetadataByIdRequestBody } from '../managers/fileMetadata.generated.js';
import { serializeUpdateFileMetadataByIdRequestBodyOpField } from '../managers/fileMetadata.generated.js';
import { deserializeUpdateFileMetadataByIdRequestBodyOpField } from '../managers/fileMetadata.generated.js';
import { serializeDeleteFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeDeleteFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Metadatas } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { CreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { GetFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { UpdateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { UpdateFileMetadataByIdRequestBody } from '../managers/fileMetadata.generated.js';
import { UpdateFileMetadataByIdRequestBodyOpField } from '../managers/fileMetadata.generated.js';
import { DeleteFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
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
    throw new Error('Assertion failed');
  }
  const createdMetadata: any = await client.fileMetadata.createFileMetadataById(
    file.id,
    'global' as CreateFileMetadataByIdScope,
    'properties',
    { ['abc']: 'xyz' }
  );
  if (!((toString(createdMetadata.template) as string) == 'properties')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(createdMetadata.scope) as string) == 'global')) {
    throw new Error('Assertion failed');
  }
  if (!(createdMetadata.version == 0)) {
    throw new Error('Assertion failed');
  }
  const receivedMetadata: any = await client.fileMetadata.getFileMetadataById(
    file.id,
    'global' as GetFileMetadataByIdScope,
    'properties'
  );
  if (!(receivedMetadata.extraData!.abc == 'xyz')) {
    throw new Error('Assertion failed');
  }
  const newValue: any = 'bar';
  const updatedMetadata: any = await client.fileMetadata.updateFileMetadataById(
    file.id,
    'global' as UpdateFileMetadataByIdScope,
    'properties',
    [
      {
        op: 'replace' as UpdateFileMetadataByIdRequestBodyOpField,
        path: '/abc',
        value: newValue,
      } satisfies UpdateFileMetadataByIdRequestBody,
    ]
  );
  const receivedUpdatedMetadata: any =
    await client.fileMetadata.getFileMetadataById(
      file.id,
      'global' as GetFileMetadataByIdScope,
      'properties'
    );
  if (!(receivedUpdatedMetadata.extraData!.abc == newValue)) {
    throw new Error('Assertion failed');
  }
  await client.fileMetadata.deleteFileMetadataById(
    file.id,
    'global' as DeleteFileMetadataByIdScope,
    'properties'
  );
  await expect(async () => {
    await client.fileMetadata.getFileMetadataById(
      file.id,
      'global' as GetFileMetadataByIdScope,
      'properties'
    );
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
export {};
