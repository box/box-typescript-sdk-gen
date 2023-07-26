import { serializeFileVersions } from "../schemas.generated.js";
import { deserializeFileVersions } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeFileVersionFull } from "../schemas.generated.js";
import { deserializeFileVersionFull } from "../schemas.generated.js";
import { FileVersions } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FileVersionFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetFileVersionsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetFileVersionByIdQueryParamsArg {
    readonly fields?: string;
}
export interface UpdateFileVersionByIdRequestBodyArg {
    readonly trashedAt?: string;
}
export interface DeleteFileVersionByIdHeadersArg {
    readonly ifMatch?: string;
}
export type PromoteFileVersionRequestBodyArgTypeField = "file_version";
export interface PromoteFileVersionRequestBodyArg {
    readonly id?: string;
    readonly type?: PromoteFileVersionRequestBodyArgTypeField;
}
export interface PromoteFileVersionQueryParamsArg {
    readonly fields?: string;
}
export class FileVersionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionsManager, "getFileVersions" | "getFileVersionById" | "updateFileVersionById" | "deleteFileVersionById" | "promoteFileVersion">) {
        Object.assign(this, fields);
    }
    async getFileVersions(fileId: string, queryParams: undefined | GetFileVersionsQueryParamsArg = {} satisfies GetFileVersionsQueryParamsArg): Promise<FileVersions> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions") as string, { method: "GET", params: prepareParams(serializeGetFileVersionsQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersions(deserializeJson(response.text));
    }
    async getFileVersionById(fileId: string, fileVersionId: string, queryParams: undefined | GetFileVersionByIdQueryParamsArg = {} satisfies GetFileVersionByIdQueryParamsArg): Promise<FileVersionFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "GET", params: prepareParams(serializeGetFileVersionByIdQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionFull(deserializeJson(response.text));
    }
    async updateFileVersionById(fileId: string, fileVersionId: string, requestBody: UpdateFileVersionByIdRequestBodyArg): Promise<FileVersionFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "PUT", body: serializeJson(serializeUpdateFileVersionByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionFull(deserializeJson(response.text));
    }
    async deleteFileVersionById(fileId: string, fileVersionId: string, headers: undefined | DeleteFileVersionByIdHeadersArg = {} satisfies DeleteFileVersionByIdHeadersArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "DELETE", headers: prepareParams(serializeDeleteFileVersionByIdHeadersArg(headers)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async promoteFileVersion(fileId: string, requestBody: PromoteFileVersionRequestBodyArg, queryParams: undefined | PromoteFileVersionQueryParamsArg = {} satisfies PromoteFileVersionQueryParamsArg): Promise<FileVersionFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/current") as string, { method: "POST", params: prepareParams(serializePromoteFileVersionQueryParamsArg(queryParams)), body: serializeJson(serializePromoteFileVersionRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionFull(deserializeJson(response.text));
    }
}
export function serializeGetFileVersionsQueryParamsArg(val: GetFileVersionsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
export function deserializeGetFileVersionsQueryParamsArg(val: any): GetFileVersionsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { fields: fields, limit: limit, offset: offset } satisfies GetFileVersionsQueryParamsArg;
}
export function serializeGetFileVersionByIdQueryParamsArg(val: GetFileVersionByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetFileVersionByIdQueryParamsArg(val: any): GetFileVersionByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetFileVersionByIdQueryParamsArg;
}
export function serializeUpdateFileVersionByIdRequestBodyArg(val: UpdateFileVersionByIdRequestBodyArg): Json {
    return { ["trashed_at"]: val.trashedAt };
}
export function deserializeUpdateFileVersionByIdRequestBodyArg(val: any): UpdateFileVersionByIdRequestBodyArg {
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    return { trashedAt: trashedAt } satisfies UpdateFileVersionByIdRequestBodyArg;
}
export function serializeDeleteFileVersionByIdHeadersArg(val: DeleteFileVersionByIdHeadersArg): Json {
    return { ["if-match"]: val.ifMatch };
}
export function deserializeDeleteFileVersionByIdHeadersArg(val: any): DeleteFileVersionByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val["if-match"], "string") ? val["if-match"] : void 0;
    return { ifMatch: ifMatch } satisfies DeleteFileVersionByIdHeadersArg;
}
export function serializePromoteFileVersionRequestBodyArgTypeField(val: PromoteFileVersionRequestBodyArgTypeField): Json {
    return val;
}
export function deserializePromoteFileVersionRequestBodyArgTypeField(val: any): PromoteFileVersionRequestBodyArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PromoteFileVersionRequestBodyArgTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializePromoteFileVersionRequestBodyArg(val: PromoteFileVersionRequestBodyArg): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializePromoteFileVersionRequestBodyArgTypeField(val.type) };
}
export function deserializePromoteFileVersionRequestBodyArg(val: any): PromoteFileVersionRequestBodyArg {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | PromoteFileVersionRequestBodyArgTypeField = val.type == void 0 ? void 0 : deserializePromoteFileVersionRequestBodyArgTypeField(val.type);
    return { id: id, type: type } satisfies PromoteFileVersionRequestBodyArg;
}
export function serializePromoteFileVersionQueryParamsArg(val: PromoteFileVersionQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializePromoteFileVersionQueryParamsArg(val: any): PromoteFileVersionQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies PromoteFileVersionQueryParamsArg;
}
