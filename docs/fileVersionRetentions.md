# FileVersionRetentionsManager

- [List file version retentions](#list-file-version-retentions)
- [Get retention on file](#get-retention-on-file)

## List file version retentions

Retrieves all file version retentions for the given enterprise.

This operation is performed by calling function `getFileVersionRetentions`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-file-version-retentions/).

_Currently we don't have an example for calling `getFileVersionRetentions` in integration tests_

### Arguments

- queryParams `GetFileVersionRetentionsQueryParamsArg`
  - Query parameters of getFileVersionRetentions method
- headers `GetFileVersionRetentionsHeadersArg`
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

_Currently we don't have an example for calling `getFileVersionRetentionById` in integration tests_

### Arguments

- fileVersionRetentionId `string`
  - The ID of the file version retention Example: "3424234"
- headers `GetFileVersionRetentionByIdHeadersArg`
  - Headers of getFileVersionRetentionById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FileVersionRetention`.

Returns a file version retention object.
