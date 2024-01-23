import { serializeUsers } from '../schemas.generated.js';
import { deserializeUsers } from '../schemas.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBody } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBody } from '../managers/users.generated.js';
import { serializeUpdateUserByIdRequestBody } from '../managers/users.generated.js';
import { deserializeUpdateUserByIdRequestBody } from '../managers/users.generated.js';
import { BoxClient } from '../client.generated.js';
import { Users } from '../schemas.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBody } from '../managers/users.generated.js';
import { UpdateUserByIdRequestBody } from '../managers/users.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('test_get_users', async function test_get_users(): Promise<any> {
  const users: Users = await client.users.getUsers();
  if (!(users.totalCount! >= 0)) {
    throw new Error(String('Assertion failed'));
  }
});
test('test_get_user_me', async function test_get_user_me(): Promise<any> {
  const currentUser: UserFull = await client.users.getUserMe();
  if (!((toString(currentUser.type) as string) == 'user')) {
    throw new Error(String('Assertion failed'));
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
    throw new Error(String('Assertion failed'));
  }
  const userById: UserFull = await client.users.getUserById(user.id);
  if (!(userById.id == user.id)) {
    throw new Error(String('Assertion failed'));
  }
  const updatedUserName: string = getUuid();
  const updatedUser: UserFull = await client.users.updateUserById(user.id, {
    name: updatedUserName,
  } satisfies UpdateUserByIdRequestBody);
  if (!(updatedUser.name == updatedUserName)) {
    throw new Error(String('Assertion failed'));
  }
  await client.users.deleteUserById(user.id);
});
export {};
