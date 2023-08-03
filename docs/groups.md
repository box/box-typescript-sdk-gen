# GroupsManager

## List groups for enterprise

Retrieves all of the groups for a given enterprise. The user
must have admin permissions to inspect enterprise&#x27;s groups.

This operation is performed by calling function `getGroups`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-groups/).

<!-- sample get_groups -->
```ts
await client.groups.getGroups()
```

### Arguments

- queryParams `GetGroupsQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetGroupsHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `Groups`.

Returns a collection of group objects. If there are no groups, an
empty collection will be returned.


## Create group

Creates a new group of users in an enterprise. Only users with admin
permissions can create new groups.

This operation is performed by calling function `createGroup`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-groups/).

<!-- sample post_groups -->
```ts
await client.groups.createGroup({ name: getUuid() } satisfies CreateGroupRequestBodyArg)
```

### Arguments

- requestBody `CreateGroupRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `CreateGroupQueryParamsArg`
  - Used as queryParams for the API call
- headers `CreateGroupHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `Group`.

Returns the new group object.


## Get group

Retrieves information about a group. Only members of this
group or users with admin-level permissions will be able to
use this API.

This operation is performed by calling function `getGroupById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-groups-id/).

<!-- sample get_groups_id -->
```ts
await client.groups.getGroupById(group.id)
```

### Arguments

- groupId `string`
  - The ID of the group.
  - Used as `group_id` in path `path` of the API call
- queryParams `GetGroupByIdQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetGroupByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `GroupFull`.

Returns the group object


## Update group

Updates a specific group. Only admins of this
group or users with admin-level permissions will be able to
use this API.

This operation is performed by calling function `updateGroupById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-groups-id/).

<!-- sample put_groups_id -->
```ts
await client.groups.updateGroupById(group.id, { name: updatedGroupName } satisfies UpdateGroupByIdRequestBodyArg)
```

### Arguments

- groupId `string`
  - The ID of the group.
  - Used as `group_id` in path `path` of the API call
- requestBody `UpdateGroupByIdRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `UpdateGroupByIdQueryParamsArg`
  - Used as queryParams for the API call
- headers `UpdateGroupByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `GroupFull`.

Returns the updated group object.


## Remove group

Permanently deletes a group. Only users with
admin-level permissions will be able to use this API.

This operation is performed by calling function `deleteGroupById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-groups-id/).

<!-- sample delete_groups_id -->
```ts
await client.groups.deleteGroupById(group.id)
```

### Arguments

- groupId `string`
  - The ID of the group.
  - Used as `group_id` in path `path` of the API call
- headers `DeleteGroupByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

A blank response is returned if the group was
successfully deleted.


