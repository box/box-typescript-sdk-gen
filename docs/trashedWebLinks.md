# TrashedWebLinksManager


- [Restore web link](#restore-web-link)
- [Get trashed web link](#get-trashed-web-link)
- [Permanently remove web link](#permanently-remove-web-link)

## Restore web link

Restores a web link that has been moved to the trash.

An optional new parent ID can be provided to restore the  web link to in case
the original folder has been deleted.

This operation is performed by calling function `createWebLinkById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-web-links-id/).

*Currently we don't have an example for calling `createWebLinkById` in integration tests*

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- requestBody `CreateWebLinkByIdRequestBodyArg`
  - Request body of createWebLinkById method
- queryParams `CreateWebLinkByIdQueryParamsArg`
  - Query parameters of createWebLinkById method
- headers `CreateWebLinkByIdHeadersArg`
  - Headers of createWebLinkById method


### Returns

This function returns a value of type `TrashWebLinkRestored`.

Returns a web link object when it has been restored.


## Get trashed web link

Retrieves a web link that has been moved to the trash.

This operation is performed by calling function `getWebLinkTrash`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-web-links-id-trash/).

*Currently we don't have an example for calling `getWebLinkTrash` in integration tests*

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- queryParams `GetWebLinkTrashQueryParamsArg`
  - Query parameters of getWebLinkTrash method
- headers `GetWebLinkTrashHeadersArg`
  - Headers of getWebLinkTrash method


### Returns

This function returns a value of type `TrashWebLink`.

Returns the web link that was trashed,
including information about when the it
was moved to the trash.


## Permanently remove web link

Permanently deletes a web link that is in the trash.
This action cannot be undone.

This operation is performed by calling function `deleteWebLinkTrash`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-web-links-id-trash/).

*Currently we don't have an example for calling `deleteWebLinkTrash` in integration tests*

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- headers `DeleteWebLinkTrashHeadersArg`
  - Headers of deleteWebLinkTrash method


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the web link was
permanently deleted.


