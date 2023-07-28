# TermsOfServicesManager

## List terms of services

Returns the current terms of service text and settings
for the enterprise.

This operation is performed by calling function `getTermOfServices`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-terms-of-services/).

*Currently we don't have an example for calling `getTermOfServices` in integration tests*

### Arguments

- queryParams `GetTermOfServicesQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `TermsOfServices`.

Returns a collection of terms of service text and settings for the
enterprise.


## Create terms of service

Creates a terms of service for a given enterprise
and type of user.

This operation is performed by calling function `createTermOfService`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-terms-of-services/).

*Currently we don't have an example for calling `createTermOfService` in integration tests*

### Arguments

- requestBody `CreateTermOfServiceRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `Task`.

Returns a new task object


## Get terms of service

Fetches a specific terms of service.

This operation is performed by calling function `getTermOfServiceById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-terms-of-services-id/).

*Currently we don't have an example for calling `getTermOfServiceById` in integration tests*

### Arguments

- termsOfServiceId `string`
  - The ID of the terms of service.
  - Used as `terms_of_service_id` in path `path` of the API call


### Returns

This function returns a value of type `TermsOfService`.

Returns a terms of service object.


## Update terms of service

Updates a specific terms of service.

This operation is performed by calling function `updateTermOfServiceById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-terms-of-services-id/).

*Currently we don't have an example for calling `updateTermOfServiceById` in integration tests*

### Arguments

- termsOfServiceId `string`
  - The ID of the terms of service.
  - Used as `terms_of_service_id` in path `path` of the API call
- requestBody `UpdateTermOfServiceByIdRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `TermsOfService`.

Returns an updated terms of service object.


