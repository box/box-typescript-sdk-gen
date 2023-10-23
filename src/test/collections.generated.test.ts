import { serializeCollections } from '../schemas.generated.js';
import { deserializeCollections } from '../schemas.generated.js';
import { serializeCollection } from '../schemas.generated.js';
import { deserializeCollection } from '../schemas.generated.js';
import { serializeItems } from '../schemas.generated.js';
import { deserializeItems } from '../schemas.generated.js';
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { serializeUpdateFolderByIdRequestBodyArg } from '../managers/folders.generated.js';
import { deserializeUpdateFolderByIdRequestBodyArg } from '../managers/folders.generated.js';
import { serializeUpdateFolderByIdRequestBodyArgCollectionsField } from '../managers/folders.generated.js';
import { deserializeUpdateFolderByIdRequestBodyArgCollectionsField } from '../managers/folders.generated.js';
import { BoxClient } from '../client.generated.js';
import { Collections } from '../schemas.generated.js';
import { Collection } from '../schemas.generated.js';
import { Items } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { UpdateFolderByIdRequestBodyArg } from '../managers/folders.generated.js';
import { UpdateFolderByIdRequestBodyArgCollectionsField } from '../managers/folders.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
const client: BoxClient = getDefaultClient();
test('testCollections', async function testCollections(): Promise<any> {
  const collections: Collections = await client.collections.getCollections();
  const favouriteCollection: Collection = collections.entries![0];
  const collectionItems: Items = await client.collections.getCollectionItems(
    favouriteCollection.id!
  );
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyArgParentField,
  } satisfies CreateFolderRequestBodyArg);
  await client.folders.updateFolderById(folder.id, {
    collections: [
      {
        id: favouriteCollection.id,
      } satisfies UpdateFolderByIdRequestBodyArgCollectionsField,
    ],
  } satisfies UpdateFolderByIdRequestBodyArg);
  const collectionItemsAfterUpdate: Items =
    await client.collections.getCollectionItems(favouriteCollection.id!);
  if (
    !(
      collectionItemsAfterUpdate.entries!.length ==
      collectionItems.entries!.length + 1
    )
  ) {
    throw 'Assertion failed';
  }
  await client.folders.updateFolderById(folder.id, {
    collections: [],
  } satisfies UpdateFolderByIdRequestBodyArg);
  const collectionItemsAfterRemove: Items =
    await client.collections.getCollectionItems(favouriteCollection.id!);
  if (
    !(
      collectionItemsAfterRemove.entries!.length ==
      collectionItems.entries!.length
    )
  ) {
    throw 'Assertion failed';
  }
  await client.folders.deleteFolderById(folder.id);
});
export {};
