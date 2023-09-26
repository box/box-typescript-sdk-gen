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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { serializeJson } from '../json.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { isJson } from '../json.js';
export interface CreateUserTerminateSessionRequestBodyArg {
  readonly userIds: readonly string[];
  readonly userLogins: readonly string[];
}
export class CreateUserTerminateSessionHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: CreateUserTerminateSessionHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface CreateGroupTerminateSessionRequestBodyArg {
  readonly groupIds: readonly string[];
}
export class CreateGroupTerminateSessionHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: CreateGroupTerminateSessionHeadersArg) {
    Object.assign(this, fields);
  }
}
export class SessionTerminationManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      SessionTerminationManager,
      'createUserTerminateSession' | 'createGroupTerminateSession'
    >
  ) {
    Object.assign(this, fields);
  }
  async createUserTerminateSession(
    requestBody: CreateUserTerminateSessionRequestBodyArg,
    headers: CreateUserTerminateSessionHeadersArg = new CreateUserTerminateSessionHeadersArg(
      {}
    )
  ): Promise<SessionTerminationMessage> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/users/terminate_sessions') as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateUserTerminateSessionRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSessionTerminationMessage(deserializeJson(response.text));
  }
  async createGroupTerminateSession(
    requestBody: CreateGroupTerminateSessionRequestBodyArg,
    headers: CreateGroupTerminateSessionHeadersArg = new CreateGroupTerminateSessionHeadersArg(
      {}
    )
  ): Promise<SessionTerminationMessage> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/groups/terminate_sessions') as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateGroupTerminateSessionRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSessionTerminationMessage(deserializeJson(response.text));
  }
}
export function serializeCreateUserTerminateSessionRequestBodyArg(
  val: CreateUserTerminateSessionRequestBodyArg
): Json {
  return {
    ['user_ids']: val.userIds?.map(function (item: string): any {
      return item;
    }) as readonly any[],
    ['user_logins']: val.userLogins?.map(function (item: string): any {
      return item;
    }) as readonly any[],
  };
}
export function deserializeCreateUserTerminateSessionRequestBodyArg(
  val: any
): CreateUserTerminateSessionRequestBodyArg {
  const userIds: readonly string[] = isJson(val.user_ids, 'array')
    ? (val.user_ids?.map(function (itm: Json): any {
        return itm;
      }) as readonly any[])
    : [];
  const userLogins: readonly string[] = isJson(val.user_logins, 'array')
    ? (val.user_logins?.map(function (itm: Json): any {
        return itm;
      }) as readonly any[])
    : [];
  return {
    userIds: userIds,
    userLogins: userLogins,
  } satisfies CreateUserTerminateSessionRequestBodyArg;
}
export function serializeCreateGroupTerminateSessionRequestBodyArg(
  val: CreateGroupTerminateSessionRequestBodyArg
): Json {
  return {
    ['group_ids']: val.groupIds?.map(function (item: string): any {
      return item;
    }) as readonly any[],
  };
}
export function deserializeCreateGroupTerminateSessionRequestBodyArg(
  val: any
): CreateGroupTerminateSessionRequestBodyArg {
  const groupIds: readonly string[] = isJson(val.group_ids, 'array')
    ? (val.group_ids?.map(function (itm: Json): any {
        return itm;
      }) as readonly any[])
    : [];
  return {
    groupIds: groupIds,
  } satisfies CreateGroupTerminateSessionRequestBodyArg;
}
