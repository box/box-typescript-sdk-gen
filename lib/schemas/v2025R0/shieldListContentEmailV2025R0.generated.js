"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldListContentEmailV2025R0 = void 0;
exports.serializeShieldListContentEmailV2025R0TypeField = serializeShieldListContentEmailV2025R0TypeField;
exports.deserializeShieldListContentEmailV2025R0TypeField = deserializeShieldListContentEmailV2025R0TypeField;
exports.serializeShieldListContentEmailV2025R0 = serializeShieldListContentEmailV2025R0;
exports.deserializeShieldListContentEmailV2025R0 = deserializeShieldListContentEmailV2025R0;
exports.serializeShieldListContentEmailV2025R0Input = serializeShieldListContentEmailV2025R0Input;
exports.deserializeShieldListContentEmailV2025R0Input = deserializeShieldListContentEmailV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
class ShieldListContentEmailV2025R0 {
    constructor(fields) {
        /**
         * The type of content in the shield list. */
        this.type = 'email';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.emailAddresses !== undefined) {
            this.emailAddresses = fields.emailAddresses;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.ShieldListContentEmailV2025R0 = ShieldListContentEmailV2025R0;
function serializeShieldListContentEmailV2025R0TypeField(val) {
    return val;
}
function deserializeShieldListContentEmailV2025R0TypeField(val) {
    if (val == 'email') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldListContentEmailV2025R0TypeField",
    });
}
function serializeShieldListContentEmailV2025R0(val) {
    return {
        ['type']: serializeShieldListContentEmailV2025R0TypeField(val.type),
        ['email_addresses']: val.emailAddresses.map(function (item) {
            return item;
        }),
    };
}
function deserializeShieldListContentEmailV2025R0(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentEmailV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ShieldListContentEmailV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListContentEmailV2025R0TypeField(val.type);
    if (val.email_addresses == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "email_addresses" of type "ShieldListContentEmailV2025R0" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.email_addresses)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "email_addresses" of type "ShieldListContentEmailV2025R0"',
        });
    }
    const emailAddresses = (0, json_js_2.sdIsList)(val.email_addresses)
        ? val.email_addresses.map(function (itm) {
            if (!(0, json_js_1.sdIsString)(itm)) {
                throw new errors_js_1.BoxSdkError({
                    message: 'Expecting string for "ShieldListContentEmailV2025R0"',
                });
            }
            return itm;
        })
        : [];
    return {
        type: type,
        emailAddresses: emailAddresses,
    };
}
function serializeShieldListContentEmailV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListContentEmailV2025R0TypeField(val.type),
        ['email_addresses']: val.emailAddresses.map(function (item) {
            return item;
        }),
    };
}
function deserializeShieldListContentEmailV2025R0Input(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentEmailV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListContentEmailV2025R0TypeField(val.type);
    if (val.email_addresses == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "email_addresses" of type "ShieldListContentEmailV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.email_addresses)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "email_addresses" of type "ShieldListContentEmailV2025R0Input"',
        });
    }
    const emailAddresses = (0, json_js_2.sdIsList)(val.email_addresses)
        ? val.email_addresses.map(function (itm) {
            if (!(0, json_js_1.sdIsString)(itm)) {
                throw new errors_js_1.BoxSdkError({
                    message: 'Expecting string for "ShieldListContentEmailV2025R0Input"',
                });
            }
            return itm;
        })
        : [];
    return {
        type: type,
        emailAddresses: emailAddresses,
    };
}
//# sourceMappingURL=shieldListContentEmailV2025R0.generated.js.map