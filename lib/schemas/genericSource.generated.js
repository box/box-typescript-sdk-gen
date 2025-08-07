"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeGenericSource = serializeGenericSource;
exports.deserializeGenericSource = deserializeGenericSource;
const json_js_1 = require("../serialization/json.js");
function serializeGenericSource(val) {
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [
        k,
        (function (v) {
            return v;
        })(v),
    ]));
}
function deserializeGenericSource(val) {
    return (0, json_js_1.sdIsMap)(val)
        ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ]))
        : {};
}
//# sourceMappingURL=genericSource.generated.js.map