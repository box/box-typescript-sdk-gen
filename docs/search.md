# SearchManager

## Query files/folders by metadata

Create a search using SQL-like syntax to return items that match specific
metadata.

By default, this endpoint returns only the most basic info about the items for
which the query matches. To get additional fields for each item, including any
of the metadata, use the &#x60;fields&#x60; attribute in the query.

This operation is performed by calling function `createMetadataQueryExecuteRead`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-metadata-queries-execute-read/).

*Currently we don't have an example for calling `createMetadataQueryExecuteRead` in integration tests*

### Arguments

- requestBody `MetadataQuery`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `MetadataQueryResults`.

Returns a list of files and folders that match this metadata query.


## List metadata query indices

Retrieves the metadata query indices for a given scope and template key.

This operation is performed by calling function `getMetadataQueryIndices`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-query-indices/).

*Currently we don't have an example for calling `getMetadataQueryIndices` in integration tests*

### Arguments

- queryParams `GetMetadataQueryIndicesQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `MetadataQueryIndices`.

Returns a collection of metadata query indices for scope and template key.


## Search for content

Searches for files, folders, web links, and shared files across the
users content or across the entire enterprise.

This operation is performed by calling function `getSearch`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-search/).

*Currently we don't have an example for calling `getSearch` in integration tests*

### Arguments

- queryParams `undefined | GetSearchQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `SearchResultsOrSearchResultsWithSharedLinks`.

Returns a collection of search results. If there are no matching
search results, the &#x60;entries&#x60; array will be empty.

