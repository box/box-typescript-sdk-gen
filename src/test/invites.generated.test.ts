import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeInvite } from '@/schemas/invite.generated';
import { deserializeInvite } from '@/schemas/invite.generated';
import { serializeCreateInviteRequestBody } from '@/managers/invites.generated';
import { deserializeCreateInviteRequestBody } from '@/managers/invites.generated';
import { serializeCreateInviteRequestBodyEnterpriseField } from '@/managers/invites.generated';
import { deserializeCreateInviteRequestBodyEnterpriseField } from '@/managers/invites.generated';
import { serializeCreateInviteRequestBodyActionableByField } from '@/managers/invites.generated';
import { deserializeCreateInviteRequestBodyActionableByField } from '@/managers/invites.generated';
import { BoxClient } from '@/client.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { GetUserMeQueryParams } from '@/managers/users.generated';
import { Invite } from '@/schemas/invite.generated';
import { CreateInviteRequestBody } from '@/managers/invites.generated';
import { CreateInviteRequestBodyEnterpriseField } from '@/managers/invites.generated';
import { CreateInviteRequestBodyActionableByField } from '@/managers/invites.generated';
import { getUuid } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
test('testInvites', async function testInvites(): Promise<any> {
  const userId: string = getEnvVar('USER_ID');
  const client: BoxClient = getDefaultClientWithUserSubject(userId);
  const currentUser: UserFull = await client.users.getUserMe({
    fields: ['enterprise'],
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
    throw new Error('Assertion failed');
  }
  if (!(invitation.invitedTo!.id == currentUser.enterprise!.id)) {
    throw new Error('Assertion failed');
  }
  if (!(invitation.actionableBy!.login == email)) {
    throw new Error('Assertion failed');
  }
  const getInvitation: Invite = await client.invites.getInviteById(
    invitation.id,
  );
  if (!(getInvitation.id == invitation.id)) {
    throw new Error('Assertion failed');
  }
});
export {};
