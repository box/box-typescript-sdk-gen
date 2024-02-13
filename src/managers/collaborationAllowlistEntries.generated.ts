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
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { BoxSdkError } from '../errors.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface GetCollaborationWhitelistEntriesQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetCollaborationWhitelistEntriesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationWhitelistEntriesHeaders, 'extraHeaders'>
      | Partial<Pick<GetCollaborationWhitelistEntriesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateCollaborationWhitelistEntryRequestBodyDirectionField =
  | 'inbound'
  | 'outbound'
  | 'both';
export interface CreateCollaborationWhitelistEntryRequestBody {
  readonly domain: string;
  readonly direction: CreateCollaborationWhitelistEntryRequestBodyDirectionField;
}
export class CreateCollaborationWhitelistEntryHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateCollaborationWhitelistEntryHeaders, 'extraHeaders'>
      | Partial<Pick<CreateCollaborationWhitelistEntryHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetCollaborationWhitelistEntryByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteCollaborationWhitelistEntryByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'>
      | Partial<
          Pick<DeleteCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class CollaborationAllowlistEntriesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          CollaborationAllowlistEntriesManager,
          | 'networkSession'
          | 'getCollaborationWhitelistEntries'
          | 'createCollaborationWhitelistEntry'
          | 'getCollaborationWhitelistEntryById'
          | 'deleteCollaborationWhitelistEntryById'
        >
      | Partial<Pick<CollaborationAllowlistEntriesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getCollaborationWhitelistEntries(
    queryParams: GetCollaborationWhitelistEntriesQueryParams = {} satisfies GetCollaborationWhitelistEntriesQueryParams,
    headers: GetCollaborationWhitelistEntriesHeaders = new GetCollaborationWhitelistEntriesHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/collaboration_whitelist_entries'
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
    return deserializeCollaborationAllowlistEntries(response.data);
  }
  async createCollaborationWhitelistEntry(
    requestBody: CreateCollaborationWhitelistEntryRequestBody,
    headers: CreateCollaborationWhitelistEntryHeaders = new CreateCollaborationWhitelistEntryHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistEntry> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collaboration_whitelist_entries'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateCollaborationWhitelistEntryRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaborationAllowlistEntry(response.data);
  }
  async getCollaborationWhitelistEntryById(
    collaborationWhitelistEntryId: string,
    headers: GetCollaborationWhitelistEntryByIdHeaders = new GetCollaborationWhitelistEntryByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistEntry> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collaboration_whitelist_entries/',
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
    return deserializeCollaborationAllowlistEntry(response.data);
  }
  async deleteCollaborationWhitelistEntryById(
    collaborationWhitelistEntryId: string,
    headers: DeleteCollaborationWhitelistEntryByIdHeaders = new DeleteCollaborationWhitelistEntryByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collaboration_whitelist_entries/',
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
export function serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(
  val: CreateCollaborationWhitelistEntryRequestBodyDirectionField
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(
  val: any
): CreateCollaborationWhitelistEntryRequestBodyDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateCollaborationWhitelistEntryRequestBodyDirectionField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateCollaborationWhitelistEntryRequestBody(
  val: CreateCollaborationWhitelistEntryRequestBody
): SerializedData {
  return {
    ['domain']: val.domain,
    ['direction']:
      serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(
        val.direction
      ),
  };
}
export function deserializeCreateCollaborationWhitelistEntryRequestBody(
  val: any
): CreateCollaborationWhitelistEntryRequestBody {
  const domain: string = val.domain;
  const direction: CreateCollaborationWhitelistEntryRequestBodyDirectionField =
    deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(
      val.direction
    );
  return {
    domain: domain,
    direction: direction,
  } satisfies CreateCollaborationWhitelistEntryRequestBody;
}
