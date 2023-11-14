import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { serializeWatermark } from '../schemas.generated.js';
import { deserializeWatermark } from '../schemas.generated.js';
import { serializeUpdateFolderWatermarkRequestBodyArg } from '../managers/folderWatermarks.generated.js';
import { deserializeUpdateFolderWatermarkRequestBodyArg } from '../managers/folderWatermarks.generated.js';
import { serializeUpdateFolderWatermarkRequestBodyArgWatermarkField } from '../managers/folderWatermarks.generated.js';
import { deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField } from '../managers/folderWatermarks.generated.js';
import { serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField } from '../managers/folderWatermarks.generated.js';
import { deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField } from '../managers/folderWatermarks.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { Watermark } from '../schemas.generated.js';
import { UpdateFolderWatermarkRequestBodyArg } from '../managers/folderWatermarks.generated.js';
import { UpdateFolderWatermarkRequestBodyArgWatermarkField } from '../managers/folderWatermarks.generated.js';
import { UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField } from '../managers/folderWatermarks.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testCreateGetDeleteFolderWatermark', async function testCreateGetDeleteFolderWatermark(): Promise<any> {
  const folderName: string = getUuid();
  const folder: FolderFull = await client.folders.createFolder({
    name: folderName,
    parent: { id: '0' } satisfies CreateFolderRequestBodyArgParentField,
  } satisfies CreateFolderRequestBodyArg);
  const createdWatermark: Watermark =
    await client.folderWatermarks.updateFolderWatermark(folder.id, {
      watermark: {
        imprint:
          'default' as UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField,
      } satisfies UpdateFolderWatermarkRequestBodyArgWatermarkField,
    } satisfies UpdateFolderWatermarkRequestBodyArg);
  const watermark: Watermark = await client.folderWatermarks.getFolderWatermark(
    folder.id
  );
  await client.folderWatermarks.deleteFolderWatermark(folder.id);
  expect(async () => {
    await client.folderWatermarks.getFolderWatermark(folder.id);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
