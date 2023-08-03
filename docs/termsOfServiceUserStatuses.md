# TermsOfServiceUserStatusesManager

## List terms of service user statuses

Retrieves an overview of users and their status for a
terms of service, including Whether they have accepted
the terms and when.

This operation is performed by calling function `getTermOfServiceUserStatuses`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-terms-of-service-user-statuses/).

*Currently we don't have an example for calling `getTermOfServiceUserStatuses` in integration tests*

### Arguments

- queryParams `GetTermOfServiceUserStatusesQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetTermOfServiceUserStatusesHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `TermsOfServiceUserStatuses`.

Returns a list of terms of service statuses.


## Create terms of service status for new user

Sets the status for a terms of service for a user.

This operation is performed by calling function `createTermOfServiceUserStatus`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-terms-of-service-user-statuses/).

*Currently we don't have an example for calling `createTermOfServiceUserStatus` in integration tests*

### Arguments

- requestBody `CreateTermOfServiceUserStatusRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateTermOfServiceUserStatusHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `TermsOfServiceUserStatus`.

Returns a terms of service status object.


## Update terms of service status for existing user

Updates the status for a terms of service for a user.

This operation is performed by calling function `updateTermOfServiceUserStatusById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-terms-of-service-user-statuses-id/).

*Currently we don't have an example for calling `updateTermOfServiceUserStatusById` in integration tests*

### Arguments

- termsOfServiceUserStatusId `string`
  - The ID of the terms of service status.
  - Used as `terms_of_service_user_status_id` in path `path` of the API call
- requestBody `UpdateTermOfServiceUserStatusByIdRequestBodyArg`
  - Used as requestBody for the API call
- headers `UpdateTermOfServiceUserStatusByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `TermsOfServiceUserStatus`.

Returns the updated terms of service status object.


