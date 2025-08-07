import { serializeIntegrationMappingPartnerItemTeams } from './integrationMappingPartnerItemTeams.generated.js';
import { deserializeIntegrationMappingPartnerItemTeams } from './integrationMappingPartnerItemTeams.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeIntegrationMappingPartnerItemTeamsUnion(val) {
    if (val.type == 'channel') {
        return serializeIntegrationMappingPartnerItemTeams(val);
    }
    if (val.type == 'team') {
        return serializeIntegrationMappingPartnerItemTeams(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeIntegrationMappingPartnerItemTeamsUnion(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemTeamsUnion"',
        });
    }
    if (val.type == 'channel') {
        return deserializeIntegrationMappingPartnerItemTeams(val);
    }
    if (val.type == 'team') {
        return deserializeIntegrationMappingPartnerItemTeams(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemTeamsUnion",
    });
}
//# sourceMappingURL=integrationMappingPartnerItemTeamsUnion.generated.js.map