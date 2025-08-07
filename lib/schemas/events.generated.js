"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeEventsNextStreamPositionField = serializeEventsNextStreamPositionField;
exports.deserializeEventsNextStreamPositionField = deserializeEventsNextStreamPositionField;
exports.serializeEvents = serializeEvents;
exports.deserializeEvents = deserializeEvents;
const event_generated_js_1 = require("./event.generated.js");
const event_generated_js_2 = require("./event.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeEventsNextStreamPositionField(val) {
    return val;
}
function deserializeEventsNextStreamPositionField(val) {
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    if ((0, json_js_1.sdIsNumber)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize EventsNextStreamPositionField",
    });
}
function serializeEvents(val) {
    return {
        ['chunk_size']: val.chunkSize,
        ['next_stream_position']: val.nextStreamPosition == void 0
            ? val.nextStreamPosition
            : serializeEventsNextStreamPositionField(val.nextStreamPosition),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, event_generated_js_1.serializeEvent)(item);
            }),
    };
}
function deserializeEvents(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Events"' });
    }
    if (!(val.chunk_size == void 0) && !(0, json_js_1.sdIsNumber)(val.chunk_size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "chunk_size" of type "Events"',
        });
    }
    const chunkSize = val.chunk_size == void 0 ? void 0 : val.chunk_size;
    const nextStreamPosition = val.next_stream_position == void 0
        ? void 0
        : deserializeEventsNextStreamPositionField(val.next_stream_position);
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "Events"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, event_generated_js_2.deserializeEvent)(itm);
            })
            : [];
    return {
        chunkSize: chunkSize,
        nextStreamPosition: nextStreamPosition,
        entries: entries,
    };
}
//# sourceMappingURL=events.generated.js.map