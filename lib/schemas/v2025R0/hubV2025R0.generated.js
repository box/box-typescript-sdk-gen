"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubV2025R0 = void 0;
exports.serializeHubV2025R0 = serializeHubV2025R0;
exports.deserializeHubV2025R0 = deserializeHubV2025R0;
const hubBaseV2025R0_generated_js_1 = require("./hubBaseV2025R0.generated.js");
const hubBaseV2025R0_generated_js_2 = require("./hubBaseV2025R0.generated.js");
const userMiniV2025R0_generated_js_1 = require("./userMiniV2025R0.generated.js");
const userMiniV2025R0_generated_js_2 = require("./userMiniV2025R0.generated.js");
const utils_js_1 = require("../../internal/utils.js");
const utils_js_2 = require("../../internal/utils.js");
const hubBaseV2025R0_generated_js_3 = require("./hubBaseV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
const json_js_4 = require("../../serialization/json.js");
class HubV2025R0 extends hubBaseV2025R0_generated_js_3.HubBaseV2025R0 {
    constructor(fields) {
        super(fields);
        if (fields.title !== undefined) {
            this.title = fields.title;
        }
        if (fields.description !== undefined) {
            this.description = fields.description;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.updatedAt !== undefined) {
            this.updatedAt = fields.updatedAt;
        }
        if (fields.createdBy !== undefined) {
            this.createdBy = fields.createdBy;
        }
        if (fields.updatedBy !== undefined) {
            this.updatedBy = fields.updatedBy;
        }
        if (fields.viewCount !== undefined) {
            this.viewCount = fields.viewCount;
        }
        if (fields.isAiEnabled !== undefined) {
            this.isAiEnabled = fields.isAiEnabled;
        }
        if (fields.isCollaborationRestrictedToEnterprise !== undefined) {
            this.isCollaborationRestrictedToEnterprise =
                fields.isCollaborationRestrictedToEnterprise;
        }
        if (fields.canNonOwnersInvite !== undefined) {
            this.canNonOwnersInvite = fields.canNonOwnersInvite;
        }
        if (fields.canSharedLinkBeCreated !== undefined) {
            this.canSharedLinkBeCreated = fields.canSharedLinkBeCreated;
        }
    }
}
exports.HubV2025R0 = HubV2025R0;
function serializeHubV2025R0(val) {
    const base = (0, hubBaseV2025R0_generated_js_2.serializeHubBaseV2025R0)(val);
    if (!(0, json_js_4.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "HubV2025R0"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['title']: val.title,
        ['description']: val.description,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['updated_at']: val.updatedAt == void 0
            ? val.updatedAt
            : (0, utils_js_1.serializeDateTime)(val.updatedAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMiniV2025R0_generated_js_1.serializeUserMiniV2025R0)(val.createdBy),
        ['updated_by']: val.updatedBy == void 0
            ? val.updatedBy
            : (0, userMiniV2025R0_generated_js_1.serializeUserMiniV2025R0)(val.updatedBy),
        ['view_count']: val.viewCount,
        ['is_ai_enabled']: val.isAiEnabled,
        ['is_collaboration_restricted_to_enterprise']: val.isCollaborationRestrictedToEnterprise,
        ['can_non_owners_invite']: val.canNonOwnersInvite,
        ['can_shared_link_be_created']: val.canSharedLinkBeCreated,
    });
}
function deserializeHubV2025R0(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "HubV2025R0"' });
    }
    if (!(val.title == void 0) && !(0, json_js_3.sdIsString)(val.title)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "title" of type "HubV2025R0"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !(0, json_js_3.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "HubV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.created_at == void 0) && !(0, json_js_3.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "HubV2025R0"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.updated_at == void 0) && !(0, json_js_3.sdIsString)(val.updated_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "updated_at" of type "HubV2025R0"',
        });
    }
    const updatedAt = val.updated_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.updated_at);
    const createdBy = val.created_by == void 0
        ? void 0
        : (0, userMiniV2025R0_generated_js_2.deserializeUserMiniV2025R0)(val.created_by);
    const updatedBy = val.updated_by == void 0
        ? void 0
        : (0, userMiniV2025R0_generated_js_2.deserializeUserMiniV2025R0)(val.updated_by);
    if (!(val.view_count == void 0) && !(0, json_js_2.sdIsNumber)(val.view_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "view_count" of type "HubV2025R0"',
        });
    }
    const viewCount = val.view_count == void 0 ? void 0 : val.view_count;
    if (!(val.is_ai_enabled == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_ai_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_ai_enabled" of type "HubV2025R0"',
        });
    }
    const isAiEnabled = val.is_ai_enabled == void 0 ? void 0 : val.is_ai_enabled;
    if (!(val.is_collaboration_restricted_to_enterprise == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_collaboration_restricted_to_enterprise)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_collaboration_restricted_to_enterprise" of type "HubV2025R0"',
        });
    }
    const isCollaborationRestrictedToEnterprise = val.is_collaboration_restricted_to_enterprise == void 0
        ? void 0
        : val.is_collaboration_restricted_to_enterprise;
    if (!(val.can_non_owners_invite == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.can_non_owners_invite)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_non_owners_invite" of type "HubV2025R0"',
        });
    }
    const canNonOwnersInvite = val.can_non_owners_invite == void 0 ? void 0 : val.can_non_owners_invite;
    if (!(val.can_shared_link_be_created == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.can_shared_link_be_created)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_shared_link_be_created" of type "HubV2025R0"',
        });
    }
    const canSharedLinkBeCreated = val.can_shared_link_be_created == void 0
        ? void 0
        : val.can_shared_link_be_created;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "HubV2025R0" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "HubV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "HubV2025R0" to be defined',
        });
    }
    const type = (0, hubBaseV2025R0_generated_js_1.deserializeHubBaseV2025R0TypeField)(val.type);
    return {
        title: title,
        description: description,
        createdAt: createdAt,
        updatedAt: updatedAt,
        createdBy: createdBy,
        updatedBy: updatedBy,
        viewCount: viewCount,
        isAiEnabled: isAiEnabled,
        isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise,
        canNonOwnersInvite: canNonOwnersInvite,
        canSharedLinkBeCreated: canSharedLinkBeCreated,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=hubV2025R0.generated.js.map