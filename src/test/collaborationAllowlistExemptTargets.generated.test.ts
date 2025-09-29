import { serializeCollaborationAllowlistExemptTargets } from '@/schemas/collaborationAllowlistExemptTargets.generated';
import { deserializeCollaborationAllowlistExemptTargets } from '@/schemas/collaborationAllowlistExemptTargets.generated';
import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeCreateUserRequestBody } from '@/managers/users.generated';
import { deserializeCreateUserRequestBody } from '@/managers/users.generated';
import { serializeCollaborationAllowlistExemptTarget } from '@/schemas/collaborationAllowlistExemptTarget.generated';
import { deserializeCollaborationAllowlistExemptTarget } from '@/schemas/collaborationAllowlistExemptTarget.generated';
import { serializeCreateCollaborationWhitelistExemptTargetRequestBody } from '@/managers/collaborationAllowlistExemptTargets.generated';
import { deserializeCreateCollaborationWhitelistExemptTargetRequestBody } from '@/managers/collaborationAllowlistExemptTargets.generated';
import { serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField } from '@/managers/collaborationAllowlistExemptTargets.generated';
import { deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField } from '@/managers/collaborationAllowlistExemptTargets.generated';
import { BoxClient } from '@/client.generated';
import { CollaborationAllowlistExemptTargets } from '@/schemas/collaborationAllowlistExemptTargets.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { CreateUserRequestBody } from '@/managers/users.generated';
import { CollaborationAllowlistExemptTarget } from '@/schemas/collaborationAllowlistExemptTarget.generated';
import { CreateCollaborationWhitelistExemptTargetRequestBody } from '@/managers/collaborationAllowlistExemptTargets.generated';
import { CreateCollaborationWhitelistExemptTargetRequestBodyUserField } from '@/managers/collaborationAllowlistExemptTargets.generated';
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
test('testCollaborationAllowlistExemptTargets', async function testCollaborationAllowlistExemptTargets(): Promise<any> {
  const exemptTargets: CollaborationAllowlistExemptTargets =
    await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargets();
  if (!(exemptTargets.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  const user: UserFull = await client.users.createUser({
    name: getUuid(),
    login: ''.concat(getUuid(), '@boxdemo.com') as string,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const newExemptTarget: CollaborationAllowlistExemptTarget =
    await client.collaborationAllowlistExemptTargets.createCollaborationWhitelistExemptTarget(
      {
        user: {
          id: user.id,
        } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyUserField,
      } satisfies CreateCollaborationWhitelistExemptTargetRequestBody,
    );
  if (
    !(
      (toString(newExemptTarget.type) as string) ==
      'collaboration_whitelist_exempt_target'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (!(newExemptTarget.user!.id == user.id)) {
    throw new Error('Assertion failed');
  }
  const exemptTarget: CollaborationAllowlistExemptTarget =
    await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(
      newExemptTarget.id!,
    );
  if (!(exemptTarget.id == newExemptTarget.id)) {
    throw new Error('Assertion failed');
  }
  if (!(exemptTarget.user!.id == user.id)) {
    throw new Error('Assertion failed');
  }
  await client.collaborationAllowlistExemptTargets.deleteCollaborationWhitelistExemptTargetById(
    exemptTarget.id!,
  );
  await expect(async () => {
    await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(
      exemptTarget.id!,
    );
  }).rejects.toThrow();
  await client.users.deleteUserById(user.id);
});
export {};
