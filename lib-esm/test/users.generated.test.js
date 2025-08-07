import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('test_get_users', async function test_get_users() {
    const users = await client.users.getUsers();
    if (!(users.totalCount >= 0)) {
        throw new Error('Assertion failed');
    }
});
test('test_get_user_me', async function test_get_user_me() {
    const currentUser = await client.users.getUserMe();
    if (!(toString(currentUser.type) == 'user')) {
        throw new Error('Assertion failed');
    }
});
test('test_create_update_get_delete_user', async function test_create_update_get_delete_user() {
    const userName = getUuid();
    const userLogin = ''.concat(getUuid(), '@gmail.com');
    const user = await client.users.createUser({
        name: userName,
        login: userLogin,
        isPlatformAccessOnly: true,
    });
    if (!(user.name == userName)) {
        throw new Error('Assertion failed');
    }
    const userById = await client.users.getUserById(user.id);
    if (!(userById.id == user.id)) {
        throw new Error('Assertion failed');
    }
    const updatedUserName = getUuid();
    const updatedUser = await client.users.updateUserById(user.id, {
        requestBody: { name: updatedUserName },
    });
    if (!(updatedUser.name == updatedUserName)) {
        throw new Error('Assertion failed');
    }
    await client.users.deleteUserById(user.id);
});
//# sourceMappingURL=users.generated.test.js.map