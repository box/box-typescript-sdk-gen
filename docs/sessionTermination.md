# SessionTerminationManager

- [Create jobs to terminate users session](#create-jobs-to-terminate-users-session)
- [Create jobs to terminate user group session](#create-jobs-to-terminate-user-group-session)

## Create jobs to terminate users session

Validates the roles and permissions of the user,
and creates asynchronous jobs
to terminate the user's sessions.
Returns the status for the POST request.

This operation is performed by calling function `createUserTerminateSession`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-users-terminate-sessions/).

_Currently we don't have an example for calling `createUserTerminateSession` in integration tests_

### Arguments

- requestBody `CreateUserTerminateSessionRequestBodyArg`
  - Request body of createUserTerminateSession method
- headers `CreateUserTerminateSessionHeadersArg`
  - Headers of createUserTerminateSession method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `SessionTerminationMessage`.

Returns a message about the request status.

## Create jobs to terminate user group session

Validates the roles and permissions of the group,
and creates asynchronous jobs
to terminate the group's sessions.
Returns the status for the POST request.

This operation is performed by calling function `createGroupTerminateSession`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-groups-terminate-sessions/).

_Currently we don't have an example for calling `createGroupTerminateSession` in integration tests_

### Arguments

- requestBody `CreateGroupTerminateSessionRequestBodyArg`
  - Request body of createGroupTerminateSession method
- headers `CreateGroupTerminateSessionHeadersArg`
  - Headers of createGroupTerminateSession method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `SessionTerminationMessage`.

Returns a message about the request status.
