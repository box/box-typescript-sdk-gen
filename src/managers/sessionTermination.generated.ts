import { serializeSessionTerminationMessage } from '../schemas.generated.js';
import { deserializeSessionTerminationMessage } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { SessionTerminationMessage } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface CreateUserTerminateSessionRequestBody {
  readonly userIds: readonly string[];
  readonly userLogins: readonly string[];
}
export class CreateUserTerminateSessionHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateUserTerminateSessionHeaders, 'extraHeaders'>
      | Partial<Pick<CreateUserTerminateSessionHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateGroupTerminateSessionRequestBody {
  readonly groupIds: readonly string[];
}
export class CreateGroupTerminateSessionHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateGroupTerminateSessionHeaders, 'extraHeaders'>
      | Partial<Pick<CreateGroupTerminateSessionHeaders, 'extraHeaders'>>
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
          | 'createUserTerminateSession'
          | 'createGroupTerminateSession'
        >
      | Partial<Pick<SessionTerminationManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async createUserTerminateSession(
    requestBody: CreateUserTerminateSessionRequestBody,
    headers: CreateUserTerminateSessionHeaders = new CreateUserTerminateSessionHeaders(
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
        data: serializeCreateUserTerminateSessionRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSessionTerminationMessage(response.data);
  }
  async createGroupTerminateSession(
    requestBody: CreateGroupTerminateSessionRequestBody,
    headers: CreateGroupTerminateSessionHeaders = new CreateGroupTerminateSessionHeaders(
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
        data: serializeCreateGroupTerminateSessionRequestBody(requestBody),
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
export function serializeCreateUserTerminateSessionRequestBody(
  val: CreateUserTerminateSessionRequestBody
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
export function deserializeCreateUserTerminateSessionRequestBody(
  val: any
): CreateUserTerminateSessionRequestBody {
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
  } satisfies CreateUserTerminateSessionRequestBody;
}
export function serializeCreateGroupTerminateSessionRequestBody(
  val: CreateGroupTerminateSessionRequestBody
): SerializedData {
  return {
    ['group_ids']: val.groupIds.map(function (item: string): any {
      return item;
    }) as readonly any[],
  };
}
export function deserializeCreateGroupTerminateSessionRequestBody(
  val: any
): CreateGroupTerminateSessionRequestBody {
  const groupIds: readonly string[] = sdIsList(val.group_ids)
    ? (val.group_ids.map(function (itm: SerializedData): any {
        return itm;
      }) as readonly any[])
    : [];
  return {
    groupIds: groupIds,
  } satisfies CreateGroupTerminateSessionRequestBody;
}
