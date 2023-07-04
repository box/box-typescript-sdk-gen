import { Events } from "../schemas.generated.js";
import { RealtimeServers } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetEventsQueryParamsArgStreamTypeField = "all" | "changes" | "sync" | "admin_logs" | "admin_logs_streaming";
export interface GetEventsQueryParamsArg {
    readonly streamType?: GetEventsQueryParamsArgStreamTypeField;
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
    getEvents(queryParams?: undefined | GetEventsQueryParamsArg): Promise<Events>;
    getEventsWithLongPolling(): Promise<RealtimeServers>;
}
export declare function newSerializeGetEventsQueryParamsArgStreamTypeField(val: GetEventsQueryParamsArgStreamTypeField): Json;
export declare function newDeserializeGetEventsQueryParamsArgStreamTypeField(val: any): GetEventsQueryParamsArgStreamTypeField;
export declare function newSerializeGetEventsQueryParamsArg(val: GetEventsQueryParamsArg): Json;
export declare function newDeserializeGetEventsQueryParamsArg(val: any): GetEventsQueryParamsArg;
