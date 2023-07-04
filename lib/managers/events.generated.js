"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newDeserializeGetEventsQueryParamsArg = exports.newSerializeGetEventsQueryParamsArg = exports.newDeserializeGetEventsQueryParamsArgStreamTypeField = exports.newSerializeGetEventsQueryParamsArgStreamTypeField = exports.EventsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class EventsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getEvents(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/events"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeEvents)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getEventsWithLongPolling() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/events"), { method: "OPTIONS", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeRealtimeServers)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.EventsManager = EventsManager;
function newSerializeGetEventsQueryParamsArgStreamTypeField(val) {
    return val;
}
exports.newSerializeGetEventsQueryParamsArgStreamTypeField = newSerializeGetEventsQueryParamsArgStreamTypeField;
function newDeserializeGetEventsQueryParamsArgStreamTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetEventsQueryParamsArgStreamTypeField\"";
    }
    if (val == "all") {
        return "all";
    }
    if (val == "changes") {
        return "changes";
    }
    if (val == "sync") {
        return "sync";
    }
    if (val == "admin_logs") {
        return "admin_logs";
    }
    if (val == "admin_logs_streaming") {
        return "admin_logs_streaming";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeGetEventsQueryParamsArgStreamTypeField = newDeserializeGetEventsQueryParamsArgStreamTypeField;
function newSerializeGetEventsQueryParamsArg(val) {
    return { ["streamType"]: val.streamType == void 0 ? void 0 : newSerializeGetEventsQueryParamsArgStreamTypeField(val.streamType), ["streamPosition"]: val.streamPosition, ["limit"]: val.limit, ["eventType"]: val.eventType, ["createdAfter"]: val.createdAfter, ["createdBefore"]: val.createdBefore };
}
exports.newSerializeGetEventsQueryParamsArg = newSerializeGetEventsQueryParamsArg;
function newDeserializeGetEventsQueryParamsArg(val) {
    const streamType = val.streamType == void 0 ? void 0 : newDeserializeGetEventsQueryParamsArgStreamTypeField(val.streamType);
    const streamPosition = (0, json_js_2.isJson)(val.streamPosition, "string") ? val.streamPosition : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const eventType = (0, json_js_2.isJson)(val.eventType, "string") ? val.eventType : void 0;
    const createdAfter = (0, json_js_2.isJson)(val.createdAfter, "string") ? val.createdAfter : void 0;
    const createdBefore = (0, json_js_2.isJson)(val.createdBefore, "string") ? val.createdBefore : void 0;
    return { streamType: streamType, streamPosition: streamPosition, limit: limit, eventType: eventType, createdAfter: createdAfter, createdBefore: createdBefore };
}
exports.newDeserializeGetEventsQueryParamsArg = newDeserializeGetEventsQueryParamsArg;
//# sourceMappingURL=events.generated.js.map