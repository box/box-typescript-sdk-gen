import { UploadFileRequestBodyArg } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { UploadFileVersionRequestBodyArg } from "../managers/uploads.generated.js";
import { UploadFileVersionRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { generateByteStream } from "../utils.js";
import { readByteStream } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: JwtAuth = new JwtAuth({ config: jwtConfig });
const client: Client = new Client({ auth: auth });
test("test_upload_file_and_file_version", async function test_upload_file_and_file_version(): Promise<any> {
    const newFileName: string = getUuid();
    const fileContentStream: any = generateByteStream();
    const uploadedFiles: any = await client.uploads.uploadFile({ attributes: { name: newFileName, parent: { id: "0" } satisfies UploadFileRequestBodyArgAttributesFieldParentField } satisfies UploadFileRequestBodyArgAttributesField, file: fileContentStream } satisfies UploadFileRequestBodyArg);
    const uploadedFile: any = uploadedFiles.entries[0];
    if (!(uploadedFile.name == newFileName)) {
        throw "Assertion failed";
    }
    const newFileVersionName: string = getUuid();
    const newFileContentStream: any = generateByteStream();
    const uploadedFilesVersion: any = await client.uploads.uploadFileVersion(uploadedFile.id, { attributes: { name: newFileVersionName } satisfies UploadFileVersionRequestBodyArgAttributesField, file: newFileContentStream } satisfies UploadFileVersionRequestBodyArg);
    const newFileVersion: any = uploadedFilesVersion.entries[0];
    if (!(newFileVersion.name == newFileVersionName)) {
        throw "Assertion failed";
    }
    await client.files.deleteFileById(newFileVersion.id)
});
export {};
