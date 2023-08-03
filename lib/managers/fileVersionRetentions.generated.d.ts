import { FileVersionRetentions } from "../schemas.generated.js";
import { FileVersionRetention } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetFileVersionRetentionsQueryParamsArgDispositionActionField = "permanently_delete" | "remove_retention";
export interface GetFileVersionRetentionsQueryParamsArg {
    readonly fileId?: string;
    readonly fileVersionId?: string;
    readonly policyId?: string;
    readonly dispositionAction?: GetFileVersionRetentionsQueryParamsArgDispositionActionField;
    readonly dispositionBefore?: string;
    readonly dispositionAfter?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class GetFileVersionRetentionsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileVersionRetentionsHeadersArg);
}
export declare class GetFileVersionRetentionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileVersionRetentionByIdHeadersArg);
}
export declare class FileVersionRetentionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionRetentionsManager, "getFileVersionRetentions" | "getFileVersionRetentionById">);
    getFileVersionRetentions(queryParams?: GetFileVersionRetentionsQueryParamsArg, headers?: GetFileVersionRetentionsHeadersArg): Promise<FileVersionRetentions>;
    getFileVersionRetentionById(fileVersionRetentionId: string, headers?: GetFileVersionRetentionByIdHeadersArg): Promise<FileVersionRetention>;
}
