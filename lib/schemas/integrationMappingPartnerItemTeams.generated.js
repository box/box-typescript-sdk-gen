"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingPartnerItemTeamsTypeField = serializeIntegrationMappingPartnerItemTeamsTypeField;
exports.deserializeIntegrationMappingPartnerItemTeamsTypeField = deserializeIntegrationMappingPartnerItemTeamsTypeField;
exports.serializeIntegrationMappingPartnerItemTeams = serializeIntegrationMappingPartnerItemTeams;
exports.deserializeIntegrationMappingPartnerItemTeams = deserializeIntegrationMappingPartnerItemTeams;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeIntegrationMappingPartnerItemTeamsTypeField(val) {
    return val;
}
function deserializeIntegrationMappingPartnerItemTeamsTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    if (val == 'team') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemTeamsTypeField",
    });
}
function serializeIntegrationMappingPartnerItemTeams(val) {
    return {
        ['type']: serializeIntegrationMappingPartnerItemTeamsTypeField(val.type),
        ['id']: val.id,
        ['tenant_id']: val.tenantId,
    };
}
function deserializeIntegrationMappingPartnerItemTeams(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemTeams"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingPartnerItemTeams" to be defined',
        });
    }
    const type = deserializeIntegrationMappingPartnerItemTeamsTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingPartnerItemTeams" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingPartnerItemTeams"',
        });
    }
    const id = val.id;
    if (val.tenant_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "tenant_id" of type "IntegrationMappingPartnerItemTeams" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.tenant_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "tenant_id" of type "IntegrationMappingPartnerItemTeams"',
        });
    }
    const tenantId = val.tenant_id;
    return {
        type: type,
        id: id,
        tenantId: tenantId,
    };
}
//# sourceMappingURL=integrationMappingPartnerItemTeams.generated.js.map