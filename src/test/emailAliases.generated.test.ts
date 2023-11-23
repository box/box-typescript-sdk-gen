import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { serializeEmailAliases } from '../schemas.generated.js';
import { deserializeEmailAliases } from '../schemas.generated.js';
import { serializeEmailAlias } from '../schemas.generated.js';
import { deserializeEmailAlias } from '../schemas.generated.js';
import { serializeCreateUserEmailAliasRequestBodyArg } from '../managers/emailAliases.generated.js';
import { deserializeCreateUserEmailAliasRequestBodyArg } from '../managers/emailAliases.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBodyArg } from '../managers/users.generated.js';
import { EmailAliases } from '../schemas.generated.js';
import { EmailAlias } from '../schemas.generated.js';
import { CreateUserEmailAliasRequestBodyArg } from '../managers/emailAliases.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testEmailAliases', async function testEmailAliases(): Promise<any> {
  const newUserName: string = getUuid();
  const newUserLogin: string = ''.concat(getUuid(), '@boxdemo.com') as string;
  const newUser: UserFull = await client.users.createUser({
    name: newUserName,
    login: newUserLogin,
  } satisfies CreateUserRequestBodyArg);
  const aliases: EmailAliases = await client.emailAliases.getUserEmailAliases(
    newUser.id
  );
  if (!(aliases.totalCount == 0)) {
    throw 'Assertion failed';
  }
  const newAliasEmail: string = ''.concat(newUser.id, '@boxdemo.com') as string;
  const newAlias: EmailAlias = await client.emailAliases.createUserEmailAlias(
    newUser.id,
    { email: newAliasEmail } satisfies CreateUserEmailAliasRequestBodyArg
  );
  const updatedAliases: EmailAliases =
    await client.emailAliases.getUserEmailAliases(newUser.id);
  if (!(updatedAliases.totalCount == 1)) {
    throw 'Assertion failed';
  }
  if (!(updatedAliases.entries![0].email == newAliasEmail)) {
    throw 'Assertion failed';
  }
  await client.emailAliases.deleteUserEmailAliasById(newUser.id, newAlias.id!);
  const finalAliases: EmailAliases =
    await client.emailAliases.getUserEmailAliases(newUser.id);
  if (!(finalAliases.totalCount == 0)) {
    throw 'Assertion failed';
  }
  await client.users.deleteUserById(newUser.id);
});
export {};
