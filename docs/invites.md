# InvitesManager

## Create user invite

Invites an existing external user to join an enterprise.

The existing user can not be part of another enterprise and
must already have a Box account. Once invited, the user will receive an
email and are prompted to accept the invitation within the
Box web application.

This method requires the &quot;Manage An Enterprise&quot; scope enabled for
the application, which can be enabled within the developer console.

This operation is performed by calling function `createInvite`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-invites/).

*Currently we don't have an example for calling `createInvite` in integration tests*

### Arguments

- requestBody `CreateInviteRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `CreateInviteQueryParamsArg`
  - Used as queryParams for the API call
- headers `CreateInviteHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `Invite`.

Returns a new invite object.


## Get user invite status

Returns the status of a user invite.

This operation is performed by calling function `getInviteById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-invites-id/).

*Currently we don't have an example for calling `getInviteById` in integration tests*

### Arguments

- inviteId `string`
  - The ID of an invite.
  - Used as `invite_id` in path `path` of the API call
- queryParams `GetInviteByIdQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetInviteByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `Invite`.

Returns an invite object


