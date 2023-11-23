import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBodyArg } from '../managers/users.generated.js';
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
test('testWithAsUserHeader', async function testWithAsUserHeader(): Promise<any> {
  const userName: string = getUuid();
  const createdUser: UserFull = await client.users.createUser({
    name: userName,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBodyArg);
  const asUserClient: BoxClient = client.withAsUserHeader(createdUser.id);
  const adminUser: UserFull = await client.users.getUserMe();
  if (!!((toString(adminUser.name) as string) == userName)) {
    throw 'Assertion failed';
  }
  const appUser: UserFull = await asUserClient.users.getUserMe();
  if (!((toString(appUser.name) as string) == userName)) {
    throw 'Assertion failed';
  }
  await client.users.deleteUserById(createdUser.id);
});
test('testWithSuppressedNotifications', async function testWithSuppressedNotifications(): Promise<any> {
  const newClient: BoxClient = client.withSuppressedNotifications();
  const user: UserFull = await newClient.users.getUserMe();
  if (!!(user.id == '')) {
    throw 'Assertion failed';
  }
});
test('testWithExtraHeaders', async function testWithExtraHeaders(): Promise<any> {
  const userName: string = getUuid();
  const createdUser: UserFull = await client.users.createUser({
    name: userName,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBodyArg);
  const asUserClient: BoxClient = client.withExtraHeaders({
    ['As-User']: createdUser.id,
  });
  const adminUser: UserFull = await client.users.getUserMe();
  if (!!((toString(adminUser.name) as string) == userName)) {
    throw 'Assertion failed';
  }
  const appUser: UserFull = await asUserClient.users.getUserMe();
  if (!((toString(appUser.name) as string) == userName)) {
    throw 'Assertion failed';
  }
  await client.users.deleteUserById(createdUser.id);
});
export {};
