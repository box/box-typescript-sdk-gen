import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeInvite } from '../schemas.generated.js';
import { deserializeInvite } from '../schemas.generated.js';
import { serializeCreateInviteRequestBody } from '../managers/invites.generated.js';
import { deserializeCreateInviteRequestBody } from '../managers/invites.generated.js';
import { serializeCreateInviteRequestBodyEnterpriseField } from '../managers/invites.generated.js';
import { deserializeCreateInviteRequestBodyEnterpriseField } from '../managers/invites.generated.js';
import { serializeCreateInviteRequestBodyActionableByField } from '../managers/invites.generated.js';
import { deserializeCreateInviteRequestBodyActionableByField } from '../managers/invites.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { GetUserMeQueryParams } from '../managers/users.generated.js';
import { Invite } from '../schemas.generated.js';
import { CreateInviteRequestBody } from '../managers/invites.generated.js';
import { CreateInviteRequestBodyEnterpriseField } from '../managers/invites.generated.js';
import { CreateInviteRequestBodyActionableByField } from '../managers/invites.generated.js';
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
  } satisfies GetUserMeQueryParams);
  const email: string = getEnvVar('BOX_EXTERNAL_USER_EMAIL');
  const invitation: Invite = await client.invites.createInvite({
    enterprise: {
      id: currentUser.enterprise!.id!,
    } satisfies CreateInviteRequestBodyEnterpriseField,
    actionableBy: {
      login: email,
    } satisfies CreateInviteRequestBodyActionableByField,
  } satisfies CreateInviteRequestBody);
  if (!((toString(invitation.type) as string) == 'invite')) {
    throw new Error(String('Assertion failed'));
  }
  if (!(invitation.invitedTo!.id == currentUser.enterprise!.id)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(invitation.actionableBy!.login == email)) {
    throw new Error(String('Assertion failed'));
  }
  const getInvitation: Invite = await client.invites.getInviteById(
    invitation.id
  );
  if (!(getInvitation.id == invitation.id)) {
    throw new Error(String('Assertion failed'));
  }
});
export {};
