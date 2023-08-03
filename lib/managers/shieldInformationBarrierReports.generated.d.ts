import { ShieldInformationBarrierReport } from "../schemas.generated.js";
import { ShieldInformationBarrierReference } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetShieldInformationBarrierReportsQueryParamsArg {
    readonly shieldInformationBarrierId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetShieldInformationBarrierReportsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarrierReportsHeadersArg);
}
export declare class CreateShieldInformationBarrierReportHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateShieldInformationBarrierReportHeadersArg);
}
export declare class GetShieldInformationBarrierReportByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetShieldInformationBarrierReportByIdHeadersArg);
}
export declare class ShieldInformationBarrierReportsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierReportsManager, "getShieldInformationBarrierReports" | "createShieldInformationBarrierReport" | "getShieldInformationBarrierReportById">);
    getShieldInformationBarrierReports(queryParams: GetShieldInformationBarrierReportsQueryParamsArg, headers?: GetShieldInformationBarrierReportsHeadersArg): Promise<undefined>;
    createShieldInformationBarrierReport(requestBody: ShieldInformationBarrierReference, headers?: CreateShieldInformationBarrierReportHeadersArg): Promise<ShieldInformationBarrierReport>;
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId: string, headers?: GetShieldInformationBarrierReportByIdHeadersArg): Promise<ShieldInformationBarrierReport>;
}
