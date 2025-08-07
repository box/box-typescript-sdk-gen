import { UpdateFileWatermarkRequestBodyWatermarkField } from '../managers/fileWatermarks.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateGetDeleteFileWatermark', async function testCreateGetDeleteFileWatermark() {
    const fileName = ''.concat(getUuid(), '.txt');
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: fileName,
            parent: { id: '0' },
        },
        file: generateByteStream(10),
    });
    const file = uploadedFiles.entries[0];
    const createdWatermark = await client.fileWatermarks.updateFileWatermark(file.id, {
        watermark: new UpdateFileWatermarkRequestBodyWatermarkField({
            imprint: 'default',
        }),
    });
    const watermark = await client.fileWatermarks.getFileWatermark(file.id);
    await client.fileWatermarks.deleteFileWatermark(file.id);
    await expect(async () => {
        await client.fileWatermarks.getFileWatermark(file.id);
    }).rejects.toThrow();
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=fileWatermarks.generated.test.js.map