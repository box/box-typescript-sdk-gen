import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeEventSourceOrFileOrFolderOrGenericSourceOrUser } from './eventSourceOrFileOrFolderOrGenericSourceOrUser.generated.js';
import { deserializeEventSourceOrFileOrFolderOrGenericSourceOrUser } from './eventSourceOrFileOrFolderOrGenericSourceOrUser.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { UserMini } from './userMini.generated.js';
import { EventSourceOrFileOrFolderOrGenericSourceOrUser } from './eventSourceOrFileOrFolderOrGenericSourceOrUser.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type EventEventTypeField =
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
  | 'COLLAB_ADD_COLLABORATOR'
  | 'COLLAB_INVITE_COLLABORATOR'
  | 'COLLAB_REMOVE_COLLABORATOR'
  | 'COLLAB_ROLE_CHANGE'
  | 'COMMENT_CREATE'
  | 'COMMENT_DELETE'
  | 'CONTENT_ACCESS'
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
  | 'ENABLE_TWO_FACTOR_AUTH'
  | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE'
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
  | 'ITEM_COPY'
  | 'ITEM_CREATE'
  | 'ITEM_DOWNLOAD'
  | 'ITEM_EMAIL_SEND'
  | 'ITEM_MAKE_CURRENT_VERSION'
  | 'ITEM_MODIFY'
  | 'ITEM_MOVE'
  | 'ITEM_OPEN'
  | 'ITEM_PREVIEW'
  | 'ITEM_RENAME'
  | 'ITEM_SHARED'
  | 'ITEM_SHARED_CREATE'
  | 'ITEM_SHARED_UNSHARE'
  | 'ITEM_SHARED_UPDATE'
  | 'ITEM_SYNC'
  | 'ITEM_TRASH'
  | 'ITEM_UNDELETE_VIA_TRASH'
  | 'ITEM_UNSYNC'
  | 'ITEM_UPLOAD'
  | 'LEGAL_HOLD_ASSIGNMENT_CREATE'
  | 'LEGAL_HOLD_ASSIGNMENT_DELETE'
  | 'LEGAL_HOLD_POLICY_CREATE'
  | 'LEGAL_HOLD_POLICY_DELETE'
  | 'LEGAL_HOLD_POLICY_UPDATE'
  | 'LOCK'
  | 'LOCK_CREATE'
  | 'LOCK_DESTROY'
  | 'LOGIN'
  | 'MASTER_INVITE_ACCEPT'
  | 'MASTER_INVITE_REJECT'
  | 'METADATA_INSTANCE_CREATE'
  | 'METADATA_INSTANCE_DELETE'
  | 'METADATA_INSTANCE_UPDATE'
  | 'METADATA_TEMPLATE_CREATE'
  | 'METADATA_TEMPLATE_DELETE'
  | 'METADATA_TEMPLATE_UPDATE'
  | 'MOVE'
  | 'NEW_USER'
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
  | 'TAG_ITEM_CREATE'
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
export interface EventAdditionalDetailsField {}
export interface Event {
  readonly type?: string;
  readonly createdAt?: DateTime;
  readonly recordedAt?: DateTime;
  readonly eventId?: string;
  readonly createdBy?: UserMini;
  readonly eventType?: EventEventTypeField;
  readonly sessionId?: string;
  readonly source?: EventSourceOrFileOrFolderOrGenericSourceOrUser;
  readonly additionalDetails?: EventAdditionalDetailsField;
}
export function serializeEventEventTypeField(
  val: EventEventTypeField
): SerializedData {
  return val;
}
export function deserializeEventEventTypeField(
  val: SerializedData
): EventEventTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "EventEventTypeField"',
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
  if (val == 'COLLAB_ADD_COLLABORATOR') {
    return 'COLLAB_ADD_COLLABORATOR';
  }
  if (val == 'COLLAB_INVITE_COLLABORATOR') {
    return 'COLLAB_INVITE_COLLABORATOR';
  }
  if (val == 'COLLAB_REMOVE_COLLABORATOR') {
    return 'COLLAB_REMOVE_COLLABORATOR';
  }
  if (val == 'COLLAB_ROLE_CHANGE') {
    return 'COLLAB_ROLE_CHANGE';
  }
  if (val == 'COMMENT_CREATE') {
    return 'COMMENT_CREATE';
  }
  if (val == 'COMMENT_DELETE') {
    return 'COMMENT_DELETE';
  }
  if (val == 'CONTENT_ACCESS') {
    return 'CONTENT_ACCESS';
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
  if (val == 'ENABLE_TWO_FACTOR_AUTH') {
    return 'ENABLE_TWO_FACTOR_AUTH';
  }
  if (val == 'ENTERPRISE_APP_AUTHORIZATION_UPDATE') {
    return 'ENTERPRISE_APP_AUTHORIZATION_UPDATE';
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
  if (val == 'ITEM_COPY') {
    return 'ITEM_COPY';
  }
  if (val == 'ITEM_CREATE') {
    return 'ITEM_CREATE';
  }
  if (val == 'ITEM_DOWNLOAD') {
    return 'ITEM_DOWNLOAD';
  }
  if (val == 'ITEM_EMAIL_SEND') {
    return 'ITEM_EMAIL_SEND';
  }
  if (val == 'ITEM_MAKE_CURRENT_VERSION') {
    return 'ITEM_MAKE_CURRENT_VERSION';
  }
  if (val == 'ITEM_MODIFY') {
    return 'ITEM_MODIFY';
  }
  if (val == 'ITEM_MOVE') {
    return 'ITEM_MOVE';
  }
  if (val == 'ITEM_OPEN') {
    return 'ITEM_OPEN';
  }
  if (val == 'ITEM_PREVIEW') {
    return 'ITEM_PREVIEW';
  }
  if (val == 'ITEM_RENAME') {
    return 'ITEM_RENAME';
  }
  if (val == 'ITEM_SHARED') {
    return 'ITEM_SHARED';
  }
  if (val == 'ITEM_SHARED_CREATE') {
    return 'ITEM_SHARED_CREATE';
  }
  if (val == 'ITEM_SHARED_UNSHARE') {
    return 'ITEM_SHARED_UNSHARE';
  }
  if (val == 'ITEM_SHARED_UPDATE') {
    return 'ITEM_SHARED_UPDATE';
  }
  if (val == 'ITEM_SYNC') {
    return 'ITEM_SYNC';
  }
  if (val == 'ITEM_TRASH') {
    return 'ITEM_TRASH';
  }
  if (val == 'ITEM_UNDELETE_VIA_TRASH') {
    return 'ITEM_UNDELETE_VIA_TRASH';
  }
  if (val == 'ITEM_UNSYNC') {
    return 'ITEM_UNSYNC';
  }
  if (val == 'ITEM_UPLOAD') {
    return 'ITEM_UPLOAD';
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
  if (val == 'LOCK_CREATE') {
    return 'LOCK_CREATE';
  }
  if (val == 'LOCK_DESTROY') {
    return 'LOCK_DESTROY';
  }
  if (val == 'LOGIN') {
    return 'LOGIN';
  }
  if (val == 'MASTER_INVITE_ACCEPT') {
    return 'MASTER_INVITE_ACCEPT';
  }
  if (val == 'MASTER_INVITE_REJECT') {
    return 'MASTER_INVITE_REJECT';
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
  if (val == 'SHARED_LINK_SEND') {
    return 'SHARED_LINK_SEND';
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
  if (val == 'TAG_ITEM_CREATE') {
    return 'TAG_ITEM_CREATE';
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
export function serializeEventAdditionalDetailsField(
  val: EventAdditionalDetailsField
): SerializedData {
  return {};
}
export function deserializeEventAdditionalDetailsField(
  val: SerializedData
): EventAdditionalDetailsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "EventAdditionalDetailsField"',
    });
  }
  return {} satisfies EventAdditionalDetailsField;
}
export function serializeEvent(val: Event): SerializedData {
  return {
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['recorded_at']:
      val.recordedAt == void 0 ? void 0 : serializeDateTime(val.recordedAt),
    ['event_id']: val.eventId == void 0 ? void 0 : val.eventId,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['event_type']:
      val.eventType == void 0
        ? void 0
        : serializeEventEventTypeField(val.eventType),
    ['session_id']: val.sessionId == void 0 ? void 0 : val.sessionId,
    ['source']:
      val.source == void 0
        ? void 0
        : serializeEventSourceOrFileOrFolderOrGenericSourceOrUser(val.source),
    ['additional_details']:
      val.additionalDetails == void 0
        ? void 0
        : serializeEventAdditionalDetailsField(val.additionalDetails),
  };
}
export function deserializeEvent(val: SerializedData): Event {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "Event"' });
  }
  if (!(val.type == void 0) && !sdIsString(val.type)) {
    throw new BoxSdkError({
      message: 'Expecting string for "type" of type "Event"',
    });
  }
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "Event"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.recorded_at == void 0) && !sdIsString(val.recorded_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "recorded_at" of type "Event"',
    });
  }
  const recordedAt: undefined | DateTime =
    val.recorded_at == void 0 ? void 0 : deserializeDateTime(val.recorded_at);
  if (!(val.event_id == void 0) && !sdIsString(val.event_id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "event_id" of type "Event"',
    });
  }
  const eventId: undefined | string =
    val.event_id == void 0 ? void 0 : val.event_id;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const eventType: undefined | EventEventTypeField =
    val.event_type == void 0
      ? void 0
      : deserializeEventEventTypeField(val.event_type);
  if (!(val.session_id == void 0) && !sdIsString(val.session_id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "session_id" of type "Event"',
    });
  }
  const sessionId: undefined | string =
    val.session_id == void 0 ? void 0 : val.session_id;
  const source: undefined | EventSourceOrFileOrFolderOrGenericSourceOrUser =
    val.source == void 0
      ? void 0
      : deserializeEventSourceOrFileOrFolderOrGenericSourceOrUser(val.source);
  const additionalDetails: undefined | EventAdditionalDetailsField =
    val.additional_details == void 0
      ? void 0
      : deserializeEventAdditionalDetailsField(val.additional_details);
  return {
    type: type,
    createdAt: createdAt,
    recordedAt: recordedAt,
    eventId: eventId,
    createdBy: createdBy,
    eventType: eventType,
    sessionId: sessionId,
    source: source,
    additionalDetails: additionalDetails,
  } satisfies Event;
}
