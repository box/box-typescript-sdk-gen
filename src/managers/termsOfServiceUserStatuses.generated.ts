import { serializeTermsOfServiceUserStatuses } from '../schemas/termsOfServiceUserStatuses.generated.js';
import { deserializeTermsOfServiceUserStatuses } from '../schemas/termsOfServiceUserStatuses.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeTermsOfServiceUserStatus } from '../schemas/termsOfServiceUserStatus.generated.js';
import { deserializeTermsOfServiceUserStatus } from '../schemas/termsOfServiceUserStatus.generated.js';
import { TermsOfServiceUserStatuses } from '../schemas/termsOfServiceUserStatuses.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { TermsOfServiceUserStatus } from '../schemas/termsOfServiceUserStatus.generated.js';
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
export class GetTermsOfServiceUserStatusesOptionals {
  readonly headers: GetTermsOfServiceUserStatusesHeaders =
    new GetTermsOfServiceUserStatusesHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetTermsOfServiceUserStatusesOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetTermsOfServiceUserStatusesOptionals,
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
export interface GetTermsOfServiceUserStatusesOptionalsInput {
  readonly headers?: GetTermsOfServiceUserStatusesHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateTermsOfServiceStatusForUserOptionals {
  readonly headers: CreateTermsOfServiceStatusForUserHeaders =
    new CreateTermsOfServiceStatusForUserHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateTermsOfServiceStatusForUserOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateTermsOfServiceStatusForUserOptionals,
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
export interface CreateTermsOfServiceStatusForUserOptionalsInput {
  readonly headers?: CreateTermsOfServiceStatusForUserHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateTermsOfServiceStatusForUserByIdOptionals {
  readonly headers: UpdateTermsOfServiceStatusForUserByIdHeaders =
    new UpdateTermsOfServiceStatusForUserByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateTermsOfServiceStatusForUserByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateTermsOfServiceStatusForUserByIdOptionals,
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
export interface UpdateTermsOfServiceStatusForUserByIdOptionalsInput {
  readonly headers?: UpdateTermsOfServiceStatusForUserByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetTermsOfServiceUserStatusesQueryParams {
  readonly tosId: string;
  readonly userId?: string;
}
export class GetTermsOfServiceUserStatusesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'> &
      Partial<Pick<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetTermsOfServiceUserStatusesHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateTermsOfServiceStatusForUserRequestBodyTosTypeField =
  'terms_of_service';
export class CreateTermsOfServiceStatusForUserRequestBodyTosField {
  readonly type: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField =
    'terms_of_service' as CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<CreateTermsOfServiceStatusForUserRequestBodyTosField, 'type'> &
      Partial<
        Pick<CreateTermsOfServiceStatusForUserRequestBodyTosField, 'type'>
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
export interface CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput {
  readonly type?: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
  readonly id: string;
}
export type CreateTermsOfServiceStatusForUserRequestBodyUserTypeField = 'user';
export class CreateTermsOfServiceStatusForUserRequestBodyUserField {
  readonly type: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField =
    'user' as CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<
      CreateTermsOfServiceStatusForUserRequestBodyUserField,
      'type'
    > &
      Partial<
        Pick<CreateTermsOfServiceStatusForUserRequestBodyUserField, 'type'>
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
export interface CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput {
  readonly type?: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
  readonly id: string;
}
export interface CreateTermsOfServiceStatusForUserRequestBody {
  readonly tos: CreateTermsOfServiceStatusForUserRequestBodyTosField;
  readonly user: CreateTermsOfServiceStatusForUserRequestBodyUserField;
  readonly isAccepted: boolean;
}
export class CreateTermsOfServiceStatusForUserHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'> &
      Partial<Pick<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateTermsOfServiceStatusForUserHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface UpdateTermsOfServiceStatusForUserByIdRequestBody {
  readonly isAccepted: boolean;
}
export class UpdateTermsOfServiceStatusForUserByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'> &
      Partial<
        Pick<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateTermsOfServiceStatusForUserByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class TermsOfServiceUserStatusesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      TermsOfServiceUserStatusesManager,
      | 'networkSession'
      | 'getTermsOfServiceUserStatuses'
      | 'createTermsOfServiceStatusForUser'
      | 'updateTermsOfServiceStatusForUserById'
    > &
      Partial<Pick<TermsOfServiceUserStatusesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getTermsOfServiceUserStatuses(
    queryParams: GetTermsOfServiceUserStatusesQueryParams,
    optionalsInput: GetTermsOfServiceUserStatusesOptionalsInput = {}
  ): Promise<TermsOfServiceUserStatuses> {
    const optionals: GetTermsOfServiceUserStatusesOptionals =
      new GetTermsOfServiceUserStatusesOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['tos_id']: toString(queryParams.tosId) as string,
      ['user_id']: toString(queryParams.userId) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/terms_of_service_user_statuses'
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
    return deserializeTermsOfServiceUserStatuses(response.data);
  }
  async createTermsOfServiceStatusForUser(
    requestBody: CreateTermsOfServiceStatusForUserRequestBody,
    optionalsInput: CreateTermsOfServiceStatusForUserOptionalsInput = {}
  ): Promise<TermsOfServiceUserStatus> {
    const optionals: CreateTermsOfServiceStatusForUserOptionals =
      new CreateTermsOfServiceStatusForUserOptionals({
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
        '/2.0/terms_of_service_user_statuses'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateTermsOfServiceStatusForUserRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTermsOfServiceUserStatus(response.data);
  }
  async updateTermsOfServiceStatusForUserById(
    termsOfServiceUserStatusId: string,
    requestBody: UpdateTermsOfServiceStatusForUserByIdRequestBody,
    optionalsInput: UpdateTermsOfServiceStatusForUserByIdOptionalsInput = {}
  ): Promise<TermsOfServiceUserStatus> {
    const optionals: UpdateTermsOfServiceStatusForUserByIdOptionals =
      new UpdateTermsOfServiceStatusForUserByIdOptionals({
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
        '/2.0/terms_of_service_user_statuses/',
        toString(termsOfServiceUserStatusId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTermsOfServiceUserStatus(response.data);
  }
}
export interface TermsOfServiceUserStatusesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
  val: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
  val: SerializedData
): CreateTermsOfServiceStatusForUserRequestBodyTosTypeField {
  if (val == 'terms_of_service') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize CreateTermsOfServiceStatusForUserRequestBodyTosTypeField",
  });
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(
  val: CreateTermsOfServiceStatusForUserRequestBodyTosField
): SerializedData {
  return {
    ['type']: serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
      val.type
    ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(
  val: SerializedData
): CreateTermsOfServiceStatusForUserRequestBodyTosField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyTosField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "CreateTermsOfServiceStatusForUserRequestBodyTosField" to be defined',
    });
  }
  const type: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
      val.type
    );
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosField"',
    });
  }
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermsOfServiceStatusForUserRequestBodyTosField;
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(
  val: CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
            val.type
          ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(
  val: SerializedData
): CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput"',
    });
  }
  const type:
    | undefined
    | CreateTermsOfServiceStatusForUserRequestBodyTosTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
          val.type
        );
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput"',
    });
  }
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput;
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
  val: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField
): SerializedData {
  return val;
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
  val: SerializedData
): CreateTermsOfServiceStatusForUserRequestBodyUserTypeField {
  if (val == 'user') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize CreateTermsOfServiceStatusForUserRequestBodyUserTypeField",
  });
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(
  val: CreateTermsOfServiceStatusForUserRequestBodyUserField
): SerializedData {
  return {
    ['type']:
      serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
        val.type
      ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(
  val: SerializedData
): CreateTermsOfServiceStatusForUserRequestBodyUserField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyUserField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "CreateTermsOfServiceStatusForUserRequestBodyUserField" to be defined',
    });
  }
  const type: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
      val.type
    );
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserField"',
    });
  }
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermsOfServiceStatusForUserRequestBodyUserField;
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(
  val: CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
            val.type
          ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(
  val: SerializedData
): CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput"',
    });
  }
  const type:
    | undefined
    | CreateTermsOfServiceStatusForUserRequestBodyUserTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
          val.type
        );
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput"',
    });
  }
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput;
}
export function serializeCreateTermsOfServiceStatusForUserRequestBody(
  val: CreateTermsOfServiceStatusForUserRequestBody
): SerializedData {
  return {
    ['tos']: serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(
      val.tos
    ),
    ['user']: serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(
      val.user
    ),
    ['is_accepted']: val.isAccepted,
  };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBody(
  val: SerializedData
): CreateTermsOfServiceStatusForUserRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBody"',
    });
  }
  if (val.tos == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "tos" of type "CreateTermsOfServiceStatusForUserRequestBody" to be defined',
    });
  }
  const tos: CreateTermsOfServiceStatusForUserRequestBodyTosField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val.tos);
  if (val.user == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "user" of type "CreateTermsOfServiceStatusForUserRequestBody" to be defined',
    });
  }
  const user: CreateTermsOfServiceStatusForUserRequestBodyUserField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val.user);
  if (val.is_accepted == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "is_accepted" of type "CreateTermsOfServiceStatusForUserRequestBody" to be defined',
    });
  }
  if (!sdIsBoolean(val.is_accepted)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_accepted" of type "CreateTermsOfServiceStatusForUserRequestBody"',
    });
  }
  const isAccepted: boolean = val.is_accepted;
  return {
    tos: tos,
    user: user,
    isAccepted: isAccepted,
  } satisfies CreateTermsOfServiceStatusForUserRequestBody;
}
export function serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(
  val: UpdateTermsOfServiceStatusForUserByIdRequestBody
): SerializedData {
  return { ['is_accepted']: val.isAccepted };
}
export function deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody(
  val: SerializedData
): UpdateTermsOfServiceStatusForUserByIdRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateTermsOfServiceStatusForUserByIdRequestBody"',
    });
  }
  if (val.is_accepted == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "is_accepted" of type "UpdateTermsOfServiceStatusForUserByIdRequestBody" to be defined',
    });
  }
  if (!sdIsBoolean(val.is_accepted)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_accepted" of type "UpdateTermsOfServiceStatusForUserByIdRequestBody"',
    });
  }
  const isAccepted: boolean = val.is_accepted;
  return {
    isAccepted: isAccepted,
  } satisfies UpdateTermsOfServiceStatusForUserByIdRequestBody;
}
