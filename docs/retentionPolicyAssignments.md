# RetentionPolicyAssignmentsManager

## List retention policy assignments

Returns a list of all retention policy assignments associated with a specified
retention policy.

This operation is performed by calling function `getRetentionPolicyAssignments`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policies-id-assignments/).

*Currently we don't have an example for calling `getRetentionPolicyAssignments` in integration tests*

### Arguments

- retentionPolicyId `string`
  - The ID of the retention policy.
  - Used as `retention_policy_id` in path `path` of the API call
- queryParams `GetRetentionPolicyAssignmentsQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetRetentionPolicyAssignmentsHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `RetentionPolicyAssignments`.

Returns a list of the retention policy assignments associated with the
specified retention policy.


## Assign retention policy

Assigns a retention policy to an item.

This operation is performed by calling function `createRetentionPolicyAssignment`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-retention-policy-assignments/).

*Currently we don't have an example for calling `createRetentionPolicyAssignment` in integration tests*

### Arguments

- requestBody `CreateRetentionPolicyAssignmentRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateRetentionPolicyAssignmentHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `RetentionPolicyAssignment`.

Returns a new retention policy assignment object.


## Get retention policy assignment

Retrieves a retention policy assignment

This operation is performed by calling function `getRetentionPolicyAssignmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policy-assignments-id/).

*Currently we don't have an example for calling `getRetentionPolicyAssignmentById` in integration tests*

### Arguments

- retentionPolicyAssignmentId `string`
  - The ID of the retention policy assignment.
  - Used as `retention_policy_assignment_id` in path `path` of the API call
- queryParams `GetRetentionPolicyAssignmentByIdQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetRetentionPolicyAssignmentByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `RetentionPolicyAssignment`.

Returns the retention policy assignment object.


## Remove retention policy assignment

Removes a retention policy assignment
applied to content.

This operation is performed by calling function `deleteRetentionPolicyAssignmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-retention-policy-assignments-id/).

*Currently we don't have an example for calling `deleteRetentionPolicyAssignmentById` in integration tests*

### Arguments

- retentionPolicyAssignmentId `string`
  - The ID of the retention policy assignment.
  - Used as `retention_policy_assignment_id` in path `path` of the API call
- headers `DeleteRetentionPolicyAssignmentByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the policy assignment
is successfully deleted.


## Get files under retention

Returns a list of files under retention for a retention policy assignment.

This operation is performed by calling function `getRetentionPolicyAssignmentFileUnderRetention`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policy-assignments-id-files-under-retention/).

*Currently we don't have an example for calling `getRetentionPolicyAssignmentFileUnderRetention` in integration tests*

### Arguments

- retentionPolicyAssignmentId `string`
  - The ID of the retention policy assignment.
  - Used as `retention_policy_assignment_id` in path `path` of the API call
- queryParams `GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `FilesUnderRetention`.

Returns a list of files under retention that are associated with the
specified retention policy assignment.


## Get file versions under retention

Returns a list of file versions under retention for a retention policy
assignment.

This operation is performed by calling function `getRetentionPolicyAssignmentFileVersionUnderRetention`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policy-assignments-id-file-versions-under-retention/).

*Currently we don't have an example for calling `getRetentionPolicyAssignmentFileVersionUnderRetention` in integration tests*

### Arguments

- retentionPolicyAssignmentId `string`
  - The ID of the retention policy assignment.
  - Used as `retention_policy_assignment_id` in path `path` of the API call
- queryParams `GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `FilesUnderRetention`.

Returns a list of file versions under retention that are associated with
the specified retention policy assignment.


