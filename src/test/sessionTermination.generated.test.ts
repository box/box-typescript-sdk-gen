import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeSessionTerminationMessage } from '@/schemas/sessionTerminationMessage.generated';
import { deserializeSessionTerminationMessage } from '@/schemas/sessionTerminationMessage.generated';
import { serializeTerminateUsersSessionsRequestBody } from '@/managers/sessionTermination.generated';
import { deserializeTerminateUsersSessionsRequestBody } from '@/managers/sessionTermination.generated';
import { serializeGroupFull } from '@/schemas/groupFull.generated';
import { deserializeGroupFull } from '@/schemas/groupFull.generated';
import { serializeCreateGroupRequestBody } from '@/managers/groups.generated';
import { deserializeCreateGroupRequestBody } from '@/managers/groups.generated';
import { serializeTerminateGroupsSessionsRequestBody } from '@/managers/sessionTermination.generated';
import { deserializeTerminateGroupsSessionsRequestBody } from '@/managers/sessionTermination.generated';
import { BoxClient } from '@/client.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { SessionTerminationMessage } from '@/schemas/sessionTerminationMessage.generated';
import { TerminateUsersSessionsRequestBody } from '@/managers/sessionTermination.generated';
import { GroupFull } from '@/schemas/groupFull.generated';
import { CreateGroupRequestBody } from '@/managers/groups.generated';
import { TerminateGroupsSessionsRequestBody } from '@/managers/sessionTermination.generated';
import { getUuid } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testSessionTerminationUser', async function testSessionTerminationUser(): Promise<any> {
  const adminClient: BoxClient = getDefaultClientWithUserSubject(
    getEnvVar('USER_ID'),
  );
  const user: UserFull = await adminClient.users.getUserMe();
  const result: SessionTerminationMessage =
    await client.sessionTermination.terminateUsersSessions({
      userIds: [getEnvVar('USER_ID')],
      userLogins: [user.login!],
    } satisfies TerminateUsersSessionsRequestBody);
  if (
    !(
      result.message ==
      'Request is successful, please check the admin events for the status of the job'
    )
  ) {
    throw new Error('Assertion failed');
  }
});
test('testSessionTerminationGroup', async function testSessionTerminationGroup(): Promise<any> {
  const groupName: string = getUuid();
  const group: GroupFull = await client.groups.createGroup({
    name: groupName,
  } satisfies CreateGroupRequestBody);
  const result: SessionTerminationMessage =
    await client.sessionTermination.terminateGroupsSessions({
      groupIds: [group.id],
    } satisfies TerminateGroupsSessionsRequestBody);
  if (
    !(
      result.message ==
      'Request is successful, please check the admin events for the status of the job'
    )
  ) {
    throw new Error('Assertion failed');
  }
  await client.groups.deleteGroupById(group.id);
});
export {};
