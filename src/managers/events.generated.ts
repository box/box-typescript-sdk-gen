import { serializeEvents } from "../schemas.generated.js";
import { deserializeEvents } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeRealtimeServers } from "../schemas.generated.js";
import { deserializeRealtimeServers } from "../schemas.generated.js";
import { Events } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { RealtimeServers } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export type GetEventsQueryParamsArgStreamTypeField = "all" | "changes" | "sync" | "admin_logs" | "admin_logs_streaming";
export interface GetEventsQueryParamsArg {
    readonly streamType?: GetEventsQueryParamsArgStreamTypeField;
    readonly streamPosition?: string;
    readonly limit?: number;
    readonly eventType?: string;
    readonly createdAfter?: string;
    readonly createdBefore?: string;
}
export class EventsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<EventsManager, "getEvents" | "getEventsWithLongPolling">) {
        Object.assign(this, fields);
    }
    async getEvents(queryParams: undefined | GetEventsQueryParamsArg = {} satisfies GetEventsQueryParamsArg): Promise<Events> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/events") as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeEvents(deserializeJson(response.text));
    }
    async getEventsWithLongPolling(): Promise<RealtimeServers> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/events") as string, { method: "OPTIONS", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRealtimeServers(deserializeJson(response.text));
    }
}
export function serializeGetEventsQueryParamsArgStreamTypeField(val: GetEventsQueryParamsArgStreamTypeField): Json {
    return val;
}
export function deserializeGetEventsQueryParamsArgStreamTypeField(val: any): GetEventsQueryParamsArgStreamTypeField {
    if (!isJson(val, "string")) {
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
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetEventsQueryParamsArg(val: GetEventsQueryParamsArg): Json {
    return { ["streamType"]: val.streamType == void 0 ? void 0 : serializeGetEventsQueryParamsArgStreamTypeField(val.streamType), ["streamPosition"]: val.streamPosition, ["limit"]: val.limit, ["eventType"]: val.eventType, ["createdAfter"]: val.createdAfter, ["createdBefore"]: val.createdBefore };
}
export function deserializeGetEventsQueryParamsArg(val: any): GetEventsQueryParamsArg {
    const streamType: undefined | GetEventsQueryParamsArgStreamTypeField = val.streamType == void 0 ? void 0 : deserializeGetEventsQueryParamsArgStreamTypeField(val.streamType);
    const streamPosition: undefined | string = isJson(val.streamPosition, "string") ? val.streamPosition : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const eventType: undefined | string = isJson(val.eventType, "string") ? val.eventType : void 0;
    const createdAfter: undefined | string = isJson(val.createdAfter, "string") ? val.createdAfter : void 0;
    const createdBefore: undefined | string = isJson(val.createdBefore, "string") ? val.createdBefore : void 0;
    return { streamType: streamType, streamPosition: streamPosition, limit: limit, eventType: eventType, createdAfter: createdAfter, createdBefore: createdBefore } satisfies GetEventsQueryParamsArg;
}
