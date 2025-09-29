import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeGetFileThumbnailUrlExtension } from '@/managers/files.generated';
import { deserializeGetFileThumbnailUrlExtension } from '@/managers/files.generated';
import { serializeGetFileThumbnailByIdExtension } from '@/managers/files.generated';
import { deserializeGetFileThumbnailByIdExtension } from '@/managers/files.generated';
import { serializeTrashFile } from '@/schemas/trashFile.generated';
import { deserializeTrashFile } from '@/schemas/trashFile.generated';
import { serializeUpdateFileByIdRequestBody } from '@/managers/files.generated';
import { deserializeUpdateFileByIdRequestBody } from '@/managers/files.generated';
import { serializeUpdateFileByIdRequestBodyLockField } from '@/managers/files.generated';
import { deserializeUpdateFileByIdRequestBodyLockField } from '@/managers/files.generated';
import { serializeUpdateFileByIdRequestBodyLockAccessField } from '@/managers/files.generated';
import { deserializeUpdateFileByIdRequestBodyLockAccessField } from '@/managers/files.generated';
import { serializeCopyFileRequestBody } from '@/managers/files.generated';
import { deserializeCopyFileRequestBody } from '@/managers/files.generated';
import { serializeCopyFileRequestBodyParentField } from '@/managers/files.generated';
import { deserializeCopyFileRequestBodyParentField } from '@/managers/files.generated';
import { GetFileByIdOptionalsInput } from '@/managers/files.generated';
import { UpdateFileByIdOptionalsInput } from '@/managers/files.generated';
import { GetFileByIdOptionals } from '@/managers/files.generated';
import { UpdateFileByIdOptionals } from '@/managers/files.generated';
import { BoxClient } from '@/client.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { GetFileThumbnailUrlExtension } from '@/managers/files.generated';
import { Buffer } from '@/internal/utils';
import { GetFileThumbnailByIdExtension } from '@/managers/files.generated';
import { GetFileByIdQueryParams } from '@/managers/files.generated';
import { GetFileByIdHeaders } from '@/managers/files.generated';
import { TrashFile } from '@/schemas/trashFile.generated';
import { UpdateFileByIdRequestBody } from '@/managers/files.generated';
import { UpdateFileByIdRequestBodyLockField } from '@/managers/files.generated';
import { UpdateFileByIdRequestBodyLockAccessField } from '@/managers/files.generated';
import { UpdateFileByIdQueryParams } from '@/managers/files.generated';
import { CopyFileRequestBody } from '@/managers/files.generated';
import { CopyFileRequestBodyParentField } from '@/managers/files.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { readByteStream } from '@/internal/utils';
import { generateByteStreamFromBuffer } from '@/internal/utils';
import { generateByteBuffer } from '@/internal/utils';
import { bufferEquals } from '@/internal/utils';
import { ByteStream } from '@/internal/utils';
import { createNull } from '@/internal/utils';
import { uploadNewFile } from './commons.generated';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
export async function uploadFile(
  fileName: string,
  fileStream: ByteStream,
): Promise<FileFull> {
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: fileName,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: fileStream,
  } satisfies UploadFileRequestBody);
  return uploadedFiles.entries![0];
}
test('testGetFileThumbnailUrl', async function testGetFileThumbnailUrl(): Promise<any> {
  const thumbnailFileName: string = getUuid();
  const thumbnailContentStream: ByteStream = generateByteStream(1024 * 1024);
  const thumbnailFile: FileFull = await uploadFile(
    thumbnailFileName,
    thumbnailContentStream,
  );
  const downloadUrl: string = await client.files.getFileThumbnailUrl(
    thumbnailFile.id,
    'png' as GetFileThumbnailUrlExtension,
  );
  if (!!(downloadUrl == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(downloadUrl.includes('https://') as boolean)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(thumbnailFile.id);
});
test('testGetFileThumbnail', async function testGetFileThumbnail(): Promise<any> {
  const thumbnailFileName: string = getUuid();
  const thumbnailBuffer: Buffer = generateByteBuffer(1024 * 1024);
  const thumbnailContentStream: ByteStream =
    generateByteStreamFromBuffer(thumbnailBuffer);
  const thumbnailFile: FileFull = await uploadFile(
    thumbnailFileName,
    thumbnailContentStream,
  );
  const thumbnail: undefined | ByteStream =
    await client.files.getFileThumbnailById(
      thumbnailFile.id,
      'png' as GetFileThumbnailByIdExtension,
    );
  if (
    !!(bufferEquals(await readByteStream(thumbnail!), thumbnailBuffer) == true)
  ) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(thumbnailFile.id);
});
test('testGetFileFullExtraFields', async function testGetFileFullExtraFields(): Promise<any> {
  const newFileName: string = getUuid();
  const fileStream: ByteStream = generateByteStream(1024 * 1024);
  const uploadedFile: FileFull = await uploadFile(newFileName, fileStream);
  const file: FileFull = await client.files.getFileById(uploadedFile.id, {
    queryParams: {
      fields: ['is_externally_owned', 'has_collaborations'],
    } satisfies GetFileByIdQueryParams,
  } satisfies GetFileByIdOptionalsInput);
  if (!(file.isExternallyOwned == false)) {
    throw new Error('Assertion failed');
  }
  if (!(file.hasCollaborations == false)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(file.id);
});
test('testCreateGetAndDeleteFile', async function testCreateGetAndDeleteFile(): Promise<any> {
  const newFileName: string = getUuid();
  const updatedContentStream: ByteStream = generateByteStream(1024 * 1024);
  const uploadedFile: FileFull = await uploadFile(
    newFileName,
    updatedContentStream,
  );
  const file: FileFull = await client.files.getFileById(uploadedFile.id);
  await expect(async () => {
    await client.files.getFileById(uploadedFile.id, {
      queryParams: { fields: ['name'] } satisfies GetFileByIdQueryParams,
      headers: new GetFileByIdHeaders({
        extraHeaders: { ['if-none-match']: file.etag! },
      }),
    } satisfies GetFileByIdOptionalsInput);
  }).rejects.toThrow();
  if (!(file.name == newFileName)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(uploadedFile.id);
  const trashedFile: TrashFile = await client.trashedFiles.getTrashedFileById(
    uploadedFile.id,
  );
  if (!(file.id == trashedFile.id)) {
    throw new Error('Assertion failed');
  }
});
test('testUpdateFile', async function testUpdateFile(): Promise<any> {
  const fileToUpdate: FileFull = await uploadNewFile();
  const updatedName: string = getUuid();
  const updatedFile: FileFull = await client.files.updateFileById(
    fileToUpdate.id,
    {
      requestBody: {
        name: updatedName,
        description: 'Updated description',
      } satisfies UpdateFileByIdRequestBody,
    } satisfies UpdateFileByIdOptionalsInput,
  );
  if (!(updatedFile.name == updatedName)) {
    throw new Error('Assertion failed');
  }
  if (!(updatedFile.description == 'Updated description')) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(updatedFile.id);
});
test('testFileLock', async function testFileLock(): Promise<any> {
  const file: FileFull = await uploadNewFile();
  const fileWithLock: FileFull = await client.files.updateFileById(file.id, {
    requestBody: {
      lock: {
        access: 'lock' as UpdateFileByIdRequestBodyLockAccessField,
      } satisfies UpdateFileByIdRequestBodyLockField,
    } satisfies UpdateFileByIdRequestBody,
    queryParams: { fields: ['lock'] } satisfies UpdateFileByIdQueryParams,
  } satisfies UpdateFileByIdOptionalsInput);
  if (!!(fileWithLock.lock == void 0)) {
    throw new Error('Assertion failed');
  }
  const fileWithoutLock: FileFull = await client.files.updateFileById(file.id, {
    requestBody: { lock: createNull() } satisfies UpdateFileByIdRequestBody,
    queryParams: { fields: ['lock'] } satisfies UpdateFileByIdQueryParams,
  } satisfies UpdateFileByIdOptionalsInput);
  if (!(fileWithoutLock.lock == void 0)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(file.id);
});
test('testCopyFile', async function testCopyFile(): Promise<any> {
  const fileOrigin: FileFull = await uploadNewFile();
  const copiedFileName: string = getUuid();
  const copiedFile: FileFull = await client.files.copyFile(fileOrigin.id, {
    parent: { id: '0' } satisfies CopyFileRequestBodyParentField,
    name: copiedFileName,
  } satisfies CopyFileRequestBody);
  if (!(copiedFile.parent!.id == '0')) {
    throw new Error('Assertion failed');
  }
  if (!(copiedFile.name == copiedFileName)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(fileOrigin.id);
  await client.files.deleteFileById(copiedFile.id);
});
export {};
