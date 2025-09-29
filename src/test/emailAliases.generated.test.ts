import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeCreateUserRequestBody } from '@/managers/users.generated';
import { deserializeCreateUserRequestBody } from '@/managers/users.generated';
import { serializeEmailAliases } from '@/schemas/emailAliases.generated';
import { deserializeEmailAliases } from '@/schemas/emailAliases.generated';
import { serializeEmailAlias } from '@/schemas/emailAlias.generated';
import { deserializeEmailAlias } from '@/schemas/emailAlias.generated';
import { serializeCreateUserEmailAliasRequestBody } from '@/managers/emailAliases.generated';
import { deserializeCreateUserEmailAliasRequestBody } from '@/managers/emailAliases.generated';
import { BoxClient } from '@/client.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { CreateUserRequestBody } from '@/managers/users.generated';
import { EmailAliases } from '@/schemas/emailAliases.generated';
import { EmailAlias } from '@/schemas/emailAlias.generated';
import { CreateUserEmailAliasRequestBody } from '@/managers/emailAliases.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testEmailAliases', async function testEmailAliases(): Promise<any> {
  const newUserName: string = getUuid();
  const newUserLogin: string = ''.concat(getUuid(), '@boxdemo.com') as string;
  const newUser: UserFull = await client.users.createUser({
    name: newUserName,
    login: newUserLogin,
  } satisfies CreateUserRequestBody);
  const aliases: EmailAliases = await client.emailAliases.getUserEmailAliases(
    newUser.id,
  );
  if (!(aliases.totalCount == 0)) {
    throw new Error('Assertion failed');
  }
  const newAliasEmail: string = ''.concat(newUser.id, '@boxdemo.com') as string;
  const newAlias: EmailAlias = await client.emailAliases.createUserEmailAlias(
    newUser.id,
    { email: newAliasEmail } satisfies CreateUserEmailAliasRequestBody,
  );
  const updatedAliases: EmailAliases =
    await client.emailAliases.getUserEmailAliases(newUser.id);
  if (!(updatedAliases.totalCount == 1)) {
    throw new Error('Assertion failed');
  }
  if (!(updatedAliases.entries![0].email == newAliasEmail)) {
    throw new Error('Assertion failed');
  }
  await client.emailAliases.deleteUserEmailAliasById(newUser.id, newAlias.id!);
  const finalAliases: EmailAliases =
    await client.emailAliases.getUserEmailAliases(newUser.id);
  if (!(finalAliases.totalCount == 0)) {
    throw new Error('Assertion failed');
  }
  await client.users.deleteUserById(newUser.id);
});
export {};
