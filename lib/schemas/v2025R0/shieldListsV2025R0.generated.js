"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldListsV2025R0 = serializeShieldListsV2025R0;
exports.deserializeShieldListsV2025R0 = deserializeShieldListsV2025R0;
const shieldListMiniV2025R0_generated_js_1 = require("./shieldListMiniV2025R0.generated.js");
const shieldListMiniV2025R0_generated_js_2 = require("./shieldListMiniV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeShieldListsV2025R0(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, shieldListMiniV2025R0_generated_js_1.serializeShieldListMiniV2025R0)(item);
            }),
    };
}
function deserializeShieldListsV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListsV2025R0"',
        });
    }
    if (!(val.entries == void 0) && !(0, json_js_1.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "ShieldListsV2025R0"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_1.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, shieldListMiniV2025R0_generated_js_2.deserializeShieldListMiniV2025R0)(itm);
            })
            : [];
    return { entries: entries };
}
//# sourceMappingURL=shieldListsV2025R0.generated.js.map