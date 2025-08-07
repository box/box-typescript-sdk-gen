import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class ShieldListContentIpV2025R0 {
    constructor(fields) {
        /**
         * The type of content in the shield list. */
        this.type = 'ip';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.ipAddresses !== undefined) {
            this.ipAddresses = fields.ipAddresses;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeShieldListContentIpV2025R0TypeField(val) {
    return val;
}
export function deserializeShieldListContentIpV2025R0TypeField(val) {
    if (val == 'ip') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldListContentIpV2025R0TypeField",
    });
}
export function serializeShieldListContentIpV2025R0(val) {
    return {
        ['type']: serializeShieldListContentIpV2025R0TypeField(val.type),
        ['ip_addresses']: val.ipAddresses.map(function (item) {
            return item;
        }),
    };
}
export function deserializeShieldListContentIpV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentIpV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "ShieldListContentIpV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListContentIpV2025R0TypeField(val.type);
    if (val.ip_addresses == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "ip_addresses" of type "ShieldListContentIpV2025R0" to be defined',
        });
    }
    if (!sdIsList(val.ip_addresses)) {
        throw new BoxSdkError({
            message: 'Expecting array for "ip_addresses" of type "ShieldListContentIpV2025R0"',
        });
    }
    const ipAddresses = sdIsList(val.ip_addresses)
        ? val.ip_addresses.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
                    message: 'Expecting string for "ShieldListContentIpV2025R0"',
                });
            }
            return itm;
        })
        : [];
    return {
        type: type,
        ipAddresses: ipAddresses,
    };
}
export function serializeShieldListContentIpV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListContentIpV2025R0TypeField(val.type),
        ['ip_addresses']: val.ipAddresses.map(function (item) {
            return item;
        }),
    };
}
export function deserializeShieldListContentIpV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentIpV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListContentIpV2025R0TypeField(val.type);
    if (val.ip_addresses == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "ip_addresses" of type "ShieldListContentIpV2025R0Input" to be defined',
        });
    }
    if (!sdIsList(val.ip_addresses)) {
        throw new BoxSdkError({
            message: 'Expecting array for "ip_addresses" of type "ShieldListContentIpV2025R0Input"',
        });
    }
    const ipAddresses = sdIsList(val.ip_addresses)
        ? val.ip_addresses.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
                    message: 'Expecting string for "ShieldListContentIpV2025R0Input"',
                });
            }
            return itm;
        })
        : [];
    return {
        type: type,
        ipAddresses: ipAddresses,
    };
}
//# sourceMappingURL=shieldListContentIpV2025R0.generated.js.map