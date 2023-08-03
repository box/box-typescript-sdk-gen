# UsersManager

## List enterprise users

Returns a list of all users for the Enterprise along with their &#x60;user_id&#x60;,
&#x60;public_name&#x60;, and &#x60;login&#x60;.

The application and the authenticated user need to
have the permission to look up users in the entire
enterprise.

This operation is performed by calling function `getUsers`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-users/).

<!-- sample get_users -->
```ts
await client.users.getUsers()
```

### Arguments

- queryParams `GetUsersQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetUsersHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `Users`.

Returns all of the users in the enterprise.


## Create user

Creates a new managed user in an enterprise. This endpoint
is only available to users and applications with the right
admin permissions.

This operation is performed by calling function `createUser`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-users/).

<!-- sample post_users -->
```ts
await client.users.createUser({ name: userName, login: userLogin, isPlatformAccessOnly: true } satisfies CreateUserRequestBodyArg)
```

### Arguments

- requestBody `CreateUserRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `CreateUserQueryParamsArg`
  - Used as queryParams for the API call
- headers `CreateUserHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `User`.

Returns a user object for the newly created user.


## Get current user

Retrieves information about the user who is currently authenticated.

In the case of a client-side authenticated OAuth 2.0 application
this will be the user who authorized the app.

In the case of a JWT, server-side authenticated application
this will be the service account that belongs to the application
by default.

Use the &#x60;As-User&#x60; header to change who this API call is made on behalf of.

This operation is performed by calling function `getUserMe`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-users-me/).

<!-- sample get_users_me -->
```ts
await client.users.getUserMe()
```

### Arguments

- queryParams `GetUserMeQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetUserMeHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `UserFull`.

Returns a single user object.


## Get user

Retrieves information about a user in the enterprise.

The application and the authenticated user need to
have the permission to look up users in the entire
enterprise.

This endpoint also returns a limited set of information
for external users who are collaborated on content
owned by the enterprise for authenticated users with the
right scopes. In this case, disallowed fields will return
null instead.

This operation is performed by calling function `getUserById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-users-id/).

<!-- sample get_users_id -->
```ts
await client.users.getUserById(user.id)
```

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call
- queryParams `GetUserByIdQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetUserByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `UserFull`.

Returns a single user object.

Not all available fields are returned by default. Use the
[fields](#param-fields) query parameter to explicitly request
any specific fields using the [fields](#get-users-id--request--fields)
parameter.


## Update user

Updates a managed or app user in an enterprise. This endpoint
is only available to users and applications with the right
admin permissions.

This operation is performed by calling function `updateUserById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-users-id/).

<!-- sample put_users_id -->
```ts
await client.users.updateUserById(user.id, { name: updatedUserName } satisfies UpdateUserByIdRequestBodyArg)
```

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call
- requestBody `UpdateUserByIdRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `UpdateUserByIdQueryParamsArg`
  - Used as queryParams for the API call
- headers `UpdateUserByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `UserFull`.

Returns the updated user object.


## Delete user

Deletes a user. By default this will fail if the user
still owns any content. Move their owned content first
before proceeding, or use the &#x60;force&#x60; field to delete
the user and their files.

This operation is performed by calling function `deleteUserById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-users-id/).

<!-- sample delete_users_id -->
```ts
await client.users.deleteUserById(user.id)
```

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call
- queryParams `DeleteUserByIdQueryParamsArg`
  - Used as queryParams for the API call
- headers `DeleteUserByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Removes the user and returns an empty response.


