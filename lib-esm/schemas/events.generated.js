import { serializeEvent } from './event.generated.js';
import { deserializeEvent } from './event.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeEventsNextStreamPositionField(val) {
    return val;
}
export function deserializeEventsNextStreamPositionField(val) {
    if (sdIsString(val)) {
        return val;
    }
    if (sdIsNumber(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize EventsNextStreamPositionField",
    });
}
export function serializeEvents(val) {
    return {
        ['chunk_size']: val.chunkSize,
        ['next_stream_position']: val.nextStreamPosition == void 0
            ? val.nextStreamPosition
            : serializeEventsNextStreamPositionField(val.nextStreamPosition),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeEvent(item);
            }),
    };
}
export function deserializeEvents(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Events"' });
    }
    if (!(val.chunk_size == void 0) && !sdIsNumber(val.chunk_size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "chunk_size" of type "Events"',
        });
    }
    const chunkSize = val.chunk_size == void 0 ? void 0 : val.chunk_size;
    const nextStreamPosition = val.next_stream_position == void 0
        ? void 0
        : deserializeEventsNextStreamPositionField(val.next_stream_position);
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "Events"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeEvent(itm);
            })
            : [];
    return {
        chunkSize: chunkSize,
        nextStreamPosition: nextStreamPosition,
        entries: entries,
    };
}
//# sourceMappingURL=events.generated.js.map