"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldListContentV2025R0 = serializeShieldListContentV2025R0;
exports.deserializeShieldListContentV2025R0 = deserializeShieldListContentV2025R0;
const shieldListContentCountryV2025R0_generated_js_1 = require("./shieldListContentCountryV2025R0.generated.js");
const shieldListContentCountryV2025R0_generated_js_2 = require("./shieldListContentCountryV2025R0.generated.js");
const shieldListContentDomainV2025R0_generated_js_1 = require("./shieldListContentDomainV2025R0.generated.js");
const shieldListContentDomainV2025R0_generated_js_2 = require("./shieldListContentDomainV2025R0.generated.js");
const shieldListContentEmailV2025R0_generated_js_1 = require("./shieldListContentEmailV2025R0.generated.js");
const shieldListContentEmailV2025R0_generated_js_2 = require("./shieldListContentEmailV2025R0.generated.js");
const shieldListContentIpV2025R0_generated_js_1 = require("./shieldListContentIpV2025R0.generated.js");
const shieldListContentIpV2025R0_generated_js_2 = require("./shieldListContentIpV2025R0.generated.js");
const shieldListContentIntegrationV2025R0_generated_js_1 = require("./shieldListContentIntegrationV2025R0.generated.js");
const shieldListContentIntegrationV2025R0_generated_js_2 = require("./shieldListContentIntegrationV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
function serializeShieldListContentV2025R0(val) {
    if (val.type == 'country') {
        return (0, shieldListContentCountryV2025R0_generated_js_1.serializeShieldListContentCountryV2025R0)(val);
    }
    if (val.type == 'domain') {
        return (0, shieldListContentDomainV2025R0_generated_js_1.serializeShieldListContentDomainV2025R0)(val);
    }
    if (val.type == 'email') {
        return (0, shieldListContentEmailV2025R0_generated_js_1.serializeShieldListContentEmailV2025R0)(val);
    }
    if (val.type == 'ip') {
        return (0, shieldListContentIpV2025R0_generated_js_1.serializeShieldListContentIpV2025R0)(val);
    }
    if (val.type == 'integration') {
        return (0, shieldListContentIntegrationV2025R0_generated_js_1.serializeShieldListContentIntegrationV2025R0)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeShieldListContentV2025R0(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentV2025R0"',
        });
    }
    if (val.type == 'country') {
        return (0, shieldListContentCountryV2025R0_generated_js_2.deserializeShieldListContentCountryV2025R0)(val);
    }
    if (val.type == 'domain') {
        return (0, shieldListContentDomainV2025R0_generated_js_2.deserializeShieldListContentDomainV2025R0)(val);
    }
    if (val.type == 'email') {
        return (0, shieldListContentEmailV2025R0_generated_js_2.deserializeShieldListContentEmailV2025R0)(val);
    }
    if (val.type == 'ip') {
        return (0, shieldListContentIpV2025R0_generated_js_2.deserializeShieldListContentIpV2025R0)(val);
    }
    if (val.type == 'integration') {
        return (0, shieldListContentIntegrationV2025R0_generated_js_2.deserializeShieldListContentIntegrationV2025R0)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldListContentV2025R0",
    });
}
//# sourceMappingURL=shieldListContentV2025R0.generated.js.map