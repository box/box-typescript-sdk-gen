import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeUploadFileVersionRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileVersionRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeFileVersions } from '../schemas.generated.js';
import { deserializeFileVersions } from '../schemas.generated.js';
import { serializeFileVersionFull } from '../schemas.generated.js';
import { deserializeFileVersionFull } from '../schemas.generated.js';
import { serializePromoteFileVersionRequestBodyArg } from '../managers/fileVersions.generated.js';
import { deserializePromoteFileVersionRequestBodyArg } from '../managers/fileVersions.generated.js';
import { serializePromoteFileVersionRequestBodyArgTypeField } from '../managers/fileVersions.generated.js';
import { deserializePromoteFileVersionRequestBodyArgTypeField } from '../managers/fileVersions.generated.js';
import { BoxClient } from '../client.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas.generated.js';
import { UploadFileVersionRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileVersionRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { FileVersions } from '../schemas.generated.js';
import { FileVersionFull } from '../schemas.generated.js';
import { PromoteFileVersionRequestBodyArg } from '../managers/fileVersions.generated.js';
import { PromoteFileVersionRequestBodyArgTypeField } from '../managers/fileVersions.generated.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testCreateListGetRestoreDeleteFileVersion', async function testCreateListGetRestoreDeleteFileVersion(): Promise<any> {
  const oldName: string = getUuid();
  const newName: string = getUuid();
  const files: Files = await client.uploads.uploadFile({
    attributes: {
      name: oldName,
      parent: {
        id: '0',
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBodyArg);
  const file: FileFull = files.entries![0];
  if (!(file.name == oldName)) {
    throw 'Assertion failed';
  }
  if (!(file.size == 10)) {
    throw 'Assertion failed';
  }
  const newFiles: Files = await client.uploads.uploadFileVersion(file.id, {
    attributes: {
      name: newName,
    } satisfies UploadFileVersionRequestBodyArgAttributesField,
    file: generateByteStream(20),
  } satisfies UploadFileVersionRequestBodyArg);
  const newFile: FileFull = newFiles.entries![0];
  if (!(newFile.name == newName)) {
    throw 'Assertion failed';
  }
  if (!(newFile.size == 20)) {
    throw 'Assertion failed';
  }
  const fileVersions: FileVersions = await client.fileVersions.getFileVersions(
    file.id
  );
  if (!(fileVersions.totalCount == 1)) {
    throw 'Assertion failed';
  }
  const fileVersion: FileVersionFull =
    await client.fileVersions.getFileVersionById(
      file.id,
      fileVersions.entries![0].id
    );
  if (!(fileVersion.id == fileVersions.entries![0].id)) {
    throw 'Assertion failed';
  }
  await client.fileVersions.promoteFileVersion(file.id, {
    id: fileVersions.entries![0].id,
    type: 'file_version' as PromoteFileVersionRequestBodyArgTypeField,
  } satisfies PromoteFileVersionRequestBodyArg);
  const fileRestored: FileFull = await client.files.getFileById(file.id);
  if (!(fileRestored.name == oldName)) {
    throw 'Assertion failed';
  }
  if (!(fileRestored.size == 10)) {
    throw 'Assertion failed';
  }
  const fileVersionsRestored: FileVersions =
    await client.fileVersions.getFileVersions(file.id);
  await client.fileVersions.deleteFileVersionById(
    file.id,
    fileVersionsRestored.entries![0].id
  );
  await client.fileVersions.getFileVersions(file.id);
  await client.files.deleteFileById(file.id);
});
export {};
