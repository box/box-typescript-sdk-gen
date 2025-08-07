"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingSlackCreateRequest = serializeIntegrationMappingSlackCreateRequest;
exports.deserializeIntegrationMappingSlackCreateRequest = deserializeIntegrationMappingSlackCreateRequest;
const integrationMappingPartnerItemSlack_generated_js_1 = require("./integrationMappingPartnerItemSlack.generated.js");
const integrationMappingPartnerItemSlack_generated_js_2 = require("./integrationMappingPartnerItemSlack.generated.js");
const integrationMappingBoxItemSlack_generated_js_1 = require("./integrationMappingBoxItemSlack.generated.js");
const integrationMappingBoxItemSlack_generated_js_2 = require("./integrationMappingBoxItemSlack.generated.js");
const integrationMappingSlackOptions_generated_js_1 = require("./integrationMappingSlackOptions.generated.js");
const integrationMappingSlackOptions_generated_js_2 = require("./integrationMappingSlackOptions.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeIntegrationMappingSlackCreateRequest(val) {
    return {
        ['partner_item']: (0, integrationMappingPartnerItemSlack_generated_js_1.serializeIntegrationMappingPartnerItemSlack)(val.partnerItem),
        ['box_item']: (0, integrationMappingBoxItemSlack_generated_js_1.serializeIntegrationMappingBoxItemSlack)(val.boxItem),
        ['options']: val.options == void 0
            ? val.options
            : (0, integrationMappingSlackOptions_generated_js_1.serializeIntegrationMappingSlackOptions)(val.options),
    };
}
function deserializeIntegrationMappingSlackCreateRequest(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingSlackCreateRequest"',
        });
    }
    if (val.partner_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "partner_item" of type "IntegrationMappingSlackCreateRequest" to be defined',
        });
    }
    const partnerItem = (0, integrationMappingPartnerItemSlack_generated_js_2.deserializeIntegrationMappingPartnerItemSlack)(val.partner_item);
    if (val.box_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "box_item" of type "IntegrationMappingSlackCreateRequest" to be defined',
        });
    }
    const boxItem = (0, integrationMappingBoxItemSlack_generated_js_2.deserializeIntegrationMappingBoxItemSlack)(val.box_item);
    const options = val.options == void 0
        ? void 0
        : (0, integrationMappingSlackOptions_generated_js_2.deserializeIntegrationMappingSlackOptions)(val.options);
    return {
        partnerItem: partnerItem,
        boxItem: boxItem,
        options: options,
    };
}
//# sourceMappingURL=integrationMappingSlackCreateRequest.generated.js.map