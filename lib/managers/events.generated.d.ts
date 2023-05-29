import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetEventsOptionsArgStreamTypeField = "all" | "changes" | "sync" | "admin_logs" | "admin_logs_streaming";
export interface GetEventsOptionsArg {
    readonly streamType?: GetEventsOptionsArgStreamTypeField;
    readonly streamPosition?: string;
    readonly limit?: number;
    readonly eventType?: string;
    readonly createdAfter?: string;
    readonly createdBefore?: string;
}
export declare class EventsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<EventsManager, "getEvents" | "getEventsWithLongPolling">);
    getEvents(options?: GetEventsOptionsArg): Promise<any>;
    getEventsWithLongPolling(): Promise<any>;
}
