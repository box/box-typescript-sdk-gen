import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeWatermark } from '@/schemas/watermark.generated';
import { deserializeWatermark } from '@/schemas/watermark.generated';
import { serializeUpdateFileWatermarkRequestBody } from '@/managers/fileWatermarks.generated';
import { deserializeUpdateFileWatermarkRequestBody } from '@/managers/fileWatermarks.generated';
import { serializeUpdateFileWatermarkRequestBodyWatermarkField } from '@/managers/fileWatermarks.generated';
import { deserializeUpdateFileWatermarkRequestBodyWatermarkField } from '@/managers/fileWatermarks.generated';
import { serializeUpdateFileWatermarkRequestBodyWatermarkImprintField } from '@/managers/fileWatermarks.generated';
import { deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField } from '@/managers/fileWatermarks.generated';
import { BoxClient } from '@/client.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { Watermark } from '@/schemas/watermark.generated';
import { UpdateFileWatermarkRequestBody } from '@/managers/fileWatermarks.generated';
import { UpdateFileWatermarkRequestBodyWatermarkField } from '@/managers/fileWatermarks.generated';
import { UpdateFileWatermarkRequestBodyWatermarkImprintField } from '@/managers/fileWatermarks.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testCreateGetDeleteFileWatermark', async function testCreateGetDeleteFileWatermark(): Promise<any> {
  const fileName: string = ''.concat(getUuid(), '.txt') as string;
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: fileName,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const file: FileFull = uploadedFiles.entries![0];
  const createdWatermark: Watermark =
    await client.fileWatermarks.updateFileWatermark(file.id, {
      watermark: new UpdateFileWatermarkRequestBodyWatermarkField({
        imprint:
          'default' as UpdateFileWatermarkRequestBodyWatermarkImprintField,
      }),
    } satisfies UpdateFileWatermarkRequestBody);
  const watermark: Watermark = await client.fileWatermarks.getFileWatermark(
    file.id,
  );
  await client.fileWatermarks.deleteFileWatermark(file.id);
  await expect(async () => {
    await client.fileWatermarks.getFileWatermark(file.id);
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
export {};
