import { serializeEmailAliases } from '../schemas/emailAliases.generated.js';
import { deserializeEmailAliases } from '../schemas/emailAliases.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeEmailAlias } from '../schemas/emailAlias.generated.js';
import { deserializeEmailAlias } from '../schemas/emailAlias.generated.js';
import { EmailAliases } from '../schemas/emailAliases.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { EmailAlias } from '../schemas/emailAlias.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetUserEmailAliasesOptionals {
  readonly headers: GetUserEmailAliasesHeaders = new GetUserEmailAliasesHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetUserEmailAliasesOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetUserEmailAliasesOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetUserEmailAliasesOptionalsInput {
  readonly headers?: GetUserEmailAliasesHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateUserEmailAliasOptionals {
  readonly headers: CreateUserEmailAliasHeaders =
    new CreateUserEmailAliasHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateUserEmailAliasOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CreateUserEmailAliasOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateUserEmailAliasOptionalsInput {
  readonly headers?: CreateUserEmailAliasHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteUserEmailAliasByIdOptionals {
  readonly headers: DeleteUserEmailAliasByIdHeaders =
    new DeleteUserEmailAliasByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteUserEmailAliasByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteUserEmailAliasByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteUserEmailAliasByIdOptionalsInput {
  readonly headers?: DeleteUserEmailAliasByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetUserEmailAliasesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetUserEmailAliasesHeaders, 'extraHeaders'> &
      Partial<Pick<GetUserEmailAliasesHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetUserEmailAliasesHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface CreateUserEmailAliasRequestBody {
  readonly email: string;
}
export class CreateUserEmailAliasHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateUserEmailAliasHeaders, 'extraHeaders'> &
      Partial<Pick<CreateUserEmailAliasHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateUserEmailAliasHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteUserEmailAliasByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteUserEmailAliasByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteUserEmailAliasByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteUserEmailAliasByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class EmailAliasesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      EmailAliasesManager,
      | 'networkSession'
      | 'getUserEmailAliases'
      | 'createUserEmailAlias'
      | 'deleteUserEmailAliasById'
    > &
      Partial<Pick<EmailAliasesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getUserEmailAliases(
    userId: string,
    optionalsInput: GetUserEmailAliasesOptionalsInput = {}
  ): Promise<EmailAliases> {
    const optionals: GetUserEmailAliasesOptionals =
      new GetUserEmailAliasesOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/',
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
    requestBody: CreateUserEmailAliasRequestBody,
    optionalsInput: CreateUserEmailAliasOptionalsInput = {}
  ): Promise<EmailAlias> {
    const optionals: CreateUserEmailAliasOptionals =
      new CreateUserEmailAliasOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/',
        toString(userId) as string,
        '/email_aliases'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateUserEmailAliasRequestBody(requestBody),
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
    optionalsInput: DeleteUserEmailAliasByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteUserEmailAliasByIdOptionals =
      new DeleteUserEmailAliasByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/',
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
export interface EmailAliasesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeCreateUserEmailAliasRequestBody(
  val: CreateUserEmailAliasRequestBody
): SerializedData {
  return { ['email']: val.email };
}
export function deserializeCreateUserEmailAliasRequestBody(
  val: SerializedData
): CreateUserEmailAliasRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateUserEmailAliasRequestBody"',
    });
  }
  if (val.email == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "email" of type "CreateUserEmailAliasRequestBody" to be defined',
    });
  }
  if (!sdIsString(val.email)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "email" of type "CreateUserEmailAliasRequestBody"',
    });
  }
  const email: string = val.email;
  return { email: email } satisfies CreateUserEmailAliasRequestBody;
}
