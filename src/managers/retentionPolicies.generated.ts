import { serializeRetentionPolicies } from '../schemas.generated.js';
import { deserializeRetentionPolicies } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeRetentionPolicy } from '../schemas.generated.js';
import { deserializeRetentionPolicy } from '../schemas.generated.js';
import { serializeUserMini } from '../schemas.generated.js';
import { deserializeUserMini } from '../schemas.generated.js';
import { serializeUserBase } from '../schemas.generated.js';
import { deserializeUserBase } from '../schemas.generated.js';
import { RetentionPolicies } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { RetentionPolicy } from '../schemas.generated.js';
import { UserMini } from '../schemas.generated.js';
import { UserBase } from '../schemas.generated.js';
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
export class CreateRetentionPolicyOptionals {
  readonly headers: CreateRetentionPolicyHeaders =
    new CreateRetentionPolicyHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateRetentionPolicyOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CreateRetentionPolicyOptionals, 'headers' | 'cancellationToken'>
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
export interface CreateRetentionPolicyOptionalsInput {
  readonly headers?: CreateRetentionPolicyHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetRetentionPolicyByIdOptionals {
  readonly queryParams: GetRetentionPolicyByIdQueryParams =
    {} satisfies GetRetentionPolicyByIdQueryParams;
  readonly headers: GetRetentionPolicyByIdHeaders =
    new GetRetentionPolicyByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetRetentionPolicyByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetRetentionPolicyByIdOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetRetentionPolicyByIdOptionalsInput {
  readonly queryParams?: GetRetentionPolicyByIdQueryParams;
  readonly headers?: GetRetentionPolicyByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateRetentionPolicyByIdOptionals {
  readonly requestBody: UpdateRetentionPolicyByIdRequestBody =
    {} satisfies UpdateRetentionPolicyByIdRequestBody;
  readonly headers: UpdateRetentionPolicyByIdHeaders =
    new UpdateRetentionPolicyByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateRetentionPolicyByIdOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateRetentionPolicyByIdOptionals,
          'requestBody' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateRetentionPolicyByIdOptionalsInput {
  readonly requestBody?: UpdateRetentionPolicyByIdRequestBody;
  readonly headers?: UpdateRetentionPolicyByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteRetentionPolicyByIdOptionals {
  readonly headers: DeleteRetentionPolicyByIdHeaders =
    new DeleteRetentionPolicyByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteRetentionPolicyByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteRetentionPolicyByIdOptionals,
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
export interface DeleteRetentionPolicyByIdOptionalsInput {
  readonly headers?: DeleteRetentionPolicyByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export type GetRetentionPoliciesQueryParamsPolicyTypeField =
  | 'finite'
  | 'indefinite';
export interface GetRetentionPoliciesQueryParams {
  readonly policyName?: string;
  readonly policyType?: GetRetentionPoliciesQueryParamsPolicyTypeField;
  readonly createdByUserId?: string;
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly marker?: string;
}
export class GetRetentionPoliciesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetRetentionPoliciesHeaders, 'extraHeaders'> &
      Partial<Pick<GetRetentionPoliciesHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetRetentionPoliciesHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateRetentionPolicyRequestBodyPolicyTypeField =
  | 'finite'
  | 'indefinite';
export type CreateRetentionPolicyRequestBodyDispositionActionField =
  | 'permanently_delete'
  | 'remove_retention';
export type CreateRetentionPolicyRequestBodyRetentionTypeField =
  | 'modifiable'
  | 'non_modifiable';
export interface CreateRetentionPolicyRequestBody {
  readonly policyName: string;
  readonly description?: string;
  readonly policyType: CreateRetentionPolicyRequestBodyPolicyTypeField;
  readonly dispositionAction: CreateRetentionPolicyRequestBodyDispositionActionField;
  readonly retentionLength?: string;
  readonly retentionType?: CreateRetentionPolicyRequestBodyRetentionTypeField;
  readonly canOwnerExtendRetention?: boolean;
  readonly areOwnersNotified?: boolean;
  readonly customNotificationRecipients?: readonly UserMini[];
}
export class CreateRetentionPolicyHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateRetentionPolicyHeaders, 'extraHeaders'> &
      Partial<Pick<CreateRetentionPolicyHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateRetentionPolicyHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetRetentionPolicyByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetRetentionPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetRetentionPolicyByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetRetentionPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetRetentionPolicyByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface UpdateRetentionPolicyByIdRequestBody {
  readonly policyName?: string;
  readonly description?: string;
  readonly dispositionAction?: string;
  readonly retentionType?: string;
  readonly retentionLength?: string;
  readonly status?: string;
  readonly canOwnerExtendRetention?: boolean;
  readonly areOwnersNotified?: boolean;
  readonly customNotificationRecipients?: readonly UserBase[];
}
export class UpdateRetentionPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateRetentionPolicyByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateRetentionPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateRetentionPolicyByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteRetentionPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteRetentionPolicyByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteRetentionPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteRetentionPolicyByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class RetentionPoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      RetentionPoliciesManager,
      | 'networkSession'
      | 'getRetentionPolicies'
      | 'createRetentionPolicy'
      | 'getRetentionPolicyById'
      | 'updateRetentionPolicyById'
      | 'deleteRetentionPolicyById'
    > &
      Partial<Pick<RetentionPoliciesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getRetentionPolicies(
    queryParams: GetRetentionPoliciesQueryParams = {} satisfies GetRetentionPoliciesQueryParams,
    headersInput: GetRetentionPoliciesHeadersInput = new GetRetentionPoliciesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicies> {
    const headers: GetRetentionPoliciesHeaders =
      new GetRetentionPoliciesHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['policy_name']: toString(queryParams.policyName) as string,
      ['policy_type']: toString(queryParams.policyType) as string,
      ['created_by_user_id']: toString(queryParams.createdByUserId) as string,
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['limit']: toString(queryParams.limit) as string,
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/retention_policies'
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
    return deserializeRetentionPolicies(response.data);
  }
  async createRetentionPolicy(
    requestBody: CreateRetentionPolicyRequestBody,
    optionalsInput: CreateRetentionPolicyOptionalsInput = {}
  ): Promise<RetentionPolicy> {
    const optionals: CreateRetentionPolicyOptionals =
      new CreateRetentionPolicyOptionals({
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
        '/retention_policies'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateRetentionPolicyRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRetentionPolicy(response.data);
  }
  async getRetentionPolicyById(
    retentionPolicyId: string,
    optionalsInput: GetRetentionPolicyByIdOptionalsInput = {}
  ): Promise<RetentionPolicy> {
    const optionals: GetRetentionPolicyByIdOptionals =
      new GetRetentionPolicyByIdOptionals({
        queryParams: optionalsInput.queryParams,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/retention_policies/',
        toString(retentionPolicyId) as string
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
    return deserializeRetentionPolicy(response.data);
  }
  async updateRetentionPolicyById(
    retentionPolicyId: string,
    optionalsInput: UpdateRetentionPolicyByIdOptionalsInput = {}
  ): Promise<RetentionPolicy> {
    const optionals: UpdateRetentionPolicyByIdOptionals =
      new UpdateRetentionPolicyByIdOptionals({
        requestBody: optionalsInput.requestBody,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const requestBody: any = optionals.requestBody;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/retention_policies/',
        toString(retentionPolicyId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateRetentionPolicyByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRetentionPolicy(response.data);
  }
  async deleteRetentionPolicyById(
    retentionPolicyId: string,
    optionalsInput: DeleteRetentionPolicyByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteRetentionPolicyByIdOptionals =
      new DeleteRetentionPolicyByIdOptionals({
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
        '/retention_policies/',
        toString(retentionPolicyId) as string
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
export interface RetentionPoliciesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetRetentionPoliciesQueryParamsPolicyTypeField(
  val: GetRetentionPoliciesQueryParamsPolicyTypeField
): SerializedData {
  return val;
}
export function deserializeGetRetentionPoliciesQueryParamsPolicyTypeField(
  val: any
): GetRetentionPoliciesQueryParamsPolicyTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetRetentionPoliciesQueryParamsPolicyTypeField"',
    });
  }
  if (val == 'finite') {
    return 'finite';
  }
  if (val == 'indefinite') {
    return 'indefinite';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateRetentionPolicyRequestBodyPolicyTypeField(
  val: CreateRetentionPolicyRequestBodyPolicyTypeField
): SerializedData {
  return val;
}
export function deserializeCreateRetentionPolicyRequestBodyPolicyTypeField(
  val: any
): CreateRetentionPolicyRequestBodyPolicyTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateRetentionPolicyRequestBodyPolicyTypeField"',
    });
  }
  if (val == 'finite') {
    return 'finite';
  }
  if (val == 'indefinite') {
    return 'indefinite';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateRetentionPolicyRequestBodyDispositionActionField(
  val: CreateRetentionPolicyRequestBodyDispositionActionField
): SerializedData {
  return val;
}
export function deserializeCreateRetentionPolicyRequestBodyDispositionActionField(
  val: any
): CreateRetentionPolicyRequestBodyDispositionActionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateRetentionPolicyRequestBodyDispositionActionField"',
    });
  }
  if (val == 'permanently_delete') {
    return 'permanently_delete';
  }
  if (val == 'remove_retention') {
    return 'remove_retention';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateRetentionPolicyRequestBodyRetentionTypeField(
  val: CreateRetentionPolicyRequestBodyRetentionTypeField
): SerializedData {
  return val;
}
export function deserializeCreateRetentionPolicyRequestBodyRetentionTypeField(
  val: any
): CreateRetentionPolicyRequestBodyRetentionTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateRetentionPolicyRequestBodyRetentionTypeField"',
    });
  }
  if (val == 'modifiable') {
    return 'modifiable';
  }
  if (val == 'non_modifiable') {
    return 'non_modifiable';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateRetentionPolicyRequestBody(
  val: CreateRetentionPolicyRequestBody
): SerializedData {
  return {
    ['policy_name']: val.policyName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['policy_type']: serializeCreateRetentionPolicyRequestBodyPolicyTypeField(
      val.policyType
    ),
    ['disposition_action']:
      serializeCreateRetentionPolicyRequestBodyDispositionActionField(
        val.dispositionAction
      ),
    ['retention_length']:
      val.retentionLength == void 0 ? void 0 : val.retentionLength,
    ['retention_type']:
      val.retentionType == void 0
        ? void 0
        : serializeCreateRetentionPolicyRequestBodyRetentionTypeField(
            val.retentionType
          ),
    ['can_owner_extend_retention']:
      val.canOwnerExtendRetention == void 0
        ? void 0
        : val.canOwnerExtendRetention,
    ['are_owners_notified']:
      val.areOwnersNotified == void 0 ? void 0 : val.areOwnersNotified,
    ['custom_notification_recipients']:
      val.customNotificationRecipients == void 0
        ? void 0
        : (val.customNotificationRecipients.map(function (
            item: UserMini
          ): SerializedData {
            return serializeUserMini(item);
          }) as readonly any[]),
  };
}
export function deserializeCreateRetentionPolicyRequestBody(
  val: any
): CreateRetentionPolicyRequestBody {
  const policyName: string = val.policy_name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const policyType: CreateRetentionPolicyRequestBodyPolicyTypeField =
    deserializeCreateRetentionPolicyRequestBodyPolicyTypeField(val.policy_type);
  const dispositionAction: CreateRetentionPolicyRequestBodyDispositionActionField =
    deserializeCreateRetentionPolicyRequestBodyDispositionActionField(
      val.disposition_action
    );
  const retentionLength: undefined | string =
    val.retention_length == void 0 ? void 0 : val.retention_length;
  const retentionType:
    | undefined
    | CreateRetentionPolicyRequestBodyRetentionTypeField =
    val.retention_type == void 0
      ? void 0
      : deserializeCreateRetentionPolicyRequestBodyRetentionTypeField(
          val.retention_type
        );
  const canOwnerExtendRetention: undefined | boolean =
    val.can_owner_extend_retention == void 0
      ? void 0
      : val.can_owner_extend_retention;
  const areOwnersNotified: undefined | boolean =
    val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
  const customNotificationRecipients: undefined | readonly UserMini[] =
    val.custom_notification_recipients == void 0
      ? void 0
      : sdIsList(val.custom_notification_recipients)
      ? (val.custom_notification_recipients.map(function (
          itm: SerializedData
        ): UserMini {
          return deserializeUserMini(itm);
        }) as readonly any[])
      : [];
  return {
    policyName: policyName,
    description: description,
    policyType: policyType,
    dispositionAction: dispositionAction,
    retentionLength: retentionLength,
    retentionType: retentionType,
    canOwnerExtendRetention: canOwnerExtendRetention,
    areOwnersNotified: areOwnersNotified,
    customNotificationRecipients: customNotificationRecipients,
  } satisfies CreateRetentionPolicyRequestBody;
}
export function serializeUpdateRetentionPolicyByIdRequestBody(
  val: UpdateRetentionPolicyByIdRequestBody
): SerializedData {
  return {
    ['policy_name']: val.policyName == void 0 ? void 0 : val.policyName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['disposition_action']:
      val.dispositionAction == void 0 ? void 0 : val.dispositionAction,
    ['retention_type']:
      val.retentionType == void 0 ? void 0 : val.retentionType,
    ['retention_length']:
      val.retentionLength == void 0 ? void 0 : val.retentionLength,
    ['status']: val.status == void 0 ? void 0 : val.status,
    ['can_owner_extend_retention']:
      val.canOwnerExtendRetention == void 0
        ? void 0
        : val.canOwnerExtendRetention,
    ['are_owners_notified']:
      val.areOwnersNotified == void 0 ? void 0 : val.areOwnersNotified,
    ['custom_notification_recipients']:
      val.customNotificationRecipients == void 0
        ? void 0
        : (val.customNotificationRecipients.map(function (
            item: UserBase
          ): SerializedData {
            return serializeUserBase(item);
          }) as readonly any[]),
  };
}
export function deserializeUpdateRetentionPolicyByIdRequestBody(
  val: any
): UpdateRetentionPolicyByIdRequestBody {
  const policyName: undefined | string =
    val.policy_name == void 0 ? void 0 : val.policy_name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const dispositionAction: undefined | string =
    val.disposition_action == void 0 ? void 0 : val.disposition_action;
  const retentionType: undefined | string =
    val.retention_type == void 0 ? void 0 : val.retention_type;
  const retentionLength: undefined | string =
    val.retention_length == void 0 ? void 0 : val.retention_length;
  const status: undefined | string = val.status == void 0 ? void 0 : val.status;
  const canOwnerExtendRetention: undefined | boolean =
    val.can_owner_extend_retention == void 0
      ? void 0
      : val.can_owner_extend_retention;
  const areOwnersNotified: undefined | boolean =
    val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
  const customNotificationRecipients: undefined | readonly UserBase[] =
    val.custom_notification_recipients == void 0
      ? void 0
      : sdIsList(val.custom_notification_recipients)
      ? (val.custom_notification_recipients.map(function (
          itm: SerializedData
        ): UserBase {
          return deserializeUserBase(itm);
        }) as readonly any[])
      : [];
  return {
    policyName: policyName,
    description: description,
    dispositionAction: dispositionAction,
    retentionType: retentionType,
    retentionLength: retentionLength,
    status: status,
    canOwnerExtendRetention: canOwnerExtendRetention,
    areOwnersNotified: areOwnersNotified,
    customNotificationRecipients: customNotificationRecipients,
  } satisfies UpdateRetentionPolicyByIdRequestBody;
}
