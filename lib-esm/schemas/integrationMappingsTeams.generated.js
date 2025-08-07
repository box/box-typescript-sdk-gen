import { serializeIntegrationMappingTeams } from './integrationMappingTeams.generated.js';
import { deserializeIntegrationMappingTeams } from './integrationMappingTeams.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeIntegrationMappingsTeams(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeIntegrationMappingTeams(item);
            }),
    };
}
export function deserializeIntegrationMappingsTeams(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingsTeams"',
        });
    }
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "IntegrationMappingsTeams"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeIntegrationMappingTeams(itm);
            })
            : [];
    return { entries: entries };
}
//# sourceMappingURL=integrationMappingsTeams.generated.js.map