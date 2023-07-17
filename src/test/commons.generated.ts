import { serializeUploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { deserializeUploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { serializeCreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { deserializeCreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { serializeCreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { deserializeCreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { UploadFileRequestBodyArg } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { CreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { CreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { generateByteStream } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
import { Readable } from "stream";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
export async function uploadNewFile(): Promise<any> {
    const newFileName: any = "".concat(getUuid(), ".pdf") as string;
    const fileContentStream: any = generateByteStream(1048576);
    const uploadedFiles: any = await client.uploads.uploadFile({ attributes: { name: newFileName, parent: { id: "0" } satisfies UploadFileRequestBodyArgAttributesFieldParentField } satisfies UploadFileRequestBodyArgAttributesField, file: fileContentStream } satisfies UploadFileRequestBodyArg);
    return uploadedFiles.entries[0];
}
export async function createNewFolder(): Promise<any> {
    const newFolderName: any = getUuid();
    return await client.folders.createFolder({ name: newFolderName, parent: { id: "0" } satisfies CreateFolderRequestBodyArgParentField } satisfies CreateFolderRequestBodyArg);
}
