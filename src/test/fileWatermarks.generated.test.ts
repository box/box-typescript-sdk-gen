import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeWatermark } from '../schemas.generated.js';
import { deserializeWatermark } from '../schemas.generated.js';
import { serializeUpdateFileWatermarkRequestBodyArg } from '../managers/fileWatermarks.generated.js';
import { deserializeUpdateFileWatermarkRequestBodyArg } from '../managers/fileWatermarks.generated.js';
import { serializeUpdateFileWatermarkRequestBodyArgWatermarkField } from '../managers/fileWatermarks.generated.js';
import { deserializeUpdateFileWatermarkRequestBodyArgWatermarkField } from '../managers/fileWatermarks.generated.js';
import { serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField } from '../managers/fileWatermarks.generated.js';
import { deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField } from '../managers/fileWatermarks.generated.js';
import { BoxClient } from '../client.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Watermark } from '../schemas.generated.js';
import { UpdateFileWatermarkRequestBodyArg } from '../managers/fileWatermarks.generated.js';
import { UpdateFileWatermarkRequestBodyArgWatermarkField } from '../managers/fileWatermarks.generated.js';
import { UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField } from '../managers/fileWatermarks.generated.js';
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
test('testCreateGetDeleteFileWatermark', async function testCreateGetDeleteFileWatermark(): Promise<any> {
  const fileName: string = ''.concat(getUuid(), '.txt') as string;
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: fileName,
      parent: {
        id: '0',
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBodyArg);
  const file: FileFull = uploadedFiles.entries![0];
  const createdWatermark: Watermark =
    await client.fileWatermarks.updateFileWatermark(file.id, {
      watermark: {
        imprint:
          'default' as UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField,
      } satisfies UpdateFileWatermarkRequestBodyArgWatermarkField,
    } satisfies UpdateFileWatermarkRequestBodyArg);
  const watermark: Watermark = await client.fileWatermarks.getFileWatermark(
    file.id
  );
  await client.fileWatermarks.deleteFileWatermark(file.id);
  await expect(async () => {
    await client.fileWatermarks.getFileWatermark(file.id);
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
export {};
