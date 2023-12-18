import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeTrashFile } from '../schemas.generated.js';
import { deserializeTrashFile } from '../schemas.generated.js';
import { serializeTrashFileRestored } from '../schemas.generated.js';
import { deserializeTrashFileRestored } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { ByteStream } from '../utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas.generated.js';
import { TrashFile } from '../schemas.generated.js';
import { TrashFileRestored } from '../schemas.generated.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
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
test('testTrashedFiles', async function testTrashedFiles(): Promise<any> {
  const fileSize: number = 1024 * 1024;
  const fileName: string = getUuid();
  const fileByteStream: ByteStream = generateByteStream(fileSize);
  const files: Files = await client.uploads.uploadFile({
    attributes: {
      name: fileName,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: fileByteStream,
  } satisfies UploadFileRequestBody);
  const file: FileFull = files.entries![0];
  await client.files.deleteFileById(file.id);
  const fromTrash: TrashFile = await client.trashedFiles.getTrashedFileById(
    file.id
  );
  if (!(fromTrash.id == file.id)) {
    throw 'Assertion failed';
  }
  if (!(fromTrash.name == file.name)) {
    throw 'Assertion failed';
  }
  const fromApiAfterTrashed: FileFull = await client.files.getFileById(file.id);
  if (!((toString(fromApiAfterTrashed.itemStatus) as string) == 'trashed')) {
    throw 'Assertion failed';
  }
  const restoredFile: TrashFileRestored =
    await client.trashedFiles.restoreFileFromTrash(file.id);
  const fromApiAfterRestore: FileFull = await client.files.getFileById(file.id);
  if (!(restoredFile.id == fromApiAfterRestore.id)) {
    throw 'Assertion failed';
  }
  if (!(restoredFile.name == fromApiAfterRestore.name)) {
    throw 'Assertion failed';
  }
  if (!((toString(fromApiAfterRestore.itemStatus) as string) == 'active')) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(file.id);
  await client.trashedFiles.deleteTrashedFileById(file.id);
  await expect(async () => {
    await client.trashedFiles.getTrashedFileById(file.id);
  }).rejects.toThrow();
});
export {};
