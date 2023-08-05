# CollectionsManager


- [List all collections](#list-all-collections)
- [List collection items](#list-collection-items)

## List all collections

Retrieves all collections for a given user.

Currently, only the `favorites` collection
is supported.

This operation is performed by calling function `getCollections`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-collections/).

*Currently we don't have an example for calling `getCollections` in integration tests*

### Arguments

- queryParams `GetCollectionsQueryParamsArg`
  - Query parameters of getCollections method
- headers `GetCollectionsHeadersArg`
  - Headers of getCollections method


### Returns

This function returns a value of type `Collections`.

Returns all collections for the given user


## List collection items

Retrieves the files and/or folders contained within
this collection.

This operation is performed by calling function `getCollectionItems`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-collections-id-items/).

*Currently we don't have an example for calling `getCollectionItems` in integration tests*

### Arguments

- collectionId `string`
  - The ID of the collection. Example: "926489"
- queryParams `GetCollectionItemsQueryParamsArg`
  - Query parameters of getCollectionItems method
- headers `GetCollectionItemsHeadersArg`
  - Headers of getCollectionItems method


### Returns

This function returns a value of type `Items`.

Returns an array of items in the collection.


