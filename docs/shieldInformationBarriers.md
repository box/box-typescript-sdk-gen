# ShieldInformationBarriersManager

- [Get shield information barrier with specified ID](#get-shield-information-barrier-with-specified-id)
- [Add changed status of shield information barrier with specified ID](#add-changed-status-of-shield-information-barrier-with-specified-id)
- [List shield information barriers](#list-shield-information-barriers)
- [Create shield information barrier](#create-shield-information-barrier)

## Get shield information barrier with specified ID

Get shield information barrier based on provided ID.

This operation is performed by calling function `getShieldInformationBarrierById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barriers-id/).

_Currently we don't have an example for calling `getShieldInformationBarrierById` in integration tests_

### Arguments

- shieldInformationBarrierId `string`
  - The ID of the shield information barrier. Example: "1910967"
- headers `GetShieldInformationBarrierByIdHeadersArg`
  - Headers of getShieldInformationBarrierById method

### Returns

This function returns a value of type `ShieldInformationBarrier`.

Returns the shield information barrier object.

## Add changed status of shield information barrier with specified ID

Change status of shield information barrier with the specified ID.

This operation is performed by calling function `createShieldInformationBarrierChangeStatus`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-shield-information-barriers-change-status/).

_Currently we don't have an example for calling `createShieldInformationBarrierChangeStatus` in integration tests_

### Arguments

- requestBody `CreateShieldInformationBarrierChangeStatusRequestBodyArg`
  - Request body of createShieldInformationBarrierChangeStatus method
- headers `CreateShieldInformationBarrierChangeStatusHeadersArg`
  - Headers of createShieldInformationBarrierChangeStatus method

### Returns

This function returns a value of type `ShieldInformationBarrier`.

Returns the updated shield information barrier object.

## List shield information barriers

Retrieves a list of shield information barrier objects
for the enterprise of JWT.

This operation is performed by calling function `getShieldInformationBarriers`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barriers/).

_Currently we don't have an example for calling `getShieldInformationBarriers` in integration tests_

### Arguments

- queryParams `GetShieldInformationBarriersQueryParamsArg`
  - Query parameters of getShieldInformationBarriers method
- headers `GetShieldInformationBarriersHeadersArg`
  - Headers of getShieldInformationBarriers method

### Returns

This function returns a value of type `ShieldInformationBarriers`.

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

_Currently we don't have an example for calling `createShieldInformationBarrier` in integration tests_

### Arguments

- requestBody `CreateShieldInformationBarrierRequestBodyArg`
  - Request body of createShieldInformationBarrier method
- headers `CreateShieldInformationBarrierHeadersArg`
  - Headers of createShieldInformationBarrier method

### Returns

This function returns a value of type `ShieldInformationBarrier`.

Returns a new shield information barrier object.
