import { serializeGroups } from '../schemas.generated.js';
import { deserializeGroups } from '../schemas.generated.js';
import { serializeGroup } from '../schemas.generated.js';
import { deserializeGroup } from '../schemas.generated.js';
import { serializeCreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { deserializeCreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { serializeGroupFull } from '../schemas.generated.js';
import { deserializeGroupFull } from '../schemas.generated.js';
import { serializeUpdateGroupByIdRequestBodyArg } from '../managers/groups.generated.js';
import { deserializeUpdateGroupByIdRequestBodyArg } from '../managers/groups.generated.js';
import { BoxClient } from '../client.generated.js';
import { Groups } from '../schemas.generated.js';
import { Group } from '../schemas.generated.js';
import { CreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { GroupFull } from '../schemas.generated.js';
import { GetGroupByIdQueryParamsArg } from '../managers/groups.generated.js';
import { UpdateGroupByIdRequestBodyArg } from '../managers/groups.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
const client: BoxClient = getDefaultClient();
test('test_get_groups', async function test_get_groups(): Promise<any> {
  const groups: Groups = await client.groups.getGroups();
  if (!(groups.totalCount! >= 0)) {
    throw 'Assertion failed';
  }
});
test('test_create_get_delete_group', async function test_create_get_delete_group(): Promise<any> {
  const groupName: string = getUuid();
  const groupDescription: string = 'Group description';
  const group: Group = await client.groups.createGroup({
    name: groupName,
    description: groupDescription,
  } satisfies CreateGroupRequestBodyArg);
  if (!(group.name == groupName)) {
    throw 'Assertion failed';
  }
  const groupById: GroupFull = await client.groups.getGroupById(group.id, {
    fields: ['id' as '', 'name' as '', 'description' as '', 'group_type' as ''],
  } satisfies GetGroupByIdQueryParamsArg);
  if (!(groupById.id == group.id)) {
    throw 'Assertion failed';
  }
  if (!(groupById.description == groupDescription)) {
    throw 'Assertion failed';
  }
  const updatedGroupName: string = getUuid();
  const updatedGroup: GroupFull = await client.groups.updateGroupById(
    group.id,
    { name: updatedGroupName } satisfies UpdateGroupByIdRequestBodyArg
  );
  if (!(updatedGroup.name == updatedGroupName)) {
    throw 'Assertion failed';
  }
  await client.groups.deleteGroupById(group.id);
  expect(async () => {
    await client.groups.getGroupById(group.id);
  }).rejects.toThrow();
});
export {};
