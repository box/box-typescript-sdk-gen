import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeSessionTerminationMessage } from '../schemas.generated.js';
import { deserializeSessionTerminationMessage } from '../schemas.generated.js';
import { serializeCreateUserTerminateSessionRequestBodyArg } from '../managers/sessionTermination.generated.js';
import { deserializeCreateUserTerminateSessionRequestBodyArg } from '../managers/sessionTermination.generated.js';
import { serializeGroupFull } from '../schemas.generated.js';
import { deserializeGroupFull } from '../schemas.generated.js';
import { serializeCreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { deserializeCreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { serializeCreateGroupTerminateSessionRequestBodyArg } from '../managers/sessionTermination.generated.js';
import { deserializeCreateGroupTerminateSessionRequestBodyArg } from '../managers/sessionTermination.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { SessionTerminationMessage } from '../schemas.generated.js';
import { CreateUserTerminateSessionRequestBodyArg } from '../managers/sessionTermination.generated.js';
import { GroupFull } from '../schemas.generated.js';
import { CreateGroupRequestBodyArg } from '../managers/groups.generated.js';
import { CreateGroupTerminateSessionRequestBodyArg } from '../managers/sessionTermination.generated.js';
import { getUuid } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testSessionTerminationUser', async function testSessionTerminationUser(): Promise<any> {
  const adminClient: BoxClient = await getDefaultClientAsUser(
    getEnvVar('USER_ID')
  );
  const user: UserFull = await adminClient.users.getUserMe();
  const result: SessionTerminationMessage =
    await client.sessionTermination.createUserTerminateSession({
      userIds: [getEnvVar('USER_ID')],
      userLogins: [user.login!],
    } satisfies CreateUserTerminateSessionRequestBodyArg);
  if (
    !(
      result.message ==
      'Request is successful, please check the admin events for the status of the job'
    )
  ) {
    throw 'Assertion failed';
  }
});
test('testSessionTerminationGroup', async function testSessionTerminationGroup(): Promise<any> {
  const groupName: string = getUuid();
  const group: GroupFull = await client.groups.createGroup({
    name: groupName,
  } satisfies CreateGroupRequestBodyArg);
  const result: SessionTerminationMessage =
    await client.sessionTermination.createGroupTerminateSession({
      groupIds: [group.id],
    } satisfies CreateGroupTerminateSessionRequestBodyArg);
  if (
    !(
      result.message ==
      'Request is successful, please check the admin events for the status of the job'
    )
  ) {
    throw 'Assertion failed';
  }
  await client.groups.deleteGroupById(group.id);
});
export {};
