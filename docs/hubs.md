# HubsManager

- [List all hubs](#list-all-hubs)
- [List all hubs for requesting enterprise](#list-all-hubs-for-requesting-enterprise)
- [Get hub information by ID](#get-hub-information-by-id)
- [Delete hub](#delete-hub)

## List all hubs

Retrieves all hubs for requesting user.

This operation is performed by calling function `getHubsV2025R0`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/v2025.0/get-hubs/).

<!-- sample get_hubs_v2025.0 -->

```ts
await client.hubs.getHubsV2025R0({
  scope: 'all',
  sort: 'name',
  direction: 'ASC' as GetHubsV2025R0QueryParamsDirectionField,
} satisfies GetHubsV2025R0QueryParams);
```

### Arguments

- queryParams `GetHubsV2025R0QueryParams`
  - Query parameters of getHubsV2025R0 method
- headersInput `GetHubsV2025R0HeadersInput`
  - Headers of getHubsV2025R0 method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `HubsV2025R0`.

Returns all hubs for the given user or enterprise.

## List all hubs for requesting enterprise

Retrieves all hubs for a given enterprise.

Admins or Hub Co-admins of an enterprise
with GCM scope can make this call.

This operation is performed by calling function `getEnterpriseHubsV2025R0`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/v2025.0/get-enterprise-hubs/).

<!-- sample get_enterprise_hubs_v2025.0 -->

```ts
await client.hubs.getEnterpriseHubsV2025R0({
  sort: 'name',
  direction: 'ASC' as GetEnterpriseHubsV2025R0QueryParamsDirectionField,
} satisfies GetEnterpriseHubsV2025R0QueryParams);
```

### Arguments

- queryParams `GetEnterpriseHubsV2025R0QueryParams`
  - Query parameters of getEnterpriseHubsV2025R0 method
- headersInput `GetEnterpriseHubsV2025R0HeadersInput`
  - Headers of getEnterpriseHubsV2025R0 method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `HubsV2025R0`.

Returns all hubs for the given user or enterprise.

## Get hub information by ID

Retrieves details for a hub by its ID.

This operation is performed by calling function `getHubByIdV2025R0`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/v2025.0/get-hubs-id/).

<!-- sample get_hubs_id_v2025.0 -->

```ts
await client.hubs.getHubByIdV2025R0(userHub.id);
```

### Arguments

- hubId `string`
  - The unique identifier that represent a hub. The ID for any hub can be determined by visiting this hub in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/hubs/123` the `hub_id` is `123`. Example: "12345"
- optionalsInput `GetHubByIdV2025R0OptionalsInput`
  -

### Returns

This function returns a value of type `HubV2025R0`.

Returns a hub object.

## Delete hub

Deletes a single hub.

This operation is performed by calling function `deleteHubByIdV2025R0`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/v2025.0/delete-hubs-id/).

<!-- sample delete_hubs_id_v2025.0 -->

```ts
await client.hubs.deleteHubByIdV2025R0(hub.id);
```

### Arguments

- hubId `string`
  - The unique identifier that represent a hub. The ID for any hub can be determined by visiting this hub in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/hubs/123` the `hub_id` is `123`. Example: "12345"
- optionalsInput `DeleteHubByIdV2025R0OptionalsInput`
  -

### Returns

This function returns a value of type `undefined`.

A blank response is returned if the hub was
successfully deleted.
