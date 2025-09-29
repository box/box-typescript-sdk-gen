import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { FetchOptionsInput } from '@/networking/fetchOptions.generated';
import { BoxClient } from '@/client.generated';
import { Buffer } from '@/internal/utils';
import { ByteStream } from '@/internal/utils';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { Interceptor } from '@/networking/interceptors.generated';
import { getUuid } from '@/internal/utils';
import { generateByteBuffer } from '@/internal/utils';
import { generateByteStreamFromBuffer } from '@/internal/utils';
import { bufferEquals } from '@/internal/utils';
import { readByteStream } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { uploadNewFile } from './commons.generated';
import { FetchOptions } from '@/networking/fetchOptions.generated';
import { FetchResponse } from '@/networking/fetchResponse.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
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
  const downloadedFileContent: undefined | ByteStream =
    await client.downloads.downloadFile(uploadedFile.id);
  if (!bufferEquals(await readByteStream(downloadedFileContent!), fileBuffer)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(uploadedFile.id);
});
test('test_get_download_url', async function test_get_download_url(): Promise<any> {
  const uploadedFile: FileFull = await uploadNewFile();
  const downloadUrl: string = await client.downloads.getDownloadFileUrl(
    uploadedFile.id,
  );
  if (!!(downloadUrl == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(downloadUrl.includes('https://') as boolean)) {
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
  const downloadedFileContent: undefined | ByteStream =
    await client.downloads.downloadFile(uploadedFile.id);
  if (!bufferEquals(await readByteStream(downloadedFileContent!), fileBuffer)) {
    throw new Error('Assertion failed');
  }
  function emptyBeforeRequest(optionsInput: FetchOptionsInput): FetchOptions {
    const options: FetchOptions = new FetchOptions({
      url: optionsInput.url,
      method: optionsInput.method,
      params: optionsInput.params,
      headers: optionsInput.headers,
      data: optionsInput.data,
      fileStream: optionsInput.fileStream,
      multipartData: optionsInput.multipartData,
      contentType: optionsInput.contentType,
      responseFormat: optionsInput.responseFormat,
      auth: optionsInput.auth,
      networkSession: optionsInput.networkSession,
      cancellationToken: optionsInput.cancellationToken,
      followRedirects: optionsInput.followRedirects,
    });
    return options;
  }
  function afterRequest(response: FetchResponse): FetchResponse {
    return {
      url: response.url,
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
