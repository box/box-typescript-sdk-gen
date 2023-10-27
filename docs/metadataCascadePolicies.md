# MetadataCascadePoliciesManager

- [List metadata cascade policies](#list-metadata-cascade-policies)
- [Create metadata cascade policy](#create-metadata-cascade-policy)
- [Get metadata cascade policy](#get-metadata-cascade-policy)
- [Remove metadata cascade policy](#remove-metadata-cascade-policy)
- [Force-apply metadata cascade policy to folder](#force-apply-metadata-cascade-policy-to-folder)

## List metadata cascade policies

Retrieves a list of all the metadata cascade policies
that are applied to a given folder. This can not be used on the root
folder with ID `0`.

This operation is performed by calling function `getMetadataCascadePolicies`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-cascade-policies/).

_Currently we don't have an example for calling `getMetadataCascadePolicies` in integration tests_

### Arguments

- queryParams `GetMetadataCascadePoliciesQueryParamsArg`
  - Query parameters of getMetadataCascadePolicies method
- headers `GetMetadataCascadePoliciesHeadersArg`
  - Headers of getMetadataCascadePolicies method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataCascadePolicies`.

Returns a list of metadata cascade policies

## Create metadata cascade policy

Creates a new metadata cascade policy that applies a given
metadata template to a given folder and automatically
cascades it down to any files within that folder.

In order for the policy to be applied a metadata instance must first
be applied to the folder the policy is to be applied to.

This operation is performed by calling function `createMetadataCascadePolicy`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-metadata-cascade-policies/).

_Currently we don't have an example for calling `createMetadataCascadePolicy` in integration tests_

### Arguments

- requestBody `CreateMetadataCascadePolicyRequestBodyArg`
  - Request body of createMetadataCascadePolicy method
- headers `CreateMetadataCascadePolicyHeadersArg`
  - Headers of createMetadataCascadePolicy method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataCascadePolicy`.

Returns a new of metadata cascade policy

## Get metadata cascade policy

Retrieve a specific metadata cascade policy assigned to a folder.

This operation is performed by calling function `getMetadataCascadePolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-cascade-policies-id/).

_Currently we don't have an example for calling `getMetadataCascadePolicyById` in integration tests_

### Arguments

- metadataCascadePolicyId `string`
  - The ID of the metadata cascade policy. Example: "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
- headers `GetMetadataCascadePolicyByIdHeadersArg`
  - Headers of getMetadataCascadePolicyById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataCascadePolicy`.

Returns a metadata cascade policy

## Remove metadata cascade policy

Deletes a metadata cascade policy.

This operation is performed by calling function `deleteMetadataCascadePolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-metadata-cascade-policies-id/).

_Currently we don't have an example for calling `deleteMetadataCascadePolicyById` in integration tests_

### Arguments

- metadataCascadePolicyId `string`
  - The ID of the metadata cascade policy. Example: "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
- headers `DeleteMetadataCascadePolicyByIdHeadersArg`
  - Headers of deleteMetadataCascadePolicyById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the policy
is successfully deleted.

## Force-apply metadata cascade policy to folder

Force the metadata on a folder with a metadata cascade policy to be applied to
all of its children. This can be used after creating a new cascade policy to
enforce the metadata to be cascaded down to all existing files within that
folder.

This operation is performed by calling function `createMetadataCascadePolicyApply`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-metadata-cascade-policies-id-apply/).

_Currently we don't have an example for calling `createMetadataCascadePolicyApply` in integration tests_

### Arguments

- metadataCascadePolicyId `string`
  - The ID of the cascade policy to force-apply. Example: "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
- requestBody `CreateMetadataCascadePolicyApplyRequestBodyArg`
  - Request body of createMetadataCascadePolicyApply method
- headers `CreateMetadataCascadePolicyApplyHeadersArg`
  - Headers of createMetadataCascadePolicyApply method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the API call was successful. The metadata
cascade operation will be performed asynchronously.

The API call will return directly, before the cascade operation
is complete. There is currently no API to check for the status of this
operation.
