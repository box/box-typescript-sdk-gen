import { FileVersionRetentions } from "../schemas.generated.js";
import { deserializeFileVersionRetentions } from "../schemas.generated.js";
import { serializeFileVersionRetentions } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { FileVersionRetention } from "../schemas.generated.js";
import { deserializeFileVersionRetention } from "../schemas.generated.js";
import { serializeFileVersionRetention } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type GetFileVersionRetentionsOptionsArgDispositionActionField = "permanently_delete" | "remove_retention";
export interface GetFileVersionRetentionsOptionsArg {
    readonly fileId?: string;
    readonly fileVersionId?: string;
    readonly policyId?: string;
    readonly dispositionAction?: GetFileVersionRetentionsOptionsArgDispositionActionField;
    readonly dispositionBefore?: string;
    readonly dispositionAfter?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export class FileVersionRetentionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionRetentionsManager, "getFileVersionRetentions" | "getFileVersionRetentionById">) {
        Object.assign(this, fields);
    }
    async getFileVersionRetentions(options: GetFileVersionRetentionsOptionsArg = {} satisfies GetFileVersionRetentionsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_retentions") as string, { method: "GET", params: { ["file_id"]: options.fileId, ["file_version_id"]: options.fileVersionId, ["policy_id"]: options.policyId, ["disposition_action"]: options.dispositionAction, ["disposition_before"]: options.dispositionBefore, ["disposition_after"]: options.dispositionAfter, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionRetentions(deserializeJson(response.text));
    }
    async getFileVersionRetentionById(fileVersionRetentionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_retentions/", fileVersionRetentionId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionRetention(deserializeJson(response.text));
    }
}
