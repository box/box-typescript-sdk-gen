# EmailAliasesManager

## List user&#x27;s email aliases

Retrieves all email aliases for a user. The collection
does not include the primary login for the user.

This operation is performed by calling function `getUserEmailAliases`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-users-id-email-aliases/).

*Currently we don't have an example for calling `getUserEmailAliases` in integration tests*

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call


### Returns

This function returns a value of type `EmailAliases`.

Returns a collection of email aliases.


## Create email alias

Adds a new email alias to a user account..

This operation is performed by calling function `createUserEmailAlias`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-users-id-email-aliases/).

*Currently we don't have an example for calling `createUserEmailAlias` in integration tests*

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call
- requestBody `CreateUserEmailAliasRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `EmailAlias`.

Returns the newly created email alias object.


## Remove email alias

Removes an email alias from a user.

This operation is performed by calling function `deleteUserEmailAliasById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-users-id-email-aliases-id/).

*Currently we don't have an example for calling `deleteUserEmailAliasById` in integration tests*

### Arguments

- userId `string`
  - The ID of the user.
  - Used as `user_id` in path `path` of the API call
- emailAliasId `string`
  - The ID of the email alias.
  - Used as `email_alias_id` in path `path` of the API call


