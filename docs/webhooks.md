# WebhooksManager

## List all webhooks

Returns all defined webhooks for the requesting application.

This API only returns webhooks that are applied to files or folders that are
owned by the authenticated user. This means that an admin can not see webhooks
created by a service account unless the admin has access to those folders, and
vice versa.

This operation is performed by calling function `getWebhooks`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-webhooks/).

<!-- sample get_webhooks -->
```ts
await client.webhooks.getWebhooks()
```

### Arguments

- queryParams `undefined | GetWebhooksQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `Webhooks`.

Returns a list of webhooks.


## Create webhook

Creates a webhook.

This operation is performed by calling function `createWebhook`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-webhooks/).

<!-- sample post_webhooks -->
```ts
await client.webhooks.createWebhook({ target: { id: folder.id, type: &quot;folder&quot; as CreateWebhookRequestBodyArgTargetFieldTypeField } satisfies CreateWebhookRequestBodyArgTargetField, address: &quot;https://example.com/new-webhook&quot;, triggers: [&quot;FILE.UPLOADED&quot;] } satisfies CreateWebhookRequestBodyArg)
```

### Arguments

- requestBody `CreateWebhookRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `Webhook`.

Returns the new webhook object.


## Get webhook

Retrieves a specific webhook

This operation is performed by calling function `getWebhookById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-webhooks-id/).

<!-- sample get_webhooks_id -->
```ts
await client.webhooks.getWebhookById(webhook.id)
```

### Arguments

- webhookId `string`
  - The ID of the webhook.
  - Used as `webhook_id` in path `path` of the API call


### Returns

This function returns a value of type `Webhook`.

Returns a webhook object


## Update webhook

Updates a webhook.

This operation is performed by calling function `updateWebhookById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-webhooks-id/).

<!-- sample put_webhooks_id -->
```ts
await client.webhooks.updateWebhookById(webhook.id, { address: &quot;https://example.com/updated-webhook&quot; } satisfies UpdateWebhookByIdRequestBodyArg)
```

### Arguments

- webhookId `string`
  - The ID of the webhook.
  - Used as `webhook_id` in path `path` of the API call
- requestBody `UpdateWebhookByIdRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `Webhook`.

Returns the new webhook object.


## Remove webhook

Deletes a webhook.

This operation is performed by calling function `deleteWebhookById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-webhooks-id/).

<!-- sample delete_webhooks_id -->
```ts
await client.webhooks.deleteWebhookById(webhook.id)
```

### Arguments

- webhookId `string`
  - The ID of the webhook.
  - Used as `webhook_id` in path `path` of the API call


