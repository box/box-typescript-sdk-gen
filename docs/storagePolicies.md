# StoragePoliciesManager

- [List storage policies](#list-storage-policies)
- [Get storage policy](#get-storage-policy)

## List storage policies

Fetches all the storage policies in the enterprise.
Only a Primary Admin can access this endpoint. The user
needs to generate a token for an account to authenticate this request.

This operation is performed by calling function `getStoragePolicies`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-storage-policies/).

_Currently we don't have an example for calling `getStoragePolicies` in integration tests_

### Arguments

- queryParams `GetStoragePoliciesQueryParamsArg`
  - Query parameters of getStoragePolicies method
- headers `GetStoragePoliciesHeadersArg`
  - Headers of getStoragePolicies method

### Returns

This function returns a value of type `StoragePolicies`.

Returns a collection of storage policies.

## Get storage policy

Fetches a specific storage policy. Only a Primary Admin can access this endpoint. The user needs to generate a token for an account to authenticate this request.

This operation is performed by calling function `getStoragePolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-storage-policies-id/).

_Currently we don't have an example for calling `getStoragePolicyById` in integration tests_

### Arguments

- storagePolicyId `string`
  - The ID of the storage policy. Example: "34342"
- headers `GetStoragePolicyByIdHeadersArg`
  - Headers of getStoragePolicyById method

### Returns

This function returns a value of type `StoragePolicy`.

Returns a storage policy object.
