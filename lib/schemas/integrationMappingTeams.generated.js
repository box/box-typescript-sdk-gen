"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationMappingTeams = void 0;
exports.serializeIntegrationMappingTeamsIntegrationTypeField = serializeIntegrationMappingTeamsIntegrationTypeField;
exports.deserializeIntegrationMappingTeamsIntegrationTypeField = deserializeIntegrationMappingTeamsIntegrationTypeField;
exports.serializeIntegrationMappingTeams = serializeIntegrationMappingTeams;
exports.deserializeIntegrationMappingTeams = deserializeIntegrationMappingTeams;
const integrationMappingBase_generated_js_1 = require("./integrationMappingBase.generated.js");
const integrationMappingBase_generated_js_2 = require("./integrationMappingBase.generated.js");
const integrationMappingPartnerItemTeamsUnion_generated_js_1 = require("./integrationMappingPartnerItemTeamsUnion.generated.js");
const integrationMappingPartnerItemTeamsUnion_generated_js_2 = require("./integrationMappingPartnerItemTeamsUnion.generated.js");
const folderReference_generated_js_1 = require("./folderReference.generated.js");
const folderReference_generated_js_2 = require("./folderReference.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const integrationMappingBase_generated_js_3 = require("./integrationMappingBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class IntegrationMappingTeams extends integrationMappingBase_generated_js_3.IntegrationMappingBase {
    constructor(fields) {
        super(fields);
        if (fields.integrationType !== undefined) {
            this.integrationType = fields.integrationType;
        }
        if (fields.isOverriddenByManualMapping !== undefined) {
            this.isOverriddenByManualMapping = fields.isOverriddenByManualMapping;
        }
        if (fields.partnerItem !== undefined) {
            this.partnerItem = fields.partnerItem;
        }
        if (fields.boxItem !== undefined) {
            this.boxItem = fields.boxItem;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
    }
}
exports.IntegrationMappingTeams = IntegrationMappingTeams;
function serializeIntegrationMappingTeamsIntegrationTypeField(val) {
    return val;
}
function deserializeIntegrationMappingTeamsIntegrationTypeField(val) {
    if (val == 'teams') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingTeamsIntegrationTypeField",
    });
}
function serializeIntegrationMappingTeams(val) {
    const base = (0, integrationMappingBase_generated_js_2.serializeIntegrationMappingBase)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingTeams"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['integration_type']: val.integrationType == void 0
            ? val.integrationType
            : serializeIntegrationMappingTeamsIntegrationTypeField(val.integrationType),
        ['is_overridden_by_manual_mapping']: val.isOverriddenByManualMapping,
        ['partner_item']: (0, integrationMappingPartnerItemTeamsUnion_generated_js_1.serializeIntegrationMappingPartnerItemTeamsUnion)(val.partnerItem),
        ['box_item']: (0, folderReference_generated_js_1.serializeFolderReference)(val.boxItem),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    });
}
function deserializeIntegrationMappingTeams(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingTeams"',
        });
    }
    const integrationType = val.integration_type == void 0
        ? void 0
        : deserializeIntegrationMappingTeamsIntegrationTypeField(val.integration_type);
    if (!(val.is_overridden_by_manual_mapping == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_overridden_by_manual_mapping)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_overridden_by_manual_mapping" of type "IntegrationMappingTeams"',
        });
    }
    const isOverriddenByManualMapping = val.is_overridden_by_manual_mapping == void 0
        ? void 0
        : val.is_overridden_by_manual_mapping;
    if (val.partner_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "partner_item" of type "IntegrationMappingTeams" to be defined',
        });
    }
    const partnerItem = (0, integrationMappingPartnerItemTeamsUnion_generated_js_2.deserializeIntegrationMappingPartnerItemTeamsUnion)(val.partner_item);
    if (val.box_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "box_item" of type "IntegrationMappingTeams" to be defined',
        });
    }
    const boxItem = (0, folderReference_generated_js_2.deserializeFolderReference)(val.box_item);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "IntegrationMappingTeams"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "IntegrationMappingTeams"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingTeams" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingTeams"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingTeams" to be defined',
        });
    }
    const type = (0, integrationMappingBase_generated_js_1.deserializeIntegrationMappingBaseTypeField)(val.type);
    return {
        integrationType: integrationType,
        isOverriddenByManualMapping: isOverriddenByManualMapping,
        partnerItem: partnerItem,
        boxItem: boxItem,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=integrationMappingTeams.generated.js.map