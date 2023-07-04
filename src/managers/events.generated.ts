import { newSerializeEvents } from "../schemas.generated.js";
import { newDeserializeEvents } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeRealtimeServers } from "../schemas.generated.js";
import { newDeserializeRealtimeServers } from "../schemas.generated.js";
import { Events } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { RealtimeServers } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/events") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeEvents(deserializeJson(response.text));
    }
    async getEventsWithLongPolling(): Promise<RealtimeServers> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/events") as string, { method: "OPTIONS", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeRealtimeServers(deserializeJson(response.text));
    }
}
export function newSerializeGetEventsQueryParamsArgStreamTypeField(val: GetEventsQueryParamsArgStreamTypeField): Json {
    return val;
}
export function newDeserializeGetEventsQueryParamsArgStreamTypeField(val: any): GetEventsQueryParamsArgStreamTypeField {
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
export function newSerializeGetEventsQueryParamsArg(val: GetEventsQueryParamsArg): Json {
    return { ["streamType"]: val.streamType == void 0 ? void 0 : newSerializeGetEventsQueryParamsArgStreamTypeField(val.streamType), ["streamPosition"]: val.streamPosition, ["limit"]: val.limit, ["eventType"]: val.eventType, ["createdAfter"]: val.createdAfter, ["createdBefore"]: val.createdBefore };
}
export function newDeserializeGetEventsQueryParamsArg(val: any): GetEventsQueryParamsArg {
    const streamType: undefined | GetEventsQueryParamsArgStreamTypeField = val.streamType == void 0 ? void 0 : newDeserializeGetEventsQueryParamsArgStreamTypeField(val.streamType);
    const streamPosition: undefined | string = isJson(val.streamPosition, "string") ? val.streamPosition : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const eventType: undefined | string = isJson(val.eventType, "string") ? val.eventType : void 0;
    const createdAfter: undefined | string = isJson(val.createdAfter, "string") ? val.createdAfter : void 0;
    const createdBefore: undefined | string = isJson(val.createdBefore, "string") ? val.createdBefore : void 0;
    return { streamType: streamType, streamPosition: streamPosition, limit: limit, eventType: eventType, createdAfter: createdAfter, createdBefore: createdBefore } satisfies GetEventsQueryParamsArg;
}
