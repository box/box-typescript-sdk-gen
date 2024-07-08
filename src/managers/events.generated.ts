import { serializeEvents } from '../schemas/events.generated.js';
import { deserializeEvents } from '../schemas/events.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeRealtimeServers } from '../schemas/realtimeServers.generated.js';
import { deserializeRealtimeServers } from '../schemas/realtimeServers.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { Events } from '../schemas/events.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { RealtimeServers } from '../schemas/realtimeServers.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
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
export type GetEventsQueryParamsStreamTypeField =
  | 'all'
  | 'changes'
  | 'sync'
  | 'admin_logs'
  | 'admin_logs_streaming';
export type GetEventsQueryParamsEventTypeField =
  | 'ACCESS_GRANTED'
  | 'ACCESS_REVOKED'
  | 'ADD_DEVICE_ASSOCIATION'
  | 'ADD_LOGIN_ACTIVITY_DEVICE'
  | 'ADMIN_LOGIN'
  | 'APPLICATION_CREATED'
  | 'APPLICATION_PUBLIC_KEY_ADDED'
  | 'APPLICATION_PUBLIC_KEY_DELETED'
  | 'CHANGE_ADMIN_ROLE'
  | 'CHANGE_FOLDER_PERMISSION'
  | 'COLLABORATION_ACCEPT'
  | 'COLLABORATION_EXPIRATION'
  | 'COLLABORATION_INVITE'
  | 'COLLABORATION_REMOVE'
  | 'COLLABORATION_ROLE_CHANGE'
  | 'COMMENT_CREATE'
  | 'COMMENT_DELETE'
  | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY'
  | 'CONTENT_WORKFLOW_AUTOMATION_ADD'
  | 'CONTENT_WORKFLOW_AUTOMATION_DELETE'
  | 'CONTENT_WORKFLOW_POLICY_ADD'
  | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION'
  | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION'
  | 'COPY'
  | 'DATA_RETENTION_CREATE_RETENTION'
  | 'DATA_RETENTION_REMOVE_RETENTION'
  | 'DELETE'
  | 'DELETE_USER'
  | 'DEVICE_TRUST_CHECK_FAILED'
  | 'DOWNLOAD'
  | 'EDIT'
  | 'EDIT_USER'
  | 'EMAIL_ALIAS_CONFIRM'
  | 'EMAIL_ALIAS_REMOVE'
  | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE'
  | 'EXTERNAL_COLLAB_SECURITY_SETTINGS'
  | 'FAILED_LOGIN'
  | 'FILE_MARKED_MALICIOUS'
  | 'FILE_WATERMARKED_DOWNLOAD'
  | 'GROUP_ADD_ITEM'
  | 'GROUP_ADD_USER'
  | 'GROUP_CREATION'
  | 'GROUP_DELETION'
  | 'GROUP_EDITED'
  | 'GROUP_REMOVE_ITEM'
  | 'GROUP_REMOVE_USER'
  | 'ITEM_EMAIL_SEND'
  | 'ITEM_MODIFY'
  | 'ITEM_OPEN'
  | 'ITEM_SHARED_UPDATE'
  | 'ITEM_SYNC'
  | 'ITEM_UNSYNC'
  | 'LEGAL_HOLD_ASSIGNMENT_CREATE'
  | 'LEGAL_HOLD_ASSIGNMENT_DELETE'
  | 'LEGAL_HOLD_POLICY_CREATE'
  | 'LEGAL_HOLD_POLICY_DELETE'
  | 'LEGAL_HOLD_POLICY_UPDATE'
  | 'LOCK'
  | 'LOGIN'
  | 'METADATA_INSTANCE_CREATE'
  | 'METADATA_INSTANCE_DELETE'
  | 'METADATA_INSTANCE_UPDATE'
  | 'METADATA_TEMPLATE_CREATE'
  | 'METADATA_TEMPLATE_DELETE'
  | 'METADATA_TEMPLATE_UPDATE'
  | 'MOVE'
  | 'NEW_USER'
  | 'OAUTH2_ACCESS_TOKEN_REVOKE'
  | 'PREVIEW'
  | 'REMOVE_DEVICE_ASSOCIATION'
  | 'REMOVE_LOGIN_ACTIVITY_DEVICE'
  | 'RENAME'
  | 'RETENTION_POLICY_ASSIGNMENT_ADD'
  | 'SHARE'
  | 'SHARED_LINK_SEND'
  | 'SHARE_EXPIRATION'
  | 'SHIELD_ALERT'
  | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED'
  | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION'
  | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED'
  | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION'
  | 'SHIELD_JUSTIFICATION_APPROVAL'
  | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED'
  | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE'
  | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE'
  | 'SIGN_DOCUMENT_ASSIGNED'
  | 'SIGN_DOCUMENT_CANCELLED'
  | 'SIGN_DOCUMENT_COMPLETED'
  | 'SIGN_DOCUMENT_CONVERTED'
  | 'SIGN_DOCUMENT_CREATED'
  | 'SIGN_DOCUMENT_DECLINED'
  | 'SIGN_DOCUMENT_EXPIRED'
  | 'SIGN_DOCUMENT_SIGNED'
  | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED'
  | 'SIGNER_DOWNLOADED'
  | 'SIGNER_FORWARDED'
  | 'STORAGE_EXPIRATION'
  | 'TASK_ASSIGNMENT_CREATE'
  | 'TASK_ASSIGNMENT_DELETE'
  | 'TASK_ASSIGNMENT_UPDATE'
  | 'TASK_CREATE'
  | 'TASK_UPDATE'
  | 'TERMS_OF_SERVICE_ACCEPT'
  | 'TERMS_OF_SERVICE_REJECT'
  | 'UNDELETE'
  | 'UNLOCK'
  | 'UNSHARE'
  | 'UPDATE_COLLABORATION_EXPIRATION'
  | 'UPDATE_SHARE_EXPIRATION'
  | 'UPLOAD'
  | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE'
  | 'WATERMARK_LABEL_CREATE'
  | 'WATERMARK_LABEL_DELETE'
  | string;
export interface GetEventsQueryParams {
  readonly streamType?: GetEventsQueryParamsStreamTypeField;
  readonly streamPosition?: string;
  readonly limit?: number;
  readonly eventType?: readonly GetEventsQueryParamsEventTypeField[];
  readonly createdAfter?: DateTime;
  readonly createdBefore?: DateTime;
}
export class GetEventsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetEventsHeaders, 'extraHeaders'> &
      Partial<Pick<GetEventsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetEventsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetEventsWithLongPollingHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetEventsWithLongPollingHeaders, 'extraHeaders'> &
      Partial<Pick<GetEventsWithLongPollingHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetEventsWithLongPollingHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class EventsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      EventsManager,
      'networkSession' | 'getEvents' | 'getEventsWithLongPolling'
    > &
      Partial<Pick<EventsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getEvents(
    queryParams: GetEventsQueryParams = {} satisfies GetEventsQueryParams,
    headersInput: GetEventsHeadersInput = new GetEventsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Events> {
    const headers: GetEventsHeaders = new GetEventsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['stream_type']: toString(queryParams.streamType) as string,
      ['stream_position']: toString(queryParams.streamPosition) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['event_type']: queryParams.eventType
        ? queryParams.eventType.map(toString).join(',')
        : undefined,
      ['created_after']: queryParams.createdAfter
        ? serializeDateTime(queryParams.createdAfter)
        : undefined,
      ['created_before']: queryParams.createdBefore
        ? serializeDateTime(queryParams.createdBefore)
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/events') as string,
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
    return deserializeEvents(response.data);
  }
  async getEventsWithLongPolling(
    headersInput: GetEventsWithLongPollingHeadersInput = new GetEventsWithLongPollingHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RealtimeServers> {
    const headers: GetEventsWithLongPollingHeaders =
      new GetEventsWithLongPollingHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/events') as string,
      {
        method: 'OPTIONS',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRealtimeServers(response.data);
  }
}
export interface EventsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetEventsQueryParamsStreamTypeField(
  val: GetEventsQueryParamsStreamTypeField
): SerializedData {
  return val;
}
export function deserializeGetEventsQueryParamsStreamTypeField(
  val: SerializedData
): GetEventsQueryParamsStreamTypeField {
  if (val == 'all') {
    return val;
  }
  if (val == 'changes') {
    return val;
  }
  if (val == 'sync') {
    return val;
  }
  if (val == 'admin_logs') {
    return val;
  }
  if (val == 'admin_logs_streaming') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize GetEventsQueryParamsStreamTypeField",
  });
}
export function serializeGetEventsQueryParamsEventTypeField(
  val: GetEventsQueryParamsEventTypeField
): SerializedData {
  return val;
}
export function deserializeGetEventsQueryParamsEventTypeField(
  val: SerializedData
): GetEventsQueryParamsEventTypeField {
  if (val == 'ACCESS_GRANTED') {
    return val;
  }
  if (val == 'ACCESS_REVOKED') {
    return val;
  }
  if (val == 'ADD_DEVICE_ASSOCIATION') {
    return val;
  }
  if (val == 'ADD_LOGIN_ACTIVITY_DEVICE') {
    return val;
  }
  if (val == 'ADMIN_LOGIN') {
    return val;
  }
  if (val == 'APPLICATION_CREATED') {
    return val;
  }
  if (val == 'APPLICATION_PUBLIC_KEY_ADDED') {
    return val;
  }
  if (val == 'APPLICATION_PUBLIC_KEY_DELETED') {
    return val;
  }
  if (val == 'CHANGE_ADMIN_ROLE') {
    return val;
  }
  if (val == 'CHANGE_FOLDER_PERMISSION') {
    return val;
  }
  if (val == 'COLLABORATION_ACCEPT') {
    return val;
  }
  if (val == 'COLLABORATION_EXPIRATION') {
    return val;
  }
  if (val == 'COLLABORATION_INVITE') {
    return val;
  }
  if (val == 'COLLABORATION_REMOVE') {
    return val;
  }
  if (val == 'COLLABORATION_ROLE_CHANGE') {
    return val;
  }
  if (val == 'COMMENT_CREATE') {
    return val;
  }
  if (val == 'COMMENT_DELETE') {
    return val;
  }
  if (val == 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY') {
    return val;
  }
  if (val == 'CONTENT_WORKFLOW_AUTOMATION_ADD') {
    return val;
  }
  if (val == 'CONTENT_WORKFLOW_AUTOMATION_DELETE') {
    return val;
  }
  if (val == 'CONTENT_WORKFLOW_POLICY_ADD') {
    return val;
  }
  if (val == 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION') {
    return val;
  }
  if (val == 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION') {
    return val;
  }
  if (val == 'COPY') {
    return val;
  }
  if (val == 'DATA_RETENTION_CREATE_RETENTION') {
    return val;
  }
  if (val == 'DATA_RETENTION_REMOVE_RETENTION') {
    return val;
  }
  if (val == 'DELETE') {
    return val;
  }
  if (val == 'DELETE_USER') {
    return val;
  }
  if (val == 'DEVICE_TRUST_CHECK_FAILED') {
    return val;
  }
  if (val == 'DOWNLOAD') {
    return val;
  }
  if (val == 'EDIT') {
    return val;
  }
  if (val == 'EDIT_USER') {
    return val;
  }
  if (val == 'EMAIL_ALIAS_CONFIRM') {
    return val;
  }
  if (val == 'EMAIL_ALIAS_REMOVE') {
    return val;
  }
  if (val == 'ENTERPRISE_APP_AUTHORIZATION_UPDATE') {
    return val;
  }
  if (val == 'EXTERNAL_COLLAB_SECURITY_SETTINGS') {
    return val;
  }
  if (val == 'FAILED_LOGIN') {
    return val;
  }
  if (val == 'FILE_MARKED_MALICIOUS') {
    return val;
  }
  if (val == 'FILE_WATERMARKED_DOWNLOAD') {
    return val;
  }
  if (val == 'GROUP_ADD_ITEM') {
    return val;
  }
  if (val == 'GROUP_ADD_USER') {
    return val;
  }
  if (val == 'GROUP_CREATION') {
    return val;
  }
  if (val == 'GROUP_DELETION') {
    return val;
  }
  if (val == 'GROUP_EDITED') {
    return val;
  }
  if (val == 'GROUP_REMOVE_ITEM') {
    return val;
  }
  if (val == 'GROUP_REMOVE_USER') {
    return val;
  }
  if (val == 'ITEM_EMAIL_SEND') {
    return val;
  }
  if (val == 'ITEM_MODIFY') {
    return val;
  }
  if (val == 'ITEM_OPEN') {
    return val;
  }
  if (val == 'ITEM_SHARED_UPDATE') {
    return val;
  }
  if (val == 'ITEM_SYNC') {
    return val;
  }
  if (val == 'ITEM_UNSYNC') {
    return val;
  }
  if (val == 'LEGAL_HOLD_ASSIGNMENT_CREATE') {
    return val;
  }
  if (val == 'LEGAL_HOLD_ASSIGNMENT_DELETE') {
    return val;
  }
  if (val == 'LEGAL_HOLD_POLICY_CREATE') {
    return val;
  }
  if (val == 'LEGAL_HOLD_POLICY_DELETE') {
    return val;
  }
  if (val == 'LEGAL_HOLD_POLICY_UPDATE') {
    return val;
  }
  if (val == 'LOCK') {
    return val;
  }
  if (val == 'LOGIN') {
    return val;
  }
  if (val == 'METADATA_INSTANCE_CREATE') {
    return val;
  }
  if (val == 'METADATA_INSTANCE_DELETE') {
    return val;
  }
  if (val == 'METADATA_INSTANCE_UPDATE') {
    return val;
  }
  if (val == 'METADATA_TEMPLATE_CREATE') {
    return val;
  }
  if (val == 'METADATA_TEMPLATE_DELETE') {
    return val;
  }
  if (val == 'METADATA_TEMPLATE_UPDATE') {
    return val;
  }
  if (val == 'MOVE') {
    return val;
  }
  if (val == 'NEW_USER') {
    return val;
  }
  if (val == 'OAUTH2_ACCESS_TOKEN_REVOKE') {
    return val;
  }
  if (val == 'PREVIEW') {
    return val;
  }
  if (val == 'REMOVE_DEVICE_ASSOCIATION') {
    return val;
  }
  if (val == 'REMOVE_LOGIN_ACTIVITY_DEVICE') {
    return val;
  }
  if (val == 'RENAME') {
    return val;
  }
  if (val == 'RETENTION_POLICY_ASSIGNMENT_ADD') {
    return val;
  }
  if (val == 'SHARE') {
    return val;
  }
  if (val == 'SHARED_LINK_SEND') {
    return val;
  }
  if (val == 'SHARE_EXPIRATION') {
    return val;
  }
  if (val == 'SHIELD_ALERT') {
    return val;
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED') {
    return val;
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION') {
    return val;
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED') {
    return val;
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION') {
    return val;
  }
  if (val == 'SHIELD_JUSTIFICATION_APPROVAL') {
    return val;
  }
  if (val == 'SHIELD_SHARED_LINK_ACCESS_BLOCKED') {
    return val;
  }
  if (val == 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE') {
    return val;
  }
  if (val == 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE') {
    return val;
  }
  if (val == 'SIGN_DOCUMENT_ASSIGNED') {
    return val;
  }
  if (val == 'SIGN_DOCUMENT_CANCELLED') {
    return val;
  }
  if (val == 'SIGN_DOCUMENT_COMPLETED') {
    return val;
  }
  if (val == 'SIGN_DOCUMENT_CONVERTED') {
    return val;
  }
  if (val == 'SIGN_DOCUMENT_CREATED') {
    return val;
  }
  if (val == 'SIGN_DOCUMENT_DECLINED') {
    return val;
  }
  if (val == 'SIGN_DOCUMENT_EXPIRED') {
    return val;
  }
  if (val == 'SIGN_DOCUMENT_SIGNED') {
    return val;
  }
  if (val == 'SIGN_DOCUMENT_VIEWED_BY_SIGNED') {
    return val;
  }
  if (val == 'SIGNER_DOWNLOADED') {
    return val;
  }
  if (val == 'SIGNER_FORWARDED') {
    return val;
  }
  if (val == 'STORAGE_EXPIRATION') {
    return val;
  }
  if (val == 'TASK_ASSIGNMENT_CREATE') {
    return val;
  }
  if (val == 'TASK_ASSIGNMENT_DELETE') {
    return val;
  }
  if (val == 'TASK_ASSIGNMENT_UPDATE') {
    return val;
  }
  if (val == 'TASK_CREATE') {
    return val;
  }
  if (val == 'TASK_UPDATE') {
    return val;
  }
  if (val == 'TERMS_OF_SERVICE_ACCEPT') {
    return val;
  }
  if (val == 'TERMS_OF_SERVICE_REJECT') {
    return val;
  }
  if (val == 'UNDELETE') {
    return val;
  }
  if (val == 'UNLOCK') {
    return val;
  }
  if (val == 'UNSHARE') {
    return val;
  }
  if (val == 'UPDATE_COLLABORATION_EXPIRATION') {
    return val;
  }
  if (val == 'UPDATE_SHARE_EXPIRATION') {
    return val;
  }
  if (val == 'UPLOAD') {
    return val;
  }
  if (val == 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE') {
    return val;
  }
  if (val == 'WATERMARK_LABEL_CREATE') {
    return val;
  }
  if (val == 'WATERMARK_LABEL_DELETE') {
    return val;
  }
  if (sdIsString(val)) {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize GetEventsQueryParamsEventTypeField",
  });
}
