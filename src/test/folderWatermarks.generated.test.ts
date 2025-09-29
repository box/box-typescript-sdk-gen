import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { serializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { serializeWatermark } from '@/schemas/watermark.generated';
import { deserializeWatermark } from '@/schemas/watermark.generated';
import { serializeUpdateFolderWatermarkRequestBody } from '@/managers/folderWatermarks.generated';
import { deserializeUpdateFolderWatermarkRequestBody } from '@/managers/folderWatermarks.generated';
import { serializeUpdateFolderWatermarkRequestBodyWatermarkField } from '@/managers/folderWatermarks.generated';
import { deserializeUpdateFolderWatermarkRequestBodyWatermarkField } from '@/managers/folderWatermarks.generated';
import { serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField } from '@/managers/folderWatermarks.generated';
import { deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField } from '@/managers/folderWatermarks.generated';
import { BoxClient } from '@/client.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { CreateFolderRequestBody } from '@/managers/folders.generated';
import { CreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { Watermark } from '@/schemas/watermark.generated';
import { UpdateFolderWatermarkRequestBody } from '@/managers/folderWatermarks.generated';
import { UpdateFolderWatermarkRequestBodyWatermarkField } from '@/managers/folderWatermarks.generated';
import { UpdateFolderWatermarkRequestBodyWatermarkImprintField } from '@/managers/folderWatermarks.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testCreateGetDeleteFolderWatermark', async function testCreateGetDeleteFolderWatermark(): Promise<any> {
  const folderName: string = getUuid();
  const folder: FolderFull = await client.folders.createFolder({
    name: folderName,
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  const createdWatermark: Watermark =
    await client.folderWatermarks.updateFolderWatermark(folder.id, {
      watermark: new UpdateFolderWatermarkRequestBodyWatermarkField({
        imprint:
          'default' as UpdateFolderWatermarkRequestBodyWatermarkImprintField,
      }),
    } satisfies UpdateFolderWatermarkRequestBody);
  const watermark: Watermark = await client.folderWatermarks.getFolderWatermark(
    folder.id,
  );
  await client.folderWatermarks.deleteFolderWatermark(folder.id);
  await expect(async () => {
    await client.folderWatermarks.getFolderWatermark(folder.id);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
