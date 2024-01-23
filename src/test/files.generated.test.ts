import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeGetFileThumbnailByIdExtension } from '../managers/files.generated.js';
import { deserializeGetFileThumbnailByIdExtension } from '../managers/files.generated.js';
import { serializeTrashFile } from '../schemas.generated.js';
import { deserializeTrashFile } from '../schemas.generated.js';
import { serializeUpdateFileByIdRequestBody } from '../managers/files.generated.js';
import { deserializeUpdateFileByIdRequestBody } from '../managers/files.generated.js';
import { serializeCopyFileRequestBody } from '../managers/files.generated.js';
import { deserializeCopyFileRequestBody } from '../managers/files.generated.js';
import { serializeCopyFileRequestBodyParentField } from '../managers/files.generated.js';
import { deserializeCopyFileRequestBodyParentField } from '../managers/files.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { GetFileThumbnailByIdExtension } from '../managers/files.generated.js';
import { GetFileByIdQueryParams } from '../managers/files.generated.js';
import { GetFileByIdHeaders } from '../managers/files.generated.js';
import { TrashFile } from '../schemas.generated.js';
import { UpdateFileByIdRequestBody } from '../managers/files.generated.js';
import { CopyFileRequestBody } from '../managers/files.generated.js';
import { CopyFileRequestBodyParentField } from '../managers/files.generated.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { readByteStream } from '../utils.js';
import { bufferEquals } from '../utils.js';
import { ByteStream } from '../utils.js';
import { uploadNewFile } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
export async function uploadFile(
  fileName: string,
  fileStream: ByteStream
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
test('testGetFileThumbnail', async function testGetFileThumbnail(): Promise<any> {
  const thumbnailFileName: string = getUuid();
  const thumbnailContentStream: ByteStream = generateByteStream(1024 * 1024);
  const thumbnailFile: FileFull = await uploadFile(
    thumbnailFileName,
    thumbnailContentStream
  );
  if (
    !!(
      bufferEquals(
        await readByteStream(
          await client.files.getFileThumbnailById(
            thumbnailFile.id,
            'png' as GetFileThumbnailByIdExtension
          )
        ),
        await readByteStream(thumbnailContentStream)
      ) == true
    )
  ) {
    throw new Error(String('Assertion failed'));
  }
  await client.files.deleteFileById(thumbnailFile.id);
});
test('testGetFileFullExtraFields', async function testGetFileFullExtraFields(): Promise<any> {
  const newFileName: string = getUuid();
  const fileStream: ByteStream = generateByteStream(1024 * 1024);
  const uploadedFile: FileFull = await uploadFile(newFileName, fileStream);
  const file: FileFull = await client.files.getFileById(uploadedFile.id, {
    fields: ['is_externally_owned' as '', 'has_collaborations' as ''],
  } satisfies GetFileByIdQueryParams);
  if (!(file.isExternallyOwned == false)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(file.hasCollaborations == false)) {
    throw new Error(String('Assertion failed'));
  }
  await client.files.deleteFileById(file.id);
});
test('testCreateGetAndDeleteFile', async function testCreateGetAndDeleteFile(): Promise<any> {
  const newFileName: string = getUuid();
  const updatedContentStream: ByteStream = generateByteStream(1024 * 1024);
  const uploadedFile: FileFull = await uploadFile(
    newFileName,
    updatedContentStream
  );
  const file: FileFull = await client.files.getFileById(uploadedFile.id);
  await expect(async () => {
    await client.files.getFileById(
      uploadedFile.id,
      { fields: ['name' as ''] } satisfies GetFileByIdQueryParams,
      new GetFileByIdHeaders({ extraHeaders: { ['if-none-match']: file.etag } })
    );
  }).rejects.toThrow();
  if (!(file.name == newFileName)) {
    throw new Error(String('Assertion failed'));
  }
  await client.files.deleteFileById(uploadedFile.id);
  const trashedFile: TrashFile = await client.trashedFiles.getTrashedFileById(
    uploadedFile.id
  );
  if (!(file.id == trashedFile.id)) {
    throw new Error(String('Assertion failed'));
  }
});
test('testUpdateFile', async function testUpdateFile(): Promise<any> {
  const fileToUpdate: FileFull = await uploadNewFile();
  const updatedName: string = getUuid();
  const updatedFile: FileFull = await client.files.updateFileById(
    fileToUpdate.id,
    {
      name: updatedName,
      description: 'Updated description',
    } satisfies UpdateFileByIdRequestBody
  );
  if (!(updatedFile.name == updatedName)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(updatedFile.description == 'Updated description')) {
    throw new Error(String('Assertion failed'));
  }
  await client.files.deleteFileById(updatedFile.id);
});
test('testCopyFile', async function testCopyFile(): Promise<any> {
  const fileOrigin: FileFull = await uploadNewFile();
  const copiedFileName: string = getUuid();
  const copiedFile: FileFull = await client.files.copyFile(fileOrigin.id, {
    parent: { id: '0' } satisfies CopyFileRequestBodyParentField,
    name: copiedFileName,
  } satisfies CopyFileRequestBody);
  if (!(copiedFile.parent!.id == '0')) {
    throw new Error(String('Assertion failed'));
  }
  if (!(copiedFile.name == copiedFileName)) {
    throw new Error(String('Assertion failed'));
  }
  await client.files.deleteFileById(fileOrigin.id);
  await client.files.deleteFileById(copiedFile.id);
});
export {};
