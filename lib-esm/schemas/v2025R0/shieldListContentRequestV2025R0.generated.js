import { serializeShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated.js';
import { deserializeShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated.js';
import { serializeShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated.js';
import { deserializeShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated.js';
import { serializeShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated.js';
import { deserializeShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated.js';
import { serializeShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated.js';
import { deserializeShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeShieldListContentRequestV2025R0(val) {
    if (val.type == 'country') {
        return serializeShieldListContentCountryV2025R0(val);
    }
    if (val.type == 'domain') {
        return serializeShieldListContentDomainV2025R0(val);
    }
    if (val.type == 'email') {
        return serializeShieldListContentEmailV2025R0(val);
    }
    if (val.type == 'ip') {
        return serializeShieldListContentIpV2025R0(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeShieldListContentRequestV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentRequestV2025R0"',
        });
    }
    if (val.type == 'country') {
        return deserializeShieldListContentCountryV2025R0(val);
    }
    if (val.type == 'domain') {
        return deserializeShieldListContentDomainV2025R0(val);
    }
    if (val.type == 'email') {
        return deserializeShieldListContentEmailV2025R0(val);
    }
    if (val.type == 'ip') {
        return deserializeShieldListContentIpV2025R0(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldListContentRequestV2025R0",
    });
}
//# sourceMappingURL=shieldListContentRequestV2025R0.generated.js.map