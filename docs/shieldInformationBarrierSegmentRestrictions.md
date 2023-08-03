# ShieldInformationBarrierSegmentRestrictionsManager

## Get shield information barrier segment restriction by ID

Retrieves a shield information barrier segment
restriction based on provided ID.

This operation is performed by calling function `getShieldInformationBarrierSegmentRestrictionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-segment-restrictions-id/).

*Currently we don't have an example for calling `getShieldInformationBarrierSegmentRestrictionById` in integration tests*

### Arguments

- shieldInformationBarrierSegmentRestrictionId `string`
  - The ID of the shield information barrier segment Restriction.
  - Used as `shield_information_barrier_segment_restriction_id` in path `path` of the API call
- headers `GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrierSegmentRestriction`.

Returns the shield information barrier segment
restriction object.


## Delete shield information barrier segment restriction by ID

Delete shield information barrier segment restriction
based on provided ID.

This operation is performed by calling function `deleteShieldInformationBarrierSegmentRestrictionById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-shield-information-barrier-segment-restrictions-id/).

*Currently we don't have an example for calling `deleteShieldInformationBarrierSegmentRestrictionById` in integration tests*

### Arguments

- shieldInformationBarrierSegmentRestrictionId `string`
  - The ID of the shield information barrier segment Restriction.
  - Used as `shield_information_barrier_segment_restriction_id` in path `path` of the API call
- headers `DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Empty body in response


## List shield information barrier segment restrictions

Lists shield information barrier segment restrictions
based on provided segment ID.

This operation is performed by calling function `getShieldInformationBarrierSegmentRestrictions`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-segment-restrictions/).

*Currently we don't have an example for calling `getShieldInformationBarrierSegmentRestrictions` in integration tests*

### Arguments

- queryParams `GetShieldInformationBarrierSegmentRestrictionsQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetShieldInformationBarrierSegmentRestrictionsHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns a paginated list of
shield information barrier segment restriction objects.


## Create shield information barrier segment restriction

Creates a shield information barrier
segment restriction object.

This operation is performed by calling function `createShieldInformationBarrierSegmentRestriction`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-shield-information-barrier-segment-restrictions/).

*Currently we don't have an example for calling `createShieldInformationBarrierSegmentRestriction` in integration tests*

### Arguments

- requestBody `CreateShieldInformationBarrierSegmentRestrictionRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateShieldInformationBarrierSegmentRestrictionHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrierSegmentRestriction`.

Returns the newly created Shield
Information Barrier Segment Restriction object.


