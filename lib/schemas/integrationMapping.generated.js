"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationMapping = void 0;
exports.serializeIntegrationMappingIntegrationTypeField = serializeIntegrationMappingIntegrationTypeField;
exports.deserializeIntegrationMappingIntegrationTypeField = deserializeIntegrationMappingIntegrationTypeField;
exports.serializeIntegrationMapping = serializeIntegrationMapping;
exports.deserializeIntegrationMapping = deserializeIntegrationMapping;
const integrationMappingBase_generated_js_1 = require("./integrationMappingBase.generated.js");
const integrationMappingBase_generated_js_2 = require("./integrationMappingBase.generated.js");
const integrationMappingSlackOptions_generated_js_1 = require("./integrationMappingSlackOptions.generated.js");
const integrationMappingSlackOptions_generated_js_2 = require("./integrationMappingSlackOptions.generated.js");
const userIntegrationMappings_generated_js_1 = require("./userIntegrationMappings.generated.js");
const userIntegrationMappings_generated_js_2 = require("./userIntegrationMappings.generated.js");
const integrationMappingPartnerItemSlackUnion_generated_js_1 = require("./integrationMappingPartnerItemSlackUnion.generated.js");
const integrationMappingPartnerItemSlackUnion_generated_js_2 = require("./integrationMappingPartnerItemSlackUnion.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const integrationMappingBase_generated_js_3 = require("./integrationMappingBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class IntegrationMapping extends integrationMappingBase_generated_js_3.IntegrationMappingBase {
    constructor(fields) {
        super(fields);
        if (fields.integrationType !== undefined) {
            this.integrationType = fields.integrationType;
        }
        if (fields.isManuallyCreated !== undefined) {
            this.isManuallyCreated = fields.isManuallyCreated;
        }
        if (fields.options !== undefined) {
            this.options = fields.options;
        }
        if (fields.createdBy !== undefined) {
            this.createdBy = fields.createdBy;
        }
        if (fields.modifiedBy !== undefined) {
            this.modifiedBy = fields.modifiedBy;
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
exports.IntegrationMapping = IntegrationMapping;
function serializeIntegrationMappingIntegrationTypeField(val) {
    return val;
}
function deserializeIntegrationMappingIntegrationTypeField(val) {
    if (val == 'slack') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingIntegrationTypeField",
    });
}
function serializeIntegrationMapping(val) {
    const base = (0, integrationMappingBase_generated_js_2.serializeIntegrationMappingBase)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMapping"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['integration_type']: val.integrationType == void 0
            ? val.integrationType
            : serializeIntegrationMappingIntegrationTypeField(val.integrationType),
        ['is_manually_created']: val.isManuallyCreated,
        ['options']: val.options == void 0
            ? val.options
            : (0, integrationMappingSlackOptions_generated_js_1.serializeIntegrationMappingSlackOptions)(val.options),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userIntegrationMappings_generated_js_1.serializeUserIntegrationMappings)(val.createdBy),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : (0, userIntegrationMappings_generated_js_1.serializeUserIntegrationMappings)(val.modifiedBy),
        ['partner_item']: (0, integrationMappingPartnerItemSlackUnion_generated_js_1.serializeIntegrationMappingPartnerItemSlackUnion)(val.partnerItem),
        ['box_item']: (0, folderMini_generated_js_1.serializeFolderMini)(val.boxItem),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    });
}
function deserializeIntegrationMapping(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMapping"',
        });
    }
    const integrationType = val.integration_type == void 0
        ? void 0
        : deserializeIntegrationMappingIntegrationTypeField(val.integration_type);
    if (!(val.is_manually_created == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_manually_created)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_manually_created" of type "IntegrationMapping"',
        });
    }
    const isManuallyCreated = val.is_manually_created == void 0 ? void 0 : val.is_manually_created;
    const options = val.options == void 0
        ? void 0
        : (0, integrationMappingSlackOptions_generated_js_2.deserializeIntegrationMappingSlackOptions)(val.options);
    const createdBy = val.created_by == void 0
        ? void 0
        : (0, userIntegrationMappings_generated_js_2.deserializeUserIntegrationMappings)(val.created_by);
    const modifiedBy = val.modified_by == void 0
        ? void 0
        : (0, userIntegrationMappings_generated_js_2.deserializeUserIntegrationMappings)(val.modified_by);
    if (val.partner_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "partner_item" of type "IntegrationMapping" to be defined',
        });
    }
    const partnerItem = (0, integrationMappingPartnerItemSlackUnion_generated_js_2.deserializeIntegrationMappingPartnerItemSlackUnion)(val.partner_item);
    if (val.box_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "box_item" of type "IntegrationMapping" to be defined',
        });
    }
    const boxItem = (0, folderMini_generated_js_2.deserializeFolderMini)(val.box_item);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "IntegrationMapping"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "IntegrationMapping"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMapping" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMapping"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMapping" to be defined',
        });
    }
    const type = (0, integrationMappingBase_generated_js_1.deserializeIntegrationMappingBaseTypeField)(val.type);
    return {
        integrationType: integrationType,
        isManuallyCreated: isManuallyCreated,
        options: options,
        createdBy: createdBy,
        modifiedBy: modifiedBy,
        partnerItem: partnerItem,
        boxItem: boxItem,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=integrationMapping.generated.js.map