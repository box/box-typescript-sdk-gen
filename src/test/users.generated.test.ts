import { serializeUsers } from '../schemas.generated.js';
import { deserializeUsers } from '../schemas.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeUser } from '../schemas.generated.js';
import { deserializeUser } from '../schemas.generated.js';
import { serializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { serializeUpdateUserByIdRequestBodyArg } from '../managers/users.generated.js';
import { deserializeUpdateUserByIdRequestBodyArg } from '../managers/users.generated.js';
import { Users } from '../schemas.generated.js';
import { UserFull } from '../schemas.generated.js';
import { User } from '../schemas.generated.js';
import { CreateUserRequestBodyArg } from '../managers/users.generated.js';
import { UpdateUserByIdRequestBodyArg } from '../managers/users.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
const jwtConfig: any = JwtConfig.fromConfigJsonString(
  decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
);
const auth: any = new BoxJwtAuth({ config: jwtConfig });
const client: any = new BoxClient({ auth: auth });
test('test_get_users', async function test_get_users(): Promise<any> {
  const users: any = await client.users.getUsers();
  if (!(users.totalCount >= 0)) {
    throw 'Assertion failed';
  }
});
test('test_get_user_me', async function test_get_user_me(): Promise<any> {
  const currentUser: any = await client.users.getUserMe();
  if (!(currentUser.type == 'user')) {
    throw 'Assertion failed';
  }
});
test('test_create_update_get_delete_user', async function test_create_update_get_delete_user(): Promise<any> {
  const userName: any = getUuid();
  const userLogin: any = ''.concat(getUuid(), '@gmail.com') as string;
  const user: any = await client.users.createUser({
    name: userName,
    login: userLogin,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBodyArg);
  if (!(user.name == userName)) {
    throw 'Assertion failed';
  }
  const userById: any = await client.users.getUserById(user.id);
  if (!(userById.id == user.id)) {
    throw 'Assertion failed';
  }
  const updatedUserName: any = getUuid();
  const updatedUser: any = await client.users.updateUserById(user.id, {
    name: updatedUserName,
  } satisfies UpdateUserByIdRequestBodyArg);
  if (!(updatedUser.name == updatedUserName)) {
    throw 'Assertion failed';
  }
  await client.users.deleteUserById(user.id);
});
export {};
