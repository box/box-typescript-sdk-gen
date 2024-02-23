import { serializeEvents } from '../schemas.generated.js';
import { deserializeEvents } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeRealtimeServers } from '../schemas.generated.js';
import { deserializeRealtimeServers } from '../schemas.generated.js';
import { Events } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { RealtimeServers } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.js';
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
  | 'WATERMARK_LABEL_DELETE';
export interface GetEventsQueryParams {
  readonly streamType?: GetEventsQueryParamsStreamTypeField;
  readonly streamPosition?: string;
  readonly limit?: number;
  readonly eventType?: readonly GetEventsQueryParamsEventTypeField[];
  readonly createdAfter?: string;
  readonly createdBefore?: string;
}
export class GetEventsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetEventsHeaders, 'extraHeaders'>
      | Partial<Pick<GetEventsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetEventsWithLongPollingHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetEventsWithLongPollingHeaders, 'extraHeaders'>
      | Partial<Pick<GetEventsWithLongPollingHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class EventsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          EventsManager,
          'networkSession' | 'getEvents' | 'getEventsWithLongPolling'
        >
      | Partial<Pick<EventsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getEvents(
    queryParams: GetEventsQueryParams = {} satisfies GetEventsQueryParams,
    headers: GetEventsHeaders = new GetEventsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Events> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['stream_type']: toString(queryParams.streamType) as string,
      ['stream_position']: toString(queryParams.streamPosition) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['event_type']: queryParams.eventType
        ? queryParams.eventType.map(toString).join(',')
        : undefined,
      ['created_after']: toString(queryParams.createdAfter) as string,
      ['created_before']: toString(queryParams.createdBefore) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/events') as string,
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
    headers: GetEventsWithLongPollingHeaders = new GetEventsWithLongPollingHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<RealtimeServers> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/events') as string,
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
export function serializeGetEventsQueryParamsStreamTypeField(
  val: GetEventsQueryParamsStreamTypeField
): SerializedData {
  return val;
}
export function deserializeGetEventsQueryParamsStreamTypeField(
  val: any
): GetEventsQueryParamsStreamTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GetEventsQueryParamsStreamTypeField"',
    });
  }
  if (val == 'all') {
    return 'all';
  }
  if (val == 'changes') {
    return 'changes';
  }
  if (val == 'sync') {
    return 'sync';
  }
  if (val == 'admin_logs') {
    return 'admin_logs';
  }
  if (val == 'admin_logs_streaming') {
    return 'admin_logs_streaming';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGetEventsQueryParamsEventTypeField(
  val: GetEventsQueryParamsEventTypeField
): SerializedData {
  return val;
}
export function deserializeGetEventsQueryParamsEventTypeField(
  val: any
): GetEventsQueryParamsEventTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GetEventsQueryParamsEventTypeField"',
    });
  }
  if (val == 'ACCESS_GRANTED') {
    return 'ACCESS_GRANTED';
  }
  if (val == 'ACCESS_REVOKED') {
    return 'ACCESS_REVOKED';
  }
  if (val == 'ADD_DEVICE_ASSOCIATION') {
    return 'ADD_DEVICE_ASSOCIATION';
  }
  if (val == 'ADD_LOGIN_ACTIVITY_DEVICE') {
    return 'ADD_LOGIN_ACTIVITY_DEVICE';
  }
  if (val == 'ADMIN_LOGIN') {
    return 'ADMIN_LOGIN';
  }
  if (val == 'APPLICATION_CREATED') {
    return 'APPLICATION_CREATED';
  }
  if (val == 'APPLICATION_PUBLIC_KEY_ADDED') {
    return 'APPLICATION_PUBLIC_KEY_ADDED';
  }
  if (val == 'APPLICATION_PUBLIC_KEY_DELETED') {
    return 'APPLICATION_PUBLIC_KEY_DELETED';
  }
  if (val == 'CHANGE_ADMIN_ROLE') {
    return 'CHANGE_ADMIN_ROLE';
  }
  if (val == 'CHANGE_FOLDER_PERMISSION') {
    return 'CHANGE_FOLDER_PERMISSION';
  }
  if (val == 'COLLABORATION_ACCEPT') {
    return 'COLLABORATION_ACCEPT';
  }
  if (val == 'COLLABORATION_EXPIRATION') {
    return 'COLLABORATION_EXPIRATION';
  }
  if (val == 'COLLABORATION_INVITE') {
    return 'COLLABORATION_INVITE';
  }
  if (val == 'COLLABORATION_REMOVE') {
    return 'COLLABORATION_REMOVE';
  }
  if (val == 'COLLABORATION_ROLE_CHANGE') {
    return 'COLLABORATION_ROLE_CHANGE';
  }
  if (val == 'COMMENT_CREATE') {
    return 'COMMENT_CREATE';
  }
  if (val == 'COMMENT_DELETE') {
    return 'COMMENT_DELETE';
  }
  if (val == 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY') {
    return 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY';
  }
  if (val == 'CONTENT_WORKFLOW_AUTOMATION_ADD') {
    return 'CONTENT_WORKFLOW_AUTOMATION_ADD';
  }
  if (val == 'CONTENT_WORKFLOW_AUTOMATION_DELETE') {
    return 'CONTENT_WORKFLOW_AUTOMATION_DELETE';
  }
  if (val == 'CONTENT_WORKFLOW_POLICY_ADD') {
    return 'CONTENT_WORKFLOW_POLICY_ADD';
  }
  if (val == 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION') {
    return 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION';
  }
  if (val == 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION') {
    return 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION';
  }
  if (val == 'COPY') {
    return 'COPY';
  }
  if (val == 'DATA_RETENTION_CREATE_RETENTION') {
    return 'DATA_RETENTION_CREATE_RETENTION';
  }
  if (val == 'DATA_RETENTION_REMOVE_RETENTION') {
    return 'DATA_RETENTION_REMOVE_RETENTION';
  }
  if (val == 'DELETE') {
    return 'DELETE';
  }
  if (val == 'DELETE_USER') {
    return 'DELETE_USER';
  }
  if (val == 'DEVICE_TRUST_CHECK_FAILED') {
    return 'DEVICE_TRUST_CHECK_FAILED';
  }
  if (val == 'DOWNLOAD') {
    return 'DOWNLOAD';
  }
  if (val == 'EDIT') {
    return 'EDIT';
  }
  if (val == 'EDIT_USER') {
    return 'EDIT_USER';
  }
  if (val == 'EMAIL_ALIAS_CONFIRM') {
    return 'EMAIL_ALIAS_CONFIRM';
  }
  if (val == 'EMAIL_ALIAS_REMOVE') {
    return 'EMAIL_ALIAS_REMOVE';
  }
  if (val == 'ENTERPRISE_APP_AUTHORIZATION_UPDATE') {
    return 'ENTERPRISE_APP_AUTHORIZATION_UPDATE';
  }
  if (val == 'EXTERNAL_COLLAB_SECURITY_SETTINGS') {
    return 'EXTERNAL_COLLAB_SECURITY_SETTINGS';
  }
  if (val == 'FAILED_LOGIN') {
    return 'FAILED_LOGIN';
  }
  if (val == 'FILE_MARKED_MALICIOUS') {
    return 'FILE_MARKED_MALICIOUS';
  }
  if (val == 'FILE_WATERMARKED_DOWNLOAD') {
    return 'FILE_WATERMARKED_DOWNLOAD';
  }
  if (val == 'GROUP_ADD_ITEM') {
    return 'GROUP_ADD_ITEM';
  }
  if (val == 'GROUP_ADD_USER') {
    return 'GROUP_ADD_USER';
  }
  if (val == 'GROUP_CREATION') {
    return 'GROUP_CREATION';
  }
  if (val == 'GROUP_DELETION') {
    return 'GROUP_DELETION';
  }
  if (val == 'GROUP_EDITED') {
    return 'GROUP_EDITED';
  }
  if (val == 'GROUP_REMOVE_ITEM') {
    return 'GROUP_REMOVE_ITEM';
  }
  if (val == 'GROUP_REMOVE_USER') {
    return 'GROUP_REMOVE_USER';
  }
  if (val == 'ITEM_MODIFY') {
    return 'ITEM_MODIFY';
  }
  if (val == 'ITEM_OPEN') {
    return 'ITEM_OPEN';
  }
  if (val == 'ITEM_SHARED_UPDATE') {
    return 'ITEM_SHARED_UPDATE';
  }
  if (val == 'ITEM_SYNC') {
    return 'ITEM_SYNC';
  }
  if (val == 'ITEM_UNSYNC') {
    return 'ITEM_UNSYNC';
  }
  if (val == 'LEGAL_HOLD_ASSIGNMENT_CREATE') {
    return 'LEGAL_HOLD_ASSIGNMENT_CREATE';
  }
  if (val == 'LEGAL_HOLD_ASSIGNMENT_DELETE') {
    return 'LEGAL_HOLD_ASSIGNMENT_DELETE';
  }
  if (val == 'LEGAL_HOLD_POLICY_CREATE') {
    return 'LEGAL_HOLD_POLICY_CREATE';
  }
  if (val == 'LEGAL_HOLD_POLICY_DELETE') {
    return 'LEGAL_HOLD_POLICY_DELETE';
  }
  if (val == 'LEGAL_HOLD_POLICY_UPDATE') {
    return 'LEGAL_HOLD_POLICY_UPDATE';
  }
  if (val == 'LOCK') {
    return 'LOCK';
  }
  if (val == 'LOGIN') {
    return 'LOGIN';
  }
  if (val == 'METADATA_INSTANCE_CREATE') {
    return 'METADATA_INSTANCE_CREATE';
  }
  if (val == 'METADATA_INSTANCE_DELETE') {
    return 'METADATA_INSTANCE_DELETE';
  }
  if (val == 'METADATA_INSTANCE_UPDATE') {
    return 'METADATA_INSTANCE_UPDATE';
  }
  if (val == 'METADATA_TEMPLATE_CREATE') {
    return 'METADATA_TEMPLATE_CREATE';
  }
  if (val == 'METADATA_TEMPLATE_DELETE') {
    return 'METADATA_TEMPLATE_DELETE';
  }
  if (val == 'METADATA_TEMPLATE_UPDATE') {
    return 'METADATA_TEMPLATE_UPDATE';
  }
  if (val == 'MOVE') {
    return 'MOVE';
  }
  if (val == 'NEW_USER') {
    return 'NEW_USER';
  }
  if (val == 'OAUTH2_ACCESS_TOKEN_REVOKE') {
    return 'OAUTH2_ACCESS_TOKEN_REVOKE';
  }
  if (val == 'PREVIEW') {
    return 'PREVIEW';
  }
  if (val == 'REMOVE_DEVICE_ASSOCIATION') {
    return 'REMOVE_DEVICE_ASSOCIATION';
  }
  if (val == 'REMOVE_LOGIN_ACTIVITY_DEVICE') {
    return 'REMOVE_LOGIN_ACTIVITY_DEVICE';
  }
  if (val == 'RENAME') {
    return 'RENAME';
  }
  if (val == 'RETENTION_POLICY_ASSIGNMENT_ADD') {
    return 'RETENTION_POLICY_ASSIGNMENT_ADD';
  }
  if (val == 'SHARE') {
    return 'SHARE';
  }
  if (val == 'SHARE_EXPIRATION') {
    return 'SHARE_EXPIRATION';
  }
  if (val == 'SHIELD_ALERT') {
    return 'SHIELD_ALERT';
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED') {
    return 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED';
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION') {
    return 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION';
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED') {
    return 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED';
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION') {
    return 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION';
  }
  if (val == 'SHIELD_JUSTIFICATION_APPROVAL') {
    return 'SHIELD_JUSTIFICATION_APPROVAL';
  }
  if (val == 'SHIELD_SHARED_LINK_ACCESS_BLOCKED') {
    return 'SHIELD_SHARED_LINK_ACCESS_BLOCKED';
  }
  if (val == 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE') {
    return 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE';
  }
  if (val == 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE') {
    return 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE';
  }
  if (val == 'SIGN_DOCUMENT_ASSIGNED') {
    return 'SIGN_DOCUMENT_ASSIGNED';
  }
  if (val == 'SIGN_DOCUMENT_CANCELLED') {
    return 'SIGN_DOCUMENT_CANCELLED';
  }
  if (val == 'SIGN_DOCUMENT_COMPLETED') {
    return 'SIGN_DOCUMENT_COMPLETED';
  }
  if (val == 'SIGN_DOCUMENT_CONVERTED') {
    return 'SIGN_DOCUMENT_CONVERTED';
  }
  if (val == 'SIGN_DOCUMENT_CREATED') {
    return 'SIGN_DOCUMENT_CREATED';
  }
  if (val == 'SIGN_DOCUMENT_DECLINED') {
    return 'SIGN_DOCUMENT_DECLINED';
  }
  if (val == 'SIGN_DOCUMENT_EXPIRED') {
    return 'SIGN_DOCUMENT_EXPIRED';
  }
  if (val == 'SIGN_DOCUMENT_SIGNED') {
    return 'SIGN_DOCUMENT_SIGNED';
  }
  if (val == 'SIGN_DOCUMENT_VIEWED_BY_SIGNED') {
    return 'SIGN_DOCUMENT_VIEWED_BY_SIGNED';
  }
  if (val == 'SIGNER_DOWNLOADED') {
    return 'SIGNER_DOWNLOADED';
  }
  if (val == 'SIGNER_FORWARDED') {
    return 'SIGNER_FORWARDED';
  }
  if (val == 'STORAGE_EXPIRATION') {
    return 'STORAGE_EXPIRATION';
  }
  if (val == 'TASK_ASSIGNMENT_CREATE') {
    return 'TASK_ASSIGNMENT_CREATE';
  }
  if (val == 'TASK_ASSIGNMENT_DELETE') {
    return 'TASK_ASSIGNMENT_DELETE';
  }
  if (val == 'TASK_ASSIGNMENT_UPDATE') {
    return 'TASK_ASSIGNMENT_UPDATE';
  }
  if (val == 'TASK_CREATE') {
    return 'TASK_CREATE';
  }
  if (val == 'TASK_UPDATE') {
    return 'TASK_UPDATE';
  }
  if (val == 'TERMS_OF_SERVICE_ACCEPT') {
    return 'TERMS_OF_SERVICE_ACCEPT';
  }
  if (val == 'TERMS_OF_SERVICE_REJECT') {
    return 'TERMS_OF_SERVICE_REJECT';
  }
  if (val == 'UNDELETE') {
    return 'UNDELETE';
  }
  if (val == 'UNLOCK') {
    return 'UNLOCK';
  }
  if (val == 'UNSHARE') {
    return 'UNSHARE';
  }
  if (val == 'UPDATE_COLLABORATION_EXPIRATION') {
    return 'UPDATE_COLLABORATION_EXPIRATION';
  }
  if (val == 'UPDATE_SHARE_EXPIRATION') {
    return 'UPDATE_SHARE_EXPIRATION';
  }
  if (val == 'UPLOAD') {
    return 'UPLOAD';
  }
  if (val == 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE') {
    return 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE';
  }
  if (val == 'WATERMARK_LABEL_CREATE') {
    return 'WATERMARK_LABEL_CREATE';
  }
  if (val == 'WATERMARK_LABEL_DELETE') {
    return 'WATERMARK_LABEL_DELETE';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
