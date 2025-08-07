"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingPartnerItemSlackUnion = serializeIntegrationMappingPartnerItemSlackUnion;
exports.deserializeIntegrationMappingPartnerItemSlackUnion = deserializeIntegrationMappingPartnerItemSlackUnion;
const integrationMappingPartnerItemSlack_generated_js_1 = require("./integrationMappingPartnerItemSlack.generated.js");
const integrationMappingPartnerItemSlack_generated_js_2 = require("./integrationMappingPartnerItemSlack.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeIntegrationMappingPartnerItemSlackUnion(val) {
    if (val.type == 'channel') {
        return (0, integrationMappingPartnerItemSlack_generated_js_1.serializeIntegrationMappingPartnerItemSlack)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeIntegrationMappingPartnerItemSlackUnion(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemSlackUnion"',
        });
    }
    if (val.type == 'channel') {
        return (0, integrationMappingPartnerItemSlack_generated_js_2.deserializeIntegrationMappingPartnerItemSlack)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemSlackUnion",
    });
}
//# sourceMappingURL=integrationMappingPartnerItemSlackUnion.generated.js.map