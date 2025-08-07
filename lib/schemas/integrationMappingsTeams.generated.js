"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeIntegrationMappingsTeams = serializeIntegrationMappingsTeams;
exports.deserializeIntegrationMappingsTeams = deserializeIntegrationMappingsTeams;
const integrationMappingTeams_generated_js_1 = require("./integrationMappingTeams.generated.js");
const integrationMappingTeams_generated_js_2 = require("./integrationMappingTeams.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeIntegrationMappingsTeams(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, integrationMappingTeams_generated_js_1.serializeIntegrationMappingTeams)(item);
            }),
    };
}
function deserializeIntegrationMappingsTeams(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingsTeams"',
        });
    }
    if (!(val.entries == void 0) && !(0, json_js_1.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "IntegrationMappingsTeams"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_1.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, integrationMappingTeams_generated_js_2.deserializeIntegrationMappingTeams)(itm);
            })
            : [];
    return { entries: entries };
}
//# sourceMappingURL=integrationMappingsTeams.generated.js.map