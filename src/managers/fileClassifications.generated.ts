import { Classification } from "../schemas.generated.js";
import { deserializeClassification } from "../schemas.generated.js";
import { serializeClassification } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type FileClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export class FileClassificationsManager {
    readonly auth!: FileClassificationsManagerAuthField;
    constructor(fields: Omit<FileClassificationsManager, "getFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo" | "postFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo" | "deleteFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo">) {
        Object.assign(this, fields);
    }
    async getFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJSON(response.text) as JSON);
    }
    async postFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string, requestBody: PostFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJSON(response.text) as JSON);
    }
    async deleteFilesIdMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
