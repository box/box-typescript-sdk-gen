# CollectionsManager

## List all collections

Retrieves all collections for a given user.

Currently, only the &#x60;favorites&#x60; collection
is supported.

This operation is performed by calling function `getCollections`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-collections/).

*Currently we don't have an example for calling `getCollections` in integration tests*

### Arguments

- queryParams `GetCollectionsQueryParamsArg`
  - Used as queryParams for the API call


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
  - The ID of the collection.
  - Used as `collection_id` in path `path` of the API call
- queryParams `GetCollectionItemsQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `Items`.

Returns an array of items in the collection.


