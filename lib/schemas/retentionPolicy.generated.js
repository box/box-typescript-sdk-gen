"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionPolicy = void 0;
exports.serializeRetentionPolicyPolicyTypeField = serializeRetentionPolicyPolicyTypeField;
exports.deserializeRetentionPolicyPolicyTypeField = deserializeRetentionPolicyPolicyTypeField;
exports.serializeRetentionPolicyRetentionTypeField = serializeRetentionPolicyRetentionTypeField;
exports.deserializeRetentionPolicyRetentionTypeField = deserializeRetentionPolicyRetentionTypeField;
exports.serializeRetentionPolicyStatusField = serializeRetentionPolicyStatusField;
exports.deserializeRetentionPolicyStatusField = deserializeRetentionPolicyStatusField;
exports.serializeRetentionPolicyAssignmentCountsField = serializeRetentionPolicyAssignmentCountsField;
exports.deserializeRetentionPolicyAssignmentCountsField = deserializeRetentionPolicyAssignmentCountsField;
exports.serializeRetentionPolicy = serializeRetentionPolicy;
exports.deserializeRetentionPolicy = deserializeRetentionPolicy;
const retentionPolicyBase_generated_js_1 = require("./retentionPolicyBase.generated.js");
const retentionPolicyMini_generated_js_1 = require("./retentionPolicyMini.generated.js");
const retentionPolicyMini_generated_js_2 = require("./retentionPolicyMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const retentionPolicyMini_generated_js_3 = require("./retentionPolicyMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
class RetentionPolicy extends retentionPolicyMini_generated_js_3.RetentionPolicyMini {
    constructor(fields) {
        super(fields);
        if (fields.description !== undefined) {
            this.description = fields.description;
        }
        if (fields.policyType !== undefined) {
            this.policyType = fields.policyType;
        }
        if (fields.retentionType !== undefined) {
            this.retentionType = fields.retentionType;
        }
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.createdBy !== undefined) {
            this.createdBy = fields.createdBy;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
        if (fields.canOwnerExtendRetention !== undefined) {
            this.canOwnerExtendRetention = fields.canOwnerExtendRetention;
        }
        if (fields.areOwnersNotified !== undefined) {
            this.areOwnersNotified = fields.areOwnersNotified;
        }
        if (fields.customNotificationRecipients !== undefined) {
            this.customNotificationRecipients = fields.customNotificationRecipients;
        }
        if (fields.assignmentCounts !== undefined) {
            this.assignmentCounts = fields.assignmentCounts;
        }
    }
}
exports.RetentionPolicy = RetentionPolicy;
function serializeRetentionPolicyPolicyTypeField(val) {
    return val;
}
function deserializeRetentionPolicyPolicyTypeField(val) {
    if (val == 'finite') {
        return val;
    }
    if (val == 'indefinite') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize RetentionPolicyPolicyTypeField",
    });
}
function serializeRetentionPolicyRetentionTypeField(val) {
    return val;
}
function deserializeRetentionPolicyRetentionTypeField(val) {
    if (val == 'modifiable') {
        return val;
    }
    if (val == 'non_modifiable') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize RetentionPolicyRetentionTypeField",
    });
}
function serializeRetentionPolicyStatusField(val) {
    return val;
}
function deserializeRetentionPolicyStatusField(val) {
    if (val == 'active') {
        return val;
    }
    if (val == 'retired') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize RetentionPolicyStatusField",
    });
}
function serializeRetentionPolicyAssignmentCountsField(val) {
    return {
        ['enterprise']: val.enterprise,
        ['folder']: val.folder,
        ['metadata_template']: val.metadataTemplate,
    };
}
function deserializeRetentionPolicyAssignmentCountsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentCountsField"',
        });
    }
    if (!(val.enterprise == void 0) && !(0, json_js_2.sdIsNumber)(val.enterprise)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "enterprise" of type "RetentionPolicyAssignmentCountsField"',
        });
    }
    const enterprise = val.enterprise == void 0 ? void 0 : val.enterprise;
    if (!(val.folder == void 0) && !(0, json_js_2.sdIsNumber)(val.folder)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "folder" of type "RetentionPolicyAssignmentCountsField"',
        });
    }
    const folder = val.folder == void 0 ? void 0 : val.folder;
    if (!(val.metadata_template == void 0) &&
        !(0, json_js_2.sdIsNumber)(val.metadata_template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "metadata_template" of type "RetentionPolicyAssignmentCountsField"',
        });
    }
    const metadataTemplate = val.metadata_template == void 0 ? void 0 : val.metadata_template;
    return {
        enterprise: enterprise,
        folder: folder,
        metadataTemplate: metadataTemplate,
    };
}
function serializeRetentionPolicy(val) {
    const base = (0, retentionPolicyMini_generated_js_2.serializeRetentionPolicyMini)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "RetentionPolicy"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['description']: val.description,
        ['policy_type']: val.policyType == void 0
            ? val.policyType
            : serializeRetentionPolicyPolicyTypeField(val.policyType),
        ['retention_type']: val.retentionType == void 0
            ? val.retentionType
            : serializeRetentionPolicyRetentionTypeField(val.retentionType),
        ['status']: val.status == void 0
            ? val.status
            : serializeRetentionPolicyStatusField(val.status),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['can_owner_extend_retention']: val.canOwnerExtendRetention,
        ['are_owners_notified']: val.areOwnersNotified,
        ['custom_notification_recipients']: val.customNotificationRecipients == void 0
            ? val.customNotificationRecipients
            : val.customNotificationRecipients.map(function (item) {
                return (0, userMini_generated_js_1.serializeUserMini)(item);
            }),
        ['assignment_counts']: val.assignmentCounts == void 0
            ? val.assignmentCounts
            : serializeRetentionPolicyAssignmentCountsField(val.assignmentCounts),
    });
}
function deserializeRetentionPolicy(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "RetentionPolicy"' });
    }
    if (!(val.description == void 0) && !(0, json_js_3.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "RetentionPolicy"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const policyType = val.policy_type == void 0
        ? void 0
        : deserializeRetentionPolicyPolicyTypeField(val.policy_type);
    const retentionType = val.retention_type == void 0
        ? void 0
        : deserializeRetentionPolicyRetentionTypeField(val.retention_type);
    const status = val.status == void 0
        ? void 0
        : deserializeRetentionPolicyStatusField(val.status);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_3.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "RetentionPolicy"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_3.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "RetentionPolicy"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.can_owner_extend_retention == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.can_owner_extend_retention)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_owner_extend_retention" of type "RetentionPolicy"',
        });
    }
    const canOwnerExtendRetention = val.can_owner_extend_retention == void 0
        ? void 0
        : val.can_owner_extend_retention;
    if (!(val.are_owners_notified == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_owners_notified)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_owners_notified" of type "RetentionPolicy"',
        });
    }
    const areOwnersNotified = val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
    if (!(val.custom_notification_recipients == void 0) &&
        !(0, json_js_4.sdIsList)(val.custom_notification_recipients)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "custom_notification_recipients" of type "RetentionPolicy"',
        });
    }
    const customNotificationRecipients = val.custom_notification_recipients == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.custom_notification_recipients)
            ? val.custom_notification_recipients.map(function (itm) {
                return (0, userMini_generated_js_2.deserializeUserMini)(itm);
            })
            : [];
    const assignmentCounts = val.assignment_counts == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentCountsField(val.assignment_counts);
    if (!(val.policy_name == void 0) && !(0, json_js_3.sdIsString)(val.policy_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "policy_name" of type "RetentionPolicy"',
        });
    }
    const policyName = val.policy_name == void 0 ? void 0 : val.policy_name;
    if (!(val.retention_length == void 0) && !(0, json_js_3.sdIsString)(val.retention_length)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "retention_length" of type "RetentionPolicy"',
        });
    }
    const retentionLength = val.retention_length == void 0 ? void 0 : val.retention_length;
    const dispositionAction = val.disposition_action == void 0
        ? void 0
        : (0, retentionPolicyMini_generated_js_1.deserializeRetentionPolicyMiniDispositionActionField)(val.disposition_action);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicy" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicy"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "RetentionPolicy" to be defined',
        });
    }
    const type = (0, retentionPolicyBase_generated_js_1.deserializeRetentionPolicyBaseTypeField)(val.type);
    return {
        description: description,
        policyType: policyType,
        retentionType: retentionType,
        status: status,
        createdBy: createdBy,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        canOwnerExtendRetention: canOwnerExtendRetention,
        areOwnersNotified: areOwnersNotified,
        customNotificationRecipients: customNotificationRecipients,
        assignmentCounts: assignmentCounts,
        policyName: policyName,
        retentionLength: retentionLength,
        dispositionAction: dispositionAction,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=retentionPolicy.generated.js.map