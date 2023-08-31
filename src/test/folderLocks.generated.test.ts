import { serializeFolderFull } from "../schemas.generated.js";
import { deserializeFolderFull } from "../schemas.generated.js";
import { serializeCreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { deserializeCreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { serializeCreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { deserializeCreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { serializeFolderLocks } from "../schemas.generated.js";
import { deserializeFolderLocks } from "../schemas.generated.js";
import { serializeFolderLock } from "../schemas.generated.js";
import { deserializeFolderLock } from "../schemas.generated.js";
import { serializeCreateFolderLockRequestBodyArg } from "../managers/folderLocks.generated.js";
import { deserializeCreateFolderLockRequestBodyArg } from "../managers/folderLocks.generated.js";
import { serializeCreateFolderLockRequestBodyArgFolderField } from "../managers/folderLocks.generated.js";
import { deserializeCreateFolderLockRequestBodyArgFolderField } from "../managers/folderLocks.generated.js";
import { serializeCreateFolderLockRequestBodyArgLockedOperationsField } from "../managers/folderLocks.generated.js";
import { deserializeCreateFolderLockRequestBodyArgLockedOperationsField } from "../managers/folderLocks.generated.js";
import { FolderFull } from "../schemas.generated.js";
import { CreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { CreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { FolderLocks } from "../schemas.generated.js";
import { GetFolderLocksQueryParamsArg } from "../managers/folderLocks.generated.js";
import { FolderLock } from "../schemas.generated.js";
import { CreateFolderLockRequestBodyArg } from "../managers/folderLocks.generated.js";
import { CreateFolderLockRequestBodyArgFolderField } from "../managers/folderLocks.generated.js";
import { CreateFolderLockRequestBodyArgLockedOperationsField } from "../managers/folderLocks.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test("testFolderLocks", async function testFolderLocks(): Promise<any> {
    const folder: any = await client.folders.createFolder({ name: getUuid(), parent: { id: "0" } satisfies CreateFolderRequestBodyArgParentField } satisfies CreateFolderRequestBodyArg);
    const folderLocks: any = await client.folderLocks.getFolderLocks({ folderId: folder.id } satisfies GetFolderLocksQueryParamsArg);
    if (!(folderLocks.entries.length == 0)) {
        throw "Assertion failed";
    }
    const folderLock: any = await client.folderLocks.createFolderLock({ folder: { id: folder.id, type: "folder" } satisfies CreateFolderLockRequestBodyArgFolderField, lockedOperations: { move: true, delete: true } satisfies CreateFolderLockRequestBodyArgLockedOperationsField } satisfies CreateFolderLockRequestBodyArg);
    if (!(folderLock.folder.id == folder.id)) {
        throw "Assertion failed";
    }
    if (!(folderLock.lockedOperations.move == true)) {
        throw "Assertion failed";
    }
    if (!(folderLock.lockedOperations.delete == true)) {
        throw "Assertion failed";
    }
    await client.folderLocks.deleteFolderLockById(folderLock.id)
    expect(async () => { await client.folderLocks.deleteFolderLockById(folderLock.id); }).rejects.toThrow();
    const newFolderLocks: any = await client.folderLocks.getFolderLocks({ folderId: folder.id } satisfies GetFolderLocksQueryParamsArg);
    if (!(newFolderLocks.entries.length == 0)) {
        throw "Assertion failed";
    }
    await client.folders.deleteFolderById(folder.id)
});
export {};
