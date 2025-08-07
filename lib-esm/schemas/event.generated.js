import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser } from './appItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser.generated.js';
import { deserializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser } from './appItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeEventEventTypeField(val) {
    return val;
}
export function deserializeEventEventTypeField(val) {
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
    if (val == 'COLLAB_ADD_COLLABORATOR') {
        return val;
    }
    if (val == 'COLLAB_INVITE_COLLABORATOR') {
        return val;
    }
    if (val == 'COLLAB_REMOVE_COLLABORATOR') {
        return val;
    }
    if (val == 'COLLAB_ROLE_CHANGE') {
        return val;
    }
    if (val == 'COMMENT_CREATE') {
        return val;
    }
    if (val == 'COMMENT_DELETE') {
        return val;
    }
    if (val == 'CONTENT_ACCESS') {
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
    if (val == 'EDR_CROWDSTRIKE_DEVICE_DETECTED') {
        return val;
    }
    if (val == 'EDR_CROWDSTRIKE_NO_BOX_TOOLS') {
        return val;
    }
    if (val == 'EDR_CROWDSTRIKE_BOX_TOOLS_OUTDATED') {
        return val;
    }
    if (val == 'EDR_CROWDSTRIKE_DRIVE_OUTDATED') {
        return val;
    }
    if (val == 'EDR_CROWDSTRIKE_ACCESS_ALLOWED_NO_CROWDSTRIKE_DEVICE') {
        return val;
    }
    if (val == 'EDR_CROWDSTRIKE_ACCESS_REVOKED') {
        return val;
    }
    if (val == 'EMAIL_ALIAS_CONFIRM') {
        return val;
    }
    if (val == 'EMAIL_ALIAS_REMOVE') {
        return val;
    }
    if (val == 'ENABLE_TWO_FACTOR_AUTH') {
        return val;
    }
    if (val == 'ENTERPRISE_APP_AUTHORIZATION_UPDATE') {
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
    if (val == 'ITEM_COPY') {
        return val;
    }
    if (val == 'ITEM_CREATE') {
        return val;
    }
    if (val == 'ITEM_DOWNLOAD') {
        return val;
    }
    if (val == 'ITEM_EMAIL_SEND') {
        return val;
    }
    if (val == 'ITEM_MAKE_CURRENT_VERSION') {
        return val;
    }
    if (val == 'ITEM_MODIFY') {
        return val;
    }
    if (val == 'ITEM_MOVE') {
        return val;
    }
    if (val == 'ITEM_OPEN') {
        return val;
    }
    if (val == 'ITEM_PREVIEW') {
        return val;
    }
    if (val == 'ITEM_RENAME') {
        return val;
    }
    if (val == 'ITEM_SHARED') {
        return val;
    }
    if (val == 'ITEM_SHARED_CREATE') {
        return val;
    }
    if (val == 'ITEM_SHARED_UNSHARE') {
        return val;
    }
    if (val == 'ITEM_SHARED_UPDATE') {
        return val;
    }
    if (val == 'ITEM_SYNC') {
        return val;
    }
    if (val == 'ITEM_TRASH') {
        return val;
    }
    if (val == 'ITEM_UNDELETE_VIA_TRASH') {
        return val;
    }
    if (val == 'ITEM_UNSYNC') {
        return val;
    }
    if (val == 'ITEM_UPLOAD') {
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
    if (val == 'LOCK_CREATE') {
        return val;
    }
    if (val == 'LOCK_DESTROY') {
        return val;
    }
    if (val == 'LOGIN') {
        return val;
    }
    if (val == 'MASTER_INVITE_ACCEPT') {
        return val;
    }
    if (val == 'MASTER_INVITE_REJECT') {
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
    if (val == 'TAG_ITEM_CREATE') {
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
    throw new BoxSdkError({ message: "Can't deserialize EventEventTypeField" });
}
export function serializeEventAdditionalDetailsField(val) {
    return {};
}
export function deserializeEventAdditionalDetailsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "EventAdditionalDetailsField"',
        });
    }
    return {};
}
export function serializeEvent(val) {
    return {
        ['type']: val.type,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['recorded_at']: val.recordedAt == void 0
            ? val.recordedAt
            : serializeDateTime(val.recordedAt),
        ['event_id']: val.eventId,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserMini(val.createdBy),
        ['event_type']: val.eventType == void 0
            ? val.eventType
            : serializeEventEventTypeField(val.eventType),
        ['session_id']: val.sessionId,
        ['source']: val.source == void 0
            ? val.source
            : serializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser(val.source),
        ['additional_details']: val.additionalDetails == void 0
            ? val.additionalDetails
            : serializeEventAdditionalDetailsField(val.additionalDetails),
    };
}
export function deserializeEvent(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Event"' });
    }
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "Event"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "Event"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.recorded_at == void 0) && !sdIsString(val.recorded_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "recorded_at" of type "Event"',
        });
    }
    const recordedAt = val.recorded_at == void 0 ? void 0 : deserializeDateTime(val.recorded_at);
    if (!(val.event_id == void 0) && !sdIsString(val.event_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "event_id" of type "Event"',
        });
    }
    const eventId = val.event_id == void 0 ? void 0 : val.event_id;
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const eventType = val.event_type == void 0
        ? void 0
        : deserializeEventEventTypeField(val.event_type);
    if (!(val.session_id == void 0) && !sdIsString(val.session_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "session_id" of type "Event"',
        });
    }
    const sessionId = val.session_id == void 0 ? void 0 : val.session_id;
    const source = val.source == void 0
        ? void 0
        : deserializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser(val.source);
    const additionalDetails = val.additional_details == void 0
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
    };
}
//# sourceMappingURL=event.generated.js.map