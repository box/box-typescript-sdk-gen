import { serializeUser } from '../schemas.generated.js';
import { deserializeUser } from '../schemas.generated.js';
import { serializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { serializeGroupMemberships } from '../schemas.generated.js';
import { deserializeGroupMemberships } from '../schemas.generated.js';
import { serializeGroup } from '../schemas.generated.js';
import { deserializeGroup } from '../schemas.generated.js';
import { serializeCreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { deserializeCreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { serializeGroupMembership } from '../schemas.generated.js';
import { deserializeGroupMembership } from '../schemas.generated.js';
import { serializeCreateGroupMembershipRequestBodyArg } from '../managers/memberships.generated.js';
import { deserializeCreateGroupMembershipRequestBodyArg } from '../managers/memberships.generated.js';
import { serializeCreateGroupMembershipRequestBodyArgUserField } from '../managers/memberships.generated.js';
import { deserializeCreateGroupMembershipRequestBodyArgUserField } from '../managers/memberships.generated.js';
import { serializeCreateGroupMembershipRequestBodyArgGroupField } from '../managers/memberships.generated.js';
import { deserializeCreateGroupMembershipRequestBodyArgGroupField } from '../managers/memberships.generated.js';
import { serializeUpdateGroupMembershipByIdRequestBodyArg } from '../managers/memberships.generated.js';
import { deserializeUpdateGroupMembershipByIdRequestBodyArg } from '../managers/memberships.generated.js';
import { serializeUpdateGroupMembershipByIdRequestBodyArgRoleField } from '../managers/memberships.generated.js';
import { deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField } from '../managers/memberships.generated.js';
import { BoxClient } from '../client.generated.js';
import { User } from '../schemas.generated.js';
import { CreateUserRequestBodyArg } from '../managers/users.generated.js';
import { GroupMemberships } from '../schemas.generated.js';
import { Group } from '../schemas.generated.js';
import { CreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { GroupMembership } from '../schemas.generated.js';
import { CreateGroupMembershipRequestBodyArg } from '../managers/memberships.generated.js';
import { CreateGroupMembershipRequestBodyArgUserField } from '../managers/memberships.generated.js';
import { CreateGroupMembershipRequestBodyArgGroupField } from '../managers/memberships.generated.js';
import { UpdateGroupMembershipByIdRequestBodyArg } from '../managers/memberships.generated.js';
import { UpdateGroupMembershipByIdRequestBodyArgRoleField } from '../managers/memberships.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../utils.js';
const client: BoxClient = getDefaultClient();
test('testMemberships', async function testMemberships(): Promise<any> {
  const user: User = await client.users.createUser({
    name: getUuid(),
    login: ''.concat(getUuid(), '@boxdemo.com') as string,
  } satisfies CreateUserRequestBodyArg);
  const userMemberships: GroupMemberships =
    await client.memberships.getUserMemberships(user.id);
  if (!(userMemberships.totalCount == 0)) {
    throw 'Assertion failed';
  }
  const group: Group = await client.groups.createGroup({
    name: getUuid(),
  } satisfies CreateGroupRequestBodyArg);
  const groupMemberships: GroupMemberships =
    await client.memberships.getGroupMemberships(group.id);
  if (!(groupMemberships.totalCount == 0)) {
    throw 'Assertion failed';
  }
  const groupMembership: GroupMembership =
    await client.memberships.createGroupMembership({
      user: {
        id: user.id,
      } satisfies CreateGroupMembershipRequestBodyArgUserField,
      group: {
        id: group.id,
      } satisfies CreateGroupMembershipRequestBodyArgGroupField,
    } satisfies CreateGroupMembershipRequestBodyArg);
  if (!(groupMembership.user!.id == user.id)) {
    throw 'Assertion failed';
  }
  if (!(groupMembership.group!.id == group.id)) {
    throw 'Assertion failed';
  }
  if (!((toString(groupMembership.role) as string) == 'member')) {
    throw 'Assertion failed';
  }
  const getGroupMembership: GroupMembership =
    await client.memberships.getGroupMembershipById(groupMembership.id!);
  if (!(getGroupMembership.id == groupMembership.id)) {
    throw 'Assertion failed';
  }
  const updatedGroupMembership: GroupMembership =
    await client.memberships.updateGroupMembershipById(groupMembership.id!, {
      role: 'admin' as UpdateGroupMembershipByIdRequestBodyArgRoleField,
    } satisfies UpdateGroupMembershipByIdRequestBodyArg);
  if (!(updatedGroupMembership.id == groupMembership.id)) {
    throw 'Assertion failed';
  }
  if (!((toString(updatedGroupMembership.role) as string) == 'admin')) {
    throw 'Assertion failed';
  }
  await client.memberships.deleteGroupMembershipById(groupMembership.id!);
  expect(async () => {
    await client.memberships.getGroupMembershipById(groupMembership.id!);
  }).rejects.toThrow();
  await client.groups.deleteGroupById(group.id);
  await client.users.deleteUserById(user.id);
});
export {};
