import { ShieldInformationBarrierReference } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetShieldInformationBarrierReportsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class ShieldInformationBarrierReportsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierReportsManager, "getShieldInformationBarrierReports" | "createShieldInformationBarrierReport" | "getShieldInformationBarrierReportById">);
    getShieldInformationBarrierReports(shieldInformationBarrierId: string, options?: GetShieldInformationBarrierReportsOptionsArg): Promise<undefined>;
    createShieldInformationBarrierReport(requestBody: ShieldInformationBarrierReference): Promise<any>;
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId: string): Promise<any>;
}
