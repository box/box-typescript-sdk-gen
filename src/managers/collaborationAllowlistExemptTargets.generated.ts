import { serializeCollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeCollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { CollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { CollaborationAllowlistExemptTarget } from '../schemas.generated.js';
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
export interface GetCollaborationWhitelistExemptTargetsQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetCollaborationWhitelistExemptTargetsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationWhitelistExemptTargetsHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetCollaborationWhitelistExemptTargetsHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField {
  readonly id: string;
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyArg {
  readonly user: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
}
export class CreateCollaborationWhitelistExemptTargetHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateCollaborationWhitelistExemptTargetHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<
            CreateCollaborationWhitelistExemptTargetHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class GetCollaborationWhitelistExemptTargetByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetCollaborationWhitelistExemptTargetByIdHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetCollaborationWhitelistExemptTargetByIdHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteCollaborationWhitelistExemptTargetByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          DeleteCollaborationWhitelistExemptTargetByIdHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            DeleteCollaborationWhitelistExemptTargetByIdHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class CollaborationAllowlistExemptTargetsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      CollaborationAllowlistExemptTargetsManager,
      | 'getCollaborationWhitelistExemptTargets'
      | 'createCollaborationWhitelistExemptTarget'
      | 'getCollaborationWhitelistExemptTargetById'
      | 'deleteCollaborationWhitelistExemptTargetById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getCollaborationWhitelistExemptTargets(
    queryParams: GetCollaborationWhitelistExemptTargetsQueryParamsArg = {} satisfies GetCollaborationWhitelistExemptTargetsQueryParamsArg,
    headers: GetCollaborationWhitelistExemptTargetsHeadersArg = new GetCollaborationWhitelistExemptTargetsHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistExemptTargets> {
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
        'https://api.box.com/2.0/collaboration_whitelist_exempt_targets'
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
    return deserializeCollaborationAllowlistExemptTargets(
      deserializeJson(response.text)
    );
  }
  async createCollaborationWhitelistExemptTarget(
    requestBody: CreateCollaborationWhitelistExemptTargetRequestBodyArg,
    headers: CreateCollaborationWhitelistExemptTargetHeadersArg = new CreateCollaborationWhitelistExemptTargetHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistExemptTarget> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collaboration_whitelist_exempt_targets'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(
            requestBody
          )
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaborationAllowlistExemptTarget(
      deserializeJson(response.text)
    );
  }
  async getCollaborationWhitelistExemptTargetById(
    collaborationWhitelistExemptTargetId: string,
    headers: GetCollaborationWhitelistExemptTargetByIdHeadersArg = new GetCollaborationWhitelistExemptTargetByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistExemptTarget> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collaboration_whitelist_exempt_targets/',
        toString(collaborationWhitelistExemptTargetId) as string
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
    return deserializeCollaborationAllowlistExemptTarget(
      deserializeJson(response.text)
    );
  }
  async deleteCollaborationWhitelistExemptTargetById(
    collaborationWhitelistExemptTargetId: string,
    headers: DeleteCollaborationWhitelistExemptTargetByIdHeadersArg = new DeleteCollaborationWhitelistExemptTargetByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collaboration_whitelist_exempt_targets/',
        toString(collaborationWhitelistExemptTargetId) as string
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
export function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(
  val: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField
): Json {
  return { ['id']: val.id };
}
export function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(
  val: any
): CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField {
  const id: string = val.id;
  return {
    id: id,
  } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
}
export function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(
  val: CreateCollaborationWhitelistExemptTargetRequestBodyArg
): Json {
  return {
    ['user']:
      serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(
        val.user
      ),
  };
}
export function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(
  val: any
): CreateCollaborationWhitelistExemptTargetRequestBodyArg {
  const user: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField =
    deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(
      val.user
    );
  return {
    user: user,
  } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArg;
}
