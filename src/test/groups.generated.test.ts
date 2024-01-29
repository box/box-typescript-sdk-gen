import { serializeGroups } from '../schemas.generated.js';
import { deserializeGroups } from '../schemas.generated.js';
import { serializeGroupFull } from '../schemas.generated.js';
import { deserializeGroupFull } from '../schemas.generated.js';
import { serializeCreateGroupRequestBody } from '../managers/groups.generated.js';
import { deserializeCreateGroupRequestBody } from '../managers/groups.generated.js';
import { serializeUpdateGroupByIdRequestBody } from '../managers/groups.generated.js';
import { deserializeUpdateGroupByIdRequestBody } from '../managers/groups.generated.js';
import { BoxClient } from '../client.generated.js';
import { Groups } from '../schemas.generated.js';
import { GroupFull } from '../schemas.generated.js';
import { CreateGroupRequestBody } from '../managers/groups.generated.js';
import { GetGroupByIdQueryParams } from '../managers/groups.generated.js';
import { UpdateGroupByIdRequestBody } from '../managers/groups.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('test_get_groups', async function test_get_groups(): Promise<any> {
  const groups: Groups = await client.groups.getGroups();
  if (!(groups.totalCount! >= 0)) {
    throw new Error(String('Assertion failed'));
  }
});
test('test_create_get_delete_group', async function test_create_get_delete_group(): Promise<any> {
  const groupName: string = getUuid();
  const groupDescription: string = 'Group description';
  const group: GroupFull = await client.groups.createGroup({
    name: groupName,
    description: groupDescription,
  } satisfies CreateGroupRequestBody);
  if (!(group.name == groupName)) {
    throw new Error(String('Assertion failed'));
  }
  const groupById: GroupFull = await client.groups.getGroupById(group.id, {
    fields: ['id' as '', 'name' as '', 'description' as '', 'group_type' as ''],
  } satisfies GetGroupByIdQueryParams);
  if (!(groupById.id == group.id)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(groupById.description == groupDescription)) {
    throw new Error(String('Assertion failed'));
  }
  const updatedGroupName: string = getUuid();
  const updatedGroup: GroupFull = await client.groups.updateGroupById(
    group.id,
    { name: updatedGroupName } satisfies UpdateGroupByIdRequestBody
  );
  if (!(updatedGroup.name == updatedGroupName)) {
    throw new Error(String('Assertion failed'));
  }
  await client.groups.deleteGroupById(group.id);
  await expect(async () => {
    await client.groups.getGroupById(group.id);
  }).rejects.toThrow();
});
export {};
