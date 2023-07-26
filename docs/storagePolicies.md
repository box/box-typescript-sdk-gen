# StoragePoliciesManager

## List storage policies

Fetches all the storage policies in the enterprise.

This operation is performed by calling function `getStoragePolicies`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-storage-policies/).

*Currently we don't have an example for calling `getStoragePolicies` in integration tests*

### Arguments

- queryParams `undefined | GetStoragePoliciesQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `StoragePolicies`.

Returns a collection of storage policies.


## Get storage policy

Fetches a specific storage policy.

This operation is performed by calling function `getStoragePolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-storage-policies-id/).

*Currently we don't have an example for calling `getStoragePolicyById` in integration tests*

### Arguments

- storagePolicyId `string`
  - The ID of the storage policy.
  - Used as `storage_policy_id` in path `path` of the API call


### Returns

This function returns a value of type `StoragePolicy`.

Returns a storage policy object.


