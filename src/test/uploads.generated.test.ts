import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeFile } from '../schemas.generated.js';
import { deserializeFile } from '../schemas.generated.js';
import { serializeUploadFileVersionRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileVersionRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { ByteStream } from '../utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { File } from '../schemas.generated.js';
import { UploadFileVersionRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileVersionRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { CancellationToken } from '../utils.js';
import { UploadFileQueryParamsArg } from '../managers/uploads.generated.js';
import { UploadFileHeadersArg } from '../managers/uploads.generated.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { createTokenAndCancelAfter } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { getDefaultClient } from './commons.generated.js';
const client: BoxClient = getDefaultClient();
test('testUploadFileAndFileVersion', async function testUploadFileAndFileVersion(): Promise<any> {
  const newFileName: string = getUuid();
  const fileContentStream: ByteStream = generateByteStream(1024 * 1024);
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
  if (!(uploadedFile.name == newFileName)) {
    throw 'Assertion failed';
  }
  const newFileVersionName: string = getUuid();
  const newFileContentStream: ByteStream = generateByteStream(1024 * 1024);
  const uploadedFilesVersion: Files = await client.uploads.uploadFileVersion(
    uploadedFile.id,
    {
      attributes: {
        name: newFileVersionName,
      } satisfies UploadFileVersionRequestBodyArgAttributesField,
      file: newFileContentStream,
    } satisfies UploadFileVersionRequestBodyArg
  );
  const newFileVersion: File = uploadedFilesVersion.entries![0];
  if (!(newFileVersion.name == newFileVersionName)) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(newFileVersion.id);
});
test('testRequestCancellation', async function testRequestCancellation(): Promise<any> {
  const fileSize: number = 1024 * 1024;
  const fileName: string = getUuid();
  const fileByteStream: ByteStream = generateByteStream(fileSize);
  const cancellationToken: CancellationToken = createTokenAndCancelAfter(1);
  expect(async () => {
    await client.uploads.uploadFile(
      {
        attributes: {
          name: fileName,
          parent: {
            id: '0',
          } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
        } satisfies UploadFileRequestBodyArgAttributesField,
        file: fileByteStream,
      } satisfies UploadFileRequestBodyArg,
      {} satisfies UploadFileQueryParamsArg,
      new UploadFileHeadersArg({}),
      cancellationToken
    );
  }).rejects.toThrow();
});
export {};
