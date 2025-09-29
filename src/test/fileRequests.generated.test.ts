import { serializeFileRequest } from '@/schemas/fileRequest.generated';
import { deserializeFileRequest } from '@/schemas/fileRequest.generated';
import { serializeFileRequestCopyRequest } from '@/schemas/fileRequestCopyRequest.generated';
import { deserializeFileRequestCopyRequest } from '@/schemas/fileRequestCopyRequest.generated';
import { serializeFileRequestCopyRequestFolderField } from '@/schemas/fileRequestCopyRequest.generated';
import { deserializeFileRequestCopyRequestFolderField } from '@/schemas/fileRequestCopyRequest.generated';
import { serializeFileRequestCopyRequestFolderTypeField } from '@/schemas/fileRequestCopyRequest.generated';
import { deserializeFileRequestCopyRequestFolderTypeField } from '@/schemas/fileRequestCopyRequest.generated';
import { serializeFileRequestUpdateRequest } from '@/schemas/fileRequestUpdateRequest.generated';
import { deserializeFileRequestUpdateRequest } from '@/schemas/fileRequestUpdateRequest.generated';
import { BoxClient } from '@/client.generated';
import { FileRequest } from '@/schemas/fileRequest.generated';
import { FileRequestCopyRequest } from '@/schemas/fileRequestCopyRequest.generated';
import { FileRequestCopyRequestFolderField } from '@/schemas/fileRequestCopyRequest.generated';
import { FileRequestCopyRequestFolderTypeField } from '@/schemas/fileRequestCopyRequest.generated';
import { FileRequestUpdateRequest } from '@/schemas/fileRequestUpdateRequest.generated';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
test('testGetCopyUpdateDeleteFileRequest', async function testGetCopyUpdateDeleteFileRequest(): Promise<any> {
  const fileRequestId: string = getEnvVar('BOX_FILE_REQUEST_ID');
  const userId: string = getEnvVar('USER_ID');
  const client: BoxClient = getDefaultClientWithUserSubject(userId);
  const fileRequest: FileRequest =
    await client.fileRequests.getFileRequestById(fileRequestId);
  if (!(fileRequest.id == fileRequestId)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(fileRequest.type) as string) == 'file_request')) {
    throw new Error('Assertion failed');
  }
  const copiedFileRequest: FileRequest =
    await client.fileRequests.createFileRequestCopy(fileRequestId, {
      folder: {
        id: fileRequest.folder.id,
        type: 'folder' as FileRequestCopyRequestFolderTypeField,
      } satisfies FileRequestCopyRequestFolderField,
    } satisfies FileRequestCopyRequest);
  if (!!(copiedFileRequest.id == fileRequestId)) {
    throw new Error('Assertion failed');
  }
  if (!(copiedFileRequest.title == fileRequest.title)) {
    throw new Error('Assertion failed');
  }
  if (!(copiedFileRequest.description == fileRequest.description)) {
    throw new Error('Assertion failed');
  }
  const updatedFileRequest: FileRequest =
    await client.fileRequests.updateFileRequestById(copiedFileRequest.id, {
      title: 'updated title',
      description: 'updated description',
    } satisfies FileRequestUpdateRequest);
  if (!(updatedFileRequest.id == copiedFileRequest.id)) {
    throw new Error('Assertion failed');
  }
  if (!(updatedFileRequest.title == 'updated title')) {
    throw new Error('Assertion failed');
  }
  if (!(updatedFileRequest.description == 'updated description')) {
    throw new Error('Assertion failed');
  }
  await client.fileRequests.deleteFileRequestById(updatedFileRequest.id);
  await expect(async () => {
    await client.fileRequests.getFileRequestById(updatedFileRequest.id);
  }).rejects.toThrow();
});
export {};
