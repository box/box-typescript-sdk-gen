# SessionTerminationManager

## Create jobs to terminate users session

Validates the roles and permissions of the user,
and creates asynchronous jobs
to terminate the user&#x27;s sessions.
Returns the status for the POST request.

This operation is performed by calling function `createUserTerminateSession`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-users-terminate-sessions/).

*Currently we don't have an example for calling `createUserTerminateSession` in integration tests*

### Arguments

- requestBody `CreateUserTerminateSessionRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateUserTerminateSessionHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `SessionTerminationMessage`.

Returns a message about the request status.


## Create jobs to terminate user group session

Validates the roles and permissions of the group,
and creates asynchronous jobs
to terminate the group&#x27;s sessions.
Returns the status for the POST request.

This operation is performed by calling function `createGroupTerminateSession`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-groups-terminate-sessions/).

*Currently we don't have an example for calling `createGroupTerminateSession` in integration tests*

### Arguments

- requestBody `CreateGroupTerminateSessionRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateGroupTerminateSessionHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `SessionTerminationMessage`.

Returns a message about the request status.


