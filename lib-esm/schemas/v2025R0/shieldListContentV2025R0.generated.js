import { serializeShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated.js';
import { deserializeShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated.js';
import { serializeShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated.js';
import { deserializeShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated.js';
import { serializeShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated.js';
import { deserializeShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated.js';
import { serializeShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated.js';
import { deserializeShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated.js';
import { serializeShieldListContentIntegrationV2025R0 } from './shieldListContentIntegrationV2025R0.generated.js';
import { deserializeShieldListContentIntegrationV2025R0 } from './shieldListContentIntegrationV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeShieldListContentV2025R0(val) {
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
    if (val.type == 'integration') {
        return serializeShieldListContentIntegrationV2025R0(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeShieldListContentV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListContentV2025R0"',
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
    if (val.type == 'integration') {
        return deserializeShieldListContentIntegrationV2025R0(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldListContentV2025R0",
    });
}
//# sourceMappingURL=shieldListContentV2025R0.generated.js.map