import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('test_get_groups', async function test_get_groups() {
    const groups = await client.groups.getGroups();
    if (!(groups.totalCount >= 0)) {
        throw new Error('Assertion failed');
    }
});
test('test_create_get_delete_group', async function test_create_get_delete_group() {
    const groupName = getUuid();
    const groupDescription = 'Group description';
    const group = await client.groups.createGroup({
        name: groupName,
        description: groupDescription,
    });
    if (!(group.name == groupName)) {
        throw new Error('Assertion failed');
    }
    const groupById = await client.groups.getGroupById(group.id, {
        queryParams: {
            fields: ['id', 'name', 'description', 'group_type'],
        },
    });
    if (!(groupById.id == group.id)) {
        throw new Error('Assertion failed');
    }
    if (!(groupById.description == groupDescription)) {
        throw new Error('Assertion failed');
    }
    const updatedGroupName = getUuid();
    const updatedGroup = await client.groups.updateGroupById(group.id, {
        requestBody: {
            name: updatedGroupName,
        },
    });
    if (!(updatedGroup.name == updatedGroupName)) {
        throw new Error('Assertion failed');
    }
    await client.groups.deleteGroupById(group.id);
    await expect(async () => {
        await client.groups.getGroupById(group.id);
    }).rejects.toThrow();
});
//# sourceMappingURL=groups.generated.test.js.map