import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeUploadFileVersionRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileVersionRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { ByteStream } from '../internal/utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas.generated.js';
import { UploadFileVersionRequestBody } from '../managers/uploads.generated.js';
import { UploadFileVersionRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { UploadFileQueryParams } from '../managers/uploads.generated.js';
import { UploadFileHeaders } from '../managers/uploads.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { createTokenAndCancelAfter } from '../internal/utils.js';
import { BoxClient } from '../client.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: BoxClient = getDefaultClient();
test('testUploadFileAndFileVersion', async function testUploadFileAndFileVersion(): Promise<any> {
  const newFileName: string = getUuid();
  const fileContentStream: ByteStream = generateByteStream(1024 * 1024);
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: newFileName,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: fileContentStream,
  } satisfies UploadFileRequestBody);
  const uploadedFile: FileFull = uploadedFiles.entries![0];
  if (!(uploadedFile.name == newFileName)) {
    throw new Error('Assertion failed');
  }
  const newFileVersionName: string = getUuid();
  const newFileContentStream: ByteStream = generateByteStream(1024 * 1024);
  const uploadedFilesVersion: Files = await client.uploads.uploadFileVersion(
    uploadedFile.id,
    {
      attributes: {
        name: newFileVersionName,
      } satisfies UploadFileVersionRequestBodyAttributesField,
      file: newFileContentStream,
    } satisfies UploadFileVersionRequestBody
  );
  const newFileVersion: FileFull = uploadedFilesVersion.entries![0];
  if (!(newFileVersion.name == newFileVersionName)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(newFileVersion.id);
});
test('testRequestCancellation', async function testRequestCancellation(): Promise<any> {
  const fileSize: number = 1024 * 1024;
  const fileName: string = getUuid();
  const fileByteStream: ByteStream = generateByteStream(fileSize);
  const cancellationToken: CancellationToken = createTokenAndCancelAfter(1);
  await expect(async () => {
    await client.uploads.uploadFile(
      {
        attributes: {
          name: fileName,
          parent: {
            id: '0',
          } satisfies UploadFileRequestBodyAttributesParentField,
        } satisfies UploadFileRequestBodyAttributesField,
        file: fileByteStream,
      } satisfies UploadFileRequestBody,
      {} satisfies UploadFileQueryParams,
      new UploadFileHeaders({}),
      cancellationToken
    );
  }).rejects.toThrow();
});
export {};
