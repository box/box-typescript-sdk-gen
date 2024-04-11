# FileVersionRetentionsManager

- [List file version retentions](#list-file-version-retentions)
- [Get retention on file](#get-retention-on-file)

## List file version retentions

Retrieves all file version retentions for the given enterprise.

This operation is performed by calling function `getFileVersionRetentions`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-file-version-retentions/).

<!-- sample get_file_version_retentions -->

```ts
await client.fileVersionRetentions.getFileVersionRetentions();
```

### Arguments

- queryParams `GetFileVersionRetentionsQueryParams`
  - Query parameters of getFileVersionRetentions method
- headersInput `GetFileVersionRetentionsHeadersInput`
  - Headers of getFileVersionRetentions method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FileVersionRetentions`.

Returns a list of all file version retentions for the enterprise.

## Get retention on file

Returns information about a file version retention.

This operation is performed by calling function `getFileVersionRetentionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-file-version-retentions-id/).

<!-- sample get_file_version_retentions_id -->

```ts
await client.fileVersionRetentions.getFileVersionRetentionById(
  fileVersionRetention.id!
);
```

### Arguments

- fileVersionRetentionId `string`
  - The ID of the file version retention Example: "3424234"
- headersInput `GetFileVersionRetentionByIdHeadersInput`
  - Headers of getFileVersionRetentionById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FileVersionRetention`.

Returns a file version retention object.
