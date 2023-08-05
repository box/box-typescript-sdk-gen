# EmailAliasesManager


- [List user's email aliases](#list-users-email-aliases)
- [Create email alias](#create-email-alias)
- [Remove email alias](#remove-email-alias)

## List user's email aliases

Retrieves all email aliases for a user. The collection
does not include the primary login for the user.

This operation is performed by calling function `getUserEmailAliases`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-users-id-email-aliases/).

*Currently we don't have an example for calling `getUserEmailAliases` in integration tests*

### Arguments

- userId `string`
  - The ID of the user. Example: "12345"
- headers `GetUserEmailAliasesHeadersArg`
  - Headers of getUserEmailAliases method


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
  - The ID of the user. Example: "12345"
- requestBody `CreateUserEmailAliasRequestBodyArg`
  - Request body of createUserEmailAlias method
- headers `CreateUserEmailAliasHeadersArg`
  - Headers of createUserEmailAlias method


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
  - The ID of the user. Example: "12345"
- emailAliasId `string`
  - The ID of the email alias. Example: "23432"
- headers `DeleteUserEmailAliasByIdHeadersArg`
  - Headers of deleteUserEmailAliasById method


### Returns

This function returns a value of type `undefined`.

Removes the alias and returns an empty response.


