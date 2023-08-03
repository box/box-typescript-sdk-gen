# CollaborationAllowlistExemptTargetsManager

## List users exempt from collaboration domain restrictions

Returns a list of users who have been exempt from the collaboration
domain restrictions.

This operation is performed by calling function `getCollaborationWhitelistExemptTargets`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-collaboration-whitelist-exempt-targets/).

*Currently we don't have an example for calling `getCollaborationWhitelistExemptTargets` in integration tests*

### Arguments

- queryParams `GetCollaborationWhitelistExemptTargetsQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetCollaborationWhitelistExemptTargetsHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `CollaborationAllowlistExemptTargets`.

Returns a collection of user exemptions.


## Create user exemption from collaboration domain restrictions

Exempts a user from the restrictions set out by the allowed list of domains
for collaborations.

This operation is performed by calling function `createCollaborationWhitelistExemptTarget`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-collaboration-whitelist-exempt-targets/).

*Currently we don't have an example for calling `createCollaborationWhitelistExemptTarget` in integration tests*

### Arguments

- requestBody `CreateCollaborationWhitelistExemptTargetRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateCollaborationWhitelistExemptTargetHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `CollaborationAllowlistExemptTarget`.

Returns a new exemption entry.


## Get user exempt from collaboration domain restrictions

Returns a users who has been exempt from the collaboration
domain restrictions.

This operation is performed by calling function `getCollaborationWhitelistExemptTargetById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-collaboration-whitelist-exempt-targets-id/).

*Currently we don't have an example for calling `getCollaborationWhitelistExemptTargetById` in integration tests*

### Arguments

- collaborationWhitelistExemptTargetId `string`
  - The ID of the exemption to the list.
  - Used as `collaboration_whitelist_exempt_target_id` in path `path` of the API call
- headers `GetCollaborationWhitelistExemptTargetByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `CollaborationAllowlistExemptTarget`.

Returns the user&#x27;s exempted from the list of collaboration domains.


## Remove user from list of users exempt from domain restrictions

Removes a user&#x27;s exemption from the restrictions set out by the allowed list
of domains for collaborations.

This operation is performed by calling function `deleteCollaborationWhitelistExemptTargetById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-collaboration-whitelist-exempt-targets-id/).

*Currently we don't have an example for calling `deleteCollaborationWhitelistExemptTargetById` in integration tests*

### Arguments

- collaborationWhitelistExemptTargetId `string`
  - The ID of the exemption to the list.
  - Used as `collaboration_whitelist_exempt_target_id` in path `path` of the API call
- headers `DeleteCollaborationWhitelistExemptTargetByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

A blank response is returned if the exemption was
successfully deleted.


