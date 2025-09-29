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
import { serializeFileVersions } from '@/schemas/fileVersions.generated';
import { deserializeFileVersions } from '@/schemas/fileVersions.generated';
import { serializeFileVersionFull } from '@/schemas/fileVersionFull.generated';
import { deserializeFileVersionFull } from '@/schemas/fileVersionFull.generated';
import { serializePromoteFileVersionRequestBody } from '@/managers/fileVersions.generated';
import { deserializePromoteFileVersionRequestBody } from '@/managers/fileVersions.generated';
import { serializePromoteFileVersionRequestBodyTypeField } from '@/managers/fileVersions.generated';
import { deserializePromoteFileVersionRequestBodyTypeField } from '@/managers/fileVersions.generated';
import { serializeUpdateFileVersionByIdRequestBody } from '@/managers/fileVersions.generated';
import { deserializeUpdateFileVersionByIdRequestBody } from '@/managers/fileVersions.generated';
import { PromoteFileVersionOptionalsInput } from '@/managers/fileVersions.generated';
import { GetFileVersionByIdOptionalsInput } from '@/managers/fileVersions.generated';
import { UpdateFileVersionByIdOptionalsInput } from '@/managers/fileVersions.generated';
import { PromoteFileVersionOptionals } from '@/managers/fileVersions.generated';
import { GetFileVersionByIdOptionals } from '@/managers/fileVersions.generated';
import { UpdateFileVersionByIdOptionals } from '@/managers/fileVersions.generated';
import { BoxClient } from '@/client.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { UploadFileVersionRequestBody } from '@/managers/uploads.generated';
import { UploadFileVersionRequestBodyAttributesField } from '@/managers/uploads.generated';
import { FileVersions } from '@/schemas/fileVersions.generated';
import { FileVersionFull } from '@/schemas/fileVersionFull.generated';
import { PromoteFileVersionRequestBody } from '@/managers/fileVersions.generated';
import { PromoteFileVersionRequestBodyTypeField } from '@/managers/fileVersions.generated';
import { GetFileVersionByIdQueryParams } from '@/managers/fileVersions.generated';
import { UpdateFileVersionByIdRequestBody } from '@/managers/fileVersions.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { createNull } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testCreateListGetPromoteFileVersion', async function testCreateListGetPromoteFileVersion(): Promise<any> {
  const oldName: string = getUuid();
  const newName: string = getUuid();
  const files: Files = await client.uploads.uploadFile({
    attributes: {
      name: oldName,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const file: FileFull = files.entries![0];
  if (!(file.name == oldName)) {
    throw new Error('Assertion failed');
  }
  if (!(file.size == 10)) {
    throw new Error('Assertion failed');
  }
  const newFiles: Files = await client.uploads.uploadFileVersion(file.id, {
    attributes: {
      name: newName,
    } satisfies UploadFileVersionRequestBodyAttributesField,
    file: generateByteStream(20),
  } satisfies UploadFileVersionRequestBody);
  const newFile: FileFull = newFiles.entries![0];
  if (!(newFile.name == newName)) {
    throw new Error('Assertion failed');
  }
  if (!(newFile.size == 20)) {
    throw new Error('Assertion failed');
  }
  const fileVersions: FileVersions = await client.fileVersions.getFileVersions(
    file.id,
  );
  if (!(fileVersions.totalCount == 1)) {
    throw new Error('Assertion failed');
  }
  const fileVersion: FileVersionFull =
    await client.fileVersions.getFileVersionById(
      file.id,
      fileVersions.entries![0].id,
    );
  if (!(fileVersion.id == fileVersions.entries![0].id)) {
    throw new Error('Assertion failed');
  }
  await client.fileVersions.promoteFileVersion(file.id, {
    requestBody: {
      id: fileVersions.entries![0].id,
      type: 'file_version' as PromoteFileVersionRequestBodyTypeField,
    } satisfies PromoteFileVersionRequestBody,
  } satisfies PromoteFileVersionOptionalsInput);
  const fileWithPromotedVersion: FileFull = await client.files.getFileById(
    file.id,
  );
  if (!(fileWithPromotedVersion.name == oldName)) {
    throw new Error('Assertion failed');
  }
  if (!(fileWithPromotedVersion.size == 10)) {
    throw new Error('Assertion failed');
  }
  await client.fileVersions.deleteFileVersionById(file.id, fileVersion.id);
  await client.files.deleteFileById(file.id);
});
test('testRemoveAndRestoreFileVersion', async function testRemoveAndRestoreFileVersion(): Promise<any> {
  const oldName: string = getUuid();
  const newName: string = getUuid();
  const files: Files = await client.uploads.uploadFile({
    attributes: {
      name: oldName,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const file: FileFull = files.entries![0];
  await client.uploads.uploadFileVersion(file.id, {
    attributes: {
      name: newName,
    } satisfies UploadFileVersionRequestBodyAttributesField,
    file: generateByteStream(20),
  } satisfies UploadFileVersionRequestBody);
  const fileVersions: FileVersions = await client.fileVersions.getFileVersions(
    file.id,
  );
  if (!(fileVersions.totalCount == 1)) {
    throw new Error('Assertion failed');
  }
  const fileVersion: FileVersionFull =
    await client.fileVersions.getFileVersionById(
      file.id,
      fileVersions.entries![0].id,
      {
        queryParams: {
          fields: ['trashed_at', 'trashed_by', 'restored_at', 'restored_by'],
        } satisfies GetFileVersionByIdQueryParams,
      } satisfies GetFileVersionByIdOptionalsInput,
    );
  if (!(fileVersion.trashedAt == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(fileVersion.trashedBy == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(fileVersion.restoredAt == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(fileVersion.restoredBy == void 0)) {
    throw new Error('Assertion failed');
  }
  await client.fileVersions.deleteFileVersionById(file.id, fileVersion.id);
  const deletedFileVersion: FileVersionFull =
    await client.fileVersions.getFileVersionById(
      file.id,
      fileVersions.entries![0].id,
      {
        queryParams: {
          fields: ['trashed_at', 'trashed_by', 'restored_at', 'restored_by'],
        } satisfies GetFileVersionByIdQueryParams,
      } satisfies GetFileVersionByIdOptionalsInput,
    );
  if (!!(deletedFileVersion.trashedAt == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(deletedFileVersion.trashedBy == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(deletedFileVersion.restoredAt == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(deletedFileVersion.restoredBy == void 0)) {
    throw new Error('Assertion failed');
  }
  await client.fileVersions.updateFileVersionById(file.id, fileVersion.id, {
    requestBody: {
      trashedAt: createNull(),
    } satisfies UpdateFileVersionByIdRequestBody,
  } satisfies UpdateFileVersionByIdOptionalsInput);
  const restoredFileVersion: FileVersionFull =
    await client.fileVersions.getFileVersionById(
      file.id,
      fileVersions.entries![0].id,
      {
        queryParams: {
          fields: ['trashed_at', 'trashed_by', 'restored_at', 'restored_by'],
        } satisfies GetFileVersionByIdQueryParams,
      } satisfies GetFileVersionByIdOptionalsInput,
    );
  if (!(restoredFileVersion.trashedAt == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!(restoredFileVersion.trashedBy == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(restoredFileVersion.restoredAt == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(restoredFileVersion.restoredBy == void 0)) {
    throw new Error('Assertion failed');
  }
  await client.fileVersions.deleteFileVersionById(file.id, fileVersion.id);
  await client.files.deleteFileById(file.id);
});
export {};
