import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class IntegrationMappingPartnerItemSlack {
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
export function serializeIntegrationMappingPartnerItemSlackTypeField(val) {
    return val;
}
export function deserializeIntegrationMappingPartnerItemSlackTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemSlackTypeField",
    });
}
export function serializeIntegrationMappingPartnerItemSlack(val) {
    return {
        ['type']: serializeIntegrationMappingPartnerItemSlackTypeField(val.type),
        ['id']: val.id,
        ['slack_workspace_id']: val.slackWorkspaceId,
        ['slack_org_id']: val.slackOrgId,
    };
}
export function deserializeIntegrationMappingPartnerItemSlack(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemSlack"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingPartnerItemSlack" to be defined',
        });
    }
    const type = deserializeIntegrationMappingPartnerItemSlackTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingPartnerItemSlack" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingPartnerItemSlack"',
        });
    }
    const id = val.id;
    if (!(val.slack_workspace_id == void 0) &&
        !sdIsString(val.slack_workspace_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "slack_workspace_id" of type "IntegrationMappingPartnerItemSlack"',
        });
    }
    const slackWorkspaceId = val.slack_workspace_id == void 0 ? void 0 : val.slack_workspace_id;
    if (!(val.slack_org_id == void 0) && !sdIsString(val.slack_org_id)) {
        throw new BoxSdkError({
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
export function serializeIntegrationMappingPartnerItemSlackInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeIntegrationMappingPartnerItemSlackTypeField(val.type),
        ['id']: val.id,
        ['slack_workspace_id']: val.slackWorkspaceId,
        ['slack_org_id']: val.slackOrgId,
    };
}
export function deserializeIntegrationMappingPartnerItemSlackInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemSlackInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeIntegrationMappingPartnerItemSlackTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingPartnerItemSlackInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingPartnerItemSlackInput"',
        });
    }
    const id = val.id;
    if (!(val.slack_workspace_id == void 0) &&
        !sdIsString(val.slack_workspace_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "slack_workspace_id" of type "IntegrationMappingPartnerItemSlackInput"',
        });
    }
    const slackWorkspaceId = val.slack_workspace_id == void 0 ? void 0 : val.slack_workspace_id;
    if (!(val.slack_org_id == void 0) && !sdIsString(val.slack_org_id)) {
        throw new BoxSdkError({
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