# MetadataTemplatesManager


- [Find metadata template by instance ID](#find-metadata-template-by-instance-id)
- [Get metadata template by name](#get-metadata-template-by-name)
- [Remove metadata template](#remove-metadata-template)
- [Get metadata template by ID](#get-metadata-template-by-id)
- [List all global metadata templates](#list-all-global-metadata-templates)
- [List all metadata templates for enterprise](#list-all-metadata-templates-for-enterprise)
- [Create metadata template](#create-metadata-template)

## Find metadata template by instance ID

Finds a metadata template by searching for the ID of an instance of the
template.

This operation is performed by calling function `getMetadataTemplates`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates/).

*Currently we don't have an example for calling `getMetadataTemplates` in integration tests*

### Arguments

- queryParams `GetMetadataTemplatesQueryParamsArg`
  - Query parameters of getMetadataTemplates method
- headers `GetMetadataTemplatesHeadersArg`
  - Headers of getMetadataTemplates method


### Returns

This function returns a value of type `MetadataTemplates`.

Returns a list containing the 1 metadata template that matches the
instance ID.


## Get metadata template by name

Retrieves a metadata template by its `scope` and `templateKey` values.

To find the `scope` and `templateKey` for a template, list all templates for
an enterprise or globally, or list all templates applied to a file or folder.

This operation is performed by calling function `getMetadataTemplateSchema`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-id-id-schema/).

*Currently we don't have an example for calling `getMetadataTemplateSchema` in integration tests*

### Arguments

- scope `GetMetadataTemplateSchemaScopeArg`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- headers `GetMetadataTemplateSchemaHeadersArg`
  - Headers of getMetadataTemplateSchema method


### Returns

This function returns a value of type `MetadataTemplate`.

Returns the metadata template matching the `scope`
and `template` name.


## Remove metadata template

Delete a metadata template and its instances.
This deletion is permanent and can not be reversed.

This operation is performed by calling function `deleteMetadataTemplateSchema`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-metadata-templates-id-id-schema/).

*Currently we don't have an example for calling `deleteMetadataTemplateSchema` in integration tests*

### Arguments

- scope `DeleteMetadataTemplateSchemaScopeArg`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- headers `DeleteMetadataTemplateSchemaHeadersArg`
  - Headers of deleteMetadataTemplateSchema method


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the metadata
template is successfully deleted.


## Get metadata template by ID

Retrieves a metadata template by its ID.

This operation is performed by calling function `getMetadataTemplateById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-id/).

*Currently we don't have an example for calling `getMetadataTemplateById` in integration tests*

### Arguments

- templateId `string`
  - The ID of the template Example: "f7a9891f"
- headers `GetMetadataTemplateByIdHeadersArg`
  - Headers of getMetadataTemplateById method


### Returns

This function returns a value of type `MetadataTemplate`.

Returns the metadata template that matches the ID.


## List all global metadata templates

Used to retrieve all generic, global metadata templates available to all
enterprises using Box.

This operation is performed by calling function `getMetadataTemplateGlobal`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-global/).

*Currently we don't have an example for calling `getMetadataTemplateGlobal` in integration tests*

### Arguments

- queryParams `GetMetadataTemplateGlobalQueryParamsArg`
  - Query parameters of getMetadataTemplateGlobal method
- headers `GetMetadataTemplateGlobalHeadersArg`
  - Headers of getMetadataTemplateGlobal method


### Returns

This function returns a value of type `MetadataTemplates`.

Returns all of the metadata templates available to all enterprises
and their corresponding schema.


## List all metadata templates for enterprise

Used to retrieve all metadata templates created to be used specifically within
the user's enterprise

This operation is performed by calling function `getMetadataTemplateEnterprise`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-enterprise/).

*Currently we don't have an example for calling `getMetadataTemplateEnterprise` in integration tests*

### Arguments

- queryParams `GetMetadataTemplateEnterpriseQueryParamsArg`
  - Query parameters of getMetadataTemplateEnterprise method
- headers `GetMetadataTemplateEnterpriseHeadersArg`
  - Headers of getMetadataTemplateEnterprise method


### Returns

This function returns a value of type `MetadataTemplates`.

Returns all of the metadata templates within an enterprise
and their corresponding schema.


## Create metadata template

Creates a new metadata template that can be applied to
files and folders.

This operation is performed by calling function `createMetadataTemplateSchema`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-metadata-templates-schema/).

*Currently we don't have an example for calling `createMetadataTemplateSchema` in integration tests*

### Arguments

- requestBody `CreateMetadataTemplateSchemaRequestBodyArg`
  - Request body of createMetadataTemplateSchema method
- headers `CreateMetadataTemplateSchemaHeadersArg`
  - Headers of createMetadataTemplateSchema method


### Returns

This function returns a value of type `MetadataTemplate`.

The schema representing the metadata template created.


