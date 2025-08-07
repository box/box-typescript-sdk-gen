"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField = serializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField;
exports.deserializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField = deserializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField;
exports.serializeIntegrationMappingPartnerItemTeamsCreateRequest = serializeIntegrationMappingPartnerItemTeamsCreateRequest;
exports.deserializeIntegrationMappingPartnerItemTeamsCreateRequest = deserializeIntegrationMappingPartnerItemTeamsCreateRequest;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val) {
    return val;
}
function deserializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    if (val == 'team') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemTeamsCreateRequestTypeField",
    });
}
function serializeIntegrationMappingPartnerItemTeamsCreateRequest(val) {
    return {
        ['type']: serializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val.type),
        ['id']: val.id,
        ['tenant_id']: val.tenantId,
        ['team_id']: val.teamId,
    };
}
function deserializeIntegrationMappingPartnerItemTeamsCreateRequest(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemTeamsCreateRequest"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingPartnerItemTeamsCreateRequest" to be defined',
        });
    }
    const type = deserializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingPartnerItemTeamsCreateRequest" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingPartnerItemTeamsCreateRequest"',
        });
    }
    const id = val.id;
    if (val.tenant_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "tenant_id" of type "IntegrationMappingPartnerItemTeamsCreateRequest" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.tenant_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "tenant_id" of type "IntegrationMappingPartnerItemTeamsCreateRequest"',
        });
    }
    const tenantId = val.tenant_id;
    if (val.team_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "team_id" of type "IntegrationMappingPartnerItemTeamsCreateRequest" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.team_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "team_id" of type "IntegrationMappingPartnerItemTeamsCreateRequest"',
        });
    }
    const teamId = val.team_id;
    return {
        type: type,
        id: id,
        tenantId: tenantId,
        teamId: teamId,
    };
}
//# sourceMappingURL=integrationMappingPartnerItemTeamsCreateRequest.generated.js.map