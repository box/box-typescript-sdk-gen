"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDevicePinnersOrderByField = serializeDevicePinnersOrderByField;
exports.deserializeDevicePinnersOrderByField = deserializeDevicePinnersOrderByField;
exports.serializeDevicePinnersOrderDirectionField = serializeDevicePinnersOrderDirectionField;
exports.deserializeDevicePinnersOrderDirectionField = deserializeDevicePinnersOrderDirectionField;
exports.serializeDevicePinnersOrderField = serializeDevicePinnersOrderField;
exports.deserializeDevicePinnersOrderField = deserializeDevicePinnersOrderField;
exports.serializeDevicePinners = serializeDevicePinners;
exports.deserializeDevicePinners = deserializeDevicePinners;
const devicePinner_generated_js_1 = require("./devicePinner.generated.js");
const devicePinner_generated_js_2 = require("./devicePinner.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeDevicePinnersOrderByField(val) {
    return val;
}
function deserializeDevicePinnersOrderByField(val) {
    if (val == 'id') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DevicePinnersOrderByField",
    });
}
function serializeDevicePinnersOrderDirectionField(val) {
    return val;
}
function deserializeDevicePinnersOrderDirectionField(val) {
    if (val == 'asc') {
        return val;
    }
    if (val == 'desc') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DevicePinnersOrderDirectionField",
    });
}
function serializeDevicePinnersOrderField(val) {
    return {
        ['by']: val.by == void 0 ? val.by : serializeDevicePinnersOrderByField(val.by),
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeDevicePinnersOrderDirectionField(val.direction),
    };
}
function deserializeDevicePinnersOrderField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DevicePinnersOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : deserializeDevicePinnersOrderByField(val.by);
    const direction = val.direction == void 0
        ? void 0
        : deserializeDevicePinnersOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
function serializeDevicePinners(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, devicePinner_generated_js_1.serializeDevicePinner)(item);
            }),
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['order']: val.order == void 0
            ? val.order
            : val.order.map(function (item) {
                return serializeDevicePinnersOrderField(item);
            }),
    };
}
function deserializeDevicePinners(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "DevicePinners"' });
    }
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "DevicePinners"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, devicePinner_generated_js_2.deserializeDevicePinner)(itm);
            })
            : [];
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "DevicePinners"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_1.sdIsNumber)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "next_marker" of type "DevicePinners"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.order == void 0) && !(0, json_js_3.sdIsList)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "order" of type "DevicePinners"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.order)
            ? val.order.map(function (itm) {
                return deserializeDevicePinnersOrderField(itm);
            })
            : [];
    return {
        entries: entries,
        limit: limit,
        nextMarker: nextMarker,
        order: order,
    };
}
//# sourceMappingURL=devicePinners.generated.js.map