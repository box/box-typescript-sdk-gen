import { ShieldInformationBarrierReport } from "../schemas.generated.js";
import { ShieldInformationBarrierReference } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetShieldInformationBarrierReportsQueryParamsArg {
    readonly shieldInformationBarrierId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class ShieldInformationBarrierReportsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierReportsManager, "getShieldInformationBarrierReports" | "createShieldInformationBarrierReport" | "getShieldInformationBarrierReportById">);
    getShieldInformationBarrierReports(queryParams: GetShieldInformationBarrierReportsQueryParamsArg): Promise<undefined>;
    createShieldInformationBarrierReport(requestBody: ShieldInformationBarrierReference): Promise<ShieldInformationBarrierReport>;
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId: string): Promise<ShieldInformationBarrierReport>;
}
export declare function newSerializeGetShieldInformationBarrierReportsQueryParamsArg(val: GetShieldInformationBarrierReportsQueryParamsArg): Json;
export declare function newDeserializeGetShieldInformationBarrierReportsQueryParamsArg(val: any): GetShieldInformationBarrierReportsQueryParamsArg;
