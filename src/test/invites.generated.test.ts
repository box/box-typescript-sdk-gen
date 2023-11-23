import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeInvite } from '../schemas.generated.js';
import { deserializeInvite } from '../schemas.generated.js';
import { serializeCreateInviteRequestBodyArg } from '../managers/invites.generated.js';
import { deserializeCreateInviteRequestBodyArg } from '../managers/invites.generated.js';
import { serializeCreateInviteRequestBodyArgEnterpriseField } from '../managers/invites.generated.js';
import { deserializeCreateInviteRequestBodyArgEnterpriseField } from '../managers/invites.generated.js';
import { serializeCreateInviteRequestBodyArgActionableByField } from '../managers/invites.generated.js';
import { deserializeCreateInviteRequestBodyArgActionableByField } from '../managers/invites.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { GetUserMeQueryParamsArg } from '../managers/users.generated.js';
import { Invite } from '../schemas.generated.js';
import { CreateInviteRequestBodyArg } from '../managers/invites.generated.js';
import { CreateInviteRequestBodyArgEnterpriseField } from '../managers/invites.generated.js';
import { CreateInviteRequestBodyArgActionableByField } from '../managers/invites.generated.js';
import { getUuid } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
test('testInvites', async function testInvites(): Promise<any> {
  const userId: string = getEnvVar('USER_ID');
  const client: BoxClient = await getDefaultClientAsUser(userId);
  const currentUser: UserFull = await client.users.getUserMe({
    fields: ['enterprise' as ''],
  } satisfies GetUserMeQueryParamsArg);
  const email: string = getEnvVar('BOX_EXTERNAL_USER_EMAIL');
  const invitation: Invite = await client.invites.createInvite({
    enterprise: {
      id: currentUser.enterprise!.id!,
    } satisfies CreateInviteRequestBodyArgEnterpriseField,
    actionableBy: {
      login: email,
    } satisfies CreateInviteRequestBodyArgActionableByField,
  } satisfies CreateInviteRequestBodyArg);
  if (!((toString(invitation.type) as string) == 'invite')) {
    throw 'Assertion failed';
  }
  if (!(invitation.invitedTo!.id == currentUser.enterprise!.id)) {
    throw 'Assertion failed';
  }
  if (!(invitation.actionableBy!.login == email)) {
    throw 'Assertion failed';
  }
  const getInvitation: Invite = await client.invites.getInviteById(
    invitation.id
  );
  if (!(getInvitation.id == invitation.id)) {
    throw 'Assertion failed';
  }
});
export {};
