"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingSlackOptions = serializeIntegrationMappingSlackOptions;
exports.deserializeIntegrationMappingSlackOptions = deserializeIntegrationMappingSlackOptions;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeIntegrationMappingSlackOptions(val) {
    return { ['is_access_management_disabled']: val.isAccessManagementDisabled };
}
function deserializeIntegrationMappingSlackOptions(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingSlackOptions"',
        });
    }
    if (!(val.is_access_management_disabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_access_management_disabled)) {
        throw new errors_js_1.BoxSdkError({
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