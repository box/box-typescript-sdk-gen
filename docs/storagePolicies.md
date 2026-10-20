# StoragePoliciesManager

<!-- box-typescript-sdk-gen deprecation banner -->
> [!CAUTION]
> **`box-typescript-sdk-gen` is deprecated and no longer maintained.** As of September 17, 2025, it receives no new features, bug fixes, or security patches. Do not use it for new projects.
>
> Use [`box-node-sdk`](https://github.com/box/box-node-sdk) v10+ instead: `npm install box-node-sdk`.
> The equivalent of this page is [box-node-sdk/docs/storagePolicies.md](https://github.com/box/box-node-sdk/blob/main/docs/storagePolicies.md). To migrate existing code, see the [migration guide](https://github.com/box/box-node-sdk/blob/main/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md).

- [List storage policies](#list-storage-policies)
- [Get storage policy](#get-storage-policy)

## List storage policies

Fetches all the storage policies in the enterprise.

This operation is performed by calling function `getStoragePolicies`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-storage-policies/).

<!-- sample get_storage_policies -->

```ts
await client.storagePolicies.getStoragePolicies();
```

### Arguments

- queryParams `GetStoragePoliciesQueryParams`
  - Query parameters of getStoragePolicies method
- headersInput `GetStoragePoliciesHeadersInput`
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

<!-- sample get_storage_policies_id -->

```ts
await client.storagePolicies.getStoragePolicyById(storagePolicy.id);
```

### Arguments

- storagePolicyId `string`
  - The ID of the storage policy. Example: "34342"
- optionalsInput `GetStoragePolicyByIdOptionalsInput`

### Returns

This function returns a value of type `StoragePolicy`.

Returns a storage policy object.
