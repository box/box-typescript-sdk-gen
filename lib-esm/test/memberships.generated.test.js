import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testMemberships', async function testMemberships() {
    const user = await client.users.createUser({
        name: getUuid(),
        login: ''.concat(getUuid(), '@boxdemo.com'),
    });
    const userMemberships = await client.memberships.getUserMemberships(user.id);
    if (!(userMemberships.totalCount == 0)) {
        throw new Error('Assertion failed');
    }
    const group = await client.groups.createGroup({
        name: getUuid(),
    });
    const groupMemberships = await client.memberships.getGroupMemberships(group.id);
    if (!(groupMemberships.totalCount == 0)) {
        throw new Error('Assertion failed');
    }
    const groupMembership = await client.memberships.createGroupMembership({
        user: { id: user.id },
        group: {
            id: group.id,
        },
    });
    if (!(groupMembership.user.id == user.id)) {
        throw new Error('Assertion failed');
    }
    if (!(groupMembership.group.id == group.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(groupMembership.role) == 'member')) {
        throw new Error('Assertion failed');
    }
    const getGroupMembership = await client.memberships.getGroupMembershipById(groupMembership.id);
    if (!(getGroupMembership.id == groupMembership.id)) {
        throw new Error('Assertion failed');
    }
    const updatedGroupMembership = await client.memberships.updateGroupMembershipById(groupMembership.id, {
        requestBody: {
            role: 'admin',
        },
    });
    if (!(updatedGroupMembership.id == groupMembership.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(updatedGroupMembership.role) == 'admin')) {
        throw new Error('Assertion failed');
    }
    await client.memberships.deleteGroupMembershipById(groupMembership.id);
    await expect(async () => {
        await client.memberships.getGroupMembershipById(groupMembership.id);
    }).rejects.toThrow();
    await client.groups.deleteGroupById(group.id);
    await client.users.deleteUserById(user.id);
});
//# sourceMappingURL=memberships.generated.test.js.map