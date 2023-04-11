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
exports.EventsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
class EventsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getEvents(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/events"), { method: "GET", params: { ["stream_type"]: options.streamType, ["stream_position"]: options.streamPosition, ["limit"]: options.limit, ["event_type"]: options.eventType, ["created_after"]: options.createdAfter, ["created_before"]: options.createdBefore }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeEvents)(deserializeJSON(response.text));
        });
    }
    getEventsWithLongPolling() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/events"), { method: "OPTIONS", auth: this.auth });
            return (0, schemas_generated_js_2.deserializeRealtimeServers)(deserializeJSON(response.text));
        });
    }
}
exports.EventsManager = EventsManager;
//# sourceMappingURL=events.generated.js.map