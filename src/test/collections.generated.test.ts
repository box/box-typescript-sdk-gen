import { serializeCollections } from '../schemas.generated.js';
import { deserializeCollections } from '../schemas.generated.js';
import { serializeCollection } from '../schemas.generated.js';
import { deserializeCollection } from '../schemas.generated.js';
import { serializeItems } from '../schemas.generated.js';
import { deserializeItems } from '../schemas.generated.js';
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { serializeUpdateFolderByIdRequestBody } from '../managers/folders.generated.js';
import { deserializeUpdateFolderByIdRequestBody } from '../managers/folders.generated.js';
import { serializeUpdateFolderByIdRequestBodyCollectionsField } from '../managers/folders.generated.js';
import { deserializeUpdateFolderByIdRequestBodyCollectionsField } from '../managers/folders.generated.js';
import { BoxClient } from '../client.generated.js';
import { Collections } from '../schemas.generated.js';
import { Collection } from '../schemas.generated.js';
import { Items } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBody } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { UpdateFolderByIdRequestBody } from '../managers/folders.generated.js';
import { UpdateFolderByIdRequestBodyCollectionsField } from '../managers/folders.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
const client: BoxClient = getDefaultClient();
test('testCollections', async function testCollections(): Promise<any> {
  const collections: Collections = await client.collections.getCollections();
  const favouriteCollection: Collection = collections.entries![0];
  const collectionItems: Items = await client.collections.getCollectionItems(
    favouriteCollection.id!
  );
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  await client.folders.updateFolderById(folder.id, {
    collections: [
      {
        id: favouriteCollection.id,
      } satisfies UpdateFolderByIdRequestBodyCollectionsField,
    ],
  } satisfies UpdateFolderByIdRequestBody);
  const collectionItemsAfterUpdate: Items =
    await client.collections.getCollectionItems(favouriteCollection.id!);
  if (
    !(
      collectionItemsAfterUpdate.entries!.length ==
      collectionItems.entries!.length + 1
    )
  ) {
    throw new Error('Assertion failed');
  }
  await client.folders.updateFolderById(folder.id, {
    collections: [],
  } satisfies UpdateFolderByIdRequestBody);
  const collectionItemsAfterRemove: Items =
    await client.collections.getCollectionItems(favouriteCollection.id!);
  if (
    !(
      collectionItemsAfterRemove.entries!.length ==
      collectionItems.entries!.length
    )
  ) {
    throw new Error('Assertion failed');
  }
  await client.folders.deleteFolderById(folder.id);
});
export {};
