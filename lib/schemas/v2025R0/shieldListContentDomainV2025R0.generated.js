"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldListContentDomainV2025R0 = void 0;
exports.serializeShieldListContentDomainV2025R0TypeField = serializeShieldListContentDomainV2025R0TypeField;
exports.deserializeShieldListContentDomainV2025R0TypeField = deserializeShieldListContentDomainV2025R0TypeField;
exports.serializeShieldListContentDomainV2025R0 = serializeShieldListContentDomainV2025R0;
exports.deserializeShieldListContentDomainV2025R0 = deserializeShieldListContentDomainV2025R0;
exports.serializeShieldListContentDomainV2025R0Input = serializeShieldListContentDomainV2025R0Input;
exports.deserializeShieldListContentDomainV2025R0Input = deserializeShieldListContentDomainV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
class ShieldListContentDomainV2025R0 {
    constructor(fields) {
        /**
         * The type of content in the shield list. */
        this.type = 'domain';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.domains !== undefined) {
            this.domains = fields.domains;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.ShieldListContentDomainV2025R0 = ShieldListContentDomainV2025R0;
function serializeShieldListContentDomainV2025R0TypeField(val) {
    return val;
}
function deserializeShieldListContentDomainV2025R0TypeField(val) {
    if (val == 'domain') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldListContentDomainV2025R0TypeField",
    });
}
function serializeShieldListContentDomainV2025R0(val) {
    return {
        ['type']: serializeShieldListContentDomainV2025R0TypeField(val.type),
        ['domains']: val.domains.map(function (item) {
            return item;
        }),
    };
}
function deserializeShieldListContentDomainV2025R0(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentDomainV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ShieldListContentDomainV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListContentDomainV2025R0TypeField(val.type);
    if (val.domains == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "domains" of type "ShieldListContentDomainV2025R0" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.domains)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "domains" of type "ShieldListContentDomainV2025R0"',
        });
    }
    const domains = (0, json_js_2.sdIsList)(val.domains)
        ? val.domains.map(function (itm) {
            if (!(0, json_js_1.sdIsString)(itm)) {
                throw new errors_js_1.BoxSdkError({
                    message: 'Expecting string for "ShieldListContentDomainV2025R0"',
                });
            }
            return itm;
        })
        : [];
    return {
        type: type,
        domains: domains,
    };
}
function serializeShieldListContentDomainV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListContentDomainV2025R0TypeField(val.type),
        ['domains']: val.domains.map(function (item) {
            return item;
        }),
    };
}
function deserializeShieldListContentDomainV2025R0Input(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentDomainV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListContentDomainV2025R0TypeField(val.type);
    if (val.domains == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "domains" of type "ShieldListContentDomainV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.domains)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "domains" of type "ShieldListContentDomainV2025R0Input"',
        });
    }
    const domains = (0, json_js_2.sdIsList)(val.domains)
        ? val.domains.map(function (itm) {
            if (!(0, json_js_1.sdIsString)(itm)) {
                throw new errors_js_1.BoxSdkError({
                    message: 'Expecting string for "ShieldListContentDomainV2025R0Input"',
                });
            }
            return itm;
        })
        : [];
    return {
        type: type,
        domains: domains,
    };
}
//# sourceMappingURL=shieldListContentDomainV2025R0.generated.js.map