# IntegrationMappingsManager

## List Slack integration mappings

Lists [Slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack) in a users&#x27; enterprise.

You need Admin or Co-Admin role to
use this endpoint.

This operation is performed by calling function `getIntegrationMappingSlack`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-integration-mappings-slack/).

*Currently we don't have an example for calling `getIntegrationMappingSlack` in integration tests*

### Arguments

- queryParams `GetIntegrationMappingSlackQueryParamsArg`
  - Used as queryParams for the API call
- headers `GetIntegrationMappingSlackHeadersArg`
  - Used as headers for the API call


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
  - Used as requestBody for the API call
- headers `CreateIntegrationMappingSlackHeadersArg`
  - Used as headers for the API call


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
  - An ID of an integration mapping
  - Used as `integration_mapping_id` in path `path` of the API call
- requestBody `UpdateIntegrationMappingSlackByIdRequestBodyArg`
  - Used as requestBody for the API call
- headers `UpdateIntegrationMappingSlackByIdHeadersArg`
  - Used as headers for the API call


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
  - An ID of an integration mapping
  - Used as `integration_mapping_id` in path `path` of the API call
- headers `DeleteIntegrationMappingSlackByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Empty body in response


