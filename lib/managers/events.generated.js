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
exports.EventsManager = exports.GetEventsWithLongPollingHeadersArg = exports.GetEventsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class GetEventsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetEventsHeadersArg = GetEventsHeadersArg;
class GetEventsWithLongPollingHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetEventsWithLongPollingHeadersArg = GetEventsWithLongPollingHeadersArg;
class EventsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getEvents(queryParams = {}, headers = new GetEventsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["stream_type"]: (0, utils_js_2.toString)(queryParams.streamType), ["stream_position"]: (0, utils_js_2.toString)(queryParams.streamPosition), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["event_type"]: (0, utils_js_2.toString)(queryParams.eventType), ["created_after"]: (0, utils_js_2.toString)(queryParams.createdAfter), ["created_before"]: (0, utils_js_2.toString)(queryParams.createdBefore) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/events"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeEvents)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getEventsWithLongPolling(headers = new GetEventsWithLongPollingHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/events"), { method: "OPTIONS", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeRealtimeServers)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.EventsManager = EventsManager;
//# sourceMappingURL=events.generated.js.map