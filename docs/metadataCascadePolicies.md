# MetadataCascadePoliciesManager

## List metadata cascade policies

Retrieves a list of all the metadata cascade policies
that are applied to a given folder. This can not be used on the root
folder with ID &#x60;0&#x60;.

This operation is performed by calling function `getMetadataCascadePolicies`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-cascade-policies/).

*Currently we don't have an example for calling `getMetadataCascadePolicies` in integration tests*

### Arguments

- queryParams `GetMetadataCascadePoliciesQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetMetadataCascadePoliciesHeadersArg`
  - Used as headers for the API call


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

*Currently we don't have an example for calling `createMetadataCascadePolicy` in integration tests*

### Arguments

- requestBody `CreateMetadataCascadePolicyRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateMetadataCascadePolicyHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `MetadataCascadePolicy`.

Returns a new of metadata cascade policy


## Get metadata cascade policy

Retrieve a specific metadata cascade policy assigned to a folder.

This operation is performed by calling function `getMetadataCascadePolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-cascade-policies-id/).

*Currently we don't have an example for calling `getMetadataCascadePolicyById` in integration tests*

### Arguments

- metadataCascadePolicyId `string`
  - The ID of the metadata cascade policy.
  - Used as `metadata_cascade_policy_id` in path `path` of the API call
- headers `GetMetadataCascadePolicyByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `MetadataCascadePolicy`.

Returns a metadata cascade policy


## Remove metadata cascade policy

Deletes a metadata cascade policy.

This operation is performed by calling function `deleteMetadataCascadePolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-metadata-cascade-policies-id/).

*Currently we don't have an example for calling `deleteMetadataCascadePolicyById` in integration tests*

### Arguments

- metadataCascadePolicyId `string`
  - The ID of the metadata cascade policy.
  - Used as `metadata_cascade_policy_id` in path `path` of the API call
- headers `DeleteMetadataCascadePolicyByIdHeadersArg`
  - Used as headers for the API call


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

*Currently we don't have an example for calling `createMetadataCascadePolicyApply` in integration tests*

### Arguments

- metadataCascadePolicyId `string`
  - The ID of the cascade policy to force-apply.
  - Used as `metadata_cascade_policy_id` in path `path` of the API call
- requestBody `CreateMetadataCascadePolicyApplyRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateMetadataCascadePolicyApplyHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the API call was successful. The metadata
cascade operation will be performed asynchronously.

The API call will return directly, before the cascade operation
is complete. There is currently no API to check for the status of this
operation.


