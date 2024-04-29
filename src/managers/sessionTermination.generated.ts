import { serializeSessionTerminationMessage } from '../schemas.generated.js';
import { deserializeSessionTerminationMessage } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { SessionTerminationMessage } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class TerminateUsersSessionsOptionals {
  readonly headers: TerminateUsersSessionsHeaders =
    new TerminateUsersSessionsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      TerminateUsersSessionsOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<TerminateUsersSessionsOptionals, 'headers' | 'cancellationToken'>
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
export interface TerminateUsersSessionsOptionalsInput {
  readonly headers?: TerminateUsersSessionsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class TerminateGroupsSessionsOptionals {
  readonly headers: TerminateGroupsSessionsHeaders =
    new TerminateGroupsSessionsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      TerminateGroupsSessionsOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<TerminateGroupsSessionsOptionals, 'headers' | 'cancellationToken'>
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
export interface TerminateGroupsSessionsOptionalsInput {
  readonly headers?: TerminateGroupsSessionsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface TerminateUsersSessionsRequestBody {
  readonly userIds: readonly string[];
  readonly userLogins: readonly string[];
}
export class TerminateUsersSessionsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<TerminateUsersSessionsHeaders, 'extraHeaders'> &
      Partial<Pick<TerminateUsersSessionsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface TerminateUsersSessionsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface TerminateGroupsSessionsRequestBody {
  readonly groupIds: readonly string[];
}
export class TerminateGroupsSessionsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<TerminateGroupsSessionsHeaders, 'extraHeaders'> &
      Partial<Pick<TerminateGroupsSessionsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface TerminateGroupsSessionsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class SessionTerminationManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      SessionTerminationManager,
      'networkSession' | 'terminateUsersSessions' | 'terminateGroupsSessions'
    > &
      Partial<Pick<SessionTerminationManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async terminateUsersSessions(
    requestBody: TerminateUsersSessionsRequestBody,
    optionalsInput: TerminateUsersSessionsOptionalsInput = {}
  ): Promise<SessionTerminationMessage> {
    const optionals: TerminateUsersSessionsOptionals =
      new TerminateUsersSessionsOptionals({
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
        '/users/terminate_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeTerminateUsersSessionsRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSessionTerminationMessage(response.data);
  }
  async terminateGroupsSessions(
    requestBody: TerminateGroupsSessionsRequestBody,
    optionalsInput: TerminateGroupsSessionsOptionalsInput = {}
  ): Promise<SessionTerminationMessage> {
    const optionals: TerminateGroupsSessionsOptionals =
      new TerminateGroupsSessionsOptionals({
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
        '/groups/terminate_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeTerminateGroupsSessionsRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSessionTerminationMessage(response.data);
  }
}
export interface SessionTerminationManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeTerminateUsersSessionsRequestBody(
  val: TerminateUsersSessionsRequestBody
): SerializedData {
  return {
    ['user_ids']: val.userIds.map(function (item: string): SerializedData {
      return item;
    }) as readonly any[],
    ['user_logins']: val.userLogins.map(function (
      item: string
    ): SerializedData {
      return item;
    }) as readonly any[],
  };
}
export function deserializeTerminateUsersSessionsRequestBody(
  val: any
): TerminateUsersSessionsRequestBody {
  const userIds: readonly string[] = sdIsList(val.user_ids) ? val.user_ids : [];
  const userLogins: readonly string[] = sdIsList(val.user_logins)
    ? val.user_logins
    : [];
  return {
    userIds: userIds,
    userLogins: userLogins,
  } satisfies TerminateUsersSessionsRequestBody;
}
export function serializeTerminateGroupsSessionsRequestBody(
  val: TerminateGroupsSessionsRequestBody
): SerializedData {
  return {
    ['group_ids']: val.groupIds.map(function (item: string): SerializedData {
      return item;
    }) as readonly any[],
  };
}
export function deserializeTerminateGroupsSessionsRequestBody(
  val: any
): TerminateGroupsSessionsRequestBody {
  const groupIds: readonly string[] = sdIsList(val.group_ids)
    ? val.group_ids
    : [];
  return { groupIds: groupIds } satisfies TerminateGroupsSessionsRequestBody;
}
