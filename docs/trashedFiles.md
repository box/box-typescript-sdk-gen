# TrashedFilesManager

## Restore file

Restores a file that has been moved to the trash.

An optional new parent ID can be provided to restore the file to in case the
original folder has been deleted.

This operation is performed by calling function `restoreFileFromTrash`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-id/).

*Currently we don't have an example for calling `restoreFileFromTrash` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
  - Used as `file_id` in path `path` of the API call
- requestBody `RestoreFileFromTrashRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `undefined | RestoreFileFromTrashQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `TrashFileRestored`.

Returns a file object when the file has been restored.


## Get trashed file

Retrieves a file that has been moved to the trash.

Please note that only if the file itself has been moved to the
trash can it be retrieved with this API call. If instead one of
its parent folders was moved to the trash, only that folder
can be inspected using the
[&#x60;GET /folders/:id/trash&#x60;](e://get_folders_id_trash) API.

To list all items that have been moved to the trash, please
use the [&#x60;GET /folders/trash/items&#x60;](e://get-folders-trash-items/)
API.

This operation is performed by calling function `getFileTrash`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-id-trash/).

<!-- sample get_files_id_trash -->
```ts
await client.trashedFiles.getFileTrash(uploadedFile.id)
```

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
  - Used as `file_id` in path `path` of the API call
- queryParams `undefined | GetFileTrashQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `TrashFile`.

Returns the file that was trashed,
including information about when the it
was moved to the trash.


## Permanently remove file

Permanently deletes a file that is in the trash.
This action cannot be undone.

This operation is performed by calling function `deleteFileTrash`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-files-id-trash/).

*Currently we don't have an example for calling `deleteFileTrash` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
  - Used as `file_id` in path `path` of the API call

