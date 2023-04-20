import { ShieldInformationBarrierReference } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type ShieldInformationBarrierReportsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
