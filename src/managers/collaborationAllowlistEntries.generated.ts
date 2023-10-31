import { serializeCollaborationAllowlistEntries } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistEntries } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeCollaborationAllowlistEntry } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistEntry } from '../schemas.generated.js';
import { CollaborationAllowlistEntries } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { CollaborationAllowlistEntry } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export interface GetCollaborationWhitelistEntriesQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetCollaborationWhitelistEntriesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationWhitelistEntriesHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetCollaborationWhitelistEntriesHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export type CreateCollaborationWhitelistEntryRequestBodyArgDirectionField =
  | 'inbound'
  | 'outbound'
  | 'both';
export interface CreateCollaborationWhitelistEntryRequestBodyArg {
  readonly domain: string;
  readonly direction: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
}
export class CreateCollaborationWhitelistEntryHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateCollaborationWhitelistEntryHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<CreateCollaborationWhitelistEntryHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class GetCollaborationWhitelistEntryByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationWhitelistEntryByIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetCollaborationWhitelistEntryByIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteCollaborationWhitelistEntryByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteCollaborationWhitelistEntryByIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<DeleteCollaborationWhitelistEntryByIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class CollaborationAllowlistEntriesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      CollaborationAllowlistEntriesManager,
      | 'getCollaborationWhitelistEntries'
      | 'createCollaborationWhitelistEntry'
      | 'getCollaborationWhitelistEntryById'
      | 'deleteCollaborationWhitelistEntryById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getCollaborationWhitelistEntries(
    queryParams: GetCollaborationWhitelistEntriesQueryParamsArg = {} satisfies GetCollaborationWhitelistEntriesQueryParamsArg,
    headers: GetCollaborationWhitelistEntriesHeadersArg = new GetCollaborationWhitelistEntriesHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistEntries> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collaboration_whitelist_entries'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaborationAllowlistEntries(
      deserializeJson(response.text)
    );
  }
  async createCollaborationWhitelistEntry(
    requestBody: CreateCollaborationWhitelistEntryRequestBodyArg,
    headers: CreateCollaborationWhitelistEntryHeadersArg = new CreateCollaborationWhitelistEntryHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistEntry> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collaboration_whitelist_entries'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateCollaborationWhitelistEntryRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaborationAllowlistEntry(
      deserializeJson(response.text)
    );
  }
  async getCollaborationWhitelistEntryById(
    collaborationWhitelistEntryId: string,
    headers: GetCollaborationWhitelistEntryByIdHeadersArg = new GetCollaborationWhitelistEntryByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistEntry> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collaboration_whitelist_entries/',
        toString(collaborationWhitelistEntryId) as string
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
    return deserializeCollaborationAllowlistEntry(
      deserializeJson(response.text)
    );
  }
  async deleteCollaborationWhitelistEntryById(
    collaborationWhitelistEntryId: string,
    headers: DeleteCollaborationWhitelistEntryByIdHeadersArg = new DeleteCollaborationWhitelistEntryByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collaboration_whitelist_entries/',
        toString(collaborationWhitelistEntryId) as string
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
export function serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(
  val: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField
): Json {
  return val;
}
export function deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(
  val: any
): CreateCollaborationWhitelistEntryRequestBodyArgDirectionField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateCollaborationWhitelistEntryRequestBodyArgDirectionField"';
  }
  if (val == 'inbound') {
    return 'inbound';
  }
  if (val == 'outbound') {
    return 'outbound';
  }
  if (val == 'both') {
    return 'both';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateCollaborationWhitelistEntryRequestBodyArg(
  val: CreateCollaborationWhitelistEntryRequestBodyArg
): Json {
  return {
    ['domain']: val.domain,
    ['direction']:
      serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(
        val.direction
      ),
  };
}
export function deserializeCreateCollaborationWhitelistEntryRequestBodyArg(
  val: any
): CreateCollaborationWhitelistEntryRequestBodyArg {
  const domain: string = val.domain;
  const direction: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField =
    deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(
      val.direction
    );
  return {
    domain: domain,
    direction: direction,
  } satisfies CreateCollaborationWhitelistEntryRequestBodyArg;
}
