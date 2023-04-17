import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Files } from "../schemas.generated.js";
import { deserializeFiles } from "../schemas.generated.js";
import { serializeFiles } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { MultipartItem } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type DownloadsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface DownloadFileOptionsArg {
    readonly range?: string;
    readonly boxapi?: string;
    readonly version?: string;
    readonly accessToken?: string;
}
export interface UploadFileVersionRequestBodyArgAttributesField {
    readonly name: string;
    readonly contentModifiedAt?: string;
}
export interface UploadFileVersionRequestBodyArg {
    readonly attributes: UploadFileVersionRequestBodyArgAttributesField;
    readonly file: string;
}
export interface UploadFileVersionOptionsArg {
    readonly ifMatch?: string;
    readonly fields?: string;
    readonly contentMd5?: string;
}
export class DownloadsManager {
    readonly auth!: DownloadsManagerAuthField;
    constructor(fields: Omit<DownloadsManager, "downloadFile" | "uploadFileVersion">) {
        Object.assign(this, fields);
    }
    async downloadFile(fileId: string, options: DownloadFileOptionsArg = {} satisfies DownloadFileOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/content") as string, { method: "GET", params: { ["version"]: options.version, ["access_token"]: options.accessToken }, headers: { ["range"]: options.range, ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async uploadFileVersion(fileId: string, requestBody: UploadFileVersionRequestBodyArg, options: UploadFileVersionOptionsArg = {} satisfies UploadFileVersionOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/", fileId, "/content") as string, { method: "POST", params: { ["fields"]: options.fields }, headers: { ["if-match"]: options.ifMatch, ["content-md5"]: options.contentMd5 }, multipartData: [{ partName: "attributes", body: JSON.stringify(requestBody.attributes) } satisfies MultipartItem, { partName: "file", fileStream: requestBody.file } satisfies MultipartItem], contentType: "multipart/form-data", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFiles(deserializeJson(response.text));
    }
}
