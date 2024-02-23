# SignRequestsManager

- [Cancel sign request](#cancel-sign-request)
- [Resend sign request](#resend-sign-request)
- [Get sign request by ID](#get-sign-request-by-id)
- [List sign requests](#list-sign-requests)
- [Create sign request](#create-sign-request)

## Cancel sign request

Cancels a sign request.

This operation is performed by calling function `cancelSignRequest`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-sign-requests-id-cancel/).

<!-- sample post_sign_requests_id_cancel -->

```ts
await client.signRequests.cancelSignRequest(createdSignRequest.id!);
```

### Arguments

- signRequestId `string`
  - The ID of the sign request Example: "33243242"
- headers `CancelSignRequestHeaders`
  - Headers of cancelSignRequest method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `SignRequest`.

Returns a Sign Request object.

## Resend sign request

Resends a sign request email to all outstanding signers.

This operation is performed by calling function `resendSignRequest`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-sign-requests-id-resend/).

_Currently we don't have an example for calling `resendSignRequest` in integration tests_

### Arguments

- signRequestId `string`
  - The ID of the sign request Example: "33243242"
- headers `ResendSignRequestHeaders`
  - Headers of resendSignRequest method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the API call was successful.
The email notifications will be sent asynchronously.

## Get sign request by ID

Gets a sign request by ID.

This operation is performed by calling function `getSignRequestById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-sign-requests-id/).

<!-- sample get_sign_requests_id -->

```ts
await client.signRequests.getSignRequestById(createdSignRequest.id!);
```

### Arguments

- signRequestId `string`
  - The ID of the sign request Example: "33243242"
- headers `GetSignRequestByIdHeaders`
  - Headers of getSignRequestById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `SignRequest`.

Returns a sign request

## List sign requests

Gets sign requests created by a user. If the `sign_files` and/or
`parent_folder` are deleted, the sign request will not return in the list.

This operation is performed by calling function `getSignRequests`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-sign-requests/).

<!-- sample get_sign_requests -->

```ts
await client.signRequests.getSignRequests();
```

### Arguments

- queryParams `GetSignRequestsQueryParams`
  - Query parameters of getSignRequests method
- headers `GetSignRequestsHeaders`
  - Headers of getSignRequests method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `SignRequests`.

Returns a collection of sign requests

## Create sign request

Creates a sign request. This involves preparing a document for signing and
sending the sign request to signers.

This operation is performed by calling function `createSignRequest`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-sign-requests/).

<!-- sample post_sign_requests -->

```ts
await client.signRequests.createSignRequest({
  signers: [
    {
      email: signer1Email,
      signerGroupId: 'user',
    } satisfies SignRequestCreateSigner,
    {
      email: signer2Email,
      signerGroupId: 'user',
    } satisfies SignRequestCreateSigner,
  ],
  parentFolder: {
    id: destinationFolder.id,
    type: 'folder' as FolderBaseTypeField,
  } satisfies FolderMini,
  sourceFiles: [
    { id: fileToSign.id, type: 'file' as FileBaseTypeField } satisfies FileBase,
  ],
} satisfies SignRequestCreateRequest);
```

### Arguments

- requestBody `SignRequestCreateRequest`
  - Request body of createSignRequest method
- headers `CreateSignRequestHeaders`
  - Headers of createSignRequest method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `SignRequest`.

Returns a Sign Request object.
