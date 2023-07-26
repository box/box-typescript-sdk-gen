# SignTemplatesManager

## List Box Sign templates

Gets Box Sign templates created by a user.

This operation is performed by calling function `getSignTemplates`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-sign-templates/).

*Currently we don't have an example for calling `getSignTemplates` in integration tests*

### Arguments

- queryParams `undefined | GetSignTemplatesQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `SignTemplates`.

Returns a collection of templates.


## Get Box Sign template by ID

Fetches details of a specific Box Sign template.

This operation is performed by calling function `getSignTemplateById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-sign-templates-id/).

*Currently we don't have an example for calling `getSignTemplateById` in integration tests*

### Arguments

- templateId `string`
  - The ID of a Box Sign template.
  - Used as `template_id` in path `path` of the API call


### Returns

This function returns a value of type `SignTemplate`.

Returns details of a template.


