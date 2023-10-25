import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeFile } from '../schemas.generated.js';
import { deserializeFile } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { Buffer } from '../utils.js';
import { ByteStream } from '../utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { File } from '../schemas.generated.js';
import { getUuid } from '../utils.js';
import { generateByteBuffer } from '../utils.js';
import { generateByteStreamFromBuffer } from '../utils.js';
import { bufferEquals } from '../utils.js';
import { readByteStream } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
const client: BoxClient = getDefaultClient();
test('test_download_file', async function test_download_file(): Promise<any> {
  const newFileName: string = getUuid();
  const fileBuffer: Buffer = generateByteBuffer(1048576);
  const fileContentStream: ByteStream =
    generateByteStreamFromBuffer(fileBuffer);
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: newFileName,
      parent: {
        id: '0',
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: fileContentStream,
  } satisfies UploadFileRequestBodyArg);
  const uploadedFile: File = uploadedFiles.entries![0];
  const downloadedFileContent: ByteStream = await client.downloads.downloadFile(
    uploadedFile.id
  );
  if (!bufferEquals(await readByteStream(downloadedFileContent), fileBuffer)) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(uploadedFile.id);
});
export {};
