import { FileVersionLegalHold } from "../schemas.generated.js";
import { deserializeFileVersionLegalHold } from "../schemas.generated.js";
import { serializeFileVersionLegalHold } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { FileVersionLegalHolds } from "../schemas.generated.js";
import { deserializeFileVersionLegalHolds } from "../schemas.generated.js";
import { serializeFileVersionLegalHolds } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type FileVersionLegalHoldsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFileVersionLegalHoldsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class FileVersionLegalHoldsManager {
    readonly auth!: FileVersionLegalHoldsManagerAuthField;
    constructor(fields: Omit<FileVersionLegalHoldsManager, "getFileVersionLegalHoldsId" | "getFileVersionLegalHolds">) {
        Object.assign(this, fields);
    }
    async getFileVersionLegalHoldsId(fileVersionLegalHoldId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_legal_holds/", fileVersionLegalHoldId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFileVersionLegalHold(deserializeJSON(response.text) as JSON);
    }
    async getFileVersionLegalHolds(policyId: string, options: GetFileVersionLegalHoldsOptionsArg = {} satisfies GetFileVersionLegalHoldsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_legal_holds") as string, { method: "GET", params: { ["policy_id"]: policyId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFileVersionLegalHolds(deserializeJSON(response.text) as JSON);
    }
}
