# StoragePolicyAssignmentsManager

## List storage policy assignments

Fetches all the storage policy assignment for an enterprise or user.

This operation is performed by calling function `getStoragePolicyAssignments`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-storage-policy-assignments/).

*Currently we don't have an example for calling `getStoragePolicyAssignments` in integration tests*

### Arguments

- queryParams `GetStoragePolicyAssignmentsQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetStoragePolicyAssignmentsHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `StoragePolicyAssignments`.

Returns a collection of storage policies for
the enterprise or user.


## Assign storage policy

Creates a storage policy assignment for an enterprise or user.

This operation is performed by calling function `createStoragePolicyAssignment`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-storage-policy-assignments/).

*Currently we don't have an example for calling `createStoragePolicyAssignment` in integration tests*

### Arguments

- requestBody `CreateStoragePolicyAssignmentRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateStoragePolicyAssignmentHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `StoragePolicyAssignment`.

Returns the new storage policy assignment created.


## Get storage policy assignment

Fetches a specific storage policy assignment.

This operation is performed by calling function `getStoragePolicyAssignmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-storage-policy-assignments-id/).

*Currently we don't have an example for calling `getStoragePolicyAssignmentById` in integration tests*

### Arguments

- storagePolicyAssignmentId `string`
  - The ID of the storage policy assignment.
  - Used as `storage_policy_assignment_id` in path `path` of the API call
- headers `GetStoragePolicyAssignmentByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `StoragePolicyAssignment`.

Returns a storage policy assignment object.


## Update storage policy assignment

Updates a specific storage policy assignment.

This operation is performed by calling function `updateStoragePolicyAssignmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-storage-policy-assignments-id/).

*Currently we don't have an example for calling `updateStoragePolicyAssignmentById` in integration tests*

### Arguments

- storagePolicyAssignmentId `string`
  - The ID of the storage policy assignment.
  - Used as `storage_policy_assignment_id` in path `path` of the API call
- requestBody `UpdateStoragePolicyAssignmentByIdRequestBodyArg`
  - Used as requestBody for the API call
- headers `UpdateStoragePolicyAssignmentByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `StoragePolicyAssignment`.

Returns an updated storage policy assignment object.


## Unassign storage policy

Delete a storage policy assignment.

Deleting a storage policy assignment on a user
will have the user inherit the enterprise&#x27;s default
storage policy.

There is a rate limit for calling this endpoint of only
twice per user in a 24 hour time frame.

This operation is performed by calling function `deleteStoragePolicyAssignmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-storage-policy-assignments-id/).

*Currently we don't have an example for calling `deleteStoragePolicyAssignmentById` in integration tests*

### Arguments

- storagePolicyAssignmentId `string`
  - The ID of the storage policy assignment.
  - Used as `storage_policy_assignment_id` in path `path` of the API call
- headers `DeleteStoragePolicyAssignmentByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the storage policy
assignment is successfully deleted.


