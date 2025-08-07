"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldListContentIntegrationV2025R0 = void 0;
exports.serializeShieldListContentIntegrationV2025R0TypeField = serializeShieldListContentIntegrationV2025R0TypeField;
exports.deserializeShieldListContentIntegrationV2025R0TypeField = deserializeShieldListContentIntegrationV2025R0TypeField;
exports.serializeShieldListContentIntegrationV2025R0IntegrationsField = serializeShieldListContentIntegrationV2025R0IntegrationsField;
exports.deserializeShieldListContentIntegrationV2025R0IntegrationsField = deserializeShieldListContentIntegrationV2025R0IntegrationsField;
exports.serializeShieldListContentIntegrationV2025R0 = serializeShieldListContentIntegrationV2025R0;
exports.deserializeShieldListContentIntegrationV2025R0 = deserializeShieldListContentIntegrationV2025R0;
exports.serializeShieldListContentIntegrationV2025R0Input = serializeShieldListContentIntegrationV2025R0Input;
exports.deserializeShieldListContentIntegrationV2025R0Input = deserializeShieldListContentIntegrationV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
class ShieldListContentIntegrationV2025R0 {
    constructor(fields) {
        /**
         * The type of content in the shield list. */
        this.type = 'integration';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.integrations !== undefined) {
            this.integrations = fields.integrations;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.ShieldListContentIntegrationV2025R0 = ShieldListContentIntegrationV2025R0;
function serializeShieldListContentIntegrationV2025R0TypeField(val) {
    return val;
}
function deserializeShieldListContentIntegrationV2025R0TypeField(val) {
    if (val == 'integration') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldListContentIntegrationV2025R0TypeField",
    });
}
function serializeShieldListContentIntegrationV2025R0IntegrationsField(val) {
    return { ['id']: val.id };
}
function deserializeShieldListContentIntegrationV2025R0IntegrationsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentIntegrationV2025R0IntegrationsField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldListContentIntegrationV2025R0IntegrationsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        id: id,
    };
}
function serializeShieldListContentIntegrationV2025R0(val) {
    return {
        ['type']: serializeShieldListContentIntegrationV2025R0TypeField(val.type),
        ['integrations']: val.integrations.map(function (item) {
            return serializeShieldListContentIntegrationV2025R0IntegrationsField(item);
        }),
    };
}
function deserializeShieldListContentIntegrationV2025R0(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentIntegrationV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ShieldListContentIntegrationV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListContentIntegrationV2025R0TypeField(val.type);
    if (val.integrations == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "integrations" of type "ShieldListContentIntegrationV2025R0" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.integrations)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "integrations" of type "ShieldListContentIntegrationV2025R0"',
        });
    }
    const integrations = (0, json_js_2.sdIsList)(val.integrations)
        ? val.integrations.map(function (itm) {
            return deserializeShieldListContentIntegrationV2025R0IntegrationsField(itm);
        })
        : [];
    return {
        type: type,
        integrations: integrations,
    };
}
function serializeShieldListContentIntegrationV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListContentIntegrationV2025R0TypeField(val.type),
        ['integrations']: val.integrations.map(function (item) {
            return serializeShieldListContentIntegrationV2025R0IntegrationsField(item);
        }),
    };
}
function deserializeShieldListContentIntegrationV2025R0Input(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentIntegrationV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListContentIntegrationV2025R0TypeField(val.type);
    if (val.integrations == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "integrations" of type "ShieldListContentIntegrationV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.integrations)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "integrations" of type "ShieldListContentIntegrationV2025R0Input"',
        });
    }
    const integrations = (0, json_js_2.sdIsList)(val.integrations)
        ? val.integrations.map(function (itm) {
            return deserializeShieldListContentIntegrationV2025R0IntegrationsField(itm);
        })
        : [];
    return {
        type: type,
        integrations: integrations,
    };
}
//# sourceMappingURL=shieldListContentIntegrationV2025R0.generated.js.map