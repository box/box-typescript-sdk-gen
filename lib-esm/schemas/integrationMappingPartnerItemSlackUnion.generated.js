import { serializeIntegrationMappingPartnerItemSlack } from './integrationMappingPartnerItemSlack.generated.js';
import { deserializeIntegrationMappingPartnerItemSlack } from './integrationMappingPartnerItemSlack.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeIntegrationMappingPartnerItemSlackUnion(val) {
    if (val.type == 'channel') {
        return serializeIntegrationMappingPartnerItemSlack(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeIntegrationMappingPartnerItemSlackUnion(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemSlackUnion"',
        });
    }
    if (val.type == 'channel') {
        return deserializeIntegrationMappingPartnerItemSlack(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemSlackUnion",
    });
}
//# sourceMappingURL=integrationMappingPartnerItemSlackUnion.generated.js.map