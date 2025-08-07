import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class ShieldListContentCountryV2025R0 {
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
export function serializeShieldListContentCountryV2025R0TypeField(val) {
    return val;
}
export function deserializeShieldListContentCountryV2025R0TypeField(val) {
    if (val == 'country') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldListContentCountryV2025R0TypeField",
    });
}
export function serializeShieldListContentCountryV2025R0(val) {
    return {
        ['type']: serializeShieldListContentCountryV2025R0TypeField(val.type),
        ['country_codes']: val.countryCodes.map(function (item) {
            return item;
        }),
    };
}
export function deserializeShieldListContentCountryV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentCountryV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "ShieldListContentCountryV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListContentCountryV2025R0TypeField(val.type);
    if (val.country_codes == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "country_codes" of type "ShieldListContentCountryV2025R0" to be defined',
        });
    }
    if (!sdIsList(val.country_codes)) {
        throw new BoxSdkError({
            message: 'Expecting array for "country_codes" of type "ShieldListContentCountryV2025R0"',
        });
    }
    const countryCodes = sdIsList(val.country_codes)
        ? val.country_codes.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
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
export function serializeShieldListContentCountryV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListContentCountryV2025R0TypeField(val.type),
        ['country_codes']: val.countryCodes.map(function (item) {
            return item;
        }),
    };
}
export function deserializeShieldListContentCountryV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentCountryV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListContentCountryV2025R0TypeField(val.type);
    if (val.country_codes == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "country_codes" of type "ShieldListContentCountryV2025R0Input" to be defined',
        });
    }
    if (!sdIsList(val.country_codes)) {
        throw new BoxSdkError({
            message: 'Expecting array for "country_codes" of type "ShieldListContentCountryV2025R0Input"',
        });
    }
    const countryCodes = sdIsList(val.country_codes)
        ? val.country_codes.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
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