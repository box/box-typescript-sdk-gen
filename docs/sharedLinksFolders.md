# SharedLinksFoldersManager

## Find folder for shared link

Return the folder represented by a shared link.

A shared folder can be represented by a shared link,
which can originate within the current enterprise or within another.

This endpoint allows an application to retrieve information about a
shared folder when only given a shared link.

This operation is performed by calling function `getSharedItemFolders`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shared-items-folders/).

*Currently we don't have an example for calling `getSharedItemFolders` in integration tests*

### Arguments

- queryParams `GetSharedItemFoldersQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetSharedItemFoldersHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `FolderFull`.

Returns a full folder resource if the shared link is valid and
the user has access to it.


## Get shared link for folder

Gets the information for a shared link on a folder.

This operation is performed by calling function `getFolderGetSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-get-shared-link/).

*Currently we don't have an example for calling `getFolderGetSharedLink` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
  - Used as `folder_id` in path `path` of the API call
- queryParams `GetFolderGetSharedLinkQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `FolderFull`.

Returns the base representation of a folder with the
additional shared link information.


## Add shared link to folder

Adds a shared link to a folder.

This operation is performed by calling function `updateFolderAddSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-add-shared-link/).

*Currently we don't have an example for calling `updateFolderAddSharedLink` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
  - Used as `folder_id` in path `path` of the API call
- requestBody `UpdateFolderAddSharedLinkRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `UpdateFolderAddSharedLinkQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `FolderFull`.

Returns the base representation of a folder with a new shared
link attached.


## Update shared link on folder

Updates a shared link on a folder.

This operation is performed by calling function `updateFolderUpdateSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-update-shared-link/).

*Currently we don't have an example for calling `updateFolderUpdateSharedLink` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
  - Used as `folder_id` in path `path` of the API call
- requestBody `UpdateFolderUpdateSharedLinkRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `UpdateFolderUpdateSharedLinkQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `FolderFull`.

Returns a basic representation of the folder, with the updated shared
link attached.


## Remove shared link from folder

Removes a shared link from a folder.

This operation is performed by calling function `updateFolderRemoveSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-remove-shared-link/).

*Currently we don't have an example for calling `updateFolderRemoveSharedLink` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
  - Used as `folder_id` in path `path` of the API call
- requestBody `UpdateFolderRemoveSharedLinkRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `UpdateFolderRemoveSharedLinkQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `FolderFull`.

Returns a basic representation of a folder, with the shared link removed.


