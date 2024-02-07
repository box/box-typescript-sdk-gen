import { serializeTermsOfService } from '../schemas.generated.js';
import { deserializeTermsOfService } from '../schemas.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBody } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBody } from '../managers/users.generated.js';
import { serializeTermsOfServiceUserStatus } from '../schemas.generated.js';
import { deserializeTermsOfServiceUserStatus } from '../schemas.generated.js';
import { serializeCreateTermsOfServiceStatusForUserRequestBody } from '../managers/termsOfServiceUserStatuses.generated.js';
import { deserializeCreateTermsOfServiceStatusForUserRequestBody } from '../managers/termsOfServiceUserStatuses.generated.js';
import { serializeCreateTermsOfServiceStatusForUserRequestBodyTosField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { serializeCreateTermsOfServiceStatusForUserRequestBodyUserField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { serializeUpdateTermsOfServiceStatusForUserByIdRequestBody } from '../managers/termsOfServiceUserStatuses.generated.js';
import { deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody } from '../managers/termsOfServiceUserStatuses.generated.js';
import { serializeTermsOfServiceUserStatuses } from '../schemas.generated.js';
import { deserializeTermsOfServiceUserStatuses } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { TermsOfService } from '../schemas.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBody } from '../managers/users.generated.js';
import { TermsOfServiceUserStatus } from '../schemas.generated.js';
import { CreateTermsOfServiceStatusForUserRequestBody } from '../managers/termsOfServiceUserStatuses.generated.js';
import { CreateTermsOfServiceStatusForUserRequestBodyTosField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { CreateTermsOfServiceStatusForUserRequestBodyTosTypeField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { CreateTermsOfServiceStatusForUserRequestBodyUserField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { CreateTermsOfServiceStatusForUserRequestBodyUserTypeField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { UpdateTermsOfServiceStatusForUserByIdRequestBody } from '../managers/termsOfServiceUserStatuses.generated.js';
import { TermsOfServiceUserStatuses } from '../schemas.generated.js';
import { GetTermsOfServiceUserStatusesQueryParams } from '../managers/termsOfServiceUserStatuses.generated.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { getOrCreateTermsOfServices } from './commons.generated.js';
import { getUuid } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
test('testGetTermsOfServiceUserStatuses', async function testGetTermsOfServiceUserStatuses(): Promise<any> {
  const adminUserId: string = getEnvVar('USER_ID');
  const client: BoxClient = await getDefaultClientAsUser(adminUserId);
  const tos: TermsOfService = await getOrCreateTermsOfServices();
  const user: UserFull = await client.users.createUser({
    name: getUuid(),
    login: ''.concat(getUuid(), '@boxdemo.com') as string,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const createdTosUserStatus: TermsOfServiceUserStatus =
    await client.termsOfServiceUserStatuses.createTermsOfServiceStatusForUser({
      tos: {
        type: 'terms_of_service' as CreateTermsOfServiceStatusForUserRequestBodyTosTypeField,
        id: tos.id,
      } satisfies CreateTermsOfServiceStatusForUserRequestBodyTosField,
      user: {
        type: 'user' as CreateTermsOfServiceStatusForUserRequestBodyUserTypeField,
        id: user.id,
      } satisfies CreateTermsOfServiceStatusForUserRequestBodyUserField,
      isAccepted: false,
    } satisfies CreateTermsOfServiceStatusForUserRequestBody);
  if (!(createdTosUserStatus.isAccepted == false)) {
    throw new Error(String('Assertion failed'));
  }
  if (
    !(
      (toString(createdTosUserStatus.type) as string) ==
      'terms_of_service_user_status'
    )
  ) {
    throw new Error(String('Assertion failed'));
  }
  if (
    !(
      (toString(createdTosUserStatus.tos!.type) as string) == 'terms_of_service'
    )
  ) {
    throw new Error(String('Assertion failed'));
  }
  if (!((toString(createdTosUserStatus.user!.type) as string) == 'user')) {
    throw new Error(String('Assertion failed'));
  }
  if (!(createdTosUserStatus.tos!.id == tos.id)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(createdTosUserStatus.user!.id == user.id)) {
    throw new Error(String('Assertion failed'));
  }
  const updatedTosUserStatus: TermsOfServiceUserStatus =
    await client.termsOfServiceUserStatuses.updateTermsOfServiceStatusForUserById(
      createdTosUserStatus.id,
      {
        isAccepted: true,
      } satisfies UpdateTermsOfServiceStatusForUserByIdRequestBody
    );
  if (!(updatedTosUserStatus.isAccepted == true)) {
    throw new Error(String('Assertion failed'));
  }
  const listTosUserStatuses: TermsOfServiceUserStatuses =
    await client.termsOfServiceUserStatuses.getTermsOfServiceUserStatuses({
      tosId: tos.id,
      userId: user.id,
    } satisfies GetTermsOfServiceUserStatusesQueryParams);
  if (!(listTosUserStatuses.totalCount! > 0)) {
    throw new Error(String('Assertion failed'));
  }
  await client.users.deleteUserById(user.id);
});
export {};
