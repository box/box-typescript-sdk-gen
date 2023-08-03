# AvatarsManager

## Get user avatar

Retrieves an image of a the user&#x27;s avatar.

This operation is performed by calling function `getUserAvatar`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-users-id-avatar/).

<!-- sample get_users_id_avatar -->
```ts
await client.avatars.getUserAvatar(user.id)
```

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call
- headers `GetUserAvatarHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `ByteStream`.

When an avatar can be found for the user the
image data will be returned in the body of the
response.


## Add or update user avatar

Adds or updates a user avatar.

This operation is performed by calling function `createUserAvatar`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-users-id-avatar/).

<!-- sample post_users_id_avatar -->
```ts
await client.avatars.createUserAvatar(user.id, { pic: decodeBase64ByteStream(&quot;iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEW10NBjBBbqAAAAH0lEQVRoge3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAvg0hAAABmmDh1QAAAABJRU5ErkJggg&#x3D;&#x3D;&quot;), picContentType: &quot;image/png&quot;, picFileName: &quot;avatar.png&quot; } satisfies CreateUserAvatarRequestBodyArg)
```

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call
- requestBody `CreateUserAvatarRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateUserAvatarHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `UserAvatar`.

* &#x60;ok&#x60;: Returns the &#x60;pic_urls&#x60; object with URLs to existing
user avatars that were updated.* &#x60;created&#x60;: Returns the &#x60;pic_urls&#x60; object with URLS to user avatars
uploaded to Box with the request.


## Delete user avatar

Removes an existing user avatar.
You cannot reverse this operation.

This operation is performed by calling function `deleteUserAvatar`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-users-id-avatar/).

<!-- sample delete_users_id_avatar -->
```ts
await client.avatars.deleteUserAvatar(user.id)
```

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call
- headers `DeleteUserAvatarHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

* &#x60;no_content&#x60;: Removes the avatar and returns an empty response.


