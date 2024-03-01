import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBody } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBody } from '../managers/users.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBody } from '../managers/users.generated.js';
import { Interceptor } from '../networking/interceptors.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { jsonToSerializedData } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: BoxClient = getDefaultClient();
test('testWithAsUserHeader', async function testWithAsUserHeader(): Promise<any> {
  const userName: string = getUuid();
  const createdUser: UserFull = await client.users.createUser({
    name: userName,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const asUserClient: BoxClient = client.withAsUserHeader(createdUser.id);
  const adminUser: UserFull = await client.users.getUserMe();
  if (!!((toString(adminUser.name) as string) == userName)) {
    throw new Error('Assertion failed');
  }
  const appUser: UserFull = await asUserClient.users.getUserMe();
  if (!((toString(appUser.name) as string) == userName)) {
    throw new Error('Assertion failed');
  }
  await client.users.deleteUserById(createdUser.id);
});
test('testWithSuppressedNotifications', async function testWithSuppressedNotifications(): Promise<any> {
  const newClient: BoxClient = client.withSuppressedNotifications();
  const user: UserFull = await newClient.users.getUserMe();
  if (!!(user.id == '')) {
    throw new Error('Assertion failed');
  }
});
test('testWithExtraHeaders', async function testWithExtraHeaders(): Promise<any> {
  const userName: string = getUuid();
  const createdUser: UserFull = await client.users.createUser({
    name: userName,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const asUserClient: BoxClient = client.withExtraHeaders({
    ['As-User']: createdUser.id,
  });
  const adminUser: UserFull = await client.users.getUserMe();
  if (!!((toString(adminUser.name) as string) == userName)) {
    throw new Error('Assertion failed');
  }
  const appUser: UserFull = await asUserClient.users.getUserMe();
  if (!((toString(appUser.name) as string) == userName)) {
    throw new Error('Assertion failed');
  }
  await client.users.deleteUserById(createdUser.id);
});
test('testWithInterceptors', async function testWithInterceptors(): Promise<any> {
  const user: UserFull = await client.users.getUserMe();
  if (!(user.role == void 0)) {
    throw new Error('Assertion failed');
  }
  function beforeRequest(options: FetchOptions): FetchOptions {
    return {
      method: options.method,
      headers: options.headers,
      params: { ...options.params, ...{ ['fields']: 'role' } },
      data: options.data,
      fileStream: options.fileStream,
      multipartData: options.multipartData,
      contentType: options.contentType,
      responseFormat: options.responseFormat,
      auth: options.auth,
      networkSession: options.networkSession,
      cancellationToken: options.cancellationToken,
    } satisfies FetchOptions;
  }
  function emptyAfterRequest(response: FetchResponse): FetchResponse {
    return response;
  }
  const clientWithInterceptor: BoxClient = client.withInterceptors([
    {
      beforeRequest: beforeRequest,
      afterRequest: emptyAfterRequest,
    } satisfies Interceptor,
  ]);
  const newUser: UserFull = await clientWithInterceptor.users.getUserMe();
  if (!!(newUser.role == void 0)) {
    throw new Error('Assertion failed');
  }
  function emptyBeforeRequest(options: FetchOptions): FetchOptions {
    return options;
  }
  function afterRequest(response: FetchResponse): FetchResponse {
    return {
      status: response.status,
      data: jsonToSerializedData('{"id": "123", "type": "user"}'),
      content: response.content,
      headers: response.headers,
    } satisfies FetchResponse;
  }
  const clientWithTwoInterceptors: BoxClient =
    clientWithInterceptor.withInterceptors([
      {
        beforeRequest: emptyBeforeRequest,
        afterRequest: afterRequest,
      } satisfies Interceptor,
    ]);
  const superNewUser: UserFull =
    await clientWithTwoInterceptors.users.getUserMe();
  if (!(superNewUser.id == '123')) {
    throw new Error('Assertion failed');
  }
});
test('testWithFailingInterceptors', async function testWithFailingInterceptors(): Promise<any> {
  const user: UserFull = await client.users.getUserMe();
  if (!!(user.id == void 0)) {
    throw new Error('Assertion failed');
  }
  function emptyBeforeRequest(options: FetchOptions): FetchOptions {
    return options;
  }
  function afterRequest(response: FetchResponse): FetchResponse {
    return {
      status: 400,
      data: response.data,
      content: response.content,
      headers: response.headers,
    } satisfies FetchResponse;
  }
  const clientWithInterceptor: BoxClient = client.withInterceptors([
    {
      beforeRequest: emptyBeforeRequest,
      afterRequest: afterRequest,
    } satisfies Interceptor,
  ]);
  await expect(async () => {
    await clientWithInterceptor.users.getUserMe();
  }).rejects.toThrow();
});
export {};
