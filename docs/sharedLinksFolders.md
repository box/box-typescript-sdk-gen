# SharedLinksFoldersManager

- [Find folder for shared link](#find-folder-for-shared-link)
- [Get shared link for folder](#get-shared-link-for-folder)
- [Add shared link to folder](#add-shared-link-to-folder)
- [Update shared link on folder](#update-shared-link-on-folder)
- [Remove shared link from folder](#remove-shared-link-from-folder)

## Find folder for shared link

Return the folder represented by a shared link.

A shared folder can be represented by a shared link,
which can originate within the current enterprise or within another.

This endpoint allows an application to retrieve information about a
shared folder when only given a shared link.

This operation is performed by calling function `getSharedItemFolders`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shared-items-folders/).

_Currently we don't have an example for calling `getSharedItemFolders` in integration tests_

### Arguments

- queryParams `GetSharedItemFoldersQueryParamsArg`
  - Query parameters of getSharedItemFolders method
- headers `GetSharedItemFoldersHeadersArg`
  - Headers of getSharedItemFolders method

### Returns

This function returns a value of type `FolderFull`.

Returns a full folder resource if the shared link is valid and
the user has access to it.

## Get shared link for folder

Gets the information for a shared link on a folder.

This operation is performed by calling function `getFolderGetSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-get-shared-link/).

_Currently we don't have an example for calling `getFolderGetSharedLink` in integration tests_

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- queryParams `GetFolderGetSharedLinkQueryParamsArg`
  - Query parameters of getFolderGetSharedLink method
- headers `GetFolderGetSharedLinkHeadersArg`
  - Headers of getFolderGetSharedLink method

### Returns

This function returns a value of type `FolderFull`.

Returns the base representation of a folder with the
additional shared link information.

## Add shared link to folder

Adds a shared link to a folder.

This operation is performed by calling function `updateFolderAddSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-add-shared-link/).

_Currently we don't have an example for calling `updateFolderAddSharedLink` in integration tests_

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- requestBody `UpdateFolderAddSharedLinkRequestBodyArg`
  - Request body of updateFolderAddSharedLink method
- queryParams `UpdateFolderAddSharedLinkQueryParamsArg`
  - Query parameters of updateFolderAddSharedLink method
- headers `UpdateFolderAddSharedLinkHeadersArg`
  - Headers of updateFolderAddSharedLink method

### Returns

This function returns a value of type `FolderFull`.

Returns the base representation of a folder with a new shared
link attached.

## Update shared link on folder

Updates a shared link on a folder.

This operation is performed by calling function `updateFolderUpdateSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-update-shared-link/).

_Currently we don't have an example for calling `updateFolderUpdateSharedLink` in integration tests_

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- requestBody `UpdateFolderUpdateSharedLinkRequestBodyArg`
  - Request body of updateFolderUpdateSharedLink method
- queryParams `UpdateFolderUpdateSharedLinkQueryParamsArg`
  - Query parameters of updateFolderUpdateSharedLink method
- headers `UpdateFolderUpdateSharedLinkHeadersArg`
  - Headers of updateFolderUpdateSharedLink method

### Returns

This function returns a value of type `FolderFull`.

Returns a basic representation of the folder, with the updated shared
link attached.

## Remove shared link from folder

Removes a shared link from a folder.

This operation is performed by calling function `updateFolderRemoveSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-remove-shared-link/).

_Currently we don't have an example for calling `updateFolderRemoveSharedLink` in integration tests_

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- requestBody `UpdateFolderRemoveSharedLinkRequestBodyArg`
  - Request body of updateFolderRemoveSharedLink method
- queryParams `UpdateFolderRemoveSharedLinkQueryParamsArg`
  - Query parameters of updateFolderRemoveSharedLink method
- headers `UpdateFolderRemoveSharedLinkHeadersArg`
  - Headers of updateFolderRemoveSharedLink method

### Returns

This function returns a value of type `FolderFull`.

Returns a basic representation of a folder, with the shared link removed.
