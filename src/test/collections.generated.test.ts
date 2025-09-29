import { serializeCollections } from '@/schemas/collections.generated';
import { deserializeCollections } from '@/schemas/collections.generated';
import { serializeCollection } from '@/schemas/collection.generated';
import { deserializeCollection } from '@/schemas/collection.generated';
import { serializeItemsOffsetPaginated } from '@/schemas/itemsOffsetPaginated.generated';
import { deserializeItemsOffsetPaginated } from '@/schemas/itemsOffsetPaginated.generated';
import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { serializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { serializeUpdateFolderByIdRequestBody } from '@/managers/folders.generated';
import { deserializeUpdateFolderByIdRequestBody } from '@/managers/folders.generated';
import { serializeUpdateFolderByIdRequestBodyCollectionsField } from '@/managers/folders.generated';
import { deserializeUpdateFolderByIdRequestBodyCollectionsField } from '@/managers/folders.generated';
import { UpdateFolderByIdOptionalsInput } from '@/managers/folders.generated';
import { UpdateFolderByIdOptionals } from '@/managers/folders.generated';
import { BoxClient } from '@/client.generated';
import { Collections } from '@/schemas/collections.generated';
import { Collection } from '@/schemas/collection.generated';
import { ItemsOffsetPaginated } from '@/schemas/itemsOffsetPaginated.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { CreateFolderRequestBody } from '@/managers/folders.generated';
import { CreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { UpdateFolderByIdRequestBody } from '@/managers/folders.generated';
import { UpdateFolderByIdRequestBodyCollectionsField } from '@/managers/folders.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testCollections', async function testCollections(): Promise<any> {
  const collections: Collections = await client.collections.getCollections();
  const favouriteCollection: Collection =
    await client.collections.getCollectionById(collections.entries![0].id!);
  if (!((toString(favouriteCollection.type!) as string) == 'collection')) {
    throw new Error('Assertion failed');
  }
  if (
    !((toString(favouriteCollection.collectionType!) as string) == 'favorites')
  ) {
    throw new Error('Assertion failed');
  }
  const collectionItems: ItemsOffsetPaginated =
    await client.collections.getCollectionItems(favouriteCollection.id!);
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  await client.folders.updateFolderById(folder.id, {
    requestBody: {
      collections: [
        {
          id: favouriteCollection.id,
        } satisfies UpdateFolderByIdRequestBodyCollectionsField,
      ],
    } satisfies UpdateFolderByIdRequestBody,
  } satisfies UpdateFolderByIdOptionalsInput);
  const collectionItemsAfterUpdate: ItemsOffsetPaginated =
    await client.collections.getCollectionItems(favouriteCollection.id!);
  if (!(collectionItemsAfterUpdate.totalCount! > 0)) {
    throw new Error('Assertion failed');
  }
  await client.folders.updateFolderById(folder.id, {
    requestBody: { collections: [] } satisfies UpdateFolderByIdRequestBody,
  } satisfies UpdateFolderByIdOptionalsInput);
  await client.folders.deleteFolderById(folder.id);
});
export {};
