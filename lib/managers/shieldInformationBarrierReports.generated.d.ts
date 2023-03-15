import { ShieldInformationBarrierReference } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type ShieldInformationBarrierReportsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetShieldInformationBarrierReportsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class ShieldInformationBarrierReportsManager {
    readonly auth: ShieldInformationBarrierReportsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierReportsManager, "getShieldInformationBarrierReports" | "postShieldInformationBarrierReports" | "getShieldInformationBarrierReportsId">);
    getShieldInformationBarrierReports(shieldInformationBarrierId: string, options?: GetShieldInformationBarrierReportsOptionsArg): Promise<undefined>;
    postShieldInformationBarrierReports(requestBody: ShieldInformationBarrierReference): Promise<any>;
    getShieldInformationBarrierReportsId(shieldInformationBarrierReportId: string): Promise<any>;
}
