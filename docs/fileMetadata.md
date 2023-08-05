# FileMetadataManager


- [List metadata instances on file](#list-metadata-instances-on-file)
- [Get metadata instance on file](#get-metadata-instance-on-file)
- [Create metadata instance on file](#create-metadata-instance-on-file)
- [Remove metadata instance from file](#remove-metadata-instance-from-file)

## List metadata instances on file

Retrieves all metadata for a given file.

This operation is performed by calling function `getFileMetadata`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-id-metadata/).

*Currently we don't have an example for calling `getFileMetadata` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- headers `GetFileMetadataHeadersArg`
  - Headers of getFileMetadata method


### Returns

This function returns a value of type `Metadatas`.

Returns all the metadata associated with a file.

This API does not support pagination and will therefore always return
all of the metadata associated to the file.


## Get metadata instance on file

Retrieves the instance of a metadata template that has been applied to a
file.

This operation is performed by calling function `getFileMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-id-metadata-id-id/).

*Currently we don't have an example for calling `getFileMetadataById` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- scope `GetFileMetadataByIdScopeArg`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- headers `GetFileMetadataByIdHeadersArg`
  - Headers of getFileMetadataById method


### Returns

This function returns a value of type `MetadataFull`.

An instance of the metadata template that includes
additional "key:value" pairs defined by the user or
an application.


## Create metadata instance on file

Applies an instance of a metadata template to a file.

In most cases only values that are present in the metadata template
will be accepted, except for the `global.properties` template which accepts
any key-value pair.

This operation is performed by calling function `createFileMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-id-metadata-id-id/).

*Currently we don't have an example for calling `createFileMetadataById` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- scope `CreateFileMetadataByIdScopeArg`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- requestBody `CreateFileMetadataByIdRequestBodyArg`
  - Request body of createFileMetadataById method
- headers `CreateFileMetadataByIdHeadersArg`
  - Headers of createFileMetadataById method


### Returns

This function returns a value of type `Metadata`.

Returns the instance of the template that was applied to the file,
including the data that was applied to the template.


## Remove metadata instance from file

Deletes a piece of file metadata.

This operation is performed by calling function `deleteFileMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-files-id-metadata-id-id/).

*Currently we don't have an example for calling `deleteFileMetadataById` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- scope `DeleteFileMetadataByIdScopeArg`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- headers `DeleteFileMetadataByIdHeadersArg`
  - Headers of deleteFileMetadataById method


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the metadata is
successfully deleted.


