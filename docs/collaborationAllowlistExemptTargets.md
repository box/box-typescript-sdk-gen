# CollaborationAllowlistExemptTargetsManager

- [List users exempt from collaboration domain restrictions](#list-users-exempt-from-collaboration-domain-restrictions)
- [Create user exemption from collaboration domain restrictions](#create-user-exemption-from-collaboration-domain-restrictions)
- [Get user exempt from collaboration domain restrictions](#get-user-exempt-from-collaboration-domain-restrictions)
- [Remove user from list of users exempt from domain restrictions](#remove-user-from-list-of-users-exempt-from-domain-restrictions)

## List users exempt from collaboration domain restrictions

Returns a list of users who have been exempt from the collaboration
domain restrictions.

This operation is performed by calling function `getCollaborationWhitelistExemptTargets`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-collaboration-whitelist-exempt-targets/).

<!-- sample get_collaboration_whitelist_exempt_targets -->

```ts
await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargets();
```

### Arguments

- queryParams `GetCollaborationWhitelistExemptTargetsQueryParamsArg`
  - Query parameters of getCollaborationWhitelistExemptTargets method
- headers `GetCollaborationWhitelistExemptTargetsHeadersArg`
  - Headers of getCollaborationWhitelistExemptTargets method

### Returns

This function returns a value of type `CollaborationAllowlistExemptTargets`.

Returns a collection of user exemptions.

## Create user exemption from collaboration domain restrictions

Exempts a user from the restrictions set out by the allowed list of domains
for collaborations.

This operation is performed by calling function `createCollaborationWhitelistExemptTarget`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-collaboration-whitelist-exempt-targets/).

<!-- sample post_collaboration_whitelist_exempt_targets -->

```ts
await client.collaborationAllowlistExemptTargets.createCollaborationWhitelistExemptTarget(
  {
    user: {
      id: user.id,
    } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField,
  } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArg
);
```

### Arguments

- requestBody `CreateCollaborationWhitelistExemptTargetRequestBodyArg`
  - Request body of createCollaborationWhitelistExemptTarget method
- headers `CreateCollaborationWhitelistExemptTargetHeadersArg`
  - Headers of createCollaborationWhitelistExemptTarget method

### Returns

This function returns a value of type `CollaborationAllowlistExemptTarget`.

Returns a new exemption entry.

## Get user exempt from collaboration domain restrictions

Returns a users who has been exempt from the collaboration
domain restrictions.

This operation is performed by calling function `getCollaborationWhitelistExemptTargetById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-collaboration-whitelist-exempt-targets-id/).

<!-- sample get_collaboration_whitelist_exempt_targets_id -->

```ts
await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(
  exemptTarget.id!
);
```

### Arguments

- collaborationWhitelistExemptTargetId `string`
  - The ID of the exemption to the list. Example: "984923"
- headers `GetCollaborationWhitelistExemptTargetByIdHeadersArg`
  - Headers of getCollaborationWhitelistExemptTargetById method

### Returns

This function returns a value of type `CollaborationAllowlistExemptTarget`.

Returns the user's exempted from the list of collaboration domains.

## Remove user from list of users exempt from domain restrictions

Removes a user's exemption from the restrictions set out by the allowed list
of domains for collaborations.

This operation is performed by calling function `deleteCollaborationWhitelistExemptTargetById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-collaboration-whitelist-exempt-targets-id/).

<!-- sample delete_collaboration_whitelist_exempt_targets_id -->

```ts
await client.collaborationAllowlistExemptTargets.deleteCollaborationWhitelistExemptTargetById(
  exemptTarget.id!
);
```

### Arguments

- collaborationWhitelistExemptTargetId `string`
  - The ID of the exemption to the list. Example: "984923"
- headers `DeleteCollaborationWhitelistExemptTargetByIdHeadersArg`
  - Headers of deleteCollaborationWhitelistExemptTargetById method

### Returns

This function returns a value of type `undefined`.

A blank response is returned if the exemption was
successfully deleted.
