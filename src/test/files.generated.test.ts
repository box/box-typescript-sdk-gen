import { serializeUploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { deserializeUploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { serializeGetFileThumbnailByIdExtensionArg } from "../managers/files.generated.js";
import { deserializeGetFileThumbnailByIdExtensionArg } from "../managers/files.generated.js";
import { serializeUpdateFileByIdRequestBodyArg } from "../managers/files.generated.js";
import { deserializeUpdateFileByIdRequestBodyArg } from "../managers/files.generated.js";
import { serializeCopyFileRequestBodyArg } from "../managers/files.generated.js";
import { deserializeCopyFileRequestBodyArg } from "../managers/files.generated.js";
import { serializeCopyFileRequestBodyArgParentField } from "../managers/files.generated.js";
import { deserializeCopyFileRequestBodyArgParentField } from "../managers/files.generated.js";
import { UploadFileRequestBodyArg } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesField } from "../managers/uploads.generated.js";
import { UploadFileRequestBodyArgAttributesFieldParentField } from "../managers/uploads.generated.js";
import { GetFileThumbnailByIdExtensionArg } from "../managers/files.generated.js";
import { GetFileByIdQueryParamsArg } from "../managers/files.generated.js";
import { UpdateFileByIdRequestBodyArg } from "../managers/files.generated.js";
import { CopyFileRequestBodyArg } from "../managers/files.generated.js";
import { CopyFileRequestBodyArgParentField } from "../managers/files.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { generateByteStream } from "../utils.js";
import { readByteStream } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
import { uploadNewFile } from "./commons.generated.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
export async function uploadFile(fileName: any, fileStream: any): Promise<any> {
    const uploadedFiles: any = await client.uploads.uploadFile({ attributes: { name: fileName, parent: { id: "0" } satisfies UploadFileRequestBodyArgAttributesFieldParentField } satisfies UploadFileRequestBodyArgAttributesField, file: fileStream } satisfies UploadFileRequestBodyArg);
    return uploadedFiles.entries[0];
}
test("testGetFileThumbnail", async function testGetFileThumbnail(): Promise<any> {
    const thumbnailFileName: any = getUuid();
    const thumbnailContentStream: any = generateByteStream(1048576);
    const thumbnailFile: any = await uploadFile(thumbnailFileName, thumbnailContentStream);
    if (!!(await client.files.getFileThumbnailById(thumbnailFile.id, "png" as GetFileThumbnailByIdExtensionArg) == await readByteStream(thumbnailContentStream))) {
        throw "Assertion failed";
    }
    await client.files.deleteFileById(thumbnailFile.id)
});
test("testGetFileFullExtraFields", async function testGetFileFullExtraFields(): Promise<any> {
    const newFileName: any = getUuid();
    const fileContent: any = generateByteStream(1048576);
    const uploadedFile: any = await uploadFile(newFileName, fileContent);
    const file: any = await client.files.getFileById(uploadedFile.id, { fields: "is_externally_owned,has_collaborations" } satisfies GetFileByIdQueryParamsArg);
    if (!(file.isExternallyOwned == false)) {
        throw "Assertion failed";
    }
    if (!(file.hasCollaborations == false)) {
        throw "Assertion failed";
    }
    await client.files.deleteFileById(file.id)
});
test("testCreateGetAndDeleteFile", async function testCreateGetAndDeleteFile(): Promise<any> {
    const newFileName: any = getUuid();
    const updatedContentStream: any = generateByteStream(1048576);
    const uploadedFile: any = await uploadFile(newFileName, updatedContentStream);
    const file: any = await client.files.getFileById(uploadedFile.id);
    if (!(file.name == newFileName)) {
        throw "Assertion failed";
    }
    await client.files.deleteFileById(uploadedFile.id)
    const trashedFile: any = await client.trashedFiles.getFileTrash(uploadedFile.id);
    if (!(file.id == trashedFile.id)) {
        throw "Assertion failed";
    }
});
test("testUpdateFile", async function testUpdateFile(): Promise<any> {
    const fileToUpdate: any = await uploadNewFile();
    const updatedName: any = getUuid();
    const updatedFile: any = await client.files.updateFileById(fileToUpdate.id, { name: updatedName, description: "Updated description" } satisfies UpdateFileByIdRequestBodyArg);
    if (!(updatedFile.name == updatedName)) {
        throw "Assertion failed";
    }
    if (!(updatedFile.description == "Updated description")) {
        throw "Assertion failed";
    }
    await client.files.deleteFileById(updatedFile.id)
});
test("testCopyFile", async function testCopyFile(): Promise<any> {
    const fileOrigin: any = await uploadNewFile();
    const copiedFileName: any = getUuid();
    const copiedFile: any = await client.files.copyFile(fileOrigin.id, { parent: { id: "0" } satisfies CopyFileRequestBodyArgParentField, name: copiedFileName } satisfies CopyFileRequestBodyArg);
    if (!(copiedFile.parent.id == "0")) {
        throw "Assertion failed";
    }
    if (!(copiedFile.name == copiedFileName)) {
        throw "Assertion failed";
    }
    await client.files.deleteFileById(fileOrigin.id)
    await client.files.deleteFileById(copiedFile.id)
});
export {};
