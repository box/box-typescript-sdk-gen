import { serializeFile } from '../schemas/file.generated.js';
import { deserializeFile } from '../schemas/file.generated.js';
import { BoxClient } from '../client.generated.js';
import { ByteStream } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { File } from '../schemas/file.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: BoxClient = getDefaultClient();
test('testChunkedUpload', async function testChunkedUpload(): Promise<any> {
  const fileSize: number = 20 * 1024 * 1024;
  const fileByteStream: ByteStream = generateByteStream(fileSize);
  const fileName: string = getUuid();
  const parentFolderId: string = '0';
  const uploadedFile: File = await client.chunkedUploads.uploadBigFile(
    fileByteStream,
    fileName,
    fileSize,
    parentFolderId
  );
  if (!(uploadedFile.name == fileName)) {
    throw new Error('Assertion failed');
  }
  if (!(uploadedFile.size == fileSize)) {
    throw new Error('Assertion failed');
  }
  if (!(uploadedFile.parent!.id == parentFolderId)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(uploadedFile.id);
});
export {};
