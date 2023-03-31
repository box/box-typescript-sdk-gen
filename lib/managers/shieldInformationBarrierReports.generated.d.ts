import { ShieldInformationBarrierReference } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type ShieldInformationBarrierReportsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetShieldInformationBarrierReportsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class ShieldInformationBarrierReportsManager {
    readonly auth: ShieldInformationBarrierReportsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierReportsManager, "getShieldInformationBarrierReports" | "createShieldInformationBarrierReport" | "getShieldInformationBarrierReportById">);
    getShieldInformationBarrierReports(shieldInformationBarrierId: string, options?: GetShieldInformationBarrierReportsOptionsArg): Promise<undefined>;
    createShieldInformationBarrierReport(requestBody: ShieldInformationBarrierReference): Promise<any>;
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId: string): Promise<any>;
}
