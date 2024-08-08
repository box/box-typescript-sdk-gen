# FileRequestsManager

- [Get file request](#get-file-request)
- [Update file request](#update-file-request)
- [Delete file request](#delete-file-request)
- [Copy file request](#copy-file-request)

## Get file request

Retrieves the information about a file request.

This operation is performed by calling function `getFileRequestById`.

```ts
await client.fileRequests.getFileRequestById(updatedFileRequest.id);
```

### Arguments

- fileRequestId `string`
  - The unique identifier that represent a file request. The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/filerequest/123` the `file_request_id` is `123`. Example: "123"
- optionalsInput `GetFileRequestByIdOptionalsInput`
  -

### Returns

This function returns a value of type `FileRequest`.

Returns a file request object.

## Update file request

Updates a file request. This can be used to activate or
deactivate a file request.

This operation is performed by calling function `updateFileRequestById`.

```ts
await client.fileRequests.updateFileRequestById(copiedFileRequest.id, {
  title: 'updated title',
  description: 'updated description',
} satisfies FileRequestUpdateRequest);
```

### Arguments

- fileRequestId `string`
  - The unique identifier that represent a file request. The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/filerequest/123` the `file_request_id` is `123`. Example: "123"
- requestBody `FileRequestUpdateRequest`
  - Request body of updateFileRequestById method
- optionalsInput `UpdateFileRequestByIdOptionalsInput`
  -

### Returns

This function returns a value of type `FileRequest`.

Returns the updated file request object.

## Delete file request

Deletes a file request permanently.

This operation is performed by calling function `deleteFileRequestById`.

```ts
await client.fileRequests.deleteFileRequestById(updatedFileRequest.id);
```

### Arguments

- fileRequestId `string`
  - The unique identifier that represent a file request. The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/filerequest/123` the `file_request_id` is `123`. Example: "123"
- optionalsInput `DeleteFileRequestByIdOptionalsInput`
  -

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the file request has been successfully
deleted.

## Copy file request

Copies an existing file request that is already present on one folder,
and applies it to another folder.

This operation is performed by calling function `createFileRequestCopy`.

```ts
await client.fileRequests.createFileRequestCopy(fileRequestId, {
  folder: {
    id: fileRequest.folder.id,
    type: 'folder' as FileRequestCopyRequestFolderTypeField,
  } satisfies FileRequestCopyRequestFolderField,
} satisfies FileRequestCopyRequest);
```

### Arguments

- fileRequestId `string`
  - The unique identifier that represent a file request. The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/filerequest/123` the `file_request_id` is `123`. Example: "123"
- requestBody `FileRequestCopyRequest`
  - Request body of createFileRequestCopy method
- optionalsInput `CreateFileRequestCopyOptionalsInput`
  -

### Returns

This function returns a value of type `FileRequest`.

Returns updated file request object.
