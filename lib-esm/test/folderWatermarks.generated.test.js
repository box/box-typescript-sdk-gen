import { UpdateFolderWatermarkRequestBodyWatermarkField } from '../managers/folderWatermarks.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateGetDeleteFolderWatermark', async function testCreateGetDeleteFolderWatermark() {
    const folderName = getUuid();
    const folder = await client.folders.createFolder({
        name: folderName,
        parent: { id: '0' },
    });
    const createdWatermark = await client.folderWatermarks.updateFolderWatermark(folder.id, {
        watermark: new UpdateFolderWatermarkRequestBodyWatermarkField({
            imprint: 'default',
        }),
    });
    const watermark = await client.folderWatermarks.getFolderWatermark(folder.id);
    await client.folderWatermarks.deleteFolderWatermark(folder.id);
    await expect(async () => {
        await client.folderWatermarks.getFolderWatermark(folder.id);
    }).rejects.toThrow();
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=folderWatermarks.generated.test.js.map