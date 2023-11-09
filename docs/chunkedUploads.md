# ChunkedUploadsManager

This is a manager for chunked uploads (allowed for files at least 20MB).

- [Create upload session](#create-upload-session)
- [Create upload session for existing file](#create-upload-session-for-existing-file)
- [Get upload session](#get-upload-session)
- [Upload part of file](#upload-part-of-file)
- [Remove upload session](#remove-upload-session)
- [List parts](#list-parts)
- [Commit upload session](#commit-upload-session)
- [](#)
- [](#)

## Create upload session

Creates an upload session for a new file.

This operation is performed by calling function `createFileUploadSession`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-upload-sessions/).

_Currently we don't have an example for calling `createFileUploadSession` in integration tests_

### Arguments

- requestBody `CreateFileUploadSessionRequestBodyArg`
  - Request body of createFileUploadSession method
- headers `CreateFileUploadSessionHeadersArg`
  - Headers of createFileUploadSession method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

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
- requestBody `CreateFileUploadSessionForExistingFileRequestBodyArg`
  - Request body of createFileUploadSessionForExistingFile method
- headers `CreateFileUploadSessionForExistingFileHeadersArg`
  - Headers of createFileUploadSessionForExistingFile method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `UploadSession`.

Returns a new upload session.

## Get upload session

Return information about an upload session.

This operation is performed by calling function `getFileUploadSessionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-upload-sessions-id/).

_Currently we don't have an example for calling `getFileUploadSessionById` in integration tests_

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- headers `GetFileUploadSessionByIdHeadersArg`
  - Headers of getFileUploadSessionById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `UploadSession`.

Returns an upload session object.

## Upload part of file

Updates a chunk of an upload session for a file.

This operation is performed by calling function `uploadFilePart`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-files-upload-sessions-id/).

_Currently we don't have an example for calling `uploadFilePart` in integration tests_

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- requestBody `ByteStream`
  - Request body of uploadFilePart method
- headers `UploadFilePartHeadersArg`
  - Headers of uploadFilePart method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `UploadedPart`.

Chunk has been uploaded successfully.

## Remove upload session

Abort an upload session and discard all data uploaded.

This cannot be reversed.

This operation is performed by calling function `deleteFileUploadSessionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-files-upload-sessions-id/).

_Currently we don't have an example for calling `deleteFileUploadSessionById` in integration tests_

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- headers `DeleteFileUploadSessionByIdHeadersArg`
  - Headers of deleteFileUploadSessionById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `undefined`.

A blank response is returned if the session was
successfully aborted.

## List parts

Return a list of the chunks uploaded to the upload
session so far.

This operation is performed by calling function `getFileUploadSessionParts`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-upload-sessions-id-parts/).

_Currently we don't have an example for calling `getFileUploadSessionParts` in integration tests_

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- queryParams `GetFileUploadSessionPartsQueryParamsArg`
  - Query parameters of getFileUploadSessionParts method
- headers `GetFileUploadSessionPartsHeadersArg`
  - Headers of getFileUploadSessionParts method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `UploadParts`.

Returns a list of parts that have been uploaded.

## Commit upload session

Close an upload session and create a file from the
uploaded chunks.

This operation is performed by calling function `createFileUploadSessionCommit`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-upload-sessions-id-commit/).

_Currently we don't have an example for calling `createFileUploadSessionCommit` in integration tests_

### Arguments

- uploadSessionId `string`
  - The ID of the upload session. Example: "D5E3F7A"
- requestBody `CreateFileUploadSessionCommitRequestBodyArg`
  - Request body of createFileUploadSessionCommit method
- headers `CreateFileUploadSessionCommitHeadersArg`
  - Headers of createFileUploadSessionCommit method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `Files`.

Returns the file object in a list.Returns when all chunks have been uploaded but not yet processed.

Inspect the upload session to get more information about the
progress of processing the chunks, then retry committing the file
when all chunks have processed.

##

This operation is performed by calling function `reducer`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference//).

_Currently we don't have an example for calling `reducer` in integration tests_

### Arguments

- acc `PartAccumulator`
  -
- chunk `ByteStream`
  -

##

This operation is performed by calling function `uploadBigFile`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference//).

<!-- sample  -->

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
