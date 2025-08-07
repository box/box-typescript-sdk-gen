import { serializeDevicePinner } from './devicePinner.generated.js';
import { deserializeDevicePinner } from './devicePinner.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeDevicePinnersOrderByField(val) {
    return val;
}
export function deserializeDevicePinnersOrderByField(val) {
    if (val == 'id') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize DevicePinnersOrderByField",
    });
}
export function serializeDevicePinnersOrderDirectionField(val) {
    return val;
}
export function deserializeDevicePinnersOrderDirectionField(val) {
    if (val == 'asc') {
        return val;
    }
    if (val == 'desc') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize DevicePinnersOrderDirectionField",
    });
}
export function serializeDevicePinnersOrderField(val) {
    return {
        ['by']: val.by == void 0 ? val.by : serializeDevicePinnersOrderByField(val.by),
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeDevicePinnersOrderDirectionField(val.direction),
    };
}
export function deserializeDevicePinnersOrderField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DevicePinnersOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : deserializeDevicePinnersOrderByField(val.by);
    const direction = val.direction == void 0
        ? void 0
        : deserializeDevicePinnersOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
export function serializeDevicePinners(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeDevicePinner(item);
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
export function deserializeDevicePinners(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "DevicePinners"' });
    }
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "DevicePinners"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeDevicePinner(itm);
            })
            : [];
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "DevicePinners"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !sdIsNumber(val.next_marker)) {
        throw new BoxSdkError({
            message: 'Expecting number for "next_marker" of type "DevicePinners"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.order == void 0) && !sdIsList(val.order)) {
        throw new BoxSdkError({
            message: 'Expecting array for "order" of type "DevicePinners"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : sdIsList(val.order)
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