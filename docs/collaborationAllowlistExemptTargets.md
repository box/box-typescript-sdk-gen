# CollaborationAllowlistExemptTargetsManager

<!-- box-typescript-sdk-gen deprecation banner -->
> [!CAUTION]
> **`box-typescript-sdk-gen` is deprecated and no longer maintained.** As of September 17, 2025, it receives no new features, bug fixes, or security patches. Do not use it for new projects.
>
> Use [`box-node-sdk`](https://github.com/box/box-node-sdk) v10+ instead: `npm install box-node-sdk`.
> The equivalent of this page is [box-node-sdk/docs/collaborationAllowlistExemptTargets.md](https://github.com/box/box-node-sdk/blob/main/docs/collaborationAllowlistExemptTargets.md). To migrate existing code, see the [migration guide](https://github.com/box/box-node-sdk/blob/main/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md).

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

- queryParams `GetCollaborationWhitelistExemptTargetsQueryParams`
  - Query parameters of getCollaborationWhitelistExemptTargets method
- headersInput `GetCollaborationWhitelistExemptTargetsHeadersInput`
  - Headers of getCollaborationWhitelistExemptTargets method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

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
    } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyUserField,
  } satisfies CreateCollaborationWhitelistExemptTargetRequestBody,
);
```

### Arguments

- requestBody `CreateCollaborationWhitelistExemptTargetRequestBody`
  - Request body of createCollaborationWhitelistExemptTarget method
- optionalsInput `CreateCollaborationWhitelistExemptTargetOptionalsInput`

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
  newExemptTarget.id!,
);
```

### Arguments

- collaborationWhitelistExemptTargetId `string`
  - The ID of the exemption to the list. Example: "984923"
- optionalsInput `GetCollaborationWhitelistExemptTargetByIdOptionalsInput`

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
  exemptTarget.id!,
);
```

### Arguments

- collaborationWhitelistExemptTargetId `string`
  - The ID of the exemption to the list. Example: "984923"
- optionalsInput `DeleteCollaborationWhitelistExemptTargetByIdOptionalsInput`

### Returns

This function returns a value of type `undefined`.

A blank response is returned if the exemption was
successfully deleted.
