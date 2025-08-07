"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingTeamsCreateRequest = serializeIntegrationMappingTeamsCreateRequest;
exports.deserializeIntegrationMappingTeamsCreateRequest = deserializeIntegrationMappingTeamsCreateRequest;
const integrationMappingPartnerItemTeamsCreateRequest_generated_js_1 = require("./integrationMappingPartnerItemTeamsCreateRequest.generated.js");
const integrationMappingPartnerItemTeamsCreateRequest_generated_js_2 = require("./integrationMappingPartnerItemTeamsCreateRequest.generated.js");
const folderReference_generated_js_1 = require("./folderReference.generated.js");
const folderReference_generated_js_2 = require("./folderReference.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeIntegrationMappingTeamsCreateRequest(val) {
    return {
        ['partner_item']: (0, integrationMappingPartnerItemTeamsCreateRequest_generated_js_1.serializeIntegrationMappingPartnerItemTeamsCreateRequest)(val.partnerItem),
        ['box_item']: (0, folderReference_generated_js_1.serializeFolderReference)(val.boxItem),
    };
}
function deserializeIntegrationMappingTeamsCreateRequest(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingTeamsCreateRequest"',
        });
    }
    if (val.partner_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "partner_item" of type "IntegrationMappingTeamsCreateRequest" to be defined',
        });
    }
    const partnerItem = (0, integrationMappingPartnerItemTeamsCreateRequest_generated_js_2.deserializeIntegrationMappingPartnerItemTeamsCreateRequest)(val.partner_item);
    if (val.box_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "box_item" of type "IntegrationMappingTeamsCreateRequest" to be defined',
        });
    }
    const boxItem = (0, folderReference_generated_js_2.deserializeFolderReference)(val.box_item);
    return {
        partnerItem: partnerItem,
        boxItem: boxItem,
    };
}
//# sourceMappingURL=integrationMappingTeamsCreateRequest.generated.js.map