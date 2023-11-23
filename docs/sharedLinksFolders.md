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

<!-- sample get_shared_items#folders -->

```ts
await userClient.sharedLinksFolders.getSharedItemFolders(
  {} satisfies GetSharedItemFoldersQueryParamsArg,
  new GetSharedItemFoldersHeadersArg({
    boxapi: ''.concat(
      'shared_link=',
      folderFromApi.sharedLink!.url,
      '&shared_link_password=incorrectPassword'
    ) as string,
  })
);
```

### Arguments

- queryParams `GetSharedItemFoldersQueryParamsArg`
  - Query parameters of getSharedItemFolders method
- headers `GetSharedItemFoldersHeadersArg`
  - Headers of getSharedItemFolders method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FolderFull`.

Returns a full folder resource if the shared link is valid and
the user has access to it.

## Get shared link for folder

Gets the information for a shared link on a folder.

This operation is performed by calling function `getFolderGetSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-get-shared-link/).

<!-- sample get_folders_id#get_shared_link -->

```ts
await client.sharedLinksFolders.getFolderGetSharedLink(folder.id, {
  fields: 'shared_link',
} satisfies GetFolderGetSharedLinkQueryParamsArg);
```

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- queryParams `GetFolderGetSharedLinkQueryParamsArg`
  - Query parameters of getFolderGetSharedLink method
- headers `GetFolderGetSharedLinkHeadersArg`
  - Headers of getFolderGetSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FolderFull`.

Returns the base representation of a folder with the
additional shared link information.

## Add shared link to folder

Adds a shared link to a folder.

This operation is performed by calling function `updateFolderAddSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-add-shared-link/).

<!-- sample put_folders_id#add_shared_link -->

```ts
await client.sharedLinksFolders.updateFolderAddSharedLink(
  folder.id,
  {
    sharedLink: {
      access:
        'open' as UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField,
      password: 'Secret123@',
    } satisfies UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField,
  } satisfies UpdateFolderAddSharedLinkRequestBodyArg,
  { fields: 'shared_link' } satisfies UpdateFolderAddSharedLinkQueryParamsArg
);
```

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- requestBody `UpdateFolderAddSharedLinkRequestBodyArg`
  - Request body of updateFolderAddSharedLink method
- queryParams `UpdateFolderAddSharedLinkQueryParamsArg`
  - Query parameters of updateFolderAddSharedLink method
- headers `UpdateFolderAddSharedLinkHeadersArg`
  - Headers of updateFolderAddSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FolderFull`.

Returns the base representation of a folder with a new shared
link attached.

## Update shared link on folder

Updates a shared link on a folder.

This operation is performed by calling function `updateFolderUpdateSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-update-shared-link/).

<!-- sample put_folders_id#update_shared_link -->

```ts
await client.sharedLinksFolders.updateFolderUpdateSharedLink(
  folder.id,
  {
    sharedLink: {
      access:
        'collaborators' as UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField,
    } satisfies UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField,
  } satisfies UpdateFolderUpdateSharedLinkRequestBodyArg,
  { fields: 'shared_link' } satisfies UpdateFolderUpdateSharedLinkQueryParamsArg
);
```

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- requestBody `UpdateFolderUpdateSharedLinkRequestBodyArg`
  - Request body of updateFolderUpdateSharedLink method
- queryParams `UpdateFolderUpdateSharedLinkQueryParamsArg`
  - Query parameters of updateFolderUpdateSharedLink method
- headers `UpdateFolderUpdateSharedLinkHeadersArg`
  - Headers of updateFolderUpdateSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

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
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FolderFull`.

Returns a basic representation of a folder, with the shared link removed.
