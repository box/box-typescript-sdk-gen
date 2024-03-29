import { serializeCollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeCollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { CollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { CollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
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
export interface GetCollaborationWhitelistExemptTargetsQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetCollaborationWhitelistExemptTargetsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationWhitelistExemptTargetsHeaders, 'extraHeaders'>
      | Partial<
          Pick<GetCollaborationWhitelistExemptTargetsHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyUserField {
  readonly id: string;
}
export interface CreateCollaborationWhitelistExemptTargetRequestBody {
  readonly user: CreateCollaborationWhitelistExemptTargetRequestBodyUserField;
}
export class CreateCollaborationWhitelistExemptTargetHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateCollaborationWhitelistExemptTargetHeaders, 'extraHeaders'>
      | Partial<
          Pick<CreateCollaborationWhitelistExemptTargetHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class GetCollaborationWhitelistExemptTargetByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'>
      | Partial<
          Pick<GetCollaborationWhitelistExemptTargetByIdHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteCollaborationWhitelistExemptTargetByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          DeleteCollaborationWhitelistExemptTargetByIdHeaders,
          'extraHeaders'
        >
      | Partial<
          Pick<
            DeleteCollaborationWhitelistExemptTargetByIdHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class CollaborationAllowlistExemptTargetsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          CollaborationAllowlistExemptTargetsManager,
          | 'networkSession'
          | 'getCollaborationWhitelistExemptTargets'
          | 'createCollaborationWhitelistExemptTarget'
          | 'getCollaborationWhitelistExemptTargetById'
          | 'deleteCollaborationWhitelistExemptTargetById'
        >
      | Partial<
          Pick<CollaborationAllowlistExemptTargetsManager, 'networkSession'>
        >
  ) {
    Object.assign(this, fields);
  }
  async getCollaborationWhitelistExemptTargets(
    queryParams: GetCollaborationWhitelistExemptTargetsQueryParams = {} satisfies GetCollaborationWhitelistExemptTargetsQueryParams,
    headers: GetCollaborationWhitelistExemptTargetsHeaders = new GetCollaborationWhitelistExemptTargetsHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/collaboration_whitelist_exempt_targets'
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
    return deserializeCollaborationAllowlistExemptTargets(response.data);
  }
  async createCollaborationWhitelistExemptTarget(
    requestBody: CreateCollaborationWhitelistExemptTargetRequestBody,
    headers: CreateCollaborationWhitelistExemptTargetHeaders = new CreateCollaborationWhitelistExemptTargetHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistExemptTarget> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collaboration_whitelist_exempt_targets'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateCollaborationWhitelistExemptTargetRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaborationAllowlistExemptTarget(response.data);
  }
  async getCollaborationWhitelistExemptTargetById(
    collaborationWhitelistExemptTargetId: string,
    headers: GetCollaborationWhitelistExemptTargetByIdHeaders = new GetCollaborationWhitelistExemptTargetByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<CollaborationAllowlistExemptTarget> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collaboration_whitelist_exempt_targets/',
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
    return deserializeCollaborationAllowlistExemptTarget(response.data);
  }
  async deleteCollaborationWhitelistExemptTargetById(
    collaborationWhitelistExemptTargetId: string,
    headers: DeleteCollaborationWhitelistExemptTargetByIdHeaders = new DeleteCollaborationWhitelistExemptTargetByIdHeaders(
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
        '/collaboration_whitelist_exempt_targets/',
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
export function serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(
  val: any
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(
  val: any
): CreateCollaborationWhitelistExemptTargetRequestBodyUserField {
  const id: string = val.id;
  return {
    id: id,
  } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyUserField;
}
export function serializeCreateCollaborationWhitelistExemptTargetRequestBody(
  val: any
): SerializedData {
  return {
    ['user']:
      serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(
        val.user
      ),
  };
}
export function deserializeCreateCollaborationWhitelistExemptTargetRequestBody(
  val: any
): CreateCollaborationWhitelistExemptTargetRequestBody {
  const user: CreateCollaborationWhitelistExemptTargetRequestBodyUserField =
    deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(
      val.user
    );
  return {
    user: user,
  } satisfies CreateCollaborationWhitelistExemptTargetRequestBody;
}
