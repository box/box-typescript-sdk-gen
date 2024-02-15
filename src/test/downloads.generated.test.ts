import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { Buffer } from '../utils.js';
import { ByteStream } from '../utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Interceptor } from '../interceptors.generated.js';
import { getUuid } from '../utils.js';
import { generateByteBuffer } from '../utils.js';
import { generateByteStreamFromBuffer } from '../utils.js';
import { bufferEquals } from '../utils.js';
import { readByteStream } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('test_download_file', async function test_download_file(): Promise<any> {
  const newFileName: string = getUuid();
  const fileBuffer: Buffer = generateByteBuffer(1024 * 1024);
  const fileContentStream: ByteStream =
    generateByteStreamFromBuffer(fileBuffer);
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: newFileName,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: fileContentStream,
  } satisfies UploadFileRequestBody);
  const uploadedFile: FileFull = uploadedFiles.entries![0];
  const downloadedFileContent: ByteStream = await client.downloads.downloadFile(
    uploadedFile.id
  );
  if (!bufferEquals(await readByteStream(downloadedFileContent), fileBuffer)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(uploadedFile.id);
});
test('test_change_download_url_with_interceptor', async function test_change_download_url_with_interceptor(): Promise<any> {
  const newFileName: string = getUuid();
  const fileBuffer: Buffer = generateByteBuffer(1024 * 1024);
  const fileContentStream: ByteStream =
    generateByteStreamFromBuffer(fileBuffer);
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: newFileName,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: fileContentStream,
  } satisfies UploadFileRequestBody);
  const uploadedFile: FileFull = uploadedFiles.entries![0];
  const downloadedFileContent: ByteStream = await client.downloads.downloadFile(
    uploadedFile.id
  );
  if (!bufferEquals(await readByteStream(downloadedFileContent), fileBuffer)) {
    throw new Error('Assertion failed');
  }
  function emptyBeforeRequest(options: FetchOptions): FetchOptions {
    return options;
  }
  function afterRequest(response: FetchResponse): FetchResponse {
    return {
      status: response.status,
      data: response.data,
      content: response.content,
      headers: { ...response.headers, ...{ ['location']: 'fake_location' } },
    } satisfies FetchResponse;
  }
  const clientWithInterceptor: BoxClient = client.withInterceptors([
    {
      beforeRequest: emptyBeforeRequest,
      afterRequest: afterRequest,
    } satisfies Interceptor,
  ]);
  await expect(async () => {
    await clientWithInterceptor.downloads.downloadFile(uploadedFile.id);
  }).rejects.toThrow();
  await client.files.deleteFileById(uploadedFile.id);
});
export {};
