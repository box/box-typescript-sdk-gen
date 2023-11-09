import { serializeEmailAliases } from '../schemas.generated.js';
import { deserializeEmailAliases } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeEmailAlias } from '../schemas.generated.js';
import { deserializeEmailAlias } from '../schemas.generated.js';
import { EmailAliases } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { EmailAlias } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class GetUserEmailAliasesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUserEmailAliasesHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetUserEmailAliasesHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateUserEmailAliasRequestBodyArg {
  readonly email: string;
}
export class CreateUserEmailAliasHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateUserEmailAliasHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateUserEmailAliasHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteUserEmailAliasByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteUserEmailAliasByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteUserEmailAliasByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class EmailAliasesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      EmailAliasesManager,
      | 'getUserEmailAliases'
      | 'createUserEmailAlias'
      | 'deleteUserEmailAliasById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getUserEmailAliases(
    userId: string,
    headers: GetUserEmailAliasesHeadersArg = new GetUserEmailAliasesHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<EmailAliases> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
        toString(userId) as string,
        '/email_aliases'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeEmailAliases(response.data);
  }
  async createUserEmailAlias(
    userId: string,
    requestBody: CreateUserEmailAliasRequestBodyArg,
    headers: CreateUserEmailAliasHeadersArg = new CreateUserEmailAliasHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<EmailAlias> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
        toString(userId) as string,
        '/email_aliases'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateUserEmailAliasRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeEmailAlias(response.data);
  }
  async deleteUserEmailAliasById(
    userId: string,
    emailAliasId: string,
    headers: DeleteUserEmailAliasByIdHeadersArg = new DeleteUserEmailAliasByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
        toString(userId) as string,
        '/email_aliases/',
        toString(emailAliasId) as string
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeCreateUserEmailAliasRequestBodyArg(
  val: CreateUserEmailAliasRequestBodyArg
): SerializedData {
  return { ['email']: val.email };
}
export function deserializeCreateUserEmailAliasRequestBodyArg(
  val: any
): CreateUserEmailAliasRequestBodyArg {
  const email: string = val.email;
  return { email: email } satisfies CreateUserEmailAliasRequestBodyArg;
}
