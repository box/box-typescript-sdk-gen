# MetadataTemplatesManager

- [Find metadata template by instance ID](#find-metadata-template-by-instance-id)
- [Get metadata template by name](#get-metadata-template-by-name)
- [Update metadata template](#update-metadata-template)
- [Remove metadata template](#remove-metadata-template)
- [Get metadata template by ID](#get-metadata-template-by-id)
- [List all global metadata templates](#list-all-global-metadata-templates)
- [List all metadata templates for enterprise](#list-all-metadata-templates-for-enterprise)
- [Create metadata template](#create-metadata-template)

## Find metadata template by instance ID

Finds a metadata template by searching for the ID of an instance of the
template.

This operation is performed by calling function `getMetadataTemplatesByInstanceId`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates/).

<!-- sample get_metadata_templates -->

```ts
await client.metadataTemplates.getMetadataTemplatesByInstanceId({
  metadataInstanceId: createdMetadataInstance.id!,
} satisfies GetMetadataTemplatesByInstanceIdQueryParams);
```

### Arguments

- queryParams `GetMetadataTemplatesByInstanceIdQueryParams`
  - Query parameters of getMetadataTemplatesByInstanceId method
- headers `GetMetadataTemplatesByInstanceIdHeaders`
  - Headers of getMetadataTemplatesByInstanceId method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataTemplates`.

Returns a list containing the 1 metadata template that matches the
instance ID.

## Get metadata template by name

Retrieves a metadata template by its `scope` and `templateKey` values.

To find the `scope` and `templateKey` for a template, list all templates for
an enterprise or globally, or list all templates applied to a file or folder.

This operation is performed by calling function `getMetadataTemplate`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-id-id-schema/).

<!-- sample get_metadata_templates_id_id_schema -->

```ts
await client.metadataTemplates.getMetadataTemplate(
  'enterprise' as GetMetadataTemplateScope,
  template.templateKey!
);
```

### Arguments

- scope `GetMetadataTemplateScope`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- headers `GetMetadataTemplateHeaders`
  - Headers of getMetadataTemplate method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataTemplate`.

Returns the metadata template matching the `scope`
and `template` name.

## Update metadata template

Updates a metadata template.

The metadata template can only be updated if the template
already exists.

The update is applied atomically. If any errors occur during the
application of the operations, the metadata template will not be changed.

This operation is performed by calling function `updateMetadataTemplate`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-metadata-templates-id-id-schema/).

<!-- sample put_metadata_templates_id_id_schema -->

```ts
await client.metadataTemplates.updateMetadataTemplate(
  'enterprise' as UpdateMetadataTemplateScope,
  templateKey,
  [
    {
      op: 'addField' as UpdateMetadataTemplateRequestBodyOpField,
      fieldKey: 'newfieldname',
      data: { ['type']: 'string', ['displayName']: 'newFieldName' },
    } satisfies UpdateMetadataTemplateRequestBody,
  ]
);
```

### Arguments

- scope `UpdateMetadataTemplateScope`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- requestBody `readonly UpdateMetadataTemplateRequestBody[]`
  - Request body of updateMetadataTemplate method
- headers `UpdateMetadataTemplateHeaders`
  - Headers of updateMetadataTemplate method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataTemplate`.

Returns the updated metadata template, with the
custom template data included.

## Remove metadata template

Delete a metadata template and its instances.
This deletion is permanent and can not be reversed.

This operation is performed by calling function `deleteMetadataTemplate`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-metadata-templates-id-id-schema/).

<!-- sample delete_metadata_templates_id_id_schema -->

```ts
await client.metadataTemplates.deleteMetadataTemplate(
  'enterprise' as DeleteMetadataTemplateScope,
  template.templateKey
);
```

### Arguments

- scope `DeleteMetadataTemplateScope`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- headers `DeleteMetadataTemplateHeaders`
  - Headers of deleteMetadataTemplate method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the metadata
template is successfully deleted.

## Get metadata template by ID

Retrieves a metadata template by its ID.

This operation is performed by calling function `getMetadataTemplateById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-id/).

<!-- sample get_metadata_templates_id -->

```ts
await client.metadataTemplates.getMetadataTemplateById(template.id);
```

### Arguments

- templateId `string`
  - The ID of the template Example: "f7a9891f"
- headers `GetMetadataTemplateByIdHeaders`
  - Headers of getMetadataTemplateById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataTemplate`.

Returns the metadata template that matches the ID.

## List all global metadata templates

Used to retrieve all generic, global metadata templates available to all
enterprises using Box.

This operation is performed by calling function `getGlobalMetadataTemplates`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-global/).

<!-- sample get_metadata_templates_global -->

```ts
await client.metadataTemplates.getGlobalMetadataTemplates();
```

### Arguments

- queryParams `GetGlobalMetadataTemplatesQueryParams`
  - Query parameters of getGlobalMetadataTemplates method
- headers `GetGlobalMetadataTemplatesHeaders`
  - Headers of getGlobalMetadataTemplates method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataTemplates`.

Returns all of the metadata templates available to all enterprises
and their corresponding schema.

## List all metadata templates for enterprise

Used to retrieve all metadata templates created to be used specifically within
the user's enterprise

This operation is performed by calling function `getEnterpriseMetadataTemplates`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-enterprise/).

<!-- sample get_metadata_templates_enterprise -->

```ts
await client.metadataTemplates.getEnterpriseMetadataTemplates();
```

### Arguments

- queryParams `GetEnterpriseMetadataTemplatesQueryParams`
  - Query parameters of getEnterpriseMetadataTemplates method
- headers `GetEnterpriseMetadataTemplatesHeaders`
  - Headers of getEnterpriseMetadataTemplates method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataTemplates`.

Returns all of the metadata templates within an enterprise
and their corresponding schema.

## Create metadata template

Creates a new metadata template that can be applied to
files and folders.

This operation is performed by calling function `createMetadataTemplate`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-metadata-templates-schema/).

<!-- sample post_metadata_templates_schema -->

```ts
await client.metadataTemplates.createMetadataTemplate({
  scope: 'enterprise',
  displayName: templateKey,
  templateKey: templateKey,
  fields: [
    {
      type: 'float' as CreateMetadataTemplateRequestBodyFieldsTypeField,
      key: 'testName',
      displayName: 'testName',
    } satisfies CreateMetadataTemplateRequestBodyFieldsField,
  ],
} satisfies CreateMetadataTemplateRequestBody);
```

### Arguments

- requestBody `CreateMetadataTemplateRequestBody`
  - Request body of createMetadataTemplate method
- headers `CreateMetadataTemplateHeaders`
  - Headers of createMetadataTemplate method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `MetadataTemplate`.

The schema representing the metadata template created.
