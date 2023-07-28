# FileVersionRetentionsManager

## List file version retentions

Retrieves all file version retentions for the given enterprise.

This operation is performed by calling function `getFileVersionRetentions`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-file-version-retentions/).

*Currently we don't have an example for calling `getFileVersionRetentions` in integration tests*

### Arguments

- queryParams `GetFileVersionRetentionsQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `FileVersionRetentions`.

Returns a list of all file version retentions for the enterprise.


## Get retention on file

Returns information about a file version retention.

This operation is performed by calling function `getFileVersionRetentionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-file-version-retentions-id/).

*Currently we don't have an example for calling `getFileVersionRetentionById` in integration tests*

### Arguments

- fileVersionRetentionId `string`
  - The ID of the file version retention
  - Used as `file_version_retention_id` in path `path` of the API call


### Returns

This function returns a value of type `FileVersionRetention`.

Returns a file version retention object.


