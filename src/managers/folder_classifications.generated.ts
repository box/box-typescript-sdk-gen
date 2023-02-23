import { Classification } from "../schemas.generated.js";
import { deserializeClassification } from "../schemas.generated.js";
import { serializeClassification } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type FolderClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export class FolderClassificationsManager {
    readonly auth!: FolderClassificationsManagerAuthField;
    constructor(fields: Omit<FolderClassificationsManager, "getFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo" | "postFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo" | "deleteFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo">) {
        Object.assign(this, fields);
    }
    async getFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeClassification(deserializeJSON(response.text) as JSON);
    }
    async postFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string, requestBody: PostFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWoRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeClassification(deserializeJSON(response.text) as JSON);
    }
    async deleteFoldersIdMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
