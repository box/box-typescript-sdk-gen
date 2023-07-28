# MembershipsManager

## List user&#x27;s groups

Retrieves all the groups for a user. Only members of this
group or users with admin-level permissions will be able to
use this API.

This operation is performed by calling function `getUserMemberships`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-users-id-memberships/).

<!-- sample get_users_id_memberships -->
```ts
await client.memberships.getUserMemberships(user.id)
```

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call
- queryParams `GetUserMembershipsQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `GroupMemberships`.

Returns a collection of membership objects. If there are no
memberships, an empty collection will be returned.


## List members of group

Retrieves all the members for a group. Only members of this
group or users with admin-level permissions will be able to
use this API.

This operation is performed by calling function `getGroupMemberships`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-groups-id-memberships/).

<!-- sample get_groups_id_memberships -->
```ts
await client.memberships.getGroupMemberships(group.id)
```

### Arguments

- groupId `string`
  - The ID of the group.
  - Used as `group_id` in path `path` of the API call
- queryParams `GetGroupMembershipsQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `GroupMemberships`.

Returns a collection of membership objects. If there are no
memberships, an empty collection will be returned.


## Add user to group

Creates a group membership. Only users with
admin-level permissions will be able to use this API.

This operation is performed by calling function `createGroupMembership`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-group-memberships/).

<!-- sample post_group_memberships -->
```ts
await client.memberships.createGroupMembership({ user: user, group: group } satisfies CreateGroupMembershipRequestBodyArg)
```

### Arguments

- requestBody `CreateGroupMembershipRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `CreateGroupMembershipQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `GroupMembership`.

Returns a new group membership object.


## Get group membership

Retrieves a specific group membership. Only admins of this
group or users with admin-level permissions will be able to
use this API.

This operation is performed by calling function `getGroupMembershipById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-group-memberships-id/).

<!-- sample get_group_memberships_id -->
```ts
await client.memberships.getGroupMembershipById(groupMembership.id)
```

### Arguments

- groupMembershipId `string`
  - The ID of the group membership.
  - Used as `group_membership_id` in path `path` of the API call
- queryParams `GetGroupMembershipByIdQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `GroupMembership`.

Returns the group membership object.


## Update group membership

Updates a user&#x27;s group membership. Only admins of this
group or users with admin-level permissions will be able to
use this API.

This operation is performed by calling function `updateGroupMembershipById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-group-memberships-id/).

<!-- sample put_group_memberships_id -->
```ts
await client.memberships.updateGroupMembershipById(groupMembership.id, { role: &quot;admin&quot; as UpdateGroupMembershipByIdRequestBodyArgRoleField } satisfies UpdateGroupMembershipByIdRequestBodyArg)
```

### Arguments

- groupMembershipId `string`
  - The ID of the group membership.
  - Used as `group_membership_id` in path `path` of the API call
- requestBody `UpdateGroupMembershipByIdRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `UpdateGroupMembershipByIdQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `GroupMembership`.

Returns a new group membership object.


## Remove user from group

Deletes a specific group membership. Only admins of this
group or users with admin-level permissions will be able to
use this API.

This operation is performed by calling function `deleteGroupMembershipById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-group-memberships-id/).

<!-- sample delete_group_memberships_id -->
```ts
await client.memberships.deleteGroupMembershipById(groupMembership.id)
```

### Arguments

- groupMembershipId `string`
  - The ID of the group membership.
  - Used as `group_membership_id` in path `path` of the API call


