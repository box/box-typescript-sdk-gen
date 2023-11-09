import { serializeFile } from '../schemas.generated.js';
import { deserializeFile } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { ByteStream } from '../utils.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { File } from '../schemas.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
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
    throw 'Assertion failed';
  }
  if (!(uploadedFile.size == fileSize)) {
    throw 'Assertion failed';
  }
  if (!(uploadedFile.parent!.id == parentFolderId)) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(uploadedFile.id);
});
export {};
