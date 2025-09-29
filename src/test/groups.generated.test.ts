import { serializeGroups } from '@/schemas/groups.generated';
import { deserializeGroups } from '@/schemas/groups.generated';
import { serializeGroupFull } from '@/schemas/groupFull.generated';
import { deserializeGroupFull } from '@/schemas/groupFull.generated';
import { serializeCreateGroupRequestBody } from '@/managers/groups.generated';
import { deserializeCreateGroupRequestBody } from '@/managers/groups.generated';
import { serializeUpdateGroupByIdRequestBody } from '@/managers/groups.generated';
import { deserializeUpdateGroupByIdRequestBody } from '@/managers/groups.generated';
import { GetGroupByIdOptionalsInput } from '@/managers/groups.generated';
import { UpdateGroupByIdOptionalsInput } from '@/managers/groups.generated';
import { GetGroupByIdOptionals } from '@/managers/groups.generated';
import { UpdateGroupByIdOptionals } from '@/managers/groups.generated';
import { BoxClient } from '@/client.generated';
import { Groups } from '@/schemas/groups.generated';
import { GroupFull } from '@/schemas/groupFull.generated';
import { CreateGroupRequestBody } from '@/managers/groups.generated';
import { GetGroupByIdQueryParams } from '@/managers/groups.generated';
import { UpdateGroupByIdRequestBody } from '@/managers/groups.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('test_get_groups', async function test_get_groups(): Promise<any> {
  const groups: Groups = await client.groups.getGroups();
  if (!(groups.totalCount! >= 0)) {
    throw new Error('Assertion failed');
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
    throw new Error('Assertion failed');
  }
  const groupById: GroupFull = await client.groups.getGroupById(group.id, {
    queryParams: {
      fields: ['id', 'name', 'description', 'group_type'],
    } satisfies GetGroupByIdQueryParams,
  } satisfies GetGroupByIdOptionalsInput);
  if (!(groupById.id == group.id)) {
    throw new Error('Assertion failed');
  }
  if (!(groupById.description == groupDescription)) {
    throw new Error('Assertion failed');
  }
  const updatedGroupName: string = getUuid();
  const updatedGroup: GroupFull = await client.groups.updateGroupById(
    group.id,
    {
      requestBody: {
        name: updatedGroupName,
      } satisfies UpdateGroupByIdRequestBody,
    } satisfies UpdateGroupByIdOptionalsInput,
  );
  if (!(updatedGroup.name == updatedGroupName)) {
    throw new Error('Assertion failed');
  }
  await client.groups.deleteGroupById(group.id);
  await expect(async () => {
    await client.groups.getGroupById(group.id);
  }).rejects.toThrow();
});
export {};
