import { serializeUsers } from '@/schemas/users.generated';
import { deserializeUsers } from '@/schemas/users.generated';
import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeCreateUserRequestBody } from '@/managers/users.generated';
import { deserializeCreateUserRequestBody } from '@/managers/users.generated';
import { serializeUpdateUserByIdRequestBody } from '@/managers/users.generated';
import { deserializeUpdateUserByIdRequestBody } from '@/managers/users.generated';
import { UpdateUserByIdOptionalsInput } from '@/managers/users.generated';
import { UpdateUserByIdOptionals } from '@/managers/users.generated';
import { BoxClient } from '@/client.generated';
import { Users } from '@/schemas/users.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { CreateUserRequestBody } from '@/managers/users.generated';
import { UpdateUserByIdRequestBody } from '@/managers/users.generated';
import { getUuid } from '@/internal/utils';
import { createNull } from '@/internal/utils';
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
test('test_get_users', async function test_get_users(): Promise<any> {
  const users: Users = await client.users.getUsers();
  if (!(users.totalCount! >= 0)) {
    throw new Error('Assertion failed');
  }
});
test('test_get_user_me', async function test_get_user_me(): Promise<any> {
  const currentUser: UserFull = await client.users.getUserMe();
  if (!((toString(currentUser.type) as string) == 'user')) {
    throw new Error('Assertion failed');
  }
});
test('test_create_update_get_delete_user', async function test_create_update_get_delete_user(): Promise<any> {
  const userName: string = getUuid();
  const userLogin: string = ''.concat(getUuid(), '@gmail.com') as string;
  const user: UserFull = await client.users.createUser({
    name: userName,
    login: userLogin,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  if (!(user.name == userName)) {
    throw new Error('Assertion failed');
  }
  const userById: UserFull = await client.users.getUserById(user.id);
  if (!(userById.id == user.id)) {
    throw new Error('Assertion failed');
  }
  const updatedUserName: string = getUuid();
  const updatedUser: UserFull = await client.users.updateUserById(user.id, {
    requestBody: { name: updatedUserName } satisfies UpdateUserByIdRequestBody,
  } satisfies UpdateUserByIdOptionalsInput);
  if (!(updatedUser.name == updatedUserName)) {
    throw new Error('Assertion failed');
  }
  await client.users.deleteUserById(user.id);
});
export {};
