"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingPartnerItemTeamsUnion = serializeIntegrationMappingPartnerItemTeamsUnion;
exports.deserializeIntegrationMappingPartnerItemTeamsUnion = deserializeIntegrationMappingPartnerItemTeamsUnion;
const integrationMappingPartnerItemTeams_generated_js_1 = require("./integrationMappingPartnerItemTeams.generated.js");
const integrationMappingPartnerItemTeams_generated_js_2 = require("./integrationMappingPartnerItemTeams.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeIntegrationMappingPartnerItemTeamsUnion(val) {
    if (val.type == 'channel') {
        return (0, integrationMappingPartnerItemTeams_generated_js_1.serializeIntegrationMappingPartnerItemTeams)(val);
    }
    if (val.type == 'team') {
        return (0, integrationMappingPartnerItemTeams_generated_js_1.serializeIntegrationMappingPartnerItemTeams)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeIntegrationMappingPartnerItemTeamsUnion(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemTeamsUnion"',
        });
    }
    if (val.type == 'channel') {
        return (0, integrationMappingPartnerItemTeams_generated_js_2.deserializeIntegrationMappingPartnerItemTeams)(val);
    }
    if (val.type == 'team') {
        return (0, integrationMappingPartnerItemTeams_generated_js_2.deserializeIntegrationMappingPartnerItemTeams)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemTeamsUnion",
    });
}
//# sourceMappingURL=integrationMappingPartnerItemTeamsUnion.generated.js.map