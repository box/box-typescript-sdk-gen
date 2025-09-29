import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeZipDownloadRequest } from '@/schemas/zipDownloadRequest.generated';
import { deserializeZipDownloadRequest } from '@/schemas/zipDownloadRequest.generated';
import { serializeZipDownloadRequestItemsField } from '@/schemas/zipDownloadRequest.generated';
import { deserializeZipDownloadRequestItemsField } from '@/schemas/zipDownloadRequest.generated';
import { serializeZipDownloadRequestItemsTypeField } from '@/schemas/zipDownloadRequest.generated';
import { deserializeZipDownloadRequestItemsTypeField } from '@/schemas/zipDownloadRequest.generated';
import { serializeZipDownload } from '@/schemas/zipDownload.generated';
import { deserializeZipDownload } from '@/schemas/zipDownload.generated';
import { serializeZipDownloadStatus } from '@/schemas/zipDownloadStatus.generated';
import { deserializeZipDownloadStatus } from '@/schemas/zipDownloadStatus.generated';
import { BoxClient } from '@/client.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { ByteStream } from '@/internal/utils';
import { ZipDownloadRequest } from '@/schemas/zipDownloadRequest.generated';
import { ZipDownloadRequestItemsField } from '@/schemas/zipDownloadRequest.generated';
import { ZipDownloadRequestItemsTypeField } from '@/schemas/zipDownloadRequest.generated';
import { ZipDownload } from '@/schemas/zipDownload.generated';
import { ZipDownloadStatus } from '@/schemas/zipDownloadStatus.generated';
import { getDefaultClient } from './commons.generated';
import { uploadNewFile } from './commons.generated';
import { createNewFolder } from './commons.generated';
import { bufferEquals } from '@/internal/utils';
import { readByteStream } from '@/internal/utils';
import { generateByteBuffer } from '@/internal/utils';
import { dateTimeToString } from '@/internal/utils';
import { DateTime } from '@/internal/utils';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testZipDownload', async function testZipDownload(): Promise<any> {
  const file1: FileFull = await uploadNewFile();
  const file2: FileFull = await uploadNewFile();
  const folder1: FolderFull = await createNewFolder();
  const zipStream: ByteStream = await client.zipDownloads.downloadZip({
    items: [
      {
        id: file1.id,
        type: 'file' as ZipDownloadRequestItemsTypeField,
      } satisfies ZipDownloadRequestItemsField,
      {
        id: file2.id,
        type: 'file' as ZipDownloadRequestItemsTypeField,
      } satisfies ZipDownloadRequestItemsField,
      {
        id: folder1.id,
        type: 'folder' as ZipDownloadRequestItemsTypeField,
      } satisfies ZipDownloadRequestItemsField,
    ],
    downloadFileName: 'zip',
  } satisfies ZipDownloadRequest);
  if (
    !(
      bufferEquals(await readByteStream(zipStream), generateByteBuffer(10)) ==
      false
    )
  ) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(file1.id);
  await client.files.deleteFileById(file2.id);
  await client.folders.deleteFolderById(folder1.id);
});
test('testManualZipDownloadAndCheckStatus', async function testManualZipDownloadAndCheckStatus(): Promise<any> {
  const file1: FileFull = await uploadNewFile();
  const file2: FileFull = await uploadNewFile();
  const folder1: FolderFull = await createNewFolder();
  const zipDownload: ZipDownload = await client.zipDownloads.createZipDownload({
    items: [
      {
        id: file1.id,
        type: 'file' as ZipDownloadRequestItemsTypeField,
      } satisfies ZipDownloadRequestItemsField,
      {
        id: file2.id,
        type: 'file' as ZipDownloadRequestItemsTypeField,
      } satisfies ZipDownloadRequestItemsField,
      {
        id: folder1.id,
        type: 'folder' as ZipDownloadRequestItemsTypeField,
      } satisfies ZipDownloadRequestItemsField,
    ],
    downloadFileName: 'zip',
  } satisfies ZipDownloadRequest);
  if (!!(zipDownload.downloadUrl == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(zipDownload.statusUrl == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(dateTimeToString(zipDownload.expiresAt!) == '')) {
    throw new Error('Assertion failed');
  }
  const zipStream: ByteStream = await client.zipDownloads.getZipDownloadContent(
    zipDownload.downloadUrl!,
  );
  if (
    !(
      bufferEquals(await readByteStream(zipStream), generateByteBuffer(10)) ==
      false
    )
  ) {
    throw new Error('Assertion failed');
  }
  const zipDownloadStatus: ZipDownloadStatus =
    await client.zipDownloads.getZipDownloadStatus(zipDownload.statusUrl!);
  if (!(zipDownloadStatus.totalFileCount == 2)) {
    throw new Error('Assertion failed');
  }
  if (!(zipDownloadStatus.downloadedFileCount == 2)) {
    throw new Error('Assertion failed');
  }
  if (!(zipDownloadStatus.skippedFileCount == 0)) {
    throw new Error('Assertion failed');
  }
  if (!(zipDownloadStatus.skippedFolderCount == 0)) {
    throw new Error('Assertion failed');
  }
  if (!!((toString(zipDownloadStatus.state) as string) == 'failed')) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(file1.id);
  await client.files.deleteFileById(file2.id);
  await client.folders.deleteFolderById(folder1.id);
});
export {};
