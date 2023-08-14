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
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test("testTrashedFiles", async function testTrashedFiles(): Promise<any> {
    const fileSize: any = 1024 * 1024;
    const fileName: any = getUuid();
    const fileByteStream: any = generateByteStream(fileSize);
    const files: any = await client.uploads.uploadFile({ attributes: { name: fileName, parent: { id: "0" } satisfies UploadFileRequestBodyArgAttributesFieldParentField } satisfies UploadFileRequestBodyArgAttributesField, file: fileByteStream } satisfies UploadFileRequestBodyArg);
    const file: any = files.entries[0];
    await client.files.deleteFileById(file.id)
    const fromTrash: any = await client.trashedFiles.getFileTrash(file.id);
    if (!(fromTrash.id == file.id)) {
        throw "Assertion failed";
    }
    if (!(fromTrash.name == file.name)) {
        throw "Assertion failed";
    }
    const fromApiAfterTrashed: any = await client.files.getFileById(file.id);
    if (!(fromApiAfterTrashed.itemStatus == "trashed")) {
        throw "Assertion failed";
    }
    const restoredFile: any = await client.trashedFiles.restoreFileFromTrash(file.id);
    const fromApiAfterRestore: any = await client.files.getFileById(file.id);
    if (!(restoredFile.id == fromApiAfterRestore.id)) {
        throw "Assertion failed";
    }
    if (!(restoredFile.name == fromApiAfterRestore.name)) {
        throw "Assertion failed";
    }
    if (!(fromApiAfterRestore.itemStatus == "active")) {
        throw "Assertion failed";
    }
    await client.files.deleteFileById(file.id)
    await client.trashedFiles.deleteFileTrash(file.id)
    expect(async () => { await client.trashedFiles.getFileTrash(file.id); }).rejects.toThrow();
});
export {};
