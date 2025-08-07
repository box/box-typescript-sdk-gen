import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testTransferUserContent', async function testTransferUserContent() {
    const sourceUserName = getUuid();
    const sourceUser = await client.users.createUser({
        name: sourceUserName,
        isPlatformAccessOnly: true,
    });
    const targetUser = await client.users.getUserMe();
    const transferredFolder = await client.transfer.transferOwnedFolder(sourceUser.id, {
        ownedBy: {
            id: targetUser.id,
        },
    }, {
        queryParams: { notify: false },
    });
    if (!(transferredFolder.ownedBy.id == targetUser.id)) {
        throw new Error('Assertion failed');
    }
    await client.folders.deleteFolderById(transferredFolder.id, {
        queryParams: { recursive: true },
    });
    await client.users.deleteUserById(sourceUser.id, {
        queryParams: {
            notify: false,
            force: true,
        },
    });
});
//# sourceMappingURL=transfer.generated.test.js.map