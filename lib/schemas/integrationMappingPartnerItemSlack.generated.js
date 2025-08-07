"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationMappingPartnerItemSlack = void 0;
exports.serializeIntegrationMappingPartnerItemSlackTypeField = serializeIntegrationMappingPartnerItemSlackTypeField;
exports.deserializeIntegrationMappingPartnerItemSlackTypeField = deserializeIntegrationMappingPartnerItemSlackTypeField;
exports.serializeIntegrationMappingPartnerItemSlack = serializeIntegrationMappingPartnerItemSlack;
exports.deserializeIntegrationMappingPartnerItemSlack = deserializeIntegrationMappingPartnerItemSlack;
exports.serializeIntegrationMappingPartnerItemSlackInput = serializeIntegrationMappingPartnerItemSlackInput;
exports.deserializeIntegrationMappingPartnerItemSlackInput = deserializeIntegrationMappingPartnerItemSlackInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class IntegrationMappingPartnerItemSlack {
    constructor(fields) {
        /**
         * Type of the mapped item referenced in `id`. */
        this.type = 'channel';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.slackWorkspaceId !== undefined) {
            this.slackWorkspaceId = fields.slackWorkspaceId;
        }
        if (fields.slackOrgId !== undefined) {
            this.slackOrgId = fields.slackOrgId;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.IntegrationMappingPartnerItemSlack = IntegrationMappingPartnerItemSlack;
function serializeIntegrationMappingPartnerItemSlackTypeField(val) {
    return val;
}
function deserializeIntegrationMappingPartnerItemSlackTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemSlackTypeField",
    });
}
function serializeIntegrationMappingPartnerItemSlack(val) {
    return {
        ['type']: serializeIntegrationMappingPartnerItemSlackTypeField(val.type),
        ['id']: val.id,
        ['slack_workspace_id']: val.slackWorkspaceId,
        ['slack_org_id']: val.slackOrgId,
    };
}
function deserializeIntegrationMappingPartnerItemSlack(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemSlack"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingPartnerItemSlack" to be defined',
        });
    }
    const type = deserializeIntegrationMappingPartnerItemSlackTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingPartnerItemSlack" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingPartnerItemSlack"',
        });
    }
    const id = val.id;
    if (!(val.slack_workspace_id == void 0) &&
        !(0, json_js_1.sdIsString)(val.slack_workspace_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "slack_workspace_id" of type "IntegrationMappingPartnerItemSlack"',
        });
    }
    const slackWorkspaceId = val.slack_workspace_id == void 0 ? void 0 : val.slack_workspace_id;
    if (!(val.slack_org_id == void 0) && !(0, json_js_1.sdIsString)(val.slack_org_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "slack_org_id" of type "IntegrationMappingPartnerItemSlack"',
        });
    }
    const slackOrgId = val.slack_org_id == void 0 ? void 0 : val.slack_org_id;
    return {
        type: type,
        id: id,
        slackWorkspaceId: slackWorkspaceId,
        slackOrgId: slackOrgId,
    };
}
function serializeIntegrationMappingPartnerItemSlackInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeIntegrationMappingPartnerItemSlackTypeField(val.type),
        ['id']: val.id,
        ['slack_workspace_id']: val.slackWorkspaceId,
        ['slack_org_id']: val.slackOrgId,
    };
}
function deserializeIntegrationMappingPartnerItemSlackInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemSlackInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeIntegrationMappingPartnerItemSlackTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingPartnerItemSlackInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingPartnerItemSlackInput"',
        });
    }
    const id = val.id;
    if (!(val.slack_workspace_id == void 0) &&
        !(0, json_js_1.sdIsString)(val.slack_workspace_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "slack_workspace_id" of type "IntegrationMappingPartnerItemSlackInput"',
        });
    }
    const slackWorkspaceId = val.slack_workspace_id == void 0 ? void 0 : val.slack_workspace_id;
    if (!(val.slack_org_id == void 0) && !(0, json_js_1.sdIsString)(val.slack_org_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "slack_org_id" of type "IntegrationMappingPartnerItemSlackInput"',
        });
    }
    const slackOrgId = val.slack_org_id == void 0 ? void 0 : val.slack_org_id;
    return {
        type: type,
        id: id,
        slackWorkspaceId: slackWorkspaceId,
        slackOrgId: slackOrgId,
    };
}
//# sourceMappingURL=integrationMappingPartnerItemSlack.generated.js.map