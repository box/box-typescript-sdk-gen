# TrashedWebLinksManager

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
  - The ID of the web link.
  - Used as `web_link_id` in path `path` of the API call
- requestBody `CreateWebLinkByIdRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `CreateWebLinkByIdQueryParamsArg`
  - Used as queryParams for the API call
- headers `CreateWebLinkByIdHeadersArg`
  - Used as headers for the API call


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
  - The ID of the web link.
  - Used as `web_link_id` in path `path` of the API call
- queryParams `GetWebLinkTrashQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetWebLinkTrashHeadersArg`
  - Used as headers for the API call


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
  - The ID of the web link.
  - Used as `web_link_id` in path `path` of the API call
- headers `DeleteWebLinkTrashHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the web link was
permanently deleted.


