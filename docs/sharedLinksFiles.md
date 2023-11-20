# SharedLinksFilesManager

- [Find file for shared link](#find-file-for-shared-link)
- [Get shared link for file](#get-shared-link-for-file)
- [Add shared link to file](#add-shared-link-to-file)
- [Update shared link on file](#update-shared-link-on-file)
- [Remove shared link from file](#remove-shared-link-from-file)

## Find file for shared link

Returns the file represented by a shared link.

A shared file can be represented by a shared link,
which can originate within the current enterprise or within another.

This endpoint allows an application to retrieve information about a
shared file when only given a shared link.

The `shared_link_permission_options` array field can be returned
by requesting it in the `fields` query parameter.

This operation is performed by calling function `getSharedItems`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shared-items/).

<!-- sample get_shared_items -->

```ts
await userClient.sharedLinksFiles.getSharedItems(
  {} satisfies GetSharedItemsQueryParamsArg,
  new GetSharedItemsHeadersArg({
    boxapi: ''.concat(
      'shared_link=',
      fileFromApi.sharedLink!.url,
      '&shared_link_password=incorrectPassword'
    ) as string,
  })
);
```

### Arguments

- queryParams `GetSharedItemsQueryParamsArg`
  - Query parameters of getSharedItems method
- headers `GetSharedItemsHeadersArg`
  - Headers of getSharedItems method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FileFull`.

Returns a full file resource if the shared link is valid and
the user has access to it.

## Get shared link for file

Gets the information for a shared link on a file.

This operation is performed by calling function `getFileGetSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-id-get-shared-link/).

<!-- sample get_files_id#get_shared_link -->

```ts
await client.sharedLinksFiles.getFileGetSharedLink(fileId, {
  fields: 'shared_link',
} satisfies GetFileGetSharedLinkQueryParamsArg);
```

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- queryParams `GetFileGetSharedLinkQueryParamsArg`
  - Query parameters of getFileGetSharedLink method
- headers `GetFileGetSharedLinkHeadersArg`
  - Headers of getFileGetSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FileFull`.

Returns the base representation of a file with the
additional shared link information.

## Add shared link to file

Adds a shared link to a file.

This operation is performed by calling function `updateFileAddSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-files-id-add-shared-link/).

<!-- sample put_files_id#add_shared_link -->

```ts
await client.sharedLinksFiles.updateFileAddSharedLink(
  fileId,
  {
    sharedLink: {
      access:
        'open' as UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField,
      password: 'Secret123@',
    } satisfies UpdateFileAddSharedLinkRequestBodyArgSharedLinkField,
  } satisfies UpdateFileAddSharedLinkRequestBodyArg,
  { fields: 'shared_link' } satisfies UpdateFileAddSharedLinkQueryParamsArg
);
```

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- requestBody `UpdateFileAddSharedLinkRequestBodyArg`
  - Request body of updateFileAddSharedLink method
- queryParams `UpdateFileAddSharedLinkQueryParamsArg`
  - Query parameters of updateFileAddSharedLink method
- headers `UpdateFileAddSharedLinkHeadersArg`
  - Headers of updateFileAddSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FileFull`.

Returns the base representation of a file with a new shared
link attached.

## Update shared link on file

Updates a shared link on a file.

This operation is performed by calling function `updateFileUpdateSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-files-id-update-shared-link/).

<!-- sample put_files_id#update_shared_link -->

```ts
await client.sharedLinksFiles.updateFileUpdateSharedLink(
  fileId,
  {
    sharedLink: {
      access:
        'collaborators' as UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField,
    } satisfies UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField,
  } satisfies UpdateFileUpdateSharedLinkRequestBodyArg,
  { fields: 'shared_link' } satisfies UpdateFileUpdateSharedLinkQueryParamsArg
);
```

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- requestBody `UpdateFileUpdateSharedLinkRequestBodyArg`
  - Request body of updateFileUpdateSharedLink method
- queryParams `UpdateFileUpdateSharedLinkQueryParamsArg`
  - Query parameters of updateFileUpdateSharedLink method
- headers `UpdateFileUpdateSharedLinkHeadersArg`
  - Headers of updateFileUpdateSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FileFull`.

Returns a basic representation of the file, with the updated shared
link attached.

## Remove shared link from file

Removes a shared link from a file.

This operation is performed by calling function `updateFileRemoveSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-files-id-remove-shared-link/).

_Currently we don't have an example for calling `updateFileRemoveSharedLink` in integration tests_

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- requestBody `UpdateFileRemoveSharedLinkRequestBodyArg`
  - Request body of updateFileRemoveSharedLink method
- queryParams `UpdateFileRemoveSharedLinkQueryParamsArg`
  - Query parameters of updateFileRemoveSharedLink method
- headers `UpdateFileRemoveSharedLinkHeadersArg`
  - Headers of updateFileRemoveSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FileFull`.

Returns a basic representation of a file, with the shared link removed.
