"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeRecentItemInteractionTypeField = serializeRecentItemInteractionTypeField;
exports.deserializeRecentItemInteractionTypeField = deserializeRecentItemInteractionTypeField;
exports.serializeRecentItem = serializeRecentItem;
exports.deserializeRecentItem = deserializeRecentItem;
const fileFullOrFolderFullOrWebLink_generated_js_1 = require("./fileFullOrFolderFullOrWebLink.generated.js");
const fileFullOrFolderFullOrWebLink_generated_js_2 = require("./fileFullOrFolderFullOrWebLink.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeRecentItemInteractionTypeField(val) {
    return val;
}
function deserializeRecentItemInteractionTypeField(val) {
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
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize RecentItemInteractionTypeField",
    });
}
function serializeRecentItem(val) {
    return {
        ['type']: val.type,
        ['item']: val.item == void 0
            ? val.item
            : (0, fileFullOrFolderFullOrWebLink_generated_js_1.serializeFileFullOrFolderFullOrWebLink)(val.item),
        ['interaction_type']: val.interactionType == void 0
            ? val.interactionType
            : serializeRecentItemInteractionTypeField(val.interactionType),
        ['interacted_at']: val.interactedAt == void 0
            ? val.interactedAt
            : (0, utils_js_1.serializeDateTime)(val.interactedAt),
        ['interaction_shared_link']: val.interactionSharedLink,
    };
}
function deserializeRecentItem(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "RecentItem"' });
    }
    if (!(val.type == void 0) && !(0, json_js_1.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "RecentItem"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    const item = val.item == void 0
        ? void 0
        : (0, fileFullOrFolderFullOrWebLink_generated_js_2.deserializeFileFullOrFolderFullOrWebLink)(val.item);
    const interactionType = val.interaction_type == void 0
        ? void 0
        : deserializeRecentItemInteractionTypeField(val.interaction_type);
    if (!(val.interacted_at == void 0) && !(0, json_js_1.sdIsString)(val.interacted_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "interacted_at" of type "RecentItem"',
        });
    }
    const interactedAt = val.interacted_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.interacted_at);
    if (!(val.interaction_shared_link == void 0) &&
        !(0, json_js_1.sdIsString)(val.interaction_shared_link)) {
        throw new errors_js_1.BoxSdkError({
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