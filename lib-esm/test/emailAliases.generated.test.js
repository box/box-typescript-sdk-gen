import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testEmailAliases', async function testEmailAliases() {
    const newUserName = getUuid();
    const newUserLogin = ''.concat(getUuid(), '@boxdemo.com');
    const newUser = await client.users.createUser({
        name: newUserName,
        login: newUserLogin,
    });
    const aliases = await client.emailAliases.getUserEmailAliases(newUser.id);
    if (!(aliases.totalCount == 0)) {
        throw new Error('Assertion failed');
    }
    const newAliasEmail = ''.concat(newUser.id, '@boxdemo.com');
    const newAlias = await client.emailAliases.createUserEmailAlias(newUser.id, { email: newAliasEmail });
    const updatedAliases = await client.emailAliases.getUserEmailAliases(newUser.id);
    if (!(updatedAliases.totalCount == 1)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedAliases.entries[0].email == newAliasEmail)) {
        throw new Error('Assertion failed');
    }
    await client.emailAliases.deleteUserEmailAliasById(newUser.id, newAlias.id);
    const finalAliases = await client.emailAliases.getUserEmailAliases(newUser.id);
    if (!(finalAliases.totalCount == 0)) {
        throw new Error('Assertion failed');
    }
    await client.users.deleteUserById(newUser.id);
});
//# sourceMappingURL=emailAliases.generated.test.js.map