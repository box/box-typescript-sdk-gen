import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
export const client = getDefaultClient();
test('testListTrashedItems', async function testListTrashedItems() {
    const file = await uploadNewFile();
    await client.files.deleteFileById(file.id);
    const trashedItems = await client.trashedItems.getTrashedItems();
    if (!(trashedItems.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=trashedItems.generated.test.js.map