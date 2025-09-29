import { serializeTermsOfService } from '@/schemas/termsOfService.generated';
import { deserializeTermsOfService } from '@/schemas/termsOfService.generated';
import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeCreateUserRequestBody } from '@/managers/users.generated';
import { deserializeCreateUserRequestBody } from '@/managers/users.generated';
import { serializeTermsOfServiceUserStatus } from '@/schemas/termsOfServiceUserStatus.generated';
import { deserializeTermsOfServiceUserStatus } from '@/schemas/termsOfServiceUserStatus.generated';
import { serializeCreateTermsOfServiceStatusForUserRequestBody } from '@/managers/termsOfServiceUserStatuses.generated';
import { deserializeCreateTermsOfServiceStatusForUserRequestBody } from '@/managers/termsOfServiceUserStatuses.generated';
import { serializeCreateTermsOfServiceStatusForUserRequestBodyTosField } from '@/managers/termsOfServiceUserStatuses.generated';
import { deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField } from '@/managers/termsOfServiceUserStatuses.generated';
import { serializeCreateTermsOfServiceStatusForUserRequestBodyUserField } from '@/managers/termsOfServiceUserStatuses.generated';
import { deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField } from '@/managers/termsOfServiceUserStatuses.generated';
import { serializeUpdateTermsOfServiceStatusForUserByIdRequestBody } from '@/managers/termsOfServiceUserStatuses.generated';
import { deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody } from '@/managers/termsOfServiceUserStatuses.generated';
import { serializeTermsOfServiceUserStatuses } from '@/schemas/termsOfServiceUserStatuses.generated';
import { deserializeTermsOfServiceUserStatuses } from '@/schemas/termsOfServiceUserStatuses.generated';
import { BoxClient } from '@/client.generated';
import { TermsOfService } from '@/schemas/termsOfService.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { CreateUserRequestBody } from '@/managers/users.generated';
import { TermsOfServiceUserStatus } from '@/schemas/termsOfServiceUserStatus.generated';
import { CreateTermsOfServiceStatusForUserRequestBody } from '@/managers/termsOfServiceUserStatuses.generated';
import { CreateTermsOfServiceStatusForUserRequestBodyTosField } from '@/managers/termsOfServiceUserStatuses.generated';
import { CreateTermsOfServiceStatusForUserRequestBodyUserField } from '@/managers/termsOfServiceUserStatuses.generated';
import { UpdateTermsOfServiceStatusForUserByIdRequestBody } from '@/managers/termsOfServiceUserStatuses.generated';
import { TermsOfServiceUserStatuses } from '@/schemas/termsOfServiceUserStatuses.generated';
import { GetTermsOfServiceUserStatusesQueryParams } from '@/managers/termsOfServiceUserStatuses.generated';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { getOrCreateTermsOfServices } from './commons.generated';
import { getUuid } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
test('testGetTermsOfServiceUserStatuses', async function testGetTermsOfServiceUserStatuses(): Promise<any> {
  const adminUserId: string = getEnvVar('USER_ID');
  const client: BoxClient = getDefaultClientWithUserSubject(adminUserId);
  const tos: TermsOfService = await getOrCreateTermsOfServices();
  const user: UserFull = await client.users.createUser({
    name: getUuid(),
    login: ''.concat(getUuid(), '@boxdemo.com') as string,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const createdTosUserStatus: TermsOfServiceUserStatus =
    await client.termsOfServiceUserStatuses.createTermsOfServiceStatusForUser({
      tos: new CreateTermsOfServiceStatusForUserRequestBodyTosField({
        id: tos.id,
      }),
      user: new CreateTermsOfServiceStatusForUserRequestBodyUserField({
        id: user.id,
      }),
      isAccepted: false,
    } satisfies CreateTermsOfServiceStatusForUserRequestBody);
  if (!(createdTosUserStatus.isAccepted == false)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(createdTosUserStatus.type) as string) ==
      'terms_of_service_user_status'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(createdTosUserStatus.tos!.type) as string) == 'terms_of_service'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (!((toString(createdTosUserStatus.user!.type) as string) == 'user')) {
    throw new Error('Assertion failed');
  }
  if (!(createdTosUserStatus.tos!.id == tos.id)) {
    throw new Error('Assertion failed');
  }
  if (!(createdTosUserStatus.user!.id == user.id)) {
    throw new Error('Assertion failed');
  }
  const updatedTosUserStatus: TermsOfServiceUserStatus =
    await client.termsOfServiceUserStatuses.updateTermsOfServiceStatusForUserById(
      createdTosUserStatus.id,
      {
        isAccepted: true,
      } satisfies UpdateTermsOfServiceStatusForUserByIdRequestBody,
    );
  if (!(updatedTosUserStatus.isAccepted == true)) {
    throw new Error('Assertion failed');
  }
  const listTosUserStatuses: TermsOfServiceUserStatuses =
    await client.termsOfServiceUserStatuses.getTermsOfServiceUserStatuses({
      tosId: tos.id,
      userId: user.id,
    } satisfies GetTermsOfServiceUserStatusesQueryParams);
  if (!(listTosUserStatuses.totalCount! > 0)) {
    throw new Error('Assertion failed');
  }
  await client.users.deleteUserById(user.id);
});
export {};
