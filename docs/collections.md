# CollectionsManager

- [List all collections](#list-all-collections)
- [List collection items](#list-collection-items)

## List all collections

Retrieves all collections for a given user.

Currently, only the `favorites` collection
is supported.

This operation is performed by calling function `getCollections`.

```ts
await client.collections.getCollections();
```

### Arguments

- queryParams `GetCollectionsQueryParams`
  - Query parameters of getCollections method
- headersInput `GetCollectionsHeadersInput`
  - Headers of getCollections method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `Collections`.

Returns all collections for the given user

## List collection items

Retrieves the files and/or folders contained within
this collection.

This operation is performed by calling function `getCollectionItems`.

```ts
await client.collections.getCollectionItems(favouriteCollection.id!);
```

### Arguments

- collectionId `string`
  - The ID of the collection. Example: "926489"
- optionalsInput `GetCollectionItemsOptionalsInput`
  -

### Returns

This function returns a value of type `Items`.

Returns an array of items in the collection.
