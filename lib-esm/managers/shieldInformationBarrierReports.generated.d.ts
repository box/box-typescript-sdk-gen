import { ShieldInformationBarrierReports } from '../schemas/shieldInformationBarrierReports.generated.js';
import { ShieldInformationBarrierReport } from '../schemas/shieldInformationBarrierReport.generated.js';
import { ShieldInformationBarrierReference } from '../schemas/shieldInformationBarrierReference.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetShieldInformationBarrierReportsOptionals {
    readonly headers: GetShieldInformationBarrierReportsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierReportsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierReportsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierReportsOptionalsInput {
    readonly headers?: GetShieldInformationBarrierReportsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateShieldInformationBarrierReportOptionals {
    readonly headers: CreateShieldInformationBarrierReportHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateShieldInformationBarrierReportOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateShieldInformationBarrierReportOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateShieldInformationBarrierReportOptionalsInput {
    readonly headers?: CreateShieldInformationBarrierReportHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetShieldInformationBarrierReportByIdOptionals {
    readonly headers: GetShieldInformationBarrierReportByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetShieldInformationBarrierReportByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetShieldInformationBarrierReportByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetShieldInformationBarrierReportByIdOptionalsInput {
    readonly headers?: GetShieldInformationBarrierReportByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetShieldInformationBarrierReportsQueryParams {
    /**
     * The ID of the shield information barrier. */
    readonly shieldInformationBarrierId: string;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetShieldInformationBarrierReportsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierReportsHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierReportsHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierReportsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateShieldInformationBarrierReportHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateShieldInformationBarrierReportHeaders, 'extraHeaders'> & Partial<Pick<CreateShieldInformationBarrierReportHeaders, 'extraHeaders'>>);
}
export interface CreateShieldInformationBarrierReportHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetShieldInformationBarrierReportByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetShieldInformationBarrierReportByIdHeaders, 'extraHeaders'> & Partial<Pick<GetShieldInformationBarrierReportByIdHeaders, 'extraHeaders'>>);
}
export interface GetShieldInformationBarrierReportByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ShieldInformationBarrierReportsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierReportsManager, 'networkSession' | 'getShieldInformationBarrierReports' | 'createShieldInformationBarrierReport' | 'getShieldInformationBarrierReportById'> & Partial<Pick<ShieldInformationBarrierReportsManager, 'networkSession'>>);
    /**
     * Lists shield information barrier reports.
     * @param {GetShieldInformationBarrierReportsQueryParams} queryParams Query parameters of getShieldInformationBarrierReports method
     * @param {GetShieldInformationBarrierReportsOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierReports>}
     */
    getShieldInformationBarrierReports(queryParams: GetShieldInformationBarrierReportsQueryParams, optionalsInput?: GetShieldInformationBarrierReportsOptionalsInput): Promise<ShieldInformationBarrierReports>;
    /**
     * Creates a shield information barrier report for a given barrier.
     * @param {ShieldInformationBarrierReference} requestBody Request body of createShieldInformationBarrierReport method
     * @param {CreateShieldInformationBarrierReportOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierReport>}
     */
    createShieldInformationBarrierReport(requestBody: ShieldInformationBarrierReference, optionalsInput?: CreateShieldInformationBarrierReportOptionalsInput): Promise<ShieldInformationBarrierReport>;
    /**
       * Retrieves a shield information barrier report by its ID.
       * @param {string} shieldInformationBarrierReportId The ID of the shield information barrier Report.
      Example: "3423"
       * @param {GetShieldInformationBarrierReportByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierReport>}
       */
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId: string, optionalsInput?: GetShieldInformationBarrierReportByIdOptionalsInput): Promise<ShieldInformationBarrierReport>;
}
export interface ShieldInformationBarrierReportsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
