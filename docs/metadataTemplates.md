# MetadataTemplatesManager

## Find metadata template by instance ID

Finds a metadata template by searching for the ID of an instance of the
template.

This operation is performed by calling function `getMetadataTemplates`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates/).

*Currently we don't have an example for calling `getMetadataTemplates` in integration tests*

### Arguments

- queryParams `GetMetadataTemplatesQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `MetadataTemplates`.

Returns a list containing the 1 metadata template that matches the
instance ID.


## Get metadata template by name

Retrieves a metadata template by its &#x60;scope&#x60; and &#x60;templateKey&#x60; values.

To find the &#x60;scope&#x60; and &#x60;templateKey&#x60; for a template, list all templates for
an enterprise or globally, or list all templates applied to a file or folder.

This operation is performed by calling function `getMetadataTemplateSchema`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-id-id-schema/).

*Currently we don't have an example for calling `getMetadataTemplateSchema` in integration tests*

### Arguments

- scope `GetMetadataTemplateSchemaScopeArg`
  - The scope of the metadata template
  - Used as `scope` in path `path` of the API call
- templateKey `string`
  - The name of the metadata template
  - Used as `template_key` in path `path` of the API call


### Returns

This function returns a value of type `MetadataTemplate`.

Returns the metadata template matching the &#x60;scope&#x60;
and &#x60;template&#x60; name.


## Remove metadata template

Delete a metadata template and its instances.
This deletion is permanent and can not be reversed.

This operation is performed by calling function `deleteMetadataTemplateSchema`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-metadata-templates-id-id-schema/).

*Currently we don't have an example for calling `deleteMetadataTemplateSchema` in integration tests*

### Arguments

- scope `DeleteMetadataTemplateSchemaScopeArg`
  - The scope of the metadata template
  - Used as `scope` in path `path` of the API call
- templateKey `string`
  - The name of the metadata template
  - Used as `template_key` in path `path` of the API call


## Get metadata template by ID

Retrieves a metadata template by its ID.

This operation is performed by calling function `getMetadataTemplateById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-id/).

*Currently we don't have an example for calling `getMetadataTemplateById` in integration tests*

### Arguments

- templateId `string`
  - The ID of the template
  - Used as `template_id` in path `path` of the API call


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
  - Used as queryParams for the API call


### Returns

This function returns a value of type `MetadataTemplates`.

Returns all of the metadata templates available to all enterprises
and their corresponding schema.


## List all metadata templates for enterprise

Used to retrieve all metadata templates created to be used specifically within
the user&#x27;s enterprise

This operation is performed by calling function `getMetadataTemplateEnterprise`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-enterprise/).

*Currently we don't have an example for calling `getMetadataTemplateEnterprise` in integration tests*

### Arguments

- queryParams `GetMetadataTemplateEnterpriseQueryParamsArg`
  - Used as queryParams for the API call


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
  - Used as requestBody for the API call


### Returns

This function returns a value of type `MetadataTemplate`.

The schema representing the metadata template created.


