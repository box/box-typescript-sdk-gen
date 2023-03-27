import { Files } from "../schemas.generated.js";
import { deserializeFiles } from "../schemas.generated.js";
import { serializeFiles } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { UploadUrl } from "../schemas.generated.js";
import { deserializeUploadUrl } from "../schemas.generated.js";
import { serializeUploadUrl } from "../schemas.generated.js";
import { ConflictError } from "../schemas.generated.js";
import { deserializeConflictError } from "../schemas.generated.js";
import { serializeConflictError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type UploadsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface OptionsFilesContentRequestBodyArgParentField {
    readonly id?: string;
}
export interface OptionsFilesContentRequestBodyArg {
    readonly name?: string;
    readonly size?: number;
    readonly parent?: OptionsFilesContentRequestBodyArgParentField;
}
export class UploadsManager {
    readonly auth!: UploadsManagerAuthField;
    constructor(fields: Omit<UploadsManager, "optionsFilesContent">) {
        Object.assign(this, fields);
    }
    async optionsFilesContent(requestBody: OptionsFilesContentRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/content") as string, { method: "OPTIONS", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadUrl(deserializeJSON(response.text) as JSON);
    }
}
