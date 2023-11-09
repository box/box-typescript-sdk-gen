import { serializeFileRequest } from '../schemas.generated.js';
import { deserializeFileRequest } from '../schemas.generated.js';
import { serializeFileRequestCopyRequest } from '../schemas.generated.js';
import { deserializeFileRequestCopyRequest } from '../schemas.generated.js';
import { serializeFileRequestCopyRequestFolderField } from '../schemas.generated.js';
import { deserializeFileRequestCopyRequestFolderField } from '../schemas.generated.js';
import { serializeFileRequestCopyRequestFolderFieldTypeField } from '../schemas.generated.js';
import { deserializeFileRequestCopyRequestFolderFieldTypeField } from '../schemas.generated.js';
import { serializeFileRequestUpdateRequest } from '../schemas.generated.js';
import { deserializeFileRequestUpdateRequest } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileRequest } from '../schemas.generated.js';
import { FileRequestCopyRequest } from '../schemas.generated.js';
import { FileRequestCopyRequestFolderField } from '../schemas.generated.js';
import { FileRequestCopyRequestFolderFieldTypeField } from '../schemas.generated.js';
import { FileRequestUpdateRequest } from '../schemas.generated.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
test('testGetCopyUpdateDeleteFileRequest', async function testGetCopyUpdateDeleteFileRequest(): Promise<any> {
  const fileRequestId: string = getEnvVar('BOX_FILE_REQUEST_ID');
  const userId: string = getEnvVar('USER_ID');
  const client: BoxClient = await getDefaultClientAsUser(userId);
  const fileRequest: FileRequest = await client.fileRequests.getFileRequestById(
    fileRequestId
  );
  if (!(fileRequest.id == fileRequestId)) {
    throw 'Assertion failed';
  }
  if (!((toString(fileRequest.type) as string) == 'file_request')) {
    throw 'Assertion failed';
  }
  const copiedFileRequest: FileRequest =
    await client.fileRequests.createFileRequestCopy(fileRequestId, {
      folder: {
        id: fileRequest.folder.id,
        type: 'folder' as FileRequestCopyRequestFolderFieldTypeField,
      } satisfies FileRequestCopyRequestFolderField,
    } satisfies FileRequestCopyRequest);
  if (!!(copiedFileRequest.id == fileRequestId)) {
    throw 'Assertion failed';
  }
  if (!(copiedFileRequest.title == fileRequest.title)) {
    throw 'Assertion failed';
  }
  if (!(copiedFileRequest.description == fileRequest.description)) {
    throw 'Assertion failed';
  }
  const updatedFileRequest: FileRequest =
    await client.fileRequests.updateFileRequestById(copiedFileRequest.id, {
      title: 'updated title',
      description: 'updated description',
    } satisfies FileRequestUpdateRequest);
  if (!(updatedFileRequest.id == copiedFileRequest.id)) {
    throw 'Assertion failed';
  }
  if (!(updatedFileRequest.title == 'updated title')) {
    throw 'Assertion failed';
  }
  if (!(updatedFileRequest.description == 'updated description')) {
    throw 'Assertion failed';
  }
  await client.fileRequests.deleteFileRequestById(updatedFileRequest.id);
  expect(async () => {
    await client.fileRequests.getFileRequestById(updatedFileRequest.id);
  }).rejects.toThrow();
});
export {};
