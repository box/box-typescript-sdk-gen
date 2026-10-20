# SessionTerminationManager

<!-- box-typescript-sdk-gen deprecation banner -->
> [!CAUTION]
> **`box-typescript-sdk-gen` is deprecated and no longer maintained.** As of September 17, 2025, it receives no new features, bug fixes, or security patches. Do not use it for new projects.
>
> Use [`box-node-sdk`](https://github.com/box/box-node-sdk) v10+ instead: `npm install box-node-sdk`.
> The equivalent of this page is [box-node-sdk/docs/sessionTermination.md](https://github.com/box/box-node-sdk/blob/main/docs/sessionTermination.md). To migrate existing code, see the [migration guide](https://github.com/box/box-node-sdk/blob/main/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md).

- [Create jobs to terminate users session](#create-jobs-to-terminate-users-session)
- [Create jobs to terminate user group session](#create-jobs-to-terminate-user-group-session)

## Create jobs to terminate users session

Validates the roles and permissions of the user,
and creates asynchronous jobs
to terminate the user's sessions.
Returns the status for the POST request.

This operation is performed by calling function `terminateUsersSessions`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-users-terminate-sessions/).

<!-- sample post_users_terminate_sessions -->

```ts
await client.sessionTermination.terminateUsersSessions({
  userIds: [getEnvVar('USER_ID')],
  userLogins: [user.login!],
} satisfies TerminateUsersSessionsRequestBody);
```

### Arguments

- requestBody `TerminateUsersSessionsRequestBody`
  - Request body of terminateUsersSessions method
- optionalsInput `TerminateUsersSessionsOptionalsInput`

### Returns

This function returns a value of type `SessionTerminationMessage`.

Returns a message about the request status.

## Create jobs to terminate user group session

Validates the roles and permissions of the group,
and creates asynchronous jobs
to terminate the group's sessions.
Returns the status for the POST request.

This operation is performed by calling function `terminateGroupsSessions`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-groups-terminate-sessions/).

<!-- sample post_groups_terminate_sessions -->

```ts
await client.sessionTermination.terminateGroupsSessions({
  groupIds: [group.id],
} satisfies TerminateGroupsSessionsRequestBody);
```

### Arguments

- requestBody `TerminateGroupsSessionsRequestBody`
  - Request body of terminateGroupsSessions method
- optionalsInput `TerminateGroupsSessionsOptionalsInput`

### Returns

This function returns a value of type `SessionTerminationMessage`.

Returns a message about the request status.
