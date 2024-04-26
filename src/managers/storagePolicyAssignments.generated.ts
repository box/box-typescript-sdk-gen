import { serializeStoragePolicyAssignments } from '../schemas.generated.js';
import { deserializeStoragePolicyAssignments } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeStoragePolicyAssignment } from '../schemas.generated.js';
import { deserializeStoragePolicyAssignment } from '../schemas.generated.js';
import { StoragePolicyAssignments } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { StoragePolicyAssignment } from '../schemas.generated.js';
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
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetStoragePolicyAssignmentsOptionals {
  readonly headers: GetStoragePolicyAssignmentsHeaders =
    new GetStoragePolicyAssignmentsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetStoragePolicyAssignmentsOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetStoragePolicyAssignmentsOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface GetStoragePolicyAssignmentsOptionalsInput {
  readonly headers?: GetStoragePolicyAssignmentsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateStoragePolicyAssignmentOptionals {
  readonly headers: CreateStoragePolicyAssignmentHeaders =
    new CreateStoragePolicyAssignmentHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateStoragePolicyAssignmentOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateStoragePolicyAssignmentOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface CreateStoragePolicyAssignmentOptionalsInput {
  readonly headers?: CreateStoragePolicyAssignmentHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetStoragePolicyAssignmentByIdOptionals {
  readonly headers: GetStoragePolicyAssignmentByIdHeaders =
    new GetStoragePolicyAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetStoragePolicyAssignmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetStoragePolicyAssignmentByIdOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface GetStoragePolicyAssignmentByIdOptionalsInput {
  readonly headers?: GetStoragePolicyAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateStoragePolicyAssignmentByIdOptionals {
  readonly headers: UpdateStoragePolicyAssignmentByIdHeaders =
    new UpdateStoragePolicyAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateStoragePolicyAssignmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateStoragePolicyAssignmentByIdOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface UpdateStoragePolicyAssignmentByIdOptionalsInput {
  readonly headers?: UpdateStoragePolicyAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteStoragePolicyAssignmentByIdOptionals {
  readonly headers: DeleteStoragePolicyAssignmentByIdHeaders =
    new DeleteStoragePolicyAssignmentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteStoragePolicyAssignmentByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteStoragePolicyAssignmentByIdOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface DeleteStoragePolicyAssignmentByIdOptionalsInput {
  readonly headers?: DeleteStoragePolicyAssignmentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetStoragePolicyAssignmentsHeaders, 'extraHeaders'> &
      Partial<Pick<GetStoragePolicyAssignmentsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetStoragePolicyAssignmentsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField =
  'storage_policy';
export class CreateStoragePolicyAssignmentRequestBodyStoragePolicyField {
  readonly type: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField =
    'storage_policy' as CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<
      CreateStoragePolicyAssignmentRequestBodyStoragePolicyField,
      'type'
    > &
      Partial<
        Pick<CreateStoragePolicyAssignmentRequestBodyStoragePolicyField, 'type'>
      >
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput {
  readonly type?: CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField;
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
    fields: Omit<CreateStoragePolicyAssignmentHeaders, 'extraHeaders'> &
      Partial<Pick<CreateStoragePolicyAssignmentHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateStoragePolicyAssignmentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetStoragePolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetStoragePolicyAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetStoragePolicyAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField =
  'storage_policy';
export class UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField {
  readonly type: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField =
    'storage_policy' as UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<
      UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField,
      'type'
    > &
      Partial<
        Pick<
          UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField,
          'type'
        >
      >
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput {
  readonly type?: UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField;
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
    fields: Omit<UpdateStoragePolicyAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateStoragePolicyAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteStoragePolicyAssignmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteStoragePolicyAssignmentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteStoragePolicyAssignmentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteStoragePolicyAssignmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class StoragePolicyAssignmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      StoragePolicyAssignmentsManager,
      | 'networkSession'
      | 'getStoragePolicyAssignments'
      | 'createStoragePolicyAssignment'
      | 'getStoragePolicyAssignmentById'
      | 'updateStoragePolicyAssignmentById'
      | 'deleteStoragePolicyAssignmentById'
    > &
      Partial<Pick<StoragePolicyAssignmentsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getStoragePolicyAssignments(
    queryParams: GetStoragePolicyAssignmentsQueryParams,
    optionalsInput: GetStoragePolicyAssignmentsOptionalsInput = {}
  ): Promise<StoragePolicyAssignments> {
    const optionals: any = new GetStoragePolicyAssignmentsOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: CreateStoragePolicyAssignmentOptionalsInput = {}
  ): Promise<StoragePolicyAssignment> {
    const optionals: any = new CreateStoragePolicyAssignmentOptionals({
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
    optionalsInput: GetStoragePolicyAssignmentByIdOptionalsInput = {}
  ): Promise<StoragePolicyAssignment> {
    const optionals: any = new GetStoragePolicyAssignmentByIdOptionals({
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
    optionalsInput: UpdateStoragePolicyAssignmentByIdOptionalsInput = {}
  ): Promise<StoragePolicyAssignment> {
    const optionals: any = new UpdateStoragePolicyAssignmentByIdOptionals({
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
    optionalsInput: DeleteStoragePolicyAssignmentByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: any = new DeleteStoragePolicyAssignmentByIdOptionals({
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
export interface StoragePolicyAssignmentsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(
  val: any
): GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField"',
    });
  }
  if (val == 'user') {
    return 'user';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(
  val: any
): CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField"',
    });
  }
  if (val == 'storage_policy') {
    return 'storage_policy';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(
  val: any
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
export function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(
  val: any
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(
            val.type
          ),
    ['id']: val.id,
  };
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(
  val: any
): CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput {
  const type:
    | undefined
    | CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(
          val.type
        );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput;
}
export function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(
  val: any
): CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField"',
    });
  }
  if (val == 'user') {
    return 'user';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(
  val: any
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
  val: any
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
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(
  val: any
): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField"',
    });
  }
  if (val == 'storage_policy') {
    return 'storage_policy';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(
  val: any
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
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(
  val: any
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(
            val.type
          ),
    ['id']: val.id,
  };
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(
  val: any
): UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput {
  const type:
    | undefined
    | UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField =
    val.type == void 0
      ? void 0
      : deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(
          val.type
        );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput;
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBody(
  val: any
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
