import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type EventsManagerAuthField = DeveloperTokenAuth | CcgAuth;
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
    constructor(fields: Omit<EventsManager, "getEvents" | "optionsEvents">);
    getEvents(options?: GetEventsOptionsArg): Promise<any>;
    optionsEvents(): Promise<any>;
}
