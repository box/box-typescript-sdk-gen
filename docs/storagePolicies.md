# StoragePoliciesManager

- [List storage policies](#list-storage-policies)
- [Get storage policy](#get-storage-policy)

## List storage policies

Fetches all the storage policies in the enterprise.

This operation is performed by calling function `getStoragePolicies`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-storage-policies/).

_Currently we don't have an example for calling `getStoragePolicies` in integration tests_

### Arguments

- queryParams `GetStoragePoliciesQueryParamsArg`
  - Query parameters of getStoragePolicies method
- headers `GetStoragePoliciesHeadersArg`
  - Headers of getStoragePolicies method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `StoragePolicies`.

Returns a collection of storage policies.

## Get storage policy

Fetches a specific storage policy.

This operation is performed by calling function `getStoragePolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-storage-policies-id/).

_Currently we don't have an example for calling `getStoragePolicyById` in integration tests_

### Arguments

- storagePolicyId `string`
  - The ID of the storage policy. Example: "34342"
- headers `GetStoragePolicyByIdHeadersArg`
  - Headers of getStoragePolicyById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `StoragePolicy`.

Returns a storage policy object.
