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
export type GetRetentionPoliciesQueryParamsArgPolicyTypeField =
  | 'finite'
  | 'indefinite';
export interface GetRetentionPoliciesQueryParamsArg {
  readonly policyName?: string;
  readonly policyType?: GetRetentionPoliciesQueryParamsArgPolicyTypeField;
  readonly createdByUserId?: string;
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly marker?: string;
}
export class GetRetentionPoliciesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetRetentionPoliciesHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetRetentionPoliciesHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateRetentionPolicyRequestBodyArgPolicyTypeField =
  | 'finite'
  | 'indefinite';
export type CreateRetentionPolicyRequestBodyArgDispositionActionField =
  | 'permanently_delete'
  | 'remove_retention';
export type CreateRetentionPolicyRequestBodyArgRetentionTypeField =
  | 'modifiable'
  | 'non_modifiable';
export interface CreateRetentionPolicyRequestBodyArg {
  readonly policyName: string;
  readonly description?: string;
  readonly policyType: CreateRetentionPolicyRequestBodyArgPolicyTypeField;
  readonly dispositionAction: CreateRetentionPolicyRequestBodyArgDispositionActionField;
  readonly retentionLength?: string;
  readonly retentionType?: CreateRetentionPolicyRequestBodyArgRetentionTypeField;
  readonly canOwnerExtendRetention?: boolean;
  readonly areOwnersNotified?: boolean;
  readonly customNotificationRecipients?: readonly UserMini[];
}
export class CreateRetentionPolicyHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateRetentionPolicyHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateRetentionPolicyHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetRetentionPolicyByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetRetentionPolicyByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetRetentionPolicyByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetRetentionPolicyByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateRetentionPolicyByIdRequestBodyArg {
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
export class UpdateRetentionPolicyByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateRetentionPolicyByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateRetentionPolicyByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteRetentionPolicyByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteRetentionPolicyByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteRetentionPolicyByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class RetentionPoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      RetentionPoliciesManager,
      | 'getRetentionPolicies'
      | 'createRetentionPolicy'
      | 'getRetentionPolicyById'
      | 'updateRetentionPolicyById'
      | 'deleteRetentionPolicyById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getRetentionPolicies(
    queryParams: GetRetentionPoliciesQueryParamsArg = {} satisfies GetRetentionPoliciesQueryParamsArg,
    headers: GetRetentionPoliciesHeadersArg = new GetRetentionPoliciesHeadersArg(
      {}
    ),
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
      ''.concat('https://api.box.com/2.0/retention_policies') as string,
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
    requestBody: CreateRetentionPolicyRequestBodyArg,
    headers: CreateRetentionPolicyHeadersArg = new CreateRetentionPolicyHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/retention_policies') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateRetentionPolicyRequestBodyArg(requestBody),
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
    queryParams: GetRetentionPolicyByIdQueryParamsArg = {} satisfies GetRetentionPolicyByIdQueryParamsArg,
    headers: GetRetentionPolicyByIdHeadersArg = new GetRetentionPolicyByIdHeadersArg(
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
        'https://api.box.com/2.0/retention_policies/',
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
    requestBody: UpdateRetentionPolicyByIdRequestBodyArg = {} satisfies UpdateRetentionPolicyByIdRequestBodyArg,
    headers: UpdateRetentionPolicyByIdHeadersArg = new UpdateRetentionPolicyByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RetentionPolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/retention_policies/',
        toString(retentionPolicyId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateRetentionPolicyByIdRequestBodyArg(requestBody),
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
    headers: DeleteRetentionPolicyByIdHeadersArg = new DeleteRetentionPolicyByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/retention_policies/',
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
export function serializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(
  val: GetRetentionPoliciesQueryParamsArgPolicyTypeField
): SerializedData {
  return val;
}
export function deserializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(
  val: any
): GetRetentionPoliciesQueryParamsArgPolicyTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetRetentionPoliciesQueryParamsArgPolicyTypeField"';
  }
  if (val == 'finite') {
    return 'finite';
  }
  if (val == 'indefinite') {
    return 'indefinite';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(
  val: CreateRetentionPolicyRequestBodyArgPolicyTypeField
): SerializedData {
  return val;
}
export function deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(
  val: any
): CreateRetentionPolicyRequestBodyArgPolicyTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateRetentionPolicyRequestBodyArgPolicyTypeField"';
  }
  if (val == 'finite') {
    return 'finite';
  }
  if (val == 'indefinite') {
    return 'indefinite';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateRetentionPolicyRequestBodyArgDispositionActionField(
  val: CreateRetentionPolicyRequestBodyArgDispositionActionField
): SerializedData {
  return val;
}
export function deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(
  val: any
): CreateRetentionPolicyRequestBodyArgDispositionActionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateRetentionPolicyRequestBodyArgDispositionActionField"';
  }
  if (val == 'permanently_delete') {
    return 'permanently_delete';
  }
  if (val == 'remove_retention') {
    return 'remove_retention';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(
  val: CreateRetentionPolicyRequestBodyArgRetentionTypeField
): SerializedData {
  return val;
}
export function deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(
  val: any
): CreateRetentionPolicyRequestBodyArgRetentionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateRetentionPolicyRequestBodyArgRetentionTypeField"';
  }
  if (val == 'modifiable') {
    return 'modifiable';
  }
  if (val == 'non_modifiable') {
    return 'non_modifiable';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateRetentionPolicyRequestBodyArg(
  val: CreateRetentionPolicyRequestBodyArg
): SerializedData {
  return {
    ['policy_name']: val.policyName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['policy_type']:
      serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(
        val.policyType
      ),
    ['disposition_action']:
      serializeCreateRetentionPolicyRequestBodyArgDispositionActionField(
        val.dispositionAction
      ),
    ['retention_length']:
      val.retentionLength == void 0 ? void 0 : val.retentionLength,
    ['retention_type']:
      val.retentionType == void 0
        ? void 0
        : serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(
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
export function deserializeCreateRetentionPolicyRequestBodyArg(
  val: any
): CreateRetentionPolicyRequestBodyArg {
  const policyName: string = val.policy_name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const policyType: CreateRetentionPolicyRequestBodyArgPolicyTypeField =
    deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(
      val.policy_type
    );
  const dispositionAction: CreateRetentionPolicyRequestBodyArgDispositionActionField =
    deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(
      val.disposition_action
    );
  const retentionLength: undefined | string =
    val.retention_length == void 0 ? void 0 : val.retention_length;
  const retentionType:
    | undefined
    | CreateRetentionPolicyRequestBodyArgRetentionTypeField =
    val.retention_type == void 0
      ? void 0
      : deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(
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
  } satisfies CreateRetentionPolicyRequestBodyArg;
}
export function serializeUpdateRetentionPolicyByIdRequestBodyArg(
  val: UpdateRetentionPolicyByIdRequestBodyArg
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
export function deserializeUpdateRetentionPolicyByIdRequestBodyArg(
  val: any
): UpdateRetentionPolicyByIdRequestBodyArg {
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
  } satisfies UpdateRetentionPolicyByIdRequestBodyArg;
}
