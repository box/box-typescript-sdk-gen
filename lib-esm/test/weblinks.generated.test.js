import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('test_createGetDeleteWeblink', async function test_createGetDeleteWeblink() {
    const url = 'https://www.box.com';
    const parent = await client.folders.getFolderById('0');
    const name = getUuid();
    const description = 'Weblink description';
    const password = 'super-secret-password';
    const weblink = await client.webLinks.createWebLink({
        url: url,
        parent: { id: parent.id },
        name: name,
        description: description,
    });
    if (!(weblink.url == url)) {
        throw new Error('Assertion failed');
    }
    if (!(weblink.parent.id == parent.id)) {
        throw new Error('Assertion failed');
    }
    if (!(weblink.name == name)) {
        throw new Error('Assertion failed');
    }
    if (!(weblink.description == description)) {
        throw new Error('Assertion failed');
    }
    const weblinkById = await client.webLinks.getWebLinkById(weblink.id);
    if (!(weblinkById.id == weblink.id)) {
        throw new Error('Assertion failed');
    }
    if (!(weblinkById.url == url)) {
        throw new Error('Assertion failed');
    }
    const updatedName = getUuid();
    const updatedWeblink = await client.webLinks.updateWebLinkById(weblink.id, {
        requestBody: {
            name: updatedName,
            sharedLink: {
                access: 'open',
                password: password,
            },
        },
    });
    if (!(updatedWeblink.name == updatedName)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(updatedWeblink.sharedLink.access) == 'open')) {
        throw new Error('Assertion failed');
    }
    await client.webLinks.deleteWebLinkById(weblink.id);
    const deletedWeblink = await client.webLinks.getWebLinkById(weblink.id);
    if (!(toString(deletedWeblink.itemStatus) == 'trashed')) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=weblinks.generated.test.js.map