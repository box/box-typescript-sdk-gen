# ShieldInformationBarrierSegmentsManager

## Get shield information barrier segment with specified ID

Retrieves shield information barrier segment based on provided ID..

This operation is performed by calling function `getShieldInformationBarrierSegmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-segments-id/).

*Currently we don't have an example for calling `getShieldInformationBarrierSegmentById` in integration tests*

### Arguments

- shieldInformationBarrierSegmentId `string`
  - The ID of the shield information barrier segment.
  - Used as `shield_information_barrier_segment_id` in path `path` of the API call
- headers `GetShieldInformationBarrierSegmentByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrierSegment`.

Returns the shield information barrier segment object.


## Update shield information barrier segment with specified ID

Updates the shield information barrier segment based on provided ID..

This operation is performed by calling function `updateShieldInformationBarrierSegmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-shield-information-barrier-segments-id/).

*Currently we don't have an example for calling `updateShieldInformationBarrierSegmentById` in integration tests*

### Arguments

- shieldInformationBarrierSegmentId `string`
  - The ID of the shield information barrier segment.
  - Used as `shield_information_barrier_segment_id` in path `path` of the API call
- requestBody `UpdateShieldInformationBarrierSegmentByIdRequestBodyArg`
  - Used as requestBody for the API call
- headers `UpdateShieldInformationBarrierSegmentByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrierSegment`.

Returns the updated shield information barrier segment object.


## Delete shield information barrier segment

Deletes the shield information barrier segment
based on provided ID.

This operation is performed by calling function `deleteShieldInformationBarrierSegmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-shield-information-barrier-segments-id/).

*Currently we don't have an example for calling `deleteShieldInformationBarrierSegmentById` in integration tests*

### Arguments

- shieldInformationBarrierSegmentId `string`
  - The ID of the shield information barrier segment.
  - Used as `shield_information_barrier_segment_id` in path `path` of the API call
- headers `DeleteShieldInformationBarrierSegmentByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Empty body in response


## List shield information barrier segments

Retrieves a list of shield information barrier segment objects
for the specified Information Barrier ID.

This operation is performed by calling function `getShieldInformationBarrierSegments`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-segments/).

*Currently we don't have an example for calling `getShieldInformationBarrierSegments` in integration tests*

### Arguments

- queryParams `GetShieldInformationBarrierSegmentsQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetShieldInformationBarrierSegmentsHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns a paginated list of shield information barrier segment objects.


## Create shield information barrier segment

Creates a shield information barrier segment.

This operation is performed by calling function `createShieldInformationBarrierSegment`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-shield-information-barrier-segments/).

*Currently we don't have an example for calling `createShieldInformationBarrierSegment` in integration tests*

### Arguments

- requestBody `CreateShieldInformationBarrierSegmentRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateShieldInformationBarrierSegmentHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrierSegment`.

Returns a new shield information barrier segment object.


