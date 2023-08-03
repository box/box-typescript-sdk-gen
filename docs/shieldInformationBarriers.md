# ShieldInformationBarriersManager

## Get shield information barrier with specified ID

Get shield information barrier based on provided ID..

This operation is performed by calling function `getShieldInformationBarrierById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barriers-id/).

*Currently we don't have an example for calling `getShieldInformationBarrierById` in integration tests*

### Arguments

- shieldInformationBarrierId `string`
  - The ID of the shield information barrier.
  - Used as `shield_information_barrier_id` in path `path` of the API call
- headers `GetShieldInformationBarrierByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrier`.

Returns the shield information barrier object.


## Add changed status of shield information barrier with specified ID

Change status of shield information barrier with the specified ID.

This operation is performed by calling function `createShieldInformationBarrierChangeStatus`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-shield-information-barriers-change-status/).

*Currently we don't have an example for calling `createShieldInformationBarrierChangeStatus` in integration tests*

### Arguments

- requestBody `CreateShieldInformationBarrierChangeStatusRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateShieldInformationBarrierChangeStatusHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrier`.

Returns the updated shield information barrier object.


## List shield information barriers

Retrieves a list of shield information barrier objects
for the enterprise of JWT.

This operation is performed by calling function `getShieldInformationBarriers`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barriers/).

*Currently we don't have an example for calling `getShieldInformationBarriers` in integration tests*

### Arguments

- queryParams `GetShieldInformationBarriersQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetShieldInformationBarriersHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns a paginated list of
shield information barrier objects,
empty list if currently no barrier.


## Create shield information barrier

Creates a shield information barrier to
separate individuals/groups within the same
firm and prevents confidential information passing between them.

This operation is performed by calling function `createShieldInformationBarrier`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-shield-information-barriers/).

*Currently we don't have an example for calling `createShieldInformationBarrier` in integration tests*

### Arguments

- requestBody `ShieldInformationBarrier`
  - Used as requestBody for the API call
- headers `CreateShieldInformationBarrierHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrier`.

Returns a new shield information barrier object.


