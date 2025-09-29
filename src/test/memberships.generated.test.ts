import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeCreateUserRequestBody } from '@/managers/users.generated';
import { deserializeCreateUserRequestBody } from '@/managers/users.generated';
import { serializeGroupMemberships } from '@/schemas/groupMemberships.generated';
import { deserializeGroupMemberships } from '@/schemas/groupMemberships.generated';
import { serializeGroupFull } from '@/schemas/groupFull.generated';
import { deserializeGroupFull } from '@/schemas/groupFull.generated';
import { serializeCreateGroupRequestBody } from '@/managers/groups.generated';
import { deserializeCreateGroupRequestBody } from '@/managers/groups.generated';
import { serializeGroupMembership } from '@/schemas/groupMembership.generated';
import { deserializeGroupMembership } from '@/schemas/groupMembership.generated';
import { serializeCreateGroupMembershipRequestBody } from '@/managers/memberships.generated';
import { deserializeCreateGroupMembershipRequestBody } from '@/managers/memberships.generated';
import { serializeCreateGroupMembershipRequestBodyUserField } from '@/managers/memberships.generated';
import { deserializeCreateGroupMembershipRequestBodyUserField } from '@/managers/memberships.generated';
import { serializeCreateGroupMembershipRequestBodyGroupField } from '@/managers/memberships.generated';
import { deserializeCreateGroupMembershipRequestBodyGroupField } from '@/managers/memberships.generated';
import { serializeUpdateGroupMembershipByIdRequestBody } from '@/managers/memberships.generated';
import { deserializeUpdateGroupMembershipByIdRequestBody } from '@/managers/memberships.generated';
import { serializeUpdateGroupMembershipByIdRequestBodyRoleField } from '@/managers/memberships.generated';
import { deserializeUpdateGroupMembershipByIdRequestBodyRoleField } from '@/managers/memberships.generated';
import { UpdateGroupMembershipByIdOptionalsInput } from '@/managers/memberships.generated';
import { UpdateGroupMembershipByIdOptionals } from '@/managers/memberships.generated';
import { BoxClient } from '@/client.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { CreateUserRequestBody } from '@/managers/users.generated';
import { GroupMemberships } from '@/schemas/groupMemberships.generated';
import { GroupFull } from '@/schemas/groupFull.generated';
import { CreateGroupRequestBody } from '@/managers/groups.generated';
import { GroupMembership } from '@/schemas/groupMembership.generated';
import { CreateGroupMembershipRequestBody } from '@/managers/memberships.generated';
import { CreateGroupMembershipRequestBodyUserField } from '@/managers/memberships.generated';
import { CreateGroupMembershipRequestBodyGroupField } from '@/managers/memberships.generated';
import { UpdateGroupMembershipByIdRequestBody } from '@/managers/memberships.generated';
import { UpdateGroupMembershipByIdRequestBodyRoleField } from '@/managers/memberships.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testMemberships', async function testMemberships(): Promise<any> {
  const user: UserFull = await client.users.createUser({
    name: getUuid(),
    login: ''.concat(getUuid(), '@boxdemo.com') as string,
  } satisfies CreateUserRequestBody);
  const userMemberships: GroupMemberships =
    await client.memberships.getUserMemberships(user.id);
  if (!(userMemberships.totalCount == 0)) {
    throw new Error('Assertion failed');
  }
  const group: GroupFull = await client.groups.createGroup({
    name: getUuid(),
  } satisfies CreateGroupRequestBody);
  const groupMemberships: GroupMemberships =
    await client.memberships.getGroupMemberships(group.id);
  if (!(groupMemberships.totalCount == 0)) {
    throw new Error('Assertion failed');
  }
  const groupMembership: GroupMembership =
    await client.memberships.createGroupMembership({
      user: { id: user.id } satisfies CreateGroupMembershipRequestBodyUserField,
      group: {
        id: group.id,
      } satisfies CreateGroupMembershipRequestBodyGroupField,
    } satisfies CreateGroupMembershipRequestBody);
  if (!(groupMembership.user!.id == user.id)) {
    throw new Error('Assertion failed');
  }
  if (!(groupMembership.group!.id == group.id)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(groupMembership.role) as string) == 'member')) {
    throw new Error('Assertion failed');
  }
  const getGroupMembership: GroupMembership =
    await client.memberships.getGroupMembershipById(groupMembership.id!);
  if (!(getGroupMembership.id == groupMembership.id)) {
    throw new Error('Assertion failed');
  }
  const updatedGroupMembership: GroupMembership =
    await client.memberships.updateGroupMembershipById(groupMembership.id!, {
      requestBody: {
        role: 'admin' as UpdateGroupMembershipByIdRequestBodyRoleField,
      } satisfies UpdateGroupMembershipByIdRequestBody,
    } satisfies UpdateGroupMembershipByIdOptionalsInput);
  if (!(updatedGroupMembership.id == groupMembership.id)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(updatedGroupMembership.role) as string) == 'admin')) {
    throw new Error('Assertion failed');
  }
  await client.memberships.deleteGroupMembershipById(groupMembership.id!);
  await expect(async () => {
    await client.memberships.getGroupMembershipById(groupMembership.id!);
  }).rejects.toThrow();
  await client.groups.deleteGroupById(group.id);
  await client.users.deleteUserById(user.id);
});
export {};
