import { serializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { deserializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeRecentItemInteractionTypeField(val) {
    return val;
}
export function deserializeRecentItemInteractionTypeField(val) {
    if (val == 'item_preview') {
        return val;
    }
    if (val == 'item_upload') {
        return val;
    }
    if (val == 'item_comment') {
        return val;
    }
    if (val == 'item_open') {
        return val;
    }
    if (val == 'item_modify') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize RecentItemInteractionTypeField",
    });
}
export function serializeRecentItem(val) {
    return {
        ['type']: val.type,
        ['item']: val.item == void 0
            ? val.item
            : serializeFileFullOrFolderFullOrWebLink(val.item),
        ['interaction_type']: val.interactionType == void 0
            ? val.interactionType
            : serializeRecentItemInteractionTypeField(val.interactionType),
        ['interacted_at']: val.interactedAt == void 0
            ? val.interactedAt
            : serializeDateTime(val.interactedAt),
        ['interaction_shared_link']: val.interactionSharedLink,
    };
}
export function deserializeRecentItem(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "RecentItem"' });
    }
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "RecentItem"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    const item = val.item == void 0
        ? void 0
        : deserializeFileFullOrFolderFullOrWebLink(val.item);
    const interactionType = val.interaction_type == void 0
        ? void 0
        : deserializeRecentItemInteractionTypeField(val.interaction_type);
    if (!(val.interacted_at == void 0) && !sdIsString(val.interacted_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "interacted_at" of type "RecentItem"',
        });
    }
    const interactedAt = val.interacted_at == void 0
        ? void 0
        : deserializeDateTime(val.interacted_at);
    if (!(val.interaction_shared_link == void 0) &&
        !sdIsString(val.interaction_shared_link)) {
        throw new BoxSdkError({
            message: 'Expecting string for "interaction_shared_link" of type "RecentItem"',
        });
    }
    const interactionSharedLink = val.interaction_shared_link == void 0
        ? void 0
        : val.interaction_shared_link;
    return {
        type: type,
        item: item,
        interactionType: interactionType,
        interactedAt: interactedAt,
        interactionSharedLink: interactionSharedLink,
    };
}
//# sourceMappingURL=recentItem.generated.js.map