# ZipDownloadsManager

## Create zip download

Creates a request to download multiple files and folders as a single &#x60;zip&#x60;
archive file. This API does not return the archive but instead performs all
the checks to ensure that the user has access to all the items, and then
returns a &#x60;download_url&#x60; and a &#x60;status_url&#x60; that can be used to download the
archive.

The limit for an archive is either the Account&#x27;s upload limit or
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

*Currently we don't have an example for calling `createZipDownload` in integration tests*

### Arguments

- requestBody `ZipDownloadRequest`
  - Used as requestBody for the API call
- headers `CreateZipDownloadHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ZipDownload`.

If the &#x60;zip&#x60; archive is ready to be downloaded, the API will return a
response that will include a &#x60;download_url&#x60;, a &#x60;status_url&#x60;, as well as
any conflicts that might have occurred when creating the request.


## Download zip archive

Returns the contents of a &#x60;zip&#x60; archive in binary format. This URL does not
require any form of authentication and could be used in a user&#x27;s browser to
download the archive to a user&#x27;s device.

By default, this URL is only valid for a few seconds from the creation of
the request for this archive. Once a download has started it can not be
stopped and resumed, instead a new request for a zip archive would need to
be created.

The URL of this endpoint should not be considered as fixed. Instead, use
the [Create zip download](e://post_zip_downloads) API to request to create a
&#x60;zip&#x60; archive, and then follow the &#x60;download_url&#x60; field in the response to
this endpoint.

This operation is performed by calling function `getZipDownloadContent`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-zip-downloads-id-content/).

*Currently we don't have an example for calling `getZipDownloadContent` in integration tests*

### Arguments

- zipDownloadId `string`
  - The unique identifier that represent this &#x60;zip&#x60; archive.
  - Used as `zip_download_id` in path `path` of the API call
- headers `GetZipDownloadContentHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ByteStream`.

Returns the content of the items requested for this download, formatted as
a stream of files and folders in a &#x60;zip&#x60; archive.


## Get zip download status

Returns the download status of a &#x60;zip&#x60; archive, allowing an application to
inspect the progress of the download as well as the number of items that
might have been skipped.

This endpoint can only be accessed once the download has started.
Subsequently this endpoint is valid for 12 hours from the start of the
download.

The URL of this endpoint should not be considered as fixed. Instead, use
the [Create zip download](e://post_zip_downloads) API to request to create a
&#x60;zip&#x60; archive, and then follow the &#x60;status_url&#x60; field in the response to
this endpoint.

This operation is performed by calling function `getZipDownloadStatus`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-zip-downloads-id-status/).

*Currently we don't have an example for calling `getZipDownloadStatus` in integration tests*

### Arguments

- zipDownloadId `string`
  - The unique identifier that represent this &#x60;zip&#x60; archive.
  - Used as `zip_download_id` in path `path` of the API call
- headers `GetZipDownloadStatusHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ZipDownloadStatus`.

Returns the status of the &#x60;zip&#x60; archive that is being downloaded.


