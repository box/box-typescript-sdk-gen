import { serializeTermsOfServiceUserStatuses } from '../schemas.generated.js';
import { deserializeTermsOfServiceUserStatuses } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTermsOfServiceUserStatus } from '../schemas.generated.js';
import { deserializeTermsOfServiceUserStatus } from '../schemas.generated.js';
import { TermsOfServiceUserStatuses } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { TermsOfServiceUserStatus } from '../schemas.generated.js';
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
export interface GetTermsOfServiceUserStatusesQueryParams {
  readonly tosId: string;
  readonly userId?: string;
}
export class GetTermsOfServiceUserStatusesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'>
      | Partial<Pick<GetTermsOfServiceUserStatusesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateTermsOfServiceStatusForUserRequestBodyTosTypeField =
  'terms_of_service';
export class CreateTermsOfServiceStatusForUserRequestBodyTosField {
  readonly type: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField =
    'terms_of_service' as CreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
  readonly id!: string;
  constructor(
    fields:
      | Omit<CreateTermsOfServiceStatusForUserRequestBodyTosField, 'type'>
      | Partial<
          Pick<CreateTermsOfServiceStatusForUserRequestBodyTosField, 'type'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export type CreateTermsOfServiceStatusForUserRequestBodyUserTypeField = 'user';
export class CreateTermsOfServiceStatusForUserRequestBodyUserField {
  readonly type: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField =
    'user' as CreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
  readonly id!: string;
  constructor(
    fields:
      | Omit<CreateTermsOfServiceStatusForUserRequestBodyUserField, 'type'>
      | Partial<
          Pick<CreateTermsOfServiceStatusForUserRequestBodyUserField, 'type'>
        >
  ) {
    Object.assign(this, fields);
  }
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
    fields:
      | Omit<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'>
      | Partial<Pick<CreateTermsOfServiceStatusForUserHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateTermsOfServiceStatusForUserByIdRequestBody {
  readonly isAccepted: boolean;
}
export class UpdateTermsOfServiceStatusForUserByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'>
      | Partial<
          Pick<UpdateTermsOfServiceStatusForUserByIdHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class TermsOfServiceUserStatusesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          TermsOfServiceUserStatusesManager,
          | 'networkSession'
          | 'getTermsOfServiceUserStatuses'
          | 'createTermsOfServiceStatusForUser'
          | 'updateTermsOfServiceStatusForUserById'
        >
      | Partial<Pick<TermsOfServiceUserStatusesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getTermsOfServiceUserStatuses(
    queryParams: GetTermsOfServiceUserStatusesQueryParams,
    headers: GetTermsOfServiceUserStatusesHeaders = new GetTermsOfServiceUserStatusesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfServiceUserStatuses> {
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
        '/terms_of_service_user_statuses'
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
    headers: CreateTermsOfServiceStatusForUserHeaders = new CreateTermsOfServiceStatusForUserHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfServiceUserStatus> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/terms_of_service_user_statuses'
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
    headers: UpdateTermsOfServiceStatusForUserByIdHeaders = new UpdateTermsOfServiceStatusForUserByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TermsOfServiceUserStatus> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/terms_of_service_user_statuses/',
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
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
  val: any
): CreateTermsOfServiceStatusForUserRequestBodyTosTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateTermsOfServiceStatusForUserRequestBodyTosTypeField"',
    });
  }
  if (val == 'terms_of_service') {
    return 'terms_of_service';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(
  val: any
): SerializedData {
  return {
    ['type']: serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
      val.type
    ),
    ['id']: val.id,
  };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(
  val: any
): CreateTermsOfServiceStatusForUserRequestBodyTosField {
  const type: CreateTermsOfServiceStatusForUserRequestBodyTosTypeField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermsOfServiceStatusForUserRequestBodyTosField;
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
  val: any
): CreateTermsOfServiceStatusForUserRequestBodyUserTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateTermsOfServiceStatusForUserRequestBodyUserTypeField"',
    });
  }
  if (val == 'user') {
    return 'user';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(
  val: any
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
  val: any
): CreateTermsOfServiceStatusForUserRequestBodyUserField {
  const type: CreateTermsOfServiceStatusForUserRequestBodyUserTypeField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(
      val.type
    );
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateTermsOfServiceStatusForUserRequestBodyUserField;
}
export function serializeCreateTermsOfServiceStatusForUserRequestBody(
  val: any
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
  val: any
): CreateTermsOfServiceStatusForUserRequestBody {
  const tos: CreateTermsOfServiceStatusForUserRequestBodyTosField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val.tos);
  const user: CreateTermsOfServiceStatusForUserRequestBodyUserField =
    deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val.user);
  const isAccepted: boolean = val.is_accepted;
  return {
    tos: tos,
    user: user,
    isAccepted: isAccepted,
  } satisfies CreateTermsOfServiceStatusForUserRequestBody;
}
export function serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(
  val: any
): SerializedData {
  return { ['is_accepted']: val.isAccepted };
}
export function deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody(
  val: any
): UpdateTermsOfServiceStatusForUserByIdRequestBody {
  const isAccepted: boolean = val.is_accepted;
  return {
    isAccepted: isAccepted,
  } satisfies UpdateTermsOfServiceStatusForUserByIdRequestBody;
}
