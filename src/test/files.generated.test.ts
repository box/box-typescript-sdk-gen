import { serializeFile } from '../schemas.generated.js';
import { deserializeFile } from '../schemas.generated.js';
import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeGetFileThumbnailByIdExtensionArg } from '../managers/files.generated.js';
import { deserializeGetFileThumbnailByIdExtensionArg } from '../managers/files.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeTrashFile } from '../schemas.generated.js';
import { deserializeTrashFile } from '../schemas.generated.js';
import { serializeUpdateFileByIdRequestBodyArg } from '../managers/files.generated.js';
import { deserializeUpdateFileByIdRequestBodyArg } from '../managers/files.generated.js';
import { serializeCopyFileRequestBodyArg } from '../managers/files.generated.js';
import { deserializeCopyFileRequestBodyArg } from '../managers/files.generated.js';
import { serializeCopyFileRequestBodyArgParentField } from '../managers/files.generated.js';
import { deserializeCopyFileRequestBodyArgParentField } from '../managers/files.generated.js';
import { BoxClient } from '../client.generated.js';
import { File } from '../schemas.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { GetFileThumbnailByIdExtensionArg } from '../managers/files.generated.js';
import { FileFull } from '../schemas.generated.js';
import { GetFileByIdQueryParamsArg } from '../managers/files.generated.js';
import { GetFileByIdHeadersArg } from '../managers/files.generated.js';
import { TrashFile } from '../schemas.generated.js';
import { UpdateFileByIdRequestBodyArg } from '../managers/files.generated.js';
import { CopyFileRequestBodyArg } from '../managers/files.generated.js';
import { CopyFileRequestBodyArgParentField } from '../managers/files.generated.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { readByteStream } from '../utils.js';
import { bufferEquals } from '../utils.js';
import { ByteStream } from '../utils.js';
import { uploadNewFile } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
const client: BoxClient = getDefaultClient();
export async function uploadFile(
  fileName: string,
  fileStream: ByteStream
): Promise<File> {
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: fileName,
      parent: {
        id: '0',
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: fileStream,
  } satisfies UploadFileRequestBodyArg);
  return uploadedFiles.entries![0];
}
test('testGetFileThumbnail', async function testGetFileThumbnail(): Promise<any> {
  const thumbnailFileName: string = getUuid();
  const thumbnailContentStream: ByteStream = generateByteStream(1048576);
  const thumbnailFile: File = await uploadFile(
    thumbnailFileName,
    thumbnailContentStream
  );
  if (
    !!(
      bufferEquals(
        await readByteStream(
          await client.files.getFileThumbnailById(
            thumbnailFile.id,
            'png' as GetFileThumbnailByIdExtensionArg
          )
        ),
        await readByteStream(thumbnailContentStream)
      ) == true
    )
  ) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(thumbnailFile.id);
});
test('testGetFileFullExtraFields', async function testGetFileFullExtraFields(): Promise<any> {
  const newFileName: string = getUuid();
  const fileContent: ByteStream = generateByteStream(1048576);
  const uploadedFile: File = await uploadFile(newFileName, fileContent);
  const file: FileFull = await client.files.getFileById(uploadedFile.id, {
    fields: ['is_externally_owned' as '', 'has_collaborations' as ''],
  } satisfies GetFileByIdQueryParamsArg);
  if (!(file.isExternallyOwned == false)) {
    throw 'Assertion failed';
  }
  if (!(file.hasCollaborations == false)) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(file.id);
});
test('testCreateGetAndDeleteFile', async function testCreateGetAndDeleteFile(): Promise<any> {
  const newFileName: string = getUuid();
  const updatedContentStream: ByteStream = generateByteStream(1048576);
  const uploadedFile: File = await uploadFile(
    newFileName,
    updatedContentStream
  );
  const file: FileFull = await client.files.getFileById(uploadedFile.id);
  expect(async () => {
    await client.files.getFileById(
      uploadedFile.id,
      { fields: ['name' as ''] } satisfies GetFileByIdQueryParamsArg,
      new GetFileByIdHeadersArg({
        extraHeaders: { ['if-none-match']: file.etag },
      })
    );
  }).rejects.toThrow();
  if (!(file.name == newFileName)) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(uploadedFile.id);
  const trashedFile: TrashFile = await client.trashedFiles.getFileTrash(
    uploadedFile.id
  );
  if (!(file.id == trashedFile.id)) {
    throw 'Assertion failed';
  }
});
test('testUpdateFile', async function testUpdateFile(): Promise<any> {
  const fileToUpdate: File = await uploadNewFile();
  const updatedName: string = getUuid();
  const updatedFile: FileFull = await client.files.updateFileById(
    fileToUpdate.id,
    {
      name: updatedName,
      description: 'Updated description',
    } satisfies UpdateFileByIdRequestBodyArg
  );
  if (!(updatedFile.name == updatedName)) {
    throw 'Assertion failed';
  }
  if (!(updatedFile.description == 'Updated description')) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(updatedFile.id);
});
test('testCopyFile', async function testCopyFile(): Promise<any> {
  const fileOrigin: File = await uploadNewFile();
  const copiedFileName: string = getUuid();
  const copiedFile: FileFull = await client.files.copyFile(fileOrigin.id, {
    parent: { id: '0' } satisfies CopyFileRequestBodyArgParentField,
    name: copiedFileName,
  } satisfies CopyFileRequestBodyArg);
  if (!(copiedFile.parent!.id == '0')) {
    throw 'Assertion failed';
  }
  if (!(copiedFile.name == copiedFileName)) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(fileOrigin.id);
  await client.files.deleteFileById(copiedFile.id);
});
export {};
