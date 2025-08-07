import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { createNull } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testSharedLinksWebLinks', async function testSharedLinksWebLinks() {
    const parent = await client.folders.getFolderById('0');
    const webLink = await client.webLinks.createWebLink({
        url: 'https://www.box.com',
        parent: { id: parent.id },
        name: getUuid(),
        description: 'Weblink description',
    });
    const webLinkId = webLink.id;
    await client.sharedLinksWebLinks.addShareLinkToWebLink(webLinkId, {
        sharedLink: {
            access: 'open',
            password: 'Secret123@',
        },
    }, { fields: 'shared_link' });
    const webLinkFromApi = await client.sharedLinksWebLinks.getSharedLinkForWebLink(webLinkId, {
        fields: 'shared_link',
    });
    if (!(toString(webLinkFromApi.sharedLink.access) == 'open')) {
        throw new Error('Assertion failed');
    }
    const userId = getEnvVar('USER_ID');
    const userClient = getDefaultClientWithUserSubject(userId);
    const webLinkFromSharedLinkPassword = await userClient.sharedLinksWebLinks.findWebLinkForSharedLink({}, {
        boxapi: ''.concat('shared_link=', webLinkFromApi.sharedLink.url, '&shared_link_password=Secret123@'),
    });
    if (!(webLinkId == webLinkFromSharedLinkPassword.id)) {
        throw new Error('Assertion failed');
    }
    await expect(async () => {
        await userClient.sharedLinksWebLinks.findWebLinkForSharedLink({}, {
            boxapi: ''.concat('shared_link=', webLinkFromApi.sharedLink.url, '&shared_link_password=incorrectPassword'),
        });
    }).rejects.toThrow();
    const updatedWebLink = await client.sharedLinksWebLinks.updateSharedLinkOnWebLink(webLinkId, {
        sharedLink: {
            access: 'collaborators',
        },
    }, { fields: 'shared_link' });
    if (!(toString(updatedWebLink.sharedLink.access) == 'collaborators')) {
        throw new Error('Assertion failed');
    }
    await client.sharedLinksWebLinks.removeSharedLinkFromWebLink(webLinkId, {
        sharedLink: createNull(),
    }, { fields: 'shared_link' });
    const webLinkFromApiAfterRemove = await client.sharedLinksWebLinks.getSharedLinkForWebLink(webLinkId, {
        fields: 'shared_link',
    });
    if (!(webLinkFromApiAfterRemove.sharedLink == void 0)) {
        throw new Error('Assertion failed');
    }
    await client.webLinks.deleteWebLinkById(webLinkId);
});
//# sourceMappingURL=sharedLinksWebLinks.generated.test.js.map