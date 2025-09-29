import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeUploadFileVersionRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileVersionRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadWithPreflightCheckRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadWithPreflightCheckRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadWithPreflightCheckRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadWithPreflightCheckRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeUploadUrl } from '@/schemas/uploadUrl.generated';
import { deserializeUploadUrl } from '@/schemas/uploadUrl.generated';
import { serializePreflightFileUploadCheckRequestBody } from '@/managers/uploads.generated';
import { deserializePreflightFileUploadCheckRequestBody } from '@/managers/uploads.generated';
import { serializePreflightFileUploadCheckRequestBodyParentField } from '@/managers/uploads.generated';
import { deserializePreflightFileUploadCheckRequestBodyParentField } from '@/managers/uploads.generated';
import { UploadFileOptionalsInput } from '@/managers/uploads.generated';
import { UploadFileOptionals } from '@/managers/uploads.generated';
import { ByteStream } from '@/internal/utils';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { UploadFileVersionRequestBody } from '@/managers/uploads.generated';
import { UploadFileVersionRequestBodyAttributesField } from '@/managers/uploads.generated';
import { CancellationToken } from '@/internal/utils';
import { UploadFileQueryParams } from '@/managers/uploads.generated';
import { UploadFileHeaders } from '@/managers/uploads.generated';
import { UploadWithPreflightCheckRequestBody } from '@/managers/uploads.generated';
import { UploadWithPreflightCheckRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadWithPreflightCheckRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { UploadUrl } from '@/schemas/uploadUrl.generated';
import { PreflightFileUploadCheckRequestBody } from '@/managers/uploads.generated';
import { PreflightFileUploadCheckRequestBodyParentField } from '@/managers/uploads.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { createTokenAndCancelAfter } from '@/internal/utils';
import { BoxClient } from '@/client.generated';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
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
    } satisfies UploadFileVersionRequestBody,
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
      {
        queryParams: {} satisfies UploadFileQueryParams,
        headers: new UploadFileHeaders({}),
        cancellationToken: cancellationToken,
      } satisfies UploadFileOptionalsInput,
    );
  }).rejects.toThrow();
});
test('testUploadFileWithPreflightCheck', async function testUploadFileWithPreflightCheck(): Promise<any> {
  const newFileName: string = getUuid();
  const fileContentStream: ByteStream = generateByteStream(1024 * 1024);
  await expect(async () => {
    await client.uploads.uploadWithPreflightCheck({
      attributes: {
        name: newFileName,
        size: -1,
        parent: {
          id: '0',
        } satisfies UploadWithPreflightCheckRequestBodyAttributesParentField,
      } satisfies UploadWithPreflightCheckRequestBodyAttributesField,
      file: fileContentStream,
    } satisfies UploadWithPreflightCheckRequestBody);
  }).rejects.toThrow();
  const uploadFilesWithPreflight: Files =
    await client.uploads.uploadWithPreflightCheck({
      attributes: {
        name: newFileName,
        size: 1024 * 1024,
        parent: {
          id: '0',
        } satisfies UploadWithPreflightCheckRequestBodyAttributesParentField,
      } satisfies UploadWithPreflightCheckRequestBodyAttributesField,
      file: fileContentStream,
    } satisfies UploadWithPreflightCheckRequestBody);
  const file: FileFull = uploadFilesWithPreflight.entries![0];
  if (!(file.name == newFileName)) {
    throw new Error('Assertion failed');
  }
  if (!(file.size == 1024 * 1024)) {
    throw new Error('Assertion failed');
  }
  await expect(async () => {
    await client.uploads.uploadWithPreflightCheck({
      attributes: {
        name: newFileName,
        size: 1024 * 1024,
        parent: {
          id: '0',
        } satisfies UploadWithPreflightCheckRequestBodyAttributesParentField,
      } satisfies UploadWithPreflightCheckRequestBodyAttributesField,
      file: fileContentStream,
    } satisfies UploadWithPreflightCheckRequestBody);
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
test('testPreflightCheck', async function testPreflightCheck(): Promise<any> {
  const newFileName: string = getUuid();
  const preflightCheckResult: UploadUrl =
    await client.uploads.preflightFileUploadCheck({
      name: newFileName,
      size: 1024 * 1024,
      parent: {
        id: '0',
      } satisfies PreflightFileUploadCheckRequestBodyParentField,
    } satisfies PreflightFileUploadCheckRequestBody);
  if (!!(preflightCheckResult.uploadUrl == '')) {
    throw new Error('Assertion failed');
  }
});
export {};
