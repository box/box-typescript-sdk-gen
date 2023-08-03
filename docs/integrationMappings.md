# IntegrationMappingsManager


- [List Slack integration mappings](#list-slack-integration-mappings)
- [Create Slack integration mapping](#create-slack-integration-mapping)
- [Update Slack integration mapping](#update-slack-integration-mapping)
- [Delete Slack integration mapping](#delete-slack-integration-mapping)

## List Slack integration mappings

Lists [Slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack) in a users' enterprise.

You need Admin or Co-Admin role to
use this endpoint.

This operation is performed by calling function `getIntegrationMappingSlack`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-integration-mappings-slack/).

*Currently we don't have an example for calling `getIntegrationMappingSlack` in integration tests*

### Arguments

- queryParams `GetIntegrationMappingSlackQueryParamsArg`
  - Query parameters of getIntegrationMappingSlack method
- headers `GetIntegrationMappingSlackHeadersArg`
  - Headers of getIntegrationMappingSlack method


### Returns

This function returns a value of type `IntegrationMappings`.

Returns a collection of integration mappings


## Create Slack integration mapping

Creates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
by mapping a Slack channel to a Box item.

You need Admin or Co-Admin role to
use this endpoint.

This operation is performed by calling function `createIntegrationMappingSlack`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-integration-mappings-slack/).

*Currently we don't have an example for calling `createIntegrationMappingSlack` in integration tests*

### Arguments

- requestBody `IntegrationMappingSlackCreateRequest`
  - Request body of createIntegrationMappingSlack method
- headers `CreateIntegrationMappingSlackHeadersArg`
  - Headers of createIntegrationMappingSlack method


### Returns

This function returns a value of type `IntegrationMapping`.

Returns the created integration mapping.


## Update Slack integration mapping

Updates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
Supports updating the Box folder ID and options.

You need Admin or Co-Admin role to
use this endpoint.

This operation is performed by calling function `updateIntegrationMappingSlackById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-integration-mappings-slack-id/).

*Currently we don't have an example for calling `updateIntegrationMappingSlackById` in integration tests*

### Arguments

- integrationMappingId `string`
  - An ID of an integration mapping Example: "11235432"
- requestBody `UpdateIntegrationMappingSlackByIdRequestBodyArg`
  - Request body of updateIntegrationMappingSlackById method
- headers `UpdateIntegrationMappingSlackByIdHeadersArg`
  - Headers of updateIntegrationMappingSlackById method


### Returns

This function returns a value of type `IntegrationMapping`.

Returns the updated integration mapping object.


## Delete Slack integration mapping

Deletes a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).


You need Admin or Co-Admin role to
use this endpoint.

This operation is performed by calling function `deleteIntegrationMappingSlackById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-integration-mappings-slack-id/).

*Currently we don't have an example for calling `deleteIntegrationMappingSlackById` in integration tests*

### Arguments

- integrationMappingId `string`
  - An ID of an integration mapping Example: "11235432"
- headers `DeleteIntegrationMappingSlackByIdHeadersArg`
  - Headers of deleteIntegrationMappingSlackById method


### Returns

This function returns a value of type `undefined`.

Empty body in response


