# HubItemsManager

- [Get hub items](#get-hub-items)
- [Manage hub items](#manage-hub-items)

## Get hub items

Retrieves all items associated with a Hub.

This operation is performed by calling function `getHubItemsV2025R0`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/v2025.0/get-hub-items/).

_Currently we don't have an example for calling `getHubItemsV2025R0` in integration tests_

### Arguments

- queryParams `GetHubItemsV2025R0QueryParams`
  - Query parameters of getHubItemsV2025R0 method
- optionalsInput `GetHubItemsV2025R0OptionalsInput`
  -

### Returns

This function returns a value of type `HubItemsV2025R0`.

Retrieves the items associated with the specified Hub.

## Manage hub items

Adds and/or removes Hub items from a Hub.

This operation is performed by calling function `createHubManageItemV2025R0`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/v2025.0/post-hubs-id-manage-items/).

_Currently we don't have an example for calling `createHubManageItemV2025R0` in integration tests_

### Arguments

- hubId `string`
  - The unique identifier that represent a hub. The ID for any hub can be determined by visiting this hub in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/hubs/123` the `hub_id` is `123`. Example: "12345"
- requestBody `HubItemsManageRequestV2025R0`
  - Request body of createHubManageItemV2025R0 method
- optionalsInput `CreateHubManageItemV2025R0OptionalsInput`
  -

### Returns

This function returns a value of type `HubItemsManageResponseV2025R0`.
