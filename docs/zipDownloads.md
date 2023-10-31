# ZipDownloadsManager

- [Create zip download](#create-zip-download)
- [Download zip archive](#download-zip-archive)
- [Get zip download status](#get-zip-download-status)

## Create zip download

Creates a request to download multiple files and folders as a single `zip`
archive file. This API does not return the archive but instead performs all
the checks to ensure that the user has access to all the items, and then
returns a `download_url` and a `status_url` that can be used to download the
archive.

The limit for an archive is either the Account's upload limit or
10,000 files, whichever is met first.

**Note**: Downloading a large file can be
affected by various
factors such as distance, network latency,
bandwidth, and congestion, as well as packet loss
ratio and current server load.
For these reasons we recommend that a maximum ZIP archive
total size does not exceed 25GB.

This operation is performed by calling function `createZipDownload`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-zip-downloads/).

_Currently we don't have an example for calling `createZipDownload` in integration tests_

### Arguments

- requestBody `ZipDownloadRequest`
  - Request body of createZipDownload method
- headers `CreateZipDownloadHeadersArg`
  - Headers of createZipDownload method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `ZipDownload`.

If the `zip` archive is ready to be downloaded, the API will return a
response that will include a `download_url`, a `status_url`, as well as
any conflicts that might have occurred when creating the request.

## Download zip archive

Returns the contents of a `zip` archive in binary format. This URL does not
require any form of authentication and could be used in a user's browser to
download the archive to a user's device.

By default, this URL is only valid for a few seconds from the creation of
the request for this archive. Once a download has started it can not be
stopped and resumed, instead a new request for a zip archive would need to
be created.

The URL of this endpoint should not be considered as fixed. Instead, use
the [Create zip download](e://post_zip_downloads) API to request to create a
`zip` archive, and then follow the `download_url` field in the response to
this endpoint.

This operation is performed by calling function `getZipDownloadContent`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-zip-downloads-id-content/).

_Currently we don't have an example for calling `getZipDownloadContent` in integration tests_

### Arguments

- zipDownloadId `string`
  - The unique identifier that represent this `zip` archive. Example: "Lu6fA9Ob-jyysp3AAvMF4AkLEwZwAYbL=tgj2zIC=eK9RvJnJbjJl9rNh2qBgHDpyOCAOhpM=vajg2mKq8Mdd"
- headers `GetZipDownloadContentHeadersArg`
  - Headers of getZipDownloadContent method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `ByteStream`.

Returns the content of the items requested for this download, formatted as
a stream of files and folders in a `zip` archive.

## Get zip download status

Returns the download status of a `zip` archive, allowing an application to
inspect the progress of the download as well as the number of items that
might have been skipped.

This endpoint can only be accessed once the download has started.
Subsequently this endpoint is valid for 12 hours from the start of the
download.

The URL of this endpoint should not be considered as fixed. Instead, use
the [Create zip download](e://post_zip_downloads) API to request to create a
`zip` archive, and then follow the `status_url` field in the response to
this endpoint.

This operation is performed by calling function `getZipDownloadStatus`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-zip-downloads-id-status/).

_Currently we don't have an example for calling `getZipDownloadStatus` in integration tests_

### Arguments

- zipDownloadId `string`
  - The unique identifier that represent this `zip` archive. Example: "Lu6fA9Ob-jyysp3AAvMF4AkLEwZwAYbL=tgj2zIC=eK9RvJnJbjJl9rNh2qBgHDpyOCAOhpM=vajg2mKq8Mdd"
- headers `GetZipDownloadStatusHeadersArg`
  - Headers of getZipDownloadStatus method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `ZipDownloadStatus`.

Returns the status of the `zip` archive that is being downloaded.
