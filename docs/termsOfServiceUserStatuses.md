# TermsOfServiceUserStatusesManager

- [List terms of service user statuses](#list-terms-of-service-user-statuses)
- [Create terms of service status for new user](#create-terms-of-service-status-for-new-user)
- [Update terms of service status for existing user](#update-terms-of-service-status-for-existing-user)

## List terms of service user statuses

Retrieves an overview of users and their status for a
terms of service, including Whether they have accepted
the terms and when.

This operation is performed by calling function `getTermOfServiceUserStatuses`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-terms-of-service-user-statuses/).

_Currently we don't have an example for calling `getTermOfServiceUserStatuses` in integration tests_

### Arguments

- queryParams `GetTermOfServiceUserStatusesQueryParamsArg`
  - Query parameters of getTermOfServiceUserStatuses method
- headers `GetTermOfServiceUserStatusesHeadersArg`
  - Headers of getTermOfServiceUserStatuses method

### Returns

This function returns a value of type `TermsOfServiceUserStatuses`.

Returns a list of terms of service statuses.

## Create terms of service status for new user

Sets the status for a terms of service for a user.

This operation is performed by calling function `createTermOfServiceUserStatus`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-terms-of-service-user-statuses/).

_Currently we don't have an example for calling `createTermOfServiceUserStatus` in integration tests_

### Arguments

- requestBody `CreateTermOfServiceUserStatusRequestBodyArg`
  - Request body of createTermOfServiceUserStatus method
- headers `CreateTermOfServiceUserStatusHeadersArg`
  - Headers of createTermOfServiceUserStatus method

### Returns

This function returns a value of type `TermsOfServiceUserStatus`.

Returns a terms of service status object.

## Update terms of service status for existing user

Updates the status for a terms of service for a user.

This operation is performed by calling function `updateTermOfServiceUserStatusById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-terms-of-service-user-statuses-id/).

_Currently we don't have an example for calling `updateTermOfServiceUserStatusById` in integration tests_

### Arguments

- termsOfServiceUserStatusId `string`
  - The ID of the terms of service status. Example: "324234"
- requestBody `UpdateTermOfServiceUserStatusByIdRequestBodyArg`
  - Request body of updateTermOfServiceUserStatusById method
- headers `UpdateTermOfServiceUserStatusByIdHeadersArg`
  - Headers of updateTermOfServiceUserStatusById method

### Returns

This function returns a value of type `TermsOfServiceUserStatus`.

Returns the updated terms of service status object.
