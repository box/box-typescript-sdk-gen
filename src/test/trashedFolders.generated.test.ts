import { serializeCreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { deserializeCreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { serializeCreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { deserializeCreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { CreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { CreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test("testTrashedFolders", async function testTrashedFolders(): Promise<any> {
    const folder: any = await client.folders.createFolder({ name: getUuid(), parent: { id: "0" } satisfies CreateFolderRequestBodyArgParentField } satisfies CreateFolderRequestBodyArg);
    await client.folders.deleteFolderById(folder.id)
    const fromTrash: any = await client.trashedFolders.getFolderTrash(folder.id);
    if (!(fromTrash.id == folder.id)) {
        throw "Assertion failed";
    }
    if (!(fromTrash.name == folder.name)) {
        throw "Assertion failed";
    }
    expect(async () => { await client.folders.getFolderById(folder.id); }).rejects.toThrow();
    const restoredFolder: any = await client.trashedFolders.restoreFolderFromTrash(folder.id);
    const fromApi: any = await client.folders.getFolderById(folder.id);
    if (!(restoredFolder.id == fromApi.id)) {
        throw "Assertion failed";
    }
    if (!(restoredFolder.name == fromApi.name)) {
        throw "Assertion failed";
    }
    await client.folders.deleteFolderById(folder.id)
    await client.trashedFolders.deleteFolderTrash(folder.id)
    expect(async () => { await client.trashedFolders.getFolderTrash(folder.id); }).rejects.toThrow();
});
export {};
