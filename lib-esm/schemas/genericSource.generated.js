import { sdIsMap } from '../serialization/json.js';
export function serializeGenericSource(val) {
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [
        k,
        (function (v) {
            return v;
        })(v),
    ]));
}
export function deserializeGenericSource(val) {
    return sdIsMap(val)
        ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ]))
        : {};
}
//# sourceMappingURL=genericSource.generated.js.map