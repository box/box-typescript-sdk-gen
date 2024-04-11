# IntegrationMappingsManager

- [List Slack integration mappings](#list-slack-integration-mappings)
- [Create Slack integration mapping](#create-slack-integration-mapping)
- [Update Slack integration mapping](#update-slack-integration-mapping)
- [Delete Slack integration mapping](#delete-slack-integration-mapping)

## List Slack integration mappings

Lists [Slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack) in a users' enterprise.

You need Admin or Co-Admin role to
use this endpoint.

This operation is performed by calling function `getSlackIntegrationMapping`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-integration-mappings-slack/).

<!-- sample get_integration_mappings_slack -->

```ts
await userClient.integrationMappings.getSlackIntegrationMapping();
```

### Arguments

- queryParams `GetSlackIntegrationMappingQueryParams`
  - Query parameters of getSlackIntegrationMapping method
- headersInput `GetSlackIntegrationMappingHeadersInput`
  - Headers of getSlackIntegrationMapping method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `IntegrationMappings`.

Returns a collection of integration mappings

## Create Slack integration mapping

Creates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
by mapping a Slack channel to a Box item.

You need Admin or Co-Admin role to
use this endpoint.

This operation is performed by calling function `createSlackIntegrationMapping`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-integration-mappings-slack/).

<!-- sample post_integration_mappings_slack -->

```ts
await userClient.integrationMappings.createSlackIntegrationMapping({
  partnerItem: new IntegrationMappingPartnerItemSlack({
    id: partnerItemId,
    slackOrgId: slackOrgId,
  }),
  boxItem: new IntegrationMappingBoxItemSlack({ id: folder.id }),
} satisfies IntegrationMappingSlackCreateRequest);
```

### Arguments

- requestBody `IntegrationMappingSlackCreateRequest`
  - Request body of createSlackIntegrationMapping method
- headersInput `CreateSlackIntegrationMappingHeadersInput`
  - Headers of createSlackIntegrationMapping method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `IntegrationMapping`.

Returns the created integration mapping.

## Update Slack integration mapping

Updates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
Supports updating the Box folder ID and options.

You need Admin or Co-Admin role to
use this endpoint.

This operation is performed by calling function `updateSlackIntegrationMappingById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-integration-mappings-slack-id/).

_Currently we don't have an example for calling `updateSlackIntegrationMappingById` in integration tests_

### Arguments

- integrationMappingId `string`
  - An ID of an integration mapping Example: "11235432"
- requestBody `UpdateSlackIntegrationMappingByIdRequestBody`
  - Request body of updateSlackIntegrationMappingById method
- headersInput `UpdateSlackIntegrationMappingByIdHeadersInput`
  - Headers of updateSlackIntegrationMappingById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `IntegrationMapping`.

Returns the updated integration mapping object.

## Delete Slack integration mapping

Deletes a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).

You need Admin or Co-Admin role to
use this endpoint.

This operation is performed by calling function `deleteSlackIntegrationMappingById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-integration-mappings-slack-id/).

_Currently we don't have an example for calling `deleteSlackIntegrationMappingById` in integration tests_

### Arguments

- integrationMappingId `string`
  - An ID of an integration mapping Example: "11235432"
- headersInput `DeleteSlackIntegrationMappingByIdHeadersInput`
  - Headers of deleteSlackIntegrationMappingById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `undefined`.

Empty body in response
