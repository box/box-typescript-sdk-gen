import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class ShieldListContentDomainV2025R0 {
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
export function serializeShieldListContentDomainV2025R0TypeField(val) {
    return val;
}
export function deserializeShieldListContentDomainV2025R0TypeField(val) {
    if (val == 'domain') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldListContentDomainV2025R0TypeField",
    });
}
export function serializeShieldListContentDomainV2025R0(val) {
    return {
        ['type']: serializeShieldListContentDomainV2025R0TypeField(val.type),
        ['domains']: val.domains.map(function (item) {
            return item;
        }),
    };
}
export function deserializeShieldListContentDomainV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentDomainV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "ShieldListContentDomainV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListContentDomainV2025R0TypeField(val.type);
    if (val.domains == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "domains" of type "ShieldListContentDomainV2025R0" to be defined',
        });
    }
    if (!sdIsList(val.domains)) {
        throw new BoxSdkError({
            message: 'Expecting array for "domains" of type "ShieldListContentDomainV2025R0"',
        });
    }
    const domains = sdIsList(val.domains)
        ? val.domains.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
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
export function serializeShieldListContentDomainV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListContentDomainV2025R0TypeField(val.type),
        ['domains']: val.domains.map(function (item) {
            return item;
        }),
    };
}
export function deserializeShieldListContentDomainV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentDomainV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListContentDomainV2025R0TypeField(val.type);
    if (val.domains == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "domains" of type "ShieldListContentDomainV2025R0Input" to be defined',
        });
    }
    if (!sdIsList(val.domains)) {
        throw new BoxSdkError({
            message: 'Expecting array for "domains" of type "ShieldListContentDomainV2025R0Input"',
        });
    }
    const domains = sdIsList(val.domains)
        ? val.domains.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
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