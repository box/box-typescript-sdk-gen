# ChunkedUploadsManager

This is a manager for chunked uploads (allowed for files at least 20MB).

## Create upload session

Creates an upload session for a new file.

This operation is performed by calling function `createFileUploadSession`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-upload-sessions/).

<!-- sample post_files_upload_sessions -->
```ts
await client.chunkedUploads.createFileUploadSession({ fileName: fileName, fileSize: fileSize, folderId: folderId } satisfies CreateFileUploadSessionRequestBodyArg)
```

### Arguments

- requestBody `CreateFileUploadSessionRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `UploadSession`.

Returns a new upload session.


## Create upload session for existing file

Creates an upload session for an existing file.

This operation is performed by calling function `createFileUploadSessionForExistingFile`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-id-upload-sessions/).

*Currently we don't have an example for calling `createFileUploadSessionForExistingFile` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
  - Used as `file_id` in path `path` of the API call
- requestBody `CreateFileUploadSessionForExistingFileRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `UploadSession`.

Returns a new upload session.


## Get upload session

Return information about an upload session.

This operation is performed by calling function `getFileUploadSessionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-upload-sessions-id/).

<!-- sample get_files_upload_sessions_id -->
```ts
await client.chunkedUploads.getFileUploadSessionById(uploadSessionId)
```

### Arguments

- uploadSessionId `string`
  - The ID of the upload session.
  - Used as `upload_session_id` in path `path` of the API call


### Returns

This function returns a value of type `UploadSession`.

Returns an upload session object.


## Upload part of file

Updates a chunk of an upload session for a file.

This operation is performed by calling function `uploadFilePart`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-files-upload-sessions-id/).

<!-- sample put_files_upload_sessions_id -->
```ts
await client.chunkedUploads.uploadFilePart(uploadSessionId, uploadedChunk, { digest: digest, contentRange: contentRange } satisfies UploadFilePartHeadersArg)
```

### Arguments

- uploadSessionId `string`
  - The ID of the upload session.
  - Used as `upload_session_id` in path `path` of the API call
- requestBody `Readable`
  - Used as requestBody for the API call
- headers `UploadFilePartHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `UploadedPart`.

Chunk has been uploaded successfully.


## Remove upload session

Abort an upload session and discard all data uploaded.

This cannot be reversed.

This operation is performed by calling function `deleteFileUploadSessionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-files-upload-sessions-id/).

*Currently we don't have an example for calling `deleteFileUploadSessionById` in integration tests*

### Arguments

- uploadSessionId `string`
  - The ID of the upload session.
  - Used as `upload_session_id` in path `path` of the API call


## List parts

Return a list of the chunks uploaded to the upload
session so far.

This operation is performed by calling function `getFileUploadSessionParts`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-upload-sessions-id-parts/).

<!-- sample get_files_upload_sessions_id_parts -->
```ts
await client.chunkedUploads.getFileUploadSessionParts(uploadSessionId)
```

### Arguments

- uploadSessionId `string`
  - The ID of the upload session.
  - Used as `upload_session_id` in path `path` of the API call
- queryParams `GetFileUploadSessionPartsQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `UploadParts`.

Returns a list of parts that have been uploaded.


## Commit upload session

Close an upload session and create a file from the
uploaded chunks.

This operation is performed by calling function `createFileUploadSessionCommit`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-upload-sessions-id-commit/).

<!-- sample post_files_upload_sessions_id_commit -->
```ts
await client.chunkedUploads.createFileUploadSessionCommit(uploadSessionId, { parts: parts } satisfies CreateFileUploadSessionCommitRequestBodyArg, { digest: digest } satisfies CreateFileUploadSessionCommitHeadersArg)
```

### Arguments

- uploadSessionId `string`
  - The ID of the upload session.
  - Used as `upload_session_id` in path `path` of the API call
- requestBody `CreateFileUploadSessionCommitRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateFileUploadSessionCommitHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `Files`.

Returns the file object in a list.Returns when all chunks have been uploaded but not yet processed.

Inspect the upload session to get more information about the
progress of processing the chunks, then retry committing the file
when all chunks have processed.


