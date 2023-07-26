# RetentionPoliciesManager

## List retention policies

Retrieves all of the retention policies for an enterprise.

This operation is performed by calling function `getRetentionPolicies`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policies/).

*Currently we don't have an example for calling `getRetentionPolicies` in integration tests*

### Arguments

- queryParams `undefined | GetRetentionPoliciesQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `RetentionPolicies`.

Returns a list retention policies in the enterprise.


## Create retention policy

Creates a retention policy.

This operation is performed by calling function `createRetentionPolicy`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-retention-policies/).

*Currently we don't have an example for calling `createRetentionPolicy` in integration tests*

### Arguments

- requestBody `CreateRetentionPolicyRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `RetentionPolicy`.

Returns a new retention policy object.


## Get retention policy

Retrieves a retention policy.

This operation is performed by calling function `getRetentionPolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policies-id/).

*Currently we don't have an example for calling `getRetentionPolicyById` in integration tests*

### Arguments

- retentionPolicyId `string`
  - The ID of the retention policy.
  - Used as `retention_policy_id` in path `path` of the API call
- queryParams `undefined | GetRetentionPolicyByIdQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `RetentionPolicy`.

Returns the retention policy object.


## Update retention policy

Updates a retention policy.

This operation is performed by calling function `updateRetentionPolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-retention-policies-id/).

*Currently we don't have an example for calling `updateRetentionPolicyById` in integration tests*

### Arguments

- retentionPolicyId `string`
  - The ID of the retention policy.
  - Used as `retention_policy_id` in path `path` of the API call
- requestBody `UpdateRetentionPolicyByIdRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `RetentionPolicy`.

Returns the updated retention policy object.


## Delete retention policy

Permanently deletes a retention policy.

This operation is performed by calling function `deleteRetentionPolicyById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-retention-policies-id/).

*Currently we don't have an example for calling `deleteRetentionPolicyById` in integration tests*

### Arguments

- retentionPolicyId `string`
  - The ID of the retention policy.
  - Used as `retention_policy_id` in path `path` of the API call


