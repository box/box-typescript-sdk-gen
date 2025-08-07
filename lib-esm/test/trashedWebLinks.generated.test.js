import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testTrashedWebLinks', async function testTrashedWebLinks() {
    const url = 'https://www.box.com';
    const parent = await client.folders.getFolderById('0');
    const name = getUuid();
    const description = 'Weblink description';
    const weblink = await client.webLinks.createWebLink({
        url: url,
        parent: { id: parent.id },
        name: name,
        description: description,
    });
    await client.webLinks.deleteWebLinkById(weblink.id);
    const fromTrash = await client.trashedWebLinks.getTrashedWebLinkById(weblink.id);
    if (!(fromTrash.id == weblink.id)) {
        throw new Error('Assertion failed');
    }
    if (!(fromTrash.name == weblink.name)) {
        throw new Error('Assertion failed');
    }
    const fromApiAfterTrashed = await client.webLinks.getWebLinkById(weblink.id);
    if (!(toString(fromApiAfterTrashed.itemStatus) == 'trashed')) {
        throw new Error('Assertion failed');
    }
    const restoredWeblink = await client.trashedWebLinks.restoreWeblinkFromTrash(weblink.id);
    const fromApi = await client.webLinks.getWebLinkById(weblink.id);
    if (!(restoredWeblink.id == fromApi.id)) {
        throw new Error('Assertion failed');
    }
    if (!(restoredWeblink.name == fromApi.name)) {
        throw new Error('Assertion failed');
    }
    await client.webLinks.deleteWebLinkById(weblink.id);
    await client.trashedWebLinks.deleteTrashedWebLinkById(weblink.id);
    await expect(async () => {
        await client.trashedWebLinks.getTrashedWebLinkById(weblink.id);
    }).rejects.toThrow();
});
//# sourceMappingURL=trashedWebLinks.generated.test.js.map