import { Events } from "../schemas.generated.js";
import { deserializeEvents } from "../schemas.generated.js";
import { serializeEvents } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { RealtimeServers } from "../schemas.generated.js";
import { deserializeRealtimeServers } from "../schemas.generated.js";
import { serializeRealtimeServers } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type EventsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type GetEventsOptionsArgStreamTypeField = "all" | "changes" | "sync" | "admin_logs" | "admin_logs_streaming";
export interface GetEventsOptionsArg {
    readonly streamType?: GetEventsOptionsArgStreamTypeField;
    readonly streamPosition?: string;
    readonly limit?: number;
    readonly eventType?: string;
    readonly createdAfter?: string;
    readonly createdBefore?: string;
}
export class EventsManager {
    readonly auth!: EventsManagerAuthField;
    constructor(fields: Omit<EventsManager, "getEvents" | "getEventsWithLongPolling">) {
        Object.assign(this, fields);
    }
    async getEvents(options: GetEventsOptionsArg = {} satisfies GetEventsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/events") as string, { method: "GET", params: { ["stream_type"]: options.streamType, ["stream_position"]: options.streamPosition, ["limit"]: options.limit, ["event_type"]: options.eventType, ["created_after"]: options.createdAfter, ["created_before"]: options.createdBefore }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeEvents(deserializeJSON(response.text) as JSON);
    }
    async getEventsWithLongPolling(): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/events") as string, { method: "OPTIONS", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeRealtimeServers(deserializeJSON(response.text) as JSON);
    }
}
