import { newSerializeFileVersionRetentions } from "../schemas.generated.js";
import { newDeserializeFileVersionRetentions } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeFileVersionRetention } from "../schemas.generated.js";
import { newDeserializeFileVersionRetention } from "../schemas.generated.js";
import { FileVersionRetentions } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FileVersionRetention } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
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
export class FileVersionRetentionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionRetentionsManager, "getFileVersionRetentions" | "getFileVersionRetentionById">) {
        Object.assign(this, fields);
    }
    async getFileVersionRetentions(queryParams: undefined | GetFileVersionRetentionsQueryParamsArg = {} satisfies GetFileVersionRetentionsQueryParamsArg): Promise<FileVersionRetentions> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_retentions") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileVersionRetentions(deserializeJson(response.text));
    }
    async getFileVersionRetentionById(fileVersionRetentionId: string): Promise<FileVersionRetention> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_retentions/", fileVersionRetentionId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileVersionRetention(deserializeJson(response.text));
    }
}
export function newSerializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val: GetFileVersionRetentionsQueryParamsArgDispositionActionField): Json {
    return val;
}
export function newDeserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val: any): GetFileVersionRetentionsQueryParamsArgDispositionActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFileVersionRetentionsQueryParamsArgDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGetFileVersionRetentionsQueryParamsArg(val: GetFileVersionRetentionsQueryParamsArg): Json {
    return { ["fileId"]: val.fileId, ["fileVersionId"]: val.fileVersionId, ["policyId"]: val.policyId, ["dispositionAction"]: val.dispositionAction == void 0 ? void 0 : newSerializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val.dispositionAction), ["dispositionBefore"]: val.dispositionBefore, ["dispositionAfter"]: val.dispositionAfter, ["limit"]: val.limit, ["marker"]: val.marker };
}
export function newDeserializeGetFileVersionRetentionsQueryParamsArg(val: any): GetFileVersionRetentionsQueryParamsArg {
    const fileId: undefined | string = isJson(val.fileId, "string") ? val.fileId : void 0;
    const fileVersionId: undefined | string = isJson(val.fileVersionId, "string") ? val.fileVersionId : void 0;
    const policyId: undefined | string = isJson(val.policyId, "string") ? val.policyId : void 0;
    const dispositionAction: undefined | GetFileVersionRetentionsQueryParamsArgDispositionActionField = val.dispositionAction == void 0 ? void 0 : newDeserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val.dispositionAction);
    const dispositionBefore: undefined | string = isJson(val.dispositionBefore, "string") ? val.dispositionBefore : void 0;
    const dispositionAfter: undefined | string = isJson(val.dispositionAfter, "string") ? val.dispositionAfter : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    return { fileId: fileId, fileVersionId: fileVersionId, policyId: policyId, dispositionAction: dispositionAction, dispositionBefore: dispositionBefore, dispositionAfter: dispositionAfter, limit: limit, marker: marker } satisfies GetFileVersionRetentionsQueryParamsArg;
}
