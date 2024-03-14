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
    fields:
      | Omit<GetRetentionPoliciesHeaders, 'extraHeaders'>
      | Partial<Pick<GetRetentionPoliciesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
    fields:
      | Omit<CreateRetentionPolicyHeaders, 'extraHeaders'>
      | Partial<Pick<CreateRetentionPolicyHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetRetentionPolicyByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetRetentionPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetRetentionPolicyByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetRetentionPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
    fields:
      | Omit<UpdateRetentionPolicyByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateRetentionPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteRetentionPolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteRetentionPolicyByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteRetentionPolicyByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class RetentionPoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          RetentionPoliciesManager,
          | 'networkSession'
          | 'getRetentionPolicies'
          | 'createRetentionPolicy'
          | 'getRetentionPolicyById'
          | 'updateRetentionPolicyById'
          | 'deleteRetentionPolicyById'
        >
      | Partial<Pick<RetentionPoliciesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getRetentionPolicies(
    queryParams: GetRetentionPoliciesQueryParams = {} satisfies GetRetentionPoliciesQueryParams,
    headers: GetRetentionPoliciesHeaders = new GetRetentionPoliciesHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicies> {
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
    headers: CreateRetentionPolicyHeaders = new CreateRetentionPolicyHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicy> {
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
    queryParams: GetRetentionPolicyByIdQueryParams = {} satisfies GetRetentionPolicyByIdQueryParams,
    headers: GetRetentionPolicyByIdHeaders = new GetRetentionPolicyByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicy> {
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
    requestBody: UpdateRetentionPolicyByIdRequestBody = {} satisfies UpdateRetentionPolicyByIdRequestBody,
    headers: UpdateRetentionPolicyByIdHeaders = new UpdateRetentionPolicyByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicy> {
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
    headers: DeleteRetentionPolicyByIdHeaders = new DeleteRetentionPolicyByIdHeaders(
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
export function serializeGetRetentionPoliciesQueryParamsPolicyTypeField(
  val: any
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
  val: any
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
  val: any
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
  val: any
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
  val: any
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
        : (val.customNotificationRecipients.map(function (item: UserMini): any {
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
        ): any {
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
  val: any
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
        : (val.customNotificationRecipients.map(function (item: UserBase): any {
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
        ): any {
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
