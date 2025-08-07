import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
export const client = getDefaultClient();
test('testSessionTerminationUser', async function testSessionTerminationUser() {
    const adminClient = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const user = await adminClient.users.getUserMe();
    const result = await client.sessionTermination.terminateUsersSessions({
        userIds: [getEnvVar('USER_ID')],
        userLogins: [user.login],
    });
    if (!(result.message ==
        'Request is successful, please check the admin events for the status of the job')) {
        throw new Error('Assertion failed');
    }
});
test('testSessionTerminationGroup', async function testSessionTerminationGroup() {
    const groupName = getUuid();
    const group = await client.groups.createGroup({
        name: groupName,
    });
    const result = await client.sessionTermination.terminateGroupsSessions({
        groupIds: [group.id],
    });
    if (!(result.message ==
        'Request is successful, please check the admin events for the status of the job')) {
        throw new Error('Assertion failed');
    }
    await client.groups.deleteGroupById(group.id);
});
//# sourceMappingURL=sessionTermination.generated.test.js.map