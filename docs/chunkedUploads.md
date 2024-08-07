# ChunkedUploadsManager

This is a manager for chunked uploads (allowed for files at least 20MB).

- [Create upload session](#create-upload-session)
- [Create upload session for existing file](#create-upload-session-for-existing-file)
- [Get upload session](#get-upload-session)
- [Upload part of file](#upload-part-of-file)
- [Remove upload session](#remove-upload-session)
- [List parts](#list-parts)
- [Commit upload session](#commit-upload-session)
- [Upload big file](#upload-big-file)

## Create upload session

Creates an upload session for a new file.

This operation is performed by calling function `createFileUploadSession`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-upload-sessions/).

<!-- sample post_files_upload_sessions -->

```ts
await this.createFileUploadSession(
  {
    fileName: fileName,
    fileSize: fileSize,
    folderId: parentFolderId,
  } satisfies CreateFileUploadSessionRequestBody,
  {
    headers: new CreateFileUploadSessionHeaders({}),
    cancellationToken: cancellationToken,
  } satisfies CreateFileUploadSessionOptionalsInput
);
```

### Arguments

- requestBody `CreateFileUploadSessionRequestBody`
  - Request body of createFileUploadSession method
- optionalsInput `CreateFileUploadSessionOptionalsInput`
  -

### Returns

This function returns a value of type `UploadSession`.

Returns a new upload session.

## Create upload session for existing file

Creates an upload session for an existing file.

This operation is performed by calling function `createFileUploadSessionForExistingFile`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-id-upload-sessions/).

_Currently we don't have an example for calling `createFileUploadSessionForExistingFile` in integration tests_

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- requestBody `CreateFileUploadSessionForExistingFileRequestBody`
  - Request body of createFileUploadSessionForExistingFile method
- optionalsInput `CreateFileUploadSessionForExistingFileOptionalsInput`
  -

### Returns

This function returns a value of type `UploadSession`.

Returns a new upload session.

## Get upload session

Return information about an upload session.

The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions) endpoint.

This operation is performed by calling function `getFileUploadSessionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-upload-sessions-id/).

_Currently we don't have an example for calling `getFileUploadSessionById` in integration tests_

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- optionalsInput `GetFileUploadSessionByIdOptionalsInput`
  -

### Returns

This function returns a value of type `UploadSession`.

Returns an upload session object.

## Upload part of file

Uploads a chunk of a file for an upload session.

The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.

This operation is performed by calling function `uploadFilePart`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-files-upload-sessions-id/).

<!-- sample put_files_upload_sessions_id -->

```ts
await this.uploadFilePart(
  acc.uploadSessionId,
  generateByteStreamFromBuffer(chunkBuffer),
  {
    digest: digest,
    contentRange: contentRange,
  } satisfies UploadFilePartHeadersInput
);
```

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- requestBody `ByteStream`
  - Request body of uploadFilePart method
- headersInput `UploadFilePartHeadersInput`
  - Headers of uploadFilePart method
- optionalsInput `UploadFilePartOptionalsInput`
  -

### Returns

This function returns a value of type `UploadedPart`.

Chunk has been uploaded successfully.

## Remove upload session

Abort an upload session and discard all data uploaded.

This cannot be reversed.

The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.

This operation is performed by calling function `deleteFileUploadSessionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-files-upload-sessions-id/).

_Currently we don't have an example for calling `deleteFileUploadSessionById` in integration tests_

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- optionalsInput `DeleteFileUploadSessionByIdOptionalsInput`
  -

### Returns

This function returns a value of type `undefined`.

A blank response is returned if the session was
successfully aborted.

## List parts

Return a list of the chunks uploaded to the upload session so far.

The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.

This operation is performed by calling function `getFileUploadSessionParts`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-upload-sessions-id-parts/).

<!-- sample get_files_upload_sessions_id_parts -->

```ts
await this.getFileUploadSessionParts(uploadSessionId, {
  queryParams: {} satisfies GetFileUploadSessionPartsQueryParams,
  headers: new GetFileUploadSessionPartsHeaders({}),
  cancellationToken: cancellationToken,
} satisfies GetFileUploadSessionPartsOptionalsInput);
```

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- optionalsInput `GetFileUploadSessionPartsOptionalsInput`
  -

### Returns

This function returns a value of type `UploadParts`.

Returns a list of parts that have been uploaded.

## Commit upload session

Close an upload session and create a file from the uploaded chunks.

The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.

This operation is performed by calling function `createFileUploadSessionCommit`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-upload-sessions-id-commit/).

<!-- sample post_files_upload_sessions_id_commit -->

```ts
await this.createFileUploadSessionCommit(
  uploadSessionId,
  { parts: parts } satisfies CreateFileUploadSessionCommitRequestBody,
  { digest: digest } satisfies CreateFileUploadSessionCommitHeadersInput,
  {
    cancellationToken: cancellationToken,
  } satisfies CreateFileUploadSessionCommitOptionalsInput
);
```

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- requestBody `CreateFileUploadSessionCommitRequestBody`
  - Request body of createFileUploadSessionCommit method
- headersInput `CreateFileUploadSessionCommitHeadersInput`
  - Headers of createFileUploadSessionCommit method
- optionalsInput `CreateFileUploadSessionCommitOptionalsInput`
  -

### Returns

This function returns a value of type `Files`.

Returns the file object in a list.Returns when all chunks have been uploaded but not yet processed.

Inspect the upload session to get more information about the
progress of processing the chunks, then retry committing the file
when all chunks have processed.

## Upload big file

Starts the process of chunk uploading a big file. Should return a File object representing uploaded file.

This operation is performed by calling function `uploadBigFile`.

```ts
await client.chunkedUploads.uploadBigFile(
  fileByteStream,
  fileName,
  fileSize,
  parentFolderId
);
```

### Arguments

- file `ByteStream`
  - The stream of the file to upload.
- fileName `string`
  - The name of the file, which will be used for storage in Box.
- fileSize `number`
  - The total size of the file for the chunked upload in bytes.
- parentFolderId `string`
  - The ID of the folder where the file should be uploaded.
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FileFull`.
