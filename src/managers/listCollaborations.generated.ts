import { serializeCollaborations } from '../schemas.generated.js';
import { deserializeCollaborations } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Collaborations } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
export interface GetFileCollaborationsQueryParamsArg {
  readonly fields?: string;
  readonly limit?: number;
  readonly marker?: string;
}
export class GetFileCollaborationsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetFileCollaborationsHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface GetFolderCollaborationsQueryParamsArg {
  readonly fields?: string;
}
export class GetFolderCollaborationsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetFolderCollaborationsHeadersArg) {
    Object.assign(this, fields);
  }
}
export type GetCollaborationsQueryParamsArgStatusField = 'pending';
export interface GetCollaborationsQueryParamsArg {
  readonly status: GetCollaborationsQueryParamsArgStatusField;
  readonly fields?: string;
  readonly offset?: number;
  readonly limit?: number;
}
export class GetCollaborationsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetCollaborationsHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface GetGroupCollaborationsQueryParamsArg {
  readonly limit?: number;
  readonly offset?: number;
}
export class GetGroupCollaborationsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetGroupCollaborationsHeadersArg) {
    Object.assign(this, fields);
  }
}
export class ListCollaborationsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      ListCollaborationsManager,
      | 'getFileCollaborations'
      | 'getFolderCollaborations'
      | 'getCollaborations'
      | 'getGroupCollaborations'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFileCollaborations(
    fileId: string,
    queryParams: GetFileCollaborationsQueryParamsArg = {} satisfies GetFileCollaborationsQueryParamsArg,
    headers: GetFileCollaborationsHeadersArg = new GetFileCollaborationsHeadersArg(
      {}
    )
  ): Promise<Collaborations> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: toString(queryParams.fields),
      ['limit']: toString(queryParams.limit),
      ['marker']: toString(queryParams.marker),
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        fileId,
        '/collaborations'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaborations(deserializeJson(response.text));
  }
  async getFolderCollaborations(
    folderId: string,
    queryParams: GetFolderCollaborationsQueryParamsArg = {} satisfies GetFolderCollaborationsQueryParamsArg,
    headers: GetFolderCollaborationsHeadersArg = new GetFolderCollaborationsHeadersArg(
      {}
    )
  ): Promise<Collaborations> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        folderId,
        '/collaborations'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaborations(deserializeJson(response.text));
  }
  async getCollaborations(
    queryParams: GetCollaborationsQueryParamsArg,
    headers: GetCollaborationsHeadersArg = new GetCollaborationsHeadersArg({})
  ): Promise<Collaborations> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['status']: toString(queryParams.status),
      ['fields']: toString(queryParams.fields),
      ['offset']: toString(queryParams.offset),
      ['limit']: toString(queryParams.limit),
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/collaborations') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaborations(deserializeJson(response.text));
  }
  async getGroupCollaborations(
    groupId: string,
    queryParams: GetGroupCollaborationsQueryParamsArg = {} satisfies GetGroupCollaborationsQueryParamsArg,
    headers: GetGroupCollaborationsHeadersArg = new GetGroupCollaborationsHeadersArg(
      {}
    )
  ): Promise<Collaborations> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['limit']: toString(queryParams.limit),
      ['offset']: toString(queryParams.offset),
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/groups/',
        groupId,
        '/collaborations'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaborations(deserializeJson(response.text));
  }
}
