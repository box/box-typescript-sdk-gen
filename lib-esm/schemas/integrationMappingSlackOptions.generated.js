import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeIntegrationMappingSlackOptions(val) {
    return { ['is_access_management_disabled']: val.isAccessManagementDisabled };
}
export function deserializeIntegrationMappingSlackOptions(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingSlackOptions"',
        });
    }
    if (!(val.is_access_management_disabled == void 0) &&
        !sdIsBoolean(val.is_access_management_disabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_access_management_disabled" of type "IntegrationMappingSlackOptions"',
        });
    }
    const isAccessManagementDisabled = val.is_access_management_disabled == void 0
        ? void 0
        : val.is_access_management_disabled;
    return {
        isAccessManagementDisabled: isAccessManagementDisabled,
    };
}
//# sourceMappingURL=integrationMappingSlackOptions.generated.js.map