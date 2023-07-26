# DevicePinnersManager

## Get device pin

Retrieves information about an individual device pin.

This operation is performed by calling function `getDevicePinnerById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-device-pinners-id/).

*Currently we don't have an example for calling `getDevicePinnerById` in integration tests*

### Arguments

- devicePinnerId `string`
  - The ID of the device pin
  - Used as `device_pinner_id` in path `path` of the API call


### Returns

This function returns a value of type `DevicePinner`.

Returns information about a single device pin.


## Remove device pin

Deletes an individual device pin.

This operation is performed by calling function `deleteDevicePinnerById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-device-pinners-id/).

*Currently we don't have an example for calling `deleteDevicePinnerById` in integration tests*

### Arguments

- devicePinnerId `string`
  - The ID of the device pin
  - Used as `device_pinner_id` in path `path` of the API call


## List enterprise device pins

Retrieves all the device pins within an enterprise.

The user must have admin privileges, and the application
needs the &quot;manage enterprise&quot; scope to make this call.

This operation is performed by calling function `getEnterpriseDevicePinners`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-enterprises-id-device-pinners/).

*Currently we don't have an example for calling `getEnterpriseDevicePinners` in integration tests*

### Arguments

- enterpriseId `string`
  - The ID of the enterprise
  - Used as `enterprise_id` in path `path` of the API call
- queryParams `undefined | GetEnterpriseDevicePinnersQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `DevicePinners`.

Returns a list of device pins for a given enterprise.


