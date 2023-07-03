import { GetFolderByIdOptionsArg } from "../managers/folders.generated.js";
import { CreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { CreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { UpdateFolderByIdRequestBodyArg } from "../managers/folders.generated.js";
import { CopyFolderRequestBodyArg } from "../managers/folders.generated.js";
import { CopyFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { UpdateFolderByIdRequestBodyArgParentField } from "../managers/folders.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: JwtAuth = new JwtAuth({ config: jwtConfig });
const client: Client = new Client({ auth: auth });
test("test_get_folder_info", async function test_get_folder_info(): Promise<any> {
    const rootFolder: any = await client.folders.getFolderById("0");
    if (!(rootFolder.id == "0")) {
        throw "Assertion failed";
    }
    if (!(rootFolder.name == "All Files")) {
        throw "Assertion failed";
    }
    if (!(rootFolder.type == "folder")) {
        throw "Assertion failed";
    }
});
test("test_get_folder_full_info_with_extra_fields", async function test_get_folder_full_info_with_extra_fields(): Promise<any> {
    const rootFolder: any = await client.folders.getFolderById("0", { fields: "has_collaborations,tags" } satisfies GetFolderByIdOptionsArg);
    if (!(rootFolder.id == "0")) {
        throw "Assertion failed";
    }
    if (!(rootFolder.hasCollaborations == false)) {
        throw "Assertion failed";
    }
    const tagsLength: number = rootFolder.tags.length;
    if (!(tagsLength == 0)) {
        throw "Assertion failed";
    }
});
test("test_create_and_delete_folder", async function test_create_and_delete_folder(): Promise<any> {
    const newFolderName: string = getUuid();
    const newFolder: any = await client.folders.createFolder({ name: newFolderName, parent: { id: "0" } satisfies CreateFolderRequestBodyArgParentField } satisfies CreateFolderRequestBodyArg);
    const createdFolder: any = await client.folders.getFolderById(newFolder.id);
    if (!(createdFolder.name == newFolderName)) {
        throw "Assertion failed";
    }
    await client.folders.deleteFolderById(newFolder.id)
    expect(async () => { await client.folders.getFolderById(newFolder.id); }).rejects.toThrow();
});
test("test_update_folder", async function test_update_folder(): Promise<any> {
    const folderToUpdateName: string = getUuid();
    const folderToUpdate: any = await client.folders.createFolder({ name: folderToUpdateName, parent: { id: "0" } satisfies CreateFolderRequestBodyArgParentField } satisfies CreateFolderRequestBodyArg);
    const updatedName: string = getUuid();
    const updatedFolder: any = await client.folders.updateFolderById(folderToUpdate.id, { name: updatedName, description: "Updated description" } satisfies UpdateFolderByIdRequestBodyArg);
    if (!(updatedFolder.name == updatedName)) {
        throw "Assertion failed";
    }
    if (!(updatedFolder.description == "Updated description")) {
        throw "Assertion failed";
    }
    await client.folders.deleteFolderById(updatedFolder.id)
});
test("test_copy_move_folder_and_list_folder_items", async function test_copy_move_folder_and_list_folder_items(): Promise<any> {
    const folderOriginName: string = getUuid();
    const folderOrigin: any = await client.folders.createFolder({ name: folderOriginName, parent: { id: "0" } satisfies CreateFolderRequestBodyArgParentField } satisfies CreateFolderRequestBodyArg);
    const copiedFolderName: string = getUuid();
    const copiedFolder: any = await client.folders.copyFolder(folderOrigin.id, { parent: { id: "0" } satisfies CopyFolderRequestBodyArgParentField, name: copiedFolderName } satisfies CopyFolderRequestBodyArg);
    if (!(copiedFolder.parent.id == "0")) {
        throw "Assertion failed";
    }
    const movedFolderName: string = getUuid();
    const movedFolder: any = await client.folders.updateFolderById(copiedFolder.id, { parent: { id: folderOrigin.id } satisfies UpdateFolderByIdRequestBodyArgParentField, name: movedFolderName } satisfies UpdateFolderByIdRequestBodyArg);
    if (!(movedFolder.parent.id == folderOrigin.id)) {
        throw "Assertion failed";
    }
    const folderItems: any = await client.folders.getFolderItems(folderOrigin.id);
    if (!(folderItems.entries[0].id == movedFolder.id)) {
        throw "Assertion failed";
    }
    if (!(folderItems.entries[0].name == movedFolderName)) {
        throw "Assertion failed";
    }
    await client.folders.deleteFolderById(movedFolder.id)
    await client.folders.deleteFolderById(folderOrigin.id)
});
export {};
