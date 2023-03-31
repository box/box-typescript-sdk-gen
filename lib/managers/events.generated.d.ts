import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
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
export declare class EventsManager {
    readonly auth: EventsManagerAuthField;
    constructor(fields: Omit<EventsManager, "getEvents" | "getEventsWithLongPolling">);
    getEvents(options?: GetEventsOptionsArg): Promise<any>;
    getEventsWithLongPolling(): Promise<any>;
}
