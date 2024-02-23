import { serializeSessionTerminationMessage } from '../schemas.generated.js';
import { deserializeSessionTerminationMessage } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { SessionTerminationMessage } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.js';
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
export interface TerminateUsersSessionsRequestBody {
  readonly userIds: readonly string[];
  readonly userLogins: readonly string[];
}
export class TerminateUsersSessionsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<TerminateUsersSessionsHeaders, 'extraHeaders'>
      | Partial<Pick<TerminateUsersSessionsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface TerminateGroupsSessionsRequestBody {
  readonly groupIds: readonly string[];
}
export class TerminateGroupsSessionsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<TerminateGroupsSessionsHeaders, 'extraHeaders'>
      | Partial<Pick<TerminateGroupsSessionsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SessionTerminationManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          SessionTerminationManager,
          | 'networkSession'
          | 'terminateUsersSessions'
          | 'terminateGroupsSessions'
        >
      | Partial<Pick<SessionTerminationManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async terminateUsersSessions(
    requestBody: TerminateUsersSessionsRequestBody,
    headers: TerminateUsersSessionsHeaders = new TerminateUsersSessionsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SessionTerminationMessage> {
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
    headers: TerminateGroupsSessionsHeaders = new TerminateGroupsSessionsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SessionTerminationMessage> {
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
export function serializeTerminateUsersSessionsRequestBody(
  val: TerminateUsersSessionsRequestBody
): SerializedData {
  return {
    ['user_ids']: val.userIds.map(function (item: string): any {
      return item;
    }) as readonly any[],
    ['user_logins']: val.userLogins.map(function (item: string): any {
      return item;
    }) as readonly any[],
  };
}
export function deserializeTerminateUsersSessionsRequestBody(
  val: any
): TerminateUsersSessionsRequestBody {
  const userIds: readonly string[] = sdIsList(val.user_ids)
    ? (val.user_ids.map(function (itm: SerializedData): any {
        return itm;
      }) as readonly any[])
    : [];
  const userLogins: readonly string[] = sdIsList(val.user_logins)
    ? (val.user_logins.map(function (itm: SerializedData): any {
        return itm;
      }) as readonly any[])
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
    ['group_ids']: val.groupIds.map(function (item: string): any {
      return item;
    }) as readonly any[],
  };
}
export function deserializeTerminateGroupsSessionsRequestBody(
  val: any
): TerminateGroupsSessionsRequestBody {
  const groupIds: readonly string[] = sdIsList(val.group_ids)
    ? (val.group_ids.map(function (itm: SerializedData): any {
        return itm;
      }) as readonly any[])
    : [];
  return { groupIds: groupIds } satisfies TerminateGroupsSessionsRequestBody;
}
