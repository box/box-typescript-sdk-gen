# SharedLinksWebLinksManager

- [Find web link for shared link](#find-web-link-for-shared-link)
- [Get shared link for web link](#get-shared-link-for-web-link)
- [Add shared link to web link](#add-shared-link-to-web-link)
- [Update shared link on web link](#update-shared-link-on-web-link)
- [Remove shared link from web link](#remove-shared-link-from-web-link)

## Find web link for shared link

Returns the web link represented by a shared link.

A shared web link can be represented by a shared link,
which can originate within the current enterprise or within another.

This endpoint allows an application to retrieve information about a
shared web link when only given a shared link.

This operation is performed by calling function `getSharedItemWebLinks`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shared-items-web-links/).

_Currently we don't have an example for calling `getSharedItemWebLinks` in integration tests_

### Arguments

- queryParams `GetSharedItemWebLinksQueryParamsArg`
  - Query parameters of getSharedItemWebLinks method
- headers `GetSharedItemWebLinksHeadersArg`
  - Headers of getSharedItemWebLinks method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `WebLink`.

Returns a full file resource if the shared link is valid and
the user has access to it.

## Get shared link for web link

Gets the information for a shared link on a web link.

This operation is performed by calling function `getWebLinkGetSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-web-links-id-get-shared-link/).

_Currently we don't have an example for calling `getWebLinkGetSharedLink` in integration tests_

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- queryParams `GetWebLinkGetSharedLinkQueryParamsArg`
  - Query parameters of getWebLinkGetSharedLink method
- headers `GetWebLinkGetSharedLinkHeadersArg`
  - Headers of getWebLinkGetSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `WebLink`.

Returns the base representation of a web link with the
additional shared link information.

## Add shared link to web link

Adds a shared link to a web link.

This operation is performed by calling function `updateWebLinkAddSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-web-links-id-add-shared-link/).

_Currently we don't have an example for calling `updateWebLinkAddSharedLink` in integration tests_

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- requestBody `UpdateWebLinkAddSharedLinkRequestBodyArg`
  - Request body of updateWebLinkAddSharedLink method
- queryParams `UpdateWebLinkAddSharedLinkQueryParamsArg`
  - Query parameters of updateWebLinkAddSharedLink method
- headers `UpdateWebLinkAddSharedLinkHeadersArg`
  - Headers of updateWebLinkAddSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `WebLink`.

Returns the base representation of a web link with a new shared
link attached.

## Update shared link on web link

Updates a shared link on a web link.

This operation is performed by calling function `updateWebLinkUpdateSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-web-links-id-update-shared-link/).

_Currently we don't have an example for calling `updateWebLinkUpdateSharedLink` in integration tests_

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- requestBody `UpdateWebLinkUpdateSharedLinkRequestBodyArg`
  - Request body of updateWebLinkUpdateSharedLink method
- queryParams `UpdateWebLinkUpdateSharedLinkQueryParamsArg`
  - Query parameters of updateWebLinkUpdateSharedLink method
- headers `UpdateWebLinkUpdateSharedLinkHeadersArg`
  - Headers of updateWebLinkUpdateSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `WebLink`.

Returns a basic representation of the web link, with the updated shared
link attached.

## Remove shared link from web link

Removes a shared link from a web link.

This operation is performed by calling function `updateWebLinkRemoveSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-web-links-id-remove-shared-link/).

_Currently we don't have an example for calling `updateWebLinkRemoveSharedLink` in integration tests_

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- requestBody `UpdateWebLinkRemoveSharedLinkRequestBodyArg`
  - Request body of updateWebLinkRemoveSharedLink method
- queryParams `UpdateWebLinkRemoveSharedLinkQueryParamsArg`
  - Query parameters of updateWebLinkRemoveSharedLink method
- headers `UpdateWebLinkRemoveSharedLinkHeadersArg`
  - Headers of updateWebLinkRemoveSharedLink method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `WebLink`.

Returns a basic representation of a web link, with the
shared link removed.
