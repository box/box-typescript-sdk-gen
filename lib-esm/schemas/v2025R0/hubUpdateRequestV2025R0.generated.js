import { BoxSdkError } from '../../box/errors.js';
import { sdIsBoolean } from '../../serialization/json.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubUpdateRequestV2025R0(val) {
    return {
        ['title']: val.title,
        ['description']: val.description,
        ['is_ai_enabled']: val.isAiEnabled,
        ['is_collaboration_restricted_to_enterprise']: val.isCollaborationRestrictedToEnterprise,
        ['can_non_owners_invite']: val.canNonOwnersInvite,
        ['can_shared_link_be_created']: val.canSharedLinkBeCreated,
    };
}
export function deserializeHubUpdateRequestV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubUpdateRequestV2025R0"',
        });
    }
    if (!(val.title == void 0) && !sdIsString(val.title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "title" of type "HubUpdateRequestV2025R0"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "HubUpdateRequestV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.is_ai_enabled == void 0) && !sdIsBoolean(val.is_ai_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_ai_enabled" of type "HubUpdateRequestV2025R0"',
        });
    }
    const isAiEnabled = val.is_ai_enabled == void 0 ? void 0 : val.is_ai_enabled;
    if (!(val.is_collaboration_restricted_to_enterprise == void 0) &&
        !sdIsBoolean(val.is_collaboration_restricted_to_enterprise)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_collaboration_restricted_to_enterprise" of type "HubUpdateRequestV2025R0"',
        });
    }
    const isCollaborationRestrictedToEnterprise = val.is_collaboration_restricted_to_enterprise == void 0
        ? void 0
        : val.is_collaboration_restricted_to_enterprise;
    if (!(val.can_non_owners_invite == void 0) &&
        !sdIsBoolean(val.can_non_owners_invite)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_non_owners_invite" of type "HubUpdateRequestV2025R0"',
        });
    }
    const canNonOwnersInvite = val.can_non_owners_invite == void 0 ? void 0 : val.can_non_owners_invite;
    if (!(val.can_shared_link_be_created == void 0) &&
        !sdIsBoolean(val.can_shared_link_be_created)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_shared_link_be_created" of type "HubUpdateRequestV2025R0"',
        });
    }
    const canSharedLinkBeCreated = val.can_shared_link_be_created == void 0
        ? void 0
        : val.can_shared_link_be_created;
    return {
        title: title,
        description: description,
        isAiEnabled: isAiEnabled,
        isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise,
        canNonOwnersInvite: canNonOwnersInvite,
        canSharedLinkBeCreated: canSharedLinkBeCreated,
    };
}
//# sourceMappingURL=hubUpdateRequestV2025R0.generated.js.map