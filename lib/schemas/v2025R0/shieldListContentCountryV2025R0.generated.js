"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldListContentCountryV2025R0 = void 0;
exports.serializeShieldListContentCountryV2025R0TypeField = serializeShieldListContentCountryV2025R0TypeField;
exports.deserializeShieldListContentCountryV2025R0TypeField = deserializeShieldListContentCountryV2025R0TypeField;
exports.serializeShieldListContentCountryV2025R0 = serializeShieldListContentCountryV2025R0;
exports.deserializeShieldListContentCountryV2025R0 = deserializeShieldListContentCountryV2025R0;
exports.serializeShieldListContentCountryV2025R0Input = serializeShieldListContentCountryV2025R0Input;
exports.deserializeShieldListContentCountryV2025R0Input = deserializeShieldListContentCountryV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
class ShieldListContentCountryV2025R0 {
    constructor(fields) {
        /**
         * The type of content in the shield list. */
        this.type = 'country';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.countryCodes !== undefined) {
            this.countryCodes = fields.countryCodes;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.ShieldListContentCountryV2025R0 = ShieldListContentCountryV2025R0;
function serializeShieldListContentCountryV2025R0TypeField(val) {
    return val;
}
function deserializeShieldListContentCountryV2025R0TypeField(val) {
    if (val == 'country') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldListContentCountryV2025R0TypeField",
    });
}
function serializeShieldListContentCountryV2025R0(val) {
    return {
        ['type']: serializeShieldListContentCountryV2025R0TypeField(val.type),
        ['country_codes']: val.countryCodes.map(function (item) {
            return item;
        }),
    };
}
function deserializeShieldListContentCountryV2025R0(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentCountryV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ShieldListContentCountryV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListContentCountryV2025R0TypeField(val.type);
    if (val.country_codes == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "country_codes" of type "ShieldListContentCountryV2025R0" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.country_codes)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "country_codes" of type "ShieldListContentCountryV2025R0"',
        });
    }
    const countryCodes = (0, json_js_2.sdIsList)(val.country_codes)
        ? val.country_codes.map(function (itm) {
            if (!(0, json_js_1.sdIsString)(itm)) {
                throw new errors_js_1.BoxSdkError({
                    message: 'Expecting string for "ShieldListContentCountryV2025R0"',
                });
            }
            return itm;
        })
        : [];
    return {
        type: type,
        countryCodes: countryCodes,
    };
}
function serializeShieldListContentCountryV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListContentCountryV2025R0TypeField(val.type),
        ['country_codes']: val.countryCodes.map(function (item) {
            return item;
        }),
    };
}
function deserializeShieldListContentCountryV2025R0Input(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListContentCountryV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListContentCountryV2025R0TypeField(val.type);
    if (val.country_codes == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "country_codes" of type "ShieldListContentCountryV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.country_codes)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "country_codes" of type "ShieldListContentCountryV2025R0Input"',
        });
    }
    const countryCodes = (0, json_js_2.sdIsList)(val.country_codes)
        ? val.country_codes.map(function (itm) {
            if (!(0, json_js_1.sdIsString)(itm)) {
                throw new errors_js_1.BoxSdkError({
                    message: 'Expecting string for "ShieldListContentCountryV2025R0Input"',
                });
            }
            return itm;
        })
        : [];
    return {
        type: type,
        countryCodes: countryCodes,
    };
}
//# sourceMappingURL=shieldListContentCountryV2025R0.generated.js.map