import { Events } from "../schemas.generated.js";
import { RealtimeServers } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetEventsQueryParamsArgStreamTypeField = "all" | "changes" | "sync" | "admin_logs" | "admin_logs_streaming";
export interface GetEventsQueryParamsArg {
    readonly streamType?: GetEventsQueryParamsArgStreamTypeField;
    readonly streamPosition?: string;
    readonly limit?: number;
    readonly eventType?: string;
    readonly createdAfter?: string;
    readonly createdBefore?: string;
}
export declare class GetEventsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetEventsHeadersArg);
}
export declare class GetEventsWithLongPollingHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetEventsWithLongPollingHeadersArg);
}
export declare class EventsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<EventsManager, "getEvents" | "getEventsWithLongPolling">);
    getEvents(queryParams?: GetEventsQueryParamsArg, headers?: GetEventsHeadersArg): Promise<Events>;
    getEventsWithLongPolling(headers?: GetEventsWithLongPollingHeadersArg): Promise<RealtimeServers>;
}
