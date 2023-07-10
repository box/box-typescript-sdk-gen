import { serializeUploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { deserializeUploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArg } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { generateByteStream } from "../utils.js";
import { readByteStream } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test("test_download_file", async function test_download_file(): Promise<any> {
    const newFileName: any = getUuid();
    const fileContentStream: any = generateByteStream();
    const fileBuffer: any = await readByteStream(fileContentStream);
    const uploadedFiles: any = await client.uploads.uploadFile({ attributes: { name: newFileName, parent: { id: "0" } satisfies UploadFileRequestBodyArgAttributesFieldParentField } satisfies UploadFileRequestBodyArgAttributesField, file: fileBuffer } satisfies UploadFileRequestBodyArg);
    const uploadedFile: any = uploadedFiles.entries[0];
    const downloadedFileContent: any = await client.downloads.downloadFile(uploadedFile.id);
    if (!(Buffer.compare(downloadedFileContent, fileBuffer) === 0)) {
        throw "Assertion failed";
    }
    await client.files.deleteFileById(uploadedFile.id)
});
export {};
