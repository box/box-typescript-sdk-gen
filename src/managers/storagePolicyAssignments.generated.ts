import { serializeStoragePolicyAssignments } from '../schemas.generated.js';
import { deserializeStoragePolicyAssignments } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeStoragePolicyAssignment } from '../schemas.generated.js';
import { deserializeStoragePolicyAssignment } from '../schemas.generated.js';
import { StoragePolicyAssignments } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { StoragePolicyAssignment } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
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
export type GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField =
  | 'user'
  | 'enterprise';
export interface GetStoragePolicyAssignmentsQueryParams {
  readonly marker?: string;
  readonly resolvedForType: GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField;
  readonly resolvedForId: string;
}
export class GetStoragePolicyAssignmentsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetStoragePolicyAssignmentsHeaders, 'extraHeaders'>
      | Partial<Pick<GetStoragePolicyAssignmentsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField =
  'storage_policy';
export interface CreateStoragePolicyAssignmentRequestBodyStoragePolicyField {
  readonly type: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
  readonly id: string;
}
export type CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField =
  | 'user'
  | 'enterprise';
export interface CreateStoragePolicyAssignmentRequestBodyAssignedToField {
  readonly type: CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField;
  readonly id: string;
}
export interface CreateStoragePolicyAssignmentRequestBody {
  readonly storagePolicy: CreateStoragePolicyAssignmentRequestBodyStoragePolicyField;
  readonly assignedTo: CreateStoragePolicyAssignmentRequestBodyAssignedToField;
}
export class CreateStoragePolicyAssignmentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateStoragePolicyAssignmentHeaders, 'extraHeaders'>
      | Partial<Pick<CreateStoragePolicyAssignmentHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetStoragePolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField =
  'storage_policy';
export interface UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField {
  readonly type: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
  readonly id: string;
}
export interface UpdateStoragePolicyAssignmentByIdRequestBody {
  readonly storagePolicy: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField;
}
export class UpdateStoragePolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteStoragePolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class StoragePolicyAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          StoragePolicyAssignmentsManager,
          | 'networkSession'
          | 'getStoragePolicyAssignments'
          | 'createStoragePolicyAssignment'
          | 'getStoragePolicyAssignmentById'
          | 'updateStoragePolicyAssignmentById'
          | 'deleteStoragePolicyAssignmentById'
        >
      | Partial<Pick<StoragePolicyAssignmentsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getStoragePolicyAssignments(
    queryParams: GetStoragePolicyAssignmentsQueryParams,
    headers: GetStoragePolicyAssignmentsHeaders = new GetStoragePolicyAssignmentsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<StoragePolicyAssignments> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['resolved_for_type']: toString(queryParams.resolvedForType) as string,
      ['resolved_for_id']: toString(queryParams.resolvedForId) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/storage_policy_assignments'
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
    return deserializeStoragePolicyAssignments(response.data);
  }
  async createStoragePolicyAssignment(
    requestBody: CreateStoragePolicyAssignmentRequestBody,
    headers: CreateStoragePolicyAssignmentHeaders = new CreateStoragePolicyAssignmentHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<StoragePolicyAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/storage_policy_assignments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateStoragePolicyAssignmentRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeStoragePolicyAssignment(response.data);
  }
  async getStoragePolicyAssignmentById(
    storagePolicyAssignmentId: string,
    headers: GetStoragePolicyAssignmentByIdHeaders = new GetStoragePolicyAssignmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<StoragePolicyAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/storage_policy_assignments/',
        toString(storagePolicyAssignmentId) as string
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
    return deserializeStoragePolicyAssignment(response.data);
  }
  async updateStoragePolicyAssignmentById(
    storagePolicyAssignmentId: string,
    requestBody: UpdateStoragePolicyAssignmentByIdRequestBody,
    headers: UpdateStoragePolicyAssignmentByIdHeaders = new UpdateStoragePolicyAssignmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<StoragePolicyAssignment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/storage_policy_assignments/',
        toString(storagePolicyAssignmentId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateStoragePolicyAssignmentByIdRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeStoragePolicyAssignment(response.data);
  }
  async deleteStoragePolicyAssignmentById(
    storagePolicyAssignmentId: string,
    headers: DeleteStoragePolicyAssignmentByIdHeaders = new DeleteStoragePolicyAssignmentByIdHeaders(
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
        '/storage_policy_assignments/',
        toString(storagePolicyAssignmentId) as string
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
export function serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(
  val: GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField
): SerializedData {
  return val;
}
export function deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(
  val: any
): GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField"';
  }
  if (val == 'user') {
    return 'user';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(
  val: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField
): SerializedData {
  return val;
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(
  val: any
): CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField"';
  }
  if (val == 'storage_policy') {
    return 'storage_policy';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(
  val: CreateStoragePolicyAssignmentRequestBodyStoragePolicyField
): SerializedData {
  return {
    ['type']:
      serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(
  val: any
): CreateStoragePolicyAssignmentRequestBodyStoragePolicyField {
  const type: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField =
    deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateStoragePolicyAssignmentRequestBodyStoragePolicyField;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(
  val: CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField
): SerializedData {
  return val;
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(
  val: any
): CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField"';
  }
  if (val == 'user') {
    return 'user';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(
  val: CreateStoragePolicyAssignmentRequestBodyAssignedToField
): SerializedData {
  return {
    ['type']:
      serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(
  val: any
): CreateStoragePolicyAssignmentRequestBodyAssignedToField {
  const type: CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField =
    deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateStoragePolicyAssignmentRequestBodyAssignedToField;
}
export function serializeCreateStoragePolicyAssignmentRequestBody(
  val: CreateStoragePolicyAssignmentRequestBody
): SerializedData {
  return {
    ['storage_policy']:
      serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(
        val.storagePolicy
      ),
    ['assigned_to']:
      serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(
        val.assignedTo
      ),
  };
}
export function deserializeCreateStoragePolicyAssignmentRequestBody(
  val: any
): CreateStoragePolicyAssignmentRequestBody {
  const storagePolicy: CreateStoragePolicyAssignmentRequestBodyStoragePolicyField =
    deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(
      val.storage_policy
    );
  const assignedTo: CreateStoragePolicyAssignmentRequestBodyAssignedToField =
    deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(
      val.assigned_to
    );
  return {
    storagePolicy: storagePolicy,
    assignedTo: assignedTo,
  } satisfies CreateStoragePolicyAssignmentRequestBody;
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(
  val: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField
): SerializedData {
  return val;
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(
  val: any
): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField"';
  }
  if (val == 'storage_policy') {
    return 'storage_policy';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(
  val: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField
): SerializedData {
  return {
    ['type']:
      serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(
  val: any
): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField {
  const type: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField =
    deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField;
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBody(
  val: UpdateStoragePolicyAssignmentByIdRequestBody
): SerializedData {
  return {
    ['storage_policy']:
      serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(
        val.storagePolicy
      ),
  };
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBody(
  val: any
): UpdateStoragePolicyAssignmentByIdRequestBody {
  const storagePolicy: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField =
    deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(
      val.storage_policy
    );
  return {
    storagePolicy: storagePolicy,
  } satisfies UpdateStoragePolicyAssignmentByIdRequestBody;
}
