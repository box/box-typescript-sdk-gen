import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class ShieldListContentEmailV2025R0 {
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
export function serializeShieldListContentEmailV2025R0TypeField(val) {
    return val;
}
export function deserializeShieldListContentEmailV2025R0TypeField(val) {
    if (val == 'email') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldListContentEmailV2025R0TypeField",
    });
}
export function serializeShieldListContentEmailV2025R0(val) {
    return {
        ['type']: serializeShieldListContentEmailV2025R0TypeField(val.type),
        ['email_addresses']: val.emailAddresses.map(function (item) {
            return item;
        }),
    };
}
export function deserializeShieldListContentEmailV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentEmailV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "ShieldListContentEmailV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListContentEmailV2025R0TypeField(val.type);
    if (val.email_addresses == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "email_addresses" of type "ShieldListContentEmailV2025R0" to be defined',
        });
    }
    if (!sdIsList(val.email_addresses)) {
        throw new BoxSdkError({
            message: 'Expecting array for "email_addresses" of type "ShieldListContentEmailV2025R0"',
        });
    }
    const emailAddresses = sdIsList(val.email_addresses)
        ? val.email_addresses.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
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
export function serializeShieldListContentEmailV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListContentEmailV2025R0TypeField(val.type),
        ['email_addresses']: val.emailAddresses.map(function (item) {
            return item;
        }),
    };
}
export function deserializeShieldListContentEmailV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentEmailV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListContentEmailV2025R0TypeField(val.type);
    if (val.email_addresses == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "email_addresses" of type "ShieldListContentEmailV2025R0Input" to be defined',
        });
    }
    if (!sdIsList(val.email_addresses)) {
        throw new BoxSdkError({
            message: 'Expecting array for "email_addresses" of type "ShieldListContentEmailV2025R0Input"',
        });
    }
    const emailAddresses = sdIsList(val.email_addresses)
        ? val.email_addresses.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
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