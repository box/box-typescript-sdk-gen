# ShieldInformationBarrierSegmentMembersManager

## Get shield information barrier segment member by ID

Retrieves a shield information barrier
segment member by its ID.

This operation is performed by calling function `getShieldInformationBarrierSegmentMemberById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-segment-members-id/).

*Currently we don't have an example for calling `getShieldInformationBarrierSegmentMemberById` in integration tests*

### Arguments

- shieldInformationBarrierSegmentMemberId `string`
  - The ID of the shield information barrier segment Member.
  - Used as `shield_information_barrier_segment_member_id` in path `path` of the API call
- headers `GetShieldInformationBarrierSegmentMemberByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrierSegmentMember`.

Returns the shield information barrier segment member object.


## Delete shield information barrier segment member by ID

Deletes a shield information barrier
segment member based on provided ID.

This operation is performed by calling function `deleteShieldInformationBarrierSegmentMemberById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-shield-information-barrier-segment-members-id/).

*Currently we don't have an example for calling `deleteShieldInformationBarrierSegmentMemberById` in integration tests*

### Arguments

- shieldInformationBarrierSegmentMemberId `string`
  - The ID of the shield information barrier segment Member.
  - Used as `shield_information_barrier_segment_member_id` in path `path` of the API call
- headers `DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns an empty response if the
segment member was deleted successfully.


## List shield information barrier segment members

Lists shield information barrier segment members
based on provided segment IDs.

This operation is performed by calling function `getShieldInformationBarrierSegmentMembers`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shield-information-barrier-segment-members/).

*Currently we don't have an example for calling `getShieldInformationBarrierSegmentMembers` in integration tests*

### Arguments

- queryParams `GetShieldInformationBarrierSegmentMembersQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetShieldInformationBarrierSegmentMembersHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns a paginated list of
shield information barrier segment member objects.


## Create shield information barrier segment member

Creates a new shield information barrier segment member.

This operation is performed by calling function `createShieldInformationBarrierSegmentMember`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-shield-information-barrier-segment-members/).

*Currently we don't have an example for calling `createShieldInformationBarrierSegmentMember` in integration tests*

### Arguments

- requestBody `CreateShieldInformationBarrierSegmentMemberRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateShieldInformationBarrierSegmentMemberHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ShieldInformationBarrierSegmentMember`.

Returns a new shield information barrier segment Member object.


