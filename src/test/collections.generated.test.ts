import { serializeCollections } from "../schemas.generated.js";
import { deserializeCollections } from "../schemas.generated.js";
import { serializeCollection } from "../schemas.generated.js";
import { deserializeCollection } from "../schemas.generated.js";
import { serializeItems } from "../schemas.generated.js";
import { deserializeItems } from "../schemas.generated.js";
import { serializeFolderFull } from "../schemas.generated.js";
import { deserializeFolderFull } from "../schemas.generated.js";
import { serializeCreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { deserializeCreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { serializeCreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { deserializeCreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { serializeUpdateFolderByIdRequestBodyArg } from "../managers/folders.generated.js";
import { deserializeUpdateFolderByIdRequestBodyArg } from "../managers/folders.generated.js";
import { Collections } from "../schemas.generated.js";
import { Collection } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { FolderFull } from "../schemas.generated.js";
import { CreateFolderRequestBodyArg } from "../managers/folders.generated.js";
import { CreateFolderRequestBodyArgParentField } from "../managers/folders.generated.js";
import { UpdateFolderByIdRequestBodyArg } from "../managers/folders.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test("testCollections", async function testCollections(): Promise<any> {
    const collections: any = await client.collections.getCollections();
    const favouriteCollection: any = collections.entries[0];
    const collectionItems: any = await client.collections.getCollectionItems(favouriteCollection.id);
    const folder: any = await client.folders.createFolder({ name: getUuid(), parent: { id: "0" } satisfies CreateFolderRequestBodyArgParentField } satisfies CreateFolderRequestBodyArg);
    await client.folders.updateFolderById(folder.id, { collections: [{ id: favouriteCollection.id }] } satisfies UpdateFolderByIdRequestBodyArg)
    const collectionItemsAfterUpdate: any = await client.collections.getCollectionItems(favouriteCollection.id);
    if (!(collectionItemsAfterUpdate.entries.length == collectionItems.entries.length + 1)) {
        throw "Assertion failed";
    }
    await client.folders.updateFolderById(folder.id, { collections: [] } satisfies UpdateFolderByIdRequestBodyArg)
    const collectionItemsAfterRemove: any = await client.collections.getCollectionItems(favouriteCollection.id);
    if (!(collectionItemsAfterRemove.entries.length == collectionItems.entries.length)) {
        throw "Assertion failed";
    }
    await client.folders.deleteFolderById(folder.id)
});
export {};
