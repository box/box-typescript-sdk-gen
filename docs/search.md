# SearchManager

- [Query files/folders by metadata](#query-files-folders-by-metadata)
- [List metadata query indices](#list-metadata-query-indices)
- [Search for content](#search-for-content)

## Query files/folders by metadata

Create a search using SQL-like syntax to return items that match specific
metadata.

By default, this endpoint returns only the most basic info about the items for
which the query matches. To get additional fields for each item, including any
of the metadata, use the `fields` attribute in the query.

This operation is performed by calling function `createMetadataQueryExecuteRead`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-metadata-queries-execute-read/).

<!-- sample post_metadata_queries_execute_read -->

```ts
await client.search.createMetadataQueryExecuteRead({
  ancestorFolderId: '0',
  from: searchFrom,
  query: 'testName >= :value',
  queryParams: { ['value']: '0.0' },
} satisfies MetadataQuery);
```

### Arguments

- requestBody `MetadataQuery`
  - Request body of createMetadataQueryExecuteRead method
- headers `CreateMetadataQueryExecuteReadHeadersArg`
  - Headers of createMetadataQueryExecuteRead method

### Returns

This function returns a value of type `MetadataQueryResults`.

Returns a list of files and folders that match this metadata query.

## List metadata query indices

Retrieves the metadata query indices for a given scope and template key.

This operation is performed by calling function `getMetadataQueryIndices`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-query-indices/).

<!-- sample get_metadata_query_indices -->

```ts
await client.search.getMetadataQueryIndices({
  scope: 'enterprise' as GetMetadataQueryIndicesQueryParamsArgScopeField,
  templateKey: templateKey,
} satisfies GetMetadataQueryIndicesQueryParamsArg);
```

### Arguments

- queryParams `GetMetadataQueryIndicesQueryParamsArg`
  - Query parameters of getMetadataQueryIndices method
- headers `GetMetadataQueryIndicesHeadersArg`
  - Headers of getMetadataQueryIndices method

### Returns

This function returns a value of type `MetadataQueryIndices`.

Returns a collection of metadata query indices for scope and template key.

## Search for content

Searches for files, folders, web links, and shared files across the
users content or across the entire enterprise.

This operation is performed by calling function `getSearch`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-search/).

<!-- sample get_search -->

```ts
await client.search.getSearch({
  ancestorFolderIds: ['0' as ''],
  query: keyword,
  trashContent: 'non_trashed_only' as GetSearchQueryParamsArgTrashContentField,
  includeRecentSharedLinks: true,
} satisfies GetSearchQueryParamsArg);
```

### Arguments

- queryParams `GetSearchQueryParamsArg`
  - Query parameters of getSearch method
- headers `GetSearchHeadersArg`
  - Headers of getSearch method

### Returns

This function returns a value of type `SearchResultsOrSearchResultsWithSharedLinks`.

Returns a collection of search results. If there are no matching
search results, the `entries` array will be empty.
